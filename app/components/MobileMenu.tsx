import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  scrollToAbout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToPricing: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function MobileMenu({ scrollToAbout, scrollToPricing, scrollToContact }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollFn: (e: React.MouseEvent<HTMLAnchorElement>) => void) => {
    scrollFn(e);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="#pricing"
                  onClick={(e) => handleLinkClick(e, scrollToPricing)}
                  className="block text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Soluciones
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  onClick={(e) => handleLinkClick(e, scrollToAbout)}
                  className="block text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="#contact"
                  onClick={(e) => handleLinkClick(e, scrollToContact)}
                  className="block text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Contacto
                </Link>
              </li>
              <li className="pt-2 border-t">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
} 