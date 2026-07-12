"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, ChevronDown } from "lucide-react";
import Button from "./Button";
import Section from "./Section";
import { site } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yCopy = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleName = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={ref} className="relative overflow-hidden border-b border-line/70">
      <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
      <motion.div style={{ y: yOrb1 }} aria-hidden className="pointer-events-none absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[140px]" />
      <motion.div style={{ y: yOrb2 }} aria-hidden className="pointer-events-none absolute top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan/15 blur-[150px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full bg-lime/10 blur-[150px]" />

      <svg aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1200 160">
        <motion.path d="M0 110 Q 150 60 300 110 T 600 110 T 900 110 T 1200 110" fill="none" stroke="rgb(var(--cyan))" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, ease: "easeInOut" }} />
        <motion.path d="M0 130 Q 150 90 300 130 T 600 130 T 900 130 T 1200 130" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }} />
      </svg>

      <Section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <motion.div style={{ y: yCopy }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Available for software engineering internships
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
              {site.location} · CS Student &amp; Builder
            </motion.p>

            <motion.h1 style={{ scale: scaleName }} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="origin-left text-6xl font-bold leading-[0.9] tracking-tightest sm:text-8xl">
              <span className="text-ink">Ishan</span>
              <br />
              <span className="text-gradient">Arora.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }} className="mt-7 max-w-xl text-xl font-semibold text-ink sm:text-2xl">
              Engineering the future: code, circuits, and real-world impact.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {site.intro}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/projects">Explore the Build <ArrowRight size={16} /></Button>
              <Button href="/resume" variant="secondary"><FileText size={16} /> Resume</Button>
              <Button href={site.github} variant="secondary" external><Github size={16} /> GitHub</Button>
              <Button href={site.linkedin} variant="secondary" external><Linkedin size={16} /> LinkedIn</Button>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yPortrait }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-tr from-accent/30 via-cyan/20 to-lime/20 blur-2xl" />
            <div className="animate-float relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-card shadow-2xl shadow-accent/10">
              <Image src={site.headshot} alt="Ishan Arora" fill sizes="(max-width: 1024px) 384px, 460px" className="object-cover" priority />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity: fade }} className="mt-14 flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <ChevronDown className="animate-bounce text-cyan" size={16} />
          Scroll to explore
        </motion.div>
      </Section>
    </div>
  );
}
