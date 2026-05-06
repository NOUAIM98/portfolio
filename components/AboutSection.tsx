"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-8 font-mono text-sm text-green-400">
            {">"} nouaim.dev@portfolio:~$ <span className="text-foreground">cat about.txt</span>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-xl border border-border-light bg-[#0f0f11] p-6 font-mono text-sm leading-relaxed text-muted-light shadow-2xl">
              <div className="mb-4 flex items-center gap-2 border-b border-border-light pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs text-muted">about.txt</span>
              </div>
              <div className="mb-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border-light">
                  <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
                </div>
                <p className="text-foreground">
                  Software Engineer with experience in building
                  scalable Full-Stack applications and integrating AI systems. Passionate about
                  clean architecture, performance, and delivering real impact.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-accent-light"># Focus areas</span>
                  <ul className="mt-2 space-y-1 pl-4 text-muted">
                    <li>- Mobile & Web Development</li>
                    <li>- Backend Architecture & APIs</li>
                    <li>- AI & LLM Integrations</li>
                    <li>- Healthcare & B2B Solutions</li>
                  </ul>
                </div>
                <div>
                  <span className="text-accent-light"># Philosophy</span>
                  <p className="mt-2 pl-4 text-muted">
                    I believe great software is invisible — it gets out of the
                    user&apos;s way and just works. That belief drives me to obsess over
                    clean architecture, sub-second response times, and graceful error
                    handling.
                  </p>
                </div>
              </div>
              <div className="mt-8 animate-pulse text-green-400">_</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                Experience Timeline
              </h3>
              <div className="space-y-6">
                {[
                  { role: "Software Engineer", company: "Tech Solutions", year: "2023 - Present" },
                  { role: "Mobile Developer", company: "HealthTech Innovations", year: "2021 - 2023" },
                  { role: "Frontend Developer", company: "Creative Agency", year: "2019 - 2021" },
                ].map((item, index) => (
                  <div key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                    {index !== 2 && (
                      <div className="absolute left-[3px] top-4 h-full w-[2px] bg-border-light"></div>
                    )}
                    <div className="text-xs font-mono text-accent-light">{item.year}</div>
                    <div className="mt-1 font-medium text-foreground">{item.role}</div>
                    <div className="text-sm text-muted">{item.company}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border-light">
                 <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full justify-center items-center gap-2 rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/40 hover:bg-surface-hover"
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
                      className="text-muted group-hover:text-accent-light transition-colors"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Download Resume
                  </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
