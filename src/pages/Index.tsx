
import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductIntro } from '@/components/sections/ProductIntro';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CTASection } from '@/components/sections/CallToAction';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ProcessSection } from '@/components/sections/ProcessSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <ProductIntro id="about" />
        <FeatureShowcase id="services" />
        <PortfolioSection id="portfolio" />
        <ProcessSection id="process" />
        <BenefitsSection id="benefits" />
        <CTASection id="contact" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
