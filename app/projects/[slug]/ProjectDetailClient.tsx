"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  return (
    <article className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={project.hero.image}
            alt={project.title}
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-32">
          <FadeIn>
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
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
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {project.category}
              </span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {project.hero.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Demo */}
      {project.videoUrl && (
        <section className="py-12 pb-0">
          <div className="mx-auto max-w-5xl px-6">
            <FadeIn>
              <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
                Video Demo
              </h2>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover aspect-video"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Project Image Gallery */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={1200}
                    height={675}
                    className="w-full object-cover"
                    priority={index === 0}
                  />
                </div>
              </FadeIn>
            ))
          ) : (
            <FadeIn>
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.hero.image}
                  alt={`${project.title} screenshot`}
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

      {/* Problem & Solution */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-accent">
                  The Problem
                </h2>
                <div className="mt-4 h-px w-12 bg-accent/30" />
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-accent">
                  The Solution
                </h2>
                <div className="mt-4 h-px w-12 bg-accent/30" />
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.solution}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border-light bg-surface px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Key Features
            </h2>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-muted">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Architecture
            </h2>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <p className="text-base leading-relaxed text-muted">
                {project.architecture}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Impact & Metrics
            </h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.impact.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
                <p className="mt-2 text-xs font-medium text-muted">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
              Challenges & Solutions
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
