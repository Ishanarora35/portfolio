import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-surface-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
