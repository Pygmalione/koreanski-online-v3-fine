import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export interface GlassCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onDragOver" | "onDragEnter" | "onDragLeave" | "onDrop" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onTransitionEnd"> {
  variant?: "default" | "elevated" | "bordered" | "glow";
  animate?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", animate = false, children, ...props }, ref) => {
    const baseStyles = "rounded-xl backdrop-blur-md";
    
    const variantStyles = {
      default: "bg-white/10 shadow-md",
      elevated: "bg-white/15 shadow-lg",
      bordered: "bg-white/5 border border-white/20",
      glow: "bg-white/10 shadow-glow-sm hover:shadow-glow-md transition-shadow duration-300",
    };

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={cn(baseStyles, variantStyles[variant], className)}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";