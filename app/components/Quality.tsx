import { Card } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

const PRACTICES = [
  { title: "Planes de acción", text: "Implementación, responsables y seguimiento." },
  { title: "Procesos", text: "Mapas y procedimientos para ordenar la gestión." },
  { title: "Capacitación", text: "Personal operativo y administrativo." },
  { title: "Factibilidad", text: "Cambios de parámetros operativos." },
  { title: "KPIs a medida", text: "Indicadores adaptados a la empresa." },
  { title: "Mejora continua", text: "Seguimiento, revisión y ajuste de acciones." },
];

export function Quality() {
  return (
    <Section id="calidad" background="surface">
      <SectionHeader
        variant="wide"
        title="Calidad y mejora continua"
        description="Detectar oportunidades es sólo el principio. La mejora debe implementarse y sostenerse."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {PRACTICES.map((practice) => (
          <Card
            key={practice.title}
            tone="surface2"
            className="flex items-start gap-4 p-6"
          >
            <div
              className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-io-accent-soft text-[13px] font-bold text-io-accent"
              aria-hidden="true"
            >
              ✓
            </div>
            <div>
              <div className="mb-1 text-[17px] font-semibold text-io-ink">
                {practice.title}
              </div>
              <div className="text-sm leading-[1.55] text-io-ink2">{practice.text}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
