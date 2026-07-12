// -----------------------------------------------------------------------------
// Central site configuration.
// Update the values here and they propagate across the whole site.
// -----------------------------------------------------------------------------

export const site = {
  name: "Ishan Arora",
  role: "Computer Science student building software, robotics, and embedded systems.",
  // Update this to your deployed domain (used for SEO metadata + sitemap).
  url: "https://ishanarora.com",
  email: "arora.ishan2006@gmail.com",
  github: "https://github.com/Ishanarora35",
  linkedin: "https://www.linkedin.com/in/ishanaroraaa/",
  // Resume PDF lives in /public. Swap the file to update it everywhere.
  resume: "/resume.pdf",
  // Hero photo. Drop a real photo at public/headshot.jpg (or .png) and update this path.
  headshot: "/headshot.svg",
  location: "Fresno, California",
  tagline:
    "Computer Science student building software, robotics, and embedded systems, and looking for internship opportunities.",
  intro:
    "Hi, I'm Ishan — a Computer Science student at Clovis Community College interested in software engineering, robotics, embedded systems, and AI. I love building projects that combine hardware and software to solve real-world problems.",
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

// Short "what I'm doing right now" list shown on the home page.
export const now: string[] = [
  "Serving as software lead on an EMG-controlled bionic prosthetic hand.",
  "Deepening my Python and C++ and studying data structures & algorithms.",
  "Preparing to transfer to UC Merced for Computer Science & Engineering.",
  "Looking for software engineering internships.",
];

// Academic + project journey, rendered as a timeline on the home page.
export type JourneyItem = { year: string; title: string; detail: string };

export const journey: JourneyItem[] = [
  {
    year: "2024",
    title: "Started at Clovis Community College",
    detail: "Enrolled in the Leon S. Peters Honors Program studying Computer Science.",
  },
  {
    year: "2024",
    title: "Membership Chair — ACM",
    detail: "Joined the Association for Computing Machinery and grew membership across the college.",
  },
  {
    year: "2025",
    title: "Co-founded the Society of Physics & Math Legends",
    detail: "Founding member and treasurer, managing fundraising and events.",
  },
  {
    year: "2025",
    title: "Software Lead — Myoelectric Prosthetic Hand",
    detail: "Led the signal-processing and motor-control software for a low-cost EMG bionic hand.",
  },
  {
    year: "2025",
    title: "MATE ROV International Competition",
    detail: "Built the ROV-to-operator communications system using MQTT.",
  },
  {
    year: "2026",
    title: "Honors Research Symposium",
    detail: "Presented \"The Algorithm Behind the Divide\" at the Central Valley Honors Research Symposium.",
  },
  {
    year: "2026",
    title: "Transferring to UC Merced",
    detail: "Continuing in Computer Science & Engineering.",
  },
];
