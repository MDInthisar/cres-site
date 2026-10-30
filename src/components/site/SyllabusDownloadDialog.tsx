import type { ReactNode } from "react";
import { Download, X } from "lucide-react";

import { circularFont } from "@/lib/fonts";

type SyllabusDownloadTheme = "purple" | "green";

type SyllabusDownloadDialogProps = {
  open: boolean;
  unlocked: boolean;
  title: string;
  description: string;
  successDescription: string;
  pdfHref: string;
  theme: SyllabusDownloadTheme;
  onClose: () => void;
  children: ReactNode;
};

const themeStyles = {
  purple: {
    icon: "bg-[#6b4c9a]/10 text-[#6b4c9a]",
    download: "bg-[#6b4c9a] hover:bg-[#5b3f86]",
  },
  green: {
    icon: "bg-[#0d5c45]/10 text-[#0d5c45]",
    download: "bg-[#0d5c45] hover:bg-[#0a4b38]",
  },
} as const;

export function SyllabusDownloadDialog({
  open,
  unlocked,
  title,
  description,
  successDescription,
  pdfHref,
  theme,
  onClose,
  children,
}: SyllabusDownloadDialogProps) {
  if (!open) return null;

  const styles = themeStyles[theme];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-sm">
      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-slate-100"
        >
          <X size={18} />
        </button>

        {!unlocked ? (
          <div className="p-4 pt-6 sm:p-6 sm:pt-7">
            <div className="mb-5 pr-10">
              <div className="mb-2 h-1 w-10 rounded-full bg-[#d4af37]" />
              <h2 className="text-xl font-bold text-[#111111]" style={circularFont}>
                {title}
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">{description}</p>
            </div>

            {children}
          </div>
        ) : (
          <div className="p-6 text-center sm:p-8">
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${styles.icon}`}
            >
              <Download size={25} />
            </div>

            <h2 className="mt-4 text-xl font-bold text-[#111111]" style={circularFont}>
              Syllabus Ready
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">{successDescription}</p>

            <a
              href={pdfHref}
              download
              className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-sm transition-all ${styles.download}`}
            >
              <Download size={17} />
              Download Syllabus PDF
            </a>

            <button
              type="button"
              onClick={onClose}
              className="mt-3 block w-full text-xs font-semibold text-slate-500 transition-colors hover:text-[#8f1d1d]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
