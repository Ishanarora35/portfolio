// -----------------------------------------------------------------------------
// Skills, grouped by category and rendered as badges.
// Add or remove skills freely; new categories appear automatically.
// -----------------------------------------------------------------------------

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Arduino"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "Responsive Design", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["REST APIs", "MQTT", "Node.js"],
  },
  {
    category: "Databases",
    items: ["SQL", "SQLite"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Git", "GitHub"],
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "sEMG / EMG Signal Processing", "Servo Control", "Sensor Integration"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Arduino IDE", "SolidWorks", "Photoshop"],
  },
];
