"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-xl text-gray-400">
          Modern technologies for scalable solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techStack.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary-400">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + techIndex * 0.05,
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 cursor-default"
                >
                  <div className="h-2 w-2 bg-primary-500 rounded-full" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
