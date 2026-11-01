import convocationImg1 from "@/assets/convocation/convocation-1.jpeg";
import convocationImg2 from "@/assets/convocation/convocation-2.jpeg";
import convocationImg3 from "@/assets/convocation/convocation-3.jpeg";
import convocationImg4 from "@/assets/convocation/convocation-4.jpeg";
import eventsImg1 from "@/assets/events/events-1.jpeg";
import eventsImg2 from "@/assets/events/events-2.jpeg";
import eventsImg3 from "@/assets/events/events-3.jpeg";
import eventsImg4 from "@/assets/events/events-4.jpeg";
import jobFairImg1 from "@/assets/job-fair/DSC03345_8K.jpg";
import jobFairImg2 from "@/assets/job-fair/DSC03379_8K.jpg";
import jobFairImg3 from "@/assets/job-fair/DSC03380_8K.jpg";
import jobFairImg4 from "@/assets/job-fair/DSC03384_8K.jpg";
import jobFairImg5 from "@/assets/job-fair/DSC03398_8K.jpg";
import jobFairImg6 from "@/assets/job-fair/DSC03402_8K.jpg";
import jobFairImg7 from "@/assets/job-fair/DSC03407_8K.jpg";
import jobFairImg8 from "@/assets/job-fair/DSC03415_8K.jpg";
import jobFairImg9 from "@/assets/job-fair/DSC03418_8K.jpg";
import jobFairImg10 from "@/assets/job-fair/DSC03428_8K.jpg";
import jobFairImg11 from "@/assets/job-fair/DSC03437_8K.jpg";
import jobFairImg12 from "@/assets/job-fair/DSC03439_8K.jpg";
import jobFairImg13 from "@/assets/job-fair/DSC03448_8K.jpg";
import jobFairImg14 from "@/assets/job-fair/DSC03454_8K.jpg";
import jobFairImg15 from "@/assets/job-fair/DSC03459_8K.jpg";
import jobFairImg16 from "@/assets/job-fair/DSC03463_8K.jpg";
import jobFairImg17 from "@/assets/job-fair/DSC03477_8K.jpg";
import jobFairImg18 from "@/assets/job-fair/DSC03478_8K.jpg";
import jobFairImg19 from "@/assets/job-fair/DSC03485_8K.jpg";
import jobFairImg20 from "@/assets/job-fair/DSC03489_8K.jpg";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Camera, ChevronRight, Images, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Section } from "./Section";

type Photo = {
  src: string;
  alt: string;
  category: string;
  slides?: string[];
  slideAlts?: string[];
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
    src: convocationImg1,
    alt: "Degree award ceremony at Crescent",
    category: "convocation",
    slides: [convocationImg1, convocationImg2, convocationImg3, convocationImg4],
    slideAlts: [
      "Degree award ceremony at Crescent",
      "Institute leaders at the convocation ceremony",
      "Graduate receiving a degree certificate",
      "Faculty and graduates gathered on stage",
    ],
  },
  {
    src: jobFairImg1,
    alt: "Students and recruiters at the Crescent Job Fair",
    category: "job-fair",
    slides: [
      jobFairImg1,
      jobFairImg2,
      jobFairImg3,
      jobFairImg4,
      jobFairImg5,
      jobFairImg6,
      jobFairImg7,
      jobFairImg8,
      jobFairImg9,
      jobFairImg10,
      jobFairImg11,
      jobFairImg12,
      jobFairImg13,
      jobFairImg14,
      jobFairImg15,
      jobFairImg16,
      jobFairImg17,
      jobFairImg18,
      jobFairImg19,
      jobFairImg20,
    ],
  },
  {
    src: eventsImg1,
    alt: "Crescent campus celebration",
    category: "events",
    slides: [eventsImg1, eventsImg2, eventsImg3, eventsImg4],
    slideAlts: [
      "Crescent campus celebration",
      "Teachers' Day celebration at Crescent",
      "Independence Day gathering at Crescent",
      "Crescent CDOE Job Fair",
    ],
  },
];

