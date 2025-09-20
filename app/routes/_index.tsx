import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createSupabaseServerClient } from "~/lib/supabase.server";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Solutions } from "../components/Solutions";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "IOBus - Transporte Inteligente" },
    { name: "description", content: "IOBus - Tu solución de transporte inteligente. Optimizamos rutas, reducimos tiempos de espera y mejoramos la experiencia del usuario." },
    // Open Graph
    { property: "og:title", content: "IOBus - Transporte Inteligente" },
    { property: "og:description", content: "IOBus - Tu solución de transporte inteligente. Optimizamos rutas, reducimos tiempos de espera y mejoramos la experiencia del usuario." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://aiobus.com" },
    { property: "og:image", content: "https://aiobus.com/og-image.jpg" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "IOBus - Transporte Inteligente" },
    { name: "twitter:description", content: "IOBus - Tu solución de transporte inteligente. Optimizamos rutas, reducimos tiempos de espera y mejoramos la experiencia del usuario." },
    { name: "twitter:image", content: "https://aiobus.com/twitter-image.jpg" },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token_hash = url.searchParams.get('token_hash');
  const type = url.searchParams.get('type');

  if (token_hash && type === 'signup') {
    const supabase = createSupabaseServerClient(request, context.cloudflare.env);
    
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: 'signup'
    });
    
    if (error) {
      console.error('Error confirming signup:', error);
      return redirect('/login?error=confirmation_failed');
    }

    return redirect('/?confirmed=true');
  }

  return null;
}

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Solutions />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
