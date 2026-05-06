"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageContext";
import type { TranslationKey } from "@/data/translations";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const { t } = useLanguage();

  // Map project slug to its translation keys
  const projectKeys: Record<string, any> = {
    "interact-health-pro": {
      heroSubtitle: "p1HeroSubtitle",
      problem: "p1Problem",
      solution: "p1Solution",
      architecture: "p1Architecture",
      impactLabels: ["p1Impact1", "p1Impact2", "p1Impact3", "p1Impact4"],
      features: ["p1Feature1", "p1Feature2", "p1Feature3", "p1Feature4", "p1Feature5", "p1Feature6", "p1Feature7", "p1Feature8"],
      challenges: [
        { title: "p1Challenge1Title", desc: "p1Challenge1Desc" },
        { title: "p1Challenge2Title", desc: "p1Challenge2Desc" },
        { title: "p1Challenge3Title", desc: "p1Challenge3Desc" },
      ],
      cat: "categoryHealthcare"
    },
    "quizgen-ai": {
      heroSubtitle: "p2HeroSubtitle",
      problem: "p2Problem",
      solution: "p2Solution",
      architecture: "p2Architecture",
      impactLabels: ["p2Impact1", "p2Impact2", "p2Impact3", "p2Impact4"],
      features: ["p2Feature1", "p2Feature2", "p2Feature3", "p2Feature4", "p2Feature5", "p2Feature6", "p2Feature7", "p2Feature8"],
      challenges: [
        { title: "p2Challenge1Title", desc: "p2Challenge1Desc" },
        { title: "p2Challenge2Title", desc: "p2Challenge2Desc" },
      ],
      cat: "categoryAI"
    },
    "bizlinker": {
      heroSubtitle: "p3HeroSubtitle",
      problem: "p3Problem",
      solution: "p3Solution",
      architecture: "p3Architecture",
      impactLabels: ["p3Impact1", "p3Impact2", "p3Impact3", "p3Impact4"],
      features: ["p3Feature1", "p3Feature2", "p3Feature3", "p3Feature4", "p3Feature5", "p3Feature6", "p3Feature7"],
      challenges: [
        { title: "p3Challenge1Title", desc: "p3Challenge1Desc" },
        { title: "p3Challenge2Title", desc: "p3Challenge2Desc" },
      ],
      cat: "categoryB2B"
    },
  };

  const keys = projectKeys[project.slug] || projectKeys["interact-health-pro"];

  return (
    <article className="pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 border-b border-border">
        <div className="absolute inset-0 -z-10">
          <Image
            src={project.hero.image}
            alt={project.title}
            fill
            className="object-cover opacity-10 blur-xl scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <Link
              href="/#projects"
              className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-x-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              {t("backToProjects")}
            </Link>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="mb-6 flex items-center gap-4">
                <span className="rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                  {t(keys.cat)}
                </span>
                <span className="text-sm font-medium text-muted">{project.year}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl leading-tight">
                {project.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl leading-relaxed text-muted md:text-2xl font-medium max-w-2xl">
                {t(keys.heroSubtitle)}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light shadow-lg shadow-accent/20"
                  >
                    {t("viewLiveSite")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface-hover"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Media Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          {project.videoUrl ? (
            <FadeIn>
              <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                <div className="aspect-video">
                  <video
                    src={project.videoUrl}
                    poster={project.hero.image}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-3xl border border-border shadow-2xl">
                <Image
                  src={project.hero.image}
                  alt={`${project.title} Hero`}
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Case Study Content */}
      <div className="space-y-32">
        {/* Overview Stats */}
        <section className="py-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {project.impact.map((metric, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="group relative rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/40 hover:bg-surface-hover">
                    <p className="text-4xl font-extrabold text-accent mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">
                      {metric.value}
                    </p>
                    <p className="text-sm font-semibold text-muted uppercase tracking-wider">
                      {keys.impactLabels ? t(keys.impactLabels[index] as TranslationKey) : metric.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-3xl border border-border bg-surface p-10 shadow-sm transition-colors hover:bg-surface-hover">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">{t("theProblem")}</h2>
                <p className="text-lg leading-relaxed text-muted">
                  {t(keys.problem)}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-accent/5 p-10 shadow-sm transition-colors hover:bg-accent/10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">{t("theSolution")}</h2>
                <p className="text-lg leading-relaxed text-muted">
                  {t(keys.solution)}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-surface p-10 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
              </div>
              
              <h2 className="mb-12 text-3xl font-bold text-foreground">{t("technicalArchitecture")}</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
                <div className="flex flex-col gap-6 w-full md:w-auto">
                  <div className="rounded-2xl border border-border bg-background p-6 shadow-sm flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted">{t("client")}</p>
                      <p className="font-semibold">Mobile App</p>
                    </div>
                  </div>
                  
                  <div className="rounded-2xl border border-border bg-background p-6 shadow-sm flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted">{t("admin")}</p>
                      <p className="font-semibold">Dashboard</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-border via-accent/30 to-border"></div>
                </div>

                <div className="rounded-3xl border-2 border-accent bg-accent/5 p-8 text-center min-w-[200px] shadow-[0_0_30px_-5px_rgba(109,90,230,0.2)]">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{t("apiLayer")}</p>
                  <p className="text-xl font-bold">Node.js / Laravel</p>
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-border via-accent/30 to-border"></div>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6 shadow-sm flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 3 9 3 9 3s9 0 9-3V5"/><path d="M3 12c0 3 9 3 9 3s9 0 9-3"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted">{t("database")}</p>
                      <p className="font-semibold">Mongo / MySQL</p>
                    </div>
                  </div>
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-surface-light border border-border-light">
                <p className="text-muted leading-relaxed">
                  {t(keys.architecture)}
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Features & Challenges Grid */}
        <section className="mx-auto max-w-5xl px-6 grid gap-12 lg:grid-cols-2">
          {/* Features */}
          <FadeIn>
            <div className="h-full rounded-3xl border border-border bg-surface p-10">
              <h2 className="mb-10 text-3xl font-bold text-foreground flex items-center gap-3">
                <span className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </span>
                {t("coreFeatures")}
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border-light shadow-sm">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-muted leading-relaxed font-medium">
                      {keys.features && keys.features[index] ? t(keys.features[index] as TranslationKey) : feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Challenges */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-surface p-10">
              <h2 className="mb-10 text-3xl font-bold text-foreground flex items-center gap-3">
                 <span className="text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                </span>
                {t("challengesAndSolutions")}
              </h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 transition-all hover:bg-red-500/10">
                    <h3 className="mb-3 text-lg font-bold text-foreground tracking-tight">
                      {keys.challenges && keys.challenges[index] ? t(keys.challenges[index].title as TranslationKey) : challenge.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted font-medium">
                      {keys.challenges && keys.challenges[index] ? t(keys.challenges[index].desc as TranslationKey) : challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-3xl font-bold text-foreground">{t("interfaceGallery")}</h2>
            <div className="grid gap-8">
              {project.images.map((img, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xl transition-all hover:shadow-2xl ring-1 ring-white/5">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1600}
                      height={900}
                      className="w-full object-cover"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Footer */}
        <section className="mx-auto max-w-5xl px-6">
           <div className="rounded-3xl border border-border bg-surface p-10 text-center">
              <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-muted">{t("builtWith")}</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-border-light bg-background px-6 py-3 text-sm font-bold text-foreground shadow-sm transition-all hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
           </div>
        </section>
      </div>
    </article>
  );
}
