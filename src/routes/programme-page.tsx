import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Download, GraduationCap } from "lucide-react";

import { NotFoundPage } from "@/components/app/AppFallbacks";
import { EnquiryForm as ChatbotEnquiryForm } from "@/components/college-navigator-chatbot";
import { FacultyDirectory } from "@/components/site/FacultyDirectory";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ProgrammeOverview } from "@/components/site/ProgrammeOverview";
import {
  ProgrammePageTemplate,
  ProgrammeSidebarNavigation,
} from "@/components/site/ProgrammePageTemplate";
import {
  ProgrammeSyllabusLayout,
  SyllabusBackLink,
  SyllabusCreditSummary,
  SyllabusPageNote,
} from "@/components/site/ProgrammeSyllabusLayout";
import { SyllabusDownloadDialog } from "@/components/site/SyllabusDownloadDialog";
import { SyllabusSemesterTable } from "@/components/site/SyllabusSemesterTable";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getCourseInfo, getFacultyForCourse, getProgrammePageConfig } from "@/data/programmes";
import { circularFont } from "@/lib/fonts";

function ProgrammeOverviewRoute({ slug }: { slug: string }) {
  const programme = getCourseInfo(slug);
  if (!programme?.overview) return null;
  const pageConfig = getProgrammePageConfig(programme);

  return (
    <ProgrammePageTemplate
      {...pageConfig}
      actions={pageConfig.showActionsOnOverview === false ? [] : pageConfig.actions}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgrammeOverview {...programme.overview} theme={programme.theme ?? "blue"} />
      </section>
    </ProgrammePageTemplate>
  );
}

