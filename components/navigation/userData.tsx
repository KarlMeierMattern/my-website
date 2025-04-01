// import investcalc from "../../app/public/images/projects/pr1-invest-calc.png";
import investCalc from "../../app/public/images/projects/investCalc.png";
import colourBot from "../../app/public/images/projects/colourBot.png";
import cgtTool from "../../app/public/images/projects/cgtTool.png";
import chatBot from "../../app/public/images/projects/chatBot.png";
import videoTranslation from "../../app/public/images/projects/videoTranslation.png";
import govDash from "../../app/public/images/projects/govDash.png";
import book1 from "../../app/public/images/books/Book1.png";
import book2 from "../../app/public/images/books/Book2.png";
import book3 from "../../app/public/images/books/Book3.png";
import book4 from "../../app/public/images/books/Book4.png";
import book5 from "../../app/public/images/books/Book5.png";
import book6 from "../../app/public/images/books/Book6.png";
import book7 from "../../app/public/images/books/Book7.png";
import book8 from "../../app/public/images/books/Book8.png";
import book9 from "../../app/public/images/books/Book9.png";
import book10 from "../../app/public/images/books/Book10.png";
import book11 from "../../app/public/images/books/Book11.png";
import book12 from "../../app/public/images/books/Book12.png";

const profileInfo = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly web apps using technologies like React, Next.js, and Tailwind CSS to enhance performance, maintainability, and user experience.",
  },
  {
    title: "Data Science",
    description:
      "Utilising cloud platforms and advanced frameworks such as TensorFlow and PyTorch to analyse large data sets, build machine learning models, and derive actionable insights that support strategic decision-making.",
  },
  {
    title: "Strategy & Operations",
    description:
      "Advising clients on strategy and operational efficiency to drive sustainable growth and optimise business performance.",
  },
  {
    title: "Tech Due Diligence",
    description:
      "Assisting clients in navigating carve-out complexities in M&A transactions to ensure a smooth technology transition while maximising asset value.",
  },
];

const portfolioData = [
  {
    title: "South African Government Dashboard",
    description:
      "Developed a dashboard tool using a custom API scraper to visualise macroeconomic factors of the South African economy, including interest rates, GDP, unemployment, and exchange rates.",
    src: govDash,
    link: "https://sa-gov.vercel.app/",
  },
  {
    title: "Financial Growth Calculator",
    description:
      "Developed a React application that visualises the impact of compounded monthly investments. The app dynamically calculates and displays the final balance, total contributions, and earnings making it easier for users to plan and understand their financial growth over time.",
    src: investCalc,
    link: "https://future-calc.vercel.app/",
  },
  {
    title: "Seasonal Colour Analysis Tool",
    description:
      "Developed an interactive Next.js application that uses TensorFlow computer vision libraries to detect facial landmarks and analyse colour data. Integrated with OpenAI’s API to deliver personalised styling recommendations based on facial features and individual preferences.",
    src: colourBot,
  },
  {
    title: "CGT Optimisation Tool",
    description:
      "Built a custom tool to optimise the utilisation of South Africa’s annual Capital Gains Tax exclusion. Implemented algorithms that rank shares by capital gain per transaction in order to maximise tax-free profit.",
    src: cgtTool,
    link: "https://cgt-optimiser.vercel.app/",
  },
  {
    title: "Multilingual Video Translation Bot",
    description:
      "Developed a bot utilising the Azure Language Service SDK speech-to-text and translation capabilities to ingest and translate foreign-language videos into English. Built a simple client-facing app using vanilla JS and Node.js.",
    src: videoTranslation,
  },
  {
    title: "LLM Chatbot for University Students",
    description:
      "Built a chatbot using LangChain and Retrieval-Augmented Generation (RAG) to assist in navigating course offerings across multiple faculties. The chatbot provides real-time responses about course details, prerequisites, and academic programs.",
    src: chatBot,
  },
];

