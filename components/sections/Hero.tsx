"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
            Available for Freelance
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
        >
          Ashu Sah
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
        >
          Full-Stack Engineer & Product Builder
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto text-balance"
        >
          I design and develop production-ready web applications using Next.js,
          TypeScript, and Spring Boot. From interactive frontends to complete
          business systems — I build products that work.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {/* <Button size="lg" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Hire Me
          </Button> */}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center text-gray-400"
        >
          <a
            href="https://github.com/ashu38472"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ashu-sah-618108245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ashu38472@gmail.com"
            className="hover:text-primary-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
