import { Card, Eyebrow } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

const STATEMENTS = [
  {
    eyebrow: "MISIÓN",
    title: "Mejorar la gestión del transporte de pasajeros.",
    text: "Acompañar a las empresas en la mejora operativa y económica mediante análisis, optimización de recursos y acciones concretas.",
  },
  {
    eyebrow: "VISIÓN",
    title: "Ser referentes en gestión del transporte.",
    text: "Ser reconocidos por conocimiento del sector, compromiso con resultados y capacidad de transformar oportunidades en mejoras sostenibles.",
  },
];

const VALUES = [
  { title: "Pasajero", text: "Respeto por quien viaja." },
  { title: "Integridad", text: "Información defendible." },
  { title: "Compromiso", text: "Involucrarnos con el problema." },
  { title: "Personas", text: "Valorar experiencia y desarrollo." },
  { title: "Mejora continua", text: "Observar, actuar y medir." },
  { title: "Resultados", text: "Beneficios concretos y sostenibles." },
];

export function AboutUs() {
  return (
    <Section id="nosotros" background="tex1">
      <SectionHeader
        title="Nosotros"
        description="Conocemos el transporte. Trabajamos para mejorarlo."
      />
      <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-6">
        {STATEMENTS.map((statement) => (
          <Card key={statement.eyebrow} elevation="card" className="p-[30px]">
            <Eyebrow className="mb-3.5">{statement.eyebrow}</Eyebrow>
            <h3 className="mb-3 text-[21px] font-semibold text-io-ink">{statement.title}</h3>
            <p className="text-[15px] leading-[1.65] text-io-ink2">{statement.text}</p>
          </Card>
        ))}
      </div>

      <h3 className="mb-7 text-2xl font-semibold text-io-ink">Nuestros valores</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
        {VALUES.map((value) => (
          <Card key={value.title} className="p-[22px]">
            <div className="mb-1 text-[17px] font-semibold text-io-ink">{value.title}</div>
            <div className="text-sm leading-[1.55] text-io-ink2">{value.text}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
