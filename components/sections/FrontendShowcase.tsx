"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Gauge, Palette } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { frontendShowcase } from "@/lib/data";

const icons = [Zap, Smartphone, Gauge, Palette];

export default function FrontendShowcase() {
  return (
    <Section className="bg-gradient-to-b from-surface to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Modern Frontend Engineering
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          I don't just make things work — I make them feel{" "}
          <span className="gradient-text font-semibold">premium</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {frontendShowcase.map((item, index) => {
          const Icon = icons[index];
          return (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Interactive demo section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-surface to-background border border-primary-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            See It In Action
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Every element on this page demonstrates advanced frontend techniques — from smooth scroll animations to micro-interactions. This entire portfolio is built to showcase what modern web development can achieve.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-lg"
            >
              <span className="text-primary-400 font-medium">Framer Motion</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-lg"
            >
              <span className="text-primary-400 font-medium">Tailwind CSS</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-lg"
            >
              <span className="text-primary-400 font-medium">TypeScript</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