const resumeData = [
  {
    category: "Experience",
    title: "M&A Transaction Services",
    description:
      "Qualified CA(SA) and manager in the M&A Transaction Services team, with expertise in financial analysis, tech due diligence, data-driven decision-making, and start-up team development. Leveraged Alteryx, PowerBI, Python, and Google Apps Script as part of my role in financial & tech due diligence engagements.",
    details: "PwC | 2023.01 - present",
  },
  {
    category: "Experience",
    title: "Audit Assurance",
    description:
      "Senior Associate with three years of experience in renewable energy, FinTech, FMCG, and manufacturing.",
    details: "PwC | 2020.01 - 2022.12",
  },
  {
    category: "Education",
    title: "PGDA (Honours in Chartered Accounting)",
    description: "NQF Level 8 | GPA: 71%",
    details: "UCT | 2018 - 2019",
  },
  {
    category: "Education",
    title: "Bachelor of Business Science Finance and Accounting",
    description:
      "NQF Level 7 | GPA: 75% | UCT Commerce Faculty scholarship | Dean's Merit List | Golden Key",
    details: "UCT | 2015 - 2018",
  },
  {
    category: "Education",
    title: "IEB",
    description:
      "NQF Level 4 | GPA: 86% | Math (94%) | AP Math (84%) | Physics (85%) | Dramatic Arts (87%) | English (86%)",
    details: "Clifton College | 2010-2014",
  },
  {
    category: "Certifications",
    title: "Machine Learning Specialisation",
    description:
      "Trained and tested widely used supervised learning algorithms—including linear regression, logistic regression, decision trees, support vector machines, and ensemble methods—while learning data preprocessing, regularisation, hyperparameter tuning, machine learning pipelines, and the bias-variance tradeoff.",
    details: "IBM | Supervised ML | Regression & Classification | 2023",
  },
  {
    category: "Certifications",
    title: "Azure AI Engineer Associate",
    description:
      "Hands-on experience leveraging Azure AI services such as Azure Machine Learning, Cognitive Services, Vision, Document Intelligence, Language Services, and App Services. Proficient in using Azure’s cloud-based tools to build and scale AI solutions for business needs.",
    details: "Microsoft | 2024",
  },
  {
    category: "Certifications",
    title: "Mathematics for Machine Learning and Data Science Specialisation",
    description:
      "Studied the fundamentals of machine learning mathematics, including calculus, linear algebra, statistics, and probability. Implemented optimisation algorithms like gradient descent from scratch. Learned advanced techniques like Newton’s method and the Hessian matrix. Applied Principal Component Analysis (PCA) for dimensionality reduction and feature extraction. Gained practical knowledge of these concepts to improve machine learning model performance.",
    details: "DeepLearning.ai | 2025",
  },
  {
    category: "Certifications",
    title: "AWS Cloud Fundamentals",
    description: "",
    details: "Amazon | 2024",
  },
  {
    category: "Certifications",
    title: "Azure AI Fundamentals",
    description: "",
    details: "Microsoft | 2024",
  },
  {
    category: "Certifications",
    title: "Machine Learning Specialisation",
    description: "",
    details: "DeepLearning.ai | in-progress",
  },
  {
    category: "Skills",
    title: "Backend Frameworks",
    description:
      "Proficient in designing robust backend systems using frameworks with a focus on scalability, performance, and maintainability.",
    details: "Flask, Node.js, Express, AWS Amplify",
  },
  {
    category: "Skills",
    title: "Frontend Frameworks",
    description:
      "Skilled in building responsive and user-friendly web applications.",
    details:
      "React, Next.js, Tailwind CSS, CSS, HTML, Vite, UI/UX design principles.",
  },
  {
    category: "Skills",
    title: "Databases",
    description:
      "Experienced in designing, implementing, and managing databases for efficient data storage and retrieval.",
    details: "MongoDB, MySQL Workbench, Dynamo DB, ORM",
  },
  {
    category: "Skills",
    title: "Cloud & Hosting",
    description: "",
    details: "Vercel, Cloudflare, Sanity",
  },
  {
    category: "Skills",
    title: "Tools",
    description: "",
    details:
      "Git, GitHub, Jupyter Notebooks, CodeSandbox, Alteryx, Cursor, VS Code, Replit, Tabnine",
  },
  {
    category: "Skills",
    title: "APIs",
    description: "",
    details: "GraphQL, REST",
  },
  {
    category: "Skills",
    title: "Chatbots",
    description: "",
    details: "ChatGPT, Claude, Perplexity, v0",
  },
  {
    category: "Skills",
    title: "Other Tools",
    description: "",
    details: "Figma, Notion, Canva, Zapier",
  },
];

