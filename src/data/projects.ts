// -----------------------------------------------------------------------------
// Projects data.
// To add a new project: copy an object, give it a unique `slug`, drop an image
// into /public/projects, and it automatically gets a card + its own detail page.
// Set `featured: true` to surface it on the home page.
// -----------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: string;
  year: string;
  // Detail-page sections (all optional — empty ones are skipped).
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  lessons?: string[];
  future?: string[];
  role?: string;
};

export const projects: Project[] = [
  {
    slug: "myoelectric-bionic-prosthesis",
    title: "Low-Cost Myoelectric Bionic Prosthesis",
    summary:
      "A sub-$500 3D-printed transradial prosthetic hand controlled by muscle (EMG) signals. I served as software lead, building the signal-processing pipeline.",
    description:
      "A functional bionic hand that reads forearm muscle signals and translates them into finger movement, bridging the gap between $20,000+ medical bionics and affordable, accessible prosthetics.",
    image: "/projects/prosthesis.svg",
    technologies: ["C++", "ESP32", "Arduino", "EMG / sEMG", "Signal Processing", "3D Printing", "SolidWorks"],
    github: "https://github.com/Ishanarora35",
    featured: true,
    category: "Embedded Systems / Biomechatronics",
    year: "2025",
    role: "Software Lead",
    overview:
      "As part of Clovis Community College's Engineering Renaissance program, our multidisciplinary team engineered a functional transradial (below-elbow) prosthetic prototype targeting a sub-$500 unit cost. The device leverages the body's natural electrical impulses generated during forearm muscle contraction, captured via surface electromyography (sEMG) sensors, to control a lightweight 3D-printed hand. I was the software lead responsible for the signal-processing and motor-control logic.",
    problem:
      "Conventional myoelectric prostheses cost between $25,000 and $80,000, creating an alarming financial barrier for the majority of the 1.2 million individuals living with limb loss. Existing low-cost alternatives solve the cost barrier but fail on intuitive control, because raw sEMG data is notoriously noisy and prone to accidental triggers. Without a stabilized signal-processing layer, these devices remain unreliable rather than functional tools.",
    solution:
      "We built a middle-ground device combining a lightweight PLA/PETG chassis, a tendon-driven hand, and single-channel sEMG control. On the software side, I implemented an exponential moving average (EMA) filter with a smoothing constant of 0.1 to stabilize the raw high-frequency voltage data, then used threshold-based logic to translate stabilized muscle intent into predictable motor movement — acting as a safety governor against accidental triggers.",
    features: [
      "Real-time sEMG signal acquisition from the brachioradialis and flexor muscle groups",
      "Exponential moving average (EMA) digital filter to suppress high-frequency noise",
      "Threshold-based motor control logic that prevents accidental actuation",
      "Tendon-driven 3D-printed hand with a human-like wraparound grip",
      "Modular, strap-based suspension system that adapts to limb-volume changes",
      "Fail-safe electrical architecture with subcircuit fusing and passive cooling",
    ],
    challenges: [
      "Raw EMG output is highly variable; tuning the EMA constant and sampling rate to balance responsiveness against noise took extensive experimentation.",
      "MyoWare sensors only read superficial muscles, making consistent, repeatable placement difficult across test sessions.",
      "Getting the Arduino IDE toolchain stable required tracking down a constant baud-rate mismatch that was corrupting readings.",
    ],
    lessons: [
      "How to turn messy real-world sensor data into a reliable control signal through digital filtering.",
      "The value of tight coordination between software, electrical, and mechanical sub-teams on an integrated system.",
      "Designing software as a safety layer, not just a feature layer, when hardware interacts with a human body.",
    ],
    future: [
      "Multi-channel EMG with pattern recognition for individual finger control",
      "Migrating from threshold logic to a lightweight ML classifier for gesture detection",
      "Higher-grade medical materials and regulatory alignment (FDA Class II, ISO 13485)",
    ],
  },
  {
    slug: "algorithm-behind-the-divide",
    title: "The Algorithm Behind the Divide — Honors Research",
    summary:
      "An honors research study on how social media recommendation algorithms contribute to political polarization among young voters, presented at the Central Valley Honors Research Symposium.",
    description:
      "A research paper analyzing the mechanisms behind engagement-driven recommendation algorithms, confirmation bias, and echo chambers, supported by peer-reviewed studies, digital forum analysis, and a real-time case study.",
    image: "/projects/research.svg",
    technologies: ["Research", "Data Analysis", "Technical Writing", "Digital Forum Analysis"],
    featured: true,
    category: "Research",
    year: "2026",
    role: "Author & Presenter",
    overview:
      "For the Leon S. Peters Honors Program, I authored and presented an independent research paper examining the extent to which social media algorithms contribute to political polarization among young voters in the United States. I presented this work at the Central Valley Honors Research Symposium at Fresno City College, representing the Society of Physics and Math Legends club.",
    problem:
      "Young voters increasingly consume political information through algorithmically curated feeds rather than traditional journalism — 43% of Americans under 30 get news from TikTok alone. These recommendation systems optimize for engagement over accuracy, which structurally amplifies emotionally charged, partisan content and reinforces confirmation bias.",
    solution:
      "I synthesized a decade of peer-reviewed research (Bail et al., the 2025 Science reranking experiment, Pew Research data, and TikTok algorithm audits) with a digital overview of young-adult forums and a real-time case study, building an evidence-based argument for how algorithms act as an accelerant on existing division.",
    features: [
      "Analysis of recommendation-algorithm incentive structures and the 'filter bubble' effect",
      "Digital forum analysis across Reddit and TikTok to capture authentic young-adult perspectives",
      "Evaluation of mixed and contradictory academic evidence for intellectual honesty",
      "A real-time case study of algorithmic misinformation dynamics",
      "A poster-ready summary distilling findings for a live symposium audience",
    ],
    challenges: [
      "Reconciling contradictory findings across computational versus survey-based studies.",
      "Distilling a 17-page research paper into a clear, poster-ready narrative for a general audience.",
    ],
    lessons: [
      "How to evaluate source quality and present evidence evenhandedly, including evidence that complicates the thesis.",
      "Communicating complex technical and social systems to a non-specialist audience.",
    ],
    future: [
      "Extending the analysis with an original dataset of scraped, anonymized public posts",
      "A companion data-visualization dashboard of the key statistics",
    ],
  },
  {
    slug: "mate-rov-communications",
    title: "MATE ROV — Underwater Robot Communications",
    summary:
      "Built the communications layer for an underwater ROV competing internationally in the MATE ROV competition, using MQTT to link the robot to the operator station.",
    description:
      "As part of the college Engineering Club programming team, I designed and implemented the messaging system that lets operators control the underwater robot in real time.",
    image: "/projects/rov.svg",
    technologies: ["Python", "MQTT", "Networking", "Robotics", "Real-Time Systems"],
    featured: true,
    category: "Robotics",
    year: "2025",
    role: "Programming Team — Communications",
    overview:
      "I was part of the Engineering Club's programming team for the MATE ROV competition, an international underwater-robotics event. My personal responsibility was establishing reliable communication between the ROV and our surface control device.",
    problem:
      "An underwater ROV needs low-latency, reliable two-way communication so operators can send control commands and receive telemetry in real time — over a tethered link, without dropped messages disrupting control.",
    solution:
      "I implemented an MQTT-based publish/subscribe messaging system connecting the robot to the operator station, writing the programs that handled command and telemetry topics and verifying the link stayed stable during operation.",
    features: [
      "MQTT publish/subscribe messaging between the ROV and the control station",
      "Real-time command dispatch and telemetry handling",
      "Programmatic verification that the communication link stayed reliable under load",
    ],
    challenges: [
      "Ensuring message reliability and low latency over the tethered connection.",
      "Coordinating the communications protocol with the control and hardware sub-teams.",
    ],
    lessons: [
      "Practical experience with pub/sub architecture and networked real-time systems.",
      "How communication reliability underpins everything else in a robotics stack.",
    ],
    future: [
      "Adding automatic reconnection and message-acknowledgement layers",
      "A telemetry dashboard for live diagnostics",
    ],
  },
  {
    slug: "ecommerce-pet-supplies",
    title: "E-Commerce Pet Supplies Store",
    summary:
      "Founded and ran an online store selling pet-cleaning supplies — built the website, chose the product line, and ran the advertising and social strategy end to end.",
    description:
      "A solo-founded e-commerce venture where I handled everything from building the storefront to product selection, marketing, and reinvesting revenue into advertising.",
    image: "/projects/ecommerce.svg",
    technologies: ["Web Development", "E-Commerce", "Digital Marketing", "Entrepreneurship"],
    featured: false,
    category: "Entrepreneurship",
    year: "2024",
    role: "Founder & CEO",
    overview:
      "I founded and operated an online store focused on pet-cleaning supplies, primarily pet brushes. I built the storefront myself and led every part of the business, working alongside a few friends whom I coordinated.",
    problem:
      "Turning an idea into a live, revenue-capable store meant building the site, sourcing products, and figuring out how to actually drive traffic and convert customers — all on a small budget.",
    solution:
      "I built the store's website, curated the product catalog, selected advertising channels and social platforms, and ran the campaigns. Revenue from each sale was reinvested into advertising to test what worked.",
    features: [
      "Custom-built storefront",
      "Curated product catalog focused on a clear niche",
      "Paid advertising and social-media traffic strategy",
      "Revenue reinvestment loop to test and scale ad spend",
    ],
    challenges: [
      "Acquiring customers cost-effectively as a new store with limited budget.",
      "Balancing the venture with a full college course load.",
    ],
    lessons: [
      "The realities of customer acquisition, unit economics, and marketing ROI.",
      "End-to-end ownership: from building the product to selling it.",
    ],
    future: [
      "Rebuild on a modern headless-commerce stack",
      "Add analytics-driven inventory and ad decisions",
    ],
  },
  {
    slug: "rpg-game-maps",
    title: "RPG Game — Map Design & Development",
    summary:
      "Contributed level and map design to a friend's indie RPG, personally building the desert and winter maps.",
    description:
      "A collaborative game-development project where I designed and built playable game worlds.",
    image: "/projects/game.svg",
    technologies: ["Game Development", "Level Design", "Collaboration"],
    featured: false,
    category: "Game Development",
    year: "2025",
    role: "Map / Level Designer",
    overview:
      "A friend began developing his own RPG and brought me on to help. I focused on map design, personally creating the desert map and the winter map for the game.",
    problem:
      "The game needed distinct, playable environments that felt cohesive within the larger world while offering variety.",
    solution:
      "I designed and built two complete maps — a desert region and a winter region — handling their layout and playable structure.",
    features: [
      "Desert map — layout and design",
      "Winter map — layout and design",
      "Collaboration within a small dev team",
    ],
    challenges: [
      "Keeping map design consistent with a shared world and art direction.",
    ],
    lessons: [
      "Fundamentals of level design and iterating on playable spaces.",
      "Working within someone else's codebase and creative vision.",
    ],
    future: [
      "Additional biomes and interactive map elements",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
