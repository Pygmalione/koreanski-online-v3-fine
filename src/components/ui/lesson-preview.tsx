import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Volume2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LessonPreview() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const lessonSteps = [
    {
      title: "Podstawowe powitania",
      korean: "안녕하세요",
      pronunciation: "Annyeonghaseyo",
      translation: "Cześć / Dzień dobry",
      example: "안녕하세요, 저는 Jadzia입니다.",
      exampleTranslation: "Cześć, jestem Jadzia.",
    },
    {
      title: "Pożegnania",
      korean: "안녕히 가세요",
      pronunciation: "Annyeonghi gaseyo",
      translation: "Do widzenia (gdy ktoś odchodzi)",
      example: "안녕히 가세요, 내일 봐요.",
      exampleTranslation: "Do widzenia, do zobaczenia jutro.",
    },
    {
      title: "Podziękowania",
      korean: "감사합니다",
      pronunciation: "Gamsahamnida",
      translation: "Dziękuję",
      example: "도와주셔서 감사합니다.",
      exampleTranslation: "Dziękuję za pomoc.",
    },
  ];
  
  const currentLesson = lessonSteps[currentStep];
  
  const handleNext = () => {
    if (currentStep < lessonSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Wypróbuj darmową lekcję
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Poznaj podstawowe zwroty w języku koreańskim z naszą interaktywną lekcją.
            To tylko przedsmak tego, co czeka na Ciebie w pełnym kursie.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-blue-900/50 bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm"
          >
            {/* Progress bar */}
            <div className="w-full h-1 bg-blue-900/30">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / lessonSteps.length) * 100}%` }}
              />
            </div>
            
            <div className="p-8">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-medium">Lekcja 1</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">Podstawowe zwroty</span>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <span className="text-blue-400 font-medium">{currentStep + 1}</span>
                  <span>/</span>
                  <span>{lessonSteps.length}</span>
                </div>
              </div>
              
              {/* Lesson content */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">{currentLesson.title}</h3>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-900/50 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Koreański</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 rounded-full text-blue-400 hover:text-blue-300 hover:bg-blue-900/50"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-3xl font-bold text-white">{currentLesson.korean}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-gray-400 block mb-1">Wymowa</span>
                        <p className="text-lg text-blue-300">{currentLesson.pronunciation}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-400 block mb-1">Tłumaczenie</span>
                        <p className="text-lg text-white">{currentLesson.translation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-900/30 h-full">
                      <h4 className="text-lg font-medium text-white mb-4">Przykład użycia</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-gray-400 block mb-1">Zdanie</span>
                          <p className="text-lg text-white">{currentLesson.example}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-400 block mb-1">Tłumaczenie</span>
                          <p className="text-lg text-blue-300">{currentLesson.exampleTranslation}</p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          className="w-full mt-2 border border-blue-900/50 bg-blue-900/20 text-blue-400 hover:bg-blue-900/40"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Odtwórz przykład
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={cn(
                    "border-blue-900/50 text-blue-400 hover:bg-blue-900/20",
                    currentStep === 0 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  Poprzedni
                </Button>
                
                <Button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white group"
                  disabled={currentStep === lessonSteps.length - 1}
                >
                  {currentStep === lessonSteps.length - 1 ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Ukończono
                    </>
                  ) : (
                    <>
                      Następny
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">
              Chcesz więcej? Zarejestruj się, aby uzyskać dostęp do pełnego kursu!
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Rozpocznij pełny kurs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}