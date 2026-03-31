"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { urlFor } from "@/lib/sanity/client";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image?: any;
}

const TestimonialCard = ({ name, role, quote, image }: TestimonialProps) => {
  return (
    <div className="premium-card p-10 flex flex-col items-center text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-primary group-hover:opacity-10 transition-opacity">
        <Quote className="w-20 h-20 rotate-180" />
      </div>
      
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-primary/20 overflow-hidden group-hover:border-primary/50 transition-colors">
          {image ? (
            <Image
              src={urlFor(image).url()}
              alt={name}
              width={80}
              height={80}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/5 flex items-center justify-center font-bold text-primary">
              {name[0]}
            </div>
          )}
        </div>
      </div>

      <p className="text-lg italic font-medium text-brand-text mb-8 leading-relaxed relative z-10">
        "{quote}"
      </p>

      <div>
        <h4 className="font-bold text-xl mb-1">{name}</h4>
        <p className="text-sm font-bold uppercase tracking-widest text-primary opacity-80">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
