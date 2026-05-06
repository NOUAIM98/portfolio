export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  hero: {
    image: string;
    subtitle: string;
  };
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  architecture: string;
  impact: {
    label: string;
    value: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "interact-health-pro",
    title: "Interact Health PRO",
    shortDescription:
      "A healthcare management platform with React Native mobile app, Node.js API, and React admin dashboard — enabling clinicians to track patient recovery and streamline workflows.",
    thumbnail: "/interact-health-mockup.jpg",
    images: [
      "/interact-health-mockup.jpg",
    ],
    category: "Healthcare · Full-Stack · Mobile",
    year: "2024",
    videoUrl: "/quizgen-video.mp4",
    hero: {
      image: "/interact-health-mockup.jpg",
      subtitle:
        "End-to-end healthcare platform enabling clinicians to manage patients, track concussion recovery, and streamline administrative workflows across mobile, web, and API.",
    },
    problem:
      "Healthcare professionals were relying on fragmented tools — paper records, spreadsheets, and disconnected apps — to manage patient data, track concussion recovery, and coordinate care. This led to data silos, delayed interventions, and significant administrative overhead that reduced time spent with patients.",
    solution:
      "Built a unified monorepo platform consisting of three tightly integrated systems: a React Native mobile app for clinicians on the go, a robust Node.js/Express REST API with Firebase Auth and role-based access control, and a React admin dashboard for supervisors and administrators. The architecture supports real-time data sync, push notifications, and comprehensive audit logging.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Firebase Auth",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Resend",
      "Push Notifications",
    ],
    features: [
      "Secure patient onboarding with multi-step forms and validation",
      "Real-time symptom tracking with visual progress charts",
      "Role-based access control (Clinician, Supervisor, Admin)",
      "Push notification system for appointment reminders and alerts",
      "Admin dashboard with analytics, user management, and audit logs",
      "Offline-capable mobile app with background sync",
      "Email notification system via Resend for account actions",
      "Rate-limited API with comprehensive error handling",
    ],
    architecture:
      "The system follows a monorepo architecture with three packages: mobile (React Native/Expo), api (Node.js/Express), and web-admin (React/Vite). The API layer implements a service-oriented architecture with controllers, services, and data access layers. Firebase Auth handles authentication with custom claims for role management. MongoDB serves as the primary datastore with Mongoose ODM for schema validation. The mobile app uses a custom sync engine for offline-first capabilities, queuing mutations locally and replaying them when connectivity is restored.",
    impact: [
      { label: "Reduction in Admin Workload", value: "30%" },
      { label: "API Response Time (p95)", value: "<200ms" },
      { label: "Crash-Free Rate", value: "99.2%" },
      { label: "Clinician Adoption", value: "85%" },
    ],
    challenges: [
      {
        title: "Offline-First Data Sync",
        description:
          "Designed a custom sync engine that queues mutations in SQLite when offline and replays them in order upon reconnection, handling conflict resolution with last-write-wins semantics and server-side validation.",
      },
      {
        title: "Role-Based Access Across Three Clients",
        description:
          "Implemented a unified RBAC system using Firebase custom claims that propagates across mobile, API, and admin dashboard, ensuring consistent permission enforcement at every layer.",
      },
      {
        title: "Startup Crash Resilience",
        description:
          "Resolved critical module-level initialization issues where missing environment variables would crash the entire API. Implemented graceful degradation patterns so non-critical services fail softly.",
      },
    ],
  },
  {
    slug: "quizgen-ai",
    title: "QuizGen-AI",
    shortDescription:
      "An AI-powered platform that transforms PDFs, documents, or topics into structured, interactive quizzes using large language models — in seconds.",
    thumbnail: "/quizgen-hero.png",
    images: [
      "/quizgen-hero.png",
      "/quizgen-upload.png",
      "/quizgen-results.png",
      "/quizgen-arch.png",
    ],
    category: "AI · EdTech · Full-Stack",
    year: "2024",
    videoUrl: "/interact-health-video.mp4",
    hero: {
      image: "/quizgen-hero.png",
      subtitle:
        "Turn knowledge into smart quizzes — upload PDFs or enter topics, and AI generates comprehensive assessments instantly.",
    },
    problem:
      "Educators and content creators spend hours manually crafting quizzes from course material. Existing tools generate shallow, keyword-based questions that fail to test genuine understanding. There was no accessible solution that could analyze complex material and produce pedagogically sound assessments.",
    solution:
      "Built a full-stack platform that accepts raw text, PDFs, or topic descriptions and uses large language models to generate multi-format quizzes (multiple choice, true/false, short answer). The system includes intelligent difficulty calibration, answer explanation generation, and a quiz-taking interface with real-time scoring.",
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "LangChain",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    features: [
      "Multi-format quiz generation (MCQ, True/False, Short Answer)",
      "Difficulty calibration from Easy to Expert",
      "PDF and raw text input parsing",
      "AI-generated answer explanations",
      "Real-time quiz-taking with instant scoring",
      "Quiz history and performance analytics",
      "Shareable quiz links with unique codes",
      "Rate-limited API with token usage tracking",
    ],
    architecture:
      "The application leverages a powerful Retrieval-Augmented Generation (RAG) pipeline. Users upload a PDF or enter a topic via the React UI, which is passed to the Retrieval service. The system extracts and chunks the text, indexing it into an Elastic Search database. When generating a quiz, relevant chunks are retrieved and sent to the Generation service (powered by Gemini 2.5 Flash). Gemini processes the context and synthesizes structured quiz questions and answers, which are then displayed to the user.",
    impact: [
      { label: "Generation Time", value: "<8s" },
      { label: "Question Accuracy", value: "94%" },
      { label: "User Satisfaction", value: "4.7/5" },
      { label: "Documents Processed", value: "10K+" },
    ],
    challenges: [
      {
        title: "Consistent LLM Output Parsing",
        description:
          "Designed a robust output parser with JSON schema validation and retry logic to handle inconsistent LLM responses, ensuring every generated quiz conforms to the expected structure.",
      },
      {
        title: "Large Document Processing",
        description:
          "Implemented a chunking strategy with overlapping windows to handle documents exceeding context limits while maintaining question coherence across sections.",
      },
    ],
  },
  {
    slug: "bizlinker",
    title: "BizLinker",
    shortDescription:
      "A B2B networking platform connecting businesses through intelligent matching, real-time messaging, and structured opportunity discovery.",
    thumbnail: "/bizlinker-hero.png",
    images: ["/bizlinker-hero.png"],
    category: "B2B · Networking · Full-Stack · Mobile",
    year: "2024",
    hero: {
      image: "/bizlinker-hero.png",
      subtitle:
        "A full-stack platform built to help users explore, review, and engage with local businesses, services, and events.",
    },
    problem:
      "Users needed a centralized, reliable platform to discover local businesses and services, complete with authentic reviews and an easy-to-use mobile experience. Existing solutions were either web-only or lacked a cohesive ecosystem for both business owners and consumers.",
    solution:
      "Developed a comprehensive platform consisting of a responsive web interface (React) and a cross-platform mobile app (React Native). The system is powered by a robust Laravel 11 backend with secure REST APIs, handling everything from multi-step onboarding to role-based routing.",
    techStack: [
      "ReactJS",
      "React Native",
      "Expo",
      "Laravel 11",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "REST API"
    ],
    features: [
      "Multi-step business, service & event applications",
      "Ratings & review submission system",
      "Responsive web UI with Tailwind CSS",
      "Cross-platform mobile app (iOS/Android)",
      "Role-based routing (User, Business Owner, Admin)",
      "Secure REST API authentication",
      "File and image upload management"
    ],
    architecture:
      "The system follows a decoupled architecture. The frontend web application is built with ReactJS and TailwindCSS, hosted on Vercel. The mobile application is built using React Native and Expo. Both clients communicate with a centralized backend API built on Laravel 11 (PHP) and MySQL, which handles authentication, business logic, and local storage for media uploads.",
    impact: [
      { label: "Platform Ecosystem", value: "Web + Mobile" },
      { label: "Backend Framework", value: "Laravel 11" },
      { label: "API Architecture", value: "RESTful" },
      { label: "Codebase", value: "Full-Stack" },
    ],
    challenges: [
      {
        title: "Unified API for Web & Mobile",
        description:
          "Designed and implemented a single Laravel REST API that securely serves both the React web frontend and the React Native mobile app, ensuring consistent data validation and authentication across all touchpoints.",
      },
      {
        title: "Multi-Platform Onboarding",
        description:
          "Built complex multi-step application forms for businesses and services that work seamlessly on both responsive web browsers and native mobile screens.",
      },
    ],
  },
];
