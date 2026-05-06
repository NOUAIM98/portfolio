"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

import { useLanguage } from "./LanguageContext";
import type { TranslationKey } from "@/data/translations";

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  const { t } = useLanguage();

  // Map project to its translation keys
  const projectKeys: Record<string, { title: TranslationKey; desc: TranslationKey; cat: TranslationKey }> = {
    "interact-health-pro": { title: "p1Title", desc: "p1Desc", cat: "categoryHealthcare" },
    "quizgen-ai": { title: "p2Title", desc: "p2Desc", cat: "categoryAI" },
    "bizlinker": { title: "p3Title", desc: "p3Desc", cat: "categoryB2B" },
  };

  const keys = projectKeys[project.slug] || { title: "p1Title", desc: "p1Desc", cat: "categoryHealthcare" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(109,90,230,0.15)]">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Container */}
          <div className={`relative overflow-hidden ${featured ? "h-80 md:h-auto" : "aspect-video"}`}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {t(keys.cat)}
              </span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl transition-colors group-hover:text-accent-light">
              {t(keys.title)}
            </h3>
            
            <p className="mb-6 text-base leading-relaxed text-muted line-clamp-3">
              {t(keys.desc)}
            </p>

            {/* Tech Badges */}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-md border border-border-light bg-surface-light px-2 py-1 text-[10px] font-medium text-muted uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white"
              >
                {t("viewCaseStudy")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {t("liveDemo")}
                </a>
              )}
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {t("github")}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
