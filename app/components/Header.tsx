import { Link } from "@remix-run/react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            IOBus
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Servicios
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Contacto
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 