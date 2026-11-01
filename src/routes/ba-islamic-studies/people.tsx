import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

import { FacultyDirectory } from "@/components/site/FacultyDirectory";
import { ProgrammeSidebarNavigation } from "@/components/site/ProgrammePageTemplate";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getFacultyForCourse } from "@/data/facultyProfiles";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

const faculty = getFacultyForCourse("ba-islamic-studies");

function BAIslamicStudiesPeoplePage() {
  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-[#F7F8F4] text-[#111111]">
        <section className="relative overflow-hidden bg-[#0d5c45]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
            <Link
              to="/programmes"
              className="group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Programmes
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#f4d979]">
                Undergraduate Programme
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
                People
              </h1>

              <div className="mt-1.5 h-1 w-12 rounded-full bg-[#d4af37]" />

              <p className="mt-2 max-w-3xl text-sm leading-5 text-white/80 sm:text-base sm:leading-6">
                Meet the faculty members supporting teaching, academic guidance and learner
                development in B.A. Islamic Studies.
              </p>
              <div className="mt-3">
                <Link
                  to="/admission"
                  className="group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-12">
          <ProgrammeSidebarNavigation
            variant="ba-islamic-studies"
            navigation={baIslamicStudiesProgrammePageConfig.navigation}
            activeTitle="People"
          />
          <main className="min-w-0 py-2 md:py-4">
            <div className="mb-7">
              <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F4E]">
                <span className="h-px w-7 bg-[#D4AF37]" />
                Faculty Team
              </div>

              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-[-0.02em]">
                Faculty — B.A. Islamic Studies
              </h2>

              <p className="mt-2 max-w-2xl text-[clamp(0.9rem,1.4vw,1rem)] leading-6 text-black/60">
                Academic professionals supporting the learning journey of our students.
              </p>
            </div>

            <FacultyDirectory
              faculty={faculty}
              theme="green"
              programmeBadge="B.A. Islamic Studies"
              programmeName="B.A. Islamic Studies"
              profileLinkLabel="Official Faculty Profile"
              profileLinkDescription="View the complete profile on the Crescent website."
            />

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#2F6F4E]/10 bg-[#2F6F4E]/5 px-5 py-4">
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6F4E]" />

              <p className="text-sm leading-6 text-black/60">
                Our faculty team supports academic learning, guidance and the overall development of
                learners pursuing B.A. Islamic Studies.
              </p>
            </div>
          </main>
        </section>
      </div>
    </SiteLayout>
  );
}

export default BAIslamicStudiesPeoplePage;
