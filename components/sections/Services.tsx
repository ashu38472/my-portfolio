"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Code, Layout } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { services } from "@/lib/data";

const iconMap = {
  database: Database,
  cloud: Cloud,
  code: Code,
  layout: Layout,
};

export default function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-background to-surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Build</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Specialized in creating production-ready systems that scale with your business
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Card key={service.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-12 w-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
