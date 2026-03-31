"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

const Hero = ({ title = "Knowledge is Power", subtitle = "Your Journey Starts Here", ctaText = "Get Started" }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden" suppressHydrationWarning>
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />

      <div className="section-padding relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-[1.1] text-brand-text">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-text opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="cta-button px-10 py-5 rounded-full text-lg font-bold flex items-center group">
              {ctaText}
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full text-lg font-semibold border-2 border-primary/20 hover:border-primary/40 transition-all hover:bg-white/50">
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-borders pt-16 w-full max-w-5xl mx-auto"
        >
          {[
            { label: "Scientific Assessment", value: "100%" },
            { label: "AI Guidance", value: "24/7" },
            { label: "Expert Counselors", value: "50+" },
            { label: "Success Rate", value: "98%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium opacity-60 uppercase tracking-widest leading-loose">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
