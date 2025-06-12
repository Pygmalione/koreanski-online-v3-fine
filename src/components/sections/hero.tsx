import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeIn, slideUp } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-blue-900/30 px-3 py-1 rounded-full text-blue-400 text-sm"
              >
                <Sparkles className="h-4 w-4" />
                <span>Nowa metoda nauki koreańskiego</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Ucz się koreańskiego z{" "}
                <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">
                  Jadzią Kim
                </span>
              </motion.h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-lg text-gray-300 max-w-lg"
            >
              Pierwsza platforma do nauki języka koreańskiego stworzona specjalnie dla Polaków. 
              Ucz się z wirtualną asystentką Jadzią Kim i osiągnij płynność w mowie i piśmie.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group"
              >
                <Link to="/goals">
                  Rozpocznij za darmo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
              >
                <Link to="/trial-lesson">
                  Wypróbuj darmową lekcję
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex items-center gap-4 text-sm text-gray-400"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-blue-600"
                  />
                ))}
              </div>
              <p>Dołącz do ponad 10,000+ uczniów</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl shadow-blue-500/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/50 to-black relative overflow-hidden">
                {/* This would be replaced with an actual image of Jadzia Kim */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
                      <span className="text-4xl">JK</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">Jadzia Kim</h3>
                    <p className="text-blue-400">Twoja wirtualna nauczycielka</p>
                  </div>
                </div>
                
                {/* Interface elements overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-emerald-400">Aktywna i gotowa do pomocy</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl" />
            
            {/* Korean characters floating around */}
            {["안녕", "한국어", "공부", "재미"].map((char, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-400/30 text-2xl font-bold"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${10 + i * 25}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}