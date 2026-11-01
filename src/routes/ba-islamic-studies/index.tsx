import { Link } from "react-router-dom";
import { ProgrammeOverview } from "@/components/site/ProgrammeOverview";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { programmeOverviewData } from "@/data/programmeOverview";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

function BAIslamicStudiesPage() {
  return (
    <ProgrammePageTemplate {...baIslamicStudiesProgrammePageConfig}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgrammeOverview {...programmeOverviewData.baIslamicStudies}>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
              Programme Information
            </span>

            <h3 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
              Bachelor of Arts in Islamic Studies
            </h3>

            <div className="mt-3 h-1 w-9 rounded-full bg-[#d4af37]" />

            <div className="mt-4 border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                Arabic &amp; Islamic Studies
              </span>

              <h4 className="mt-2 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                Faith, Values &amp; Modern Education
              </h4>

              <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

              <p className="mt-4 text-justify text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
                The school focuses on combining revealed knowledge with modern scientific
                understanding, helping students develop academic knowledge together with values and
                a broader understanding of contemporary society.
              </p>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
              <p>
                The BA Islamic Studies programme provides students with an opportunity to develop a
                structured understanding of Islamic studies through flexible distance education. The
                programme is designed to support learners through accessible academic resources and
                a flexible learning environment.
              </p>

              <p>
                Students can access their academic resources through the learning platform while
                receiving support throughout their programme.
              </p>
            </div>
          </div>

          <section className="mt-4 rounded-2xl bg-[#0d5c45] px-4 py-4 text-center sm:px-6 sm:py-5">
            <h3 className="text-xl font-bold text-white sm:text-2xl">Ready to begin?</h3>

            <p className="mt-1.5 text-base font-semibold text-white sm:text-lg">
              Apply for BA Islamic Studies
            </p>

            <Link
              to="/admission"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-bold text-[#111111] transition-colors hover:bg-[#c19b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d5c45]"
            >
              Apply Now
            </Link>
          </section>
        </ProgrammeOverview>
      </section>
    </ProgrammePageTemplate>
  );
}

export default BAIslamicStudiesPage;
