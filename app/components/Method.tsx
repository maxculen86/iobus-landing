import { Card, Eyebrow } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

const STEPS = [
  { title: "Observar", text: "Datos y operación" },
  { title: "Diagnosticar", text: "Causa y oportunidad" },
  { title: "Decidir", text: "Qué conviene hacer" },
  { title: "Implementar", text: "Quién, cómo y cuándo" },
  { title: "Medir", text: "Antes y después" },
];

export function Method() {
  return (
    <Section id="metodo" background="tex2">
      <SectionHeader
        title="Cómo trabajamos"
        description="Datos reales. Criterio. Acción. Medición."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
        {STEPS.map((step, index) => (
          <Card key={step.title} elevation="step" className="p-[26px]">
            <div className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-io-blue text-[15px] font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mb-1.5 text-lg font-semibold text-io-ink">{step.title}</h3>
            <p className="text-sm text-io-ink2">{step.text}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 flex flex-wrap items-center justify-between gap-5 p-7">
        <div>
          <Eyebrow className="mb-2">TRAZABILIDAD</Eyebrow>
          <div className="text-base text-io-ink">
            Fuente · período · criterio de cálculo · estado de validación.
          </div>
        </div>
        <div className="text-base font-medium text-io-ink2">
          La mejora debe poder explicarse y defenderse.
        </div>
      </Card>
    </Section>
  );
}
