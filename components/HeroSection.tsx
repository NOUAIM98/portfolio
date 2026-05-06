"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative flex min-h-[90vh] items-center pt-20">
      {/* Background glow effects */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow blur-[120px]" />
      
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="mb-6 inline-flex items-center rounded-full border border-border-light bg-surface-light/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-medium text-muted">{t("heroBadge")}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1]">
              {t("heroTitle")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {t("heroSubtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-light"
              >
                {t("heroCta")}
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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              
              <a
                href="https://github.com/NOUAIM98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border-light bg-surface-light px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface-hover"
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
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>

              <a
                href={language === "fr" ? "/cv-fr.pdf" : "/cv-en.pdf"}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border-light bg-surface-light px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-surface-hover"
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                {t("downloadResume")}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
