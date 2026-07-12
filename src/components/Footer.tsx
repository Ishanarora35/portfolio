import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { site, nav } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-line/70">
      <div className="mx-auto max-w-content px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-bold tracking-tight text-ink">
              Ishan Arora<span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Computer Science student and aspiring software engineer, building
              projects and looking for internship opportunities.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
            >
              {site.email} <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                Pages
              </p>
              <ul className="space-y-2">
                {nav.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                Social
              </p>
              <ul className="space-y-2">
                <li>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
                    <Mail size={14} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line/70 pt-6">
          <p className="text-sm text-muted">
            © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
