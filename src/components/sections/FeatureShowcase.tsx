
import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureShowcaseProps {
  className?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ className }) => {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  
  const features: Feature[] = [
    {
      id: 1,
      title: "Intuitive Interface",
      description: "A thoughtfully designed interface that anticipates your needs and makes complex tasks feel effortless.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: "Seamless Integration",
      description: "Works perfectly with your existing tools and workflows, creating a cohesive ecosystem that enhances productivity.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "Advanced Performance",
      description: "Powered by cutting-edge technology that delivers unprecedented speed and efficiency for demanding tasks.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className={cn("py-24 px-6 md:px-10 bg-gradient-to-b from-black to-blue-950", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              Powerful Features
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
              Crafted for Excellence
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Discover the innovative features that make our product stand out, 
              each designed with purpose to enhance your everyday experience.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Parallax speed={0.05}>
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 shadow-2xl">
                {features.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                      activeFeature === feature.id ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <div className="p-8 text-center">
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-xl border border-white/10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                          {index === 0 && (
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 max-w-md mx-auto text-lg">
                        {feature.description}
                      </p>
                      
                      <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Fast", "Reliable", "Intuitive"].map((tag, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
          
          <div className="space-y-8">
            {features.map((feature) => (
              <FadeIn key={feature.id} direction="left" delay={feature.id * 100}>
                <div 
                  className={cn(
                    "p-6 rounded-xl cursor-pointer transition-all duration-300",
                    activeFeature === feature.id 
                      ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform scale-105" 
                      : "hover:bg-white/5 border border-transparent"
                  )}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">
                        {feature.description}
                      </p>
                      
                      {activeFeature === feature.id && (
                        <div className="mt-4 flex items-center text-blue-400 font-medium">
                          <span>Explore feature</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
