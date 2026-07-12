"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

type Item = { label: string; emoji: string; note: string; color: string };

const items: Item[] = [
  { label: "Muay Thai", emoji: "🥊", note: "Training & sparring", color: "from-accent/30 to-cyan/20" },
  { label: "Robotics Competitions", emoji: "🤖", note: "MATE ROV & builds", color: "from-cyan/30 to-lime/20" },
  { label: "Startups & Tech", emoji: "🚀", note: "Reading & tinkering", color: "from-lime/30 to-accent/20" },
  { label: "3D Printing & Making", emoji: "🛠️", note: "Prototyping ideas", color: "from-accent/30 to-lime/20" },
  { label: "Community & Volunteering", emoji: "🤝", note: "Poverello House", color: "from-cyan/30 to-accent/20" },
];

export default function BeyondAcademics() {
  const [active, setActive] = useState<Item | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 350, damping: 30, mass: 0.4 });
  const y = useSpring(my, { stiffness: 350, damping: 30, mass: 0.4 });

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onMouseLeave={() => setActive(null)}
    >
      <ul className="divide-y divide-line/70 border-y border-line/70">
        {items.map((item) => (
          <li key={item.label}>
            <div
              onMouseEnter={() => setActive(item)}
              className="group flex cursor-default items-center justify-between py-6 transition-colors"
            >
              <span className="text-3xl font-bold tracking-tight text-muted transition-colors group-hover:text-gradient sm:text-5xl">
                {item.label}
              </span>
              <span className="text-sm uppercase tracking-widest text-muted opacity-0 transition-opacity group-hover:opacity-100">
                {item.note}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Cursor-following reveal card */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.label}
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-[130%] sm:block"
          >
            <div className={`flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-gradient-to-br ${active.color} bg-card/90 shadow-2xl shadow-accent/20 backdrop-blur`}>
              <span className="text-5xl">{active.emoji}</span>
              <span className="text-sm font-semibold text-ink">{active.label}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
