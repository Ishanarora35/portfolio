import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-raised transition-colors duration-200 hover:border-accent/50">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-surface"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
          <span>{project.category}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-lg font-semibold text-white">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface px-2 py-0.5 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-surface px-2 py-0.5 text-xs text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-surface-border pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-light"
          >
            Learn More <ArrowUpRight size={14} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
