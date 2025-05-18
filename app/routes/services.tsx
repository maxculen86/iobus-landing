import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "IOBus - Servicios" },
    { name: "description", content: "Descubre nuestros servicios de transporte inteligente" },
  ];
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            IOBus
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
              Nosotros
            </Link>
            <Link to="/services" className="text-sm text-primary">
              Servicios
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      {/* Services Section */}
      <main className="container pt-24">
        <section className="py-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Nuestros Servicios</h1>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold text-primary">Gestión de Flotas</h2>
              <p className="mt-4 text-muted-foreground">
                Monitoreo en tiempo real, optimización de rutas y mantenimiento predictivo para tu flota.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold text-primary">Análisis de Datos</h2>
              <p className="mt-4 text-muted-foreground">
                Insights valiosos sobre patrones de uso, eficiencia y oportunidades de mejora.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold text-primary">Experiencia de Usuario</h2>
              <p className="mt-4 text-muted-foreground">
                Aplicaciones móviles y sistemas de información para mejorar la experiencia de los pasajeros.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 