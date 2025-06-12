import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ButtonVariants } from "./button-variants";

export interface NavigationItem {
  label: string;
  href: string;
  isButton?: boolean;
  variant?: "default" | "secondary" | "ghost" | "outline" | "glow";
}

export interface NavigationProps {
  logo: React.ReactNode;
  items: NavigationItem[];
  rightItems?: NavigationItem[];
  className?: string;
}

export function Navigation({ logo, items, rightItems = [], className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          {logo}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item, index) => (
            <div key={index}>
              {item.isButton ? (
                <ButtonVariants
                  asChild
                  variant={item.variant || "default"}
                  animate
                >
                  <Link to={item.href}>{item.label}</Link>
                </ButtonVariants>
              ) : (
                <NavLink href={item.href}>{item.label}</NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Right side items (desktop) */}
        {rightItems.length > 0 && (
          <div className="hidden md:flex items-center gap-4">
            {rightItems.map((item, index) => (
              <div key={index}>
                {item.isButton ? (
                  <ButtonVariants
                    asChild
                    variant={item.variant || "default"}
                    animate
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </ButtonVariants>
                ) : (
                  <NavLink href={item.href}>{item.label}</NavLink>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-black/95 backdrop-blur-md md:hidden overflow-auto"
          >
            <div className="container mx-auto px-4 py-20 flex flex-col gap-6">
              {/* Mobile navigation items */}
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.isButton ? (
                    <ButtonVariants
                      asChild
                      variant={item.variant || "default"}
                      className="w-full justify-center"
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </ButtonVariants>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 text-xl font-medium text-white hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile right items */}
              {rightItems.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  {rightItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (items.length + index) }}
                      className="mb-4"
                    >
                      {item.isButton ? (
                        <ButtonVariants
                          asChild
                          variant={item.variant || "default"}
                          className="w-full justify-center"
                        >
                          <Link to={item.href}>{item.label}</Link>
                        </ButtonVariants>
                      ) : (
                        <Link
                          to={item.href}
                          className="block py-2 text-xl font-medium text-white hover:text-primary-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "relative text-sm font-medium transition-colors hover:text-primary-400",
        isActive ? "text-primary-400" : "text-white",
        className
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="navigation-underline"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}