import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, GraduationCap } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { EnquiryForm } from "@/components/college-navigator-chatbot";
import { SyllabusDownloadDialog } from "@/components/site/SyllabusDownloadDialog";
import { useSyllabusDownload } from "@/components/site/useSyllabusDownload";
import {
  ProgrammeSyllabusLayout,
  SyllabusBackLink,
  SyllabusCreditSummary,
  SyllabusPageNote,
} from "@/components/site/ProgrammeSyllabusLayout";
import { mbaProgrammePageConfig } from "@/data/programmePageConfigs";
import {
  SyllabusSemesterTable as SemesterTable,
  type SyllabusCourse as Course,
} from "@/components/site/SyllabusSemesterTable";

const SYLLABUS_PDF = "/pdfs/mba-syllabus.pdf";

/* =========================================================
   SEMESTER I
========================================================= */

const semester1: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 6101",
    title: "Management Concepts",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CORE",
    code: "MSE 6102",
    title: "Managerial Economics",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CORE",
    code: "MSE 6103",
    title: "Statistics for Decision making",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CORE",
    code: "MSE 6104",
    title: "Accounting for Managers",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "CORE",
    code: "MSE 6105",
    title: "Organisational Behaviour",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 6,
    category: "CORE",
    code: "MSE 6106",
    title: "Legal Aspects of Business",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 7,
    category: "CORE",
    code: "MSE 6107",
    title: "Entrepreneurship Development",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 8,
    category: "PRACTICAL",
    code: "MSE 6108",
    title: "Computer applications in Business Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PRACTICAL",
    code: "MSE 6109",
    title: "Business Communication Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

/* =========================================================
   SEMESTER II
========================================================= */

const semester2: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 6201",
    title: "Strategic Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CORE",
    code: "MSE 6202",
    title: "Human Resources Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CORE",
    code: "MSE 6203",
    title: "Corporate Finance",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CORE",
    code: "MSE 6204",
    title: "Operations Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "CORE",
    code: "MSE 6205",
    title: "Marketing Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 6,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective I",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 7,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective II",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 8,
    category: "PRACTICAL",
    code: "MSE 6206",
    title: "Current Affairs in Business Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PRACTICAL",
    code: "MSE 6207",
    title: "Psychometrics and Corporate connect Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

/* =========================================================
   SEMESTER III
========================================================= */

const semester3: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 7101",
    title: "Managing Disruptive Technologies",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective III",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 3,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective I",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 4,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective II",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 5,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective III",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 6,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective IV",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 7,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective V",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 8,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective VI",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 9,
    category: "INTERNSHIP",
    code: "MSE 7102",
    title: "Summer Internship *",
    l: 0,
    t: 0,
    p: 8,
    credits: 4,
  },
];

/* =========================================================
   SEMESTER IV
========================================================= */

const semester4: Course[] = [
  {
    no: 1,
    category: "PROJECT",
    code: "MSE 7201",
    title: "Project work",
    l: 0,
    t: 0,
    p: 16,
    credits: 8,
  },
  {
    no: 2,
    category: "MOOC",
    code: "—",
    title: "MOOC (General Management Course) *",
    l: "—",
    t: "—",
    p: "—",
    credits: 3,
  },
];

/* =========================================================
   MBA SYLLABUS PAGE
========================================================= */

function SyllabusPage() {
  const syllabusDownload = useSyllabusDownload();

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-white">
        {/* =================================================
            HEADER
        ================================================= */}

        <section className="bg-[#334b7c] px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to="/mba"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to MBA
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                M.B.A.
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Syllabus</h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                Detailed semester-wise syllabus, course structure, credits and elective courses for
                the Master of Business Administration programme.
              </p>

              {/* Header Download */}

              <button
                type="button"
                onClick={syllabusDownload.show}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-3.5 py-2 text-xs font-bold text-[#111111] shadow-sm transition-all hover:bg-[#e2c45a]"
              >
                <Download size={15} />
                Download Syllabus PDF
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            CONTENT
        ================================================= */}

        <ProgrammeSyllabusLayout
          variant="mba"
          navigation={mbaProgrammePageConfig.navigation}
          title="M.B.A."
          notice="Click Here To Download Our MBA Syllabus"
          downloadLabel="MBA Syllabus PDF"
          onDownload={syllabusDownload.show}
        >
          {/* =================================================
                SEMESTER I
            ================================================= */}

          <SemesterTable semester="SEMESTER Ⅰ" courses={semester1} total={30} />

          {/* =================================================
                SEMESTER II
            ================================================= */}

          <SemesterTable semester="SEMESTER Ⅱ" courses={semester2} total={30} />

          {/* =================================================
                SEMESTER III
            ================================================= */}

          <SemesterTable semester="SEMESTER Ⅲ" courses={semester3} total="Min: 36" />

          {/* =================================================
                SEMESTER IV
            ================================================= */}

          <SemesterTable semester="SEMESTER Ⅳ" courses={semester4} total="Min: 11" />

          {/* =================================================
                OVERALL TOTAL
            ================================================= */}

          <SyllabusCreditSummary credits={107} variant="mba" />

          {/* =================================================
                NOTE
            ================================================= */}

          <SyllabusPageNote>
            <span className="font-bold text-[#8f1d1d]">Note:</span> * indicates the applicable
            internship / MOOC component as specified in the programme structure.
          </SyllabusPageNote>

          {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

          <SyllabusBackLink to="/mba" />
        </ProgrammeSyllabusLayout>

        <SyllabusDownloadDialog
          open={syllabusDownload.open}
          unlocked={syllabusDownload.unlocked}
          title="Download MBA Syllabus"
          description="Please fill in your details to access the syllabus PDF."
          successDescription="Thank you for submitting your details. You can now download the MBA syllabus."
          pdfHref={SYLLABUS_PDF}
          theme="purple"
          onClose={syllabusDownload.close}
        >
          <EnquiryForm onSubmitted={syllabusDownload.unlock} />
        </SyllabusDownloadDialog>
      </main>
    </SiteLayout>
  );
}

/* =========================================================
   ROUTE
========================================================= */

export default SyllabusPage;
