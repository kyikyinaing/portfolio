// lib/data.ts — all portfolio content in one place

export const personal = {
  name: "Kyi Kyi Naing",
  nickname: "Crystal",
  title: "Software Engineer",
  taglines: [
    ".NET Core & C# Engineer",
    "Full Stack Developer",
    "REST API Architect",
    "AI / ML Enthusiast",
    "Enterprise App Builder",
  ],
  summary:
    "Results-driven Software Engineer with 12 years of experience building enterprise applications across shipping, banking, and government sectors. Recently pursuing a Postgraduate Diploma in AI & Machine Learning, adding Python, data pipelines, and AI-driven applications to a strong full-stack foundation.",
  location: "London, Ontario, Canada",
  email: "chawtheinnyo@gmail.com",
  phone: "(226) 977-2726",
  github: "https://github.com/kyikyinaing",     // replace with real URL
  linkedin: "https://www.linkedin.com/in/kyi-kyinaing-59a892a2/", // replace with real URL
  available: true,
};

export const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 3,  suffix: "",  label: "Industry Sectors" },
  { value: 4,  suffix: "",  label: "Key Projects" },
  { value: 3,  suffix: "",  label: "Degrees" },
];

export const skills = [
  {
    category: "Backend Development",
    color: "sky",
    items: [
      ".NET Core", "C#", "ASP.NET Core", "MVC", "Blazor",
      "Entity Framework", "VB.NET", "REST APIs", "JSON/XML", "WinForms", "IIS",
    ],
  },
  {
    category: "Frontend Development",
    color: "indigo",
    items: [
      "JavaScript", "TypeScript", "HTML5", "CSS3",
      "Bootstrap", "Angular", "Responsive UI", "Power BI",
    ],
  },
  {
    category: "Database & Reporting",
    color: "emerald",
    items: [
      "SQL Server", "PostgreSQL", "Oracle", "MS Access",
      "PL/SQL", "Stored Procedures", "Triggers", "Views",
      "Performance Tuning", "SSRS", "Crystal Reports", "RDLC",
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "sky",
    items: [
      "Git/GitHub", "CI/CD", "GitHub Actions", "GCP",
      "Azure", "Docker", "Visual Studio", "Jira",
    ],
  },
  {
    category: "Architecture & Testing",
    color: "indigo",
    items: [
      "Microservices", "RESTful APIs", "EDI Integration",
      "Role-Based Access Control", "MVC", "Unit Testing",
      "Regression Testing", "Agile/Scrum", "SDLC",
    ],
  },
  {
    category: "AI / Machine Learning",
    color: "emerald",
    items: [
      "Python", "NLP", "TF-IDF", "CNN", "Deep Learning",
      "Transfer Learning (ResNet)", "LSTM", "Grad-CAM",
      "Explainable AI", "Scikit-learn", "TensorFlow", "Keras",
    ],
  },
];

export const experience = [
  {
    role: "Analyst Programmer",
    company: "Samudera Shipping Line",
    location: "Singapore",
    period: "2018 – 2025",
    // Place your company photo at: public/companies/samudera.jpg
    image: "/companies/Samudera.png",
    bullets: [
      "Designed, developed, and maintained scalable enterprise applications using .NET Core, C#, ASP.NET Core, Blazor, and Java with SQL Server and PostgreSQL.",
      "Built and enhanced RESTful APIs and backend services supporting EDI/API integrations with third-party shipping and logistics systems.",
      "Developed and optimized SQL queries, stored procedures, views, and database schemas for high-volume transactional data.",
      "Participated in full Agile/Scrum ceremonies — sprint planning, stand-ups, retrospectives — collaborating with BAs and QA teams.",
      "Supported production deployments, incident resolution, change management, and performance tuning for mission-critical systems.",
    ],
    tags: [".NET Core", "C#", "Blazor", "REST APIs", "EDI", "SQL Server", "PostgreSQL"],
  },
  {
    role: "Senior Software Developer",
    company: "ACE Data Systems",
    location: "Myanmar",
    period: "2015 – 2018",
    // Place your company photo at: public/companies/ace.jpg
    image: "/companies/ace.jpg",
    bullets: [
      "Developed a full-stack ASP.NET General Accounting System adopted by AYA Bank and Yangon Stock Exchange — strong financial domain experience.",
      "Designed relational database architecture and optimized SQL queries for high-volume financial transaction processing.",
      "Built backend services and reporting modules; integrated with third-party financial data feeds and internal workflows.",
      "Led requirements gathering with stakeholders and mentored junior developers on coding standards and design patterns.",
    ],
    tags: ["ASP.NET", "C#", "SQL Server", "RDLC Reports", "Financial Domain"],
  },
  {
    role: "Software Developer",
    company: "Trustlink System Integrator",
    location: "Myanmar",
    period: "2013 – 2015",
    // Place your company photo at: public/companies/trustlink.jpg
    image: "/companies/trustlink.jpg",
    bullets: [
      "Built Machine Readable Passport (MRP) system using VB.NET with passport reader and card device integration via serial communication.",
      "Developed E-Pension Management System — a government pension platform covering system design, database design, full development cycle, and client reporting.",
      "Designed system architecture and database schemas for both platforms; prepared technical documentation and supported client-facing deployment.",
    ],
    tags: ["VB.NET", "VB6", "SQL Server", "Crystal Reports", "Government Systems"],
  },
];

export const projects = [
  {
    icon: "🚢",
    title: "Shipping Documentation & Invoicing Platform",
    company: "Samudera Shipping Line",
    description:
      "End-to-end multi-application shipping platform handling documentation, invoicing, and logistics workflows. Built and maintained RESTful APIs and EDI integrations connecting internal systems with external shipping partners.",
    tags: ["C#", "SQL Server", "REST APIs", "EDI Integration", "ASP.NET", "Crystal Reports"],
  },
  {
    icon: "🏦",
    title: "General Accounting System",
    company: "AYA Bank & Yangon Stock Exchange",
    description:
      "Full-stack development of an accounting platform for financial transaction management, auditing, and reconciliation. Designed normalized database schema with performance-tuned queries and stored procedures for high-volume banking operations.",
    tags: ["ASP.NET", "C#", "SQL Server", "Stored Procedures", "RDLC Reports"],
  },
  {
    icon: "🛂",
    title: "Machine Readable Passport & E-Pension System",
    company: "Trustlink System Integrator",
    description:
      "Government platforms including an MRP system with passport reader hardware integration via serial communication, and a full E-Pension management system covering design, development, and client deployment lifecycle.",
    tags: ["VB.NET", "VB6", "SQL Server", "Crystal Reports", "System Design"],
  },
  {
    icon: "🤖",
    title: "Lumo — AI-Powered E-Commerce Assistant",
    company: "Capstone Project · Fanshawe College",
    description:
      "Multi-agent AI platform with Inventory, Marketing, and Shopping Assistant agents. Implements agentic workflows with tool-use and memory, demonstrating LLM orchestration and API integration skills.",
    tags: ["Python", "Agentic AI", "LLM Orchestration", "Multi-Agent", "REST APIs"],
    highlight: true,
  },
];

export const education = [
  {
    degree: "Postgraduate Diploma — AI & Machine Learning",
    school: "Fanshawe College",
    location: "London, ON",
    year: "2025 – 2026",
    icon: "🎓",
  },
  {
    degree: "Analysis for Business Systems",
    school: "University of Minnesota",
    location: "Online",
    year: "2023",
    icon: "📊",
  },
  {
    degree: "Bachelor of Engineering — Information Technology",
    school: "TU University",
    location: "Myanmar",
    year: "2007 – 2012",
    icon: "🏛️",
  },
];
