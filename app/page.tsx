import { PortableText } from "next-sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PricingTabs from "@/components/PricingTabs";
import AddOnGrid from "@/components/AddOnGrid";
import TestimonialCard from "@/components/TestimonialCard";
import AboutSection from "@/components/AboutSection";
import BrandStory from "@/components/BrandStory";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Sparkles, Globe } from "lucide-react";


export default async function Home() {
  const homepage: any | null = null;
  const brandStory: any | null = null;
  const about: any | null = null;
  const services: any[] = [];
  const planCategories: any[] = [];
  const addOns: any[] = [];
  const testimonials: any[] = [];
  const mission: any | null = null;
  const contact: any | null = null;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION */}
      {homepage && (
        <Hero
          title={homepage.heroTitle}
          subtitle={homepage.heroSubtitle}
          ctaText={homepage.heroCtaText}
        />
      )}

      {/* 1.5 BRAND STORY SECTION */}
      {brandStory && (
        <BrandStory
          brandName={brandStory.brandName}
          tagline={brandStory.tagline}
          description={brandStory.description}
          quote={brandStory.quote}
        />
      )}

      {/* 2. ABOUT SECTION */}
      {about && (
        <div id="about" className="section-padding">
          <AboutSection
            tagline={about.tagline}
            title={about.title}
            subtitle={about.subtitle}
            content={about.content}
            image={about.image}
            linkedinUrl={about.linkedinUrl}
            emailUrl={about.emailUrl}
          />
        </div>
      )}

      {/* 3. SERVICES SECTION */}
      {services?.length > 0 && (
        <section id="services" className="py-32 bg-white">
          <div className="section-padding">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-brand-text">Scientific Solutions</h2>
              <p className="text-lg text-brand-text opacity-60 max-w-2xl mx-auto font-medium">
                We leverage data science and AI to provide precision career mapping for every stage of your journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service: any) => (
                <ServiceCard key={service._id} {...service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. MISSION SECTION */}
      {mission && (
        <section className="bg-brand-text text-white py-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
          <div className="section-padding relative z-10 text-center flex flex-col items-center">
              <Sparkles className="w-12 h-12 text-primary mb-10 animate-pulse shadow-glow" />
              {mission.title && (
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                  {mission.title}
                </span>
              )}
              {mission.content && (
                <div className="text-3xl md:text-5xl font-bold font-heading mb-10 max-w-4xl leading-tight text-white [&>p]:mb-4">
                  <PortableText value={mission.content} />
                </div>
              )}
              {mission.tags?.length > 0 && (
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                  {mission.tags.map((tag: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 text-white/60 font-bold uppercase tracking-widest text-sm">
                       <Globe className="w-5 h-5 flex-shrink-0" />
                       <span>{tag}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </section>
      )}

      {/* 5. PRICING + CUSTOMIZATION */}
      {(planCategories?.length > 0 || addOns?.length > 0) && (
        <section id="packages" className="py-40 bg-brand-bg">
          <div className="section-padding">
            {planCategories?.length > 0 && (
              <>
                <div className="text-center mb-24">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">Transparent Pricing</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Choose Your Mentorship Plan</h2>
                  <p className="text-lg text-brand-text opacity-60">Personalized programs tailored for students and professionals.</p>
                </div>
                <PricingTabs categories={planCategories} />
              </>
            )}

            {/* CUSTOM PLAN SECTION */}
            {addOns?.length > 0 && (
              <div className="mt-40 bg-white rounded-3xl p-12 md:p-20 shadow-premium border border-borders text-center flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-brand-gradient" />
                 <h2 className="text-3xl md:text-5xl font-bold font-heading mb-10">Want To Customise Your Mentorship Plan?</h2>
                 <p className="text-lg text-brand-text opacity-60 mb-20 max-w-2xl">
                   Pick and choose specific services that align with your immediate career goals.
                 </p>
                 <AddOnGrid addOns={addOns} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. TESTIMONIALS */}
      {testimonials?.length > 0 && (
        <section id="testimonials" className="py-32 bg-white">
          <div className="section-padding">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">Student Success Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((t: any) => <TestimonialCard key={t._id} {...t} />)}
            </div>
          </div>
        </section>
      )}

      <ContactSection 
        data={contact}
      />
      <Footer />
    </main>
  );
}
