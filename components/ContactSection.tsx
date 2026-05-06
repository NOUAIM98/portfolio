"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading label="Get in Touch" title="Let's build something extraordinary" />
            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted max-w-md">
                I&apos;m currently open to new opportunities and interesting projects. Whether you have a specific idea or just want to chat about tech, I&apos;d love to hear from you.
              </p>
            </FadeIn>
            
            <div className="mt-16 space-y-10">
              <FadeIn delay={0.2}>
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3 group-hover:text-accent transition-colors">Direct Email</p>
                  <a href="mailto:nouaim@example.com" className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-all duration-300">
                    nouaim@example.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-6">Connect on Socials</p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { label: "GitHub", href: "https://github.com/NOUAIM98", icon: "github" },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-nouaim-el-aakil-492748227/", icon: "linkedin" },
                    ].map((social) => (
                      <a 
                        key={social.label}
                        href={social.href} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover hover:-translate-y-1"
                      >
                         {social.label}
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-accent/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <form className="relative rounded-[2rem] border border-border bg-surface/50 backdrop-blur-sm p-10 shadow-2xl">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted-light">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Jane"
                      className="w-full rounded-2xl border border-border bg-background/50 px-5 py-4 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted-light">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-border bg-background/50 px-5 py-4 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-light">Email address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-2xl border border-border bg-background/50 px-5 py-4 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5"
                    required
                  />
                </div>

                <div className="mt-8 space-y-3">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-light">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-border bg-background/50 px-5 py-4 text-sm text-foreground outline-none transition-all focus:border-accent focus:bg-background focus:ring-4 focus:ring-accent/5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full rounded-2xl bg-accent px-6 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/40 active:scale-[0.98]"
                >
                  Send message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
