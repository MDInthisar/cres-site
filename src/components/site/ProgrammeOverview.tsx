import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import type { ProgrammeOverviewContent } from "@/data/programmes";

const themeStyles = {
  blue: "text-[#334b7c]",
  green: "text-[#0d5c45]",
} as const;

export function ProgrammeOverview({
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  title,
  programmeLabel,
  department,
  theme,
  paragraphs,
  additionalSections = [],
  cta,
  children,
}: ProgrammeOverviewContent & { theme: "blue" | "green"; children?: ReactNode }) {
  return (
    <>
      <section id="overview" className="scroll-mt-24">
        <div className="grid grid-cols-1 items-stretch gap-5">
          <div className="min-w-0">
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] lg:h-[320px]">
                <img
                  src={image}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>

              <div className="flex min-h-[200px] w-full flex-col justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#fdf8f1] px-6 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] sm:px-8 lg:h-[320px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2a5c] text-white shadow-md sm:h-14 sm:w-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    aria-hidden="true"
                  >
                    <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                    <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#0f2a5c] sm:text-3xl">
                  {title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#d4af37] sm:text-base">
                  {programmeLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <span className={`text-xs font-bold uppercase tracking-[0.16em] ${themeStyles[theme]}`}>
              Overview
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
              {department}
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

            <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {additionalSections.map((section) => (
        <section
          key={section.title}
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
            {section.eyebrow}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">{section.title}</h3>
          <div className="mt-3 h-1 w-9 rounded-full bg-[#d4af37]" />
          {section.highlight && (
            <div className="mt-3 border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                {section.highlight.label}
              </span>
              <h4 className="mt-2 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                {section.highlight.title}
              </h4>
              <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />
              <p className="mt-4 text-justify text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
                {section.highlight.paragraph}
              </p>
            </div>
          )}
          <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}
      {cta && (
        <section className="mt-4 rounded-2xl bg-[#0d5c45] px-4 py-4 text-center sm:px-6 sm:py-5">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{cta.title}</h3>
          <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">{cta.label}</p>
          <Link
            to={cta.to}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-bold text-[#111111] transition-colors hover:bg-[#c19b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d5c45]"
          >
            {cta.linkText}
          </Link>
        </section>
      )}
      {children}
    </>
  );
}
