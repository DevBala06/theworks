"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the props type
interface SectionHeaderProps {
  label: string;
  headline: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, headline }) => {
  return (
    <section className="py-5 relative">
      <div className="absolute -inset-8  flex items-start justify-center pointer-events-none">
        <span className="text-8xl font-bold text-neutral-300 select-none">
          {label}
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-semibold mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h1>
      </div>
    </section>
  );
};

export default SectionHeader;
