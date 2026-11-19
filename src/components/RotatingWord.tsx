import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface Word {
  text: string;
  /** Name of a brand colour token, e.g. "dandelion" (--color-dandelion). */
  color: string;
  /**
   * When this word ends just short of the element marked `data-align-target`
   * (the "adds" block), widen the block so both right edges line up.
   * Measured at runtime because text widths do not scale evenly with size.
   */
  alignRight?: boolean;
}

interface RotatingWordProps {
  words: Word[];
  interval?: number;
}

// Only close the gap when it is a near miss. A bigger difference reads as a
// deliberate step between the two blocks.
const MAX_ALIGN_GAP_PX = 12;

/**
 * A framed block that turns on itself like a prism: the current word rolls
 * up and away while the next one rolls in from below. The frame is the same
 * thick stroke used for the other blocks and each word has its own brand
 * colour as background. All of them keep ink text at 4.2:1 or better, which
 * clears the 3:1 that large headline text needs.
 *
 * The first word is what renders on the server and for reduced-motion users.
 * Hidden from screen readers: the full sentence is provided separately as
 * visually hidden text.
 */
export default function RotatingWord({ words, interval = 2800 }: RotatingWordProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [extraPx, setExtraPx] = useState(0);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = setInterval(() => setIndex((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  const { text, color, alignRight = false } = words[index];

  // Line the right edge of this block up with the "adds" block when the word
  // ends a few pixels short of it. Layout widths (offsetWidth) are used for
  // the block so the turning animation does not disturb the measurement.
  useEffect(() => {
    if (!alignRight) {
      setExtraPx(0);
      return;
    }
    const measure = () => {
      const target = document.querySelector<HTMLElement>("[data-align-target]");
      const wrap = wrapRef.current;
      if (!target || !wrap) return;
      // While a word turns away its block stays in the DOM for a moment, so
      // pick the block of the current word instead of relying on a ref.
      const box = Array.from(wrap.querySelectorAll<HTMLElement>("[data-face]")).find(
        (el) => el.dataset.face === text,
      );
      if (!box) return;
      // Read the extra width that is actually painted on this block (it is
      // written to data-extra in the same render as the padding), so a
      // measurement taken before React has applied a new value cannot count
      // the same pixels twice.
      const applied = parseFloat(box.dataset.extra ?? "0") || 0;
      const naturalWidth = box.offsetWidth - applied;
      const gap = target.getBoundingClientRect().right - (wrap.getBoundingClientRect().left + naturalWidth);
      const next = gap > 0 && gap < MAX_ALIGN_GAP_PX ? gap : 0;
      if (Math.abs(next - applied) > 0.05) setExtraPx(next);
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [alignRight, text]);

  // The rotation axis sits half a block height behind the face, so two
  // neighbouring faces meet at a right angle, like the sides of a prism.
  return (
    <span
      ref={wrapRef}
      aria-hidden="true"
      className="relative inline-block align-baseline"
      // The negative margin makes this block's top border sit exactly on the
      // bottom border of the "adds" block above: one shared wall, as in the logo.
      style={{ perspective: "900px", marginTop: "-0.076em" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          data-face={text}
          data-extra={extraPx}
          className="inline-block border-[0.08em] border-ink"
          style={{
            backgroundColor: `var(--color-${color})`,
            paddingInline: `calc(0.14em + ${extraPx / 2}px)`,
            lineHeight: 0.95,
            transformOrigin: "50% 50% -0.55em",
            backfaceVisibility: "hidden",
          }}
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: 90 }}
          transition={{ duration: 0.6, ease: [0.3, 0.9, 0.3, 1] }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
