import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Darmowy",
      price: isAnnual ? "0" : "0",
      description: "Podstawowe materiały do nauki",
      features: [
        "Dostęp do 10 podstawowych lekcji",
        "Podstawowe ćwiczenia słownictwa",
        "Dostęp do forum społeczności",
        "Śledzenie postępów nauki",
      ],
      cta: "Rozpocznij za darmo",
      popular: false,
    },
    {
      name: "Premium",
      price: isAnnual ? "39" : "49",
      period: isAnnual ? "/miesiąc" : "/miesiąc",
      description: "Pełny dostęp do wszystkich materiałów",
      features: [
        "Nieograniczony dostęp do wszystkich lekcji",
        "Zaawansowane ćwiczenia i quizy",
        "Konwersacje z Jadzią Kim (AI)",
        "Personalizowany plan nauki",
        "Ekskluzywne webtoony i e-booki",
        "Certyfikaty ukończenia",
      ],
      cta: "Wybierz Premium",
      popular: true,
    },
    {
      name: "Dla firm",
      price: isAnnual ? "99" : "129",
      period: isAnnual ? "/miesiąc" : "/miesiąc",
      description: "Rozwiązanie dla zespołów i firm",
      features: [
        "Wszystko z planu Premium",
        "Dostęp dla 5 użytkowników",
        "Dedykowany opiekun klienta",
        "Materiały dostosowane do biznesu",
        "Raportowanie postępów zespołu",
        "Szkolenia na żywo",
      ],
      cta: "Skontaktuj się z nami",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Wybierz plan dopasowany do Twoich potrzeb
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Wszystkie plany zawierają 14-dniowy okres próbny. Bez zobowiązań, możesz anulować w dowolnym momencie.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-blue-900/20 p-1 rounded-full flex items-center">
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                isAnnual
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Rocznie (20% taniej)
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !isAnnual
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Miesięcznie
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={cn(
                "relative rounded-2xl overflow-hidden",
                plan.popular
                  ? "border-2 border-blue-500"
                  : "border border-blue-900/30"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Najpopularniejszy
                </div>
              )}
              
              <div className="p-6 bg-gradient-to-br from-blue-900/20 to-black/50 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price} zł</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-400 mr-2 shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-900/30 hover:bg-blue-900/50 text-white"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}