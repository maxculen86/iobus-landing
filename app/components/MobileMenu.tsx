import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "~/config/navigation";

interface MobileMenuProps {
  links: NavLink[];
  contactLink: NavLink;
}

export function MobileMenu({ links, contactLink }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-md border border-io-border bg-io-surface text-io-ink2 transition-colors hover:text-io-ink"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-io-border bg-io-surface shadow-lg">
          <nav aria-label="Menú móvil" className="mx-auto max-w-[1400px] px-6 py-4">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block text-base text-io-ink2 hover:opacity-80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={contactLink.href}
                  onClick={close}
                  className="inline-flex items-center rounded-md bg-io-blue px-4 py-2 text-[13px] font-medium text-white hover:bg-io-blue-h hover:text-white hover:opacity-80"
                >
                  {contactLink.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
