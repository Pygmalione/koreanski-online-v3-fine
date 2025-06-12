import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-white border-t border-blue-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent"
              >
                Koreański.online
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm">
              Ucz się z Jadzią Kim! Najlepsza platforma do nauki języka koreańskiego dla Polaków.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Youtube} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Nauka</h3>
            <ul className="space-y-2">
              <FooterLink href="/goals">Cele językowe</FooterLink>
              <FooterLink href="/trial-lesson">Darmowa lekcja</FooterLink>
              <FooterLink href="/courses">Kursy</FooterLink>
              <FooterLink href="/resources">Materiały</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Firma</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">O nas</FooterLink>
              <FooterLink href="/team">Zespół</FooterLink>
              <FooterLink href="/careers">Kariera</FooterLink>
              <FooterLink href="/contact">Kontakt</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Pomoc</h3>
            <ul className="space-y-2">
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/support">Wsparcie</FooterLink>
              <FooterLink href="/privacy">Polityka prywatności</FooterLink>
              <FooterLink href="/terms">Warunki korzystania</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Koreański.online. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={href}
        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}