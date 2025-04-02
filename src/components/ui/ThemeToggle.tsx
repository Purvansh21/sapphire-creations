import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative h-10 w-10 rounded-full flex items-center justify-center overflow-hidden",
        "transition-all duration-300 ease-in-out",
        theme === 'dark' 
          ? "bg-blue-900/50 hover:bg-blue-800/60" 
          : "bg-blue-200/50 hover:bg-blue-300/60",
        isTransitioning && "scale-110",
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon */}
      <div
        className={cn(
          "absolute transition-all duration-500 transform",
          theme === 'dark' 
            ? "-translate-y-10 opacity-0 rotate-90" 
            : "translate-y-0 opacity-100 rotate-0"
        )}
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </div>

      {/* Moon Icon */}
      <div
        className={cn(
          "absolute transition-all duration-500 transform",
          theme === 'dark' 
            ? "translate-y-0 opacity-100 rotate-0" 
            : "translate-y-10 opacity-0 rotate-90"
        )}
      >
        <Moon className="h-5 w-5 text-blue-300" />
      </div>

      {/* Background Animation */}
      <div 
        className={cn(
          "absolute inset-0 blur-md transition-all duration-1000 ease-in-out",
          theme === 'dark' 
            ? "bg-gradient-to-br from-indigo-600/20 to-purple-800/20" 
            : "bg-gradient-to-br from-yellow-300/20 to-orange-400/20"
        )}
      />

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute w-1 h-1 rounded-full bg-white transition-all duration-1000",
            theme === 'dark' 
              ? "opacity-40 scale-0" 
              : "opacity-80 scale-100",
            `particle-${i + 1}`
          )}
          style={{
            left: `${40 + Math.random() * 20}%`,
            top: `${40 + Math.random() * 20}%`,
            transitionDelay: `${i * 50}ms`,
          }}
        />
      ))}
    </button>
  );
}; 