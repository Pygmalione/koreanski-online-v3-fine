import { ButtonVariants } from "./button-variants";
import { GlassCard } from "./glass-card";
import { DualLanguageInput } from "./dual-language-input";
import { KoreanText } from "./korean-text";
import { Navigation } from "./navigation";
import { motion } from "framer-motion";

export function DesignSystemShowcase() {
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  const navigationRightItems = [
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/signup", isButton: true, variant: "glow" as const },
  ];

  return (
    <div className="space-y-16 py-20">
      {/* Typography Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading">Typography System</h2>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold font-heading">Heading 1 (5xl)</h1>
          <h2 className="text-4xl font-bold font-heading">Heading 2 (4xl)</h2>
          <h3 className="text-3xl font-semibold font-heading">Heading 3 (3xl)</h3>
          <h4 className="text-2xl font-semibold font-heading">Heading 4 (2xl)</h4>
          <h5 className="text-xl font-medium font-heading">Heading 5 (xl)</h5>
          <h6 className="text-lg font-medium font-heading">Heading 6 (lg)</h6>
        </div>

        <div className="space-y-4">
          <p className="text-base">Body text (base) - Inter 400</p>
          <p className="text-base font-medium">Body text medium (base) - Inter 500</p>
          <p className="text-base font-semibold">Body text semibold (base) - Inter 600</p>
          <p className="text-sm">Small text (sm) - Inter 400</p>
          <p className="text-xs">Extra small text (xs) - Inter 400</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-heading">Korean Text Support</h3>
          <KoreanText size="2xl" weight="bold">안녕하세요! 반갑습니다.</KoreanText>
          <KoreanText size="xl">한국어를 배우고 싶어요.</KoreanText>
          <KoreanText>이것은 기본 텍스트입니다.</KoreanText>
          <KoreanText size="sm">작은 텍스트입니다.</KoreanText>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading">Color Palette</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-primary-50 rounded-lg"></div>
            <p className="text-sm font-medium">primary-50</p>
            <p className="text-xs text-gray-500">#eff6ff</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-primary-100 rounded-lg"></div>
            <p className="text-sm font-medium">primary-100</p>
            <p className="text-xs text-gray-500">#dbeafe</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-primary-500 rounded-lg"></div>
            <p className="text-sm font-medium">primary-500</p>
            <p className="text-xs text-gray-500">#3b82f6</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-primary-900 rounded-lg"></div>
            <p className="text-sm font-medium">primary-900</p>
            <p className="text-xs text-gray-500">#1e3a8a</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-glow rounded-lg"></div>
            <p className="text-sm font-medium">glow</p>
            <p className="text-xs text-gray-500">#60a5fa</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-accent-50 rounded-lg"></div>
            <p className="text-sm font-medium">accent-50</p>
            <p className="text-xs text-gray-500">#ecfdf5</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent-500 rounded-lg"></div>
            <p className="text-sm font-medium">accent-500</p>
            <p className="text-xs text-gray-500">#10b981</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent-900 rounded-lg"></div>
            <p className="text-sm font-medium">accent-900</p>
            <p className="text-xs text-gray-500">#064e3b</p>
          </div>
        </div>
      </section>

      {/* Button Variants Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading">Button Variants</h2>
        
        <div className="flex flex-wrap gap-4">
          <ButtonVariants>Default Button</ButtonVariants>
          <ButtonVariants variant="secondary">Secondary Button</ButtonVariants>
          <ButtonVariants variant="ghost">Ghost Button</ButtonVariants>
          <ButtonVariants variant="outline">Outline Button</ButtonVariants>
          <ButtonVariants variant="glow">Glow Button</ButtonVariants>
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonVariants size="sm">Small Button</ButtonVariants>
          <ButtonVariants>Default Size</ButtonVariants>
          <ButtonVariants size="lg">Large Button</ButtonVariants>
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonVariants animate>Animated Button</ButtonVariants>
          <ButtonVariants variant="glow" animate>Animated Glow</ButtonVariants>
        </div>
      </section>

      {/* Card Variants Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading">Card Variants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-semibold mb-2">Default Card</h3>
            <p className="text-gray-300">Glass-morphism effect with subtle shadow.</p>
          </GlassCard>
          
          <GlassCard variant="elevated" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
            <p className="text-gray-300">Stronger glass effect with deeper shadow.</p>
          </GlassCard>
          
          <GlassCard variant="bordered" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Bordered Card</h3>
            <p className="text-gray-300">Subtle glass with white border.</p>
          </GlassCard>
          
          <GlassCard variant="glow" className="p-6">
            <h3 className="text-xl font-semibold mb-2">Glow Card</h3>
            <p className="text-gray-300">Glass card with glow effect on hover.</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard animate className="p-6">
            <h3 className="text-xl font-semibold mb-2">Animated Card</h3>
            <p className="text-gray-300">Card with hover animation.</p>
          </GlassCard>
          
          <GlassCard variant="glow" animate className="p-6">
            <h3 className="text-xl font-semibold mb-2">Animated Glow Card</h3>
            <p className="text-gray-300">Glow card with hover animation.</p>
          </GlassCard>
        </div>
      </section>

      {/* Input Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-heading">Inputs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DualLanguageInput 
            label="Dual Language Input" 
            polishPlaceholder="Wpisz tekst po polsku..." 
            koreanPlaceholder="한국어로 텍스트를 입력하세요..." 
          />
          
          <DualLanguageInput 
            label="With Error State" 
            error="This field is required"
          />
        </div>
      </section>

      {/* Navigation Section */}
      <section className="space-y-8 relative border border-white/10 rounded-xl p-8 mt-20">
        <h2 className="text-3xl font-bold font-heading">Navigation</h2>
        
        <div className="relative h-40 border border-white/10 rounded-lg overflow-hidden">
          <Navigation 
            logo={
              <motion.div
                whileHover={{ rotate: 10 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent"
              >
                Koreański.online
              </motion.div>
            }
            items={navigationItems}
            rightItems={navigationRightItems}
            className="relative"
          />
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Navigation preview (non-functional in this demo)
          </div>
        </div>
      </section>
    </div>
  );
}