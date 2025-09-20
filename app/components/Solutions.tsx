export function Solutions() {
  return (
    <section id="solutions" className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 features-bg z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Conectando destinos, Impulsando oportunidades
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Usamos inteligencia operativa, consultoría especializada y datos para poner al pasajero en el centro del servicio, reduciendo costos, mejorando tiempos logísticos y aumentando la seguridad vial.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl text-left">
          {/* Columna izquierda: servicios */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Planes de acción con implementación y seguimiento</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Para la mejora continua del servicio.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Mapa de procesos y procedimientos</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Capacitación al personal operativo y administrativo</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Presupuestos para el área de Tráfico</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Estudios de factibilidad</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Para cambios de parámetros operativos.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 h-6 w-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">✓</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Paneles de control con KPIs a medida</div>
              </div>
            </div>
          </div>

          {/* Columna central: casos de éxito */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Casos de éxito</h3>
            {[
              'Aumento de pasajeros',
              'Reducción de kilómetros improductivos',
              'Reestructuración de recorridos',
              'Ahorro de conductores',
              'Ahorro de consumo de combustible',
              'Reducción de horas extras de conducción',
              'Mejora de procesos en el área de Tráfico',
              'Aumento de la tarifa promedio',
              'Mejora de la regularidad de los buses en recorrido',
              '9 certificaciones de la norma IRAM 3810',
            ].map((item) => (
              <div key={item} className="rounded-full bg-gradient-to-b from-blue-600 to-blue-700 text-white px-6 py-3 text-center shadow-md">
                {item}
              </div>
            ))}

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-6 text-center">
              Simplificamos lo complejo: hacemos visibles los datos ocultos o difíciles de interpretar, transformándolos en información clara y accionable.
            </p>
          </div>

          {/* Columna derecha: claims breves */}
          <div className="space-y-6">
            <div className="bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="font-semibold text-gray-900 dark:text-white">Tomá decisiones inteligentes</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">con información precisa para mejorar la experiencia del usuario y maximizar la eficiencia.</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="font-semibold text-gray-900 dark:text-white">Visualizá el flujo real de pasajeros</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">y optimizá rutas, tiempos y estrategias.</div>
            </div>
            <div className="text-center text-gray-800 dark:text-gray-200 font-medium">
              Somos la historia de miles de viajes diarios: encuentros, sueños y oportunidades que se cruzan en cada parada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


