"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-surface to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Ashu Sah</span>, a
              full-stack developer with{" "}
              <span className="gradient-text font-semibold">
                2 years of hands-on experience
              </span>{" "}
              architecting and delivering scalable backend systems using Java,
              Spring Boot, and Laravel, and building high-performance frontend
              applications with Next.js, Nest.js, JavaScript, and TypeScript.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I specialize in designing robust REST APIs, implementing secure
              authentication (JWT, OAuth), optimizing system architecture, and
              engineering reliable database solutions. My expertise extends to
              deploying and scaling cloud-native applications using AWS services
              including EC2, S3, RDS, Lambda, CloudWatch, and IAM to ensure
              performance, security, and high availability.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently working as a{" "}
              <span className="text-white font-semibold">
                Junior Software Developer at HyScaler
              </span>{" "}
              in Bhubaneswar, where I build scalable backend systems and
              high-performance frontends across enterprise platforms. I'm
              passionate about creating production-ready solutions that make a
              real impact.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary-400 mb-1">2+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-400 mb-1">6+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-400 mb-1">5+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-400 mb-1">8.17</p>
                <p className="text-sm text-gray-400">CGPA (B.Tech CS)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
