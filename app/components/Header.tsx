import { contactLink, headerLinks, homeLink } from "~/config/navigation";
import { IOBusLogo } from "./IOBusLogo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-io-border bg-io-header backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          <a href={homeLink.href} className="flex flex-none items-center hover:opacity-80">
            <IOBusLogo />
          </a>
          <div className="flex items-center justify-end gap-5">
            <nav aria-label="Principal" className="hidden items-center gap-5 xl:flex">
              {headerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-io-ink2 hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
            <a
              href={contactLink.href}
              className="hidden items-center rounded-md bg-io-blue px-4 py-2 text-[13px] font-medium text-white hover:bg-io-blue-h hover:text-white hover:opacity-80 xl:inline-flex"
            >
              {contactLink.label}
            </a>
            <MobileMenu links={headerLinks} contactLink={contactLink} />
          </div>
        </div>
      </div>
    </header>
  );
}
