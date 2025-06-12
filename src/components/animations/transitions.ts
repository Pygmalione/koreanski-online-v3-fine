import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Fade in up animation (exactly as specified)
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Stagger container animation (exactly as specified)
export const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// Stagger children animation with more options
export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Glow effect animation (exactly as specified)
export const glowEffect: Variants = {
  initial: { boxShadow: "0 0 0 rgba(96, 165, 250, 0)" },
  hover: { boxShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }
};

// Glow pulse animation
export const glowPulse: Variants = {
  hidden: { 
    opacity: 0.7,
    boxShadow: "0 0 0px rgba(59, 130, 246, 0.5)"
  },
  visible: { 
    opacity: 1,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut" 
    }
  }
};

// Hover scale animation
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

// Parallax scroll effect
export const parallaxScroll = {
  y: [-20, 20],
  transition: {
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 2,
    ease: "easeInOut"
  }
};