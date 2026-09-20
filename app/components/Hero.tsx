import { Card, SimulationBadge } from "./landing/Card";
import { Section } from "./landing/Section";

interface Kpi {
  label: string;
  value: string;
  tag: string;
  positive?: boolean;
}

const KPIS: Kpi[] = [
  { label: "Pasajeros", value: "32.344", tag: "Demanda" },
  { label: "Kilómetros", value: "10.065", tag: "Eficiencia" },
  { label: "IPK", value: "3,22", tag: "Productividad" },
  { label: "Recaudación", value: "↑ 4,3%", tag: "Resultado", positive: true },
];

export function Hero() {
  return (
    <Section id="inicio" background="tex1" compactTop>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-center gap-14">
        <div className="min-w-0">
          <div className="mb-[18px] text-xs font-bold tracking-[0.14em] text-io-accent">
            GESTIÓN PARA EMPRESAS DE TRANSPORTE
          </div>
          <h1 className="mb-[22px] text-[clamp(36px,4.4vw,60px)] font-bold leading-[1.08] text-io-ink text-pretty">
            Más claridad en los datos.
            <br />
            Mejores decisiones.
            <br />
            Mayor rentabilidad.
          </h1>
          <p className="mb-8 max-w-[560px] text-lg leading-[1.65] text-io-ink2 text-pretty">
            Acompañamos a empresas de transporte de pasajeros a mejorar su
            operación, ordenar recursos y detectar oportunidades concretas de
            rentabilidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 rounded-md bg-io-blue px-[26px] py-3.5 text-base font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,.08)] hover:bg-io-blue-h hover:text-white hover:opacity-80"
            >
              Conocé cómo trabajamos →
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-md border border-io-blue bg-transparent px-[26px] py-3.5 text-base font-medium text-io-blue hover:bg-io-blue-soft hover:text-io-ink-on-soft hover:opacity-80"
            >
              Hablemos
            </a>
          </div>
        </div>

        <Card elevation="card" className="min-w-0 p-7">
          <div className="mb-[22px] flex items-baseline justify-between gap-3">
            <h2 className="text-[17px] font-semibold text-io-ink">
              La operación, en una sola lectura
            </h2>
            <SimulationBadge />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(130px,100%),1fr))] gap-3.5">
            {KPIS.map((kpi) => (
              <Card key={kpi.label} tone="surface2" className="p-4">
                <div className="mb-1.5 text-xs text-io-ink3">{kpi.label}</div>
                <div
                  className={`text-[26px] font-bold leading-[1.1] ${
                    kpi.positive ? "text-io-green" : "text-io-ink"
                  }`}
                >
                  {kpi.value}
                </div>
                <div className="mt-1.5 text-[11px] font-medium text-io-accent">
                  {kpi.tag}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-5 border-t border-io-border pt-4 text-sm text-io-ink2">
            La tecnología acompaña. La gestión conduce.
          </div>
        </Card>
      </div>
    </Section>
  );
}
