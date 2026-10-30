import { Link } from "react-router-dom";
import islamicStudiesOverview from "@/assets/islamic-studies.png";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

function BAIslamicStudiesPage() {
  return (
    <ProgrammePageTemplate {...baIslamicStudiesProgrammePageConfig}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Overview */}
        <div className="grid grid-cols-1 items-stretch gap-5">
          {/* Main Image + Course Name (side by side) */}
          <div className="min-w-0">
            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
              {/* Existing Image Card (unchanged) */}
              <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)] sm:h-[280px] lg:h-[320px]">
                <img
                  src={islamicStudiesOverview}
                  alt="Islamic studies books and learning environment"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>

              {/* New: Course Name Card (beside the image) */}
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
                  Bachelor of Arts in Islamic Studies
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#d4af37] sm:text-base">
                  BA Islamic Studies
                </p>
              </div>
            </div>
          </div>

          {/* Overview Content */}
          <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d5c45]">
              Overview
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
              Department of B.A. Islamic Studies
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

            <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
              <p>
                The school was established in 2009 with the vision of promoting faith and value
                based education by combining religious education and modern science. It was the
                dream of the founder Dr. B.S. Abdur Rahman to promote a set of younger generation
                equipped with both the revealed and scientific knowledge. By establishment of this
                school, his dream became true.
              </p>

              <p>
                The school offers UG, PG and Ph.D. programmes in Arabic and Islamic studies, aiming
                at bringing Islamic studies into the mainstream of modern education by combining
                revealed knowledge and modern science.
              </p>
            </div>
          </div>
        </div>

        {/* Programme Information */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
            Programme Information
          </span>

          <h3 className="mt-2 text-2xl font-bold text-[#111111] sm:text-3xl">
            Bachelor of Arts in Islamic Studies
          </h3>

          <div className="mt-3 h-1 w-9 rounded-full bg-[#d4af37]" />

          {/* Arabic & Islamic Studies */}
          <div className="mt-4 border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
              Arabic & Islamic Studies
            </span>

            <h4 className="mt-2 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
              Faith, Values & Modern Education
            </h4>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

            <p className="mt-4 text-justify text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
              The school focuses on combining revealed knowledge with modern scientific
              understanding, helping students develop academic knowledge together with values and a
              broader understanding of contemporary society.
            </p>
          </div>

          {/* Programme Description */}
          <div className="mt-4 space-y-3 text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
            <p>
              The BA Islamic Studies programme provides students with an opportunity to develop a
              structured understanding of Islamic studies through flexible distance education. The
              programme is designed to support learners through accessible academic resources and a
              flexible learning environment.
            </p>

            <p>
              Students can access their academic resources through the learning platform while
              receiving support throughout their programme.
            </p>
          </div>
        </div>

        {/* Single Compact Green Apply Now CTA */}
        <section className="mt-4 rounded-2xl bg-[#0d5c45] px-4 py-4 text-center sm:px-6 sm:py-5">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Ready to begin?
          </h3>

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
      </section>
    </ProgrammePageTemplate>
  );
}

export default BAIslamicStudiesPage;