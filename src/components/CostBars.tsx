import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

interface CostBarsProps {
  /** What the house needs each month, in euros. */
  total: number;
  /** What has been given so far this month, in euros. */
  donated: number;
  /** Colour of the given part. Dandelion by default, pink where the page talks about the economy. */
  accent?: "dandelion" | "tulip";
}

const EASE = [0.2, 0.8, 0.2, 1] as const;
const DURATION = 1.6;
// The second bar starts when the first one has finished filling
const SECOND_DELAY = DURATION + 0.2;

const format = (n: number) => `${Math.round(n).toLocaleString("en-US")} €`;

/** A number that counts up from zero once `start` is true. */
function CountUp({ to, start, delay = 0 }: { to: number; start: boolean; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(to);
      return;
    }
    if (!start) return;
    const controls = animate(0, to, {
      duration: DURATION,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [start, to, delay, reduceMotion]);

  return <>{format(value)}</>;
}

/**
 * Two separate bars that fill one after the other when they scroll into view:
 * first the turquoise one, what the house needs each month, and then the one
 * below, what has been given so far. Numbers count up as the bars grow.
 */
export default function CostBars({ total, donated, accent = "dandelion" }: CostBarsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const show = inView || !!reduceMotion;
  const pct = Math.min(100, (donated / total) * 100);

  const grow = (width: string, delay: number) => ({
    initial: { width: reduceMotion ? width : "0%" },
    animate: { width: show ? width : "0%" },
    transition: reduceMotion ? { duration: 0 } : { duration: DURATION, delay, ease: EASE },
  });

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`${format(donated)} given so far this month, out of the ${format(total)} the house needs each month`}
    >
      {/* What the house needs */}
      <div className="border-[length:var(--stroke)] border-white">
        <motion.div
          {...grow("100%", 0)}
          className="bg-aquamarine text-ink h-16 md:h-24 overflow-hidden flex items-center justify-between gap-4 px-4 md:px-6 whitespace-nowrap"
        >
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest">Every month</span>
          <span className="font-display font-extrabold leading-none" style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}>
            <CountUp to={total} start={show} />
          </span>
        </motion.div>
      </div>

      {/* What has been given so far */}
      <div className="mt-4 md:mt-5 border-[length:var(--stroke)] border-white">
        <div className="h-16 md:h-24 flex items-center gap-4 md:gap-6 overflow-hidden">
          <motion.div {...grow(`${pct}%`, SECOND_DELAY)} className={`h-full flex-none ${accent === "tulip" ? "bg-tulip" : "bg-dandelion"}`} />
          <span className="flex items-center md:items-baseline gap-3 whitespace-nowrap min-w-0">
            <span className={`font-display font-extrabold leading-none ${accent === "tulip" ? "text-tulip" : "text-dandelion"}`} style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}>
              <CountUp to={donated} start={show} delay={SECOND_DELAY} />
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-botticelli leading-tight whitespace-normal md:whitespace-nowrap">So far this month</span>
          </span>
        </div>
      </div>
    </div>
  );
}