export function GalleryGrid({ featured = false }: { featured?: boolean }) {
  const [active, setActive] = useState<string>("all");
  const [slideIndex, setSlideIndex] = useState(0);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#gallery") {
      setActive("all");
      return;
    }

    const category = galleryCategories.find((item) => `#${item.id}` === hash);
    if (category) setActive(category.id);
  }, [hash]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((index) => index + 1);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  const filtered = active === "all" ? photos : photos.filter((photo) => photo.category === active);
  const visiblePhotos = filtered.map((photo) => getPhotoSlide(photo, slideIndex));

  if (featured) {
    return (
      <Section id="gallery" className="h-full [&>div]:h-full !px-0 !py-0">
        <div className="mx-auto h-full w-full max-w-7xl">
          <GallerySpotlight />
        </div>
      </Section>
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
                  id={category.id === "all" ? undefined : category.id}
                  type="button"
                  onClick={() => setActive(category.id)}
                  className={cn(
                    "group relative flex scroll-mt-24 items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300",
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
            Images change every 2 seconds
          </div>
        </div>

        {/* =====================================================
            PREMIUM MASONRY GALLERY
        ===================================================== */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visiblePhotos.map((photo, i) => (
            <div
              key={`${photo.category}-${i}`}
              className="relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] border border-[#172554]/10 bg-[#172554] text-left shadow-[0_8px_25px_rgba(23,37,84,0.08)]"
            >
              {/* Image */}
              <span className="relative block overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="block h-auto w-full object-cover"
                />

                {/* Dark cinematic overlay */}
                <span className="absolute inset-0 bg-gradient-to-t from-[#172554]/95 via-[#172554]/10 to-transparent opacity-50" />

                {/* Bottom information */}
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#172554]/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37] backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-[#d4af37]" />
                    {galleryCategories.find((item) => item.id === photo.category)?.label}
                  </span>

                  <span className="block max-w-[90%] text-sm font-semibold leading-5 text-white">
                    {photo.alt}
                  </span>
                </span>
              </span>
            </div>
          ))}
        </div>

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
    </Section>
  );
}

function GallerySpotlight() {
  const [current, setCurrent] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const homepagePhotos = photos.map((photo) => {
    if (photo.category !== "events" || !photo.slides || !photo.slideAlts) return photo;

    return {
      ...photo,
      src: photo.slides[1],
      alt: photo.slideAlts[1],
      slides: photo.slides.slice(1),
      slideAlts: photo.slideAlts.slice(1),
    };
  });
  const photo = getPhotoSlide(homepagePhotos[current], slideIndex);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % homepagePhotos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [homepagePhotos.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((index) => index + 1);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setCurrent((index) => (index - 1 + homepagePhotos.length) % homepagePhotos.length);
  };
  const showNext = () => {
    setCurrent((index) => (index + 1) % homepagePhotos.length);
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col">
      <div className="mb-4 shrink-0">
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
        <div className="relative block size-full min-h-[280px] w-full overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={900}
            loading="eager"
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#101a3c]/90 via-[#172554]/5 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-4 pr-24 text-white sm:p-5 sm:pr-28">
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#172554]/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37] backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-[#d4af37]" />
              {galleryCategories.find((item) => item.id === photo.category)?.label}
            </span>
            <span className="block text-sm font-semibold leading-5 sm:text-base">{photo.alt}</span>
          </span>
        </div>

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
          {homepagePhotos.map((item, index) => (
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
      <p className="mt-2 shrink-0 text-right text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
        {current + 1} / {homepagePhotos.length} moments
      </p>
    </div>
  );
}

function getPhotoSlide(photo: Photo, index: number): Photo {
  if (!photo.slides?.length) return photo;

  const slideIndex = index % photo.slides.length;
  return {
    ...photo,
    src: photo.slides[slideIndex],
    alt: photo.slideAlts?.[slideIndex] ?? photo.alt,
  };
}
