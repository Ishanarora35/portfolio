"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import Button from "./Button";
import Section from "./Section";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <Section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
      >
        {site.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
      >
        Hi, I&apos;m Ishan Arora
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 text-lg font-medium text-slate-300 sm:text-xl"
      >
        {site.role}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400"
      >
        {site.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <Button href="/projects">
          View Projects <ArrowRight size={16} />
        </Button>
        <Button href="/resume" variant="secondary">
          <FileText size={16} /> Resume
        </Button>
        <Button href={site.github} variant="secondary" external>
          <Github size={16} /> GitHub
        </Button>
        <Button href={site.linkedin} variant="secondary" external>
          <Linkedin size={16} /> LinkedIn
        </Button>
      </motion.div>
    </Section>
  );
}
