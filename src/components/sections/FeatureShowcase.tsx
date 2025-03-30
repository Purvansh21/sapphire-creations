
import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';
import { PenTool, Image, Layout, MessageSquare, Video, Palette, Target, Megaphone, Globe, Activity } from 'lucide-react';

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
      title: "Digital Marketing",
      description: "Strategic online marketing campaigns to boost your brand's digital presence and engagement.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
          <Target className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 2,
      title: "Business Marketing",
      description: "Comprehensive marketing strategies designed to grow your business and increase revenue.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
          <Activity className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Engaging social media campaigns that build your brand's online community and drive engagement.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 4,
      title: "Search Marketing",
      description: "SEO and SEM strategies to improve your visibility in search engines and drive qualified traffic.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
          <Globe className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 5,
      title: "Content Marketing",
      description: "Strategic content creation that tells your brand story and connects with your target audience.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
          <PenTool className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 6,
      title: "Direct Marketing",
      description: "Targeted campaigns that connect directly with your customers for immediate response and action.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
          <Megaphone className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 7,
      title: "Advertising & Promotions",
      description: "Creative ad campaigns and promotional strategies that capture attention and drive conversions.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
          <Image className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 8,
      title: "Website Design",
      description: "Custom, responsive website design that represents your brand and delivers exceptional user experience.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
          <Layout className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 9,
      title: "Graphics Design",
      description: "Professional visual design solutions that communicate your brand message effectively.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
          <Palette className="h-5 w-5 text-white" />
        </div>
      )
    },
    {
      id: 10,
      title: "Logo Design",
      description: "Distinctive logo creation that embodies your brand identity and makes a lasting impression.",
      icon: (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
          <PenTool className="h-5 w-5 text-white" />
        </div>
      )
    }
  ];

  // Divide services into two columns for better display
  const servicesFirstHalf = services.slice(0, 5);
  const servicesSecondHalf = services.slice(5);

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
              We provide a comprehensive range of marketing, design, and digital content services 
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
                          {service.icon.props.children}
                        </div>
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/70 max-w-md mx-auto text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Parallax>
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {servicesFirstHalf.map((service) => (
                <FadeIn key={service.id} direction="left" delay={service.id * 50}>
                  <div 
                    className={cn(
                      "p-4 rounded-xl cursor-pointer transition-all duration-300",
                      activeService === service.id 
                        ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform scale-105" 
                        : "hover:bg-white/5 border border-transparent"
                    )}
                    onClick={() => setActiveService(service.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-base lg:text-lg font-display font-semibold text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {service.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {servicesSecondHalf.map((service) => (
                <FadeIn key={service.id} direction="left" delay={(service.id - 5) * 50}>
                  <div 
                    className={cn(
                      "p-4 rounded-xl cursor-pointer transition-all duration-300",
                      activeService === service.id 
                        ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform scale-105" 
                        : "hover:bg-white/5 border border-transparent"
                    )}
                    onClick={() => setActiveService(service.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-base lg:text-lg font-display font-semibold text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {service.description.substring(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={500}>
              <div className="mt-8 p-6 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-display font-semibold text-white">Special Offer</h4>
                  <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-full">Limited Time</div>
                </div>
                <p className="text-white/70 mt-2 mb-4">
                  Get a complete marketing package including logo design, website, and social media strategy - 25% OFF for a limited time!
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
