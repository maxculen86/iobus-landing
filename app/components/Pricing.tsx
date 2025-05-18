import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Ideal para pequeñas empresas que están comenzando",
    features: [
      "5 miembros del equipo",
      "10 proyectos",
      "Análisis básico",
      "Soporte por email",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Perfecto para empresas en crecimiento",
    features: [
      "Miembros ilimitados",
      "Proyectos ilimitados",
      "Análisis avanzado",
      "Soporte prioritario",
    ],
    popular: true,
  },
  {
    name: "Empresarial",
    description: "Solución completa para grandes operaciones",
    features: [
      "Características personalizadas",
      "Gerente de cuenta dedicado",
      "Implementación on-premise",
      "Soporte telefónico 24/7",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo de textura */}
      <div className="absolute inset-0 features-bg z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Planes y precios
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a las necesidades de tu empresa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                  Más popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>
              <ul className="mb-8 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-left text-gray-600 dark:text-gray-300"
                  >
                    <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
              >
                {plan.popular ? "Comenzar prueba gratuita" : "Contactar ventas"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 