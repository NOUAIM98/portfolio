"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "mn.elaakil@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("contactTitle")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mb-12 max-w-md text-lg text-muted">
            {t("contactSubtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="group relative mx-auto flex max-w-fit flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-8 shadow-xl transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_50px_-12px_rgba(109,90,230,0.2)] sm:p-10">
            <div className="flex items-center gap-4 text-xl font-bold text-foreground transition-all group-hover:text-accent sm:text-2xl md:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href={`mailto:${email}`}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full"
                title={t("sendEmail")}
              >
                {email}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 rounded-xl border border-border-light bg-surface-light px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-hover active:scale-95"
              >
                {copied ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t("emailCopied")}
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    {t("copyEmail")}
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {t("sendEmail")}
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Social Links Sub-footer */}
        <FadeIn delay={0.3}>
          <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-border pt-12">
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "https://github.com/NOUAIM98", icon: "github" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-nouaim-el-aakil-492748227/", icon: "linkedin" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-light">
              © {new Date().getFullYear()} MOHAMED NOUAIM EL AAKIL. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
