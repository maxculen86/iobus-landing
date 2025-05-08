import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "IOBus - Contacto" },
    { name: "description", content: "Contáctanos para más información sobre nuestros servicios" },
  ];
};

export default function Contact() {
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
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
              Servicios
            </Link>
            <Link to="/contact" className="text-sm text-primary">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      {/* Contact Section */}
      <main className="container pt-24">
        <section className="py-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary">Contacto</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Información de Contacto</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>Email: info@iobus.com</p>
                <p>Teléfono: +1 (555) 123-4567</p>
                <p>Dirección: 123 Calle Principal, Ciudad</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary">Envíanos un Mensaje</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 