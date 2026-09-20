interface IsologoProps {
  /** Tailwind height class, e.g. `h-[34px]`. */
  heightClass: string;
  alt?: string;
}

/** The isologo mark; the dark variant is tinted to the light ink color. */
export function Isologo({ heightClass, alt = "" }: IsologoProps) {
  return (
    <>
      <img
        src="/logos/ISOLOGO-18.svg"
        alt={alt}
        className={`${heightClass} w-auto dark:hidden`}
      />
      <img
        src="/logos/ISOLOGO-20.svg"
        alt={alt}
        className={`${heightClass} hidden w-auto [filter:brightness(0)_invert(0.937)] dark:block`}
      />
    </>
  );
}

interface IOBusLogoProps {
  /** `header` is the 34px mark with a 26px wordmark; `footer` is 30px / 24px. */
  size?: "header" | "footer";
}

const SIZES = {
  header: { icon: "h-[34px]", text: "text-[26px]" },
  footer: { icon: "h-[30px]", text: "text-[24px]" },
} as const;

export function IOBusLogo({ size = "header" }: IOBusLogoProps) {
  const { icon, text } = SIZES[size];

  return (
    <span className="inline-flex items-center gap-0.5">
      <Isologo heightClass={icon} alt="iobus" />
      <span
        className={`${text} mt-1 font-qurova lowercase leading-none`}
        aria-hidden="true"
      >
        <span className="bg-gradient-to-t from-io-logo-from to-io-accent bg-clip-text text-transparent">
          i
        </span>
        <span className="bg-gradient-to-tr from-io-logo-from to-io-accent bg-clip-text text-transparent">
          o
        </span>
        <span className="text-io-ink">bus</span>
      </span>
    </span>
  );
}
