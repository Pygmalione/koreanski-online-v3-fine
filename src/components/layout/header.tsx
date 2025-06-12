import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fine } from "@/lib/fine";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = fine.auth.useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent"
          >
            Koreański.online
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/dashboard">Mój Panel</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" className="text-white hover:text-blue-400">
                <Link to="/login">Zaloguj się</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/signup">Rozpocznij za darmo</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLinks mobile />
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              {session?.user ? (
                <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/dashboard">Mój Panel</Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="ghost" className="text-white hover:text-blue-400">
                    <Link to="/login">Zaloguj się</Link>
                  </Button>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/signup">Rozpocznij za darmo</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const baseClasses = "transition-colors duration-200";
  const linkClasses = mobile
    ? `${baseClasses} block py-2 text-white hover:text-blue-400`
    : `${baseClasses} text-white hover:text-blue-400`;

  return (
    <>
      <Link to="/goals" className={linkClasses}>
        Cele językowe
      </Link>
      <Link to="/trial-lesson" className={linkClasses}>
        Darmowa lekcja
      </Link>
      <Link to="#pricing" className={linkClasses}>
        Cennik
      </Link>
      <Link to="#about" className={linkClasses}>
        O nas
      </Link>
    </>
  );
}