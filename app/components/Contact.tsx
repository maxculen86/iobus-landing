import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactConfig } from "~/config/contact";
import { ContactForm } from "./ContactForm";
import { Section } from "./landing/Section";

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
}

const DETAILS: ContactDetail[] = [
  { icon: Mail, label: "Email", value: contactConfig.email.contact },
  { icon: Phone, label: "Teléfono", value: contactConfig.whatsapp.formattedNumber },
  { icon: MapPin, label: "Ubicación", value: contactConfig.company.location },
];

export function Contact() {
  return (
    <Section id="contacto" background="tex2">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-start gap-14">
        <div className="min-w-0">
          <h2 className="mb-5 text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.12] text-io-ink text-pretty">
            Empezar con una línea.
            <br />
            Buscar una mejora concreta.
          </h2>
          <p className="mb-8 max-w-[560px] text-lg leading-[1.65] text-io-ink2 text-pretty">
            No hace falta transformar toda la empresa de una vez. Elegimos una
            línea, miramos los datos y buscamos una oportunidad concreta. Si
            genera valor, escalamos.
          </p>
          <div className="flex flex-col gap-5">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3.5">
                <div className="mt-0.5 flex-none text-io-blue">
                  <Icon size={24} className="block" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-io-ink">{label}</div>
                  <div className="text-[15px] text-io-ink2">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
