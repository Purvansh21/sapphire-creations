
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className = '',
  speed = 0.1,
  direction = 'vertical',
  reverse = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const initialOffsetRef = useRef<number>(0);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      if (!element) return;
      const scrollY = window.scrollY;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if element is in viewport (or near it)
      if (rect.bottom < 0 || rect.top > viewportHeight) return;
      
      // Calculate the offset based on the element's position in the viewport
      const offset = scrollY - initialOffsetRef.current;
      const parallaxValue = offset * speed * (reverse ? -1 : 1);
      
      element.style.transform = direction === 'vertical' 
        ? `translateY(${parallaxValue}px)`
        : `translateX(${parallaxValue}px)`;
    };

    // Set initial position
    initialOffsetRef.current = window.scrollY;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, reverse]);

  return (
    <div ref={elementRef} className={cn(className)} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};
