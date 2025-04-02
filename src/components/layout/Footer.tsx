
import React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/animations/FadeIn';
import { Logo } from '@/components/ui/logo';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  // Updated footerLinks with the first column changed to match the services from FeatureShowcase
  const footerLinks = [
    {
      title: "Our Services",
      links: [
        { name: "Logo Design", serviceId: 1 },
        { name: "UI/UX Design", serviceId: 3 },
        { name: "Website Design", serviceId: 4 },
        { name: "Social Media Management", serviceId: 6 },
        { name: "Content Marketing", serviceId: 7 }
      ]
    },
    {
      title: "Company",
      links: ["About Us", "Our Work", "Process", "Team", "Careers"]
    },
    {
      title: "Resources",
      links: ["Blog", "Design Tips", "Case Studies", "Brand Guide", "FAQs"]
    },
    {
      title: "Contact",
      links: ["Get a Quote", "Support", "Partnership", "Privacy Policy", "Terms"]
    }
  ];

  // Function to handle service link clicks
  const handleServiceClick = (serviceId: number) => {
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      // Add offset for header
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // After scrolling, activate the respective service card
      setTimeout(() => {
        // Create and dispatch a custom event to activate the service
        const event = new CustomEvent('activateService', { 
          detail: { serviceId } 
        });
        document.dispatchEvent(event);
      }, 800); // Delay to allow smooth scrolling to complete
    }
  };

  return (
    <footer className={cn("bg-black text-white pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden", className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <FadeIn className="col-span-2">
            <div>
              <a href="#" className="inline-block mb-4">
                <Logo size="md" />
              </a>
              <p className="text-white/70 mb-6 max-w-md text-sm">
                Sapphire Creations is a full-service marketing and design agency specializing in brand identity,
                digital marketing, and creative content development to help brands stand out in today's
                competitive market.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="h-4 w-4" />, name: "instagram" },
                  { icon: <Facebook className="h-4 w-4" />, name: "facebook" },
                  { icon: <Twitter className="h-4 w-4" />, name: "twitter" },
                  { icon: <Linkedin className="h-4 w-4" />, name: "linkedin" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          
          {footerLinks.map((column, index) => (
            <FadeIn key={column.title} delay={index * 100}>
              <div>
                <h3 className="text-white font-medium mb-3 text-sm">{column.title}</h3>
                <ul className="space-y-2">
                  {index === 0 ? (
                    // Special rendering for the services column
                    (column.links as Array<{ name: string; serviceId: number }>).map((link) => (
                      <li key={link.name}>
                        <a 
                          href="#services" 
                          className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceClick(link.serviceId);
                          }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    // Regular rendering for other columns
                    (column.links as string[]).map((link) => (
                      <li key={link}>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
                          {link}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-xs mb-4 md:mb-0">
              © {currentYear} Sapphire Creations. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white text-xs transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
