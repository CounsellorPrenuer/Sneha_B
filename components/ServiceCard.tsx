"use client";

import React from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  audience: string;
  mode: string;
  iconName?: string;
}

const ServiceCard = ({ title, description, audience, mode, iconName }: ServiceCardProps) => {
  const Icon = (Icons as any)[iconName || "Target"] as LucideIcon;

  return (
    <div className="premium-card group hover:bg-primary transition-all duration-500">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-brand-text opacity-70 group-hover:text-white/80 transition-colors mb-8 leading-relaxed">
        {description}
      </p>
      
      <div className="pt-6 border-t border-borders/50 group-hover:border-white/20 flex flex-wrap gap-3">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand-bg group-hover:bg-white/10 group-hover:text-white text-primary">
          {audience}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-borders group-hover:border-white/30 group-hover:text-white text-brand-text/60">
          {mode}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
