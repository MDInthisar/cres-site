import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, GraduationCap } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SyllabusDownloadDialog } from "@/components/site/SyllabusDownloadDialog";
import { useSyllabusDownload } from "@/components/site/useSyllabusDownload";
import {
  ProgrammeSyllabusLayout,
  SyllabusBackLink,
  SyllabusCreditSummary,
  SyllabusPageNote,
} from "@/components/site/ProgrammeSyllabusLayout";
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";
import {
  SyllabusSemesterTable as SemesterTable,
  type SyllabusCourse as Course,
} from "@/components/site/SyllabusSemesterTable";

const SYLLABUS_PDF = "/pdfs/mca-syllabus.pdf";

/* =========================================================
   SEMESTER I
========================================================= */

const semester1: Course[] = [
  {
    no: 1,
    category: "MS",
    code: "MAD 6188",
    title: "Mathematical Foundation for Computer Applications",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "PC",
    code: "CAD 6121",
    title: "Computer Organization and Operating system",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "PC",
    code: "CAD 6122",
    title: "Database Management Systems",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 4,
    category: "PC",
    code: "CAD 6123",
    title: "Computer Networks",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "PC",
    code: "CAD 6124",
    title: "Data structures and Algorithms using C/C++",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "ES",
    code: "CAD6125",
    title: "Object Oriented Software Engineering",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "PC",
    code: "CAD 6126",
    title: "Data structures and Algorithms Laboratory using C/C++",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 8,
    category: "PC",
    code: "CAD 6127",
    title: "Programming in C and C++ Laboratory",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PC",
    code: "CAD 6128",
    title: "DBMS Laboratory",
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
    category: "PC",
    code: "CAD 6221",
    title: "Programming in Java",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "MS",
    code: "CAD 6222",
    title: "Resource Management Techniques",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "PC",
    code: "CAD 6223",
    title: "Cloud Computing",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 4,
    category: "PC",
    code: "CAD 6224",
    title: "Mobile Application Development",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "PC",
    code: "CAD 6225",
    title: "Introduction to Data Science",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "PE",
    code: "—",
    title: "Elective I",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "PC",
    code: "CAD 6226",
    title: "Communication Skills Laboratory",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 8,
    category: "PC",
    code: "CAD 6227",
    title: "Advanced Technology Laboratory (Cloud/Mobile/Data Science)",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PC",
    code: "CAD 6228",
    title: "Programming in JAVA Laboratory",
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
    category: "PC",
    code: "CAD 7121",
    title: "Python Programming",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "PC",
    code: "CAD 7122",
    title: "Block Chain Technologies",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "PC",
    code: "CAD 7123",
    title: "Big Data Analytics",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 4,
    category: "PC",
    code: "CAD 7124",
    title: "Machine Learning Techniques",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "PC",
    code: "CAD 7125",
    title: "Advanced Web Development and Services",
    l: 3,
    t: 0,
    p: 1,
    credits: 4,
  },
  {
    no: 6,
    category: "PE",
    code: "—",
    title: "Elective – II",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "MGT",
    code: "CAD 7126",
    title: "Customer Relationship Management",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "PC",
    code: "CAD 7127",
    title: "Python Programming Laboratory",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PI",
    code: "CAD 7128",
    title: "Mini Project",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

/* =========================================================
   SEMESTER IV
========================================================= */

const semester4: Course[] = [
  {
    no: 1,
    category: "PI",
    code: "CAD 7221",
    title: "Project",
    l: 0,
    t: 0,
    p: 36,
    credits: 18,
  },
];

/* =========================================================
   MCA SYLLABUS PAGE
========================================================= */

function SyllabusPage() {
  const syllabusDownload = useSyllabusDownload();

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-white">
        {/* HEADER */}

        <section className="bg-[#334b7c] px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to="/mca"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to MCA
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                M.C.A.
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Syllabus</h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                Detailed semester-wise syllabus, course structure, credits and elective courses for
                the Master of Computer Applications programme.
              </p>

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

        {/* CONTENT */}

        <ProgrammeSyllabusLayout
          variant="mca"
          navigation={mcaProgrammePageConfig.navigation}
          title="M.C.A."
          notice="Click Here To Download Our MCA Syllabus"
          downloadLabel="MCA Syllabus PDF"
          onDownload={syllabusDownload.show}
        >
          {/* SEMESTER I */}

          <SemesterTable
            semester="SEMESTER Ⅰ"
            courses={semester1}
            total={22}
            categoryHeading="Course Group"
          />

          {/* SEMESTER II */}

          <SemesterTable
            semester="SEMESTER Ⅱ"
            courses={semester2}
            total={22}
            categoryHeading="Course Group"
          />

          {/* SEMESTER III */}

          <SemesterTable
            semester="SEMESTER Ⅲ"
            courses={semester3}
            total={24}
            categoryHeading="Course Group"
          />

          {/* SEMESTER IV */}

          <SemesterTable
            semester="SEMESTER Ⅳ"
            courses={semester4}
            total="Min: 86"
            categoryHeading="Course Group"
          />

          {/* OVERALL TOTAL */}

          <SyllabusCreditSummary credits={86} variant="mca" />

          {/* NOTE */}

          <SyllabusPageNote>
            <span className="font-bold text-[#8f1d1d]">Note:</span> The programme includes core
            courses, professional electives, practical laboratory components, mini project and
            project work as specified in the MCA programme structure.
          </SyllabusPageNote>

          {/* BOTTOM NAVIGATION */}

          <SyllabusBackLink to="/mca" />
        </ProgrammeSyllabusLayout>

        <SyllabusDownloadDialog
          open={syllabusDownload.open}
          unlocked={syllabusDownload.unlocked}
          title="Download MCA Syllabus"
          description="Please fill in your details to access the syllabus PDF."
          successDescription="Thank you for submitting your details. You can now download the MCA syllabus."
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
