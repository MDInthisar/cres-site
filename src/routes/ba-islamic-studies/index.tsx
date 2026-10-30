
import { Link } from "react-router-dom";
import campusImage from "@/assets/campus-1.jpg";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

function BAIslamicStudiesPage() {
  return (
    <ProgrammePageTemplate {...baIslamicStudiesProgrammePageConfig}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Overview */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Main Image */}
          <div className="w-full min-w-0">
            <div className="relative aspect-[5/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#17130f] shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
              <img
                src="https://distance.crescent-institute.edu.in/img/bais/main.jpg"
                alt="B.S. Abdur Rahman Crescent Institute of Science and Technology campus"
                className="absolute inset-0 h-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
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

        {/* Campus Image and Institution Overview */}
        <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e8ede8] sm:aspect-[16/7]">
            <img
              src={campusImage}
              alt="Students in a campus building at Crescent Institute"
              className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
              loading="lazy"
            />
          </div>
          <div className="p-5 sm:p-6">
            <h2 className="text-xl font-bold leading-7 text-[#17234b] sm:text-2xl">
              B.S. Abdur Rahman Crescent Institute of Science &amp; Technology
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
              Since 1984, Crescent Institute has provided a wide range of educational
              opportunities near Tambaram, in one of Chennai&apos;s greenest areas. Its academic
              community brings together undergraduate and postgraduate programmes across a range
              of disciplines, supporting students in their learning and personal growth.
            </p>
          </div>
        </section>

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
