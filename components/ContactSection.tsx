import React from "react";
import * as Icons from "lucide-react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

interface ContactProps {
  data: {
    title?: string;
    phone?: string;
    email?: string;
    location?: string;
    socials?: {
      platform: string;
      url: string;
      icon: string;
    }[];
  };
}

const ContactSection = ({ data }: ContactProps) => {
  const { title, phone, email, location, socials } = data || {};

  return (
    <section id="contact" className="py-32 bg-[#FAF8F6]">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 md:p-14 shadow-premium border border-borders/50">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10 text-primary">
              {title || "Send Us a Message"}
            </h2>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-text/60 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full bg-brand-bg/30 border border-borders rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-brand-text placeholder:text-brand-text/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-text/60 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-brand-bg/30 border border-borders rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-brand-text placeholder:text-brand-text/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-brand-text/60 ml-1">Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 9876543210"
                    className="w-full bg-brand-bg/30 border border-borders rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-brand-text placeholder:text-brand-text/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="purpose" className="text-sm font-bold text-brand-text/60 ml-1">Purpose of Inquiry</label>
                  <select
                    id="purpose"
                    defaultValue=""
                    className="w-full bg-brand-bg/30 border border-borders rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-brand-text appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a purpose</option>
                    <option value="mentorship">Mentorship Inquiry</option>
                    <option value="career-counseling">Career Counseling</option>
                    <option value="business">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-text/60 ml-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about what you're looking for..."
                  className="w-full bg-brand-bg/30 border border-borders rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-brand-text placeholder:text-brand-text/30 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cta-button w-full py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Info Cards & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", value: phone || "+91 9886635186", color: "bg-emerald-50 text-emerald-600" },
                { icon: Mail, title: "Email", value: email || "claryntia@gmail.com", color: "bg-orange-50 text-orange-600" },
                { icon: MapPin, title: "Location", value: location || "Bangalore, India", color: "bg-purple-50 text-purple-600" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-[1.5rem] p-6 flex items-center gap-6 shadow-premium border border-borders/30 group hover:border-primary/20 transition-all duration-300">
                  <div className={`p-4 rounded-2xl ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-1">{item.title}</p>
                    <p className="text-lg font-bold text-brand-text">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            {socials && socials.length > 0 && (
              <div className="pt-8 text-center lg:text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-text/40 mb-8 font-heading">Follow Claryntia Online</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socials.map((social, i) => {
                    const Icon = (Icons as any)[social.icon] || Icons.Share2;
                    return (
                      <a 
                        key={i} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-full bg-brand-bg/50 text-primary shadow-sm hover:scale-110 hover:-translate-y-1 hover:bg-primary hover:text-white transition-all duration-300"
                        title={social.platform}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
