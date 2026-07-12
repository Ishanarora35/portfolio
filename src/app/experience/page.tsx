import type { Metadata } from "next";
import { Award as AwardIcon } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import { experience, awards } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Education, research, leadership, work, and volunteer experience of Ishan Arora.",
};

export default function ExperiencePage() {
  return (
    <Section className="py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've learned and led"
          description="Education, research, leadership, work, and community service."
        />
      </Reveal>

      <div className="space-y-14">
        {experience.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.04}>
            <div>
              <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                {group.heading}
              </h2>
              <Timeline items={group.items} />
            </div>
          </Reveal>
        ))}

        {/* Awards */}
        <Reveal>
          <div>
            <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
              Awards & Honor Societies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {awards.map((award) => (
                <div
                  key={award.name}
                  className="flex gap-3 rounded-xl border border-line bg-card p-5"
                >
                  <AwardIcon className="mt-0.5 shrink-0 text-accent" size={18} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-ink">{award.name}</h3>
                      <span className="rounded bg-base px-1.5 py-0.5 text-xs text-muted">
                        {award.level}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{award.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
