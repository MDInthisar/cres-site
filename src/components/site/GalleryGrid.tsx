import convocationImg from "@/assets/convocation.jpg";
import eventsImg from "@/assets/events.jpg";
import jobFairImg from "@/assets/job-fair.jpg";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, ChevronRight, Images, Maximize2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "./Section";

type Photo = {
  src: string;
  alt: string;
  category: string;
};

export const galleryCategories = [
  {
    id: "convocation",
    label: "Convocation",
  },
  {
    id: "job-fair",
    label: "Job Fair",
  },
  {
    id: "events",
    label: "Events",
  },
];

const photos: Photo[] = [
  {
    src: convocationImg,
    alt: "Graduates celebrating at convocation",
    category: "convocation",
  },
  {
    src: jobFairImg,
    alt: "Students meeting recruiters at the job fair",
    category: "job-fair",
  },
  {
    src: eventsImg,
    alt: "Academic seminar in the auditorium",
    category: "events",
  },
];

export function GalleryGrid({ featured = false }: { featured?: boolean }) {
  const [active, setActive] = useState<string>("all");
  const [preview, setPreview] = useState<Photo | null>(null);

  const filtered = active === "all" ? photos : photos.filter((photo) => photo.category === active);

  if (featured) {
    return (
      <>
        <Section id="gallery" className="h-full [&>div]:h-full !px-0 !py-0">
          <div className="mx-auto h-full w-full max-w-7xl">
            <GallerySpotlight onPreview={setPreview} />
          </div>
        </Section>

        <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
          <DialogContent className="max-w-5xl overflow-hidden rounded-[1.5rem] border border-[#d4af37]/30 bg-[#172554] p-2 shadow-2xl">
            <DialogTitle className="sr-only">{preview?.alt ?? "Gallery image"}</DialogTitle>

            {preview && (
              <div className="relative overflow-hidden rounded-[1.15rem]">
                <img
                  src={preview.src}
                  alt={preview.alt}
                  width={1600}
                  height={1000}
                  className="max-h-[78vh] w-full object-contain"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172554]/95 to-transparent p-5 pt-14">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    {galleryCategories.find((item) => item.id === preview.category)?.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{preview.alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  const activeLabel =
    active === "all"
      ? "All Moments"
      : (galleryCategories.find((item) => item.id === active)?.label ?? "Gallery");

  return (
    <Section id="gallery" className="!py-8 sm:!py-10">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            PREMIUM INTRO
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div className="flex h-full flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-7 bg-[#d4af37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
                Crescent Moments
              </span>

              <Sparkles className="size-3.5 text-[#d4af37]" />
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.035em] text-[#172554] sm:text-4xl">
              Moments that define our
              <span className="text-[#8f1d1d]"> community.</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Explore moments from Crescent CDOE job fairs, convocation ceremonies and events.
            </p>
          </div>

          {/* Photo count */}
          <div className="hidden rounded-2xl border border-[#d4af37]/25 bg-[#172554] px-5 py-3 text-white shadow-[0_12px_30px_rgba(23,37,84,0.15)] sm:flex sm:items-center sm:gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#8f1d1d]">
              <Images className="size-4" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                Gallery
              </p>

              <p className="text-sm font-bold">{photos.length} Moments</p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CATEGORY NAVIGATION
        ===================================================== */}
        <div className="mb-7 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex min-w-max items-center gap-2 rounded-2xl border border-[#172554]/10 bg-white/60 p-1.5 shadow-[0_8px_25px_rgba(23,37,84,0.06)] backdrop-blur-xl">
            {[{ id: "all", label: "All Moments" }, ...galleryCategories].map((category) => {
              const selected = active === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300",
                    selected
                      ? "bg-[#172554] text-white shadow-md"
                      : "text-slate-500 hover:bg-[#8f1d1d]/8 hover:text-[#8f1d1d]",
                  )}
                >
                  {selected && <span className="size-1.5 rounded-full bg-[#d4af37]" />}

                  {category.label}

                  {!selected && (
                    <ChevronRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACTIVE CATEGORY BAR
        ===================================================== */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="size-4 text-[#8f1d1d]" />

            <span className="text-sm font-bold text-[#172554]">{activeLabel}</span>

            <span className="rounded-full bg-[#d4af37]/15 px-2 py-0.5 text-[10px] font-bold text-[#8f1d1d]">
              {filtered.length}
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:flex">
            <span className="size-1.5 rounded-full bg-[#d4af37]" />
            Click any image to explore
          </div>
        </div>

        {/* =====================================================
            PREMIUM MASONRY GALLERY
        ===================================================== */}
        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((photo, i) => (
            <motion.button
              key={`${photo.src}-${i}`}
              type="button"
              layout
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.045, 0.25),
              }}
              onClick={() => setPreview(photo)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] border border-[#172554]/10 bg-[#172554] text-left shadow-[0_8px_25px_rgba(23,37,84,0.08)] outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,37,84,0.16)] focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              {/* Image */}
              <span className="relative block overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Dark cinematic overlay */}
                <span className="absolute inset-0 bg-gradient-to-t from-[#172554]/95 via-[#172554]/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-85" />

                {/* Gold corner */}
                <span className="absolute right-3 top-3 flex size-9 translate-y-1 items-center justify-center rounded-xl border border-white/15 bg-[#172554]/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </span>

                {/* Bottom information */}
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#172554]/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37] backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-[#d4af37]" />
                    {galleryCategories.find((item) => item.id === photo.category)?.label}
                  </span>

                  <span className="block max-w-[90%] text-sm font-semibold leading-5 text-white">
                    {photo.alt}
                  </span>

                  <span className="mt-2 flex items-center gap-1 text-[10px] font-medium text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View image
                    <ArrowUpRight className="size-3" />
                  </span>
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#d4af37]/40 bg-[#f7f4ee] px-6 py-12 text-center">
            <Images className="mx-auto size-8 text-[#8f1d1d]" />

            <p className="mt-3 text-sm font-semibold text-[#172554]">No images available</p>

            <p className="mt-1 text-xs text-slate-500">More moments will be added soon.</p>
          </div>
        )}

        {/* =====================================================
            BOTTOM PREMIUM STRIP
        ===================================================== */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />

          <div className="flex items-center gap-2 rounded-full border border-[#172554]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-[#8f1d1d]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#172554]">
              Learn • Connect • Grow
            </span>

            <span className="size-1.5 rounded-full bg-[#d4af37]" />
          </div>

          <span className="h-px w-10 bg-[#d4af37]" />
        </div>
      </div>

      {/* =====================================================
          IMAGE PREVIEW
      ===================================================== */}
      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-5xl overflow-hidden rounded-[1.5rem] border border-[#d4af37]/30 bg-[#172554] p-2 shadow-2xl">
          <DialogTitle className="sr-only">{preview?.alt ?? "Gallery image"}</DialogTitle>

          {preview && (
            <div className="relative overflow-hidden rounded-[1.15rem]">
              <img
                src={preview.src}
                alt={preview.alt}
                width={1600}
                height={1000}
                className="max-h-[78vh] w-full object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172554]/95 to-transparent p-5 pt-14">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                      {galleryCategories.find((item) => item.id === preview.category)?.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">{preview.alt}</p>
                  </div>

                  <div className="hidden size-9 items-center justify-center rounded-xl bg-[#8f1d1d] sm:flex">
                    <Camera className="size-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function GallerySpotlight({ onPreview }: { onPreview: (photo: Photo) => void }) {
  const [current, setCurrent] = useState(0);
  const photo = photos[current];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setCurrent((index) => (index - 1 + photos.length) % photos.length);
  };
  const showNext = () => {
    setCurrent((index) => (index + 1) % photos.length);
  };

  return (
    <div>
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-px w-7 bg-[#d4af37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
            Campus Gallery
          </span>
          <Sparkles className="size-3.5 text-[#d4af37]" />
        </div>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#172554] sm:text-3xl">
          Life at <span className="text-[#8f1d1d]">Crescent.</span>
        </h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">
          A glimpse of the moments we share together.
        </p>
      </div>

      <div className="group relative min-h-[280px] flex-1 overflow-hidden rounded-[1.35rem] border border-[#172554]/10 bg-[#172554] shadow-[0_12px_35px_rgba(23,37,84,0.14)]">
        <button
          type="button"
          onClick={() => onPreview(photo)}
          aria-label={`View image: ${photo.alt}`}
          className="relative block size-full min-h-[280px] w-full overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d4af37]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={900}
              loading="eager"
              initial={{ opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute inset-0 size-full object-cover"
            />
          </AnimatePresence>
          <span className="absolute inset-0 bg-gradient-to-t from-[#101a3c]/90 via-[#172554]/5 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-4 pr-24 text-white sm:p-5 sm:pr-28">
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#172554]/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37] backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#d4af37]" />
              {galleryCategories.find((item) => item.id === photo.category)?.label}
            </span>
            <span className="block text-sm font-semibold leading-5 sm:text-base">{photo.alt}</span>
          </span>
          <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-xl border border-white/15 bg-[#172554]/70 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            <Maximize2 className="size-4" />
          </span>
        </button>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous gallery image"
          className="absolute right-14 top-4 z-10 flex size-9 items-center justify-center rounded-xl border border-white/20 bg-[#172554]/70 text-white backdrop-blur-md transition-colors hover:bg-[#8f1d1d]"
        >
          <ChevronRight className="size-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next gallery image"
          className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-xl border border-white/20 bg-[#172554]/70 text-white backdrop-blur-md transition-colors hover:bg-[#8f1d1d]"
        >
          <ChevronRight className="size-4" />
        </button>

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 sm:bottom-5 sm:right-5">
          {photos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show gallery image ${index + 1}`}
              aria-current={index === current}
              className={
                index === current
                  ? "h-1.5 w-6 rounded-full bg-[#d4af37] transition-all"
                  : "size-1.5 rounded-full bg-white/60 transition-all hover:bg-white"
              }
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-right text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
        {current + 1} / {photos.length} moments
      </p>
    </div>
  );
}
