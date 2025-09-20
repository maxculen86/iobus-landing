import { X } from "lucide-react";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-4 md:-top-12 md:right-0 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Cerrar imagen"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Frame con paleta del sitio */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--secondary)]">
          <div className="absolute inset-0 pointer-events-none bg-[var(--primary)]/10 mix-blend-multiply" />
          <img
            src={src}
            alt={alt}
            className="relative w-full h-auto object-contain select-none"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement
              if (!img.dataset.fallback) {
                img.dataset.fallback = "true"
                img.src = "/images/Recurso 1.png"
              }
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}


