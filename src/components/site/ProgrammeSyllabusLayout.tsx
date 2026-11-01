import type { ReactNode } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

import {
  ProgrammeSidebarNavigation,
  type ProgrammeNavigationItem,
} from "@/components/site/ProgrammePageTemplate";

type ProgrammeVariant = "mba" | "mca" | "ba-islamic-studies";

const themeStyles: Record<ProgrammeVariant, { hover: string; credits: string }> = {
  mba: { hover: "hover:text-[#334b7c]", credits: "bg-[#1d355f]" },
  mca: { hover: "hover:text-[#334b7c]", credits: "bg-[#1d355f]" },
  "ba-islamic-studies": { hover: "hover:text-[#0d5c45]", credits: "bg-[#0d5c45]" },
};

type ProgrammeSyllabusLayoutProps = {
  variant: ProgrammeVariant;
  navigation: ProgrammeNavigationItem[];
  title: string;
  notice: string;
  downloadLabel: string;
  onDownload: () => void;
  children: ReactNode;
};

export function ProgrammeSyllabusLayout({
  variant,
  navigation,
  title,
  notice,
  downloadLabel,
  onDownload,
  children,
}: ProgrammeSyllabusLayoutProps) {
  const styles = themeStyles[variant];

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-4 px-4 py-4 sm:px-6 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8">
      <ProgrammeSidebarNavigation
        variant={variant}
        navigation={navigation}
        activeTitle="Syllabus"
      />
      <div className="min-w-0">
        <div className="mb-8 rounded-xl border border-[#d4af37]/40 bg-[#fffaf0] px-5 py-4">
          <p className="text-sm font-semibold text-[#111111]">{notice}</p>
          <button
            type="button"
            onClick={onDownload}
            className={`mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#8f1d1d] transition-colors ${styles.hover}`}
          >
            <Download size={15} />
            {downloadLabel}
          </button>
        </div>

        <div className="mb-8">
          <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />
          <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">
            Semester-wise course structure and credit distribution
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function SyllabusCreditSummary({
  credits,
  variant,
}: {
  credits: number;
  variant: ProgrammeVariant;
}) {
  const isBaIslamicStudies = variant === "ba-islamic-studies";

  return (
    <section
      className={`mb-10 rounded-2xl px-5 py-6 text-white shadow-sm sm:px-7 ${themeStyles[variant].credits}`}
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            Programme Credit Structure
          </p>
          <h2 className="mt-1 text-xl font-bold">
            {isBaIslamicStudies ? "Total Credits" : "Total Minimum Credits"}
          </h2>
        </div>
        <div className="text-4xl font-bold text-[#d4af37]">{credits}</div>
      </div>
    </section>
  );
}

export function SyllabusPageNote({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 rounded-xl border-l-4 border-[#8f1d1d] bg-[#fffaf0] px-4 py-3">
      <p className="text-sm leading-6 text-[#111111]/75">{children}</p>
    </div>
  );
}

export function SyllabusBackLink({ to }: { to: string }) {
  return (
    <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <Link
        to={to}
        className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#111111] transition-all"
      >
        <ArrowLeft size={16} />
        Back to Programme
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
      </Link>
    </div>
  );
}
