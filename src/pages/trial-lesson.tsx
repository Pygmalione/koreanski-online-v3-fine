import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Volume2, ArrowRight, ArrowLeft, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const TrialLessonPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const lessonSteps = [
    {
      title: "Podstawowe powitania",
      korean: "안녕하세요",
      pronunciation: "Annyeonghaseyo",
      translation: "Cześć / Dzień dobry",
      example: "안녕하세요, 저는 Jadzia입니다.",
      exampleTranslation: "Cześć, jestem Jadzia.",
      quiz: {
        question: "Jak powiesz 'Cześć' po koreańsku?",
        options: ["안녕하세요", "감사합니다", "잘 가요", "미안합니다"],
        correctAnswer: 0,
      },
    },
    {
      title: "Pożegnania",
      korean: "안녕히 가세요",
      pronunciation: "Annyeonghi gaseyo",
      translation: "Do widzenia (gdy ktoś odchodzi)",
      example: "안녕히 가세요, 내일 봐요.",
      exampleTranslation: "Do widzenia, do zobaczenia jutro.",
      quiz: {
        question: "Które wyrażenie oznacza 'Do widzenia' (gdy ktoś odchodzi)?",
        options: ["안녕하세요", "감사합니다", "안녕히 가세요", "미안합니다"],
        correctAnswer: 2,
      },
    },
    {
      title: "Podziękowania",
      korean: "감사합니다",
      pronunciation: "Gamsahamnida",
      translation: "Dziękuję",
      example: "도와주셔서 감사합니다.",
      exampleTranslation: "Dziękuję za pomoc.",
      quiz: {
        question: "Jak powiesz 'Dziękuję' po koreańsku?",
        options: ["안녕하세요", "감사합니다", "안녕히 가세요", "미안합니다"],
        correctAnswer: 1,
      },
    },
    {
      title: "Przeprosiny",
      korean: "미안합니다",
      pronunciation: "Mianhamnida",
      translation: "Przepraszam",
      example: "늦어서 미안합니다.",
      exampleTranslation: "Przepraszam za spóźnienie.",
      quiz: {
        question: "Które wyrażenie oznacza 'Przepraszam'?",
        options: ["안녕하세요", "감사합니다", "안녕히 가세요", "미안합니다"],
        correctAnswer: 3,
      },
    },
  ];
  
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(
    Array(lessonSteps.length).fill(null)
  );
  const [showQuiz, setShowQuiz] = useState(false);
  
  const currentLesson = lessonSteps[currentStep];
  
  const handleNext = () => {
    if (!showQuiz) {
      setShowQuiz(true);
    } else {
      if (quizAnswers[currentStep] === currentLesson.quiz.correctAnswer) {
        if (!completedSteps.includes(currentStep)) {
          setCompletedSteps([...completedSteps, currentStep]);
        }
        
        if (currentStep < lessonSteps.length - 1) {
          setCurrentStep(currentStep + 1);
          setShowQuiz(false);
        }
      }
    }
  };
  
  const handlePrev = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowQuiz(false);
    }
  };
  
  const selectAnswer = (index: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentStep] = index;
    setQuizAnswers(newAnswers);
  };
  
  const isLessonComplete = completedSteps.length === lessonSteps.length;

  return (
    <main className="w-full min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Darmowa lekcja: Podstawowe zwroty
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Poznaj podstawowe zwroty w języku koreańskim. Ta lekcja jest częścią naszego pełnego kursu.
              </p>
            </motion.div>
            
            {isLessonComplete ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm rounded-2xl border border-blue-900/50 p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-blue-400" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">Gratulacje!</h2>
                <p className="text-gray-300 mb-6">
                  Ukończyłeś darmową lekcję podstawowych zwrotów w języku koreańskim. 
                  Czy chcesz kontynuować naukę z pełnym kursem?
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Rozpocznij pełny kurs
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-blue-600 text-blue-400 hover:bg-blue-900/20"
                  >
                    <Link to="/">
                      Wróć do strony głównej
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`${currentStep}-${showQuiz}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative rounded-2xl overflow-hidden border border-blue-900/50 bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm"
              >
                {/* Progress bar */}
                <div className="w-full h-1 bg-blue-900/30">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((completedSteps.length) / lessonSteps.length) * 100}%` }}
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
                  
                  {/* Lesson content or quiz */}
                  {!showQuiz ? (
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
                  ) : (
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-white mb-6">Sprawdź swoją wiedzę</h3>
                      
                      <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-900/30 mb-6">
                        <p className="text-lg text-white mb-4">{currentLesson.quiz.question}</p>
                        
                        <div className="space-y-3">
                          {currentLesson.quiz.options.map((option, index) => {
                            const isSelected = quizAnswers[currentStep] === index;
                            const isCorrect = index === currentLesson.quiz.correctAnswer;
                            const isWrong = isSelected && !isCorrect;
                            
                            return (
                              <div
                                key={index}
                                onClick={() => selectAnswer(index)}
                                className={cn(
                                  "cursor-pointer p-3 rounded-lg border transition-all",
                                  isSelected
                                    ? isCorrect
                                      ? "border-emerald-500 bg-emerald-500/20"
                                      : "border-red-500 bg-red-500/20"
                                    : "border-blue-900/50 bg-blue-900/10 hover:border-blue-600/50"
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-white">{option}</span>
                                  
                                  {isSelected && (
                                    <div className={cn(
                                      "w-6 h-6 rounded-full flex items-center justify-center",
                                      isCorrect ? "bg-emerald-500" : "bg-red-500"
                                    )}>
                                      {isCorrect ? (
                                        <CheckCircle className="h-4 w-4 text-white" />
                                      ) : (
                                        <X className="h-4 w-4 text-white" />
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {quizAnswers[currentStep] !== null && (
                        <div className={cn(
                          "p-4 rounded-lg",
                          quizAnswers[currentStep] === currentLesson.quiz.correctAnswer
                            ? "bg-emerald-500/20 border border-emerald-500/50"
                            : "bg-red-500/20 border border-red-500/50"
                        )}>
                          <p className={cn(
                            "font-medium",
                            quizAnswers[currentStep] === currentLesson.quiz.correctAnswer
                              ? "text-emerald-400"
                              : "text-red-400"
                          )}>
                            {quizAnswers[currentStep] === currentLesson.quiz.correctAnswer
                              ? "Poprawna odpowiedź!"
                              : "Niepoprawna odpowiedź. Spróbuj jeszcze raz."}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrev}
                      disabled={currentStep === 0 && !showQuiz}
                      className={cn(
                        "border-blue-900/50 text-blue-400 hover:bg-blue-900/20",
                        currentStep === 0 && !showQuiz && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {showQuiz ? "Wróć do lekcji" : "Poprzedni"}
                    </Button>
                    
                    <Button
                      onClick={handleNext}
                      disabled={showQuiz && quizAnswers[currentStep] !== currentLesson.quiz.correctAnswer}
                      className={cn(
                        "bg-blue-600 hover:bg-blue-700 text-white group",
                        showQuiz && quizAnswers[currentStep] !== currentLesson.quiz.correctAnswer && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {!showQuiz ? (
                        <>
                          Sprawdź wiedzę
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      ) : (
                        <>
                          {currentStep === lessonSteps.length - 1 ? "Zakończ lekcję" : "Następny"}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default TrialLessonPage;