import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Cerrar video"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="w-full max-w-6xl aspect-video">
          <iframe
            title="Dailymotion Video Player"
            src={`https://www.dailymotion.com/embed/video/${videoId}?autoplay=1`}
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
} 