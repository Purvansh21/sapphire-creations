
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

interface Benefit {
  id: number;
  title: string;
  description: string;
  value: string;
  metric: string;
  color: string;
}

interface BenefitsSectionProps {
  className?: string;
  id?: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className, id }) => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Productivity Boost",
      description: "Streamline your processes and get more done in less time.",
      value: "+32%",
      metric: "productivity increase",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Resource Optimization",
      description: "Focus on what works and maximize your return on investment.",
      value: "1.8x",
      metric: "better resource use",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Client Satisfaction",
      description: "Delivering tailored solutions that drive success and long-term relationships.",
      value: "90%",
      metric: "client satisfaction",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 bg-blue-950 relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-black/90 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl rounded-full transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              Real Results
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
              Transform Your Experience with Real Results
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              See how our solutions deliver tangible benefits that improve 
              your brand visibility and business outcomes.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.id} delay={index * 200} direction="up">
              <div className="glass rounded-xl p-8 h-full transition-transform duration-300 hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6`}>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {benefit.value}
                </div>
                <div className="text-white/70 mb-4 text-sm uppercase tracking-wider">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
