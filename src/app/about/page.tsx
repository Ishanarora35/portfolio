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
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-muted">
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
            <Block title="Why Computer Science">
              <p>
                I chose Computer Science because it sits right where curiosity
                meets impact — it lets me take an idea and turn it into something
                real that people can actually use. I&apos;m especially drawn to
                the point where software meets hardware: writing code that reads
                a muscle signal, moves a motor, or lets a robot talk to its
                operator is the kind of problem that keeps me hooked.
              </p>
            </Block>

            <Block title="What I Enjoy Building">
              <p>
                I like projects that combine several disciplines. As software
                lead on a low-cost myoelectric prosthetic hand, I built the
                signal-processing and motor-control pipeline that turns forearm
                muscle (EMG) signals into finger movement. On our MATE ROV team I
                built the MQTT communication layer that lets operators control an
                underwater robot in real time. Alongside the hardware work, I
                enjoy full-stack projects and research — like my honors study on
                how algorithms shape political polarization.
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

            <Block title="Current Goals & What I'm Learning">
              <p>
                Right now I&apos;m focused on landing a software engineering
                internship, transferring successfully to UC Merced, and
                strengthening my fundamentals — Python, C++, and data structures
                and algorithms — while continuing to build embedded and
                full-stack projects that stretch me.
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
            <div className="rounded-xl border border-line bg-card p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
                Quick facts
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Location", "Fresno, California"],
                  ["School", "Clovis Community College (Honors)"],
                  ["Transferring to", "UC Merced — CS & Engineering"],
                  ["GPA", "3.71 · Dean's List"],
                  ["Focus", "Software · Robotics · Embedded"],
                  ["Status", "Seeking internships"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium text-ink">{v}</dd>
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
