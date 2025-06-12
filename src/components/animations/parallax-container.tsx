import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  overflow?: boolean;
}

export function ParallaxContainer({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
  overflow = false,
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Calculate transform based on direction
  const getTransform = (value: MotionValue<number>) => {
    switch (direction) {
      case 'up':
        return useTransform(value, [0, 1], ['0%', `${-speed * 100}%`]);
      case 'down':
        return useTransform(value, [0, 1], ['0%', `${speed * 100}%`]);
      case 'left':
        return useTransform(value, [0, 1], ['0%', `${-speed * 100}%`]);
      case 'right':
        return useTransform(value, [0, 1], ['0%', `${speed * 100}%`]);
      default:
        return useTransform(value, [0, 1], ['0%', `${-speed * 100}%`]);
    }
  };

  const y = direction === 'up' || direction === 'down' 
    ? getTransform(scrollYProgress) 
    : undefined;
    
  const x = direction === 'left' || direction === 'right' 
    ? getTransform(scrollYProgress) 
    : undefined;

  return (
    <div 
      ref={ref} 
      className={`${className} ${overflow ? 'overflow-visible' : 'overflow-hidden'}`}
    >
      <motion.div style={{ y, x }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}