import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type GoalType = "casual" | "regular" | "intensive";

interface GoalOption {
  type: GoalType;
  title: string;
  description: string;
  icon: React.ElementType;
  hours: number;
  color: string;
}

export function LanguageGoalSelector() {
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  
  const goals: GoalOption[] = [
    {
      type: "casual",
      title: "Casual",
      description: "Nauka w wolnym tempie, 1-2 godziny tygodniowo",
      icon: Clock,
      hours: 2,
      color: "from-blue-400 to-blue-600",
    },
    {
      type: "regular",
      title: "Regular",
      description: "Systematyczna nauka, 3-5 godzin tygodniowo",
      icon: BookOpen,
      hours: 4,
      color: "from-blue-500 to-blue-700",
    },
    {
      type: "intensive",
      title: "Intensive",
      description: "Intensywna nauka, 6+ godzin tygodniowo",
      icon: Zap,
      hours: 6,
      color: "from-blue-600 to-blue-800",
    },
  ];

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
            Wybierz swój cel językowy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Dostosuj swój plan nauki do własnych potrzeb i możliwości czasowych.
            Jadzia Kim pomoże Ci osiągnąć Twoje cele językowe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {goals.map((goal, i) => {
            const isSelected = selectedGoal === goal.type;
            
            return (
              <motion.div
                key={goal.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedGoal(goal.type)}
                className={cn(
                  "cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-300",
                  isSelected
                    ? "ring-2 ring-blue-500 transform scale-[1.02]"
                    : "border border-blue-900/30 hover:border-blue-600/50"
                )}
              >
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-black/50 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-white mb-4`}>
                    <goal.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{goal.title}</h3>
                  <p className="text-gray-400 mb-4">{goal.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400">{goal.hours} godz./tydzień</span>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                      >
                        <ArrowRight className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </div>
                
                {/* Glow effect on selected */}
                {isSelected && (
                  <div className="absolute -z-10 inset-0 rounded-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-2xl blur-xl" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            disabled={!selectedGoal}
            className={cn(
              "bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300",
              !selectedGoal && "opacity-50 cursor-not-allowed"
            )}
          >
            Kontynuuj
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}