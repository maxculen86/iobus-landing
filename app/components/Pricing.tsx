import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo de textura */}
      <div className="absolute inset-0 bg-[url('/backgrounds/textura_.png')] dark:bg-[url('/backgrounds/textura__dark.png')] bg-cover bg-center z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Nuestros Planes
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Soluciones adaptadas a las necesidades de tu empresa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {/* Plan Básico */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Básico</h3>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Gestión de flota básica
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Monitoreo en tiempo real
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Reportes básicos
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Soporte por email
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Información
            </Button>
          </div>

          {/* Plan Profesional */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-2 border-blue-600 dark:border-blue-400 transform scale-105">
            <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full self-center mb-4">
              Más Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Profesional</h3>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Todo lo del plan Básico
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Análisis avanzado
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Optimización de rutas
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Soporte prioritario 24/7
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Información
            </Button>
          </div>

          {/* Plan Empresarial */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Empresarial</h3>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Todo lo del plan Profesional
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                API personalizada
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Integración con sistemas
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Gerente de cuenta dedicado
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Información
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ¿Necesitas un plan personalizado?
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contactar Ventas
          </Button>
        </div>
      </div>
    </section>
  );
} 