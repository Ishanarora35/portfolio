"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "scale";

const offset: Record<Dir, { x?: number; y?: number; scale?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.94 },
};

export default function Reveal({
  children,
  delay = 0,
  dir = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  dir?: Dir;
  className?: string;
}) {
  const from = offset[dir];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
