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
    // Project 1
    p1Title: "Interact Health PRO",
    p1Desc: "An enterprise-grade healthcare management suite engineered for clinical efficiency and secure provider-patient interactions.",

    // Project 2
    p2Title: "QuizGen-AI",
    p2Desc: "A high-performance AI assessment engine designed to automate the transition from raw documentation to structured educational content.",

    // Project 3
    p3Title: "BizLinker",
    p3Desc: "A unified B2B and consumer networking ecosystem that bridges the gap between web-based business management and mobile-first user engagement.",
    
    // Project 1 Detailed Content
    p1HeroSubtitle: "The platform streamlines healthcare workflows by integrating mobile clinician tools, administrative dashboards, and automated communication services into a unified, HIPAA-aware ecosystem.",
    p1Problem: "Healthcare professionals were relying on fragmented tools — paper records, spreadsheets, and disconnected apps — to manage patient data, track concussion recovery, and coordinate care. This led to data silos, delayed interventions, and significant administrative overhead that reduced time spent with patients.",
    p1Solution: "Built on a robust full-stack foundation, the system features a modular Express.js backend that serves as the single source of truth for a React Native mobile app and a React-based admin dashboard. Security is prioritized through a multi-layered approach: Firebase Authentication manages user identity, while custom JWT middleware enforces granular role-based access control (RBAC) across protected API routes. The administrative layer is powered by AdminJS for sophisticated resource management, and the infrastructure is orchestrated across Render and Vercel for maximum reliability.",
    p1Architecture: "The system follows a monorepo architecture with three core packages: a mobile clinician client (React Native/Expo), a modular backend API (Node.js/Express), and a centralized management dashboard (React/AdminJS). The API layer implements a service-oriented design with controllers, services, and data access layers. Firebase Auth handles identity management, while custom claims facilitate role-based access. MongoDB serves as the primary datastore, with the infrastructure distributed across Render and Vercel for optimal reliability.",
    p1Impact1: "Reduction in Admin Workload",
    p1Impact2: "API Response Time (p95)",
    p1Impact3: "Crash-Free Rate",
    p1Impact4: "Clinician Adoption",
    p1Feature1: "Multi-Role RBAC System: Granular permission management for Admins, Providers, and Patients.",
    p1Feature2: "Provider Linking System: Specialized architecture for connecting clinicians with patient records.",
    p1Feature3: "Automated Notification Architecture: Integrated email and push notification flows for alerts.",
    p1Feature4: "Production-Grade Infrastructure: Secure API design with modular service layers.",
    p1Challenge1Title: "Offline-First Data Sync",
    p1Challenge1Desc: "Designed a custom sync engine that queues mutations in SQLite when offline and replays them in order upon reconnection, handling conflict resolution with last-write-wins semantics.",
    p1Challenge2Title: "Role-Based Access Across Three Clients",
    p1Challenge2Desc: "Implemented a unified RBAC system using Firebase custom claims that propagates across mobile, API, and admin dashboard, ensuring consistent permission enforcement.",
    p1Challenge3Title: "Startup Crash Resilience",
    p1Challenge3Desc: "Resolved critical module-level initialization issues where missing environment variables would crash the entire API. Implemented graceful degradation patterns so non-critical services fail softly.",y.",

    // Project 2 Detailed Content
    p2HeroSubtitle: "The platform enables educators and organizations to transform PDFs, images, and complex documents into pedagogically sound quizzes in seconds.",
    p2Problem: "Educators and content creators spend hours manually crafting quizzes from course material. Existing tools generate shallow, keyword-based questions that fail to test genuine understanding. There was no accessible solution that could analyze complex material and produce pedagogically sound assessments.",
    p2Solution: "The system utilizes a decoupled full-stack architecture featuring a modular React/Next.js frontend and a scalable Express.js backend. At its core is an asynchronous AI generation pipeline that orchestrates document parsing and LLM synthesis. The backend manages state via MongoDB and handles complex file processing, while the frontend leverages a component-driven Tailwind UI system for a seamless, responsive user experience.",
    p2Architecture: "The application leverages a decoupled architecture where a Next.js frontend communicates with an Express.js backend. At its core is an asynchronous Retrieval-Augmented Generation (RAG) pipeline. The system extracts and chunks text from uploaded files, indexing them for retrieval. The generation service, powered by Gemini and OpenAI, processes the context to synthesize structured quiz questions. The entire ecosystem is deployed across a distributed Vercel and Render infrastructure for high availability.",
    p2Impact1: "Generation Time",
    p2Impact2: "Question Accuracy",
    p2Impact3: "User Satisfaction",
    p2Impact4: "Documents Processed",
    p2Feature1: "Intelligent Content Pipeline: Automated extraction of text from PDFs and documents.",
    p2Feature2: "Asynchronous Quiz Synthesis: Multi-format quiz generation with real-time progress tracking.",
    p2Feature3: "Role-Based Security: Secure authentication system with protected routes.",
    p2Feature4: "Advanced Generation Controls: Fine-grained calibration for difficulty levels and learning objectives.",
    p2Challenge1Title: "Consistent LLM Output Parsing",
    p2Challenge1Desc: "Designed a robust output parser with JSON schema validation and retry logic to handle inconsistent LLM responses.",
    p2Challenge2Title: "Large Document Processing",
    p2Challenge2Desc: "Implemented a chunking strategy with overlapping windows to handle documents exceeding context limits.",

    // Project 3 Detailed Content
    p3HeroSubtitle: "Designed for scalability, the platform facilitates seamless discovery, networking, and opportunity management through a synchronized cross-platform experience.",
    p3Problem: "Users needed a centralized, reliable platform to discover local businesses and services, complete with authentic reviews and an easy-to-use mobile experience. Existing solutions were either web-only or lacked a cohesive ecosystem for both business owners and consumers.",
    p3Solution: "The platform implements a multi-client architecture powered by a centralized RESTful service layer. The ecosystem comprises a React/Next.js web application for administrative and desktop users, alongside a React Native + Expo mobile application for on-the-go networking. A shared API communication layer ensures data consistency across all platforms, utilizing MongoDB and Firebase for real-time synchronization and secure data management.",
    p3Architecture: "The system follows a decoupled architecture where both the React/Next.js web frontend and the React Native mobile app communicate with a centralized RESTful API service. The deployment pipeline is optimized for simultaneous updates across web and mobile platforms, ensuring feature parity. Data persistence and real-time features are managed through a combination of MongoDB and Firebase, providing a seamless user experience across the entire networking ecosystem.",
    p3Impact1: "Platform Ecosystem",
    p3Impact2: "Backend Framework",
    p3Impact3: "API Architecture",
    p3Impact4: "Codebase",
    p3Feature1: "Multi-Platform Synchronization: Real-time data consistency between web and mobile clients.",
    p3Feature2: "Intelligent Networking Engine: Business discovery and engagement with structured data management.",
    p3Feature3: "Unified Auth System: Secure authentication flow supporting multiple user roles.",
    p3Feature4: "Scalable Business Ecosystem: Robust architecture designed for complex networking flows.",
    p3Challenge1Title: "Unified API for Web & Mobile",
    p3Challenge1Desc: "Designed and implemented a single REST API that securely serves both the React web frontend and the React Native mobile app, ensuring consistent data validation and authentication.",
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
    // Project 1
    p1Title: "Interact Health PRO",
    p1Desc: "Une suite de gestion de santé de classe entreprise conçue pour l'efficacité clinique et des interactions sécurisées entre prestataires et patients.",

    // Project 2
    p2Title: "QuizGen-AI",
    p2Desc: "Un moteur d'évaluation par IA haute performance conçu pour automatiser la transition de la documentation brute vers un contenu éducatif structuré.",

    // Project 3
    p3Title: "BizLinker",
    p3Desc: "Un écosystème de réseautage B2B et grand public unifié qui comble le fossé entre la gestion commerciale web et l'engagement utilisateur mobile.",
    
    // Contenu détaillé Projet 1
    p1HeroSubtitle: "La plateforme simplifie les flux de travail en santé en intégrant des outils cliniques mobiles, des tableaux de bord administratifs et des services de communication automatisés dans un écosystème unifié et conforme aux normes.",
    p1Problem: "Les professionnels de santé s'appuyaient sur des outils fragmentés — dossiers papier, feuilles de calcul et applications déconnectées — pour gérer les données des patients, suivre la récupération et coordonner les soins. Cela entraînait des silos de données, des interventions retardées et une charge administrative importante réduisant le temps passé avec les patients.",
    p1Solution: "Reposant sur une base full-stack robuste, le système comprend un backend Express.js modulaire servant de source unique de vérité pour une application mobile React Native et un tableau de bord admin React. La sécurité est priorisée via une approche multicouche : Firebase Authentication gère l'identité, tandis qu'un middleware JWT personnalisé applique un contrôle d'accès basé sur les rôles (RBAC) granulaire sur des routes API protégées. La couche administrative est propulsée par AdminJS, et l'infrastructure est orchestrée sur Render et Vercel pour une fiabilité maximale.",
    p1Architecture: "Le système suit une architecture monorepo avec trois packages : un client clinique mobile (React Native/Expo), une API backend modulaire (Node.js/Express) et un tableau de bord de gestion centralisé (React/AdminJS). La couche API implémente une conception orientée services avec contrôleurs et services. Firebase Auth gère l'identité, tandis que des revendications personnalisées facilitent l'accès par rôle. MongoDB sert de base de données principale, avec une infrastructure distribuée sur Render et Vercel.",
    p1Impact1: "Réduction de la charge admin",
    p1Impact2: "Temps de réponse API (p95)",
    p1Impact3: "Taux sans crash",
    p1Impact4: "Adoption par les cliniciens",
    p1Feature1: "Système RBAC multi-rôles : Gestion granulaire des permissions pour les administrateurs, prestataires et patients.",
    p1Feature2: "Système de liaison prestataire : Architecture spécialisée pour connecter les cliniciens aux dossiers patients.",
    p1Feature3: "Architecture de notification automatisée : Flux d'e-mails et de notifications push intégrés pour les alertes.",
    p1Feature4: "Infrastructure de classe production : Conception d'API sécurisée avec des couches de services modulaires.",
    p1Challenge1Title: "Synchronisation de données Offline-First",
    p1Challenge1Desc: "Conception d'un moteur de synchronisation personnalisé qui met les mutations en file d'attente dans SQLite en mode hors connexion.",
    p1Challenge2Title: "Accès basé sur les rôles sur trois clients",
    p1Challenge2Desc: "Implémentation d'un système RBAC unifié utilisant des revendications personnalisées Firebase.",
    p1Challenge3Title: "Résilience au crash au démarrage",
    p1Challenge3Desc: "Résolution des problèmes critiques d'initialisation des modules où des variables d'environnement manquantes faisaient planter l'API.",

    // Contenu détaillé Projet 2
    p2HeroSubtitle: "La plateforme permet aux éducateurs et aux organisations de transformer des PDF, des images et des documents complexes en quiz pédagogiques en quelques secondes.",
    p2Problem: "Les éducateurs et les créateurs de contenu passent des heures à créer manuellement des quiz à partir de matériel de cours. Les outils existants génèrent des questions superficielles basées sur des mots-clés qui ne testent pas la compréhension réelle. Il n'existait aucune solution accessible capable d'analyser du matériel complexe et de produire des évaluations pédagogiquement saines.",
    p2Solution: "Le système utilise une architecture full-stack découplée avec un frontend Next.js modulaire et un backend Express.js évolutif. Au cœur se trouve un pipeline de génération par IA asynchrone orchestrant l'analyse de documents et la synthèse par LLM. Le backend gère l'état via MongoDB, tandis que le frontend utilise un système UI Tailwind pour une expérience utilisateur fluide et réactive.",
    p2Architecture: "L'application exploite une architecture découplée où un frontend Next.js communique avec un backend Express.js. Au cœur se trouve un pipeline RAG (Génération Augmentée par Récupération) asynchrone. Le système extrait et découpe le texte des fichiers téléchargés pour l'indexation. Le service de génération, propulsé par Gemini et OpenAI, synthétise des questions de quiz structurées. L'écosystème est déployé sur Vercel et Render pour une haute disponibilité.",
    p2Impact1: "Temps de génération",
    p2Impact2: "Précision des questions",
    p2Impact3: "Satisfaction utilisateur",
    p2Impact4: "Documents traités",
    p2Feature1: "Pipeline de contenu intelligent : Extraction automatisée de texte à partir de PDF et de documents.",
    p2Feature2: "Synthèse de quiz asynchrone : Génération de quiz multi-formats avec suivi de progression en temps réel.",
    p2Feature3: "Sécurité basée sur les rôles : Système d'authentification sécurisé avec routes protégées.",
    p2Feature4: "Contrôles de génération avancés : Étalonnage précis des niveaux de difficulté et des objectifs d'apprentissage.",
    p2Challenge1Title: "Analyse cohérente des sorties LLM",
    p2Challenge1Desc: "Conception d'un analyseur de sortie robuste avec validation de schéma JSON.",
    p2Challenge2Title: "Traitement de documents volumineux",
    p2Challenge2Desc: "Mise en œuvre d'une stratégie de découpage avec fenêtres chevauchantes.",

    // Contenu détaillé Projet 3
    p3HeroSubtitle: "Conçue pour l'évolutivité, la plateforme facilite la découverte, le réseautage et la gestion des opportunités via une expérience multiplateforme synchronisée.",
    p3Problem: "Les utilisateurs avaient besoin d'une plateforme centralisée et fiable pour découvrir les entreprises et services locaux, avec des avis authentiques et une expérience mobile facile à utiliser. Les solutions existantes étaient soit uniquement web, soit manquaient d'un écosystème cohérent pour les propriétaires d'entreprises et les consommateurs.",
    p3Solution: "La plateforme implémente une architecture multi-client alimentée par une couche de services RESTful centralisée. L'écosystème comprend une application web Next.js pour les administrateurs et une application mobile React Native pour le réseautage mobile. Une couche de communication API partagée assure la cohérence des données via MongoDB et Firebase pour une synchronisation en temps réel.",
    p3Architecture: "Le système suit une architecture découplée où le frontend web Next.js et l'application mobile React Native communiquent avec un service API RESTful centralisé. Le pipeline de déploiement est optimisé pour des mises à jour simultanées sur le web et le mobile. La persistance des données et les fonctionnalités en temps réel sont gérées par MongoDB et Firebase.",
    p3Impact1: "Écosystème de plateforme",
    p3Impact2: "Framework Backend",
    p3Impact3: "Architecture API",
    p3Impact4: "Codebase",
    p3Feature1: "Synchronisation multiplateforme : Cohérence des données en temps réel entre les clients web et mobiles.",
    p3Feature2: "Moteur de réseautage intelligent : Découverte et engagement commercial avec gestion de données structurées.",
    p3Feature3: "Système d'authentification unifié : Flux sécurisé prenant en charge plusieurs rôles d'utilisateur.",
    p3Feature4: "Écosystème commercial évolutif : Architecture robuste conçue pour des flux de réseautage complexes.",
    p3Challenge1Title: "API unifiée pour Web & Mobile",
    p3Challenge1Desc: "Conception d'une seule API REST servant à la fois le frontend web et l'application mobile, assurant une validation cohérente des données.",
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
