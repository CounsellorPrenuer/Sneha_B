"use client";

import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { motion, AnimatePresence } from "framer-motion";

interface PricingTabsProps {
  categories: {
    _id: string;
    title: string;
    plans: any[];
  }[];
}

const PricingTabs = ({ categories }: PricingTabsProps) => {
  const [activeTab, setActiveTab] = useState(categories[0]?._id);

  const activeCategory = categories.find((cat) => cat._id === activeTab);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white/50 p-3 rounded-full border border-borders backdrop-blur-md">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setActiveTab(cat._id)}
            className={`px-10 py-4 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === cat._id
                ? "bg-primary text-white shadow-lg"
                : "text-brand-text hover:bg-white"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl"
        >
          {activeCategory?.plans?.map((plan: any) => (
            <PricingCard key={plan._id} {...plan} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PricingTabs;
