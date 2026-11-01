import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap } from "lucide-react";

import { FacultyDirectory } from "@/components/site/FacultyDirectory";
import { ProgrammeSidebarNavigation } from "@/components/site/ProgrammePageTemplate";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getFacultyForCourse } from "@/data/facultyProfiles";
import { getRequiredProgrammePageConfig } from "@/data/programmes";

const faculty = getFacultyForCourse("mca");

function MCAPeoplePage() {
  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-white text-[#111111]">
        <section className="bg-gradient-to-r from-[#334b7c] via-[#2b416d] to-[#23365c] text-white">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
            <div className="mb-3">
              <Link
                to="/mca"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to MCA
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
                Postgraduate Programme
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                People
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Meet the faculty members supporting teaching, academic guidance and learner
                development in MCA.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8">
          <ProgrammeSidebarNavigation
            variant="mca"
            navigation={getRequiredProgrammePageConfig("mca").navigation}
            activeTitle="People"
          />
          <main className="min-w-0 py-2 sm:py-4">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#334b7c] sm:text-sm">
                <span className="h-px w-6 bg-[#D4AF37]" />
                Faculty Team
              </div>

              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">Faculty — MCA</h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                Academic professionals supporting teaching, guidance and learner development.
              </p>
            </div>

            <FacultyDirectory
              faculty={faculty}
              theme="blue"
              programmeBadge="MCA • Faculty"
              programmeName="Master of Computer Applications (MCA)"
              profileLinkLabel="Faculty Profile"
              profileLinkDescription="View the faculty profile document."
            />

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#334b7c]/10 bg-[#334b7c]/5 px-4 py-4 sm:items-center sm:px-5">
              <BookOpen className="mt-0.5 size-5 shrink-0 text-[#334b7c] sm:mt-0" />

              <p className="text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
                Our MCA faculty team supports academic learning, guidance and the overall
                development of learners.
              </p>
            </div>
          </main>
        </section>
      </div>
    </SiteLayout>
  );
}

export default MCAPeoplePage;
