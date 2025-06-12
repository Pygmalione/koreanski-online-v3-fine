import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
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

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
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