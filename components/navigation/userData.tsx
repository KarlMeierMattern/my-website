import investcalc from "../../app/public/images/projects/pr1-invest-calc.png";
import colourBot from "../../app/public/images/projects/colour-bot.png";
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
    title: "Financial Growth Calculator",
    description:
      "Developed a React application that visualises the impact of compounded monthly investments by allowing users to input multiple investment periods, monthly contributions, and expected annual return rates. The app dynamically calculates and displays the final balance, total contributions, and earnings through an intuitive graphical interface, making it easier for users to plan and understand their financial growth over time.",
    src: investcalc,
    link: "https://future-calc-c5y9hfq58-alexanders-projects-51d292f6.vercel.app/",
  },
  {
    title: "Seasonal Colour Analysis Bot",
    description:
      "Developed an interactive Next.js front-end application that utilises TensorFlow computer vision libraries to detect facial landmarks and analyse colour data. Integrated with OpenAI’s API to deliver personalised styling recommendations based on facial features and individual preferences, helping users select the most flattering colours for different seasons and occasions.",
    src: colourBot,
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    src: investcalc,
  },
  {
    title: "Project 4",
    description: "Description for Project 4",
    src: investcalc,
  },
];

const resumeData = [
  {
    category: "Experience",
    title: "M&A Transaction Services",
    description:
      "Manager in M&A Transaction Services with expertise in financial analysis, tech due diligence, data-driven decision-making, and start-up team development, delivering strategic insights to clients across diverse industries.",
    details: "PwC | 2023.01 - present",
  },
  {
    category: "Experience",
    title: "Audit Assurance",
    description:
      "Senior Associate with three years of experience spanning renewable energy, FinTech, FMCG, and manufacturing.",
    details: "PwC | 2020.01 - 2022.12",
  },
  {
    category: "Projects",
    title: "LLM Chatbot for University Students",
    description:
      "Built a dynamic chatbot using LangChain and Retrieval-Augmented Generation (RAG) technology to assist myself in navigating course offerings across multiple faculties. The chatbot provides accurate, real-time responses to natural language queries about course details, prerequisites, and academic programs.",
    details: "",
  },
  {
    category: "Projects",
    title: "Seasonal Colour Analysis Bot",
    description:
      "Developed an interactive Next.js front-end application that utilises TensorFlow computer vision libraries to detect facial landmarks and analyse colour data. Integrated with OpenAI’s API to deliver personalised styling recommendations based on facial features and individual preferences, helping users select the most flattering colours for different seasons and occasions.",
    details: "",
  },
  {
    category: "Projects",
    title: "Financial Growth Calculator",
    description:
      "Developed a React application that visualises the impact of compounded monthly investments by allowing users to input multiple investment periods, monthly contributions, and expected annual return rates. The app dynamically calculates and displays the final balance, total contributions, and earnings through an intuitive graphical interface, making it easier for users to plan and understand their financial growth over time.",
    details: "",
  },
  {
    category: "Projects",
    title: "Multilingual Video Translation Bot",
    description:
      "Developed a bot utilising the Azure Language Service SDK to ingest and translate foreign-language videos into English. The bot leverages Azure’s speech-to-text and translation capabilities to convert audio from videos into text, then translates the content accurately into English. Built a simple client-facing app using vanilla JS and Node.js.",
    details: "",
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
    details: "Microsoft | in-progress",
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
    title: "Mathematics for Machine Learning and Data Science Specialisation",
    description: "",
    details: "DeepLearning.ai | in-progress",
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
    details: "Flask, Node.js, Express",
  },
  {
    category: "Skills",
    title: "Front-End Frameworks",
    description:
      "Skilled in building responsive and user-friendly web applications.",
    details: "React, Tailwind CSS, CSS, HTML, Vite, UI/UX design principles.",
  },
  {
    category: "Skills",
    title: "Full-Stack Frameworks",
    description:
      "Proficient in building scalable and efficient full-stack applications using modern frameworks.",
    details: "Next.js, AWS Amplify",
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
  },
  {
    title: "The Changing World Order",
    description:
      "Analyses historical cycles of global powers to predict future trends in economics and politics.",
    src: book2,
  },
  {
    title: "The Fabric of Reality",
    description:
      "How multiverses, physics, philosophy, and computer science explain the nature of reality.",
    src: book3,
  },
  {
    title: "The Psychology of Money",
    description:
      "Discusses the psychological factors that drive financial decisions and the importance of behaviour in building wealth.",
    src: book4,
  },
  {
    title: "The 4-Hour Workweek",
    description:
      "A guide to escaping the 9-to-5 grind and designing a lifestyle of freedom and efficiency.",
    src: book5,
  },
  {
    title: "Make: The Indie Maker's Book",
    description:
      "A practical resource for bootstrapping entrepreneurs to build and launch successful digital products.",
    src: book6,
  },
  {
    title: "Siddhartha",
    description:
      "Follows a man's spiritual journey in search of self-discovery and enlightenment.",
    src: book7,
  },
  {
    title: "The Alchemist",
    description:
      "A fable about following your dreams and listening to the heart’s wisdom through a journey of self-discovery.",
    src: book8,
  },
  {
    title: "Man’s Search for Meaning",
    description:
      "A reflection on finding purpose and resilience through adversity.",
    src: book9,
  },
  {
    title: "Sam Walton: Made in America",
    description:
      "The autobiography of Walmart’s founder, detailing his innovative business practices and success.",
    src: book10,
  },
  {
    title: "The Everything Store",
    description:
      "A deep dive into the rise of Amazon and the visionary leadership of Jeff Bezos.",
    src: book11,
  },
  {
    title: "From Third World to First: The Singapore Story",
    description:
      "Recounts Singapore’s transformation from a struggling nation to a global powerhouse.",
    src: book12,
  },
];

// Named export for both objects/arrays
export { profileInfo, portfolioData, resumeData, bookList };
