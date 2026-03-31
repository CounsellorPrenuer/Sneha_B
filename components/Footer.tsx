import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-text text-white py-24 px-6 overflow-hidden relative">
      {/* Decorative Gradient Blob */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-20 border-b border-white/10 pb-20">
          {/* Brand Info */}
          <div className="md:col-span-2 max-w-sm">
            <Link href="/" className="text-3xl font-heading font-bold mb-8 block transition-all hover:text-primary">
              MindAxis
            </Link>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Empowering students and professionals to make scientific, data-driven career choices. AI-powered career roadmap and mentorship.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-primary/20 hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 underline underline-offset-8 decoration-white/10">Quick Links</h3>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="#founder" className="hover:text-white transition-colors">Meet the Founder</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 underline underline-offset-8 decoration-white/10">Company</h3>
            <ul className="space-y-4 text-white/50 font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between gap-8 text-white/40 text-sm font-medium tracking-wide translate-y-4">
          <p>© 2026 MindAxis AI Platform. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <span className="text-primary">❤</span> for the future of education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
