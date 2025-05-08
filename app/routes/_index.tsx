import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Features } from "~/components/Features";
import { Testimonials } from "~/components/Testimonials";
import { Pricing } from "~/components/Pricing";

export const meta: MetaFunction = () => {
  return [
    { title: "IOBus - Home" },
    { name: "description", content: "IOBus - Tu solución de transporte inteligente" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}
