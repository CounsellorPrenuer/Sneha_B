"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/sanity/client";
import { Linkedin, Mail } from "lucide-react";

interface AboutSectionProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  content?: any;
  image?: any;
  linkedinUrl?: string;
  emailUrl?: string;
}

const AboutSection = ({ tagline, title, subtitle, content, image, linkedinUrl, emailUrl }: AboutSectionProps) => {
  const aboutContent = typeof content === "string" ? content : "";

  return (
    <section id="about" className="section-padding py-32 bg-white rounded-3xl overflow-hidden shadow-premium">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group translate-y-4"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-3 scale-105 transition-transform group-hover:rotate-0" />
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/10 shadow-2xl">
            {image && (
              <Image
                src={urlFor(image).url()}
                alt={title || "About"}
                width={600}
                height={800}
                className="w-full h-auto object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
              />
            )}
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Content Column */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
        >
          <div className="mb-8">
            {tagline && <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">{tagline}</span>}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-brand-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl font-medium text-primary/80 uppercase tracking-widest">
                {subtitle}
              </p>
            )}
          </div>

          <div className="space-y-6 text-lg text-brand-text opacity-70 leading-relaxed max-w-xl">
            {aboutContent && <p>{aboutContent}</p>}
          </div>

          <div className="mt-12 flex gap-8">
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-primary hover:text-gradient-end transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>Connect on LinkedIn</span>
              </a>
            )}
            {emailUrl && (
              <a href={emailUrl.startsWith('mailto:') ? emailUrl : `mailto:${emailUrl}`} className="flex items-center gap-2 font-bold text-brand-text/60 hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
                <span>Contact Directly</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
