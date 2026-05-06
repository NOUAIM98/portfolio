export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Expo",
      "Redux",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "Socket.io",
      "JWT Auth",
      "Microservices",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "RAG Pipelines",
      "NLP",
      "Vector Databases",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Vercel",
      "AWS",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "Prisma",
      "Mongoose",
      "SQLite",
    ],
  },
];
