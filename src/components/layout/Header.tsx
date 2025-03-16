
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          ? "py-3 bg-black/80 backdrop-blur-lg shadow-md" 
          : "py-6 bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-display font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Orbital
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Benefits", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-white/90 hover:text-white transition-colors text-sm font-medium">
            Sign In
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium transition-all duration-200">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 transform md:hidden pt-24",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          {["Features", "Benefits", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-6 flex flex-col space-y-4 w-full">
            <button className="px-4 py-3 text-white/90 hover:text-white transition-colors text-lg font-medium border border-white/20 rounded-lg">
              Sign In
            </button>
            <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg font-medium transition-all duration-200">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
