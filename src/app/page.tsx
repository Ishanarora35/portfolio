import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { site } from "@/data/site";

export default function Home() {
  const eduGroup = experience.find((g) => g.id === "education");
  const primarySkills = skills.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <Section className="py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work"
            description="A few projects that show what I've been building and researching."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/projects" variant="secondary">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Skills */}
      <Section className="py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
          />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2">
          {primarySkills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div>
                <h3 className="mb-3 text-sm font-medium text-muted">
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
        <div className="mt-10">
          <Button href="/skills" variant="secondary">
            See all skills <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Experience snapshot */}
      <Section className="py-16">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Education & involvement" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              label: "Education",
              value: "CS @ Clovis Community College (Honors)",
              sub: "Transferring to UC Merced — CS & Engineering",
            },
            {
              icon: MapPin,
              label: "Based in",
              value: site.location,
              sub: "Open to internships",
            },
            {
              icon: Mail,
              label: "Contact",
              value: site.email,
              sub: "Let's build something",
            },
          ].map((card, i) => (
            <Reveal key={card.label} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-line bg-card p-5">
                <card.icon className="mb-3 text-accent" size={20} />
                <p className="text-xs uppercase tracking-wide text-muted">
                  {card.label}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-muted">{card.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/experience" variant="secondary">
            View full experience <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="py-16">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-card px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              I&apos;m looking for software engineering internships and always
              happy to talk about interesting projects.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/contact">
                Get in touch <ArrowRight size={16} />
              </Button>
              <Button href="/resume" variant="secondary">
                View résumé
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
