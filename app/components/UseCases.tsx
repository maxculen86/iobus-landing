import { Card, Eyebrow } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

interface UseCase {
  title: string;
  text: string;
}

const USE_CASES: UseCase[] = [
  { title: "Recuperar pasajeros", text: "Detectar demanda no captada y reforzar donde existe oportunidad." },
  { title: "Reducir kilómetros improductivos", text: "Reasignar oferta sin perder cobertura relevante." },
  { title: "Mejorar IPK", text: "Ubicar mejor los mismos recursos." },
  { title: "Mejorar regularidad", text: "Reducir huecos, adelantos y atrasos." },
  { title: "Ordenar recaudación", text: "Cruzar pasajeros, secciones y comportamiento." },
  { title: "Cambios operativos", text: "Fundamentar modificaciones con datos verificables." },
];

interface CaseColumn {
  label: string;
  tone: "surface" | "blueSoft";
  labelClass: string;
  listClass: string;
  lines: string[];
}

const CASE_COLUMNS: CaseColumn[] = [
  {
    label: "ANTES",
    tone: "surface",
    labelClass: "text-io-ink3",
    listClass: "text-io-ink",
    lines: ["31.700 pasajeros / día", "10.200 km", "IPK 3,11"],
  },
  {
    label: "ACCIÓN IOBUS",
    tone: "blueSoft",
    labelClass: "text-io-blue",
    listClass: "text-io-ink-on-soft",
    lines: ["Revisión hora por hora", "Recupero de servicios", "Redistribución de oferta"],
  },
  {
    label: "DESPUÉS",
    tone: "surface",
    labelClass: "text-io-green",
    listClass: "font-medium text-io-ink",
    lines: ["32.340 pasajeros / día", "10.065 km", "IPK 3,22"],
  },
];

export function UseCases() {
  return (
    <Section id="casos" background="surface">
      <SectionHeader
        title="Casos de aplicación"
        description="Problemas concretos que iobus puede ayudar a resolver."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {USE_CASES.map((useCase) => (
          <Card key={useCase.title} elevation="soft" className="p-[26px]">
            <h3 className="mb-2 text-lg font-semibold text-io-ink">{useCase.title}</h3>
            <p className="text-[15px] leading-[1.6] text-io-ink2">{useCase.text}</p>
          </Card>
        ))}
      </div>

      <Card tone="surface2" className="mt-14 p-9">
        <Eyebrow className="mb-2.5">CASO DE APLICACIÓN · LÍNEA ANÓNIMA · SIMULACIÓN</Eyebrow>
        <h3 className="mb-7 text-[clamp(22px,2.4vw,30px)] font-bold text-io-ink">
          Recuperar pasajeros sin aumentar kilómetros
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
          {CASE_COLUMNS.map((column) => (
            <Card key={column.label} tone={column.tone} className="p-6">
              <div
                className={`mb-4 text-[11px] font-bold tracking-[0.12em] ${column.labelClass}`}
              >
                {column.label}
              </div>
              <div className={`flex flex-col gap-2 text-base ${column.listClass}`}>
                {column.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-[17px] font-medium text-io-ink">
          Más pasajeros con menos kilómetros.
        </div>
      </Card>
    </Section>
  );
}
