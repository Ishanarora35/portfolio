"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating "back to top" button that fades in after scrolling down. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-muted shadow-md transition-colors hover:border-accent/50 hover:text-accent"
    >
      <ArrowUp size={18} />
    </button>
  );
}
