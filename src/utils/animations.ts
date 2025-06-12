import { Variants } from 'framer-motion';

/**
 * Creates a staggered animation for a list of items
 * @param staggerDelay Delay between each child animation
 * @returns Framer Motion variants object
 */
export const createStaggerAnimation = (staggerDelay = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/**
 * Creates a parallax scrolling effect
 * @param speed Parallax speed factor (1 = normal, <1 = slower, >1 = faster)
 * @returns Function to be used with useTransform
 */
export const createParallaxEffect = (speed = 0.5) => {
  return (scrollY: number) => -scrollY * speed;
};

/**
 * Creates a glow pulse animation
 * @param color Base color for the glow (in rgba format)
 * @param intensity Maximum intensity of the glow
 * @returns Framer Motion variants object
 */
export const createGlowPulse = (color = 'rgba(59, 130, 246, 0.7)', intensity = 0.8): Variants => ({
  initial: { 
    boxShadow: `0 0 0px ${color.replace(/[\d.]+\)$/, '0)')}` 
  },
  animate: { 
    boxShadow: [
      `0 0 0px ${color.replace(/[\d.]+\)$/, '0)')}`,
      `0 0 20px ${color.replace(/[\d.]+\)$/, `${intensity})`)}`,
      `0 0 0px ${color.replace(/[\d.]+\)$/, '0)')}`
    ],
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }
});