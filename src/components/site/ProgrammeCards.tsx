import { circularFont } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { getCourseInfo } from "@/data/programmes";

import { Button } from "@/components/ui/button";
import { certificationCourses, pgProgrammes, ugProgrammes } from "@/data/site";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

import baEnglishPhoto from "@/assets/optimized/BA English_ A Literary Study.webp";
import baPublicPolicyPhoto from "@/assets/optimized/BA Public Policy_ Governance and Justice.webp";
import islamicStudiesPhoto from "@/assets/optimized/islamic-studies.webp";
import mcaPhoto from "@/assets/optimized/MCA Tech Workstation_ Coding and Innovation.webp";
import mbaPhoto from "@/assets/optimized/MBA Leadership at Golden Hour.webp";
import mobileAppPhoto from "@/assets/optimized/Mobile App Development Workspace.webp";
import campusPhoto from "@/assets/campus-1.jpg";
import programmeStudentsPhoto from "@/assets/programme-students.jpg";

import programmeBrochure from "@/assets/programme-brochure.pdf";

type Programme = {
  slug: string;
  name: string;
  full: string;
  duration: string;
  eligibility: string;
};

type ProgrammeCategory = "ug" | "pg" | "certification";

type ProgrammeCardProps = {
  programme: Programme;
  index: number;
  type: ProgrammeCategory;
  compact?: boolean;
};

type ProgrammeImage = {
  src: string;
  width: number;
  height: number;
};

function getProgrammeImage(programme: Programme, type: ProgrammeCategory) {
  if (type === "certification") {
    return { src: mobileAppPhoto, width: 1536, height: 1024 };
  }

  switch (programme.slug) {
    case "ba-english":
      return { src: baEnglishPhoto, width: 1536, height: 1024 };
    case "ba-public-policy":
      return { src: baPublicPolicyPhoto, width: 1536, height: 1024 };
    case "ba-islamic-studies":
    case "ma-islamic-studies":
      return { src: islamicStudiesPhoto, width: 1536, height: 1024 };
    case "mca":
      return { src: mcaPhoto, width: 1536, height: 1024 };
    case "mba":
      return { src: mbaPhoto, width: 1672, height: 941 };
    default:
      return { src: campusPhoto, width: 1024, height: 1024 };
  }
}

const programmeCategories: Record<
  ProgrammeCategory,
  {
    label: string;
    title: string;
    description: string;
    items: Programme[];
  }
> = {
  ug: {
    label: "UG",
    title: "Undergraduate Programmes",
    description: "Undergraduate programmes offered at Crescent.",
    items: ugProgrammes,
  },
  pg: {
    label: "PG",
    title: "Postgraduate Programmes",
    description: "Postgraduate programmes offered at Crescent.",
    items: pgProgrammes,
  },
  certification: {
    label: "Certification",
    title: "Certified Programme",
    description: "Professional certification programmes offered at Crescent.",
    items: certificationCourses,
  },
};

const programmeCategoryIds = Object.keys(programmeCategories) as ProgrammeCategory[];

const programmeCategoryIcons: Record<ProgrammeCategory, typeof GraduationCap> = {
  ug: GraduationCap,
  pg: BookOpen,
  certification: Sparkles,
};

function getProgrammeRoute(programme: Programme) {
  return getCourseInfo(programme.slug)?.landingRoute;
}

/* =========================================================
   EXPLORE LINK
========================================================= */

