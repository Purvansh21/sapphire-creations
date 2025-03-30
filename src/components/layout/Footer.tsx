
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
  
  const footerLinks = [
    {
      title: "Services",
      links: ["Brand Design", "Social Media", "Video Production", "Print Design", "Digital Design"]
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

  return (
    <footer className={cn("bg-black text-white pt-20 pb-10 px-6 relative", className)}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <FadeIn className="md:col-span-2">
            <div>
              <a href="#" className="inline-block mb-6">
                <Logo size="md" />
              </a>
              <p className="text-white/70 mb-6 max-w-md">
                Sapphire Creations is a full-service graphic design agency specializing in brand identity,
                social media content, and digital marketing materials. We help brands stand out in today's
                competitive market.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="h-5 w-5" />, name: "instagram" },
                  { icon: <Facebook className="h-5 w-5" />, name: "facebook" },
                  { icon: <Twitter className="h-5 w-5" />, name: "twitter" },
                  { icon: <Linkedin className="h-5 w-5" />, name: "linkedin" }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
                <h3 className="text-white font-medium mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} Sapphire Creations. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
