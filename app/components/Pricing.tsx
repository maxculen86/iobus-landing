import { Button } from "~/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "$9",
    features: [
      "5 miembros del equipo",
      "10 proyectos",
      "Análisis básico",
      "Soporte por email",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Miembros ilimitados",
      "Proyectos ilimitados",
      "Análisis avanzado",
      "Soporte prioritario",
    ],
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    features: [
      "Características personalizadas",
      "Gerente de cuenta dedicado",
      "Implementación on-premise",
      "Soporte telefónico 24/7",
    ],
  },
];

export function Pricing() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center">
      {/* Fondo gradiente */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--background)] opacity-90"
        aria-hidden="true"
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planes y precios</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Elige el plan que mejor se adapte a las necesidades de tu empresa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/5 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-300 mb-4">{plan.features.join(", ")}</p>
            <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
            <Button className="rounded-md bg-white px-6 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition">
              {index === 2 ? "Contactar ventas" : "Comenzar"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
} 