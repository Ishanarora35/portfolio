import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Lightbulb,
  Target,
  Wrench,
  ListChecks,
  TriangleAlert,
  GraduationCap,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import SkillBadge from "@/components/SkillBadge";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

function DetailBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-ink">
        <Icon size={18} className="text-accent" />
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <Section className="py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      <header className="mt-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
          {project.role && (
            <>
              <span aria-hidden>·</span>
              <span className="text-accent">{project.role}</span>
            </>
          )}
        </div>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <Button href={project.github} variant="secondary" external>
              <Github size={16} /> View Code
            </Button>
          )}
          {project.demo && (
            <Button href={project.demo} external>
              <ExternalLink size={16} /> Live Demo
            </Button>
          )}
        </div>
      </header>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-card">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_260px]">
        <div className="space-y-10">
          {project.overview && (
            <DetailBlock icon={Lightbulb} title="Overview">
              <p>{project.overview}</p>
            </DetailBlock>
          )}
          {project.problem && (
            <DetailBlock icon={Target} title="The Problem">
              <p>{project.problem}</p>
            </DetailBlock>
          )}
          {project.solution && (
            <DetailBlock icon={Wrench} title="The Solution">
              <p>{project.solution}</p>
            </DetailBlock>
          )}
          {project.features && project.features.length > 0 && (
            <DetailBlock icon={ListChecks} title="Key Features">
              <BulletList items={project.features} />
            </DetailBlock>
          )}
          {project.challenges && project.challenges.length > 0 && (
            <DetailBlock icon={TriangleAlert} title="Challenges">
              <BulletList items={project.challenges} />
            </DetailBlock>
          )}
          {project.lessons && project.lessons.length > 0 && (
            <DetailBlock icon={GraduationCap} title="Lessons Learned">
              <BulletList items={project.lessons} />
            </DetailBlock>
          )}
          {project.future && project.future.length > 0 && (
            <DetailBlock icon={Rocket} title="Future Improvements">
              <BulletList items={project.future} />
            </DetailBlock>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-card p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <SkillBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Button href="/projects" variant="ghost">
          <ArrowLeft size={16} /> Back to all projects
        </Button>
      </div>
    </Section>
  );
}
