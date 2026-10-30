import type { ReactNode } from "react";

type ProgrammeVariant = "mba" | "mca";

export function ProgrammeSectionHeading({
  number,
  title,
  accent,
  variant,
}: {
  number: string;
  title: string;
  accent: string;
  variant: ProgrammeVariant;
}) {
  const compact = variant === "mca";

  return (
    <div className="flex items-center gap-3">
      <span
        className={
          compact
            ? "text-sm font-bold tracking-[0.12em]"
            : "text-base font-bold tracking-[0.12em] sm:text-lg"
        }
        style={{ color: accent }}
      >
        {number}
      </span>
      <span
        className={compact ? "h-[2px] w-7 bg-[#d4af37]" : "h-[2px] w-8 shrink-0 bg-[#d4af37]"}
      />
      <span
        className={
          compact
            ? "text-sm font-semibold uppercase tracking-[0.1em] text-slate-500"
            : "text-base font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-lg"
        }
      >
        {title}
      </span>
    </div>
  );
}

export function ProgrammeMiniVisualCard({
  icon,
  title,
  accent,
  variant,
}: {
  icon: ReactNode;
  title: string;
  accent: string;
  variant: ProgrammeVariant;
}) {
  const compact = variant === "mca";

  return (
    <div
      className={
        compact
          ? "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3"
          : "group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
      }
    >
      <div className={compact ? "flex items-center gap-2" : "flex items-center gap-3"}>
        <div
          className={
            compact
              ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              : "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
          }
          style={{
            backgroundColor: `${accent}12`,
            color: accent,
          }}
        >
          {icon}
        </div>
        <p
          className={
            compact
              ? "text-sm font-semibold leading-5 text-[#111111]"
              : "text-sm font-semibold leading-6 text-[#111111] sm:text-base"
          }
        >
          {title}
        </p>
      </div>
      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export function ProgrammeHighlightCard({
  title,
  description,
  icon,
  accent,
  variant,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
  variant: ProgrammeVariant;
}) {
  const compact = variant === "mca";

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </div>
      <h3
        className={
          compact ? "text-base font-bold sm:text-lg" : "text-lg font-bold leading-6 sm:text-xl"
        }
        style={{ color: accent }}
      >
        {title}
      </h3>
      <p
        className={
          compact
            ? "mt-2 text-sm leading-6 text-[#111111] sm:text-base"
            : "mt-3 text-base leading-7 text-[#111111] sm:text-lg sm:leading-8"
        }
      >
        {description}
      </p>
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </div>
  );
}
