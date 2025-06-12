import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

interface FloatingElementsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  colors?: string[];
  className?: string;
}

export function FloatingElements({
  count = 20,
  minSize = 5,
  maxSize = 20,
  minDuration = 15,
  maxDuration = 40,
  colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#10b981'],
  className = '',
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate random elements
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial dimensions
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generate elements when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newElements: FloatingElement[] = [];
    
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: minSize + Math.random() * (maxSize - minSize),
        duration: minDuration + Math.random() * (maxDuration - minDuration),
        delay: Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    setElements(newElements);
  }, [dimensions, count, minSize, maxSize, minDuration, maxDuration, colors]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            backgroundColor: element.color,
            opacity: element.opacity,
          }}
          animate={{
            y: [element.y, element.y - 100, element.y],
            x: [element.x, element.x + (Math.random() * 50 - 25), element.x],
            opacity: [element.opacity, element.opacity * 1.5, element.opacity],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}