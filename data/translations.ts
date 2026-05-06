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
    downloadResume: "Download Resume",
    focus1: "Mobile & Web Dev",
    focus2: "Backend APIs",
    focus3: "AI Integrations",
    focus4: "Healthcare Tech",

    // Skills
    skillsTitle: "Skills & Technologies",
    skillsLabel: "Expertise",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Feel free to reach out for opportunities or collaboration.",
    copyEmail: "Copy Email",
    emailCopied: "Email Copied!",
    sendEmail: "Send me an email",

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

    // Skills
    skillsTitle: "Compétences & Technologies",
    skillsLabel: "Expertise",

    // Contact
    contactTitle: "Contactez-moi",
    contactSubtitle: "N'hésitez pas à me contacter pour des opportunités ou une collaboration.",
    copyEmail: "Copier l'email",
    emailCopied: "Email copié !",
    sendEmail: "Envoyez-moi un email",

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
