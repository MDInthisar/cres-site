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
} from "@/components/site/ProgrammeSyllabusLayout";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";
import {
  SyllabusSemesterTable as SemesterTable,
  type SyllabusCourse as Course,
} from "@/components/site/SyllabusSemesterTable";

const SYLLABUS_PDF = "/pdfs/ba-islamic-studies-syllabus.pdf";

const semester1: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 1101",
    title: "Basic Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "AECC",
    code: "ISD 1102",
    title: "Communicative English",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 1103",
    title: "Introduction to Quranic Studies",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CC",
    code: "ISD 1104",
    title: "Guidance of Prophet – Moral & Ethics",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "DSE",
    code: "SD 1105",
    title: "Fiqh al Adillah-Ibadath",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 1106",
    title: "Basic Arabic Grammar",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "SEC",
    code: "ISD 1107",
    title: "Arabic Comprehension",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
];

const semester2: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 1211",
    title: "Basic Communicative Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "AECC",
    code: "ISD 1212",
    title: "Advanced Communicative English",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 1213",
    title: "Quran Exegesis: Albaqara-II",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CC",
    code: "ISD 1214",
    title: "Hadeeth - Teachings of Prophet",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 1215",
    title: "Islamic Doctrine - Aqeedah",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 1216",
    title: "Advanced Arabic Grammar",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "DSE",
    code: "ISD 1217",
    title: "Islamic History: Seerah & Caliphate Period",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester3: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 2101",
    title: "Advanced Communicative Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 2102",
    title: "Quran Exegesis: Ala Imran & Al Nisa",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 2103",
    title: "A Study on Abu Dawood",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 2104",
    title: "Islamic Fiqh: Al Muamalath",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "SEC",
    code: "ISD 2105",
    title: "Principles of Jurisprudence: Al Adillah",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "DSE",
    code: "ISD 2106",
    title: "Islamic History: Umayyad & Abbasids Period",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective - I",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester4: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 2211 / ISD 2221",
    title: "Arabic Prose & Poetry",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 2212",
    title: "Quran Exegesis: Muminoon, Noor and Hujurat",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 2213",
    title: "Hadeeth: Sunan At Tirmidhi",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 2214",
    title: "Muslim Personal Law: Inheritance & Waqf",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "SEC",
    code: "ISD 2215",
    title: "Principles of Jurisprudence: Al Qawayid Development of Islamic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 2216",
    title: "Religious Sciences: Tafseer & Hadeeth",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective II",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "GED 2204",
    title: "Aptitude and Workplace Skills",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

