// -----------------------------------------------------------------------------
// Experience data, grouped into sections rendered as timelines.
// Add entries to any group, or add a whole new group, without touching the page.
// -----------------------------------------------------------------------------

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  tags?: string[];
};

export type ExperienceGroup = {
  id: string;
  heading: string;
  items: TimelineItem[];
};

export const experience: ExperienceGroup[] = [
  {
    id: "education",
    heading: "Education",
    items: [
      {
        title: "Associate's in Computer Science — Honors Program",
        org: "Clovis Community College",
        period: "Expected 2026",
        location: "Fresno, CA",
        points: [
          "Enrolled in the Leon S. Peters Honors Program, focused on preparing students for transfer to a four-year institution.",
          "GPA 3.71 — Dean's List and Phi Theta Kappa Honor Society member.",
          "Relevant coursework: Calculus III, Discrete Mathematics, plus Computer Science, Engineering, and Physics.",
          "Transferring to UC Merced to continue in Computer Science & Engineering.",
        ],
        tags: ["Honors Program", "GPA 3.71", "Dean's List", "Phi Theta Kappa"],
      },
      {
        title: "High School Diploma",
        org: "Clovis North High School",
        period: "Graduated June 2024",
        location: "Fresno, CA",
        points: [
          "GPA 3.75 unweighted / 4.0 weighted.",
          "10 AP courses including AP Computer Science A, AP Computer Science Principles, AP Statistics, and AP Physics 1.",
          "AP Scholar and National Society of High School Scholars inductee.",
        ],
        tags: ["AP Scholar", "10 AP Courses"],
      },
    ],
  },
  {
    id: "research",
    heading: "Research",
    items: [
      {
        title: "Honors Researcher & Symposium Presenter",
        org: "Central Valley Honors Research Symposium — FCC",
        period: "2026",
        points: [
          "Authored and presented \"The Algorithm Behind the Divide,\" an independent study on how social media algorithms contribute to political polarization among young voters.",
          "Presented at the Central Valley Honors Research Symposium at Fresno City College, representing the Society of Physics and Math Legends.",
          "Synthesized peer-reviewed studies, digital forum analysis, and a real-time case study into an evidence-based argument.",
        ],
        tags: ["Research", "Technical Writing", "Public Speaking"],
      },
    ],
  },
  {
    id: "experience",
    heading: "Work Experience",
    items: [
      {
        title: "STEM Tutor",
        org: "Clovis Community College",
        period: "Dec 2025 – Present",
        location: "Fresno, CA",
        points: [
          "Tutor students in STEM subjects at the college tutoring center.",
          "Foster a welcoming environment where students feel comfortable asking questions.",
        ],
        tags: ["Teaching", "STEM"],
      },
      {
        title: "Founder & CEO",
        org: "E-Commerce Pet Supplies Store",
        period: "Aug 2024 – Jan 2025",
        points: [
          "Founded and ran an online store selling pet-cleaning supplies, coordinating a small team of friends.",
          "Built the storefront, chose the product line, and ran advertising and social-media strategy.",
          "Reinvested revenue into advertising to test and refine customer acquisition.",
        ],
        tags: ["Entrepreneurship", "Web Development", "Marketing"],
      },
    ],
  },
  {
    id: "leadership",
    heading: "Leadership & Organizations",
    items: [
      {
        title: "Treasurer",
        org: "Society of Physics and Math Legends (Founding Member)",
        period: "2025 – Present",
        points: [
          "Founding member of a club focused on theoretical physics, calculus, and related subjects.",
          "As treasurer, manage fundraising and budgeting — raised ~$2,000 used for a physics event in Santa Cruz.",
          "Leading the setup of club merchandise, learning the commerce side hands-on.",
        ],
        tags: ["Leadership", "Finance"],
      },
      {
        title: "Membership Chair",
        org: "Association for Computing Machinery (ACM)",
        period: "2025 – Present",
        points: [
          "Responsible for growing club membership and interest across the college.",
          "Organized meetings and increased membership by 13 people.",
        ],
        tags: ["Leadership", "Community"],
      },
      {
        title: "Member — Programming Team",
        org: "Engineering Club",
        period: "2025",
        points: [
          "Competed in the international MATE ROV underwater-robotics competition.",
          "Personally built the ROV-to-operator communications system using MQTT.",
        ],
        tags: ["Robotics", "MQTT"],
      },
    ],
  },
  {
    id: "volunteer",
    heading: "Volunteer Experience",
    items: [
      {
        title: "Volunteer — Kitchen & Clothing Departments",
        org: "Poverello House",
        period: "2022 – Present",
        points: [
          "Dedicated 100+ hours serving people experiencing homelessness.",
          "Prepared and served food and distributed clothing and necessities.",
          "Earned a Food Handler's certificate to meet health and safety standards.",
          "Recognized with the President's Volunteer Service Award (Bronze).",
        ],
        tags: ["Community Service", "100+ Hours"],
      },
      {
        title: "Community Tutor",
        org: "Independent",
        period: "2022 – 2024",
        points: [
          "Provided 130+ hours of tutoring to students in the community.",
          "Assisted with homework, test prep, and academic support.",
        ],
        tags: ["Teaching", "130+ Hours"],
      },
    ],
  },
];

export type Award = { name: string; detail: string; level: string };

export const awards: Award[] = [
  { name: "President's Volunteer Service Award", level: "National", detail: "For 100+ hours of volunteer service at Poverello House." },
  { name: "Dean's List", level: "College", detail: "GPA above 3.5 with a full course load." },
  { name: "Phi Theta Kappa Honor Society", level: "National", detail: "Inducted for maintaining a cumulative GPA above 3.5." },
  { name: "AP Scholar", level: "National", detail: "Recognized for high performance across multiple AP exams." },
  { name: "MATE ROV Participation Award", level: "International", detail: "For competing in the international MATE ROV robotics competition." },
  { name: "National Society of High School Scholars", level: "National", detail: "Inducted for academic achievement and AP coursework." },
];
