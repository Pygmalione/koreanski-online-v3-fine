import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export interface KoreanTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag"> {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  animate?: boolean;
}

export const KoreanText = forwardRef<HTMLDivElement, KoreanTextProps>(
  ({ 
    className, 
    as: Component = "p", 
    size = "base", 
    weight = "normal", 
    animate = false,
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    };

    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    // Special font stack for Korean text
    const koreanFontClass = "font-['Noto_Sans_KR',_'Malgun_Gothic',_sans-serif]";

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={cn(sizeClasses[size], weightClasses[weight], koreanFontClass, className)}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    const ElementComponent = Component as any;

    return (
      <ElementComponent
        ref={ref}
        className={cn(sizeClasses[size], weightClasses[weight], koreanFontClass, className)}
        {...props}
      >
        {children}
      </ElementComponent>
    );
  }
);

KoreanText.displayName = "KoreanText";