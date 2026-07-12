import type { Metadata } from "next";
import Section, { SectionHeading } from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software, research, robotics, and entrepreneurship projects by Ishan Arora.",
};

export default function ProjectsPage() {
  return (
    <Section className="py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built and researched"
          description="From embedded biomechatronics to honors research and robotics communications — a look at my work across disciplines."
        />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
