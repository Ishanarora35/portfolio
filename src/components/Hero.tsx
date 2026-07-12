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
      {/* Subtle dotted texture + soft accent wash */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
      />

      <Section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for software engineering internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="max-w-3xl text-4xl font-bold leading-[1.03] tracking-tightest text-ink sm:text-6xl"
            >
              Hi, I&apos;m Ishan Arora
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-2xl text-lg font-medium text-ink"
            >
              {site.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-muted"
            >
              {site.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
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

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto w-full max-w-xs lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
              <Image
                src={site.headshot}
                alt="Ishan Arora"
                fill
                sizes="(max-width: 1024px) 320px, 400px"
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
