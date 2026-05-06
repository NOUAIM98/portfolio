"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Expertise" title="Skills & Technologies" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border-light bg-surface-light px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
