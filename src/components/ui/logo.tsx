
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-4xl'
  };

  return (
    <div className={cn(
      "flex items-center font-display font-bold relative", 
      sizes[size],
      className
    )}>
      {variant === 'default' && (
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl"></div>
        </div>
      )}
      
      <div className="flex flex-col items-center">
        <span className="text-white bg-clip-text">
          Sapphire
        </span>
        <span className="text-white text-opacity-90 -mt-1">
          creations
        </span>
        
        {variant === 'default' && (
          <div className="absolute -inset-1 border border-white/10 rounded-full opacity-50"></div>
        )}
      </div>
    </div>
  );
};
