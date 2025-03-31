
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-black/80 backdrop-blur-lg shadow-md" 
          : "py-4 bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="font-display font-bold text-white">
            <Logo size="sm" variant={isScrolled ? 'minimal' : 'default'} />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {[
            {label: "About Us", href: "#about"}, 
            {label: "Services", href: "#services"}, 
            {label: "Portfolio", href: "#portfolio"}, 
            {label: "Process", href: "#process"}, 
            {label: "FAQs", href: "/faqs"}, 
            {label: "Contact Us", href: "#contact"}
          ].map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <button className="px-3 py-1.5 text-white/90 hover:text-white transition-colors text-xs font-medium">
            Get Quote
          </button>
          <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-medium transition-all duration-200">
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 transform md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-5 p-6">
          {[
            {label: "About Us", href: "#about"}, 
            {label: "Services", href: "#services"}, 
            {label: "Portfolio", href: "#portfolio"}, 
            {label: "Process", href: "#process"}, 
            {label: "FAQs", href: "/faqs"}, 
            {label: "Contact Us", href: "#contact"}
          ].map((item) => (
            item.href.startsWith('#') ? (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-white/80 hover:text-white transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="pt-4 flex flex-col space-y-3 w-full">
            <button className="px-4 py-2 text-white/90 hover:text-white transition-colors text-sm font-medium border border-white/20 rounded-lg">
              Get Quote
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg text-sm font-medium transition-all duration-200">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
