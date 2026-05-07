/** One place for your public profile — update email before you deploy live. */
export const PROFILE = {
  name: "Prabha Supriya Bandaru",
  shortTitle: "Software Developer & ML Engineer",
  tagline: "Fundamentals first. Scalability always.",
  github: "https://github.com/prabhasupriya",
  linkedin: "https://www.linkedin.com/in/prabha-supriya-bandaru-902a55299/",
  email: "mailto:your.email@example.com",
  resumePath: "/resume.pdf",
  photoPath: "/profile.jpg",
  bioParagraphs: [
    "I am a developer focused on production-minded systems — from intent-aware AI routing and low-latency backends to classical ML and recommendations — prioritizing clarity, observability, and behavior under load rather than demos alone.",
    "I prioritize readable code and deep fundamentals: data structures, algorithms, operating systems, and layered backend design across Java/Spring Boot, Python services, and data-heavy pipelines.",
    "At Infosys I developed a Spring Boot application for citizens with polls, petitions, and community modules, including login/logout and role-based access for creating and viewing petitions by individual users and the wider community.",
    "Outside class I build scalable routing around LLMs, Redis-backed feature serving, forecasting and deep learning workflows, matrix-factorization recommenders, and analytics-style storytelling sharpened through industry simulations.",
  ],
};

export const CODING_PROFILES = [
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/supriya_76",
    metric: "1426 problems solved",
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/Bandarusupriya/",
    metric: "150+ problems solved",
  },
  {
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/prabhasuj8w0?tab=activity",
    metric: "Active DSA profile",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** Grouped skill labels — tweak to mirror your résumé. */
export const SKILL_GROUPS = {
  core: [
    "Data Structures",
    "Algorithms",
    "OOP",
    "Java",
    "Spring Boot",
    "DBMS",
    "Operating Systems",
  ],
  aiml: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Collaborative Filtering",
    "SVD",
    "PyTorch",
  ],
  tools: ["Tableau", "Excel", "Docker", "Git & CI", "SQL", "FastAPI", "Redis"],
};

export const INTERNSHIPS = [
  {
    role: "Infosys Springboard Internship - Digital Civic Engagement and Petition Platform",
    company: "Infosys Springboard",
    duration: "Summer internship",
    desc: "Worked on a MERN stack based Digital Civic Engagement and Petition Platform. Designed scalable system architecture and implemented efficient backend logic for user interactions and data processing. Gained hands-on experience in full-stack architecture, REST APIs, and database integration while collaborating in an Agile workflow.",
    bullets: [
      "Worked on a MERN stack based Digital Civic Engagement and Petition Platform.",
      "Designed scalable system architecture and implemented efficient backend logic for user interactions and data processing.",
      "Gained hands-on experience in full-stack architecture, REST APIs, and database integration.",
      "Collaborated in an Agile environment and improved debugging and deployment skills.",
      "Backend engineering with Spring Boot for scalable web application behavior.",
      "RESTful service design for secure and structured data exchange.",
    ],
    platformSummary:
      "The platform enables citizens to create and manage petitions, vote on polls and petitions, and engage with community issues through a centralized citizen dashboard with accessible issue visibility.",
  },
];

export const ACHIEVEMENTS = [
  "Maintained 10 CGPA in B.Tech and received the department topper certificate every semester.",
  "Solved 1000+ problems on CodeChef and 150+ on LeetCode, strengthening problem-solving and contest-style thinking.",
  "Completed the Tata GenAI-Powered Data Analytics Virtual Experience on Forage — EDA, AI-driven risk profiling, and business storytelling for collection strategies.",
  "Built and shipped end-to-end projects across LLM routing, feature stores, and recommendation systems with public GitHub repositories.",
  "Hands-on internship experience with Infosys focused on Spring Boot–oriented application development.",
];

export const PROJECTS = [
  {
    title: "Prompt Routing AI System",
    subtitle: "Intent-based multi-agent LLM service",
    description:
      "Engineered a scalable routing layer using intent classification and dynamic prompt selection, replacing monolithic prompts with modular expert personas. Classifier emits structured JSON {intent, confidence} with robust fallbacks; low-latency FastAPI pipeline with optimized LLM calls; route logging (route_log.jsonl) for observability; handles ambiguous queries, multi-intent inputs, and invalid responses.",
    tags: ["Python", "FastAPI", "LLM", "Intent classification", "JSON"],
    githubRepo: "https://github.com/prabhasupriya/llm-powered-prompt-for-intent-classification",
    liveDemo: null,
  },
  {
    title: "ML Feature Store Backend",
    subtitle: "FastAPI, Redis, Docker",
    description:
      "Real-time feature serving with FastAPI and Redis, achieving ~14ms latency. Async ingestion processing 100K+ feature updates with Redis-tuned access patterns. Docker Compose deployment, strong validation with Pydantic, and a clear path to production-style microservice operation.",
    tags: ["FastAPI", "Redis", "Docker", "Pydantic", "Async"],
    githubRepo: "https://github.com/prabhasupriya/feature_store_service",
    liveDemo: null,
  },
  {
    title: "Movie Recommendation System",
    subtitle: "Matrix factorization & serving",
    description:
      "Recommendation engine using matrix factorization (SVD-style workflows) and classical ML, exposed through a clean API surface for consistent client queries — personalized suggestions backed by solid evaluation and reproducible pipelines.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "API"],
    githubRepo: "https://github.com/prabhasupriya/recommendation_system",
    liveDemo: null,
  },
  {
    title: "Offline Customer Support Chatbot",
    subtitle: "Ollama + Llama 3.2 (3B), privacy-first local AI",
    description:
      "Built a fully offline customer-support chatbot for a fictional e-commerce store using Ollama and Llama 3.2. Compared zero-shot vs one-shot prompting and logged responses for manual scoring to evaluate relevance, coherence, and helpfulness under a repeatable rubric.",
    keyMetrics: [
      "0 cloud API dependency (local inference)",
      "20+ adapted e-commerce queries evaluated",
      "2 prompt modes compared: zero-shot vs one-shot",
      "3 scoring axes: relevance, coherence, helpfulness",
    ],
    tags: ["Python", "Ollama", "Llama 3.2", "Prompt engineering", "Evaluation"],
    githubRepo: "https://github.com/prabhasupriya/offline-chatbot",
    liveDemo: null,
  },
];
