"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 bg-surface-light/30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading label="Get in Touch" title="Let's Work Together" />
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-muted max-w-md">
                I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </FadeIn>
            
            <div className="mt-12 space-y-6">
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-2">Email</p>
                  <a href="mailto:nouaim@example.com" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                    nouaim@example.com
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-2">Socials</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/NOUAIM98" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/mohamed-nouaim-el-aakil-492748227/" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">Twitter</a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <form className="rounded-2xl border border-border bg-surface p-8 shadow-xl">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-medium text-muted">First name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:bg-surface"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-medium text-muted">Last name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:bg-surface"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-muted">Email address *</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:bg-surface"
                  required
                />
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="subject" className="text-xs font-medium text-muted">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:bg-surface"
                  required
                />
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border-light bg-surface-light px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:bg-surface"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-accent px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
              >
                Send message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