function ProgrammePeopleRoute({ slug }: { slug: string }) {
  const programme = getCourseInfo(slug);
  const people = programme?.people;
  if (!programme || !people) return null;
  const pageConfig = getProgrammePageConfig(programme);

  const faculty = getFacultyForCourse(slug);
  const isGreen = people.layout === "green";
  const theme = isGreen ? "green" : "blue";

  return (
    <SiteLayout>
      <div
        style={circularFont}
        className={
          isGreen
            ? "min-h-screen bg-[#F7F8F4] text-[#111111]"
            : "min-h-screen bg-white text-[#111111]"
        }
      >
        {isGreen ? (
          <section className="relative overflow-hidden bg-[#0d5c45]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]" />
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl" />
            <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
              <Link
                to={people.backTo}
                className="group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
              >
                <ArrowLeft className="size-4" />
                {people.backLabel}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>

              <div className="max-w-4xl">
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#f4d979]">
                  {programme.level} Programme
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
                  People
                </h1>
                <div className="mt-1.5 h-1 w-12 rounded-full bg-[#d4af37]" />
                <p className="mt-2 max-w-3xl text-sm leading-5 text-white/80 sm:text-base sm:leading-6">
                  {people.heroDescription}
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
        ) : (
          <section className="bg-gradient-to-r from-[#334b7c] via-[#2b416d] to-[#23365c] text-white">
            <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
              <div className="mb-3">
                <Link
                  to={people.backTo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {people.backLabel}
                </Link>
              </div>
              <div className="max-w-4xl">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
                  {programme.level} Programme
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  People
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                  {people.heroDescription}
                </p>
              </div>
            </div>
          </section>
        )}

        <section
          className={
            isGreen
              ? "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-12"
              : "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8"
          }
        >
          <ProgrammeSidebarNavigation
            variant={theme}
            navigationLabel={pageConfig.navigationLabel}
            navigation={pageConfig.navigation}
            activeTitle="People"
          />
          <main className={isGreen ? "min-w-0 py-2 md:py-4" : "min-w-0 py-2 sm:py-4"}>
            <div className={isGreen ? "mb-7" : "mb-6"}>
              <div
                className={
                  isGreen
                    ? "mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F4E]"
                    : "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#334b7c] sm:text-sm"
                }
              >
                <span className={isGreen ? "h-px w-7 bg-[#D4AF37]" : "h-px w-6 bg-[#D4AF37]"} />
                Faculty Team
              </div>
              <h2
                className={
                  isGreen
                    ? "text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-[-0.02em]"
                    : "text-2xl font-bold leading-tight sm:text-3xl"
                }
              >
                {people.heading}
              </h2>
              <p
                className={
                  isGreen
                    ? "mt-2 max-w-2xl text-[clamp(0.9rem,1.4vw,1rem)] leading-6 text-black/60"
                    : "mt-2 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7"
                }
              >
                {people.description}
              </p>
            </div>

            <FacultyDirectory
              faculty={faculty}
              theme={theme}
              programmeBadge={people.programmeBadge}
              programmeName={people.programmeName}
              profileLinkLabel={people.profileLinkLabel}
              profileLinkDescription={people.profileLinkDescription}
            />

            <div
              className={
                isGreen
                  ? "mt-7 flex items-start gap-3 rounded-2xl border border-[#2F6F4E]/10 bg-[#2F6F4E]/5 px-5 py-4"
                  : "mt-6 flex items-start gap-3 rounded-xl border border-[#334b7c]/10 bg-[#334b7c]/5 px-4 py-4 sm:items-center sm:px-5"
              }
            >
              <BookOpen
                className={
                  isGreen
                    ? "mt-0.5 h-5 w-5 shrink-0 text-[#2F6F4E]"
                    : "mt-0.5 size-5 shrink-0 text-[#334b7c] sm:mt-0"
                }
              />
              <p
                className={
                  isGreen
                    ? "text-sm leading-6 text-black/60"
                    : "text-sm leading-6 text-black/65 sm:text-base sm:leading-7"
                }
              >
                {people.footerMessage}
              </p>
            </div>
          </main>
        </section>
      </div>
    </SiteLayout>
  );
}

function ProgrammeSyllabusRoute({ slug }: { slug: string }) {
  const programme = getCourseInfo(slug);
  const syllabus = programme?.syllabus;
  const pageConfig = programme ? getProgrammePageConfig(programme) : undefined;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  if (!programme || !syllabus || !pageConfig) return null;

  const openDownload = () => {
    setUnlocked(false);
    setDialogOpen(true);
  };
  const closeDownload = () => setDialogOpen(false);
  const summaryTheme = syllabus.download.theme === "green" ? "green" : "blue";

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-white">
        <section
          className={`${
            syllabus.download.theme === "green" ? "bg-[#0d5c45]" : "bg-[#334b7c]"
          } px-5 py-6 text-white sm:px-8 sm:py-7`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to={programme.landingRoute ?? programme.listingRoute}
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to {programme.name}
              </Link>
            </div>
            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                {syllabus.label}
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Syllabus</h1>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                {syllabus.description}
              </p>
              <button
                type="button"
                onClick={openDownload}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-3.5 py-2 text-xs font-bold text-[#111111] shadow-sm transition-all hover:bg-[#e2c45a]"
              >
                <Download size={15} />
                Download Syllabus PDF
              </button>
            </div>
          </div>
        </section>

        <ProgrammeSyllabusLayout
          variant={programme.theme ?? "blue"}
          navigationLabel={pageConfig.navigationLabel}
          navigation={pageConfig.navigation}
          title={syllabus.heading}
          notice={syllabus.notice}
          downloadLabel={syllabus.downloadLabel}
          onDownload={openDownload}
        >
          {syllabus.tables.map((table) => (
            <SyllabusSemesterTable
              key={table.semester}
              semester={table.semester}
              courses={table.courses}
              total={table.total}
              categoryHeading={table.categoryHeading}
              theme={table.theme}
            />
          ))}
          <SyllabusCreditSummary credits={syllabus.totalCredits} variant={summaryTheme} />
          {syllabus.note && (
            <SyllabusPageNote>
              <span className="font-bold text-[#8f1d1d]">Note:</span> {syllabus.note}
            </SyllabusPageNote>
          )}
          {syllabus.electiveSection && (
            <>
              <div className="mb-7">
                <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />
                <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
                  {syllabus.electiveSection.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {syllabus.electiveSection.description}
                </p>
              </div>
              {syllabus.electiveSection.tables.map((table) => (
                <SyllabusSemesterTable
                  key={table.semester}
                  semester={table.semester}
                  courses={table.courses}
                  total={table.total}
                  categoryHeading={table.categoryHeading}
                  theme={table.theme}
                />
              ))}
            </>
          )}
          <SyllabusBackLink to={programme.landingRoute ?? programme.listingRoute} />
        </ProgrammeSyllabusLayout>

        <SyllabusDownloadDialog
          open={dialogOpen}
          unlocked={unlocked}
          title={syllabus.download.title}
          description={syllabus.download.description}
          successDescription={syllabus.download.successDescription}
          pdfHref={syllabus.download.pdfHref}
          theme={syllabus.download.theme}
          onClose={closeDownload}
        >
          {syllabus.download.form === "chatbot" ? (
            <ChatbotEnquiryForm onSubmitted={() => setUnlocked(true)} />
          ) : (
            <EnquiryForm onSubmitted={() => setUnlocked(true)} />
          )}
        </SyllabusDownloadDialog>
      </main>
    </SiteLayout>
  );
}

export default function ProgrammeRoutePage() {
  const { programmeSlug = "", programmePage } = useParams();
  const page = programmePage ?? "overview";
  const programme = getCourseInfo(programmeSlug);
  if (!programme?.landingRoute) return <NotFoundPage />;
  if (page === "overview") {
    return programme.features?.overview !== false && programme.overview && programme.pageConfig ? (
      <ProgrammeOverviewRoute slug={programmeSlug} />
    ) : (
      <NotFoundPage />
    );
  }
  if (page === "people") {
    return programme.features?.people !== false &&
      programme.people &&
      programme.pageConfig &&
      programme.faculty ? (
      <ProgrammePeopleRoute slug={programmeSlug} />
    ) : (
      <NotFoundPage />
    );
  }
  if (page === "syllabus") {
    return programme.features?.syllabus !== false && programme.syllabus && programme.pageConfig ? (
      <ProgrammeSyllabusRoute slug={programmeSlug} />
    ) : (
      <NotFoundPage />
    );
  }
  return <NotFoundPage />;
}
