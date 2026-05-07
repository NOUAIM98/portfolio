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
      "An enterprise-grade healthcare management suite engineered for clinical efficiency and secure provider-patient interactions.",
    thumbnail: "/interact-health-mockup.jpg",
    images: [
      "/interact-health-mockup.jpg",
    ],
    category: "Healthcare · Full-Stack · Mobile",
    year: "2025-2026",
    liveUrl: "https://interact-health-pro.demo",
    githubUrl: "https://github.com/NOUAIM98/interact-health-pro",
    videoUrl: "/quizgen-video.mp4",
    hero: {
      image: "/interact-health-mockup.jpg",
      subtitle:
        "The platform streamlines healthcare workflows by integrating mobile clinician tools, administrative dashboards, and automated communication services into a unified, HIPAA-aware ecosystem.",
    },
    problem:
      "Healthcare professionals were relying on fragmented tools — paper records, spreadsheets, and disconnected apps — to manage patient data, track concussion recovery, and coordinate care. This led to data silos, delayed interventions, and significant administrative overhead that reduced time spent with patients.",
    solution:
      "Built on a robust full-stack foundation, the system features a modular Express.js backend that serves as the single source of truth for a React Native mobile app and a React-based admin dashboard. Security is prioritized through a multi-layered approach: Firebase Authentication manages user identity, while custom JWT middleware enforces granular role-based access control (RBAC) across protected API routes. The administrative layer is powered by AdminJS for sophisticated resource management, and the infrastructure is orchestrated across Render and Vercel for maximum reliability.",
    techStack: [
      "React Native",
      "Expo",
      "React",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "AdminJS",
      "SendGrid",
      "Resend",
      "Render",
      "Vercel",
    ],
    features: [
      "Multi-Role RBAC System: Granular permission management for Admins, Providers, and Patients.",
      "Provider Linking System: Specialized architecture for connecting clinicians with patient records.",
      "Automated Notification Architecture: Integrated email and push notification flows for alerts.",
      "Production-Grade Infrastructure: Secure API design with modular service layers.",
    ],
    architecture:
      "The system follows a monorepo architecture with three core packages: a mobile clinician client (React Native/Expo), a modular backend API (Node.js/Express), and a centralized management dashboard (React/AdminJS). The API layer implements a service-oriented design with controllers, services, and data access layers. Firebase Auth handles identity management, while custom claims facilitate role-based access. MongoDB serves as the primary datastore, with the infrastructure distributed across Render and Vercel for optimal reliability.",
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
          "Designed a custom sync engine that queues mutations in SQLite when offline and replays them in order upon reconnection, handling conflict resolution with last-write-wins semantics.",
      },
      {
        title: "Role-Based Access Across Three Clients",
        description:
          "Implemented a unified RBAC system using Firebase custom claims that propagates across mobile, API, and admin dashboard, ensuring consistent permission enforcement.",
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
      "A high-performance AI assessment engine designed to automate the transition from raw documentation to structured educational content.",
    thumbnail: "/quizgen-hero.png",
    images: [
      "/quizgen-hero.png",
      "/quizgen-upload.png",
      "/quizgen-results.png",
      "/quizgen-arch.png",
    ],
    category: "AI · EdTech · Full-Stack",
    year: "2025",
    liveUrl: "https://quizgen-ai.demo",
    githubUrl: "https://github.com/NOUAIM98/QuizGen-AI",
    videoUrl: "/interact-health-video.mp4",
    hero: {
      image: "/quizgen-hero.png",
      subtitle:
        "The platform enables educators and organizations to transform PDFs, images, and complex documents into pedagogically sound quizzes in seconds.",
    },
    problem:
      "Educators and content creators spend hours manually crafting quizzes from course material. Existing tools generate shallow, keyword-based questions that fail to test genuine understanding. There was no accessible solution that could analyze complex material and produce pedagogically sound assessments.",
    solution:
      "The system utilizes a decoupled full-stack architecture featuring a modular React/Next.js frontend and a scalable Express.js backend. At its core is an asynchronous AI generation pipeline that orchestrates document parsing and LLM synthesis. The backend manages state via MongoDB and handles complex file processing, while the frontend leverages a component-driven Tailwind UI system for a seamless, responsive user experience.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Gemini API",
      "OpenAI API",
      "LangChain",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    features: [
      "Intelligent Content Pipeline: Automated extraction of text from PDFs and documents.",
      "Asynchronous Quiz Synthesis: Multi-format quiz generation with real-time progress tracking.",
      "Role-Based Security: Secure authentication system with protected routes.",
      "Advanced Generation Controls: Fine-grained calibration for difficulty levels and learning objectives.",
    ],
    architecture:
      "The application leverages a decoupled architecture where a Next.js frontend communicates with an Express.js backend. At its core is an asynchronous Retrieval-Augmented Generation (RAG) pipeline. The system extracts and chunks text from uploaded files, indexing them for retrieval. The generation service, powered by Gemini and OpenAI, processes the context to synthesize structured quiz questions. The entire ecosystem is deployed across a distributed Vercel and Render infrastructure for high availability.",
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
      "A unified B2B and consumer networking ecosystem that bridges the gap between web-based business management and mobile-first user engagement.",
    thumbnail: "/bizlinker-hero.png",
    images: ["/bizlinker-hero.png"],
    category: "B2B · Networking · Full-Stack · Mobile",
    year: "2024-2025",
    liveUrl: "https://getbizlinker.site",
    githubUrl: "https://github.com/NOUAIM98/Bizlinker-website-",
    hero: {
      image: "/bizlinker-hero.png",
      subtitle:
        "Designed for scalability, the platform facilitates seamless discovery, networking, and opportunity management through a synchronized cross-platform experience.",
    },
    problem:
      "Users needed a centralized, reliable platform to discover local businesses and services, complete with authentic reviews and an easy-to-use mobile experience. Existing solutions were either web-only or lacked a cohesive ecosystem for both business owners and consumers.",
    solution:
      "The platform implements a multi-client architecture powered by a centralized RESTful service layer. The ecosystem comprises a React/Next.js web application for administrative and desktop users, alongside a React Native + Expo mobile application for on-the-go networking. A shared API communication layer ensures data consistency across all platforms, utilizing MongoDB and Firebase for real-time synchronization and secure data management.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Vercel",
    ],
    features: [
      "Multi-Platform Synchronization: Real-time data consistency between web and mobile clients.",
      "Intelligent Networking Engine: Business discovery and engagement with structured data management.",
      "Unified Auth System: Secure authentication flow supporting multiple user roles.",
      "Scalable Business Ecosystem: Robust architecture designed for complex networking flows.",
    ],
    architecture:
      "The system follows a decoupled architecture where both the React/Next.js web frontend and the React Native mobile app communicate with a centralized RESTful API service. The deployment pipeline is optimized for simultaneous updates across web and mobile platforms, ensuring feature parity. Data persistence and real-time features are managed through a combination of MongoDB and Firebase, providing a seamless user experience across the entire networking ecosystem.",
    impact: [
      { label: "Platform Ecosystem", value: "Web + Mobile" },
      { label: "Backend Framework", value: "Node.js" },
      { label: "API Architecture", value: "RESTful" },
      { label: "Codebase", value: "Full-Stack" },
    ],
    challenges: [
      {
        title: "Unified API for Web & Mobile",
        description:
          "Designed and implemented a single REST API that securely serves both the React web frontend and the React Native mobile app, ensuring consistent data validation and authentication.",
      },
      {
        title: "Multi-Platform Onboarding",
        description:
          "Built complex multi-step application forms for businesses and services that work seamlessly on both responsive web browsers and native mobile screens.",
      },
    ],
  },
];
