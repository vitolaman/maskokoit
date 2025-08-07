"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { TailwindcssButtons } from "./ui/tw-button";
import { ButtonsCard } from "./ui/tailwind-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-screen fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-md border-b border-neutral-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="w-screen md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
              >
                MASKOKO<span className="text-white">IT</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href === "#home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Contact Info - Hidden on mobile */}
              {/* <div className="hidden lg:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-neutral-300">
                  <Phone className="w-4 h-4 text-white" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-2 text-neutral-300">
                  <Mail className="w-4 h-4 text-white" />
                  <span>info@maskokoit.com</span>
                </div>
              </div> */}
              {/* CTA Button - Hidden on mobile */}

              <motion.a
                key={"contact"}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4 * 0.1 }}
              >
                {"Contact"}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              {/* <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>Contact</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button> */}
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-neutral-300 hover:text-white p-2 rounded-md transition-colors duration-300"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800/50"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href === "#home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="text-neutral-300 hover:text-white block px-3 py-3 text-base font-medium transition-colors duration-300 cursor-pointer border-b border-neutral-800/30 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 space-y-3 border-t border-neutral-800/30">
                  <div className="flex items-center space-x-3 px-3 text-neutral-300">
                    <Phone className="w-4 h-4 text-white" />
                    <span className="text-sm">+62 812-3252-8421</span>
                  </div>
                  <div className="flex items-center space-x-3 px-3 text-neutral-300">
                    <Mail className="w-4 h-4 text-white" />
                    <span className="text-sm">info@maskokoit.com</span>
                  </div>

                  {/* Mobile CTA Button */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="block mx-3 mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition-colors duration-300 cursor-pointer"
                  >
                    Konsultasi Gratis
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
