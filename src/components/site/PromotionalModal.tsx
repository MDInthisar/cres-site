import banner from "@/assets/banner.png";
import { useState } from "react";
import { X } from "lucide-react";

export function PromotionalModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 p-4 sm:p-6"
      role="presentation"
    >
      <div className="flex min-h-full items-center justify-center">
        <section
          aria-label="Crescent banner"
          aria-modal="true"
          className="promotional-modal-enter relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          role="dialog"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close banner"
            className="absolute right-1 top-1 z-10 inline-flex size-12 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:right-2 sm:top-2"
          >
            <X aria-hidden="true" className="size-7" strokeWidth={2.5} />
          </button>

          <img
            src={banner}
            alt="Crescent Institute banner"
            className="block max-h-[calc(100vh-2rem)] w-full object-contain"
          />
        </section>
      </div>
    </div>
  );
}
