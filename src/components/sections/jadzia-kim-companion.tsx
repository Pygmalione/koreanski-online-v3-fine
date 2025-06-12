import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Book, Globe, Heart, Volume2, Play, ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/animations";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  demoTitle: string;
  demoContent: string;
  koreanPhrase?: string;
  index: number;
}

const Feature = ({ icon: Icon, title, description, demoTitle, demoContent, koreanPhrase, index }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4 cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400 mt-1 relative group-hover:bg-blue-800/50 transition-colors duration-300">
          <Icon className="h-6 w-6" />
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
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
          
          {koreanPhrase && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-blue-400 font-['Noto_Sans_KR']">{koreanPhrase}</span>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-7 w-7 p-0 rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-900/50"
              >
                <Volume2 className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 ml-16 bg-blue-900/20 border border-blue-900/50 rounded-lg p-4 overflow-hidden"
          >
            <h4 className="text-sm font-medium text-blue-400 mb-2">{demoTitle}</h4>
            <p className="text-sm text-gray-300">{demoContent}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function JadziaKimCompanion() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeSpeechBubble, setActiveSpeechBubble] = useState(0);
  
  const speechBubbles = [
    { text: "Cześć! Jestem Jadzia Kim!", language: "polish" },
    { text: "안녕하세요! 저는 재지아 킴입니다!", language: "korean" },
    { text: "Pomogę Ci nauczyć się koreańskiego!", language: "polish" },
    { text: "한국어를 배우는 것을 도와 드리겠습니다!", language: "korean" },
  ];
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpeechBubble((prev) => (prev + 1) % speechBubbles.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: MessageCircle,
      title: "Rozmowy w czasie rzeczywistym",
      description: "Prowadź naturalne konwersacje z Jadzią w języku koreańskim i polskim.",
      demoTitle: "Przykładowa konwersacja",
      demoContent: "Ty: Jak zapytać o godzinę po koreańsku?\nJadzia: Możesz powiedzieć '지금 몇 시예요?' (Jigeum myeoch-si-yeyo?)",
      koreanPhrase: "대화를 나눠봐요!",
      index: 0
    },
    {
      icon: Book,
      title: "Wyjaśnienia gramatyki po polsku",
      description: "Zrozum koreańską gramatykę dzięki przejrzystym wyjaśnieniom w języku polskim.",
      demoTitle: "Przykład wyjaśnienia gramatycznego",
      demoContent: "W koreańskim, przyrostek '-요' dodaje formalność do zdania, podobnie jak polskie 'Pan/Pani'.",
      koreanPhrase: "문법을 배워봐요!",
      index: 1
    },
    {
      icon: Globe,
      title: "Kulturowe wskazówki",
      description: "Poznaj koreańską kulturę, etykietę i zwyczaje, które pomogą Ci w komunikacji.",
      demoTitle: "Wskazówka kulturowa",
      demoContent: "W Korei podawanie i odbieranie przedmiotów obiema rękami jest wyrazem szacunku, szczególnie wobec starszych osób.",
      koreanPhrase: "문화를 이해해요!",
      index: 2
    },
    {
      icon: Heart,
      title: "Motywacja i przypomnienia",
      description: "Otrzymuj spersonalizowane przypomnienia i motywujące wiadomości od Jadzi.",
      demoTitle: "Przykładowa wiadomość motywacyjna",
      demoContent: "Jadzia: Świetnie Ci idzie! Ukończyłeś już 7 dni nauki z rzędu. 화이팅! (Hwaiting! - Dasz radę!)",
      koreanPhrase: "함께 열심히 해요!",
      index: 3
    }
  ];
  
  const characterVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    breathing: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const speechBubbleVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.9,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };
  
  const particleCount = 20;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background particles */}
      <div className="absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Korean characters floating */}
        {["한", "국", "어", "배", "우", "기"].map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/10 text-5xl font-bold font-['Noto_Sans_KR']"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.div>
        ))}
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Poznaj Jadzię Kim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Twoja osobista nauczycielka i towarzyszka w nauce języka koreańskiego
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Character illustration */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={characterVariants}
            className="relative flex justify-center"
          >
            <motion.div
              animate="breathing"
              variants={characterVariants}
              className="relative z-10"
            >
              <div className="relative">
                {/* Character image placeholder - would be replaced with actual character */}
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden border-4 border-blue-600/50">
                  <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20" />
                  <span className="text-6xl font-bold text-white">JK</span>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Speech bubble */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpeechBubble}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={speechBubbleVariants}
                    className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white rounded-2xl p-4 shadow-lg min-w-48"
                  >
                    <div className="absolute bottom-0 left-0 transform -translate-x-2 translate-y-1/2 rotate-45 w-4 h-4 bg-white" />
                    <p className={cn(
                      "text-gray-800 text-sm",
                      speechBubbles[activeSpeechBubble].language === "korean" ? "font-['Noto_Sans_KR']" : ""
                    )}>
                      <TypewriterText 
                        text={speechBubbles[activeSpeechBubble].text} 
                        speed={30}
                        language={speechBubbles[activeSpeechBubble].language === "korean" ? "korean" : "polish"}
                      />
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Interactive buttons */}
              <div className="flex justify-center mt-6 gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-600 text-blue-400 hover:bg-blue-900/20 gap-2"
                >
                  <Volume2 className="h-4 w-4" />
                  Posłuchaj Jadzi
                </Button>
                <Button 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Porozmawiaj
                </Button>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
          </motion.div>
          
          {/* Features list */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white group"
              >
                Wypróbuj rozmowę z Jadzią
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}