"use client";

import React from "react";
import * as Icons from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface AddOnService {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  iconImage?: any;
  price?: string;
}

const AddOnGrid = ({ addOns }: { addOns: AddOnService[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {addOns.map((addon) => {
        const Icon = (Icons as any)[addon.icon || "Check"] || Icons.Check;
        return (
          <div
            key={addon._id}
            className="premium-card flex flex-col items-start gap-6 hover:border-primary/30 transition-all duration-300 h-full group"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-primary/5 rounded-xl text-primary shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {addon.iconImage ? (
                  <Image 
                    src={urlFor(addon.iconImage).url()} 
                    alt={addon.title} 
                    width={24} 
                    height={24} 
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <Icon className="w-6 h-6" />
                )}
              </div>
              <h4 className="font-bold text-xl leading-tight text-brand-text">{addon.title}</h4>
            </div>

            <div className="flex-1 w-full pl-0">
              {addon.price && (
                <div className="mb-4">
                  <span className="text-primary font-bold text-xs bg-primary/5 border border-primary/10 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-sm">
                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    {addon.price}
                  </span>
                </div>
              )}
              <p className="text-sm text-brand-text opacity-70 leading-relaxed font-medium">
                {addon.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddOnGrid;
