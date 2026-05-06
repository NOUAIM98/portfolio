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

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        href={`/projects/${project.slug}`}
        id={`project-card-${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(109,90,230,0.15)]"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-xs font-medium text-accent">
              {project.category}
            </span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent-light">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Case Study
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
