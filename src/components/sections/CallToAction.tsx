
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  return (
    <div className={cn("py-24 px-6 md:px-10 bg-black relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/10 to-purple-500/5 blur-2xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-16 overflow-hidden relative">
          {/* Animated background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn direction="up">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white tracking-tight">
                    Ready to transform your experience?
                  </h2>
                </FadeIn>
                <FadeIn direction="up" delay={200}>
                  <p className="text-lg text-white/70 mb-8">
                    Join thousands of satisfied users who have already revolutionized their workflow. 
                    Get started today and experience the difference.
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={400}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-glow-white flex items-center justify-center">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/20">
                      Watch Demo
                    </button>
                  </div>
                </FadeIn>
              </div>
              
              <div className="relative">
                <FadeIn>
                  <div className="glass rounded-xl p-8 relative">
                    <h3 className="text-2xl font-display font-bold text-white mb-6">
                      Join our community
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4">
                        Request Early Access
                      </button>
                      
                      <p className="text-white/50 text-sm text-center">
                        By signing up, you agree to our Terms and Privacy Policy.
                      </p>
                    </div>
                    
                    <div className="absolute -top-6 -right-6 bg-blue-500/20 backdrop-blur-xl rounded-full p-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
