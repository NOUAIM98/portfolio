export const translations = {
  en: {
    // Navbar
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",

    // Hero
    heroTitle: "Full-Stack & Mobile Engineer building high-performance digital solutions.",
    heroSubtitle: "I craft scalable web and mobile applications with focus on performance, user experience, and clean architecture.",
    heroCta: "View My Work",

    // Projects
    projectsTitle: "Featured Projects",
    projectsLabel: "Work",
    projectsSubtitle: "A selection of my recent full-stack, mobile, and AI-powered applications.",
    viewProject: "View Details",

    // Project 1
    p1Title: "Interact Health PRO",
    p1Desc: "A healthcare management platform with React Native mobile app, Node.js API, and React admin dashboard.",

    // Project 2
    p2Title: "QuizGen-AI",
    p2Desc: "An AI-powered platform that transforms documents into interactive quizzes using LLMs.",

    // Project 3
    p3Title: "BizLinker",
    p3Desc: "A B2B networking platform connecting businesses through intelligent matching and real-time messaging.",
    
    // Project 1 Detailed Content
    p1HeroSubtitle: "End-to-end healthcare platform enabling clinicians to manage patients, track concussion recovery, and streamline administrative workflows across mobile, web, and API.",
    p1Problem: "Healthcare professionals were relying on fragmented tools — paper records, spreadsheets, and disconnected apps — to manage patient data, track concussion recovery, and coordinate care. This led to data silos, delayed interventions, and significant administrative overhead that reduced time spent with patients.",
    p1Solution: "Built a unified monorepo platform consisting of three tightly integrated systems: a React Native mobile app for clinicians on the go, a robust Node.js/Express REST API with Firebase Auth and role-based access control, and a React admin dashboard for supervisors and administrators. The architecture supports real-time data sync, push notifications, and comprehensive audit logging.",
    p1Architecture: "The system follows a monorepo architecture with three packages: mobile (React Native/Expo), api (Node.js/Express), and web-admin (React/Vite). The API layer implements a service-oriented architecture with controllers, services, and data access layers. Firebase Auth handles authentication with custom claims for role management. MongoDB serves as the primary datastore with Mongoose ODM for schema validation. The mobile app uses a custom sync engine for offline-first capabilities, queuing mutations locally and replaying them when connectivity is restored.",
    p1Impact1: "Reduction in Admin Workload",
    p1Impact2: "API Response Time (p95)",
    p1Impact3: "Crash-Free Rate",
    p1Impact4: "Clinician Adoption",
    p1Feature1: "Secure patient onboarding with multi-step forms and validation",
    p1Feature2: "Real-time symptom tracking with visual progress charts",
    p1Feature3: "Role-based access control (Clinician, Supervisor, Admin)",
    p1Feature4: "Push notification system for appointment reminders and alerts",
    p1Feature5: "Admin dashboard with analytics, user management, and audit logs",
    p1Feature6: "Offline-capable mobile app with background sync",
    p1Feature7: "Email notification system via Resend for account actions",
    p1Feature8: "Rate-limited API with comprehensive error handling",
    p1Challenge1Title: "Offline-First Data Sync",
    p1Challenge1Desc: "Designed a custom sync engine that queues mutations in SQLite when offline and replays them in order upon reconnection, handling conflict resolution with last-write-wins semantics and server-side validation.",
    p1Challenge2Title: "Role-Based Access Across Three Clients",
    p1Challenge2Desc: "Implemented a unified RBAC system using Firebase custom claims that propagates across mobile, API, and admin dashboard, ensuring consistent permission enforcement at every layer.",
    p1Challenge3Title: "Startup Crash Resilience",
    p1Challenge3Desc: "Resolved critical module-level initialization issues where missing environment variables would crash the entire API. Implemented graceful degradation patterns so non-critical services fail softly.",

    // Project 2 Detailed Content
    p2HeroSubtitle: "Turn knowledge into smart quizzes — upload PDFs or enter topics, and AI generates comprehensive assessments instantly.",
    p2Problem: "Educators and content creators spend hours manually crafting quizzes from course material. Existing tools generate shallow, keyword-based questions that fail to test genuine understanding. There was no accessible solution that could analyze complex material and produce pedagogically sound assessments.",
    p2Solution: "Built a full-stack platform that accepts raw text, PDFs, or topic descriptions and uses large language models to generate multi-format quizzes (multiple choice, true/false, short answer). The system includes intelligent difficulty calibration, answer explanation generation, and a quiz-taking interface with real-time scoring.",
    p2Architecture: "The application leverages a powerful Retrieval-Augmented Generation (RAG) pipeline. Users upload a PDF or enter a topic via the React UI, which is passed to the Retrieval service. The system extracts and chunks the text, indexing it into an Elastic Search database. When generating a quiz, relevant chunks are retrieved and sent to the Generation service (powered by Gemini 2.5 Flash). Gemini processes the context and synthesizes structured quiz questions and answers, which are then displayed to the user.",
    p2Impact1: "Generation Time",
    p2Impact2: "Question Accuracy",
    p2Impact3: "User Satisfaction",
    p2Impact4: "Documents Processed",
    p2Feature1: "Multi-format quiz generation (MCQ, True/False, Short Answer)",
    p2Feature2: "Difficulty calibration from Easy to Expert",
    p2Feature3: "PDF and raw text input parsing",
    p2Feature4: "AI-generated answer explanations",
    p2Feature5: "Real-time quiz-taking with instant scoring",
    p2Feature6: "Quiz history and performance analytics",
    p2Feature7: "Shareable quiz links with unique codes",
    p2Feature8: "Rate-limited API with token usage tracking",
    p2Challenge1Title: "Consistent LLM Output Parsing",
    p2Challenge1Desc: "Designed a robust output parser with JSON schema validation and retry logic to handle inconsistent LLM responses.",
    p2Challenge2Title: "Large Document Processing",
    p2Challenge2Desc: "Implemented a chunking strategy with overlapping windows to handle documents exceeding context limits.",

    // Project 3 Detailed Content
    p3HeroSubtitle: "A full-stack platform built to help users explore, review, and engage with local businesses, services, and events.",
    p3Problem: "Users needed a centralized, reliable platform to discover local businesses and services, complete with authentic reviews and an easy-to-use mobile experience. Existing solutions were either web-only or lacked a cohesive ecosystem for both business owners and consumers.",
    p3Solution: "Developed a comprehensive platform consisting of a responsive web interface (React) and a cross-platform mobile app (React Native). The system is powered by a robust Laravel 11 backend with secure REST APIs, handling everything from multi-step onboarding to role-based routing.",
    p3Architecture: "The system follows a decoupled architecture. The frontend web application is built with ReactJS and TailwindCSS, hosted on Vercel. The mobile application is built using React Native and Expo. Both clients communicate with a centralized backend API built on Laravel 11 (PHP) and MySQL, which handles authentication, business logic, and local storage for media uploads.",
    p3Impact1: "Platform Ecosystem",
    p3Impact2: "Backend Framework",
    p3Impact3: "API Architecture",
    p3Impact4: "Codebase",
    p3Feature1: "Multi-step business, service & event applications",
    p3Feature2: "Ratings & review submission system",
    p3Feature3: "Responsive web UI with Tailwind CSS",
    p3Feature4: "Cross-platform mobile app (iOS/Android)",
    p3Feature5: "Role-based routing (User, Business Owner, Admin)",
    p3Feature6: "Secure REST API authentication",
    p3Feature7: "File and image upload management",
    p3Challenge1Title: "Unified API for Web & Mobile",
    p3Challenge1Desc: "Designed and implemented a single Laravel REST API that securely serves both the React web frontend and the React Native mobile app.",
    p3Challenge2Title: "Multi-Platform Onboarding",
    p3Challenge2Desc: "Built complex multi-step application forms for businesses and services that work seamlessly on both responsive web browsers and native mobile screens.",

    viewCaseStudy: "View Case Study",
    liveDemo: "Live Demo",
    github: "GitHub",

    // About
    aboutTitle: "About Me",
    aboutText1: "I am a passionate Full-Stack and Mobile Engineer with a strong background in building robust, scalable applications. My expertise spans from crafting intuitive user interfaces to designing complex backend systems and mobile experiences.",
    aboutText2: "With a deep understanding of the modern web and mobile ecosystem, I specialize in technologies like React, Next.js, Node.js, and React Native. I thrive on solving complex problems and delivering high-quality code that drives impact.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    heroBadge: "Software Engineer",
    aboutMission: "Building scalable mobile & web apps with real-world impact",
    aboutFocusAreas: "Focus Areas",
    aboutPhilosophy: "Philosophy",
    aboutPhilosophyText: "I believe great software is invisible — it gets out of the user's way and just works. I obsess over clean architecture, sub-second response times, and graceful error handling.",
    downloadResume: "Download CV",
    focus1: "Mobile & Web Dev",
    focus2: "Backend APIs",
    focus3: "AI Integrations",
    focus4: "Healthcare Tech",

    // Experience Data
    exp1Date: "Oct 2024 – May 2025",
    exp1Role: "Full Stack Developer & Acting Tech Lead",
    exp1Company: "Interact Health PRO",
    exp1Location: "Canada (Remote)",
    exp2Date: "Jun – Sep 2024",
    exp2Role: "Software Engineering Analyst Intern",
    exp2Company: "OMNISHORE MED TECH",
    exp2Location: "Casablanca, Morocco",

    // Skills
    skillsTitle: "Skills & Technologies",
    skillsLabel: "Expertise",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Feel free to reach out for opportunities or collaboration.",
    copyEmail: "Copy Email",
    emailCopied: "Email Copied!",
    sendEmail: "Send me an email",

    // Project Details
    backToProjects: "Back to Projects",
    viewLiveSite: "View Live Site",
    theProblem: "The Problem",
    theSolution: "The Solution",
    technicalArchitecture: "Technical Architecture",
    apiLayer: "API Layer",
    client: "Client",
    admin: "Admin",
    database: "Database",
    coreFeatures: "Core Features",
    challengesAndSolutions: "Challenges & Solutions",
    interfaceGallery: "Interface Gallery",
    builtWith: "Built With",

    // Footer
    footerDesc: "Software Engineer building high-performance mobile and web applications with a focus on performance and AI integration.",
    footerNavigation: "Navigation",
    footerConnect: "Connect",
    footerAvailable: "Available for new projects",
    footerRights: "All rights reserved.",

    // Project Categories (for mapping)
    categoryHealthcare: "Healthcare · Full-Stack · Mobile",
    categoryAI: "AI · EdTech · Full-Stack",
    categoryB2B: "B2B · Networking · Full-Stack · Mobile",
  },
  fr: {
    // Navbar
    navHome: "Accueil",
    navProjects: "Projets",
    navAbout: "À propos",
    navContact: "Contact",

    // Hero
    heroTitle: "Ingénieur Full-Stack & Mobile créant des solutions numériques haute performance.",
    heroSubtitle: "Je conçois des applications web et mobiles évolutives en mettant l'accent sur la performance, l'expérience utilisateur et une architecture propre.",
    heroCta: "Voir mes projets",

    // Projects
    projectsTitle: "Projets Vedettes",
    projectsLabel: "Travaux",
    projectsSubtitle: "Une sélection de mes récentes applications full-stack, mobiles et basées sur l'IA.",
    viewProject: "Voir les détails",

    // Project 1
    p1Title: "Interact Health PRO",
    p1Desc: "Une plateforme de gestion de la santé avec application mobile React Native, API Node.js et tableau de bord React.",

    // Project 2
    p2Title: "QuizGen-AI",
    p2Desc: "Une plateforme propulsée par l'IA qui transforme les documents en quiz interactifs via LLM.",

    // Project 3
    p3Title: "BizLinker",
    p3Desc: "Une plateforme de réseautage B2B connectant les entreprises via un matching intelligent.",
    
    // Contenu détaillé Projet 1
    p1HeroSubtitle: "Plateforme de santé de bout en bout permettant aux cliniciens de gérer les patients, de suivre la récupération après commotion cérébrale et de simplifier les flux administratifs sur mobile, web et API.",
    p1Problem: "Les professionnels de santé s'appuyaient sur des outils fragmentés — dossiers papier, feuilles de calcul et applications déconnectées — pour gérer les données des patients, suivre la récupération et coordonner les soins. Cela entraînait des silos de données, des interventions retardées et une charge administrative importante réduisant le temps passé avec les patients.",
    p1Solution: "Création d'une plateforme monorepo unifiée composée de trois systèmes étroitement intégrés : une application mobile React Native pour les cliniciens, une API REST Node.js/Express robuste avec Firebase Auth et contrôle d'accès basé sur les rôles, et un tableau de bord administrateur React pour les superviseurs. L'architecture prend en charge la synchronisation des données en temps réel, les notifications push et la journalisation d'audit complète.",
    p1Architecture: "Le système suit une architecture monorepo avec trois packages : mobile (React Native/Expo), api (Node.js/Express) et web-admin (React/Vite). La couche API implémente une architecture orientée services avec des contrôleurs, des services et des couches d'accès aux données. Firebase Auth gère l'authentification avec des revendications personnalisées pour la gestion des rôles. MongoDB sert de magasin de données principal avec Mongoose ODM pour la validation des schémas. L'application mobile utilise un moteur de synchronisation personnalisé pour des capacités offline-first, mettant les mutations en file d'attente localement.",
    p1Impact1: "Réduction de la charge admin",
    p1Impact2: "Temps de réponse API (p95)",
    p1Impact3: "Taux sans crash",
    p1Impact4: "Adoption par les cliniciens",
    p1Feature1: "Onboarding sécurisé des patients avec formulaires multi-étapes",
    p1Feature2: "Suivi des symptômes en temps réel avec graphiques de progression",
    p1Feature3: "Contrôle d'accès basé sur les rôles (Clinicien, Superviseur, Admin)",
    p1Feature4: "Système de notification push pour les rappels de rendez-vous",
    p1Feature5: "Tableau de bord admin avec analyses et journaux d'audit",
    p1Feature6: "App mobile hors ligne avec synchronisation en arrière-plan",
    p1Feature7: "Système de notification par e-mail via Resend",
    p1Feature8: "API limitée en débit avec gestion complète des erreurs",
    p1Challenge1Title: "Synchronisation de données Offline-First",
    p1Challenge1Desc: "Conception d'un moteur de synchronisation personnalisé qui met les mutations en file d'attente dans SQLite en mode hors connexion.",
    p1Challenge2Title: "Accès basé sur les rôles sur trois clients",
    p1Challenge2Desc: "Implémentation d'un système RBAC unifié utilisant des revendications personnalisées Firebase.",
    p1Challenge3Title: "Résilience au crash au démarrage",
    p1Challenge3Desc: "Résolution des problèmes critiques d'initialisation des modules où des variables d'environnement manquantes faisaient planter l'API.",

    // Contenu détaillé Projet 2
    p2HeroSubtitle: "Transformez vos connaissances en quiz intelligents — téléchargez des PDF ou saisissez des sujets, et l'IA génère instantanément des évaluations complètes.",
    p2Problem: "Les éducateurs et les créateurs de contenu passent des heures à créer manuellement des quiz à partir de matériel de cours. Les outils existants génèrent des questions superficielles basées sur des mots-clés qui ne testent pas la compréhension réelle. Il n'existait aucune solution accessible capable d'analyser du matériel complexe et de produire des évaluations pédagogiquement saines.",
    p2Solution: "Création d'une plateforme full-stack qui accepte du texte brut, des PDF ou des descriptions de sujets et utilise des modèles de langage à grande échelle pour générer des quiz multi-formats (choix multiples, vrai/faux, réponse courte). Le système comprend un étalonnage intelligent de la difficulté, la génération d'explications de réponses et une interface de passage de quiz avec notation en temps réel.",
    p2Architecture: "L'application exploite un puissant pipeline de génération augmentée par récupération (RAG). Les utilisateurs téléchargent un PDF ou saisissent un sujet via l'interface React, qui est transmise au service de récupération. Le système extrait et découpe le texte, l'indexant dans une base de données Elastic Search. Lors de la génération d'un quiz, les segments pertinents sont récupérés et envoyés au service de génération (propulsé par Gemini 2.5 Flash). Gemini traite le contexte et synthétise des questions et réponses de quiz structurées.",
    p2Impact1: "Temps de génération",
    p2Impact2: "Précision des questions",
    p2Impact3: "Satisfaction utilisateur",
    p2Impact4: "Documents traités",
    p2Feature1: "Génération de quiz multi-formats (QCM, Vrai/Faux)",
    p2Feature2: "Étalonnage de la difficulté de Facile à Expert",
    p2Feature3: "Analyse de PDF et de texte brut",
    p2Feature4: "Explications de réponses générées par l'IA",
    p2Feature5: "Passage de quiz en temps réel avec notation",
    p2Feature6: "Historique des quiz et analyses de performance",
    p2Feature7: "Liens de quiz partageables avec codes uniques",
    p2Feature8: "API limitée en débit avec suivi d'utilisation",
    p2Challenge1Title: "Analyse cohérente des sorties LLM",
    p2Challenge1Desc: "Conception d'un analyseur de sortie robuste avec validation de schéma JSON.",
    p2Challenge2Title: "Traitement de documents volumineux",
    p2Challenge2Desc: "Mise en œuvre d'une stratégie de découpage avec fenêtres chevauchantes.",

    // Contenu détaillé Projet 3
    p3HeroSubtitle: "Une plateforme full-stack conçue pour aider les utilisateurs à explorer, évaluer et interagir avec les entreprises locales, les services et les événements.",
    p3Problem: "Les utilisateurs avaient besoin d'une plateforme centralisée et fiable pour découvrir les entreprises et services locaux, avec des avis authentiques et une expérience mobile facile à utiliser. Les solutions existantes étaient soit uniquement web, soit manquaient d'un écosystème cohérent pour les propriétaires d'entreprises et les consommateurs.",
    p3Solution: "Développement d'une plateforme complète composée d'une interface web réactive (React) et d'une application mobile multiplateforme (React Native). Le système est propulsé par un backend Laravel 11 robuste avec des API REST sécurisées, gérant tout, de l'onboarding en plusieurs étapes au routage basé sur les rôles.",
    p3Architecture: "Le système suit une architecture découplée. L'application web frontend est construite avec ReactJS et TailwindCSS, hébergée sur Vercel. L'application mobile est construite en utilisant React Native et Expo. Les deux clients communiquent avec une API backend centralisée construite sur Laravel 11 (PHP) et MySQL, qui gère l'authentification, la logique métier et le stockage local pour les téléchargements de médias.",
    p3Impact1: "Écosystème de plateforme",
    p3Impact2: "Framework Backend",
    p3Impact3: "Architecture API",
    p3Impact4: "Codebase",
    p3Feature1: "Applications multi-étapes pour entreprises & événements",
    p3Feature2: "Système de soumission d'avis et de notes",
    p3Feature3: "Interface web réactive avec Tailwind CSS",
    p3Feature4: "App mobile multiplateforme (iOS/Android)",
    p3Feature5: "Routage basé sur les rôles (Utilisateur, Business, Admin)",
    p3Feature6: "Authentification API REST sécurisée",
    p3Feature7: "Gestion des téléchargements de fichiers et d'images",
    p3Challenge1Title: "API unifiée pour Web & Mobile",
    p3Challenge1Desc: "Conception d'une seule API REST Laravel servant à la fois le frontend web React et l'application mobile React Native.",
    p3Challenge2Title: "Onboarding multiplateforme",
    p3Challenge2Desc: "Construction de formulaires d'application complexes multi-étapes fonctionnant parfaitement sur le web et sur mobile.",

    viewCaseStudy: "Étude de cas",
    liveDemo: "Démo en direct",
    github: "GitHub",

    // About
    aboutTitle: "À propos de moi",
    aboutText1: "Je suis un ingénieur Full-Stack et Mobile passionné, avec une solide expérience dans la création d'applications robustes et évolutives. Mon expertise s'étend de la conception d'interfaces utilisateur intuitives à la conception de systèmes backend complexes et d'expériences mobiles.",
    aboutText2: "Avec une compréhension approfondie de l'écosystème web et mobile moderne, je me spécialise dans des technologies comme React, Next.js, Node.js et React Native. J'aime résoudre des problèmes complexes et fournir un code de haute qualité qui génère de l'impact.",
    experienceTitle: "Expérience",
    educationTitle: "Éducation",
    heroBadge: "Ingénieur Logiciel",
    aboutMission: "Créer des applications mobiles et web évolutives avec un impact réel",
    aboutFocusAreas: "Domaines de concentration",
    aboutPhilosophy: "Philosophie",
    aboutPhilosophyText: "Je crois que le bon logiciel est invisible — il s'efface devant l'utilisateur et fonctionne tout simplement. Je suis obsédé par l'architecture propre, les temps de réponse ultra-rapides et la gestion gracieuse des erreurs.",
    downloadResume: "Télécharger le CV",
    focus1: "Dév Mobile & Web",
    focus2: "APIs Backend",
    focus3: "Intégrations IA",
    focus4: "Tech Santé",

    // Experience Data
    exp1Date: "Oct. 2024 – Mai 2025",
    exp1Role: "Développeur Full Stack & Tech Lead par intérim",
    exp1Company: "Interact Health PRO",
    exp1Location: "Canada (À distance)",
    exp2Date: "Juin – Sep. 2024",
    exp2Role: "Analyste Stagiaire en Génie Logiciel",
    exp2Company: "OMNISHORE MED TECH",
    exp2Location: "Casablanca, Maroc",

    // Skills
    skillsTitle: "Compétences & Technologies",
    skillsLabel: "Expertise",

    // Contact
    contactTitle: "Contactez-moi",
    contactSubtitle: "N'hésitez pas à me contacter pour des opportunités ou une collaboration.",
    copyEmail: "Copier l'email",
    emailCopied: "Email copié !",
    sendEmail: "Envoyez-moi un email",

    // Project Details
    backToProjects: "Retour aux projets",
    viewLiveSite: "Voir le site en direct",
    theProblem: "Le Problème",
    theSolution: "La Solution",
    technicalArchitecture: "Architecture Technique",
    apiLayer: "Couche API",
    client: "Client",
    admin: "Admin",
    database: "Base de données",
    coreFeatures: "Fonctionnalités principales",
    challengesAndSolutions: "Défis & Solutions",
    interfaceGallery: "Galerie d'interface",
    builtWith: "Construit avec",

    // Footer
    footerDesc: "Ingénieur Logiciel créant des applications mobiles et web haute performance avec un focus sur la performance et l'intégration de l'IA.",
    footerNavigation: "Navigation",
    footerConnect: "Connexion",
    footerAvailable: "Disponible pour de nouveaux projets",
    footerRights: "Tous droits réservés.",

    // Project Categories
    categoryHealthcare: "Santé · Full-Stack · Mobile",
    categoryAI: "IA · EdTech · Full-Stack",
    categoryB2B: "B2B · Networking · Full-Stack · Mobile",
  },
};

export type Language = "en" | "fr";
export type TranslationKey = keyof typeof translations.en;
