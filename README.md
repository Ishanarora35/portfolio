# Ishan Arora — Portfolio

A clean, modern, dark-mode portfolio website for a Computer Science student applying to software engineering internships. Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

**Live pages:** Home · About · Projects (with individual project pages) · Experience · Skills · Resume · Contact

---

## Tech stack

- **Next.js 14** (App Router) — routing, static generation, SEO
- **React 18** + **TypeScript** — type-safe components everywhere
- **Tailwind CSS** — utility-first styling, dark mode by default
- **Framer Motion** — subtle, tasteful scroll/enter animations
- **Lucide React** — lightweight icons

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

Requires **Node.js 18.17+** (Node 20 recommended).

---

## Project structure

```
ishan-portfolio/
├── public/
│   ├── resume.pdf              # Your resume (swap this file to update it)
│   └── projects/              # Project images (SVG placeholders included)
├── src/
│   ├── app/                   # Pages (App Router)
│   │   ├── layout.tsx         # Root layout: navbar, footer, metadata, theme
│   │   ├── page.tsx           # Home
│   │   ├── about/             # About
│   │   ├── projects/          # Projects list
│   │   │   └── [slug]/        # Individual project pages (auto-generated)
│   │   ├── experience/        # Experience timeline
│   │   ├── skills/            # Skills badges
│   │   ├── resume/            # Embedded PDF viewer
│   │   ├── contact/           # Contact info + form
│   │   ├── sitemap.ts         # Auto SEO sitemap
│   │   └── robots.ts          # Auto robots.txt
│   ├── components/            # Reusable UI (Navbar, Footer, Hero, cards, etc.)
│   └── data/                  # ← ALL YOUR CONTENT LIVES HERE
│       ├── site.ts            # Name, links, email, résumé path, intro
│       ├── projects.ts        # Projects (cards + detail pages)
│       ├── experience.ts      # Education, work, leadership, volunteer, awards
│       └── skills.ts          # Skill categories and badges
├── tailwind.config.ts         # Theme colors (accent, surface)
└── next.config.mjs
```

---

## How to update your site

Everything you'll normally edit is in **`src/data/`** — you rarely need to touch components.

### Change your name, links, or intro
Edit `src/data/site.ts`. Your GitHub, LinkedIn, and email are already set.

### Add a new project
Open `src/data/projects.ts`, copy an existing project object, and change the fields:

```ts
{
  slug: "my-new-project",        // unique — becomes the URL /projects/my-new-project
  title: "My New Project",
  summary: "One-line card description.",
  description: "Longer intro shown on the detail page.",
  image: "/projects/my-image.svg", // drop the file in public/projects/
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",  // optional
  demo: "https://...",               // optional
  featured: true,                    // show on the home page
  category: "Web",
  year: "2026",
  // Optional rich detail sections — leave any out and they're skipped:
  overview: "...", problem: "...", solution: "...",
  features: ["..."], challenges: ["..."], lessons: ["..."], future: ["..."],
}
```

A card and a full detail page are generated automatically.

### Add experience, awards, or skills
Edit `src/data/experience.ts` or `src/data/skills.ts` — add items to any group, or add a whole new group. The pages render whatever is in the data.

### Update your resume
Replace `public/resume.pdf` with your latest file (keep the same name). It updates the Resume page and the download button everywhere.

### Change the accent color
Edit the `accent` color in `tailwind.config.ts`.

---

## Future expansion

The structure is designed so you can add sections without changing the architecture:
add a `blog/` route and a `data/posts.ts`, an `awards` array, certifications, hackathons,
or internship entries — all follow the same data-driven pattern.

---

## Deployment

See **DEPLOYMENT.md** for a step-by-step guide (Vercel recommended — free and made for Next.js).

---

Built by Ishan Arora. Fresno, California.
