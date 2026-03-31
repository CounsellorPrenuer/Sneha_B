"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  features: { text: string; included: boolean }[];
  isPremium?: boolean;
}

const PricingCard = ({ name, price, features, isPremium }: PricingCardProps) => {
  return (
    <div
      className={`premium-card p-12 relative flex flex-col h-full transform transition-all duration-500 hover:scale-[1.02] ${
        isPremium ? "border-gold border-2 ring-1 ring-gold/20" : "border-borders"
      }`}
    >
      {isPremium && (
        <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-gold text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-10">
        <h3 className="text-3xl font-bold font-heading mb-4 text-brand-text">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold text-primary">{price}</span>
          <span className="text-sm opacity-50 font-medium">/ session</span>
        </div>
      </div>

      <div className="space-y-6 mb-12 flex-grow">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className={`mt-1 p-0.5 rounded-full ${
                feature.included ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
              }`}
            >
              {feature.included ? (
                <Check className="w-4 h-4" />
              ) : (
                <X className="w-4 h-4" />
              )}
            </div>
            <span
              className={`text-sm font-medium leading-relaxed ${
                feature.included ? "text-brand-text" : "text-brand-text/40 line-through"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-5 rounded-xl text-lg font-bold transition-all duration-300 ${
          isPremium
            ? "cta-button shadow-xl"
            : "bg-white border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5"
        }`}
      >
        Choose {name}
      </button>
    </div>
  );
};

export default PricingCard;
