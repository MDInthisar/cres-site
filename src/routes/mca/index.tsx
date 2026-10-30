
import { BookOpen, GraduationCap, Landmark, Target, Users } from "lucide-react";

import {
  ProgrammeHighlightCard,
  ProgrammeMiniVisualCard,
  ProgrammeSectionHeading,
} from "@/components/site/ProgrammePageSections";
import mcaOverview from "@/assets/MCA Tech Workstation_ Coding and Innovation.png";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";

function MCAPage() {
  return (
    <ProgrammePageTemplate {...mcaProgrammePageConfig}>
      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6 lg:px-8">
        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-24">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] lg:h-[320px]">
                <img
                  src={mcaOverview}
                  alt="MCA computer applications and technology"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <ProgrammeMiniVisualCard
                  variant="mca"
                  icon={<BookOpen size={17} />}
                  title="Computer Applications"
                  accent="#0d5c45"
                />
                <ProgrammeMiniVisualCard
                  variant="mca"
                  icon={<Users size={17} />}
                  title="Qualified Faculty"
                  accent="#8f1d1d"
                />
                <ProgrammeMiniVisualCard
                  variant="mca"
                  icon={<Target size={17} />}
                  title="Research & R&D"
                  accent="#1d355f"
                />
                <ProgrammeMiniVisualCard
                  variant="mca"
                  icon={<Landmark size={17} />}
                  title="Industry Focus"
                  accent="#6b4c9a"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex min-w-0 flex-col justify-center">
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a]">
                Department of Computer Applications
              </span>

              <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                Overview
              </h2>

              <div className="mt-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />

              <div className="mt-5 space-y-4 text-justify text-base leading-7 text-[#111111]">
                <p>
                  The department offers Master of Computer Applications (MCA) since 1994, M.Phil
                  (Computer Science) since 2009, Ph.D (Computer Science) since 2009, MCA (Lateral
                  Entry) since 2014. The department motivates Staff and Students to promote Industry
                  Institute Interaction and R&D activities. In addition to regular curriculum the
                  department organizes technical seminars, symposia, workshops, industrial visits,
                  in-plant training to expose the students to the real world environments and to
                  enable them to gain practical knowledge.
                </p>

                <p>
                  The website and Internet services of the institute are maintained by the
                  Department of Computer Applications. Along with that the Department offers
                  additional virtual lab classes, live classes, tutorial MOOC’s and vocational
                  augmentation. Courses through IIT Professors under MHRD’s QEEE programme. Special
                  placement opportunities on mobile development in Android/IOs platforms.
                </p>

                <p>
                  The MCA Programme was accredited by NBA since 2001. The department has adequate
                  infrastructure and well-equipped laboratories and it is empowered with a team of
                  highly qualified faculty members.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </ProgrammePageTemplate>
  );
}

export default MCAPage;
