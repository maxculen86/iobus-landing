import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { useWhatsAppSecurity } from "../hooks/useWhatsAppSecurity";

export function Hero() {
  const { handleClick, isBlocked, remainingTime } = useWhatsAppSecurity();
  
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#solutions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo de textura */}
      <div className="absolute inset-0 hero-bg z-0" aria-hidden="true" />
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Innova más rápido con <br />
          <span className="font-qurova text-7xl md:text-8xl">
            <span className="bg-gradient-to-t from-[#000000] to-[#0260FB] dark:from-white dark:to-[#0260FB] bg-clip-text text-transparent">i</span>
            <span className="bg-gradient-to-tr from-[#000000] to-[#0260FB] dark:from-white dark:to-[#0260FB] bg-clip-text text-transparent">o</span>
            <span className="text-gray-900 dark:text-white">bus</span>
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Potenciamos empresas con soluciones de software de vanguardia. Desde analítica impulsada por IA hasta integraciones cloud, estamos moldeando el futuro de la tecnología.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="#solutions"
            onClick={scrollToPricing}
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
      </div>
    </section>
  );
} 