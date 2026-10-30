import mcaOverview from "@/assets/MCA Tech Workstation_ Coding and Innovation.png";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";

function MCAPage() {
  return (
    <ProgrammePageTemplate {...mcaProgrammePageConfig} actions={[]}>
      {/* MAIN CONTENT */}
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* OVERVIEW */}
        <section id="overview" className="scroll-mt-24">
          <div className="grid grid-cols-1 items-stretch gap-5">
            <div className="min-w-0">
              {/* IMAGE + COURSE NAME SIDE BY SIDE */}
              <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
                {/* EXISTING IMAGE CARD (unchanged) */}
                <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] lg:h-[320px]">
                  <img
                    src={mcaOverview}
                    alt="MCA computer applications and technology"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
                </div>

                {/* NEW: COURSE NAME CARD (beside the image) */}
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
                    >
                      <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                      <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#0f2a5c] sm:text-3xl">
                    Master of Computer Applications
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#d4af37] sm:text-base">
                    MCA
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#334b7c]">
                Overview
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                Department of Computer Applications
              </h2>

              <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

              <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
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