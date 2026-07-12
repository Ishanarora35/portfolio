"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import Button from "./Button";
import Section from "./Section";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-line/70">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-16 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
      />

      <Section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for software engineering internships
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
            >
              {site.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-6xl font-bold leading-[0.92] tracking-tightest text-ink sm:text-8xl"
            >
              Ishan
              <br />
              Arora
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg font-medium text-ink"
            >
              {site.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted"
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
          </div>

          {/* Right: large portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[28px] bg-accent/10 blur-2xl"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-card shadow-xl shadow-ink/5">
              <Image
                src={site.headshot}
                alt="Ishan Arora"
                fill
                sizes="(max-width: 1024px) 384px, 460px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
