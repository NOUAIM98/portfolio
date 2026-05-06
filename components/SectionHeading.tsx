"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  id?: string;
}

export default function SectionHeading({ label, title, id }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16 md:mb-24"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-accent/50" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent">
            {label}
          </span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
          {title}<span className="text-accent">.</span>
        </h2>
      </div>
    </motion.div>
  );
}
