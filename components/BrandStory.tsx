"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import { Quote } from "lucide-react";

interface BrandStoryProps {
  brandName?: string;
  tagline?: string;
  description?: any;
  quote?: string;
}

const BrandStory = ({ 
  brandName = "MindAxis", 
  tagline = "Empowering Your Future", 
  description, 
  quote = "Unlock your true potential." 
}: BrandStoryProps) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" suppressHydrationWarning>
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          {tagline && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-6 block"
            >
              {tagline}
            </motion.span>
          )}

          {/* Brand Name */}
          {brandName && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-heading mb-12 text-brand-text leading-tight"
            >
              {brandName}
            </motion.h2>
          )}

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-brand-text opacity-70 leading-relaxed font-light mb-16 space-y-6"
            >
              <PortableText value={description} />
            </motion.div>
          )}

          {/* Quote */}
          {quote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative py-12 px-8 md:px-16"
            >
              <Quote className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 text-primary opacity-20" />
              <p className="text-3xl md:text-4xl font-heading font-bold text-brand-text italic leading-tight">
                "{quote}"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
