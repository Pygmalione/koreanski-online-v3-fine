import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Zap, Target, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

type GoalType = "casual" | "regular" | "intensive";
type TargetLevel = "beginner" | "intermediate" | "advanced" | "fluent";
type WeeklyHours = 2 | 4 | 6 | 8 | 10;

const GoalsPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<TargetLevel | null>(null);
  const [selectedHours, setSelectedHours] = useState<WeeklyHours | null>(null);
  
  const goals = [
    {
      type: "casual",
      title: "Casual",
      description: "Nauka w wolnym tempie, bez presji",
      icon: Clock,
      color: "from-blue-400 to-blue-600",
    },
    {
      type: "regular",
      title: "Regular",
      description: "Systematyczna nauka, stałe postępy",
      icon: BookOpen,
      color: "from-blue-500 to-blue-700",
    },
    {
      type: "intensive",
      title: "Intensive",
      description: "Intensywna nauka, szybkie rezultaty",
      icon: Zap,
      color: "from-blue-600 to-blue-800",
    },
  ];
  
  const levels = [
    {
      type: "beginner",
      title: "Początkujący",
      description: "Podstawowa komunikacja, proste zwroty",
      icon: Target,
    },
    {
      type: "intermediate",
      title: "Średniozaawansowany",
      description: "Swobodna rozmowa, rozumienie kontekstu",
      icon: Target,
    },
    {
      type: "advanced",
      title: "Zaawansowany",
      description: "Płynna komunikacja, złożone tematy",
      icon: Target,
    },
    {
      type: "fluent",
      title: "Biegły",
      description: "Poziom zbliżony do native speakera",
      icon: Target,
    },
  ];
  
  const hours: WeeklyHours[] = [2, 4, 6, 8, 10];
  
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and navigate to trial lesson
      navigate("/trial-lesson");
    }
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isNextDisabled = () => {
    if (currentStep === 1) return !selectedGoal;
    if (currentStep === 2) return !selectedLevel;
    if (currentStep === 3) return !selectedHours;
    return false;
  };

  return (
    <main className="w-full min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      currentStep === step
                        ? "bg-blue-600 text-white"
                        : currentStep > step
                        ? "bg-blue-900/50 text-blue-300"
                        : "bg-blue-900/30 text-gray-500"
                    )}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      step
                    )}
                  </div>
                ))}
              </div>
              
              <div className="relative h-1 bg-blue-900/30 rounded-full">
                <div
                  className="absolute h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-sm text-blue-400">Cel nauki</span>
                <span className={`text-sm ${currentStep >= 2 ? "text-blue-400" : "text-gray-500"}`}>
                  Poziom docelowy
                </span>
                <span className={`text-sm ${currentStep >= 3 ? "text-blue-400" : "text-gray-500"}`}>
                  Czas nauki
                </span>
              </div>
            </div>
            
            {/* Step content */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-900/30 p-8"
            >
              {currentStep === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Wybierz swój cel nauki</h2>
                  <p className="text-gray-400 mb-8">
                    Jaki jest Twój główny cel w nauce języka koreańskiego? Wybierz opcję, która najlepiej odpowiada Twoim potrzebom.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {goals.map((goal) => {
                      const isSelected = selectedGoal === goal.type;
                      
                      return (
                        <div
                          key={goal.type}
                          onClick={() => setSelectedGoal(goal.type as GoalType)}
                          className={cn(
                            "cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 p-4",
                            isSelected
                              ? "ring-2 ring-blue-500 bg-blue-900/30"
                              : "border border-blue-900/30 bg-blue-900/10 hover:border-blue-600/50"
                          )}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center text-white mb-3`}>
                            <goal.icon className="h-5 w-5" />
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-1">{goal.title}</h3>
                          <p className="text-sm text-gray-400">{goal.description}</p>
                          
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              
              {currentStep === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Wybierz poziom docelowy</h2>
                  <p className="text-gray-400 mb-8">
                    Jaki poziom znajomości języka koreańskiego chcesz osiągnąć? Wybierz opcję, która najlepiej odpowiada Twoim ambicjom.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {levels.map((level) => {
                      const isSelected = selectedLevel === level.type;
                      
                      return (
                        <div
                          key={level.type}
                          onClick={() => setSelectedLevel(level.type as TargetLevel)}
                          className={cn(
                            "cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 p-4",
                            isSelected
                              ? "ring-2 ring-blue-500 bg-blue-900/30"
                              : "border border-blue-900/30 bg-blue-900/10 hover:border-blue-600/50"
                          )}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mb-3">
                            <level.icon className="h-5 w-5" />
                          </div>
                          
                          <h3 className="text-lg font-semibold text-white mb-1">{level.title}</h3>
                          <p className="text-sm text-gray-400">{level.description}</p>
                          
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              
              {currentStep === 3 && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Ile czasu możesz poświęcić na naukę?</h2>
                  <p className="text-gray-400 mb-8">
                    Wybierz, ile godzin tygodniowo możesz przeznaczyć na naukę języka koreańskiego.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    {hours.map((hour) => {
                      const isSelected = selectedHours === hour;
                      
                      return (
                        <div
                          key={hour}
                          onClick={() => setSelectedHours(hour)}
                          className={cn(
                            "cursor-pointer relative rounded-xl overflow-hidden transition-all duration-300 p-4 flex items-center gap-3",
                            isSelected
                              ? "ring-2 ring-blue-500 bg-blue-900/30"
                              : "border border-blue-900/30 bg-blue-900/10 hover:border-blue-600/50"
                          )}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                            <Calendar className="h-5 w-5" />
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-white">{hour} godziny</h3>
                            <p className="text-sm text-gray-400">tygodniowo</p>
                          </div>
                          
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={cn(
                    "border-blue-900/50 text-blue-400 hover:bg-blue-900/20",
                    currentStep === 1 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  Wstecz
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                  className={cn(
                    "bg-blue-600 hover:bg-blue-700 text-white group",
                    isNextDisabled() && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {currentStep === 3 ? (
                    <>
                      Rozpocznij naukę
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  ) : (
                    <>
                      Dalej
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default GoalsPage;