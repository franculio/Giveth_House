import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface Face {
  key: string;
  content: ReactNode;
}

interface PrismCycleProps {
  faces: Face[];
  interval?: number;
  /** Wait before the first turn, so several blocks do not turn together. */
  startDelay?: number;
  /** Shifts which direction the cycle starts with. */
  directionOffset?: number;
}

type Direction = "up" | "left" | "down" | "right";

// Each turn goes a different way, so the block keeps changing direction:
// up, left, down, right and round again.
const DIRECTIONS: Direction[] = ["up", "left", "down", "right"];

// The face that leaves rolls away in the direction of the turn and the next
// one rolls in from the opposite side.
const variants = {
  enter: (d: Direction) => ({
    rotateX: d === "up" ? -90 : d === "down" ? 90 : 0,
    rotateY: d === "left" ? 90 : d === "right" ? -90 : 0,
  }),
  center: { rotateX: 0, rotateY: 0 },
  exit: (d: Direction) => ({
    rotateX: d === "up" ? 90 : d === "down" ? -90 : 0,
    rotateY: d === "left" ? -90 : d === "right" ? 90 : 0,
  }),
};

/**
 * A block that turns on itself like a prism, the same gesture as the rotating
 * word in the headline, in all four directions, through any number of faces.
 * It fills its parent. The first face is what renders on the server and for
 * reduced-motion users.
 */
export default function PrismCycle({
  faces,
  interval = 3800,
  startDelay = 0,
  directionOffset = 0,
}: PrismCycleProps) {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [halfWidth, setHalfWidth] = useState(200);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion || faces.length < 2) return;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      setStep((n) => n + 1);
      id = setInterval(() => setStep((n) => n + 1), interval);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [reduceMotion, faces.length, interval, startDelay]);

  // The rotation axis sits half the block width behind the face. That is the
  // exact distance for a turn to the side, and for an up or down turn it makes
  // the face travel a little further, which the clipped block hides.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setHalfWidth(el.offsetWidth / 2);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const face = faces[step % faces.length];
  const direction = DIRECTIONS[(Math.max(step - 1, 0) + directionOffset) % DIRECTIONS.length];

  return (
    <div
      ref={boxRef}
      className="relative w-full h-full"
      style={{ perspective: "1400px", backgroundColor: "var(--color-ink)" }}
    >
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={face.key}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full"
          style={{
            backgroundColor: "var(--color-ink)",
            transformOrigin: `50% 50% ${-halfWidth}px`,
            backfaceVisibility: "hidden",
          }}
          transition={{ duration: 0.7, ease: [0.3, 0.9, 0.3, 1] }}
        >
          {face.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
