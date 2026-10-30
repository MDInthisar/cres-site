import { SiteLayout } from "@/components/site/SiteLayout";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { type CourseSection } from "@/components/site/CourseInfoLink";
import { getCourseInfo } from "@/data/courseInfo";
import {
  baIslamicStudiesProgrammePageConfig,
  mcaProgrammePageConfig,
  mbaProgrammePageConfig,
} from "@/data/programmePageConfigs";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, FileText, Target } from "lucide-react";

const sectionTitles: Record<CourseSection, string> = {
  vision: "Vision",
  mission: "Mission",
  "eligibility-fee": "Eligibility & Fee",
};

function isCourseSection(section: string): section is CourseSection {
  return Object.prototype.hasOwnProperty.call(sectionTitles, section);
}

function CourseSectionContent({
  course,
  currentSection,
  Icon,
  compact = false,
  showSectionNavigation = true,
  accentColor = "green",
}: {
  course: NonNullable<ReturnType<typeof getCourseInfo>>;
  currentSection: CourseSection;
  Icon: typeof Eye;
  compact?: boolean;
  showSectionNavigation?: boolean;
  accentColor?: "green" | "blue";
}) {
  const isBlue = accentColor === "blue";
  const visionIconClass = isBlue
    ? "bg-[#334b7c]/10 text-[#334b7c]"
    : "bg-[#1d355f]/10 text-[#1d355f]";
  const missionIconClass = isBlue
    ? "bg-[#334b7c]/10 text-[#334b7c]"
    : "bg-[#8f1d1d]/10 text-[#8f1d1d]";
  const eligibilityIconClass = isBlue
    ? "bg-[#334b7c]/10 text-[#334b7c]"
    : "bg-[#0d5c45]/10 text-[#0d5c45]";
  const accentTextClass = isBlue ? "text-[#334b7c]" : "text-[#0d5c45]";
  const accentHoverClass = isBlue
    ? "hover:border-[#334b7c] hover:text-[#334b7c]"
    : "hover:border-[#0d5c45] hover:text-[#0d5c45]";
  const feeHeaderClass = isBlue ? "bg-[#334b7c]" : "bg-[#1d355f]";
  const missionCheckClass = isBlue ? "text-[#334b7c]" : "text-[#0d5c45]";

  return (
    <>
      <article
        className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${
          compact ? "p-5 sm:p-7" : "p-6 sm:p-8"
        }`}
      >
        {currentSection === "vision" && (
          <>
            <div className="flex items-center gap-3">
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${visionIconClass}`}
              >
                <Icon className="size-5" />
              </span>
              <h2 className={compact ? "text-xl font-bold sm:text-2xl" : "text-2xl font-bold"}>
                Academic Vision
              </h2>
            </div>
            <p
              className={
                compact
                  ? "mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base"
                  : "mt-5 max-w-4xl text-base leading-8 text-slate-700"
              }
            >
              {course.vision}
            </p>
          </>
        )}

        {currentSection === "mission" && (
          <>
            <div className="flex items-center gap-3">
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${missionIconClass}`}
              >
                <Icon className="size-5" />
              </span>
              <h2 className={compact ? "text-xl font-bold sm:text-2xl" : "text-2xl font-bold"}>
                Our Mission
              </h2>
            </div>
            <ul className="mt-5 space-y-4">
              {course.mission.map((item) => (
                <li
                  key={item}
                  className={`flex gap-3 leading-7 text-slate-700 ${
                    compact ? "text-sm sm:text-base" : ""
                  }`}
                >
                  <CheckCircle2 className={`mt-1 size-5 shrink-0 ${missionCheckClass}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {currentSection === "eligibility-fee" && (
          <>
            <div className="flex items-center gap-3">
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${eligibilityIconClass}`}
              >
                <Icon className="size-5" />
              </span>
              <h2 className={compact ? "text-xl font-bold sm:text-2xl" : "text-2xl font-bold"}>
                Eligibility for Admission
              </h2>
            </div>
            <p
              className={
                compact
                  ? "mt-5 text-sm leading-7 text-slate-700 sm:text-base"
                  : "mt-5 leading-7 text-slate-700"
              }
            >
              {course.eligibility}
            </p>

            <div
              className={
                compact
                  ? "mt-7 border-t border-slate-200 pt-5"
                  : "mt-8 border-t border-slate-200 pt-6"
              }
            >
              <h2 className={compact ? "text-xl font-bold sm:text-2xl" : "text-2xl font-bold"}>
                Fee Structure
              </h2>
              {course.fees ? (
                <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                  <table
                    className={
                      compact
                        ? `w-full table-fixed border-collapse text-left text-sm ${
                            course.fees.foreignApplication ? "min-w-[480px]" : ""
                          }`
                        : "w-full min-w-[360px] border-collapse text-left"
                    }
                  >
                    <thead className={`${feeHeaderClass} text-white`}>
                      <tr>
                        <th className="px-4 py-3 font-semibold">Particulars</th>
                        <th className="px-4 py-3 text-right font-semibold">Indian Nationals</th>
                        {course.fees.foreignApplication && (
                          <th className="px-4 py-3 text-right font-semibold">Foreign Nationals</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="px-4 py-3">Application Fee</td>
                        <td className="px-4 py-3 text-right">{course.fees.application}</td>
                        {course.fees.foreignApplication && (
                          <td className="px-4 py-3 text-right">{course.fees.foreignApplication}</td>
                        )}
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Tuition Fee</td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {course.fees.tuition}
                        </td>
                        {course.fees.foreignTuition && (
                          <td className="px-4 py-3 text-right font-semibold">
                            {course.fees.foreignTuition}
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p
                  className={
                    compact
                      ? "mt-3 text-sm leading-7 text-slate-700 sm:text-base"
                      : "mt-3 leading-7 text-slate-700"
                  }
                >
                  Fee details for this programme have not been published here. Please contact the
                  Admissions Office for the current fee schedule.
                </p>
              )}
              <Link
                to="/contact"
                className={`mt-5 inline-flex items-center gap-2 font-semibold ${accentTextClass} hover:underline ${
                  compact ? "text-sm" : ""
                }`}
              >
                Contact Admissions <ArrowRight className="size-4" />
              </Link>
            </div>
          </>
        )}
      </article>

      {showSectionNavigation && (
        <nav
          aria-label="Course information pages"
          className={`flex flex-wrap gap-3 ${compact ? "mt-4" : "mt-5"}`}
        >
          {(Object.keys(sectionTitles) as CourseSection[])
            .filter((item) => item !== currentSection)
            .map((item) => (
              <Link
                key={item}
                to={`/course-info/${encodeURIComponent(course.slug)}/${encodeURIComponent(item)}`}
                className={`rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium ${accentHoverClass}`}
              >
                {sectionTitles[item]}
              </Link>
            ))}
        </nav>
      )}
    </>
  );
}

function CourseSectionPage() {
  const { courseSlug, section } = useParams();
  const course = getCourseInfo(courseSlug ?? "");

  if (!course || !section || !isCourseSection(section)) {
    return (
      <SiteLayout>
        <main className="mx-auto min-h-[60vh] max-w-4xl px-5 py-16">
          <h1 className="text-2xl font-bold">Course information not found</h1>
          <Link to="/programmes" className="mt-4 inline-flex text-[#0d5c45] underline">
            Browse programmes
          </Link>
        </main>
      </SiteLayout>
    );
  }

  const currentSection = section;
  const Icon = currentSection === "vision" ? Eye : currentSection === "mission" ? Target : FileText;
  const isBAIslamicStudies = course.slug === "ba-islamic-studies";
  const isMBAorMCA = course.slug === "mba" || course.slug === "mca";

  if (isBAIslamicStudies || isMBAorMCA) {
    const programmeConfig =
      course.slug === "mba"
        ? mbaProgrammePageConfig
        : course.slug === "mca"
          ? mcaProgrammePageConfig
          : baIslamicStudiesProgrammePageConfig;

    return (
      <ProgrammePageTemplate {...programmeConfig} actions={[]}>
        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
          <CourseSectionContent
            course={course}
            currentSection={currentSection}
            Icon={Icon}
            compact
            showSectionNavigation={false}
            accentColor={isMBAorMCA ? "blue" : "green"}
          />
        </section>
      </ProgrammePageTemplate>
    );
  }

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]">
        <section className="bg-[#0d5c45] text-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
            <Link
              to={`/course-info/${encodeURIComponent(course.slug)}`}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to {course.name}
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d979]">
              {course.name}
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-5xl">{sectionTitles[currentSection]}</h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <CourseSectionContent course={course} currentSection={currentSection} Icon={Icon} />
        </section>
      </main>
    </SiteLayout>
  );
}

export default CourseSectionPage;
