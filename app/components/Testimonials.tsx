const testimonials = [
  {
    quote: "IOBus ha transformado completamente nuestro sistema de transporte. ¡Es increíble ver cómo ha mejorado la eficiencia!",
    author: "María González",
    company: "Transportes Urbanos SA",
  },
  {
    quote: "La mejor solución de gestión de flotas que hemos implementado. ¡Altamente recomendada!",
    author: "Carlos Rodríguez",
    company: "MetroBus Capital",
  },
  {
    quote: "Gracias a IOBus hemos reducido nuestros tiempos de viaje en un 30%. ¡Los resultados son impresionantes!",
    author: "Ana Martínez",
    company: "Transporte Público Regional",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900">
      {/* Fondo gradiente */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--background)] opacity-90"
        aria-hidden="true"
      />
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Testimonios
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Lo que nuestros clientes dicen sobre Iobus.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="text-gray-900 dark:text-white font-semibold">
              {testimonial.author}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {testimonial.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 