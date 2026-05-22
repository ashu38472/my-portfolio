"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">Ashu Sah</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Engineer & Product Builder
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/ashu38472"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ashu-sah-618108245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ashu38472@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Ashu Sah. Built with
            <Heart className="h-4 w-4 text-primary-400 fill-primary-400" />
            using Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
