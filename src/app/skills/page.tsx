import type { Metadata } from "next";
import Section, { SectionHeading } from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Programming languages, frameworks, tools, and technologies Ishan Arora works with.",
};

export default function SkillsPage() {
  return (
    <Section className="py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="Grouped by category. I'm always adding to this as I learn."
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <div className="h-full rounded-xl border border-line bg-card p-6">
              <h3 className="mb-4 text-sm font-medium text-muted">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
