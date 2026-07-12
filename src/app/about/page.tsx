import type { Metadata } from "next";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ishan Arora — Computer Science student at Clovis Community College, transferring to UC Merced for CS & Engineering.",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-slate-400">
        {children}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Section className="py-16">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="A little about me"
          description="Computer Science student, builder, and lifelong learner from Fresno, California."
        />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-8">
            <Block title="Background">
              <p>
                My name is Ishan Arora, and I&apos;m a Computer Science student
                driven by a genuine curiosity for how things work — from the
                software that runs our lives to the embedded systems that bridge
                code and the physical world. I care about building things that
                are useful, and I like problems that sit at the intersection of
                several disciplines.
              </p>
              <p>
                Outside of coursework, I&apos;ve founded and run a small
                e-commerce business, led clubs, competed in international
                robotics, published honors research, and volunteered 100+ hours
                serving my community. I try to bring the same curiosity and
                follow-through to everything I take on.
              </p>
            </Block>

            <Block title="Education">
              <p>
                I&apos;m pursuing an Associate&apos;s degree in Computer Science
                at Clovis Community College, where I&apos;m part of the Leon S.
                Peters Honors Program (GPA 3.71, Dean&apos;s List, Phi Theta
                Kappa). My coursework spans Calculus III, Discrete Mathematics,
                and core computer science, engineering, and physics.
              </p>
              <p>
                I&apos;m transferring to UC Merced to continue studying Computer
                Science &amp; Engineering, where I plan to go deeper into
                software systems, AI, and embedded computing.
              </p>
            </Block>

            <Block title="Technical Interests">
              <p>
                I&apos;m most excited by software engineering, artificial
                intelligence, embedded systems, and the kind of full-stack work
                that turns an idea into something people can actually use. My
                honors research on algorithmic systems and my work as software
                lead on a myoelectric prosthetic both reflect that pull toward
                systems that connect computation to real human impact.
              </p>
            </Block>

            <Block title="Current Goals & What I'm Learning">
              <p>
                Right now I&apos;m focused on landing a software engineering
                internship, transferring successfully to UC Merced, and
                deepening my skills in modern web development, data structures
                and algorithms, and machine learning. I&apos;m currently
                sharpening my TypeScript and React, exploring ML fundamentals,
                and continuing to build projects that stretch me.
              </p>
            </Block>

            <Block title="Career Aspirations">
              <p>
                Long term, I want to work as a software engineer building
                impactful products — and eventually contribute to technology
                that widens access, whether that&apos;s affordable hardware,
                better tools, or systems that serve people who are usually
                overlooked. This portfolio is my central home base, and
                I&apos;ll keep growing it throughout college.
              </p>
            </Block>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-400">
                Quick facts
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Location", "Fresno, California"],
                  ["School", "Clovis Community College (Honors)"],
                  ["Transferring to", "UC Merced — CS & Engineering"],
                  ["GPA", "3.71 · Dean's List"],
                  ["Focus", "Software · AI · Embedded"],
                  ["Status", "Seeking internships"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-slate-500">{k}</dt>
                    <dd className="text-right font-medium text-slate-200">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Button href="/experience" variant="secondary" className="w-full">
              See my full experience <ArrowRight size={16} />
            </Button>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
