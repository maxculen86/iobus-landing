const testimonials = [
  {
    quote: "No sabíamos cuánto margen de mejora había en nuestros recorridos hasta que comenzamos a trabajar con esta consultora. En pocas semanas, reordenaron nuestras rutas con base en datos reales de demanda, y eso se tradujo en un aumento inmediato de pasajeros y una reducción de tiempos muertos. Hoy tenemos recorridos más cortos, con mayor frecuencia, y con unidades que viajan llenas, no vacías. La diferencia se nota cada día.",
    author: "Director de Operaciones",
  },
  {
    quote: "Logramos algo que parecía imposible: reducir el costo operativo sin despedir personal. Gracias a una planificación estratégica de frecuencias y turnos, hoy operamos con menos unidades circulando, optimizando al máximo el uso de cada chofer. La consultora nos ayudó a ver lo que no veíamos: el ahorro estaba en el orden, no en el recorte.",
    author: "Gerente General",
  },
  {
    quote: "Sabíamos que el servicio era bueno, pero no lográbamos reflejarlo en los ingresos. Con los ajustes recomendados por el equipo de consultoría, mejoramos la tarifa promedio sin afectar la demanda. Además, el índice pasajero-kilómetro subió notablemente, lo que nos permitió mostrar resultados sólidos ante las autoridades regulatorias y planificar futuras inversiones.",
    author: "Director Financiero",
  },
  {
    quote: "Durante años mantuvimos las mismas paradas, por costumbre. Pero un análisis detallado nos mostró que muchos puntos ya no tenían sentido. Con el rediseño, acercamos el servicio a donde está la gente hoy, y eso mejoró la percepción del usuario y nos diferenció de la competencia. Cambiar fue una decisión clave.",
    author: "Jefe de Planificación",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo compuesto */}
      <div className="absolute inset-0 testimonials-bg z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Testimonios
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Lo que nuestros clientes dicen sobre Iobus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl w-full">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-4 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto w-full text-center">
                <div className="text-gray-900 dark:text-white font-semibold">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 