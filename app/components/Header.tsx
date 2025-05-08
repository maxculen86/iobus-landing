import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          IOBus
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
            Nosotros
          </Link>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
            Servicios
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
} 