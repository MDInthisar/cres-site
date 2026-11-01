import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { FacilitiesSidebar } from "@/components/site/FacilitiesSidebar";
import type { FacilityRoute } from "@/data/facilities";
import { circularFont } from "@/lib/fonts";

export function FacilityPageLayout({
  activeHref,
  title,
  description,
  children,
}: {
  activeHref: Exclude<FacilityRoute, "/facilities">;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main style={circularFont} className="min-h-screen bg-[#f7f5f7] text-[#14284e]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 pb-10 pt-7 sm:px-6 sm:pt-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-8 xl:grid-cols-[220px_minmax(0,1fr)] xl:px-10">
        <FacilitiesSidebar activeHref={activeHref} />

        <div className="min-w-0">
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
              Facilities
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#14284e] sm:text-3xl">
              {title}
            </h1>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
              {description}
            </p>
          </motion.header>

          <div className="space-y-8">{children}</div>
        </div>
      </div>
    </main>
  );
}

export function FacilitySectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">{eyebrow}</p>
      <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">{title}</h2>
    </div>
  );
}
