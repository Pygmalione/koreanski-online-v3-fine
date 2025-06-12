import { motion } from 'framer-motion';
import { 
  AnimatedSection, 
  ParallaxContainer, 
  GlowButton, 
  TypewriterText, 
  FloatingElements,
  fadeInUp,
  staggerContainer,
  glowEffect,
  pageTransition
} from '@/components/animations';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function AnimationDemo() {
  return (
    <motion.main
      className="min-h-screen bg-black text-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <FloatingElements />
      
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Animation System
            </h1>
            <p className="text-xl text-gray-400">
              Showcase of our sophisticated animation system using Framer Motion
            </p>
          </motion.div>
          
          {/* Animated Section Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Animated Section
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <AnimatedSection 
                  key={item} 
                  delay={item * 0.2}
                  className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Section {item}</h3>
                  <p className="text-gray-400">
                    This section animates when it enters the viewport using Intersection Observer.
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </section>
          
          {/* Parallax Container Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Parallax Container
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ParallaxContainer 
                speed={0.3} 
                direction="up"
                className="h-64 bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
              >
                <div className="h-full flex items-center justify-center">
                  <h3 className="text-xl font-semibold">Parallax Up</h3>
                </div>
              </ParallaxContainer>
              
              <ParallaxContainer 
                speed={0.3} 
                direction="down"
                className="h-64 bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
              >
                <div className="h-full flex items-center justify-center">
                  <h3 className="text-xl font-semibold">Parallax Down</h3>
                </div>
              </ParallaxContainer>
              
              <ParallaxContainer 
                speed={0.3} 
                direction="left"
                className="h-64 bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
              >
                <div className="h-full flex items-center justify-center">
                  <h3 className="text-xl font-semibold">Parallax Left</h3>
                </div>
              </ParallaxContainer>
              
              <ParallaxContainer 
                speed={0.3} 
                direction="right"
                className="h-64 bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
              >
                <div className="h-full flex items-center justify-center">
                  <h3 className="text-xl font-semibold">Parallax Right</h3>
                </div>
              </ParallaxContainer>
            </div>
          </section>
          
          {/* Glow Button Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Glow Button
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <GlowButton>Default Glow</GlowButton>
              <GlowButton variant="outline">Outline Glow</GlowButton>
              <GlowButton variant="ghost">Ghost Glow</GlowButton>
              <GlowButton size="sm">Small Glow</GlowButton>
              <GlowButton size="lg">Large Glow</GlowButton>
              <GlowButton glowColor="rgba(16, 185, 129, 0.5)">Green Glow</GlowButton>
            </div>
          </section>
          
          {/* Typewriter Text Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Typewriter Text
            </h2>
            
            <div className="space-y-8">
              <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Polish Text</h3>
                <div className="text-lg">
                  <TypewriterText 
                    text="Witaj w Koreański.online! Ucz się z Jadzią Kim."
                    speed={40}
                  />
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Korean Text</h3>
                <div className="text-lg">
                  <TypewriterText 
                    text="안녕하세요! Koreański.online에 오신 것을 환영합니다."
                    speed={40}
                    language="korean"
                    delay={1000}
                  />
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Repeating Text</h3>
                <div className="text-lg">
                  <TypewriterText 
                    text="This text will repeat after a delay..."
                    speed={30}
                    repeat={true}
                    repeatDelay={2000}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Floating Elements Demo */}
          <section className="mb-20 relative">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Floating Elements
            </h2>
            
            <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6 h-64 relative overflow-hidden">
              <FloatingElements 
                count={15} 
                minSize={5} 
                maxSize={15} 
                colors={['#3b82f6', '#60a5fa', '#10b981']}
                className="absolute inset-0"
              />
              <div className="relative z-10 h-full flex items-center justify-center">
                <h3 className="text-xl font-semibold">Floating Elements Background</h3>
              </div>
            </div>
          </section>
          
          {/* Core Animation Variants Demo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 border-b border-blue-900/50 pb-2">
              Core Animation Variants
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">fadeInUp</h3>
                <motion.div 
                  className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <p>This element uses the fadeInUp animation variant.</p>
                </motion.div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">staggerContainer</h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6"
                      variants={fadeInUp}
                    >
                      <p>Staggered Item {item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">glowEffect</h3>
                <motion.div 
                  className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-6 inline-block cursor-pointer"
                  initial="initial"
                  whileHover="hover"
                  variants={glowEffect}
                >
                  <p>Hover over me to see the glow effect!</p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </motion.main>
  );
}