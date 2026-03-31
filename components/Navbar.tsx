"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
          Mind<span className="text-primary">Axis</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home Page</Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</Link>
          <Link
            href="#contact"
            className="cta-button px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-borders px-6 py-8 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home Page</Link>
          <Link href="#about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="#services" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="#packages" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Packages</Link>
          <Link href="#testimonials" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
          <Link
            href="#contact"
            className="cta-button px-8 py-3 rounded-full text-lg font-semibold w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
