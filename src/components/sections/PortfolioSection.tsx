
import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortfolioSectionProps {
  className?: string;
  id?: string;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ className, id }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Echo Brand Identity",
      category: "branding",
      image: "/placeholder.svg",
      description: "Complete brand identity design for Echo, a modern audio technology company."
    },
    {
      id: 2,
      title: "Pulse Social Campaign",
      category: "social",
      image: "/placeholder.svg",
      description: "Strategic social media campaign design for Pulse fitness app launch."
    },
    {
      id: 3,
      title: "Vertex Product Video",
      category: "video",
      image: "/placeholder.svg",
      description: "Promotional video production for Vertex's new software platform."
    },
    {
      id: 4,
      title: "Horizon Print Materials",
      category: "print",
      image: "/placeholder.svg",
      description: "Suite of print marketing materials for Horizon Travel Agency."
    },
    {
      id: 5,
      title: "Lumina Digital Ads",
      category: "digital",
      image: "/placeholder.svg",
      description: "Digital advertising campaign for Lumina cosmetics launch."
    },
    {
      id: 6,
      title: "Nova App Interface",
      category: "digital",
      image: "/placeholder.svg",
      description: "User interface design for Nova productivity application."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'social', label: 'Social Media' },
    { id: 'video', label: 'Video' },
    { id: 'print', label: 'Print' },
    { id: 'digital', label: 'Digital' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div id={id} className={cn("py-24 px-6 md:px-10 bg-black relative", className)}>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/7d9d5a78-2237-4294-8b02-fe193ec6e410.png')] bg-center bg-no-repeat bg-contain opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              Our Work
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Explore our creative portfolio showcasing our best work across various 
              design disciplines and industries.
            </p>
          </FadeIn>
        </div>
        
        <FadeIn delay={600}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={100 * index} duration={800}>
              <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-blue-900/20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                  <p className="text-white/70 mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 z-20">
                  {categories.find(cat => cat.id === item.category)?.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={800}>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 border border-white/20">
              View All Projects
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
