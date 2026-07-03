"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function SectionWrapper({ children, id, className = "", delay = 0 }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={`w-full px-4 md:px-8 lg:px-16 mx-auto container max-w-7xl`}
      >
        {children}
      </motion.div>
    </section>
  );
}
