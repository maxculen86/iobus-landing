import { Isologo } from "./IOBusLogo";
import { Card, Eyebrow, SimulationBadge } from "./landing/Card";
import { Section, SectionHeader } from "./landing/Section";

const EXAMPLE_QUERIES = [
  "¿Por qué bajó el IPK del ramal B?",
  "¿Dónde hay kilómetros improductivos?",
  "¿Qué cambió desde ayer?",
  "¿Qué servicios conviene revisar?",
  "¿Hubo cambios normativos?",
];

const ANSWER_PARTS = [
  { title: "Hallazgo", text: "Qué está pasando." },
  { title: "Fuente", text: "De dónde sale." },
  { title: "Impacto", text: "Por qué importa." },
  { title: "Próximo paso", text: "Qué revisar o hacer." },
];

const CHAT_QUESTION = "¿Por qué bajó el IPK del ramal B?";

const CHAT_ANSWER = [
  {
    label: "HALLAZGO",
    text: "El IPK del ramal B cayó de 3,28 a 3,05 en las últimas cuatro semanas, concentrado entre las 9 y las 12 h.",
  },
  {
    label: "FUENTE",
    text: "SUBE + hoja de ruta · período 01/08 al 28/08 · criterio: pasajeros sobre km recorridos · validado.",
  },
  {
    label: "IMPACTO",
    text: "Unos 340 km diarios con ocupación baja: oferta sostenida donde la demanda ya no la justifica.",
  },
  {
    label: "PRÓXIMO PASO",
    text: "Revisar la franja 9–12 h y evaluar reasignar esos servicios a la punta de la tarde.",
  },
];

const CHAT_SUGGESTIONS = [
  "¿Dónde hay kilómetros improductivos?",
  "¿Qué cambió desde ayer?",
  "¿Hubo cambios normativos?",
];

export function Platform() {
  return (
    <Section id="plataforma" background="tex1">
      <SectionHeader
        title="Plataforma"
        description="Consultar la operación sin perder trazabilidad."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-6">
        <Card elevation="card" className="p-[30px]">
          <Eyebrow className="mb-5">EJEMPLOS DE CONSULTAS</Eyebrow>
          <div className="flex flex-col gap-3">
            {EXAMPLE_QUERIES.map((query) => (
              <div
                key={query}
                className="rounded-full border border-io-border bg-io-surface2 px-5 py-3 text-[15px] text-io-ink"
              >
                {query}
              </div>
            ))}
          </div>
        </Card>

        <Card elevation="card" className="p-[30px]">
          <Eyebrow className="mb-5">LA RESPUESTA DEBE INCLUIR</Eyebrow>
          <div className="flex flex-col gap-[18px]">
            {ANSWER_PARTS.map((part, index) => (
              <div key={part.title} className="flex items-start gap-4">
                <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-io-blue-soft text-sm font-bold text-io-blue">
                  {index + 1}
                </div>
                <div>
                  <div className="text-base font-semibold text-io-ink">{part.title}</div>
                  <div className="text-sm text-io-ink2">{part.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-io-border pt-[18px] text-sm text-io-ink2">
            Una herramienta para consultar y gestionar mejor la operación.
          </div>
        </Card>
      </div>

      <Card elevation="card" className="mt-8 overflow-hidden">
        <div className="flex items-center gap-2.5 border-b border-io-border bg-io-surface2 px-6 py-4">
          <Isologo heightClass="h-[22px]" />
          <span className="text-[15px] font-semibold text-io-ink">Asistente iobus</span>
          <SimulationBadge className="ml-auto bg-io-surface" />
        </div>

        <div className="flex flex-col gap-[18px] p-6">
          <div className="max-w-[min(560px,90%)] self-end rounded-[14px_14px_4px_14px] bg-io-blue px-[18px] py-[13px] text-[15px] leading-normal text-white">
            {CHAT_QUESTION}
          </div>
          <div className="max-w-[min(720px,95%)] self-start rounded-[14px_14px_14px_4px] border border-io-border bg-io-surface2 px-[22px] py-5">
            <div className="flex flex-col gap-3.5">
              {CHAT_ANSWER.map((step, index) => (
                <div key={step.label} className="flex items-start gap-3.5">
                  <div className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-io-blue-soft text-xs font-bold text-io-blue">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="mb-[3px] text-[11px] font-bold tracking-[0.1em] text-io-accent">
                      {step.label}
                    </div>
                    <div className="text-[15px] leading-[1.55] text-io-ink">{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {CHAT_SUGGESTIONS.map((suggestion) => (
              <div
                key={suggestion}
                className="rounded-full border border-io-border bg-io-surface px-4 py-2 text-[13px] text-io-ink2"
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>

        {/* Non-interactive: the assistant is a static simulation. */}
        <div
          className="flex items-center gap-3 border-t border-io-border bg-io-surface2 px-6 py-3.5"
          aria-hidden="true"
        >
          <div className="min-w-0 flex-1 rounded-full border border-io-border bg-io-surface px-[18px] py-[11px] text-sm text-io-ink3">
            Preguntá sobre la operación…
          </div>
          <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-io-blue text-base text-white">
            →
          </div>
        </div>
      </Card>
    </Section>
  );
}
