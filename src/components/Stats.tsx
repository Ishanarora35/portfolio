"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { value: 3, suffix: "", label: "Featured builds" },
  { value: 100, suffix: "+", label: "Volunteer hours" },
  { value: 130, suffix: "+", label: "Tutoring hours" },
  { value: 10, suffix: "", label: "AP courses" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-line bg-card p-6 text-center">
          <p className="text-4xl font-bold text-gradient sm:text-5xl">
            <Counter to={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
