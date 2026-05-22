"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can integrate with your backend or email service here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your ideas
          to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:ashu38472@gmail.com"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    ashu38472@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-white">Bhubaneswar, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <h4 className="font-semibold mb-3">Quick Response</h4>
            <p className="text-sm text-gray-400">
              I typically respond within 24 hours. For urgent projects, please
              mention "URGENT" in your message subject.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium mb-2"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                >
                  <option value="">Select type</option>
                  <option value="web-app">Web Application</option>
                  <option value="business-system">Business System</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                >
                  <option value="">Select range</option>
                  <option value="< $5k">&lt; $5k</option>
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="> $25k">&gt; $25k</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
