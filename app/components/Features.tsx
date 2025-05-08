import { Bus, LineChart, Map, Users } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

const features = [
  {
    name: "Gestión de Flotas",
    description: "Monitoreo en tiempo real, optimización de rutas y mantenimiento predictivo para tu flota.",
    icon: Bus,
    videoId: "k3asfeJf402FRtD0iQ2"
  },
  {
    name: "Análisis de Datos",
    description: "Insights valiosos sobre patrones de uso, eficiencia y oportunidades de mejora.",
    icon: LineChart,
    videoId: "k3asfeJf402FRtD0iQ2"
  },
  {
    name: "Optimización de Rutas",
    description: "Algoritmos inteligentes para optimizar rutas y reducir tiempos de viaje.",
    icon: Map,
    videoId: "k3asfeJf402FRtD0iQ2"
  },
  {
    name: "Experiencia de Usuario",
    description: "Aplicaciones móviles y sistemas de información para mejorar la experiencia de los pasajeros.",
    icon: Users,
    videoId: "k3asfeJf402FRtD0iQ2"
  },
];

export function Features() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
          <button
            key={feature.name}
            onClick={() => setSelectedVideo(feature.videoId)}
            className="flex flex-col items-center bg-white/5 rounded-lg p-6 shadow-lg backdrop-blur-md border border-white/10 cursor-pointer hover:bg-white/10 transition-colors text-left"
          >
            <feature.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </button>
        ))}
      </div>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo || ""}
      />
    </section>
  );
} 