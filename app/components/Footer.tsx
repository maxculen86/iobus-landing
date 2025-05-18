import { Link } from "@remix-run/react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { IOBusLogo } from "./IOBusLogo";

export function Footer() {
  return (
    <footer className="border-t dark:bg-black">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <IOBusLogo className="h-10" textSize="text-2xl" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Soluciones inteligentes para el transporte público del futuro.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#pricing" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-primary">
                  Gestión de Flotas
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-primary">
                  Análisis de Datos
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-primary">
                  Optimización de Rutas
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#about" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-600 dark:text-gray-300 transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Conecta</h3>
            <div className="flex space-x-4">
              <div className="text-gray-600 dark:text-gray-300">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 leading-normal">
          © {new Date().getFullYear()} 
          <span className="align-middle inline-flex items-baseline relative mx-1">
            <IOBusLogo className="h-5" textSize="text-base" hideIsologo />
          </span>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 