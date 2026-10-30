import type { ReactNode } from "react";

import { BookOpen, CheckCircle2, GraduationCap, Landmark, Target, Users } from "lucide-react";

import mbaOverview from "@/assets/MBA Leadership at Golden Hour.png";
import {
  ProgrammeHighlightCard,
  ProgrammeMiniVisualCard,
  ProgrammeSectionHeading,
} from "@/components/site/ProgrammePageSections";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { mbaProgrammePageConfig } from "@/data/programmePageConfigs";

function MBAPage() {
  return (
    <ProgrammePageTemplate {...mbaProgrammePageConfig}>
      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8">
        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-24">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] lg:h-[320px]">
                <img
                  src={mbaOverview}
                  alt="MBA leadership and business administration"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <ProgrammeMiniVisualCard
                  variant="mba"
                  icon={<BookOpen size={20} />}
                  title="Online Learning"
                  accent="#0d5c45"
                />
                <ProgrammeMiniVisualCard
                  variant="mba"
                  icon={<Users size={20} />}
                  title="Working Adults"
                  accent="#8f1d1d"
                />
                <ProgrammeMiniVisualCard
                  variant="mba"
                  icon={<Target size={20} />}
                  title="Management"
                  accent="#1d355f"
                />
                <ProgrammeMiniVisualCard
                  variant="mba"
                  icon={<Landmark size={20} />}
                  title="Industry Focus"
                  accent="#6b4c9a"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex min-w-0 flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a] sm:text-base">
                Department of Management Studies
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                Overview
              </h2>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]" />

              <div className="mt-5 space-y-4 text-justify text-base leading-7 text-[#111111] sm:text-lg sm:leading-8">
                <p>
                  MBA Online Learning (OL) programme of the B.S. Abdur Rahman Crescent Institute of
                  Science and Technology are developed in accordance with the guidelines of the UGC
                  OL Regulations 2020 and in line with the vision and mission of the Institute.
                </p>

                <p>
                  Typically, the curriculum and syllabus contents under both programmes are similar
                  to our regular MBA programme, nevertheless delivered through Online mode using
                  state-of-the-art IT infrastructure and web based technologies.
                </p>

                <p>
                  The programmes are targeted to working adults as well as freshers who aspire to
                  upskill their knowledge across functional areas of management that are evolving in
                  the dynamic business environment in a flexible learning space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISION AND MISSION */}

      </section>
    </ProgrammePageTemplate>
  );
}

/* ELIGIBILITY ITEM */
function EligibilityItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-3 overflow-hidden border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
      <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#8f1d1d]" />

      <p className="text-base leading-7 text-[#111111] sm:text-lg sm:leading-8">{children}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default MBAPage;
