import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Clock, Calendar, BarChart, Play, ArrowRight } from "lucide-react";
import { fine } from "@/lib/fine";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/route-components";

const DashboardContent = () => {
  return (
    <main className="w-full min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Witaj, <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">Uczniu</span>
              </h1>
              <p className="text-gray-400">
                Kontynuuj naukę języka koreańskiego. Twój ostatni dostęp: dzisiaj
              </p>
            </motion.div>
            
            {/* Progress overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                    Postęp kursu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Ukończono</span>
                      <span className="text-white font-medium">12%</span>
                    </div>
                    <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-400">4 z 32 lekcji ukończonych</p>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-400" />
                    Osiągnięcia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Zdobyte</span>
                      <span className="text-white font-medium">3 z 20</span>
                    </div>
                    <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-400">Ostatnie: "Pierwszy tydzień nauki"</p>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-400" />
                    Czas nauki
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">W tym tygodniu</span>
                      <span className="text-white font-medium">2.5h / 4h</span>
                    </div>
                    <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "62.5%" }}></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-400">Łączny czas: 12 godzin</p>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Continue learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Kontynuuj naukę</h2>
                <Button variant="link" className="text-blue-400 p-0">
                  Zobacz wszystkie lekcje
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30 hover:border-blue-600/50 transition-colors cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-800/50 to-blue-900/30 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600/50 transition-colors">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold text-white">Lekcja 5: Przedstawianie się</h3>
                              <p className="text-sm text-gray-400">Poziom: Początkujący</p>
                            </div>
                            <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                              25% ukończone
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30 hover:border-blue-600/50 transition-colors cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-blue-800/50 to-blue-900/30 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600/50 transition-colors">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-semibold text-white">Lekcja 6: Liczby i liczenie</h3>
                              <p className="text-sm text-gray-400">Poziom: Początkujący</p>
                            </div>
                            <div className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">
                              Nowa
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            {/* Weekly stats and upcoming events */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-blue-400" />
                      Statystyki tygodniowe
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Twoja aktywność w ciągu ostatnich 7 dni
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-end justify-between gap-2">
                      {[30, 45, 80, 60, 20, 90, 40].map((height, i) => (
                        <div key={i} className="relative flex-1 flex flex-col items-center">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-gray-400 mt-2">
                            {["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30 h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      Nadchodzące wydarzenia
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Zaplanowane lekcje i wydarzenia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg border border-blue-900/30 bg-blue-900/10">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-white">Webinar: K-pop i kultura</h4>
                          <span className="text-xs text-blue-400">Jutro</span>
                        </div>
                        <p className="text-sm text-gray-400">18:00 - 19:30</p>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-blue-900/30 bg-blue-900/10">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-white">Quiz z lekcji 1-5</h4>
                          <span className="text-xs text-blue-400">Za 3 dni</span>
                        </div>
                        <p className="text-sm text-gray-400">Dostępny przez 24h</p>
                      </div>
                      
                      <div className="p-3 rounded-lg border border-blue-900/30 bg-blue-900/10">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-white">Nowa lekcja: Jedzenie</h4>
                          <span className="text-xs text-blue-400">Za 5 dni</span>
                        </div>
                        <p className="text-sm text-gray-400">Automatyczne odblokowanie</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

const Dashboard = () => (
  <ProtectedRoute Component={DashboardContent} />
);

export default Dashboard;