import { ArrowRight, FlaskConical, Rocket, Trophy, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import Tilt from "@/components/Tilt";
import { featuredProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import { now, journey } from "@/data/site";

const marqueeItems = [
  "Software Engineering",
  "Robotics",
  "Embedded Systems",
  "Artificial Intelligence",
  "Signal Processing",
  "Full-Stack",
  "3D Printing",
];

const beyond = [
  { icon: Trophy, tag: "Research", title: "Honors Research Symposium", body: "Authored & presented \"The Algorithm Behind the Divide\" on how recommendation algorithms drive political polarization — at the Central Valley Honors Research Symposium." },
  { icon: Sparkles, tag: "Leadership", title: "Clubs & Teams", body: "Membership Chair of ACM, founding Treasurer of the Society of Physics & Math Legends, and software lead on the Engineering Club's prosthetic-arm team." },
  { icon: Rocket, tag: "Community", title: "Giving Back", body: "100+ volunteer hours at Poverello House and 130+ hours tutoring — recognized with the President's Volunteer Service Award." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee items={marqueeItems} />


      {/* In the Lab — featured projects */}
      <Section className="py-24">
        <Reveal>
          <SectionHeading eyebrow="In the Lab" title="Things I've built" description="Hardware, software, and research projects where I turned an idea into something that runs." />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} dir={i % 2 === 0 ? "right" : "left"}>
              <Tilt>
                <ProjectCard project={project} />
              </Tilt>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/projects" variant="secondary">View all projects <ArrowRight size={16} /></Button>
        </div>
      </Section>

      {/* The Journey — timeline */}
      <Section className="py-24">
        <Reveal>
          <SectionHeading eyebrow="The Journey" title="How I got here" description="Milestones across school, clubs, research, and builds." />
        </Reveal>
        <div className="relative mt-4">
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-cyan to-lime md:left-1/2" />
          <div className="space-y-14 md:space-y-20">
            {journey.map((item, i) => (
              <Reveal key={i} dir={i % 2 === 0 ? "right" : "left"}>
                <div className="relative grid gap-4 md:grid-cols-2 md:gap-12">
                  <span aria-hidden className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-cyan bg-base shadow-[0_0_12px_rgb(var(--cyan)/0.6)] md:left-1/2 md:-translate-x-1/2" />
                  <div className={i % 2 === 0 ? "pl-8 md:pl-0 md:pr-12 md:text-right" : "pl-8 md:col-start-2 md:pl-12"}>
                    <span className="inline-block rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan">{item.year}</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* On the Horizon */}
      <Section className="py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal dir="right">
            <SectionHeading eyebrow="On the Horizon" title="What's next" description="Current builds, learning, and the road to UC Merced." />
          </Reveal>
          <Reveal dir="left" delay={0.05}>
            <ul className="space-y-4">
              {now.map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-line bg-card p-4 transition-colors hover:border-accent/50">
                  <FlaskConical className="mt-0.5 shrink-0 text-cyan" size={18} />
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Beyond the Build */}
      <Section className="py-24">
        <Reveal>
          <SectionHeading eyebrow="Beyond the Build" title="Leadership, research & impact" description="The work that happens around the code." />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {beyond.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06} dir="up">
              <Tilt className="h-full">
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/50">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <b.icon size={20} />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-cyan">{b.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* Skills — interactive grid */}
      <Section className="py-24">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="Skills & technologies" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} dir="up">
              <div className="h-full rounded-2xl border border-line bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="glow-tag cursor-default rounded-lg border border-line bg-base/60 px-3 py-1.5 text-sm text-ink">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="py-24">
        <Reveal dir="scale">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 text-center sm:px-12">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Let&apos;s build something</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-5xl">Have a project, a team, or an internship?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">I&apos;m looking for software engineering internships and always up for building something ambitious.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact">Get in touch <ArrowRight size={16} /></Button>
              <Button href="/resume" variant="secondary">View résumé</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
