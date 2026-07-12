import { ArrowRight, GraduationCap, MapPin, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { site, now, journey } from "@/data/site";

export default function Home() {
  const primarySkills = skills.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <Section className="py-20">
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

      {/* Currently */}
      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="Now" title="What I'm working on" />
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="space-y-4">
              {now.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-line bg-card p-4"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Journey timeline — spacious two-column layout */}
      <Section className="py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="How I got here"
            description="A timeline of my academic and project journey so far."
          />
        </Reveal>

        <div className="relative mt-4">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-1/2"
          />
          <div className="space-y-12 md:space-y-16">
            {journey.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 h-4 w-4 -translate-x-[0px] rounded-full border-2 border-accent bg-base md:left-1/2 md:-translate-x-1/2"
                  />
                  <div
                    className={`pl-8 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section className="py-20">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Technologies I work with" />
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
      <Section className="py-20">
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
                <p className="mt-1 text-sm font-medium text-ink">{card.value}</p>
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
      <Section className="py-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              I&apos;m looking for software engineering internships and always
              happy to talk about interesting projects.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
