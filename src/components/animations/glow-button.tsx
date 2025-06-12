import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { glowEffect } from './transitions';

// Define the drag-related event handlers that need to be excluded
type DragHandlers = "onDrag" | "onDragEnd" | "onDragEnter" | "onDragExit" | "onDragLeave" | "onDragOver" | "onDragStart";

interface GlowButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, DragHandlers> {
  glowColor?: string;
  glowIntensity?: number;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ 
    children, 
    glowColor = 'rgba(96, 165, 250, 0.5)', 
    glowIntensity = 0.5,
    className = '',
    variant = 'default',
    size = 'md',
    ...props 
  }, ref) => {
    // Customize glow effect based on props
    const customGlowEffect = {
      initial: { boxShadow: `0 0 0 rgba(96, 165, 250, 0)` },
      hover: { 
        boxShadow: `0 0 20px ${glowColor.replace(/[\d.]+\)$/, `${glowIntensity})`)}` 
      }
    };

    // Variant styles
    const variantStyles = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-900/10',
      ghost: 'bg-transparent text-blue-600 hover:bg-blue-900/10'
    };

    // Size styles
    const sizeStyles = {
      sm: 'py-1 px-3 text-sm',
      md: 'py-2 px-4',
      lg: 'py-3 px-6 text-lg'
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={customGlowEffect}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

GlowButton.displayName = 'GlowButton';