
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  duration = 700,
  delay = 0, 
  direction = 'up',
  distance = 20,
  threshold = 0.1,
  once = true,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observedRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof window !== 'undefined') {
      const getTransform = () => {
        switch (direction) {
          case 'up': return `translateY(${distance}px)`;
          case 'down': return `translateY(-${distance}px)`;
          case 'left': return `translateX(${distance}px)`;
          case 'right': return `translateX(-${distance}px)`;
          default: return 'none';
        }
      };

      // Set initial styles
      element.style.opacity = '0';
      element.style.transform = getTransform();
      element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
      element.style.transitionDelay = `${delay}ms`;
      element.style.willChange = 'opacity, transform';

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && (!once || !observedRef.current)) {
              element.style.opacity = '1';
              element.style.transform = 'none';
              observedRef.current = true;
              
              if (once) {
                observer.unobserve(element);
              }
            } else if (!entry.isIntersecting && !once && observedRef.current) {
              element.style.opacity = '0';
              element.style.transform = getTransform();
              observedRef.current = false;
            }
          });
        },
        { threshold }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [direction, distance, duration, delay, threshold, once]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};
