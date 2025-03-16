
import React from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
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
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className }) => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Efficiency Boost",
      description: "Streamline your workflow and accomplish more in less time.",
      value: "42%",
      metric: "productivity increase",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Resource Savings",
      description: "Reduce waste and optimize resource allocation.",
      value: "3.5x",
      metric: "resource optimization",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "User Satisfaction",
      description: "Delight users with intuitive, responsive experiences.",
      value: "98%",
      metric: "satisfaction rate",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <div className={cn("py-24 px-6 md:px-10 bg-blue-950 relative overflow-hidden", className)}>
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
              Transform Your Experience
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              See how our product delivers tangible benefits that improve 
              your daily life and long-term outcomes.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
        
        <Parallax speed={0.1}>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-white/10 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn direction="right">
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    How it transforms your workflow
                  </h3>
                  <p className="text-white/70 mb-8">
                    Our solution seamlessly integrates into your existing processes, 
                    enhancing productivity while reducing friction points that slow you down.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Automates repetitive tasks",
                      "Provides intelligent insights",
                      "Adapts to your unique needs",
                      "Constantly evolves with your feedback"
                    ].map((item, index) => (
                      <FadeIn key={index} delay={index * 100} duration={800}>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white/80">{item}</span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </FadeIn>
              </div>
              
              <div className="relative">
                <FadeIn>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-white font-medium">Watch the demo</p>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="w-full bg-white/20 rounded-full h-1 mb-2">
                          <div className="bg-white h-1 rounded-full w-1/3"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-white/80 text-sm">1:23 / 3:45</div>
                          <div className="flex space-x-3">
                            {[
                              <svg key="play" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>,
                              <svg key="volume" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                              </svg>,
                              <svg key="fullscreen" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                              </svg>
                            ].map((icon, i) => (
                              <button key={i} className="focus:outline-none hover:text-white/100 transition-colors">
                                {icon}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};
