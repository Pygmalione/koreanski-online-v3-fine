import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
  repeat?: boolean;
  repeatDelay?: number;
  language?: 'polish' | 'korean';
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
  cursor = true,
  repeat = false,
  repeatDelay = 2000,
  language = 'polish',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Language-specific font class
  const languageClass = language === 'korean' 
    ? "font-['Noto_Sans_KR',_'Malgun_Gothic',_sans-serif]" 
    : '';

  useEffect(() => {
    let currentIndex = 0;
    setIsTyping(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      // Function to type characters one by one
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
          if (onComplete) onComplete();
          
          // If repeat is enabled, clear and start again after delay
          if (repeat) {
            timeoutRef.current = setTimeout(() => {
              setDisplayedText('');
              currentIndex = 0;
              setIsTyping(true);
              timeoutRef.current = setTimeout(typeNextChar, speed);
            }, repeatDelay);
          }
        }
      };

      typeNextChar();
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (initialTimeout) clearTimeout(initialTimeout);
    };
  }, [text, speed, delay, onComplete, repeat, repeatDelay]);

  // Cursor animation
  useEffect(() => {
    if (cursor) {
      controls.start({
        opacity: [1, 0, 1],
        transition: { 
          repeat: Infinity, 
          duration: 0.8,
          ease: "linear"
        }
      });
    }
  }, [cursor, controls]);

  return (
    <span className={`${className} ${languageClass} inline-flex`}>
      {displayedText}
      {cursor && isTyping && (
        <motion.span 
          animate={controls}
          className="ml-0.5 inline-block w-0.5 h-full bg-current"
        >
          &nbsp;
        </motion.span>
      )}
    </span>
  );
}