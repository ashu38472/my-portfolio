"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink, Github } from "lucide-react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { featuredProduct } from "@/lib/data";

export default function FeaturedProduct() {
  return (
    <Section id="products" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Product mockup/image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-video bg-gradient-to-br from-surface to-background border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Dashboard mockup placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-6 w-full">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-primary-500/10 border border-primary-500/20 rounded-lg h-20"
                  />
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-50" />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-surface border border-primary-500/50 rounded-xl p-4 shadow-xl"
          >
            <p className="text-sm text-gray-400 mb-1">Tech Stack</p>
            <div className="flex gap-2 flex-wrap">
              {featuredProduct.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-primary-500/10 text-primary-400 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Product details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4">
            Featured Product
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {featuredProduct.title}
          </h2>

          <p className="text-xl text-gray-400 mb-8">
            {featuredProduct.description}
          </p>

          <div className="space-y-3 mb-8">
            {featuredProduct.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 h-6 w-6 bg-primary-500/10 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button size="lg">
              Request Demo <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" /> View Documentation
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-gray-500 mb-3">Built with:</p>
            <div className="flex flex-wrap gap-2">
              {featuredProduct.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface border border-border rounded-lg text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
