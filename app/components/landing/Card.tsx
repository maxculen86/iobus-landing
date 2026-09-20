import type { ReactNode } from "react";

type CardTone = "surface" | "surface2" | "blueSoft";
type CardElevation = "none" | "step" | "soft" | "card";

const TONE_CLASSES: Record<CardTone, string> = {
  surface: "border-io-border bg-io-surface",
  surface2: "border-io-border bg-io-surface2",
  blueSoft: "border-io-blue-soft-border bg-io-blue-soft",
};

const ELEVATION_CLASSES: Record<CardElevation, string> = {
  none: "",
  step: "shadow-io-step",
  soft: "shadow-io-card-soft",
  card: "shadow-io-card",
};

interface CardProps {
  tone?: CardTone;
  elevation?: CardElevation;
  /** Layout classes only (padding, flex, alignment); color and border come from the card. */
  className?: string;
  children: ReactNode;
}

export function Card({
  tone = "surface",
  elevation = "none",
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-lg border ${TONE_CLASSES[tone]} ${ELEVATION_CLASSES[elevation]} ${className}`}
    >
      {children}
    </div>
  );
}

interface EyebrowProps {
  children: ReactNode;
  /** Spacing classes, e.g. `mb-3.5`. */
  className?: string;
}

/** Small uppercase label used above card and section titles. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`text-[11px] font-bold tracking-[0.12em] text-io-accent ${className}`}
    >
      {children}
    </div>
  );
}

interface SimulationBadgeProps {
  /** Extra classes, e.g. a background color or `ml-auto`. */
  className?: string;
}

export function SimulationBadge({ className = "" }: SimulationBadgeProps) {
  return (
    <span
      className={`rounded-full border border-io-border px-[9px] py-[3px] text-[10px] font-bold tracking-[0.1em] text-io-ink3 ${className}`}
    >
      SIMULACIÓN
    </span>
  );
}
