import { Bus, LineChart, Map, Users } from "lucide-react";

const features = [
  {
    name: "Gestión de Flotas",
    description: "Monitoreo en tiempo real, optimización de rutas y mantenimiento predictivo para tu flota.",
    icon: Bus,
  },
  {
    name: "Análisis de Datos",
    description: "Insights valiosos sobre patrones de uso, eficiencia y oportunidades de mejora.",
    icon: LineChart,
  },
  {
    name: "Optimización de Rutas",
    description: "Algoritmos inteligentes para optimizar rutas y reducir tiempos de viaje.",
    icon: Map,
  },
  {
    name: "Experiencia de Usuario",
    description: "Aplicaciones móviles y sistemas de información para mejorar la experiencia de los pasajeros.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center">
      {/* Fondo gradiente */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--background)] opacity-90"
        aria-hidden="true"
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Características principales</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Descubre las potentes funcionalidades que distinguen a Iobus.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center bg-white/5 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/10"
          >
            <feature.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 