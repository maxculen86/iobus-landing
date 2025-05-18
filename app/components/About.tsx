import { Target, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative w-full py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo de textura */}
      <div className="absolute inset-0 bg-[url('/backgrounds/textura_.png')] dark:bg-[url('/backgrounds/textura__dark.png')] bg-cover bg-center z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Nuestra Historia
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Somos un equipo apasionado por transformar el transporte público a través de la tecnología.
        </p>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Brindar soluciones estratégicas a las empresas de transporte de pasajeros en función del incremento y la fidelización de los pasajeros.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <Lightbulb className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ser la empresa líder de soluciones de gestión para transporte de pasajeros.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-16 max-w-5xl w-full px-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <CheckCircle2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Integridad y Transparencia
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En IOBUS actuamos con integridad y transparencia, todas nuestras operaciones se hacen bajo el respeto de nuestros colaboradores y clientes.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <CheckCircle2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Excelencia
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestra pasión es lograr la excelencia en nuestros productos y servicios.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <CheckCircle2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovación
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proyectamos el futuro para adaptarnos a los cambios del mercado y brindar a los clientes soluciones que se sostengan en el tiempo.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <CheckCircle2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Trabajo en Equipo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Promovemos el trabajo en equipo y brindamos a las personas las oportunidades para desarrollar su máximo potencial.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
} 