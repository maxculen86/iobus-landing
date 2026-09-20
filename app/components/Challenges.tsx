import { Card } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

interface Challenge {
  title: string;
  text: string;
}

const CHALLENGES: Challenge[] = [
  { title: "Kilómetros improductivos", text: "Oferta donde la demanda no la justifica." },
  { title: "Demanda no captada", text: "Pasajeros que no encuentran la oferta adecuada." },
  { title: "Regularidad", text: "Adelantos, atrasos y huecos que deterioran el servicio." },
  { title: "Recaudación", text: "Datos comerciales sin lectura operativa." },
  { title: "Productividad", text: "Diferencias entre ramales, coches y conductores." },
  { title: "Normativa", text: "Cambios que exigen reacción y seguimiento." },
];

export function Challenges() {
  return (
    <Section id="desafios" background="surface">
      <SectionHeader
        variant="lead"
        title="¿Dónde gana y dónde pierde rentabilidad tu operación?"
        description="No alcanza con mirar el total de pasajeros o kilómetros. La oportunidad suele estar escondida en una hora, un tramo, un ramal, un servicio o un proceso."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {CHALLENGES.map((challenge) => (
          <Card key={challenge.title} elevation="soft" className="p-[26px]">
            <div className="mb-[18px] h-1 w-[34px] rounded-sm bg-io-accent" />
            <h3 className="mb-2 text-[19px] font-semibold text-io-ink">
              {challenge.title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-io-ink2">{challenge.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
