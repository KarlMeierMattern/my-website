export type Project = {
  name: string;
  summary: string;
  year: string;
  icon?: string;
  bullets: string[];
  screenshots: string[];
  url?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const workProjects: Project[] = [
  {
    name: "sa gov dashboard",
    summary: "macroeconomic indicators for South Africa, live on Vercel",
    year: "2024",
    icon: "/images/projects/govDash.png",
    bullets: [
      "Built a dashboard with a custom API scraper for interest rates, GDP, unemployment, and exchange rates",
      "Stack: React, Next.js, Tailwind CSS, Vercel",
    ],
    screenshots: ["/images/projects/govDash.png"],
    url: "https://sa-gov.vercel.app/",
  },
  {
    name: "tenders dashboard",
    summary: "searchable database of SA government tenders",
    year: "2024",
    icon: "/images/projects/saTender.png",
    bullets: [
      "Aggregates active and awarded government tenders with filters by category, department, and province",
      "Stack: React, Next.js, Tailwind CSS, Vercel",
    ],
    screenshots: ["/images/projects/saTender.png"],
    url: "https://sa-tender.vercel.app/",
  },
  {
    name: "financial growth calculator",
    summary: "compound investment visualiser for monthly contributions",
    year: "2024",
    icon: "/images/projects/investCalc.png",
    bullets: [
      "Calculates final balance, total contributions, and earnings over time",
      "Stack: React, Tailwind CSS",
    ],
    screenshots: ["/images/projects/investCalc.png"],
    url: "https://future-calc.vercel.app/",
  },
  {
    name: "cgt optimisation tool",
    summary: "maximises use of South Africa's annual capital gains tax exclusion",
    year: "2024",
    icon: "/images/projects/cgtTool.png",
    bullets: [
      "Ranks shares by capital gain per transaction to maximise tax-free profit",
      "Stack: React, Next.js, Vercel",
    ],
    screenshots: ["/images/projects/cgtTool.png"],
    url: "https://cgt-optimiser.vercel.app/",
  },
];

export const exploringProjects: Project[] = [
  {
    name: "seasonal colour analysis",
    summary: "TensorFlow computer vision for personalised styling recommendations",
    year: "2024",
    icon: "/images/projects/colourBot.png",
    bullets: [
      "Detects facial landmarks and analyses colour data with TensorFlow",
      "Integrated OpenAI API for styling recommendations based on facial features",
      "Stack: Next.js, TensorFlow, OpenAI API",
    ],
    screenshots: ["/images/projects/colourBot.png"],
  },
  {
    name: "video translation bot",
    summary: "Azure speech-to-text and translation for foreign-language videos",
    year: "2024",
    icon: "/images/projects/videoTranslation.png",
    bullets: [
      "Ingests and translates foreign-language videos into English",
      "Stack: Azure Language Service SDK, vanilla JS, Node.js",
    ],
    screenshots: ["/images/projects/videoTranslation.png"],
  },
  {
    name: "university course chatbot",
    summary: "RAG chatbot for navigating course offerings across faculties",
    year: "2024",
    icon: "/images/projects/chatBot.png",
    bullets: [
      "Answers questions about course details, prerequisites, and academic programs",
      "Stack: LangChain, RAG, Python",
    ],
    screenshots: ["/images/projects/chatBot.png"],
  },
];

export const backgroundEntries: Project[] = [
  {
    name: "m&a transaction services",
    summary: "CA(SA) manager at PwC, 2023 – present",
    year: "2023",
    bullets: [
      "Financial analysis, tech due diligence, and data-driven decision-making for M&A engagements",
      "Tools: Alteryx, Power BI, Python, Google Apps Script",
    ],
    screenshots: [],
  },
  {
    name: "audit assurance",
    summary: "Senior Associate at PwC, 2020 – 2022",
    year: "2020",
    bullets: [
      "Three years across renewable energy, FinTech, FMCG, and manufacturing",
    ],
    screenshots: [],
  },
  {
    name: "education",
    summary: "UCT Commerce — PGDA Honours (71%), BBusSc Finance & Accounting (75%)",
    year: "2015",
    bullets: [
      "PGDA Honours in Chartered Accounting, UCT, 2018 – 2019",
      "Bachelor of Business Science Finance and Accounting, UCT, 2015 – 2018",
      "Dean's Merit List, Golden Key, Commerce Faculty scholarship",
      "IEB matric, Clifton College, 86% aggregate",
    ],
    screenshots: [],
  },
  {
    name: "certifications",
    summary: "Azure AI Engineer, IBM ML, DeepLearning.ai specialisations",
    year: "2023",
    bullets: [
      "Azure AI Engineer Associate — Microsoft, 2024",
      "Machine Learning Specialisation — IBM, 2023",
      "Mathematics for ML and Data Science — DeepLearning.ai, 2025",
      "AWS Cloud Fundamentals — Amazon, 2024",
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
    label: "linkedin",
    href: "https://www.linkedin.com/in/karl-alexander-meier-mattern-16a3b919a/",
  },
];
