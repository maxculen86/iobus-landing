import { Link } from "@remix-run/react";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-primary">IOBus</h2>
          <p className="text-sm text-muted-foreground">
            Soluciones inteligentes para el transporte público del futuro.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#flotas" className="text-muted-foreground transition-colors hover:text-primary">
                  Gestión de Flotas
                </Link>
              </li>
              <li>
                <Link to="/services#analisis" className="text-muted-foreground transition-colors hover:text-primary">
                  Análisis de Datos
                </Link>
              </li>
              <li>
                <Link to="/services#rutas" className="text-muted-foreground transition-colors hover:text-primary">
                  Optimización de Rutas
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecta</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/iobus"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/iobus"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/iobus"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IOBus. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 