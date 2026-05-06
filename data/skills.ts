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
      "Expo",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Auth",
      "Microservices",
      "Monolithic"
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
      "Mongoose",
      "SQLite",
    ],
  },
];
