"use client";

import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Beams from "@/components/beams";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";
import { ScrollProgress } from "@/components/animate-ui/components/scroll-progress";
import ScrollBaseAnimation from "@/components/uilayouts/scroll-text-marque";
import ScrollCard from "@/components/scroll-card";
import { GlowingEffectDemo } from "@/components/services-glowing-card";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black"
      id="home"
    >
      {/* <HeroParallaxDemo /> */}
      <ScrollProgress />
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Beams
          beamWidth={5}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={3}
          noiseIntensity={1.75}
          scale={0.25}
          rotation={10}
        />
        <Navbar />
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="text-white md:w-1/3 p-4 md:p-0 px-4 h-[34px] flex items-center justify-center text-[12px] font-medium rounded-full bg-white/5 backdrop-blur border border-white/20">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 8l4 -4"></path>
                <path d="M14 4l-10 10"></path>
                <path d="M4 20l16 -16"></path>
                <path d="M20 10l-10 10"></path>
                <path d="M20 16l-4 4"></path>
              </svg>
              <p className="text-center">Collaborate With Us!</p>
            </div>
            <h1 className="text-5xl font-bold text-center">
              Your One Stop IT Solution
            </h1>
            <h1 className="text-lg text-center">
              We offer a wide range of IT services to meet your technology needs
              with the highest quality
            </h1>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#about");
                }}
                className="w-60 transform rounded-full border border-gray-300 bg-white px-6 py-4 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
              >
                Explore Now
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="w-60 transform rounded-full bg-white/5 backdrop-blur border border-white/20 px-6 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ScrollCard />
      <div className="py-12 md:py-24 bg-[#122932]">
        <ScrollBaseAnimation
          // delay={500}
          baseVelocity={2}
          scrollDependent={true}
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          Build ✦ Your ✦ Website ✦ With ✦ Us ✦
        </ScrollBaseAnimation>
      </div>
      {/* <WobbleCardDemo /> */}
      <div className="bg-black">
        <div className="w-full py-8 flex justify-center items-end h-20 bg-[#122932] rounded-b-full">
          <div className="w-1/4 bg-white h-4 rounded-full" />
        </div>
      </div>
      <ServicesSection />
      <div className="px-24 pb-24">
        <GlowingEffectDemo />
      </div>
      <ContactSection />
      <Footer />
    </motion.div>
  );
}
