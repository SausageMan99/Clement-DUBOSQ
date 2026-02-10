"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {children}
      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
    </motion.h2>
  );
}
