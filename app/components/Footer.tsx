import { footerColumns } from "~/config/navigation";
import { IOBusLogo } from "./IOBusLogo";

export function Footer() {
  return (
    <footer className="border-t border-io-border bg-io-surface px-6">
      <div className="mx-auto flex max-w-[1180px] flex-wrap gap-12 py-12">
        <div className="min-w-0 flex-[1_1_280px]">
          <div className="mb-3.5 flex">
            <IOBusLogo size="footer" />
          </div>
          <p className="max-w-[340px] text-sm leading-[1.6] text-io-ink2">
            Gestión y soluciones para empresas de transporte de pasajeros.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="min-w-0 flex-[1_1_160px]">
            <h3 className="mb-4 text-sm font-medium text-io-ink">{column.title}</h3>
            <div className="flex flex-col gap-3 text-sm">
              {column.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-io-ink2 hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1180px] border-t border-io-border py-6">
        <p className="text-center text-sm text-io-ink2">
          © 2026 iobus. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
