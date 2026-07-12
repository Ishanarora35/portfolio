// -----------------------------------------------------------------------------
// Skills, grouped by category and rendered as badges.
// Add or remove skills freely; new categories appear automatically.
// -----------------------------------------------------------------------------

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "C"],
  },
  {
    category: "Embedded Systems",
    items: [
      "ESP32",
      "Arduino",
      "sEMG / EMG Signal Processing",
      "Servo Control",
      "Sensor Integration",
    ],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Git", "GitHub"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Arduino IDE", "SolidWorks", "Photoshop"],
  },
];
