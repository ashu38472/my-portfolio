"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur effect
      setIsScrolled(currentScrollY > 50);

      // Scrolling down - hide immediately
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Clear any pending show timeout
        if (showTimeoutRef.current) {
          clearTimeout(showTimeoutRef.current);
          showTimeoutRef.current = null;
        }
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      // Scrolling up or at top - show with delay
      else if (currentScrollY < lastScrollY && (lastScrollY - currentScrollY) > 5) {
        // Clear any existing timeout first
        if (showTimeoutRef.current) {
          clearTimeout(showTimeoutRef.current);
        }
        setIsVisible(true);
        showTimeoutRef.current = null;
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1], // Smooth easing
            opacity: { duration: 0.3 },
          }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
              : "bg-transparent"
          } ${isMobileMenuOpen && "backdrop-blur-xl shadow-xl"}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div className="text-xl font-bold cursor-default">
                Ashu<span className="text-primary-400">.</span>Sah
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {scrollToSection(e, link.href); setIsVisible(false)}}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  size="sm"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Me
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>            
          </div>
          {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="md:hidden mt-4 px-6 py-4 border-t border-border overflow-hidden backdrop-blur-xl rounded-b-lg shadow-xl"
                >
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-gray-300 hover:text-primary-400 transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Hire Me
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