const semester5: Course[] = [
  {
    no: 1,
    category: "CC",
    code: "ISD 3101",
    title: "Shariah Rulings in Chapter Al Maidah",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 3102",
    title: "A Special Study on Saheeh Muslim",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "DSE",
    code: "ISD 3103",
    title: "Muslim Family Law",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 3104",
    title: "Comparative Fiqh",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 3105",
    title: "History of Islamic Thought",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 3106",
    title: "Business Arabic and Translation",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "DSE",
    code: "ISD 3107",
    title: "Indian Constitution: Minority Rights",
    l: 1,
    t: 0,
    p: 0,
    credits: 1,
  },
  {
    no: 8,
    category: "GE",
    code: "",
    title: "Elective - III",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester6: Course[] = [
  {
    no: 1,
    category: "CC",
    code: "ISD 3211",
    title: "Thematic Study of Quran",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 3212",
    title: "A Special Study on Saheeh Al Bukhar",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "DSE",
    code: "ISD 3213",
    title: "Quran and Modern Issues",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 3214",
    title: "Dawa’h & Comparative Religion",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 3215",
    title: "History of Modern Arabic Literature",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "DSE",
    code: "ISD 3216",
    title: "Fiqh Methodology of Imams",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective IV",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "",
    title: "Elective - V",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives3: Course[] = [
  {
    no: 1,
    category: "GE",
    code: "ISDX 01",
    title: "Art of Quran recitation and Memorization",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "GE",
    code: "ISDX 02",
    title: "Arabic Rhetoric",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "GE",
    code: "ISDX 03",
    title: "Arabic Morphology",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives4: Course[] = [
  {
    no: 4,
    category: "GE",
    code: "ISDX 04",
    title: "Fundamentals of Islamic Finance",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "GE",
    code: "ISDX 05",
    title: "Islamic Banking: Products & Services",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "GE",
    code: "ISDX 06",
    title: "Islamic Philosophy",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives5: Course[] = [
  {
    no: 7,
    category: "GE",
    code: "ISDX 07",
    title: "Islamic Insurance (Takaful)",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "ISDX 08",
    title: "Islamic Capital Market",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 9,
    category: "GE",
    code: "ISDX 09",
    title: "Advent of Islam in South India",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 10,
    category: "GE",
    code: "ISDX 10",
    title: "History of Andalusia (Spain)",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives6: Course[] = [
  {
    no: 11,
    category: "GE",
    code: "ISDX 11",
    title: "Arabic Translation & SAP",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 12,
    category: "GE",
    code: "ISDX 12",
    title: "Muslims in India & Plural Society",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 13,
    category: "GE",
    code: "ISDX 13",
    title: "Islamic Ethics",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 14,
    category: "GE",
    code: "ISDX 14",
    title: "History of Ottoman Caliphate",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

function SyllabusPage() {
  const syllabusDownload = useSyllabusDownload();

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-white">
        {/* Compact Header */}
        <section className="bg-[#0d5c45] px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to="/ba-islamic-studies"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to BA Islamic Studies
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                B.A. Islamic Studies
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Syllabus</h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                Detailed semester-wise syllabus, course structure, credits and elective courses for
                the B.A. Islamic Studies programme.
              </p>

              {/* Header Download - Opens Form */}
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

        {/* Content */}
        <ProgrammeSyllabusLayout
          variant="ba-islamic-studies"
          navigation={baIslamicStudiesProgrammePageConfig.navigation}
          title="B.A. Islamic Studies"
          notice="Click Here To Download Our BA Islamic Studies Syllabus"
          downloadLabel="BA Islamic Studies Syllabus PDF"
          onDownload={syllabusDownload.show}
        >
          {/* Semester I */}
          <SemesterTable semester="SEMESTER Ⅰ" courses={semester1} total={22} theme="green" />

          {/* Semester II */}
          <SemesterTable semester="SEMESTER Ⅱ" courses={semester2} total={22} theme="green" />

          {/* Semester III */}
          <SemesterTable semester="SEMESTER Ⅲ" courses={semester3} total={24} theme="green" />

          {/* Semester IV */}
          <SemesterTable semester="SEMESTER Ⅳ" courses={semester4} total={24} theme="green" />

          {/* Semester V */}
          <SemesterTable semester="SEMESTER V" courses={semester5} total={24} theme="green" />

          {/* Semester VI */}
          <SemesterTable semester="SEMESTER VI" courses={semester6} total={24} theme="green" />

          {/* Overall Total */}
          <SyllabusCreditSummary credits={140} variant="ba-islamic-studies" />

          {/* Elective Courses */}
          <div className="mb-7">
            <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />

            <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
              LIST OF ELECTIVE COURSES
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Elective courses available across the different semesters.
            </p>
          </div>

          {/* Semester III Electives */}
          <SemesterTable semester="Semester III" courses={electives3} total={9} theme="green" />

          {/* Semester IV Electives */}
          <SemesterTable semester="Semester IV" courses={electives4} total={9} theme="green" />

          {/* Semester V Electives */}
          <SemesterTable semester="Semester V" courses={electives5} total={12} theme="green" />

          {/* Semester VI Electives */}
          <SemesterTable semester="Semester VI" courses={electives6} total={12} theme="green" />

          {/* Bottom navigation */}
          <SyllabusBackLink to="/ba-islamic-studies" />
        </ProgrammeSyllabusLayout>

        <SyllabusDownloadDialog
          open={syllabusDownload.open}
          unlocked={syllabusDownload.unlocked}
          title="Download BA Islamic Studies Syllabus"
          description="Please fill in your details to access the syllabus PDF."
          successDescription="Thank you for submitting your details. You can now download the BA Islamic Studies syllabus."
          pdfHref={SYLLABUS_PDF}
          theme="green"
          onClose={syllabusDownload.close}
        >
          <EnquiryForm onSubmitted={syllabusDownload.unlock} />
        </SyllabusDownloadDialog>
      </main>
    </SiteLayout>
  );
}

export default SyllabusPage;
