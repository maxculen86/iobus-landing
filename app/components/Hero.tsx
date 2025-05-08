import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center">
      {/* Fondo gradiente */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--background-light)] via-[var(--secondary)] to-[var(--primary)] opacity-90"
        aria-hidden="true"
      />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        Innova más rápido con <br /> iobus
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Potenciamos empresas con soluciones de software de vanguardia. Desde analítica impulsada por IA hasta integraciones cloud, estamos moldeando el futuro de la tecnología.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="#solutions"
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition"
        >
          Explorar soluciones <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          to="#contact"
          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-gray-900 transition"
        >
          Solicitar una demo
        </Link>
      </div>
    </section>
  );
} 