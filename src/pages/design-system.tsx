import { DesignSystemShowcase } from "@/components/ui/design-system-showcase";
import { motion } from "framer-motion";
import { pageTransition } from "@/components/animations";

export default function DesignSystemPage() {
  return (
    <motion.main
      className="min-h-screen bg-black text-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Design System
            </h1>
            <p className="text-xl text-gray-400">
              Comprehensive design system for Koreański.online following 2025 Webflow trends
            </p>
          </header>

          <DesignSystemShowcase />
        </div>
      </div>
    </motion.main>
  );
}