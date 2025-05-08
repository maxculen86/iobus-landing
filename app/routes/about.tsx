import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "IOBus - Nosotros" },
    { name: "description", content: "Conoce más sobre IOBus y nuestra misión" },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            IOBus
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-primary">
              Nosotros
            </Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
              Servicios
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <main className="container pt-24">
        <section className="py-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Sobre Nosotros</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Nuestra Misión</h2>
              <p className="mt-4 text-muted-foreground">
                En IOBus, nos dedicamos a transformar el transporte público a través de la tecnología y la innovación. 
                Nuestro objetivo es hacer que el transporte sea más eficiente, accesible y amigable con el medio ambiente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary">Nuestra Visión</h2>
              <p className="mt-4 text-muted-foreground">
                Aspiramos a ser líderes en la revolución del transporte inteligente, 
                creando soluciones que beneficien tanto a los operadores como a los pasajeros.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 