const bookList = [
  {
    title: "Fooled By Randomness",
    description:
      "Explores the role of chance and randomness in life, success, and decision-making.",
    src: book1,
    link: "https://www.google.com/search?q=fooled+by+randomness&rlz=1C5CHFA_enZA1129ZA1130&oq=fooled+by+randomness&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAtIBCDMxMDBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Changing World Order",
    description:
      "Analyses historical cycles of global powers in economics and politics.",
    src: book2,
    link: "https://www.google.com/search?q=the+changing+world+order&rlz=1C5CHFA_enZA1129ZA1130&oq=the+changing+world+order&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAtIBCDI3ODhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Fabric of Reality",
    description:
      "How multiverses, physics, philosophy, and computer science explain the nature of reality.",
    src: book3,
    link: "https://www.google.com/search?q=the+fabric+of+reality&rlz=1C5CHFA_enZA1129ZA1130&oq=The+Fabric+of+Reality&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQczOThqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Psychology of Money",
    description:
      "Discusses factors that drive financial decisions and the importance of behaviour in building wealth.",
    src: book4,
    link: "https://www.google.com/search?q=the+psychology+of+money&rlz=1C5CHFA_enZA1129ZA1130&oq=The+Psychology+of+Money&gs_lcrp=EgZjaHJvbWUqEwgAEAAYkQIY4wIYsQMYgAQYigUyEwgAEAAYkQIY4wIYsQMYgAQYigUyEAgBEC4YkQIYsQMYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQczMjJqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The 4-Hour Workweek",
    description:
      "Guide to escaping the 9-to-5 grind and designing a lifestyle of freedom.",
    src: book5,
    link: "https://www.google.com/search?q=The+4-Hour+Workweek&rlz=1C5CHFA_enZA1129ZA1130&oq=The+4-Hour+Workweek&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzMwMWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "Make: The Indie Maker's Book",
    description:
      "Practical resource for bootstrapping entrepreneurs to build and launch digital products.",
    src: book6,
    link: "https://www.google.com/search?q=Make%3A+The+Indie+Maker%27s+Book&rlz=1C5CHFA_enZA1129ZA1130&oq=Make%3A+The+Indie+Maker%27s+Book&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHNDg0ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "Siddhartha",
    description:
      "Follows a man's spiritual journey in search of self-discovery and enlightenment.",
    src: book7,
    link: "https://www.google.com/search?q=Siddhartha&rlz=1C5CHFA_enZA1129ZA1130&oq=Siddhartha&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQLhhDGIAEGIoFMgcIAhAuGIAEMg0IAxAuGK8BGMcBGIAEMgcIBBAuGIAEMgcIBRAuGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAE0gEHNDA1ajBqOagCALACAA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Alchemist",
    description:
      "Fable about following your dreams through a journey of self-discovery.",
    src: book8,
    link: "https://www.google.com/search?q=the+alchemist&rlz=1C5CHFA_enZA1129ZA1130&oq=The+Alchemist&gs_lcrp=EgZjaHJvbWUqEwgAEAAYkQIY4wIYsQMYgAQYigUyEwgAEAAYkQIY4wIYsQMYgAQYigUyEAgBEC4YkQIYsQMYgAQYigUyDQgCEC4YkQIYgAQYigUyDAgDEAAYQxiABBiKBTIHCAQQLhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzUxNmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "Man’s Search for Meaning",
    description:
      "A reflection on finding purpose and resilience through adversity.",
    src: book9,
    link: "https://www.google.com/search?q=man%E2%80%99s+search+for+meaning&rlz=1C5CHFA_enZA1129ZA1130&oq=Man%E2%80%99s+Search+for+Meaning&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQczMjBqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "Sam Walton: Made in America",
    description:
      "Autobiography of Walmart’s founder, detailing his innovative business practices and success.",
    src: book10,
    link: "https://www.google.com/search?q=Sam+Walton%3A+Made+in+America&rlz=1C5CHFA_enZA1129ZA1130&oq=Sam+Walton%3A+Made+in+America&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzIzMWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Everything Store",
    description:
      "Deep dive into the rise of Amazon and the visionary leadership of Jeff Bezos.",
    src: book11,
    link: "https://www.google.com/search?q=The+Everything+Store&rlz=1C5CHFA_enZA1129ZA1130&oq=The+Everything+Store&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzE1NGowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "From Third World to First: The Singapore Story",
    description:
      "Recounts Singapore’s transformation from a struggling nation to a global powerhouse.",
    src: book12,
    link: "https://www.google.com/search?q=From+Third+World+to+First%3A+The+Singapore+Story&rlz=1C5CHFA_enZA1129ZA1130&oq=From+Third+World+to+First%3A+The+Singapore+Story&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAtIBBzM2NmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
];

// Named export for both objects/arrays
export { profileInfo, portfolioData, resumeData, bookList };
