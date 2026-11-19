import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  scale?: boolean;
  /** Optional, so the wrapper can itself be a grid item or fill its cell. */
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.8,
  scale = false,
  className,
  style,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: scale ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
