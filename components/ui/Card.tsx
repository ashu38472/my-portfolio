"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`bg-surface border border-border rounded-xl p-6 transition-all duration-300 ${
        hover ? "hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/50" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
