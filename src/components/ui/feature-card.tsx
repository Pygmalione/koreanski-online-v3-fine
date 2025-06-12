import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-6 rounded-2xl border border-blue-900/30 bg-gradient-to-br from-blue-900/10 to-black/50 backdrop-blur-sm hover:border-blue-600/50 transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-800/50 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-emerald-400/20 rounded-2xl blur-xl" />
      </div>
    </motion.div>
  );
}