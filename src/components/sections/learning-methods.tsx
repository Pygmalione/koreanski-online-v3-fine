import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Network, ArrowRight } from "lucide-react"; // Bridge icon is not available in lucide-react
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/animations";
import { cn } from "@/lib/utils";

interface MethodCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  demoTitle: string;
  demoContent: React.ReactNode;
  koreanExample?: string;
  index: number;
}

const MethodCard = ({ icon: Icon, title, description, demoTitle, demoContent, koreanExample, index }: MethodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-blue-900/10 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-6 h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-all duration-300"
    >
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white mb-6">
          <Icon className="h-8 w-8" />
          
          {/* Pulsing glow animation */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-blue-500/20"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {koreanExample && (
          <div className="mb-4 p-2 bg-blue-900/20 rounded-lg border border-blue-900/30">
            <p className="text-blue-300 font-['Noto_Sans_KR']">{koreanExample}</p>
          </div>
        )}
      </div>
      
      {/* Interactive demo preview */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-blue-900/30 rounded-lg border border-blue-900/50 mt-4"
      >
        <div className="p-4">
          <h4 className="text-sm font-medium text-blue-400 mb-2">{demoTitle}</h4>
          <div className="text-sm text-gray-300">{demoContent}</div>
        </div>
      </motion.div>
      
      {/* Neumorphic effect overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-0 opacity-30 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 h-1/2 opacity-30 rounded-b-2xl bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export function LearningMethodsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  const methods = [
    {
      icon: Brain,
      title: "KimFlow™ Immersion",
      description: "Nauka przez zanurzenie w K-kulturze",
      demoTitle: "Integracja z K-dramami",
      demoContent: (
        <div className="space-y-2">
          <p>Nasze lekcje zawierają fragmenty popularnych K-dram z polskimi napisami i interaktywnymi ćwiczeniami.</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-12 h-8 bg-blue-900/50 rounded flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 0.9, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowRight className="h-4 w-4 text-blue-400" />
              </motion.div>
            </div>
            <span className="text-xs text-blue-300">Fragment z "Crash Landing on You"</span>
          </div>
        </div>
      ),
      koreanExample: "드라마로 배우기",
      index: 0
    },
    {
      icon: Network,
      title: "NeuroSpacing™ Algorithm",
      description: "AI dostosowuje rytm nauki do Twojego mózgu",
      demoTitle: "Wizualizacja interwałów nauki",
      demoContent: (
        <div className="space-y-2">
          <p>Nasz algorytm analizuje Twoje postępy i automatycznie dostosowuje częstotliwość powtórek.</p>
          <div className="flex items-center justify-between mt-2">
            {[1, 3, 7, 14, 30].map((day, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div 
                  className="w-2 bg-blue-500"
                  style={{ height: (10 + day * 2) + 'px' }}
                  animate={{ 
                    backgroundColor: ['#3b82f6', '#60a5fa', '#3b82f6'],
                    height: [(10 + day * 2) + 'px', (15 + day * 2) + 'px', (10 + day * 2) + 'px']
                  }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                />
                <span className="text-xs text-gray-400 mt-1">D{day}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      koreanExample: "기억 알고리즘",
      index: 1
    },
    {
      icon: Network,
      title: "CulturalBridge™ Pedagogy",
      description: "Wykorzystujemy podobieństwa polsko-koreańskie",
      demoTitle: "Porównanie gramatyczne",
      demoContent: (
        <div className="space-y-2">
          <p>Koreański, podobnie jak polski, ma rozbudowany system przypadków i formalności.</p>
          <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
            <div className="p-1 bg-blue-900/40 rounded">
              <span className="text-white">Polski:</span>
              <p className="text-blue-300">Pana książka <span className="text-emerald-400">(formalnie)</span></p>
            </div>
            <div className="p-1 bg-blue-900/40 rounded">
              <span className="text-white">Koreański:</span>
              <p className="text-blue-300 font-['Noto_Sans_KR']">당신의 책 <span className="text-emerald-400">(formalnie)</span></p>
            </div>
          </div>
        </div>
      ),
      koreanExample: "문화적 연결",
      index: 2
    }
  ];
  
  // Background floating elements
  const floatingElements = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full bg-blue-900/5"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black/20" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Jak uczymy koreańskiego?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nasze unikalne metody nauczania łączą najnowsze technologie z głębokim zrozumieniem 
            polsko-koreańskich różnic językowych
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <MethodCard key={index} {...method} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white group"
          >
            Odkryj nasze metody
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}