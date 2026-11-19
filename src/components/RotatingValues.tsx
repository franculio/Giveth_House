import PrismCycle from "./PrismCycle";

interface Value {
  title: string;
  note: string;
  /** Name of a brand colour token, e.g. "dandelion" (--color-dandelion). */
  bg: string;
  /** Name of the text colour token, e.g. "ink" or "white". */
  fg: string;
}

interface RotatingValuesProps {
  values: Value[];
  interval?: number;
  startDelay?: number;
  directionOffset?: number;
}

/**
 * A block that turns on itself through the values of the house. Each face has
 * its own colour and a short explanation in brackets. It is hidden from
 * screen readers: the full list is provided separately as visually hidden text.
 */
export default function RotatingValues({ values, interval, startDelay, directionOffset }: RotatingValuesProps) {
  const faces = values.map((v) => ({
    key: v.title,
    content: (
      <div
        aria-hidden="true"
        className="w-full h-full p-4 md:p-6 flex flex-col justify-between gap-4"
        style={{ backgroundColor: `var(--color-${v.bg})`, color: `var(--color-${v.fg})` }}
      >
        <span className="text-[13px] md:text-[15px] leading-snug max-w-sm">{v.note}</span>
        <span
          className="font-display font-bold leading-none"
          style={{ fontSize: "clamp(2rem, 5.2vw, 4.5rem)" }}
        >
          {v.title}
        </span>
      </div>
    ),
  }));

  return <PrismCycle faces={faces} interval={interval} startDelay={startDelay} directionOffset={directionOffset} />;
}
