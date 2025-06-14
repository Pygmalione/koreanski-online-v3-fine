import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { motion } from "framer-motion";
import { forwardRef } from "react";

// Define button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-secondary bg-opacity-80 text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        glow: "bg-primary-500 text-white shadow-glow-md hover:shadow-glow-lg transition-shadow duration-300",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define button props
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: "default" | "secondary" | "ghost" | "outline" | "glow";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  animate?: boolean;
}

// Create the button component
export const ButtonVariants = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animate = false, asChild = false, children, ...props }, ref) => {
    // If animate is true, wrap with motion.button
    if (animate) {
      return (
        <motion.button
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    // If asChild is true, use the ShadcnButton with asChild
    if (asChild) {
      return (
        <ShadcnButton
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          asChild
          {...props}
        >
          {children}
        </ShadcnButton>
      );
    }

    // Otherwise use the regular ShadcnButton
    return (
      <ShadcnButton
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);

ButtonVariants.displayName = "ButtonVariants";