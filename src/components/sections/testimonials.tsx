import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { staggerContainer } from "@/components/animations";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay?: number;
}

function Testimonial({ quote, author, role, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-blue-900/20 to-black/50 border-blue-900/30 p-6">
        <Quote className="h-8 w-8 text-blue-500/50 mb-4" />
        <p className="text-gray-300 mb-6 italic">{quote}</p>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-blue-400">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function TestimonialsSection() {
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
            Co mówią nasi uczniowie
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Dołącz do tysięcy zadowolonych uczniów, którzy już rozpoczęli swoją przygodę z językiem koreańskim.
          </motion.p>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Testimonial
            quote="Dzięki Koreański.online w końcu zrozumiałam zasady wymowy, które wcześniej sprawiały mi problem. Jadzia Kim to świetna nauczycielka!"
            author="Anna Kowalska"
            role="Uczennica od 6 miesięcy"
            delay={0.1}
          />
          <Testimonial
            quote="Jako fan K-popu, zawsze chciałem rozumieć teksty piosenek. Ta platforma pomogła mi osiągnąć ten cel szybciej niż myślałem."
            author="Michał Nowak"
            role="Uczeń od 3 miesięcy"
            delay={0.2}
          />
          <Testimonial
            quote="Materiały są świetnie przygotowane i dostosowane do polskich uczniów. Polecam każdemu, kto chce szybko nauczyć się koreańskiego."
            author="Karolina Wiśniewska"
            role="Uczennica od roku"
            delay={0.3}
          />
        </motion.div>
      </div>
    </section>
  );
}