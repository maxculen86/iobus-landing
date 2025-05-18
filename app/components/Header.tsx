import { Link } from "@remix-run/react";
import { ThemeToggle } from "./ThemeToggle";
import { IOBusLogo } from "./IOBusLogo";

export function Header() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.features-bg')?.closest('section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <IOBusLogo />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="#solutions" onClick={scrollToFeatures} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Soluciones
            </Link>
            <Link to="/about" onClick={scrollToAbout} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link to="#contact" onClick={scrollToContact} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contacto
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 