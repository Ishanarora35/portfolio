// -----------------------------------------------------------------------------
// Central site configuration.
// Update the values here and they propagate across the whole site.
// -----------------------------------------------------------------------------

export const site = {
  name: "Ishan Arora",
  role: "Computer Science Student | Software Engineer | Problem Solver",
  // Update this to your deployed domain (used for SEO metadata + sitemap).
  url: "https://ishanarora.com",
  email: "arora.ishan2006@gmail.com",
  github: "https://github.com/Ishanarora35",
  linkedin: "https://www.linkedin.com/in/ishanaroraaa/",
  // Resume PDF lives in /public. Swap the file to update it everywhere.
  resume: "/resume.pdf",
  location: "Fresno, California",
  tagline:
    "Computer Science student building software, exploring AI and embedded systems, and creating projects that solve real problems.",
  intro:
    "I'm a Computer Science student at Clovis Community College's Honors Program, preparing to transfer to UC Merced for Computer Science & Engineering. I enjoy building software, solving engineering problems, and learning new technologies — from full-stack web apps to embedded systems and research.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;
