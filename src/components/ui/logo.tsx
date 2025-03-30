
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
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-2xl'
  };

  return (
    <div className={cn(
      "flex items-center font-display font-bold relative", 
      sizes[size],
      className
    )}>
      {variant === 'default' && (
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-lg"></div>
        </div>
      )}
      
      <div className="flex flex-col items-center">
        <span className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          Sapphire
        </span>
        <span className="text-white text-opacity-80 -mt-1 text-xs md:text-sm">
          creations
        </span>
        
        {variant === 'default' && (
          <div className="absolute -inset-1 border border-white/10 rounded-full opacity-30"></div>
        )}
      </div>
    </div>
  );
};
