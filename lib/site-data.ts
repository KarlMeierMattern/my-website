export type IconTone = "stone" | "sage" | "sand" | "slate" | "clay" | "ocean";

export type Project = {
  name: string;
  summary: string;
  year: string;
  glyph?: string;
  tone?: IconTone;
  prefixYear?: boolean;
  bullets: string[];
  screenshots: string[];
  url?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "sa census map",
    summary: "census data mapping",
    year: "2026",
    glyph: "cm",
    tone: "ocean",
    bullets: [
      "Interactive map visualising South African census data across regions",
      "Stack: React, Next.js, Vercel",
    ],
    screenshots: [],
    url: "https://sa-census-map.vercel.app",
  },
  {
    name: "sa gov dashboard",
    summary: "visualising SA macro data",
    year: "2024",
    glyph: "go",
    tone: "slate",
    bullets: [
      "Dashboard with a custom API scraper for South African macroeconomic indicators: interest rates, GDP, unemployment, and exchange rates",
      "Stack: React, Next.js, Tailwind CSS, Vercel",
    ],
    screenshots: ["/images/projects/govDash.png"],
    url: "https://sa-gov.vercel.app/",
  },
  {
    name: "tenders dashboard",
    summary: "SA gov tenders DB",
    year: "2024",
    glyph: "td",
    tone: "sand",
    bullets: [
      "Searchable database of active and awarded government tenders with filters by category, department, and province",
      "Stack: React, Next.js, Tailwind CSS, Vercel",
    ],
    screenshots: ["/images/projects/saTender.png"],
    url: "https://sa-tender.vercel.app/",
  },
  {
    name: "financial growth calculator",
    summary: "compound investment calc",
    year: "2024",
    glyph: "fc",
    tone: "sage",
    bullets: [
      "Visualises compounded monthly investments with final balance, total contributions, and earnings over time",
      "Stack: React, Tailwind CSS",
    ],
    screenshots: ["/images/projects/investCalc.png"],
    url: "https://future-calc.vercel.app/",
  },
  {
    name: "cgt optimisation tool",
    summary: "CGT exclusion optimiser",
    year: "2024",
    glyph: "tx",
    tone: "clay",
    bullets: [
      "Optimises use of South Africa's annual capital gains tax exclusion by ranking shares by gain per transaction",
      "Stack: React, Next.js, Vercel",
    ],
    screenshots: ["/images/projects/cgtTool.png"],
    url: "https://cgt-optimiser.vercel.app/",
  },
];

export const exploringProjects: Project[] = [
  {
    name: "seasonal colour analysis",
    summary: "TensorFlow + OpenAI",
    year: "2024",
    glyph: "co",
    tone: "stone",
    bullets: [
      "Detects facial landmarks and analyses colour data with TensorFlow computer vision",
      "Delivers personalised styling recommendations via OpenAI based on facial features",
      "Stack: Next.js, TensorFlow, OpenAI API",
    ],
    screenshots: ["/images/projects/colourBot.png"],
  },
  {
    name: "video translation bot",
    summary: "Azure speech translation",
    year: "2024",
    glyph: "vt",
    tone: "ocean",
    bullets: [
      "Ingests foreign-language videos and translates them to English using Azure Language Service speech-to-text",
      "Stack: Azure Language Service SDK, vanilla JS, Node.js",
    ],
    screenshots: ["/images/projects/videoTranslation.png"],
  },
  {
    name: "university course chatbot",
    summary: "LangChain RAG chatbot",
    year: "2024",
    glyph: "ed",
    tone: "slate",
    bullets: [
      "Helps students navigate course offerings across faculties with answers on details, prerequisites, and programs",
      "Stack: LangChain, RAG, Python",
    ],
    screenshots: ["/images/projects/chatBot.png"],
  },
];

export const workEntries: Project[] = [
  {
    name: "architecture & engineering",
    summary: "legacy modernisation, target-state design",
    year: "2026",
    glyph: "ae",
    tone: "slate",
    bullets: [
      "CA(SA) and architecture & engineering consultant in PwC's Cloud & Digital practice, Cape Town",
      "Legacy modernisation, target-state design, and enterprise transformation",
      "Evaluates application stacks, defines migration paths, and builds TCO models comparing current and future-state cost, risk, and scalability",
      "Background in M&A technology due diligence and financial analysis, with hands-on work in solution architecture, modelling, and automation",
      "Jul 2026 – present",
    ],
    screenshots: [],
  },
  {
    name: "m&a technology",
    summary: "PwC, IT due diligence",
    year: "2024",
    glyph: "it",
    tone: "ocean",
    bullets: [
      "Manager — IT due diligence in M&A deals: infrastructure, apps, cybersecurity, governance, and post-deal integration",
      "May 2024 – Jul 2026",
      "Tools: Azure AI Studio, Postman API, Python, Alteryx, Power BI",
    ],
    screenshots: [],
  },
  {
    name: "m&a financial due diligence",
    summary: "PwC, buy & sell-side FDD",
    year: "2023",
    glyph: "fd",
    tone: "sand",
    bullets: [
      "Manager — buy and sell-side financial due diligence for companies in the US and EMEA",
      "Jan 2023 – Apr 2024",
      "Tools: financial modelling, Python, Alteryx",
    ],
    screenshots: [],
  },
  {
    name: "audit assurance",
    summary: "PwC, 2020 – 2022",
    year: "2020",
    glyph: "aa",
    tone: "stone",
    bullets: [
      "Senior Associate (2022) — FinTech and renewable energy, including Mukuru Africa and Scatec Solar Africa",
      "Associate (2020 – 2021) — audit assurance, Durban",
      "CA(SA) qualified",
    ],
    screenshots: [],
  },
];

export const backgroundEntries: Project[] = [
  {
    name: "education",
    summary: "UCT Commerce",
    year: "2015",
    glyph: "uc",
    tone: "sage",
    bullets: [
      "PGDA Honours in Chartered Accounting (71%), UCT, 2018 – 2019",
      "Bachelor of Business Science Finance and Accounting (75%), UCT, 2015 – 2018",
      "Dean's Merit List, Golden Key, Commerce Faculty scholarship",
      "IEB matric, Clifton College, 86% aggregate",
    ],
    screenshots: [],
  },
  {
    name: "certifications",
    summary: "AWS SAA, Azure AI Apps",
    year: "2026",
    glyph: "ce",
    tone: "clay",
    prefixYear: false,
    bullets: [
      "AWS Certified Solutions Architect — Amazon, 2026",
      "Microsoft Certified: Azure AI Apps and Agents Developer Associate — Microsoft, 2026",
      "Building with the Claude API — Anthropic, 2026",
      "Cyber Security 101 Certificate — 2025",
      "Mathematics for ML and Data Science — DeepLearning.ai, 2025",
      "Azure AI Engineer Associate — Microsoft, 2024",
      "AWS Cloud Fundamentals — Amazon, 2024",
      "Machine Learning Specialisation — IBM, 2023",
    ],
    screenshots: [],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "karlmeiermattern@gmail.com",
    href: "mailto:karlmeiermattern@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/KarlMeierMattern",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/karl-alexander-meier-mattern-16a3b919a/",
  },
];
