
import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';
import { Check, ArrowRight, PenTool, Image, Layout, MessageSquare, Video, Palette } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureShowcaseProps {
  className?: string;
  id?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ className, id }) => {
  const [activeService, setActiveService] = useState<number>(1);
  
  const services: Service[] = [
    {
      id: 1,
      title: "Brand Design",
      description: "Complete brand identity development including logos, color palettes, typography, and brand guidelines.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
          <PenTool className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 2,
      title: "Social Media Content",
      description: "Engaging social media posts, stories, and campaigns designed to increase your brand visibility and engagement.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 3,
      title: "Video Production",
      description: "Professional promotional videos, motion graphics, and animations to showcase your products and services.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 flex items-center justify-center">
          <Video className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 4,
      title: "Print & Digital Design",
      description: "Custom poster designs, marketing materials, digital ads, and promotional graphics that capture attention.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
          <Image className="h-5 w-5 text-white" />
        </div>
      )
    }
  ];

  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 bg-gradient-to-b from-black to-blue-950", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              Our Services
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
              Creative Solutions We Offer
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We provide a comprehensive range of graphic design and digital content services 
              to help your brand stand out in today's competitive market.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Parallax speed={0.05}>
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/10 shadow-2xl">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                      activeService === service.id ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <div className="p-8 text-center">
                      <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl border border-white/10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center">
                          {service.id === 1 && <PenTool className="h-10 w-10 text-white" />}
                          {service.id === 2 && <MessageSquare className="h-10 w-10 text-white" />}
                          {service.id === 3 && <Video className="h-10 w-10 text-white" />}
                          {service.id === 4 && <Palette className="h-10 w-10 text-white" />}
                        </div>
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/70 max-w-md mx-auto text-lg">
                        {service.description}
                      </p>
                      
                      <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {service.id === 1 && (
                          ["Logo Design", "Brand Guidelines", "Visual Identity"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                              {tag}
                            </span>
                          ))
                        )}
                        {service.id === 2 && (
                          ["Content Creation", "Community Management", "Growth Strategy"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                              {tag}
                            </span>
                          ))
                        )}
                        {service.id === 3 && (
                          ["Promo Videos", "Motion Graphics", "Editing"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                              {tag}
                            </span>
                          ))
                        )}
                        {service.id === 4 && (
                          ["Posters", "Marketing Materials", "Ads"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                              {tag}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
          
          <div className="space-y-6">
            {services.map((service) => (
              <FadeIn key={service.id} direction="left" delay={service.id * 100}>
                <div 
                  className={cn(
                    "p-6 rounded-xl cursor-pointer transition-all duration-300",
                    activeService === service.id 
                      ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform scale-105" 
                      : "hover:bg-white/5 border border-transparent"
                  )}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/70">
                        {service.description}
                      </p>
                      
                      {activeService === service.id && (
                        <div className="mt-4 flex items-center text-blue-400 font-medium">
                          <span>View service details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={500}>
              <div className="mt-8 p-6 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-display font-semibold text-white">Special Offer</h4>
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-full">Limited Time</div>
                </div>
                <p className="text-white/70 mt-2 mb-4">
                  Get a complete brand package including logo design, promotional video, and custom poster design - FREE for a limited time!
                </p>
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20">
                  Learn More
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
