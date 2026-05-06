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
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="mb-2 block text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </span>
      <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    </motion.div>
  );
}
