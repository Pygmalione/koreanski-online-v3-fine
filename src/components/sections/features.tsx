import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/feature-card";
import { BookOpen, Sparkles, Users, Globe, Rocket, Award } from "lucide-react";
import { staggerContainer } from "@/components/animations";

export function FeaturesSection() {
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
            Dlaczego Koreański.online?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Nasza platforma została stworzona specjalnie dla Polaków, 
            uwzględniając specyficzne wyzwania, jakie napotykają w nauce języka koreańskiego.
          </motion.p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Materiały po polsku"
            description="Wszystkie lekcje i objaśnienia są w języku polskim, co ułatwia zrozumienie trudnych koncepcji."
            delay={0.1}
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="AI Asystent - Jadzia Kim"
            description="Twoja osobista nauczycielka, która odpowiada na pytania i pomaga w nauce 24/7."
            delay={0.2}
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Społeczność uczniów"
            description="Dołącz do grupy Polaków uczących się koreańskiego i wymieniaj się doświadczeniami."
            delay={0.3}
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Kulturowy kontekst"
            description="Poznaj nie tylko język, ale również kulturę, zwyczaje i popkulturę Korei."
            delay={0.4}
          />
          <FeatureCard
            icon={<Rocket className="h-6 w-6" />}
            title="Szybkie postępy"
            description="Nasza metoda nauki pozwala na szybkie osiągnięcie podstawowej komunikacji."
            delay={0.5}
          />
          <FeatureCard
            icon={<Award className="h-6 w-6" />}
            title="Certyfikaty ukończenia"
            description="Zdobywaj certyfikaty potwierdzające Twoje umiejętności językowe."
            delay={0.6}
          />
        </motion.div>
      </div>
    </section>
  );
}