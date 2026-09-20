import { Card, Eyebrow } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

interface Solution {
  eyebrow: string;
  title: string;
  text: string;
  meta: string;
  link: { label: string; href: string };
}

const SOLUTIONS: Solution[] = [
  {
    eyebrow: "PUERTA DE ENTRADA",
    title: "Consultoría de gestión",
    text: "Diagnóstico operativo y económico, oportunidades de mejora, planes de acción y seguimiento.",
    meta: "Diagnóstico · pasajeros · km · IPK · rentabilidad",
    link: { label: "Conocé nuestra consultoría →", href: "#contacto" },
  },
  {
    eyebrow: "GESTIÓN DIARIA",
    title: "Panel de gestión y asistente",
    text: "Indicadores, fuentes, alertas y consultas para entender mejor la operación diaria.",
    meta: "Tablero · consultas · trazabilidad · alertas",
    link: { label: "Conocé la plataforma →", href: "#plataforma" },
  },
  {
    eyebrow: "PLANIFICACIÓN",
    title: "Planificación operativa",
    text: "Herramientas para francos, vacaciones, presupuestos y diagramación de servicios.",
    meta: "Francos · vacaciones · presupuestos · servicios",
    link: { label: "Conocé las herramientas →", href: "#calidad" },
  },
];

export function Solutions() {
  return (
    <Section id="soluciones" background="tex2">
      <SectionHeader
        title="Soluciones"
        description="Empezar por el problema, no por la herramienta."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        {SOLUTIONS.map((solution) => (
          <Card
            key={solution.title}
            elevation="card"
            className="flex flex-col p-[30px]"
          >
            <Eyebrow className="mb-3.5">{solution.eyebrow}</Eyebrow>
            <h3 className="mb-3 text-[23px] font-semibold text-io-ink">
              {solution.title}
            </h3>
            <p className="mb-5 text-[15px] leading-[1.65] text-io-ink2">
              {solution.text}
            </p>
            <div className="mt-auto">
              <div className="mb-5 border-y border-io-border py-3 text-[13px] text-io-ink3">
                {solution.meta}
              </div>
              <a
                href={solution.link.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-io-blue hover:opacity-80"
              >
                {solution.link.label}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
