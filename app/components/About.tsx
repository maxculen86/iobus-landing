import { Users, Target, Lightbulb } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-4">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nuestro Equipo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Un grupo diverso de expertos en tecnología, transporte y experiencia de usuario, unidos por una visión común.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hacer que el transporte público sea más eficiente, accesible y amigable para todos.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <Lightbulb className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ser líderes en la transformación digital del transporte público en Latinoamérica.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            ¿Por qué lo hacemos?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Creemos que el transporte público es fundamental para el desarrollo de nuestras ciudades. 
            A través de la tecnología, buscamos mejorar la experiencia de millones de usuarios y 
            ayudar a las empresas de transporte a operar de manera más eficiente y sostenible.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Nuestro compromiso es crear soluciones que no solo resuelvan problemas técnicos, 
            sino que también tengan un impacto positivo en la sociedad y el medio ambiente.
          </p>
        </div>
      </div>
    </section>
  );
} 