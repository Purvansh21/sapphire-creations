
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  className?: string;
  id?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ className, id }) => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Plan",
      description: "We develop a detailed strategy for your business needs, analyzing your target audience and competitors."
    },
    {
      id: 2,
      title: "Create",
      description: "Our design team crafts unique, on-brand visual content tailored to your specific requirements."
    },
    {
      id: 3,
      title: "Manage",
      description: "We handle all aspects of your brand presence, from social media accounts to content distribution."
    },
    {
      id: 4,
      title: "Grow",
      description: "Through consistent quality content and strategic promotion, we help your brand reach new audiences."
    }
  ];

  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 bg-gradient-to-b from-blue-950 to-black relative", className)}>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/fe5dd66c-021a-419d-8b51-ac6396c9a78f.png')] bg-center bg-contain bg-no-repeat opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              Our Process
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
              How We Work
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Our systematic approach ensures that we deliver consistent, high-quality results 
              that help your brand grow and thrive.
            </p>
          </FadeIn>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-indigo-500 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 200}>
                <div className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                )}>
                  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <div className="relative">
                      {/* Step Number */}
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center relative z-10">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white">{step.id}</span>
                      </div>
                      <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-md -z-10"></div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "md:w-1/2 text-center md:text-left",
                    index % 2 === 1 ? "md:text-right md:pr-16" : "md:pl-16"
                  )}>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 text-lg">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        
        <FadeIn delay={800}>
          <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Ready to Transform Your Brand?</h3>
                <p className="text-white/70">
                  Our team is ready to help you elevate your brand with our professional design services. 
                  Let's create something amazing together.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
