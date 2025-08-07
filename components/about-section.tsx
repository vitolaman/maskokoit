"use client";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="text-white">MaskokoIT?</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Your Best Technology Partner
            </h3>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              MaskokoIT is an information technology company dedicated to
              providing the best IT solutions for businesses and individuals in
              Surabaya.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Our team of experts is ready to assist you in every aspect of
              technology, from consulting to implementing the right solutions
              for your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-neutral-300">Years of Experience</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-neutral-300">Clients</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-neutral-300">Support</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-neutral-300">Main Services</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
