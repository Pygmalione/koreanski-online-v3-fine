import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LearningMethodsSection } from "@/components/sections/learning-methods";
import { JadziaKimCompanion } from "@/components/sections/jadzia-kim-companion";
import { LanguageGoalSelector } from "@/components/ui/language-goal-selector";
import { LessonPreview } from "@/components/ui/lesson-preview";
import { JadziaAssistant } from "@/components/ui/jadzia-assistant";
import { motion } from "framer-motion";
import { pageTransition } from "@/components/animations";

const Index = () => {
  return (
    <motion.main 
      className="w-full min-h-screen bg-black text-white relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      {/* Hero section */}
      <HeroSection />
      
      {/* Features section */}
      <FeaturesSection />
      
      {/* Learning methods section */}
      <LearningMethodsSection />
      
      {/* Jadzia Kim companion section */}
      <JadziaKimCompanion />
      
      {/* Language goal selector */}
      <LanguageGoalSelector />
      
      {/* Lesson preview */}
      <LessonPreview />
      
      {/* Testimonials section */}
      <TestimonialsSection />
      
      {/* Pricing table */}
      <PricingSection />
      
      {/* Jadzia Assistant */}
      <JadziaAssistant />
      
      {/* Footer */}
      <Footer />
    </motion.main>
  );
};

export default Index;