function ProgrammeExploreLink({
  programme,
  programmeRoute,
}: {
  programme: Programme;
  programmeRoute: ReturnType<typeof getProgrammeRoute>;
}) {
  const className = `
    group inline-flex h-9 flex-1 cursor-pointer items-center
    justify-center gap-2 whitespace-nowrap rounded-full border
    border-[#172554]/20 bg-white px-2.5
    text-[clamp(0.68rem,0.62rem+0.18vw,0.82rem)]
    font-semibold text-[#111111] transition-all duration-300
    hover:border-[#172554] hover:bg-[#172554] hover:text-white
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
  `;

  const children = (
    <>
      Explore
      <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );

  if (programmeRoute) {
    return (
      <Link to={programmeRoute} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={`/course-info/${encodeURIComponent(programme.slug)}`} className={className}>
      {children}
    </Link>
  );
}

/* =========================================================
   PROGRAMME CARD
========================================================= */

function ProgrammeCard({ programme, index, type, compact = false }: ProgrammeCardProps) {
  const isPG = type === "pg";
  const isCertification = type === "certification";
  const isBAIslamicStudies = programme.slug === "ba-islamic-studies";
  const hasBrochure = !["ba-islamic-studies", "mca", "mba"].includes(programme.slug);

  const programmeRoute = getProgrammeRoute(programme);
  const programmeImage: ProgrammeImage = getProgrammeImage(programme, type);

  return (
    <Reveal
      delay={(index % 3) * 0.05}
      className={
        isBAIslamicStudies
          ? "h-full w-full max-w-[320px] basis-full"
          : compact
            ? "h-full w-full max-w-[360px] basis-full md:basis-[calc(50%-0.3125rem)]"
            : "h-full basis-full md:basis-[calc(50%-0.3125rem)] lg:basis-[calc(33.333%-0.45rem)]"
      }
    >
      <motion.article
        whileHover={{ y: -5 }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={circularFont}
        className={`
          group relative flex h-full min-h-[490px] flex-col
          overflow-hidden rounded-[1.2rem] border border-[#172554]/10
          bg-white p-0 shadow-[0_5px_18px_rgba(15,23,42,0.055)]
          transition-all duration-300 hover:border-[#D4AF37]/55
          hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)]
          ${isBAIslamicStudies ? "min-h-[380px]" : compact ? "min-h-[420px]" : ""}
        `}
      >
        {/* TOP ACCENT */}

        <div
          className={`absolute inset-x-0 top-0 z-10 h-[3px] ${
            isBAIslamicStudies
              ? "bg-gradient-to-r from-[#172554] via-[#23457D] to-[#D4AF37]"
              : "bg-gradient-to-r from-[#172554] via-[#8F1D1D] to-[#D4AF37]"
          }`}
        />

        {/* PROGRAMME IMAGE */}

        <div
          className={`relative w-full shrink-0 overflow-hidden bg-[#172554] ${
            isBAIslamicStudies ? "h-32" : compact ? "h-40" : "h-48 sm:h-52"
          }`}
        >
          <img
            src={programmeImage.src}
            alt={`${programme.name} programme`}
            loading="lazy"
            width={programmeImage.width}
            height={programmeImage.height}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-[#172554]/10 to-transparent" />
        </div>

        <div
          className={`relative flex flex-1 flex-col ${isBAIslamicStudies ? "p-3.5" : "p-4 sm:p-5"}`}
        >
          {/* DECORATION */}

          <div className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-[#D4AF37]/10 blur-2xl" />

          {/* HEADER */}

          <div className="relative flex items-center justify-between gap-2">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-[0.7rem] bg-[#172554] text-[#D4AF37] shadow-[0_5px_12px_rgba(23,37,84,0.15)]">
              {isCertification ? (
                <Sparkles className="size-4" />
              ) : (
                <GraduationCap className="size-4" />
              )}
            </div>

            <span
              className={`rounded-full px-2.5 py-1.5 text-[clamp(0.55rem,0.5rem+0.12vw,0.7rem)] font-bold uppercase tracking-[0.11em] ${
                isBAIslamicStudies
                  ? "bg-[#23457D]/[0.08] text-[#172554]"
                  : "bg-[#F4F1E8] text-[#111111]"
              }`}
            >
              {isCertification ? "Certification" : isPG ? "Postgraduate" : "Undergraduate"}
            </span>
          </div>

          {/* TITLE */}

          <div className="relative mt-3">
            <h4
              className={`text-[clamp(1rem,0.9rem+0.35vw,1.15rem)] font-bold leading-tight tracking-[-0.01em] ${
                isBAIslamicStudies ? "text-[#172554]" : "text-[#111111]"
              }`}
            >
              {programme.name}
            </h4>

            <p className="mt-1 line-clamp-1 text-[clamp(0.68rem,0.62rem+0.2vw,0.8rem)] font-medium leading-5 text-[#111111]">
              {programme.full}
            </p>
          </div>

          {/* DURATION AND BROCHURE */}

          <div className="relative mt-3 grid grid-cols-1 gap-2.5">
            <div className="flex flex-col gap-1.5">
              <div className="rounded-[0.7rem] border border-[#172554]/10 bg-[#172554]/[0.045] px-2.5 py-2 transition-all duration-300 group-hover:border-[#172554]/15">
                <div className="flex items-center gap-1.5 text-[#172554]">
                  <Clock3 className="size-3.5 shrink-0" />

                  <span className="text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)] font-bold uppercase tracking-wide text-[#111111]">
                    Duration
                  </span>
                </div>

                <p className="mt-1 line-clamp-1 text-[clamp(0.68rem,0.62rem+0.2vw,0.8rem)] font-bold text-[#111111]">
                  {programme.duration}
                </p>
              </div>

              {hasBrochure && (
                <a
                  href={programmeBrochure}
                  download
                  className="flex w-full items-center justify-center gap-1.5 rounded-[0.7rem] border border-[#D4AF37]/35 bg-[#fffaf0] px-2 py-2 text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)] font-bold text-[#111111] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Download className="size-3.5 shrink-0 text-[#8F1D1D]" />
                  <span className="truncate">Download Brochure</span>
                </a>
              )}
            </div>
          </div>

          {/* ELIGIBILITY */}

          <p className="relative mt-3 line-clamp-2 text-xs leading-5 text-slate-600">
            <span className="font-semibold text-[#172554]">Eligibility:</span>{" "}
            {programme.eligibility}
          </p>

          {/* INDICATOR */}

          <div className="mt-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 shrink-0 text-[#8F1D1D]" />

            <span className="text-[clamp(0.62rem,0.57rem+0.15vw,0.75rem)] font-semibold text-black/55">
              Flexible distance learning
            </span>
          </div>

          {/* ACTION BUTTONS */}

          <div className="relative mt-auto flex gap-1.5 pt-3">
            <ProgrammeExploreLink programme={programme} programmeRoute={programmeRoute} />

            <Button
              size="pill"
              className="h-9 flex-1 rounded-full border-0 bg-[#8F1D1D] px-2.5 text-[clamp(0.68rem,0.62rem+0.18vw,0.82rem)] font-bold text-white shadow-[0_5px_12px_rgba(143,29,29,0.15)] transition-all duration-300 hover:bg-[#172554] hover:shadow-[0_6px_15px_rgba(23,37,84,0.18)]"
              asChild
            >
              <Link to="/admission#how-to-apply">
                Apply Now
                <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* HOVER ACCENT */}

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:w-16" />
      </motion.article>
    </Reveal>
  );
}

/* =========================================================
   PROGRAMME SECTION
========================================================= */

function ProgrammeSection({
  id,
  title,
  description,
  items,
  type,
}: {
  id: string;
  title: string;
  description: string;
  items: Programme[];
  type: ProgrammeCategory;
}) {
  return (
    <div id={id} className="scroll-mt-20 min-w-0 pt-1">
      {/* SECTION HEADER */}

      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#61718a]">
            CDOE · Programmes
          </p>
          <h3
            className="text-2xl font-bold leading-tight tracking-tight text-[#17234B] sm:text-3xl lg:text-4xl"
            style={circularFont}
          >
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#61718a] sm:text-base">{description}</p>
        </div>

        {items.length > 0 && (
          <div className="mb-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#61718a] shadow-sm">
            <BookOpen className="size-3.5 text-[#23457D]" />
            {items.length} Programme{items.length > 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* PROGRAMME CARDS */}

      {items.length > 0 ? (
        <div className="flex flex-wrap justify-start gap-3">
          {items.map((programme, index) => (
            <ProgrammeCard
              key={programme.name}
              programme={programme}
              index={index}
              type={type}
              compact={type === "pg" || (type === "ug" && items.length === 1)}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex min-h-40 items-center justify-center rounded-[1.2rem] border border-dashed border-[#172554]/15 bg-[#F4F1E8]/40 px-6 py-10 text-center"
          role="status"
        >
          <p className="text-sm font-semibold text-[#172554]">Coming Soon</p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN PROGRAMME CARDS
========================================================= */

export function ProgrammeCards({ withHeading = true }: { withHeading?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<ProgrammeCategory>("ug");

  const { hash } = useLocation();

  useEffect(() => {
    const category = hash.replace(/^#/, "");

    if (category === "ug" || category === "pg" || category === "certification") {
      setActiveCategory(category);
    }
  }, [hash]);

  const selectedCategory = programmeCategories[activeCategory];

  return (
    <Section id="programmes" className="!py-0 bg-[#F5F1E9]" style={circularFont}>
      {/* =====================================================
          SMALLER HEADING + RIGHT-SIDE IMAGE
      ===================================================== */}

      {withHeading && (
        <div className="px-3 pb-4 pt-5 sm:px-5 lg:px-0">
          <div className="grid items-center gap-5 overflow-hidden rounded-2xl border border-[#172554]/10 bg-[#F8F7F3] p-4 sm:p-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:p-7 lg:p-8">
            {/* LEFT SIDE: HEADING */}

            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 rounded-full bg-[#172554]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F1D1D] sm:text-sm">
                  Programmes Offered
                </span>

                <span className="size-1.5 rounded-full bg-[#D4AF37]" />
              </div>

              <h2
                className="max-w-lg text-2xl font-bold leading-tight tracking-tight text-[#17234B] sm:text-3xl md:text-4xl"
                style={circularFont}
              >
                Build your future with the right programme
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
                Explore undergraduate, postgraduate and professional certification programmes
                designed for flexible learning.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#172554]/10 bg-white px-3 py-2.5 text-sm font-semibold text-[#17234B]">
                  <GraduationCap className="size-4 text-[#8F1D1D]" />
                  Undergraduate
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#172554]/10 bg-white px-3 py-2.5 text-sm font-semibold text-[#17234B]">
                  <BookOpen className="size-4 text-[#8F1D1D]" />
                  Postgraduate
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: CAMPUS IMAGE */}

            <div className="group relative min-h-44 overflow-hidden rounded-xl bg-[#172554] sm:min-h-56 md:min-h-60">
              <img
                src={programmeStudentsPhoto}
                alt="Students discussing their studies on campus"
                loading="lazy"
                width={558}
                height={286}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#172554]/60 via-[#172554]/10 to-[#D4AF37]/10" />

              <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-[#172554]/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:text-sm">
                Learn. Grow. Succeed.
              </div>

              <div className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[#D4AF37] backdrop-blur-sm sm:right-4 sm:top-4 sm:size-11">
                <Sparkles className="size-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROGRAMME CATEGORY NAVIGATION AND CONTENT */}

      <div
        className={`grid grid-cols-1 items-start gap-5 px-3 sm:px-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-0 ${
          withHeading ? "mt-1.5" : ""
        }`}
      >
        <aside className="h-fit min-w-0 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_8px_24px_rgba(23,37,84,0.07)] backdrop-blur-xl lg:sticky lg:top-24">
          <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#61718a]">
            Browse Programmes
          </p>
          <div
            className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
            role="tablist"
            aria-label="Programme category"
          >
            {programmeCategoryIds.map((categoryId) => {
              const Icon = programmeCategoryIcons[categoryId];
              const active = activeCategory === categoryId;

              return (
                <button
                  key={categoryId}
                  id={categoryId}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="programme-category-panel"
                  onClick={() => setActiveCategory(categoryId)}
                  className={`flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-colors lg:w-full ${
                    active
                      ? "bg-[#23457D] text-white shadow-[0_5px_14px_rgba(35,69,125,0.2)]"
                      : "text-[#61718a] hover:bg-[#23457D]/[0.07] hover:text-[#23457D]"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{programmeCategories[categoryId].label}</span>
                  <span className="hidden text-[10px] opacity-70 sm:inline lg:ml-auto">
                    {categoryId === "ug"
                      ? "Undergraduate"
                      : categoryId === "pg"
                        ? "Postgraduate"
                        : "Skills"}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div
          id="programme-category-panel"
          className="min-w-0"
          role="tabpanel"
          aria-labelledby={activeCategory}
        >
          <ProgrammeSection
            id={`${activeCategory}-programmes`}
            title={selectedCategory.title}
            description={selectedCategory.description}
            type={activeCategory}
            items={selectedCategory.items}
          />
        </div>
      </div>
    </Section>
  );
}
