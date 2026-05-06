"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5 items-start">
          <FadeIn className="lg:col-span-3">
            <div className="group relative">
               <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
               <div className="relative rounded-3xl border border-border bg-[#0a0a0c]/80 backdrop-blur-xl p-8 font-mono text-sm leading-relaxed shadow-2xl overflow-hidden">
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                    <div className="h-3.5 w-3.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
                    <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-muted font-bold">profile.json</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
                </div>

                <div className="mb-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 p-1 bg-white/5 shadow-2xl">
                    <img src="/profile.jpg" alt="Profile" className="h-full w-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <div className="mb-2 text-accent-light font-bold">const engineer = {"{"}</div>
                    <p className="text-foreground pl-4 text-base md:text-lg">
                      <span className="text-muted">role:</span> &quot;Software Engineer&quot;,<br/>
                      <span className="text-muted">mission:</span> &quot;Building scalable mobile & web apps with real-world impact&quot;
                    </p>
                    <div className="text-accent-light font-bold">{"}"}</div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <span className="text-purple-400 font-bold block mb-4 uppercase text-[10px] tracking-widest">// Focus Areas</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                      {["Mobile & Web Dev", "Backend APIs", "AI Integrations", "Healthcare Tech"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-muted-light">
                          <span className="text-accent">→</span> {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-purple-400 font-bold block mb-4 uppercase text-[10px] tracking-widest">// Philosophy</span>
                    <p className="pl-4 text-muted-light leading-relaxed italic border-l-2 border-accent/20">
                      &quot;I believe great software is invisible — it gets out of the
                      user&apos;s way and just works. I obsess over clean architecture, sub-second response times, and graceful error handling.&quot;
                    </p>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-2 text-accent/50 font-bold">
                  <span>nouaim@portfolio:~$</span>
                  <span className="animate-pulse w-2 h-4 bg-accent"></span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-muted border-b border-border pb-4">
                Experience
              </h3>
              <div className="space-y-10">
                {[
                  { role: "Software Engineer", company: "Freelance / Projects", year: "2023 - Present", current: true },
                  { role: "Full-Stack Dev", company: "Startup Hub", year: "2021 - 2023", current: false },
                  { role: "Frontend Developer", company: "Web Studio", year: "2019 - 2021", current: false },
                ].map((item, index) => (
                  <div key={index} className="group relative pl-8">
                    {index !== 2 && (
                      <div className="absolute left-[3px] top-4 h-[calc(100%+40px)] w-0.5 bg-gradient-to-b from-accent/50 to-transparent"></div>
                    )}
                    <div className={`absolute left-0 top-1.5 h-2 w-2 rounded-full border-2 border-accent ${item.current ? "bg-accent shadow-[0_0_10px_rgba(109,90,230,0.5)]" : "bg-surface"}`}></div>
                    
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{item.year}</div>
                    <div className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">{item.role}</div>
                    <div className="text-sm font-medium text-muted">{item.company}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                 <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full justify-center items-center gap-3 rounded-2xl bg-accent px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
