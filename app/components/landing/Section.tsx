import type { ReactNode } from "react";
import type { SectionId } from "~/config/navigation";

type SectionBackground = "surface" | "tex1" | "tex2";

const BACKGROUND_CLASSES: Record<SectionBackground, string> = {
  surface: "bg-io-surface",
  tex1: "",
  tex2: "",
};

const TEXTURE_CLASSES: Partial<Record<SectionBackground, string>> = {
  tex1: "bg-io-tex1",
  tex2: "bg-io-tex2",
};

interface SectionProps {
  id: SectionId;
  /** `surface` is a flat card-colored band; `tex1`/`tex2` paint a texture behind the content. */
  background?: SectionBackground;
  /** Shrinks the top padding from 96px to 88px (used by the hero). */
  compactTop?: boolean;
  "aria-label"?: string;
  children: ReactNode;
}

export function Section({
  id,
  background = "surface",
  compactTop = false,
  children,
  ...aria
}: SectionProps) {
  const texture = TEXTURE_CLASSES[background];

  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-16 overflow-hidden px-6 pb-24 ${
        compactTop ? "pt-[88px]" : "pt-24"
      } ${BACKGROUND_CLASSES[background]}`}
      {...aria}
    >
      {texture && (
        <div
          className={`absolute inset-0 z-0 bg-cover bg-center ${texture}`}
          aria-hidden="true"
        />
      )}
      <div className="relative z-[1] mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

type HeaderVariant = "default" | "wide" | "lead";

const TITLE_CLASSES: Record<HeaderVariant, string> = {
  default: "mb-4",
  wide: "mb-4",
  lead: "mb-5 max-w-[900px] leading-[1.12] text-pretty",
};

const DESCRIPTION_CLASSES: Record<HeaderVariant, string> = {
  default: "max-w-[720px]",
  wide: "max-w-[780px]",
  lead: "max-w-[780px] text-pretty",
};

interface SectionHeaderProps {
  title: string;
  description: string;
  /** `wide` allows a 780px description; `lead` is the hero-like heading used by Desafíos. */
  variant?: HeaderVariant;
}

export function SectionHeader({
  title,
  description,
  variant = "default",
}: SectionHeaderProps) {
  return (
    <>
      <h2
        className={`text-[clamp(30px,3.4vw,48px)] font-bold text-io-ink ${TITLE_CLASSES[variant]}`}
      >
        {title}
      </h2>
      <p
        className={`mb-12 text-lg leading-[1.65] text-io-ink2 ${DESCRIPTION_CLASSES[variant]}`}
      >
        {description}
      </p>
    </>
  );
}
