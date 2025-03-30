
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  className?: string;
  id?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ className, id }) => {
  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 bg-black relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/10 to-indigo-500/5 blur-2xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/10 to-blue-500/5 blur-2xl rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Parallax speed={0.05}>
            <div className="rounded-xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm z-10"></div>
              <div className="relative z-20 p-10 md:p-14">
                <FadeIn>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Special Initial Offer</h3>
                  <p className="text-white/80 mb-8">
                    For a limited time, we're offering new clients a special package to experience our services:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Personal brand design",
                      "Brand promotional short video",
                      "Personalized poster design"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-white/90">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-8">
                    <div className="text-white font-display font-bold text-xl mb-1">The best part?</div>
                    <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-display font-bold">
                      It's completely FREE!
                    </div>
                  </div>
                  
                  <div className="text-white/60 text-sm">
                    *Terms & conditions apply. Limited time offer.
                  </div>
                </FadeIn>
              </div>
            </div>
          </Parallax>
          
          <div>
            <FadeIn direction="up">
              <div className="text-sm font-medium text-blue-400 mb-3 tracking-wider">CONTACT US</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Let's work together to transform your brand identity and create designs that resonate with your audience. 
                Get in touch today for a free consultation.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white/80 text-sm">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/80 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-white/80 text-sm">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors appearance-none" 
                  >
                    <option value="" disabled selected className="bg-gray-900">Select a service</option>
                    <option value="branding" className="bg-gray-900">Brand Design</option>
                    <option value="social" className="bg-gray-900">Social Media Content</option>
                    <option value="video" className="bg-gray-900">Video Production</option>
                    <option value="print" className="bg-gray-900">Print Design</option>
                    <option value="digital" className="bg-gray-900">Digital Design</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/80 text-sm">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
