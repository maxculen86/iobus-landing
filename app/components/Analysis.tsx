import { Card } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

interface AnalysisTopic {
  title: string;
  text: string;
}

const TOPICS: AnalysisTopic[] = [
  { title: "Pasajeros", text: "Cantidad · horarios · paradas · perfiles" },
  { title: "Kilómetros", text: "Productivos · vacíos · improductivos" },
  { title: "IPK", text: "Línea · ramal · día · hora" },
  { title: "Recaudación", text: "Evolución · secciones · aporte" },
  { title: "Regularidad", text: "Cabeceras · adelantos · atrasos" },
  { title: "Conductores", text: "Rendimiento · seccionamiento" },
  { title: "Subsidios", text: "SISTAU · componentes · participación" },
  { title: "Normativa", text: "Tarifas · parámetros · requisitos" },
];

export function Analysis() {
  return (
    <Section id="analisis" background="surface">
      <SectionHeader
        title="Qué analizamos"
        description="La operación completa, sin perder de vista el negocio."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
        {TOPICS.map((topic) => (
          <Card key={topic.title} tone="surface2" className="p-[22px]">
            <h3 className="mb-1.5 text-[17px] font-semibold text-io-ink">
              {topic.title}
            </h3>
            <p className="text-sm leading-[1.55] text-io-ink2">{topic.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
