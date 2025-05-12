import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { useWhatsAppSecurity } from "../hooks/useWhatsAppSecurity";

export function Hero() {
  const { handleClick, isBlocked, remainingTime } = useWhatsAppSecurity();
  
  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo celeste claro */}
      <div className="absolute inset-0 -z-20 bg-[#eaf6fb]" aria-hidden="true" />
      {/* SVG de líneas abstractas tipo mapa */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 opacity-30"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 100 Q360 200 720 100 T1440 100" stroke="#b3d8ea" strokeWidth="2" fill="none" />
        <path d="M0 300 Q360 400 720 300 T1440 300" stroke="#b3d8ea" strokeWidth="2" fill="none" />
        <path d="M0 500 Q360 600 720 500 T1440 500" stroke="#b3d8ea" strokeWidth="2" fill="none" />
        <path d="M0 700 Q360 800 720 700 T1440 700" stroke="#b3d8ea" strokeWidth="2" fill="none" />
      </svg>
      {/* Detalles geométricos */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#b3d8ea] rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#7ec4e3] rounded-full opacity-30 -z-10" />
      <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-[#b3d8ea] rounded opacity-30 -z-10 rotate-12" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
        Innova más rápido con <br /> iobus
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Potenciamos empresas con soluciones de software de vanguardia. Desde analítica impulsada por IA hasta integraciones cloud, estamos moldeando el futuro de la tecnología.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="#solutions"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          Explorar soluciones <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <button
          onClick={handleClick}
          disabled={isBlocked}
          className={`inline-flex items-center justify-center rounded-md border border-blue-600 dark:border-blue-400 px-6 py-3 text-base font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-white transition ${
            isBlocked ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isBlocked 
            ? `Espera ${Math.ceil(remainingTime / 60)} minutos` 
            : 'Solicitar una demo'}
        </button>
      </div>
    </section>
  );
} 