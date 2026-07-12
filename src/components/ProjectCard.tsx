import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_0_0_1px_rgb(var(--accent)/0.25),0_18px_50px_-12px_rgb(var(--accent)/0.35)]">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-card2"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full border border-cyan/40 bg-base/70 px-2.5 py-1 text-xs font-medium text-cyan backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted">
          <span>{project.year}</span>
          {project.role && (
            <>
              <span aria-hidden>·</span>
              <span className="text-lime">{project.role}</span>
            </>
          )}
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-ink">
          <Link href={`/projects/${project.slug}`} className="transition-colors group-hover:text-gradient">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="glow-tag rounded-full border border-line bg-base/60 px-2.5 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-accent transition-colors hover:text-cyan"
          >
            View Build <ArrowUpRight size={14} />
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-ink">
              <Github size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-ink">
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
