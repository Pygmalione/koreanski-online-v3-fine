import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-90" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20">
        <GridLines />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <Particles />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-[150px] opacity-10" />
    </div>
  );
}

function GridLines() {
  return (
    <div className="h-full w-full">
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"
          style={{ top: `${(i + 1) * 5}%` }}
        />
      ))}
      
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-900/30 to-transparent"
          style={{ left: `${(i + 1) * 5}%` }}
        />
      ))}
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="h-full w-full">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}