import islamicStudiesOverview from "@/assets/optimized/islamic-studies.webp";
import mbaOverview from "@/assets/optimized/MBA Leadership at Golden Hour.webp";
import mcaOverview from "@/assets/optimized/MCA Tech Workstation_ Coding and Innovation.webp";
import mbaBrochurePdf from "@/assets/ODL MBA Website Brochure09012026.pdf";
import mcaBrochurePdf from "@/assets/ODL MCA Website Brochure09012026.pdf";
import baIslamicBrochurePdf from "@/assets/ODL B.A. Islamic Studies Website Brochure09012026.pdf";
import mbaRegulationsPdf from "@/assets/DeanAA-MBA-MCA-ODL-and-OL-Regulations2021-24.11.2021-F.pdf";
import baIslamicRegulationsPdf from "@/assets/DeanAA-BAIslamic-StudiesR2021.pdf";
import agalyaPhoto from "@/assets/Agalya.jpeg";
import abdussamadPhoto from "@/assets/optimized/abdussamad.webp";
import ahamedullahPhoto from "@/assets/optimized/ahamedullah.webp";
import jeslinPhoto from "@/assets/optimized/jeslin.webp";
import maheshwariPhoto from "@/assets/optimized/maheshwari.webp";
import manjulaPhoto from "@/assets/optimized/manjula.webp";
import thowseafPhoto from "@/assets/optimized/thowseaf.webp";
import yasarPhoto from "@/assets/optimized/yasar-arafath.webp";

export type CourseSection = "vision" | "mission" | "eligibility-fee";

export type ProgrammeIconName =
  | "ArrowLeft"
  | "ArrowRight"
  | "BookOpen"
  | "Download"
  | "Eye"
  | "FileText"
  | "GraduationCap"
  | "Target"
  | "Users";

export type ProgrammeIconConfig = {
  name: ProgrammeIconName;
  size?: number;
  className?: string;
};

export type ProgrammeDestination =
  | { type: "courseInfo"; courseSlug: string; section: CourseSection }
  | { type: "route"; to: string; search?: { programme?: string } }
  | { type: "anchor"; href: string }
  | { type: "external"; href: string }
  | { type: "dialog" };

export type ProgrammeNavigationItem = {
  destination: ProgrammeDestination;
  icon: ProgrammeIconConfig;
  title: string;
  description: string;
  iconClassName: string;
};

export type ProgrammeActionItem = {
  destination: ProgrammeDestination;
  icon: ProgrammeIconConfig;
  title: string;
  iconClassName?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
  trailingIcon?: ProgrammeIconConfig;
};

export type ProgrammePageConfig = {
  variant: "blue" | "green" | "generic";
  layout?: "programme" | "generic";
  density?: "compact" | "standard";
  navigationLabel?: string;
  showActionsOnOverview?: boolean;
  ctaPlacement?: "inside" | "outside";
  mainClassName: string;
  hero: {
    backIcon: ProgrammeIconConfig;
    badgeIcon: ProgrammeIconConfig;
    badge: string;
    title: string;
    description: string;
    applyIcon: ProgrammeIconConfig;
    applyTo: string;
    applyHash?: string;
  };
  navigation: ProgrammeNavigationItem[];
  actions: ProgrammeActionItem[];
  cta?: {
    label: string;
    title: string;
    to: string;
    linkText: string;
    icon: ProgrammeIconConfig | null;
  };
  brochureDialog?: {
    title: string;
    description: string;
    idPrefix: string;
    downloadHref: string;
    downloadLabel: string;
  };
};

export type ProgrammeOverviewContent = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  programmeLabel: string;
  department: string;
  paragraphs: string[];
  additionalSections?: {
    eyebrow: string;
    title: string;
    highlight?: {
      label: string;
      title: string;
      paragraph: string;
    };
    paragraphs: string[];
  }[];
  cta?: {
    title: string;
    label: string;
    to: string;
    linkText: string;
  };
};

export type SyllabusCourse = {
  no: number;
  category: string;
  code: string;
  title: string;
  l: number | string;
  t: number | string;
  p: number | string;
  credits: number;
};

export type SyllabusTableConfig = {
  semester: string;
  courses: SyllabusCourse[];
  total: number | string;
  categoryHeading?: string;
  theme?: "purple" | "green";
};

export type ProgrammeSyllabusConfig = {
  label: string;
  description: string;
  heading: string;
  notice: string;
  downloadLabel: string;
  totalCredits: number;
  note?: string;
  tables: SyllabusTableConfig[];
  electiveSection?: {
    title: string;
    description: string;
    tables: SyllabusTableConfig[];
  };
  download: {
    pdfHref: string;
    title: string;
    description: string;
    successDescription: string;
    theme: "purple" | "green";
  };
};

export type ProgrammePeopleConfig = {
  facultyCourseName?: string;
  layout: "standard" | "green";
  backLabel: string;
  backTo: string;
  heroDescription: string;
  heading: string;
  description: string;
  programmeBadge: string;
  programmeName: string;
  profileLinkLabel: string;
  profileLinkDescription: string;
  footerMessage: string;
};

export type ProgrammeMetadata = {
  title: string;
  description: string;
  canonicalPath: string;
  pages: {
    overview: { title: string; description: string };
    people: { title: string; description: string };
    syllabus: { title: string; description: string };
  };
  sections: Partial<Record<CourseSection, { title: string; description: string }>>;
};

export type ProgrammeMetadataPage = "overview" | "people" | "syllabus" | CourseSection;

export type FacultyProfile = {
  slug: string;
  name: string;
  designation: string;
  natureOfEmployment?: string;
  qualification?: string;
  phone?: string;
  email?: string;
  biography?: string;
  additionalInformation?: Array<{
    label: string;
    value: string;
  }>;
  photo: string;
  detailedProfile?: {
    education: string[];
    experience: string[];
    teachingCourses?: string[];
    researchInterests: string[];
    supervision: string[];
    professionalActivities: string[];
    training: string[];
    books: string[];
    journalPublications: string[];
    conferencePublications: string[];
    conferencePresentations: string[];
    seminars?: string[];
    workshops: string[];
    invitedRoles: string[];
    awards: string[];
  };
};

export type ProgrammeFacultyProfile = FacultyProfile & {
  courseSlug: string;
  courseName: string;
};

export type ProgrammeCardPresentation = {
  compact?: boolean;
  accent?: "blue-red" | "blue-gold";
  brochureAvailable?: boolean;
};

export type ProgrammeStaffDirectoryConfig = {
  level: "ug" | "pg";
  profileDestination: "profile" | "programmePeople";
  cardStyle: "standard" | "rounded";
};

export type ProgrammeFeatures = {
  overview?: boolean;
  people?: boolean;
  syllabus?: boolean;
  courseInfoSections?: Partial<Record<CourseSection, boolean>>;
};

export type FacultyDirectoryEntry = ProgrammeFacultyProfile & {
  level: ProgrammeStaffDirectoryConfig["level"];
  theme: "blue" | "green";
  profileDestination: ProgrammeStaffDirectoryConfig["profileDestination"];
  cardStyle: ProgrammeStaffDirectoryConfig["cardStyle"];
};

export type CourseInfo = {
  slug: string;
  listingRoute: ProgrammePageRoute;
  landingRoute?: ProgrammeLandingRoute;
  name: string;
  fullName: string;
  level: "Undergraduate" | "Postgraduate" | "Certification";
  duration: string;
  eligibility: string;
  description: string;
  vision: string;
  mission: string[];
  fees?: {
    application: string;
    tuition: string;
    foreignApplication?: string;
    foreignTuition?: string;
  };
  listing: {
    description: string;
    eligibility: string;
  };
  faculty?: FacultyProfile[];
  staffDirectory?: ProgrammeStaffDirectoryConfig;
  features?: ProgrammeFeatures;
  overview?: ProgrammeOverviewContent;
  pageConfig?: ProgrammePageConfig;
  theme?: "blue" | "green";
  cardPresentation?: ProgrammeCardPresentation;
  people?: ProgrammePeopleConfig;
  syllabus?: ProgrammeSyllabusConfig;
  metadata?: ProgrammeMetadata;
};

export type ProgrammeLandingRoute = string;

export type ProgrammePageRoute = string;

export type ProgrammeListing = Pick<
  CourseInfo,
  "slug" | "name" | "level" | "duration" | "eligibility" | "landingRoute" | "theme"
> & {
  full: string;
  description: string;
  image: { src: string; width: number; height: number };
  cardPresentation?: ProgrammeCardPresentation;
};

type PageConfig = ProgrammePageConfig;

export function getGenericProgrammePageConfig(course: CourseInfo): PageConfig {
  return {
    variant: "generic",
    layout: "generic",
    mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
    hero: {
      backIcon: { name: "ArrowLeft", className: "size-4" },
      badgeIcon: { name: "GraduationCap", className: "size-4" },
      badge: `${course.level} Programme`,
      title: course.name,
      description: course.description,
      applyIcon: {
        name: "ArrowRight",
        className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
      },
      applyTo: "/admission",
    },
    navigation: [
      {
        destination: { type: "anchor", href: "#overview" },
        icon: { name: "BookOpen", className: "size-5" },
        title: "Overview",
        description: "Programme overview",
        iconClassName: sharedNavIconClass,
      },
      {
        destination: {
          type: "courseInfo",
          courseSlug: course.slug,
          section: "eligibility-fee",
        },
        icon: { name: "FileText", className: "size-5" },
        title: "Eligibility & Fee",
        description: "Admission details",
        iconClassName: missionIconClass,
      },
      {
        destination: { type: "courseInfo", courseSlug: course.slug, section: "vision" },
        icon: { name: "Eye", className: "size-5" },
        title: "Vision",
        description: "Academic vision",
        iconClassName: visionIconClass,
      },
      {
        destination: { type: "courseInfo", courseSlug: course.slug, section: "mission" },
        icon: { name: "Target", className: "size-5" },
        title: "Mission",
        description: "Programme mission",
        iconClassName: peopleIconClass,
      },
    ],
    actions: [
      {
        destination: {
          type: "courseInfo",
          courseSlug: course.slug,
          section: "eligibility-fee",
        },
        icon: { name: "FileText", className: "size-5" },
        title: "Eligibility & Fee",
        iconClassName: "bg-[#0d5c45]/10 text-[#0d5c45]",
      },
      {
        destination: { type: "route", to: "/admission" },
        icon: { name: "GraduationCap", className: "size-5" },
        title: "Apply Now",
        iconClassName: "bg-[#d4af37]/20 text-[#8a6d12]",
      },
    ],
    cta: {
      label: "Ready to begin?",
      title: `Apply for ${course.name}`,
      to: "/admission",
      linkText: "Apply Now",
      icon: {
        name: "ArrowRight",
        className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
      },
    },
  };
}

const sharedNavIconClass = "bg-[#0d5c45]/10 text-[#0d5c45]";
const blueNavIconClass = "bg-[#334b7c]/10 text-[#334b7c]";
const peopleIconClass = "bg-[#8f1d1d]/10 text-[#8f1d1d]";
const visionIconClass = "bg-[#1d355f]/10 text-[#1d355f]";
const missionIconClass = "bg-[#d4af37]/20 text-[#8a6d12]";

export const programmes = {
  "ba-islamic-studies": {
    slug: "ba-islamic-studies",
    listingRoute: "/ba-islamic-studies",
    landingRoute: "/ba-islamic-studies",
    name: "BA Islamic Studies",
    fullName: "Bachelor of Arts in Islamic Studies",
    level: "Undergraduate",
    duration: "3 Years",
    eligibility:
      "Higher Secondary Examination of the 10+2 curriculum (Academic stream), or an equivalent examination accepted by the Institution.",
    description: "Explore classical and contemporary Islamic thought, civilisation and ethics.",
    vision:
      "The school looks forward to be a leader in Arabic and Islamic Studies to promote graduates, capable of bringing about positive change for the betterment of self, family, society and humanity based on moderate approach of revealed knowledge and modern science.",
    mission: [
      "To empower the younger generation through quality education in both revealed and contemporary knowledge.",
      "To promote leadership quality and overall personality to face global challenges.",
      "To develop logical and creative thinking through research.",
      "To provide excellent ambience for language and soft skill development.",
    ],
    fees: {
      application: "₹1,000",
      tuition: "₹15,000 per year",
    },
    listing: {
      description: "Classical and contemporary Islamic thought, civilisation and ethics.",
      eligibility: "10+2 in any stream",
    },
    theme: "green",
    overview: {
      image: islamicStudiesOverview,
      imageWidth: 1536,
      imageHeight: 1024,
      imageAlt: "Islamic studies books and learning environment",
      title: "Bachelor of Arts in Islamic Studies",
      programmeLabel: "BA Islamic Studies",
      department: "Department of B.A. Islamic Studies",
      paragraphs: [
        "The school was established in 2009 with the vision of promoting faith and value based education by combining religious education and modern science. It was the dream of the founder Dr. B.S. Abdur Rahman to promote a set of younger generation equipped with both the revealed and scientific knowledge. By establishment of this school, his dream became true.",
        "The school offers UG, PG and Ph.D. programmes in Arabic and Islamic studies, aiming at bringing Islamic studies into the mainstream of modern education by combining revealed knowledge and modern science.",
      ],
      additionalSections: [
        {
          eyebrow: "Programme Information",
          title: "Bachelor of Arts in Islamic Studies",
          highlight: {
            label: "Arabic & Islamic Studies",
            title: "Faith, Values & Modern Education",
            paragraph:
              "The school focuses on combining revealed knowledge with modern scientific understanding, helping students develop academic knowledge together with values and a broader understanding of contemporary society.",
          },
          paragraphs: [
            "The BA Islamic Studies programme provides students with an opportunity to develop a structured understanding of Islamic studies through flexible distance education. The programme is designed to support learners through accessible academic resources and a flexible learning environment.",
            "Students can access their academic resources through the learning platform while receiving support throughout their programme.",
          ],
        },
      ],
      cta: {
        title: "Ready to begin?",
        label: "Apply for BA Islamic Studies",
        to: "/admission",
        linkText: "Apply Now",
      },
    },
    pageConfig: {
      variant: "green",
      layout: "programme",
      density: "compact",
      navigationLabel: "BA Islamic Studies",
      ctaPlacement: "outside",
      mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
      hero: {
        backIcon: { name: "ArrowLeft", className: "size-4" },
        badgeIcon: { name: "GraduationCap", className: "size-4" },
        badge: "Undergraduate Programme",
        title: "BA Islamic Studies",
        description: "BA Islamic Studies | Crescent University Distance Education.",
        applyIcon: {
          name: "ArrowRight",
          className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
        },
        applyTo: "/admission",
      },
      navigation: [
        {
          destination: { type: "route", to: "/ba-islamic-studies" },
          icon: { name: "BookOpen", className: "size-5" },
          title: "Overview",
          description: "Programme overview",
          iconClassName: sharedNavIconClass,
        },
        {
          destination: { type: "route", to: "/ba-islamic-studies/people" },
          icon: { name: "Users", className: "size-5" },
          title: "People",
          description: "Faculty & team",
          iconClassName: peopleIconClass,
        },
        {
          destination: {
            type: "courseInfo",
            courseSlug: "ba-islamic-studies",
            section: "vision",
          },
          icon: { name: "Eye", className: "size-5" },
          title: "Vision",
          description: "Our academic vision",
          iconClassName: visionIconClass,
        },
        {
          destination: {
            type: "courseInfo",
            courseSlug: "ba-islamic-studies",
            section: "mission",
          },
          icon: { name: "Target", className: "size-5" },
          title: "Mission",
          description: "Our core mission",
          iconClassName: missionIconClass,
        },
        {
          destination: {
            type: "courseInfo",
            courseSlug: "ba-islamic-studies",
            section: "eligibility-fee",
          },
          icon: { name: "FileText", className: "size-5" },
          title: "Eligibility & Fee",
          description: "Admission details",
          iconClassName: sharedNavIconClass,
        },
        {
          destination: { type: "route", to: "/ba-islamic-studies/syllabus" },
          icon: { name: "BookOpen", className: "size-5" },
          title: "Syllabus",
          description: "Programme syllabus",
          iconClassName: visionIconClass,
        },
        {
          destination: { type: "external", href: baIslamicRegulationsPdf },
          icon: { name: "FileText", className: "size-5" },
          title: "Regulations",
          description: "Programme regulations",
          iconClassName: missionIconClass,
        },
        {
          destination: { type: "external", href: baIslamicBrochurePdf },
          icon: { name: "Download", className: "size-5" },
          title: "Download Brochure",
          description: "Get the programme brochure",
          iconClassName: missionIconClass,
        },
      ],
      actions: [],
    },
    cardPresentation: {
      compact: true,
      accent: "blue-gold",
      brochureAvailable: false,
    },
    people: {
      facultyCourseName: "B.A. Islamic Studies",
      layout: "green",
      backLabel: "Back to Programmes",
      backTo: "/programmes",
      heroDescription:
        "Meet the faculty members supporting teaching, academic guidance and learner development in B.A. Islamic Studies.",
      heading: "Faculty — B.A. Islamic Studies",
      description: "Academic professionals supporting the learning journey of our students.",
      programmeBadge: "B.A. Islamic Studies",
      programmeName: "B.A. Islamic Studies",
      profileLinkLabel: "Official Faculty Profile",
      profileLinkDescription: "View the complete profile on the Crescent website.",
      footerMessage:
        "Our faculty team supports academic learning, guidance and the overall development of learners pursuing B.A. Islamic Studies.",
    },
    syllabus: {
      label: "B.A. Islamic Studies",
      description:
        "Detailed semester-wise syllabus, course structure, credits and elective courses for the B.A. Islamic Studies programme.",
      heading: "B.A. Islamic Studies",
      notice: "Click Here To Download Our BA Islamic Studies Syllabus",
      downloadLabel: "BA Islamic Studies Syllabus PDF",
      totalCredits: 140,
      tables: [
        {
          semester: "SEMESTER I",
          total: 22,
          courses: [
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
          ],
          theme: "green",
        },
        {
          semester: "SEMESTER II",
          total: 22,
          courses: [
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
          ],
          theme: "green",
        },
        {
          semester: "SEMESTER III",
          total: 24,
          courses: [
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
          ],
          theme: "green",
        },
        {
          semester: "SEMESTER IV",
          total: 24,
          courses: [
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
          ],
          theme: "green",
        },
        {
          semester: "SEMESTER V",
          total: 24,
          courses: [
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
          ],
          theme: "green",
        },
        {
          semester: "SEMESTER VI",
          total: 24,
          courses: [
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
          ],
          theme: "green",
        },
      ],
      electiveSection: {
        title: "LIST OF ELECTIVE COURSES",
        description: "Elective courses available across the different semesters.",
        tables: [
          {
            semester: "Semester III",
            total: 9,
            courses: [
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
            ],
            theme: "green",
          },
          {
            semester: "Semester IV",
            total: 9,
            courses: [
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
            ],
            theme: "green",
          },
          {
            semester: "Semester V",
            total: 12,
            courses: [
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
            ],
            theme: "green",
          },
          {
            semester: "Semester VI",
            total: 12,
            courses: [
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
            ],
            theme: "green",
          },
        ],
      },
      download: {
        pdfHref: "/pdfs/ba-islamic-studies-syllabus.pdf",
        title: "Download BA Islamic Studies Syllabus",
        description: "Please fill in your details to access the syllabus PDF.",
        successDescription:
          "Thank you for submitting your details. You can now download the BA Islamic Studies syllabus.",
        theme: "green",
      },
    },
    metadata: {
      title: "BA Islamic Studies — Crescent CDOE",
      description:
        "Explore the BA Islamic Studies programme at Crescent, including faculty, eligibility and syllabus.",
      canonicalPath: "/ba-islamic-studies",
      pages: {
        overview: {
          title: "BA Islamic Studies — Crescent CDOE",
          description: "BA Islamic Studies programme overview.",
        },
        people: {
          title: "BA Islamic Studies Faculty — Crescent CDOE",
          description: "Meet the BA Islamic Studies faculty.",
        },
        syllabus: {
          title: "BA Islamic Studies Syllabus — Crescent CDOE",
          description: "Six-semester BA Islamic Studies syllabus and elective courses.",
        },
      },
      sections: {
        vision: {
          title: "BA Islamic Studies Vision - Crescent CDOE",
          description: "Academic vision for Bachelor of Arts in Islamic Studies.",
        },
        mission: {
          title: "BA Islamic Studies Mission - Crescent CDOE",
          description:
            "Mission and educational objectives for Bachelor of Arts in Islamic Studies.",
        },
        "eligibility-fee": {
          title: "BA Islamic Studies Eligibility & Fees - Crescent CDOE",
          description:
            "Admission eligibility and fee information for Bachelor of Arts in Islamic Studies.",
        },
      },
    },
    staffDirectory: { level: "ug", profileDestination: "programmePeople", cardStyle: "rounded" },
    faculty: [
      {
        slug: "moulavi-dr-s-abdus-samad-nadwi",
        name: "Moulavi Dr. S. Abdus Samad Nadwi",
        designation: "Associate Professor",
        natureOfEmployment: "Regular",
        qualification: "M.A., M.Phil., Ph.D.",
        phone: "+91-44-22751280",
        email: "samadnadwi@crescent.education",
        photo: abdussamadPhoto,
        detailedProfile: {
          education: [
            "Ph.D. — Classical Arabic; “An Nathru al Fanni Fee al Quran al Kareem” (Artistic Prose in the Holy Quran), Department of Arabic, Persian and Urdu, University of Madras, April 2017.",
            "M.Phil. — Arabic; Activities of Imam al-Ghazzali in Educational Renaissance, Department of Arabic, Persian and Urdu, University of Madras, August 2009.",
            "M.A. — Arabic, Department of Arabic, University of Lucknow, April 2002.",
            "Fazil Nadwi (equivalent to M.A. Islamic Studies) — Islamic Jurisprudence, Department of Shariah, Darul Uloom Nadwatul Ulama, Lucknow, January 1997.",
            "Moulavi Aalim Nadwi (equivalent to B.A. Islamic Studies) — Islamic Studies and Arabic Literature, Department of Shariah, Darul Uloom Nadwatul Ulama, Lucknow, January 1995.",
          ],
          experience: [
            "BSACIST — Associate Professor, 1 September 2024 to present; teaching and research.",
            "BSACIST — Assistant Professor, 1 August 2011 to 31 August 2024; 13 years, 1 month; teaching and research.",
            "K.B.A. Arabic College — Assistant Professor, 1 June 2007 to 31 July 2011; 4 years, 1 month; teaching.",
            "Jamal Mohamed College, Trichy — Lecturer, 1 June 2006 to 31 May 2007; 1 year; teaching.",
            "J.M.S. Arabic College, Madurai — Lecturer, 1 January 2000 to 31 May 2006; 6 years, 5 months; teaching.",
            "Uswathul Hasana, Shariya College, Pallappatti — Lecturer, 15 February 1997 to 31 December 1999; 2 years, 11 months; teaching.",
          ],
          researchInterests: [
            "Tafseer",
            "Hadith",
            "Islamic Jurisprudence",
            "Inheritance",
            "Islamic Sciences",
            "Arabic Language and Literature",
          ],
          supervision: [
            "Approved guide for Ph.D. candidates.",
            "Two Ph.D. candidates under supervision.",
          ],
          professionalActivities: [
            "Life Member, Tamilnadu Arabic Association, since 2018.",
            "Member, Tamilnadu Jama`athul Ulama, since 2015.",
            "Member, Board of Studies, Department of Arabic, Manonmaniam Sundaranar University, Tirunelveli.",
            "Member, Board of Studies, School of Arabic and Islamic Studies, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.",
            "External Examiner for Central Valuation, PG and Research Department of Arabic, Jamal Mohamed College, Trichy, 2019.",
            "Question setter for semester examinations, PG and Research Department of Arabic, Jamal Mohamed College, from 2014-15 to present (as stated in the supplied profile).",
            "Question setter for semester examinations, Department of Arabic, Manonmaniam Sundaranar University, Tirunelveli, from 2020-21 to present (as stated in the supplied profile).",
          ],
          training: [
            "Faculty Induction/Orientation Programme for faculty in universities, colleges and institutes of higher education — Teaching Learning Centre, Ramanujan College, University of Delhi; UGC-MHRD; 23 May-21 June 2023 (1 month).",
            "Refresher Course: Advanced Research Methodology — Teaching Learning Centre, Ramanujan College, University of Delhi; UGC-MHRD; 22 April-6 May 2023 (15 days).",
            "FDP: Inculcating Universal Human Values in Technical Education — AICTE, New Delhi; 6-10 June 2022 (1 week).",
            "FDP: Techniques and Trends in Publishing Arabic Articles in Journals — PG and Research Department of Arabic, Jamal Mohamed College; 4-6 October 2021 (3 days).",
            "FDP: Gender Equality — CALEM, Aligarh Muslim University; PMMMNMTT, Ministry of Education, Government of India; 16-22 February 2021 (1 week).",
            "STTP: Be the Change - Teaching Learning Process — HR and Faculty Training Academy, BSAU; BSACIST, Chennai; 15-20 February 2021 (1 week).",
            "Induction Training Programme — NITTTR, Kolkata; 2-6 November 2020 (1 week).",
            "STTP: Professional Ethics and Sustainable Development — NITTTR, Kolkata; 26-30 October 2020 (1 week).",
            "FDP: Implementation of OBE and Online Teaching — NITTTR, Chennai; 19-23 October 2020 (1 week).",
          ],
          books: [
            "“Thiruk Qur`anin Vaira Varigal” (Diamond Words in the Holy Quran), Dr. S. Abdus Samad, Nadwi Publication, Chennai, ISBN 978-93-87882-74-4, 2017.",
          ],
          journalPublications: [
            "Artistic beauty in the style of Quranic stories — Majalla al-Aasima, refereed annual research journal, Vol. 9, pp. 107-110, ISSN 2277-9914, eISSN 2321-2756, December 2017.",
            "The Specialties of the Prophet Mohammed (Peace Be Upon Him) and His Eminent Features in the World — Al-Baas-el-Islami, Vol. 67, Issue 10, pp. 21-32, ISSN 2347-2456, December 2021.",
            "Role of Educational Institutions of B.S. Abdur Rahman in the Development of Arabic Language and Literature — Majalla al-Aasima, Vol. 13, pp. 356-359, ISSN 2277-9914, eISSN 2321-2756, December 2021.",
            "Deteriorations of alcohol and drugs, its effects and ways of getting rid of them in the light of Quran and Sunna — Al-Bukhari Journal of Arabic and Islamic Studies, Vol. 1, Issue 1, pp. 57-64, ISSN 2583-2379, July-December 2021.",
            "World peace in the example of the Prophet Mohammed (Peace Be Upon Him) — Al-Baas-el-Islami, Vol. 68, Issue 2, pp. 27-33, ISSN 2347-2456, February 2022.",
            "Literary style in the examples of the Holy Quran — Al-Baas-el-Islami, Vol. 68, Issue 6, pp. 26-32, ISSN 2347-2456, July 2022.",
            "The importance of the Arabic Language and its Universality — Al-Bukhari Journal of Arabic and Islamic Studies, Vol. 2, Issue 1, pp. 50-58, ISSN 2583-2379, January-June 2022.",
            "A View of Arab Tamil Tafsirs — Jamal Academic Research Journal (JARJ), Vol. 4, Issue 1, pp. 28-35, ISSN 0973-9303, eISSN 2582-5941, March 2023.",
            "Human values in the artistic prose of the Holy Qur’an — Al-Baas-el-Islami, Vol. 69, Issue 6, pp. 31-40, ISSN 2347-2456, July 2023.",
            "The Famous Scholar Muhammad Al Rabe Al Hasani Al-Nadwi is India’s gift to the Islamic world — Al-Baas-el-Islami, Vol. 69, Issues 8-10, pp. 118-125, ISSN 2347-2456, September-November 2023.",
            "Mohammad Al Rabe Al Hasani Al-Nadwi, an eminent Islamic scholar, thinker, educationist — Majalla al-Aasima, Vol. 15, pp. 264-268, ISSN 2277-9914, eISSN 2321-2756, December 2023.",
            "Justice in the Teachings of the Prophet (peace be upon him), with Dr. Mohamed Rafiq Hasani — Al-Bukhari Journal of Arabic and Islamic Studies, Vol. 4, Issue 1, pp. 70-76, ISSN 2583-2379, January-June 2024.",
            "Preserving Chastity: Health Protection, with Dr. Mohamed Rafiq Hasani — Al-Baas-el-Islami, Vol. 70, Issue 10, pp. 33-38, ISSN 2347-2456, November 2024.",
          ],
          conferencePublications: [
            "The characters of the great Prophet — Al-Jamal, March 2007.",
            "The requirements of the present-day society from Islamic Scholars — Al-Bukhari, July 2010.",
            "Commentators Methodology in the Modern Age — Proceedings of the International Conference on Tafsir Literature in the Modern Period, University of Madras, 11 January 2012, Vol. 1, Issue 1, pp. 314-322.",
            "Modern Discoveries in the Light of Prophet’s Traditions — Kanzul Hikma, International Seminar on Hadith and Modern Science, Jamal Mohamed College, 19 February 2013, Vol. 1, Issue 1, pp. 129-139.",
            "Short Stories: Its essence, features, basics, stages of development and important leaders — International Conference on Development of Arabic Novels and Short Stories in the Modern Period, Jamal Mohamed College, 20-21 January 2015, pp. 288-295.",
            "Prohibition of alcohol and drugs, its effects and ways of getting rid of them in the light of Prophetic Guidance — National Conference on Prophetic Guidance for Modern Social Issues, B.S. Abdur Rahman Institute, 23 February 2015, Vol. 1, Issue 1, pp. 72-77.",
            "Humanitarian Values in the Literary Prose of the Holy Quran — International Conference on Humanitarian Values in Arabic Literature, MEASI, Chennai, 16 February 2016, pp. 166-173, ISBN 978-81-88023-18-9.",
            "Preserving Chastity: Health Protection — International Conference on Family Life: Issues and Solutions in the Perspective of Islam, B.S. Abdur Rahman Institute, 23 February 2016, Vol. 2, Issue 1, pp. 102-106, ISBN 978-81-88023-16-5.",
            "Global Peace and Human Security in the Light of Quran and Hadeeth — International Conference on Prophetic Guidance for World Peace, The New College, March 2017, pp. 149-158, ISBN 978-93-81992-50-0.",
            "Conspiracy by the enemy of Islam in the separation of Muslims — One Day Islamic Research Seminar “Towards Unity”, Preston International College, 23 November 2017.",
            "The Specialities of the Multifaceted Personality of the Prophet Mohammed (Peace Be Upon Him) — National Colloquium, Sadaqathullah Appa College, 21 December 2017, pp. 40-51, ISBN 978-81-935198-3-7.",
            "Role of Educational Institutions of B.S. Abdur Rahman in the Development of Arabic Language and Literature in South India — National Seminar, New College, 25 February 2019, ISBN 978-93-87882-64-5.",
            "Role of the Teachers in Education of the New Generation — National Seminar “Educating Muslim Community: Challenges and Solutions”, Preston International College, 5 March 2019.",
            "The beautiful Qur’anic style on proverbs — International Conference on Proverbs and Wise Sayings in Arabic Literature, New College, 29 February 2024.",
          ],
          conferencePresentations: [
            "Methodologies of teaching Arabic Language — International Conference on Teaching Arabic Language, Jamal Mohamed College, 2007.",
            "Importance of Humour in Arabic Literature — National Seminar, University of Madras, 11-12 February 2014.",
            "World Peace in the Light of Quran and Sunnah — National Seminar on Prophetic Guidance for World Peace, The New College, 16 February 2016.",
            "Contribution of Educational Institutions of B.S. Abdur Rahman in the Development of Arabic Language and Literature — National Seminar, The New College, 7 March 2017.",
            "Artistic Style in Quranic Stories — National Seminar on Islamic Arabic Literature in India, The New College, 25 February 2019.",
            "Difficulties in Learning Communicative Arabic Language in Islamic Institutions in India — International Seminar, The New College, 12 December 2020.",
            "Universality of Arabic Language — 45th Indian Social Science Congress, 28 March-1 April 2022.",
            "A View of Arab Tamil Tafsirs — International Arabic Hybrid Seminar on Arabu Tamil Literature, Jamal Mohamed College, 14 March 2023.",
            "The wonderful expression in the style of Quranic proverbs — International Arabic Hybrid Seminar on Proverbs and Wise Sayings in Arabic Literature, The New College, 16 March 2023.",
            "Prophetic Method of Imparting Family Values to Youth — International Conference on Social Sciences, Languages and Culture, B.S. Abdur Rahman Crescent Institute, 12-13 October 2023.",
            "The Beauty of Storytelling in the Holy Quran — International Arabic Hybrid Seminar on Development of Moral Stories and Poems in Arabic Literature, The New College, 29 February 2024.",
          ],
          workshops: [
            "Modern techniques of teaching Arabic Language — School of Islamic Studies, B.S. Abdur Rahman Institute, September 2012.",
            "International workshop on Ph.D. standards and publishing in peer-reviewed journals, led by Professor Dr. S. Arunachalam (UK) — Department of Computer Science and Engineering, B.S. Abdur Rahman Institute, 5 August 2013.",
            "Modern Trends in Arabic Teaching — Department of Arabic, Persian and Urdu, University of Madras, 26 August 2014.",
            "Translation Skill Development of Arabic-English — School of Islamic Studies, B.S. Abdur Rahman Institute, 25 February 2017.",
            "Learning and MOOCs in Higher Education — Guru Angad Dev Teaching Learning Centre, University of Delhi, in collaboration with Crescent Institute, 9 March 2019.",
            "Oratory and Debate Skill Development — Tamil Peravai and School of Arabic and Islamic Studies, Crescent Institute, 31 July 2019.",
            "NEP 2020: Higher Education Curricular Issues and Implications — NITTTR Bhopal, 20 November 2020.",
            "Islamic Psychology — School of Arabic and Islamic Studies, Crescent Institute, 19-20 February 2020.",
            "Contribution of Sudan in Promoting Arabic Language to Non-Arabs: Methodology and Technique — International Webinar, New College, 31 July 2021.",
            "Islamic Banking Products and Services — SAIS, BSACIST, 11 September 2021.",
            "Understanding Research Metrics for Quality Research — BSACIST with Researgence, 2 November 2022.",
            "Impact of Originality in Innovative Research — BSACIST with Turnitin India Private Limited, 24 November 2022.",
            "Arabic Literature in the Levant Countries — Department of Arabic, University College, Thiruvananthapuram, 27 November 2021.",
            "Arabic into English, English into Arabic Translation: Techniques and Prospects — New College, 29 November 2021.",
          ],
          invitedRoles: [
            "Resource person on “The beautiful styles in the Quranic words”, Jamalia Arabic College, Chennai, 3 September 2024.",
            "Guest speaker at the inauguration of the Arabic Study Circle for academic year 2024-25, PG and Research Department of Arabic, The New College, 29 August 2024.",
            "Chairperson, International Arabic Hybrid Seminar on Development of Moral Stories and Poems in Arabic Literature, The New College, 29 February 2024.",
            "Co-chairperson, International Arabic Hybrid Seminar on Proverbs and Wise Sayings in Arabic Literature, The New College, 16 March 2023.",
            "Chairperson, Two-Day International Seminar on Trends and Developments of Arabic Literature in the Gulf Countries, Jamal Mohamed College, 11-12 May 2022.",
            "Guest speaker on “The Principles of Islamic Jurisprudence”, Annai Khadeeja Arts and Science College for Women, Pudukottai, 26-27 February 2022.",
            "Guest speaker on “The Multifaceted Personality of the Prophet Mohammed (Peace Be Upon Him)”, Sadakathullah Appa College, Tirunelveli, 21 December 2017.",
            "Chaired a session at the International Arabic Seminar on Hadith and Modern Science, Jamal Mohamed College, 19 February 2013.",
          ],
          awards: [
            "Best Nation Builder Teacher Award (National), Avishkar Achievers Award 2023, Avishkar Foundation, Solapur, 29 December 2023.",
            "Selected as an editorial member of Al-Bukhari Journal of Arabic and Islamic Studies, an international peer-reviewed annual journal, ISSN 2583-2379.",
          ],
        },
      },
      {
        slug: "dr-m-yasar-arafath-ali",
        name: "Dr. M. Yasar Arafath Ali",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "M.A., M.Com., Ph.D. DIJ",
        phone: "",
        email: "yasar@crescent.education",
        photo: yasarPhoto,
        detailedProfile: {
          education: [
            "Ph.D. in Arabic Literature — Bharathidasan University, Tiruchirappalli, 2022.",
            "M.A. in Arabic — University of Madras, Chennai, 2013.",
            "M.Com. in Commerce — Tamil Nadu Open University, Chennai, 2021.",
            "Diploma in Journalism (DIJ) — Tamil Nadu Open University, Chennai, 2023.",
            "Afzal-Ulama (Oriental Title Studies) — University of Madras, Chennai, 2011.",
            "B.B.A. in Management Studies — University of Madras, Chennai, 2011.",
            "Fazil Saqafi and Azhari (Islamic Higher Studies) — Markaz Saqafathi Sunniya, Calicut, Kerala, 2013.",
            "Aalim Al-Bukhari (Islamic Studies) — Kilakarai Bukhari Aalim Arabic College, 2011.",
          ],
          experience: [
            "Assistant Professor, B.S. Abdur Rahman Crescent Institute of Science & Technology — January 2024 to present.",
            "Assistant Professor, Kilakarai Bukhari Aalim Arabic College, Chennai — June 2019 to December 2023 (4 years, 7 months).",
            "Assistant Professor, Syed Hameedha Arabic College, Kilakarai — June 2016 to April 2019 (3 years).",
            "Assistant Professor, Jamia Yaseen Arabic College, Tiruchirappalli — June 2013 to May 2015 (2 years).",
          ],
          teachingCourses: [
            "Functional Arabic",
            "Arabic Grammar",
            "Prophet History (Seerah)",
            "Fiqh",
            "Prophet Guidance (Hadees)",
          ],
          researchInterests: ["Writing research articles in Arabic and Islamic literature."],
          supervision: [],
          professionalActivities: [
            "External Examiner, Alagappa University, Karaikudi, 2016-2019.",
            "Department Head, Syed Hameedha Arabic College, Kilakarai (affiliated to Alagappa University), 2016-2019.",
            "Chief Exam Superintendent, Syed Hameedha Arabic College, Kilakarai (affiliated to Alagappa University), 2017-2019.",
            "Technical Team, Al-Bukhari Journal of Arabic and Islamic Studies (peer-reviewed research journal), 2021-present.",
          ],
          training: [],
          books: [],
          journalPublications: [
            "International Journal / Web of Science: “Islamic Arab Morals, Virtues and Characters in Arabic-Tamil Novel ‘Madinatun Nuhas’ or ‘Tamirapattanam’” — Ijaz Arabi, Vol. 7, No. 1, February 2024.",
            "International Journal / Web of Science: “Effect of an Activity-Based Learning in Teaching Arabic Paragraph Writing to AFL Learners” — Ijaz Arabi, Vol. 6, No. 3, October 2023.",
            "National Journal / UGC CARE: “Contribution of Companions of Prophet Mohamed to Development of Arabic Literature” — Al-Basul Islami, Vol. 66, Issue 9, 2019.",
            "National Journal / UGC CARE: “The Role of Companion Ka’b ibn Zuhayr to the Field of Arabic Islamic Literature” — Al-Basul Islami, Vol. 67, Issue 6, 2020.",
          ],
          conferencePublications: [],
          conferencePresentations: [],
          seminars: [
            "“Prophetic Guidance for Modern Social Issues” — Region, Arabic Literature, Issues and Stakes, School of Islamic Studies, B.S. Abdur Rahman University, Chennai, 2023.",
            "“Teaching Communicative Arabic for Non-Native Speakers: Problems, Solutions, Opportunities” — UGC-sponsored One Day International Seminar, The New College, February 2020.",
            "“Diseases and Remedy in the Light of the Holy Quran and the Prophetic Tradition” — UGC-sponsored One Day International Seminar, Jamal Mohamed Arabic College (Autonomous), Tiruchirappalli, January 2017.",
          ],
          workshops: [],
          invitedRoles: [],
          awards: [],
        },
      },
      {
        slug: "moulavi-dr-m-ahamedullah-al-bukhari",
        name: "Moulavi Dr. M. Ahamedullah Al Bukhari",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "Afzal-al-Ulama., BBA., M.A., M.Phil., Ph.D",
        phone: "044-22751280 (Office)",
        email: "ahamedullah@crescent.education",
        photo: ahamedullahPhoto,
        detailedProfile: {
          education: [
            "Ph.D. in Islamic Studies — School of Islamic Studies, B.S. Abdur Rahman Institute.",
            "M.Phil. in Arabic Literature — Department of Arabic, The New College, University of Madras, May 2011.",
            "M.A. in Arabic Literature — Department of Arabic, Persian and Urdu, University of Madras, May 2009.",
            "Afzal Ul Ulama in Oriental Studies in Arabic — Department of Arabic, Persian and Urdu, University of Madras, April 2006.",
            "B.B.A. in Business Administration — University of Madras, May 2005.",
            "DUL, Diploma in Urdu Language — C. Abdul Hakeem College, Vellore, Ministry of Human Resource Development, May 2015.",
            "Aalim Bukhari in Islamic Studies — Kilakarai Bukhari Aalim Arabic College, Vandalur, April 2005.",
            "Hifzul Quran, Memorization of the Holy Quran — Kilakarai Bukhari Aalim Arabic College, Vandalur, April 2005.",
          ],
          experience: [
            "Assistant Professor, B.S. Abdur Rahman Crescent Institute of Science & Technology — 1 July 2013 to present; teaching and research.",
            "Lecturer, Kilakarai Bukhari Aalim Arabic College — 3 July 2006 to 16 June 2014; teaching.",
          ],
          researchInterests: [
            "Islamic Jurisprudence and Islamic History, through the research group formed in July 2011 under the chairmanship of Dr. P.S. Syed Masood Jamali. Members include Mr. P.M. Mohamed Yoosuf Jamali and Mr. A. Jamaluddin Jamali, faculty of the School of Islamic Studies.",
          ],
          supervision: [
            "Pursuing a Ph.D. in the School of Islamic Studies, B.S. Abdur Rahman Crescent Institute, Vandalur, Chennai.",
            "Research guide for undergraduate students in Islamic finance.",
          ],
          professionalActivities: [
            "Deputy Warden, School of Islamic Studies.",
            "Organizer of Quran tutors for Crescent School, 2006-present.",
            "Student Counsellor, School of Islamic Studies.",
            "Coordinator of sports events.",
            "Hostel Administrator for more than 10 years.",
            "Student counselling and career guidance.",
            "Teaching experience: 12 years (as stated in the supplied profile).",
          ],
          training: [
            "Ten-day English Language Training Workshop for Madrasah Teachers — The Seethakathi Trust and Regional English Language Office, U.S. Embassy, April 2009.",
            "Three-day International Arabic Day Celebration workshop — League of Arab States Mission and Rouzathul Uloom Arabic College, Kerala, December 2010.",
            "Modern Techniques of Teaching Arabic Language — School of Islamic Studies, B.S. Abdur Rahman University, Chennai, September 2012.",
            "How to Do a Ph.D. to International Standards and Publish in Peer-Reviewed Journals — Higher Education Academy London and B.S. Abdur Rahman University, Chennai, August 2013.",
            "International Workshop on Teaching Practices in Islam — B.S. Abdur Rahman University, Chennai, March 2013.",
            "Globalization of Arabic Learning Through English: Software Training — PG and Research Department of Arabic, Jamal Mohamed College, Trichy, March 2014.",
            "Quality Assurance in Academic and Sponsored Research — Office of Dean (Academic Research), B.S. Abdur Rahman University, Chennai, 7 March 2015.",
            "Research Methodology and Quality Assurance — Office of Dean (Academic Research), B.S. Abdur Rahman University, Chennai, 2-3 December 2016.",
            "Translation Skill Development: Arabic-English — School of Islamic Studies, B.S. Abdur Rahman University, Chennai, February 2017.",
            "Arabic Grammar and Translation Skill — PG and Research Department of Arabic, The New College, Chennai, 13-14 February 2018.",
            "National Seminar on e-Learning and MOOCs in Higher Education — Guru Angad Dev Teaching Learning Centre of MHRD, SGTB Khalsa College, University of Delhi, and Crescent Institute of Science & Technology, Chennai, March 2019.",
            "Teaching Communicative Arabic for Non-Native Speakers: Problems, Solutions, and Opportunities — International Seminar, PG and Research Department of Arabic, The New College, Chennai, February 2020.",
            "Islamic Psychology — School of Arabic and Islamic Studies, B.S. Abdul Rahman Crescent Institute of Science & Technology, Chennai, with Master Mind Consult Training, Chennai, February 2020.",
          ],
          books: [],
          journalPublications: [
            "“Investment of Zakath Fund - An Analytical Study” — Al Ba’ath al Islami, UGC CARE journal, ISSN 2347-2456, Issue 66, pp. 48-58, July 2020.",
          ],
          conferencePublications: [
            "“Humanitarian Values in the Sermons of Prophet (Pbuh)” — Two-Day International Seminar on Humanitarian Values in Arabic Literature, PG and Research Department of Arabic, The New College, Chennai; ISBN 978-81-88023-18-9, pp. 158-164, 2-3 February 2015.",
            "“Prophetic Guidance for Youth Issues” — National Seminar on Prophetic Guidance for Modern Social Issues, School of Islamic Studies, B.S. Abdur Rahman University, Chennai, pp. 91-97, 23 February 2015.",
            "“Islamic Marketing Ethics and its Application in Islamic Banking Industry” — International Symposium on Empowering National Development Through Religions, Languages, Culture and Society, Faculty of Islamic Studies and Arabic Language, South Eastern University of Sri Lanka; ISBN 978-955-627-061-7, pp. 71-78, 4 March 2015.",
            "“Religious Coexistence in Achieving Security and Safety” — National Arabic Seminar on Prophetic Guidance for World Peace, PG and Research Department of Arabic, The New College, Chennai, February 2016.",
            "“Child Education and Methods in Islamic Perspective” — International Seminar on Family Life: Issues and Solutions in the Perspective of Islam, School of Islamic Studies, B.S. Abdur Rahman University, Chennai; ISBN 978-81-88023-16-5, pp. 107-112, February 2016.",
            "Arabic paper on the role of Arabic wall journalism in developing Arabic language among students of religious schools in Tamil Nadu — National Seminar on the Role of Educational Institutions in the Development of Arabic Language and Literature in South India, PG and Research Department of Arabic, The New College, Chennai, March 2017.",
            "“Social Development Aspects and Societal Relevance of the Institution of Zakat in Islam” — International Zakat Conference Kerala 2018, Baithuzzakath Kerala, Kozhikode, April 2018.",
            "“Contribution of Imam Abul Hasan Nadwi in the Field of Economics (Zakat)” — National Seminar on Islamic Arabic Literature in India, PG and Research Department of Arabic, The New College, Chennai, February 2019.",
          ],
          conferencePresentations: [],
          seminars: [
            "One Day National Seminar on Contribution of Women in Arabic Literature — Department of Arabic, Justice Basheer Ahmed Sayeed College for Women, Chennai, 27 January 2014.",
            "Paper presented: “Humour in Marriage Life” — Two-Day National Seminar on Humour in Arabic Literature, Department of Arabic, Persian and Urdu, University of Madras, 11-12 February 2014.",
            "Paper presented: “Novels of Mahmud Taimur - A Brief Study” — Two-Day International Seminar on Development of Arabic Novels and Short Stories in the Modern Period, PG and Research Department of Arabic, Jamal Mohamed College, Trichy, 20-21 January 2015.",
            "One Day National Seminar on Prophetic Guidance for Modern Social Issues — School of Islamic Studies, B.S. Abdur Rahman University, Chennai, 23 February 2015.",
            "One Day International Symposium on Empowering National Development Through Religions, Languages, Culture and Society — Faculty of Islamic Studies and Arabic Language, South Eastern University of Sri Lanka, 4 March 2015.",
            "One Day National Arabic Seminar on Prophetic Guidance for World Peace — PG and Research Department of Arabic, The New College, Chennai, February 2016.",
            "One Day International Seminar on Family Life: Issues and Solutions in the Perspective of Islam — School of Islamic Studies, B.S. Abdur Rahman University, Chennai, February 2016.",
            "Paper presented in Arabic on the role of Arabic wall journalism in developing Arabic language among students of religious schools in Tamil Nadu — National Seminar on the Role of Educational Institutions in the Development of Arabic Language and Literature in South India, The New College, Chennai, March 2017.",
            "International Zakat Conference Kerala 2018 — Baithuzzakath Kerala, Kozhikode, April 2018.",
            "National Seminar on Islamic Arabic Literature in India — PG and Research Department of Arabic, The New College, Chennai, February 2019.",
            "National Seminar on e-Learning and MOOCs in Higher Education — Guru Angad Dev Teaching Learning Centre of MHRD, SGTB Khalsa College, University of Delhi, and Crescent Institute of Science & Technology, Chennai, March 2019.",
            "International Seminar on Teaching Communicative Arabic for Non-Native Speakers: Problems, Solutions, and Opportunities — PG and Research Department of Arabic, The New College, Chennai, February 2020.",
            "Two-Day Workshop on Islamic Psychology — School of Arabic and Islamic Studies, B.S. Abdul Rahman Crescent Institute of Science & Technology, Chennai, and Master Mind Consult Training, Chennai, February 2020.",
          ],
          workshops: [],
          invitedRoles: [],
          awards: [],
        },
      },
    ],
  },
  mca: {
    slug: "mca",
    listingRoute: "/mca",
    landingRoute: "/mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    level: "Postgraduate",
    duration: "2 Years",
    eligibility:
      "Any undergraduate degree in Computer Applications, Computer Science or Engineering with a minimum CGPA of 5.0 / 50% of marks. Alternative subject combinations are described in the MCA admission requirements.",
    description: "Study software engineering, data, application development and applied computing.",
    vision:
      "Aspires to provide quality education in the field of computer applications with state-of-the-art computational facilities and undertake quality research in collaboration with industries and universities to produce committed professionals and academicians to meet the needs of the industries and society.",
    mission: [
      "To disseminate knowledge through education and training of graduates in the field of computer applications.",
      "To focus on teaching, learning, research and consultancy to promote excellence in computer applications.",
      "To foster graduates with opportunities required to explore, create and face challenges of IT-related industries.",
      "To equip graduates with communication, teamwork and leadership skills to meet the needs of the global IT sector.",
      "To share project and research outcomes for the benefit of society and industry.",
    ],
    fees: {
      application: "₹1,000",
      tuition: "₹20,000 per semester",
      foreignApplication: "$15",
      foreignTuition: "$750",
    },
    listing: {
      description: "Software engineering, data, application development and applied computing.",
      eligibility: "Bachelor's degree with Mathematics",
    },
    theme: "blue",
    overview: {
      image: mcaOverview,
      imageWidth: 1536,
      imageHeight: 1024,
      imageAlt: "MCA computer applications and technology",
      title: "Master of Computer Applications",
      programmeLabel: "MCA",
      department: "Department of Computer Applications",
      paragraphs: [
        "The department offers Master of Computer Applications (MCA) since 1994, M.Phil (Computer Science) since 2009, Ph.D (Computer Science) since 2009, MCA (Lateral Entry) since 2014. The department motivates Staff and Students to promote Industry Institute Interaction and R&D activities. In addition to regular curriculum the department organizes technical seminars, symposia, workshops, industrial visits, in-plant training to expose the students to the real world environments and to enable them to gain practical knowledge.",
        "The website and Internet services of the institute are maintained by the Department of Computer Applications. Along with that the Department offers additional virtual lab classes, live classes, tutorial MOOC’s and vocational augmentation. Courses through IIT Professors under MHRD’s QEEE programme. Special placement opportunities on mobile development in Android/IOs platforms.",
        "The MCA Programme was accredited by NBA since 2001. The department has adequate infrastructure and well-equipped laboratories and it is empowered with a team of highly qualified faculty members.",
      ],
    },
    pageConfig: {
      variant: "blue",
      layout: "programme",
      density: "compact",
      navigationLabel: "MCA",
      showActionsOnOverview: false,
      ctaPlacement: "inside",
      mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
      hero: {
        backIcon: { name: "ArrowRight", size: 15, className: "rotate-180" },
        badgeIcon: { name: "GraduationCap", size: 16 },
        badge: "Postgraduate Programme",
        title: "Master of Computer Applications",
        description: "MCA Distance Learning Programme | Crescent University Distance Education.",
        applyIcon: { name: "ArrowRight", size: 15 },
        applyTo: "/admission",
        applyHash: "how-to-apply",
      },
      navigation: [
        {
          destination: { type: "route", to: "/mca" },
          icon: { name: "BookOpen", size: 18 },
          title: "Overview",
          description: "Programme overview",
          iconClassName: blueNavIconClass,
        },
        {
          destination: { type: "route", to: "/mca/people" },
          icon: { name: "Users", size: 18 },
          title: "People",
          description: "Faculty & team",
          iconClassName: peopleIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mca", section: "vision" },
          icon: { name: "Eye", size: 18 },
          title: "Vision",
          description: "Our academic vision",
          iconClassName: visionIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mca", section: "mission" },
          icon: { name: "Target", size: 18 },
          title: "Mission",
          description: "Our core mission",
          iconClassName: missionIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mca", section: "eligibility-fee" },
          icon: { name: "BookOpen", size: 18 },
          title: "Eligibility & Fee",
          description: "Admission details",
          iconClassName: blueNavIconClass,
        },
        {
          destination: { type: "route", to: "/mca/syllabus" },
          icon: { name: "BookOpen", size: 18 },
          title: "Syllabus",
          description: "Programme syllabus",
          iconClassName: visionIconClass,
        },
        {
          destination: { type: "external", href: mbaRegulationsPdf },
          icon: { name: "FileText", size: 18 },
          title: "Regulations",
          description: "Programme regulations",
          iconClassName: missionIconClass,
        },
        {
          destination: { type: "external", href: mcaBrochurePdf },
          icon: { name: "Download", size: 18 },
          title: "Download Brochure",
          description: "Get the programme brochure",
          iconClassName: missionIconClass,
        },
      ],
      actions: [
        {
          destination: { type: "courseInfo", courseSlug: "mca", section: "eligibility-fee" },
          icon: { name: "BookOpen", size: 17 },
          title: "Eligibility & fee",
          iconBackgroundColor: "#334b7c12",
          iconColor: "#334b7c",
        },
        {
          destination: { type: "route", to: "/mca/syllabus" },
          icon: { name: "BookOpen", size: 17 },
          title: "Syllabus",
          iconClassName: "bg-[#1d355f]/10 text-[#1d355f]",
        },
        {
          destination: { type: "external", href: mbaRegulationsPdf },
          icon: { name: "FileText", size: 17 },
          title: "Regulations",
          iconClassName: "bg-[#d4af37]/10 text-[#8a6d12]",
        },
        {
          destination: { type: "external", href: mcaBrochurePdf },
          icon: { name: "Download", size: 17 },
          title: "Download Brochure",
          iconClassName: "bg-[#334b7c]/10 text-[#334b7c]",
        },
      ],
      cta: {
        label: "Ready to begin?",
        title: "Apply for MCA Online Learning",
        to: "/admission",
        linkText: "Apply Now",
        icon: null,
      },
    },
    cardPresentation: { brochureAvailable: false },
    people: {
      facultyCourseName: "MCA",
      layout: "standard",
      backLabel: "Back to MCA",
      backTo: "/mca",
      heroDescription:
        "Meet the faculty members supporting teaching, academic guidance and learner development in MCA.",
      heading: "Faculty — MCA",
      description: "Academic professionals supporting teaching, guidance and learner development.",
      programmeBadge: "MCA • Faculty",
      programmeName: "Master of Computer Applications (MCA)",
      profileLinkLabel: "Faculty Profile",
      profileLinkDescription: "View the faculty profile document.",
      footerMessage:
        "Our MCA faculty team supports academic learning, guidance and the overall development of learners.",
    },
    syllabus: {
      label: "M.C.A.",
      description:
        "Detailed semester-wise syllabus, course structure, credits and elective courses for the Master of Computer Applications programme.",
      heading: "M.C.A.",
      notice: "Click Here To Download Our MCA Syllabus",
      downloadLabel: "MCA Syllabus PDF",
      totalCredits: 86,
      note: "The programme includes core courses, professional electives, practical laboratory components, mini project and project work as specified in the MCA programme structure.",
      tables: [
        {
          semester: "SEMESTER Ⅰ",
          total: 22,
          courses: [
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
          ],
          categoryHeading: "Course Group",
        },
        {
          semester: "SEMESTER Ⅱ",
          total: 22,
          courses: [
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
          ],
          categoryHeading: "Course Group",
        },
        {
          semester: "SEMESTER Ⅲ",
          total: 24,
          courses: [
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
          ],
          categoryHeading: "Course Group",
        },
        {
          semester: "SEMESTER Ⅳ",
          total: "Min: 86",
          courses: [
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
          ],
          categoryHeading: "Course Group",
        },
      ],
      download: {
        pdfHref: "/pdfs/mca-syllabus.pdf",
        title: "Download MCA Syllabus",
        description: "Please fill in your details to access the syllabus PDF.",
        successDescription:
          "Thank you for submitting your details. You can now download the MCA syllabus.",
        theme: "purple",
      },
    },
    metadata: {
      title: "MCA Distance Learning — Crescent CDOE",
      description:
        "Explore Crescent's MCA programme, including eligibility, fees, faculty and syllabus.",
      canonicalPath: "/mca",
      pages: {
        overview: { title: "MCA — Crescent CDOE", description: "MCA programme overview." },
        people: { title: "MCA Faculty — Crescent CDOE", description: "Meet the MCA faculty." },
        syllabus: {
          title: "MCA Syllabus — Crescent CDOE",
          description: "MCA semester-wise syllabus and course structure.",
        },
      },
      sections: {
        vision: {
          title: "MCA Vision - Crescent CDOE",
          description: "Academic vision for Master of Computer Applications.",
        },
        mission: {
          title: "MCA Mission - Crescent CDOE",
          description: "Mission and educational objectives for Master of Computer Applications.",
        },
        "eligibility-fee": {
          title: "MCA Eligibility & Fees - Crescent CDOE",
          description:
            "Admission eligibility and fee information for Master of Computer Applications.",
        },
      },
    },
    staffDirectory: { level: "pg", profileDestination: "profile", cardStyle: "standard" },
    faculty: [
      {
        slug: "dr-e-jeslin-renjith",
        name: "Dr.E.Jeslin Renjith",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "MCA, M.Phil, SET, Ph.D",
        phone: "9790965499",
        email: "jeslin@crescent.education",
        photo: jeslinPhoto,
        detailedProfile: {
          education: [
            "B.Sc. in Physics — MS University, Tirunelveli, 2000.",
            "MCA in Computer Applications — MS University, Tirunelveli, 2003.",
            "M.Phil. in Computer Science — MK University, Madurai, 2007.",
            "Ph.D. in Computer Science — Bharathiar University, Coimbatore, 2023.",
          ],
          experience: [
            "Lecturer, WCC, Chennai — 2005-2008 (3 years).",
            "Lecturer, Vel Tech Multi Tech Engineering College, Avadi — 2008-2009 (1 year).",
            "Assistant Professor, MCC, Chennai — 2010-2016 (6 years).",
            "Assistant Professor, Mohamed Sathak College of Arts and Science — 2016-2022 (6 years).",
            "Assistant Professor, B.S. Abdur Rahman Crescent Institute of Science and Technology — 2022 to present.",
          ],
          teachingCourses: [
            "Data Science",
            "Big Data",
            "Python",
            "Digital Electronics",
            "Microprocessor",
          ],
          researchInterests: [
            "Data Mining",
            "Artificial Intelligence",
            "Big Data",
            "Machine Learning",
          ],
          supervision: [],
          professionalActivities: [
            "NSS Coordinator, WCC Chennai.",
            "Programme Coordinator, Online MCA, Crescent Institute.",
            "IQAC Department Coordinator, Mohamed Sathak College.",
          ],
          training: [
            "Faculty Development Programme on Artificial Intelligence and Cyber Security, January 2020.",
            "Workshop on Machine Learning Using Python, November 2021.",
            "NPTEL E-Awareness Workshop.",
            "AI and ML Faculty Development Programme, MSCAS.",
            "Faculty Development Programme on Emerging Trends in Information Technology, SSS Jain College.",
            "Workshop on Android for Mobile Applications, March 2017.",
          ],
          books: ["Computer Organization — authored book, ISBN 978-93-91303-30-3."],
          journalPublications: [
            "“Review of Detection and Classification for Snore Sound” — published in RJPBCS.",
            "“ESIVC for Snore Sound Detection” — JARDCS, Vol. 10, No. 4, 2018.",
            "“Ensemble Feature Selection (EFS) and Ensemble Convolutional Neural Network with Vote Classification (ECNN-VC) Approach for Detection of Snore Sounds in Obstructive Sleep Apnea Diagnosis” — IJCSIS, Vol. 16, No. 5, May 2018.",
            "“Heterogeneous Ensemble Classifier with Vote (HECV)” — IJRTE.",
          ],
          conferencePublications: [],
          conferencePresentations: [
            "“Improved Firefly Algorithm (IFA) Based Gene Selection and Deep Flexible Neural Forest for Classification of Cancer Subtypes Based on Gene Expression Data” — ICADSC 2022, SRM Institute of Science and Technology, Kattankulathur.",
            "“Detection of Snore Sounds in Obstructive Sleep Apnea Diagnosis Using Ensemble Feature Selection and Ensemble Convolutional Neural Network with Vote Classification Approach” — Vels Institute of Science, Technology & Advanced Studies.",
            "“Machine Learning Model Application to Predict Heart Problem” — ICARST 2K23, Mohamed Sathak College of Arts and Science.",
            "“Data Mining and E-Commerce” — UGC-sponsored National Level Conference, Gobi Arts and Science College, Gobichettipalayam.",
            "“Ensemble Swarm Intelligent Based Classification (ESIC) Approach for Automatic Detection of Snore Sounds with Acoustic Multi-Feature Analysis” — ICLTSET 2017.",
          ],
          seminars: [],
          workshops: [],
          invitedRoles: [],
          awards: [
            "Best Paper Award for “Machine Learning Model Application to Predict Heart Problem”, ICARST 2K23, Mohamed Sathak College of Arts and Science.",
          ],
        },
      },
      {
        slug: "maheswari-p",
        name: "Maheswari P",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "MCA., M.Phil., SET, Ph.D",
        phone: "9080147779",
        email: "maheswari@crescent.education",
        photo: maheshwariPhoto,
        detailedProfile: {
          education: [
            "B.Sc. in Statistics — Madras University, 2002.",
            "MCA in Computer Applications — Anna University, 2005.",
            "M.Phil. in Computer Science — B.S. Abdur Rahman University, 2013.",
            "SET in Computer Science — Mother Teresa University, 2016.",
            "Ph.D. in Computer Science — B.S. Abdur Rahman Crescent Institute of Science and Technology, 2020.",
          ],
          experience: [
            "Assistant Professor, B.S. Abdur Rahman Crescent Institute of Science and Technology — 23 March 2022 to present (3 years, 9 months, as stated in the supplied profile).",
            "Assistant Professor, C.S.I. Ewart Women’s Christian College — 24 August 2012 to 21 March 2022 (9 years, 7 months).",
            "Lecturer, Prof. Dhanapalan College for Women — 7 February 2011 to 30 June 2011 (5 months).",
            "Lecturer, S.D.N.B. Vaishnav College for Women — 20 May 2005 to 1 June 2006 (1 year).",
          ],
          teachingCourses: [
            "Programming in Java",
            "Cloud Computing",
            "Full Stack Development",
            "Machine Learning",
            "Software Project Management",
            "Design and Analysis of Algorithms",
            "Management Information System",
            "Data Structures and Algorithms",
            "Web Technologies",
            "Programming in C and C++",
            "Computer Applications in Business Organization",
            "Internet of Things",
            "Python Programming",
          ],
          researchInterests: [
            "Data Mining",
            "Machine Learning",
            "Data Science",
            "Predictive Analysis",
            "Natural Language Processing (NLP)",
            "Artificial Intelligence",
            "Deep Learning",
          ],
          supervision: [],
          professionalActivities: [
            "NPTEL Local Chapter, 2021-2022.",
            "Liaison Officer, 2018-2022.",
            "Nodal Officer for Online Certificate Course, 2021-2022.",
            "Nodal Officer for conducting University Theory Examinations, 2020-2021.",
            "Assistant to the Chief Superintendent for University of Madras (regular) and Institute of Distance Education examinations.",
            "External and internal examiner for university practical examinations, 2012-2022.",
            "Managed union, cultural, IQAC and academic activities, including department magazines, timetables, examination schedules, student project guidance, library recommendations, guest lectures, seminars and workshops.",
            "Handled confidential examination work and correspondence with the Regional Joint Director and University of Madras.",
            "Assisted with scholarship administration and AISHE, 2012-2014.",
            "Participated in stock audits.",
            "Member, Internal Complaints Committee, 2013-2022.",
          ],
          training: [
            "Faculty Development Programme on Securities Market.",
            "Faculty Development Programme on Predictive Modelling Using R.",
            "Intellectual Property Rights.",
            "Prospective Areas of Research in Computer Science.",
            "360° of Teaching Excellence: Reinventing Teaching for Gen Next.",
            "Cloud-Based Machine Learning Algorithms for Data Mining.",
            "Women’s Rights are Human Rights.",
            "Quality Assurance in Academic and Sponsored Research.",
            "Google Applications and Android Programming.",
            "Statistical Analysis Using SPSS Package.",
            "International Workshop on Advances in Data and Web Mining.",
            "Application of MATLAB and LABVIEW for Biomedical Applications.",
            "Seminar on Role of AI and IoT for Health Care.",
          ],
          books: [
            "Python Coding Instructor for Beginners, with Jayalakshmi V and Sriram N — Notion Press, ISBN 9781639407330.",
          ],
          journalPublications: [
            "Maheswari Petchiappan and Jaya Aravindhen, “Comparative Study of Machine Learning Algorithms towards Predictive Analytics” — Recent Advances in Computer Science and Communications, Vol. 16, Issue 6, pp. 69-79, published 17 October 2022; DOI 10.2174/2666255816666220623160821, Article ID e230622206361 (Scopus).",
            "Maheswari P. and Jaya A., “Analyzing Tweets for Predicting the Sentiments of Investors in the Stock Markets” — China Petroleum Processing and Petrochemical Technology, Catalyst Research, Vol. 23, Issue 2, pp. 58-72, July 2023 (Web of Science).",
            "Maheswari and A. Jaya, “An Integrated Approach towards Prediction of Stock Values for Short Term” — IFRSA’s International Journal of Computing, Vol. 2, Issue 3, pp. 645-651, July 2012.",
          ],
          conferencePublications: [
            "“Machine Learning Approach for Cloud Data Analytics in IoT”, chapter “Prediction of Stock Market Using Machine Learning-Based Data Analytics” — Wiley Group, 13 July 2021, ISBN 9781119785804, DOI 10.1002/9781119785873.ch14.",
            "“A Handbook on Intelligent Healthcare Analytics: Knowledge Engineering with Big Data”, Chapter 6: “Business Intelligence and Analytics from Big Data” — Scrivener Publishing, Wiley Group, 6 May 2022, DOI 10.1002/9781119792550.ch6.",
            "“Organizing and Collecting the Research Articles Using Web Mining Techniques and Mind Mapping” — National Conference on Recent Trends in Web Technologies, October 2013; published in IJRATE special issue, Vol. 1.",
            "P. Maheswari and A. Jaya, “An Integrated Approach towards Prediction of Stock Values for Long and Short Term” — 3rd National Conference on Futuristic and Advanced Computing Technologies, March 2012.",
            "“Intrusion Detection to Secure Networks Using Machine Learning and Data Mining - Review” — National Conference on RTCSM, April 2019.",
          ],
          conferencePresentations: [
            "Maheswari P. and A. Jaya, “Prediction of Stock Values in Health Care Sectors” — Proceedings of the 45th Indian Social Science Congress, organized by ISSA and B.S. Abdur Rahman Crescent Institute of Science and Technology, 28 March-4 April 2022.",
            "P. Maheswari and A. Jaya, “Organising and Retrieving of Scientific Articles Using Ontology” — 21st International Conference on Computer Science and Information Technology (ICCIT 2016); published in International Journal of Current Engineering and Scientific Research, ISSN 2993-0697, Vol. 3, Issue 8, 2016.",
            "P. Maheswari and Dr. A. Jaya, “Sentiment Based Approach towards Prediction of Stock Values for Long and Short Term” — International Conference on Computational Intelligence and Communication (ICCIC 2012), pp. 17-21, July 2012.",
          ],
          seminars: [
            "Organized two-day International Conference “Pathways to Success in a Global Market Place”, 18-19 July 2019.",
            "Organized seminar on “Big Data Analytics”, 7 February 2020.",
            "Organized seminar on “Recent Trends in Information Technology”, 2 March 2016.",
          ],
          workshops: [],
          invitedRoles: [],
          awards: [],
        },
      },
      {
        slug: "s-manjula",
        name: "S.MANJULA",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "MCA., SET., Ph.D (Pursuing)",
        phone: "9962582595",
        email: "Manjula.s@crescent.education",
        photo: manjulaPhoto,
        detailedProfile: {
          education: [
            "MCA in Computer Applications — IGNOU, 2006.",
            "B.Sc. in Computer Science — Periyar University, 2003.",
          ],
          experience: [
            "Assistant Professor, B.S. Abdur Rahman Crescent Institute of Science and Technology — June 2022 to present (10 months, as stated in the supplied profile).",
            "Assistant Professor, St. Anne’s Arts and Science College for Women, Madavaram, Chennai — January 2019 to September 2020 (1 year, 9 months).",
            "Assistant Professor, Sri Kanyaka Parameswari Arts and Science College for Women, Chennai — June 2017 to November 2018 (1 year, 6 months).",
            "Assistant Professor, R.B. Gothi Jain College for Women, Red Hills, Chennai — December 2013 to March 2016 (2 years, 6 months).",
            "Assistant Professor, Shri Shankarlal Sundarbai Shasun Jain College for Women, Chennai — September 2011 to April 2012 (8 months).",
            "Assistant Professor, Marudhar Kesari Jain College for Women, Vaniyambadi — June 2010 to April 2011 (11 months).",
          ],
          teachingCourses: [
            "Software Engineering",
            "Operating Systems",
            "Client and Server Computing",
            "Data Communication and Networking",
            "Programming in C++ using Data Structures",
            "Fundamentals of Digital Computers",
            "Database Management Systems",
            "Practical labs: C, C++, VB, Java and PC Software",
          ],
          researchInterests: [
            "Social Media Network",
            "Data Mining",
            "Educational Platforms",
            "Deep Learning",
          ],
          supervision: [],
          professionalActivities: [
            "Department course file in-charge.",
            "Academic Audit.",
            "Developed the “Study Portals for BSc and BCA Students” blog to share websites and portals for student learning and career development: http://studyportalbca.blogspot.com/2019/07/bscandbca-students.html.",
          ],
          training: [
            "Udemy online course certificate: “The Basics of Scrum, Agile and Project Delivery”.",
            "International Faculty Development Programme — AIMIT, 24 April 2020.",
            "Online Faculty Development Programme on Computational Intelligence — PSG College of Arts and Science, 12-16 May 2020.",
            "Online certificates in C, C++, Computer Technology Basics, HTML, Mobile Technology Basics, MS Excel 2007, Oracle 9i SQL and programming.",
            "Webinar: “Leading in a VUCA World: Opening Key Note Sessions” — ICT Academy, 20 April 2020.",
            "Webinar: “Leading in a VUCA World: Expert Sessions” — ICT Academy, 21-24 April 2020.",
            "Webinar: “How to Get Published in Scientific Journal: From Research to Publication” — Sairam Institute of Technology, 27 April 2020.",
            "Webinar: “The Future of Education, Employment and Entrepreneurship: Opening Key Note Sessions” — ICT Academy, 5 May 2020.",
            "Webinar: “The Future of Education, Employment and Entrepreneurship: Expert Sessions” — ICT Academy, 6-8 May 2020.",
            "Webinar: “Artificial Intelligence and Its Applications” — Hindustan College of Arts and Science, 21 May 2020.",
            "Online quiz: COVID-19 awareness — Panimalar Medical College, 17 April 2020.",
            "Online mock test on “Research Aptitude” — Kaamadhenu Arts and Science College, 17 May 2020.",
            "National-level technical quiz “Cerebroquiz 20” — D.K.M. College, 19 May 2020.",
            "Online quiz: COVID-19 awareness — Ramakrishna College of Arts and Science, 19 May 2020.",
            "Online quiz: COVID-19 awareness — Sri Muthukumaran Arts and Science College, 19 May 2020.",
            "National-level online quiz on Machine Learning — Thiruthangal Nadar College, 23 May 2020.",
          ],
          books: [],
          journalPublications: [
            "“Accessing E-Learning Tool Udemy: To Make Your Passion Into a Passive Income” — published in Research and Reflections on Education, a quarterly journal, ISSN 0974-648(P), following presentation at eTotal 2023.",
          ],
          conferencePublications: [
            "“Mobile Computing” — paper presented at the National Conference on Recent Trends in Information Technology and published in the proceedings, ISBN 978-9380530-82-6, organized by Vidhya Sagar Women’s College, Chengalpattu.",
            "“Generation of Wireless Communication” — paper presented at the National Conference on Innovative Computing (NCIT) and published in the proceedings, ISBN 978-93-81195-31-4, organized by R.B. Gothi Jain College for Women, Red Hills, Chennai.",
          ],
          conferencePresentations: [
            "“Accessing E-Learning Tool Udemy: To Make Your Passion Into a Passive Income” — presented at the International Conference on Emerging Trends in Online Teaching, Assessment and Learning (eTotal), 24-25 February 2023; published in Research and Reflections on Education, Reg. No. TNENG/2003/10220, ISSN 0974-648(P).",
          ],
          seminars: [
            "National-level seminar on “Best Practices in Higher Education with Reference to Rural Areas” — IQAC, Marudhar Kesari Jain College for Women, affiliated to Tiruvalluvar University and accredited by NAAC, Vaniyambadi.",
          ],
          workshops: [
            "National Workshop on “Social Network Analysis” — Women’s Christian College, Chennai.",
          ],
          invitedRoles: [],
          awards: [
            "Best Paper Award for “Accessing E-Learning Tool Udemy: To Make Your Passion Into a Passive Income” at the International Conference on Emerging Trends in Online Teaching, Assessment and Learning (eTotal), 24-25 February 2023.",
          ],
        },
      },
    ],
  },
  mba: {
    slug: "mba",
    listingRoute: "/mba",
    landingRoute: "/mba",
    name: "MBA",
    fullName: "Master of Business Administration",
    level: "Postgraduate",
    duration: "2 Years",
    eligibility:
      "Any Bachelor's degree (minimum 3 years duration) with a minimum CGPA of 5.0 / 50% of marks.",
    description:
      "Develop skills in management, finance, analytics, entrepreneurship and leadership.",
    vision:
      "To provide a technology based platform for working adults and aspirants of higher degrees in the field of business management through in a flexible mode.",
    mission: [
      "To provide quality education through OL mode in the field of management.",
      "To offer flexible learning for working professionals to upskill their knowledge in their functional areas.",
      "To offer the same curriculum and syllabi as the Institute's regular MBA degree programme to OL learners.",
      "To provide state-of-the-art infrastructure for efficient and interactive teaching and learning using web-based technologies.",
      "To offer industry-oriented courses to meet market demand.",
    ],
    fees: {
      application: "₹1,000",
      tuition: "₹25,000 per semester",
      foreignApplication: "$15",
      foreignTuition: "$1,000",
    },
    listing: {
      description: "Management, finance, analytics, entrepreneurship and leadership practice.",
      eligibility: "Any Bachelor's degree",
    },
    theme: "blue",
    overview: {
      image: mbaOverview,
      imageWidth: 1672,
      imageHeight: 941,
      imageAlt: "MBA leadership and business administration",
      title: "Master of Business Administration",
      programmeLabel: "MBA Online Learning",
      department: "Department of Management Studies",
      paragraphs: [
        "MBA Online Learning (OL) programme of the B.S. Abdur Rahman Crescent Institute of Science and Technology are developed in accordance with the guidelines of the UGC OL Regulations 2020 and in line with the vision and mission of the Institute.",
        "Typically, the curriculum and syllabus contents under both programmes are similar to our regular MBA programme, nevertheless delivered through Online mode using state-of-the-art IT infrastructure and web based technologies.",
        "The programmes are targeted to working adults as well as freshers who aspire to upskill their knowledge across functional areas of management that are evolving in the dynamic business environment in a flexible learning space.",
      ],
    },
    pageConfig: {
      variant: "blue",
      layout: "programme",
      density: "standard",
      navigationLabel: "MBA",
      showActionsOnOverview: false,
      ctaPlacement: "inside",
      mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
      hero: {
        backIcon: { name: "ArrowRight", size: 18, className: "rotate-180" },
        badgeIcon: { name: "GraduationCap", size: 20 },
        badge: "Postgraduate Programme",
        title: "Master of Business Administration",
        description: "MBA Distance Learning | Crescent University Distance Education.",
        applyIcon: { name: "ArrowRight", size: 18 },
        applyTo: "/admission",
        applyHash: "how-to-apply",
      },
      navigation: [
        {
          destination: { type: "route", to: "/mba" },
          icon: { name: "BookOpen", size: 20 },
          title: "Overview",
          description: "Programme overview",
          iconClassName: blueNavIconClass,
        },
        {
          destination: { type: "route", to: "/mba/people" },
          icon: { name: "Users", size: 20 },
          title: "People",
          description: "Faculty & team",
          iconClassName: peopleIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mba", section: "vision" },
          icon: { name: "Eye", size: 20 },
          title: "Vision",
          description: "Our academic vision",
          iconClassName: visionIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mba", section: "mission" },
          icon: { name: "Target", size: 20 },
          title: "Mission",
          description: "Our core mission",
          iconClassName: missionIconClass,
        },
        {
          destination: { type: "courseInfo", courseSlug: "mba", section: "eligibility-fee" },
          icon: { name: "BookOpen", size: 20 },
          title: "Eligibility & Fee",
          description: "Admission details",
          iconClassName: blueNavIconClass,
        },
        {
          destination: { type: "route", to: "/mba/syllabus" },
          icon: { name: "BookOpen", size: 20 },
          title: "Syllabus",
          description: "Programme syllabus",
          iconClassName: visionIconClass,
        },
        {
          destination: { type: "external", href: mbaRegulationsPdf },
          icon: { name: "FileText", size: 20 },
          title: "Regulations",
          description: "Programme regulations",
          iconClassName: missionIconClass,
        },
        {
          destination: { type: "external", href: mbaBrochurePdf },
          icon: { name: "Download", size: 20 },
          title: "Download Brochure",
          description: "Get the programme brochure",
          iconClassName: missionIconClass,
        },
      ],
      actions: [
        {
          destination: { type: "courseInfo", courseSlug: "mba", section: "eligibility-fee" },
          icon: { name: "BookOpen", size: 20 },
          title: "Eligibility & Fee",
          iconBackgroundColor: "#334b7c12",
          iconColor: "#334b7c",
        },
        {
          destination: { type: "route", to: "/mba/syllabus" },
          icon: { name: "BookOpen", size: 20 },
          title: "Syllabus",
          iconClassName: "bg-[#1d355f]/10 text-[#1d355f]",
        },
        {
          destination: { type: "external", href: mbaRegulationsPdf },
          icon: { name: "FileText", size: 20 },
          title: "Regulations",
          iconClassName: "bg-[#d4af37]/10 text-[#8a6d12]",
        },
        {
          destination: { type: "external", href: mbaBrochurePdf },
          icon: { name: "Download", size: 20 },
          title: "Download Brochure",
          iconClassName: "bg-[#334b7c]/10 text-[#334b7c]",
        },
      ],
      cta: {
        label: "Ready to begin?",
        title: "Apply for MBA Online Learning",
        to: "/admission",
        linkText: "Apply Now",
        icon: null,
      },
    },
    cardPresentation: { brochureAvailable: false },
    people: {
      facultyCourseName: "MBA",
      layout: "standard",
      backLabel: "Back to MBA",
      backTo: "/mba",
      heroDescription:
        "Meet the faculty members supporting teaching, academic guidance and learner development in MBA.",
      heading: "Faculty — MBA",
      description: "Academic professionals supporting teaching, guidance and learner development.",
      programmeBadge: "MBA • Faculty",
      programmeName: "Master of Business Administration (MBA)",
      profileLinkLabel: "Faculty Profile",
      profileLinkDescription: "View the faculty profile document.",
      footerMessage:
        "Our MBA faculty team supports academic learning, guidance and the overall development of learners.",
    },
    syllabus: {
      label: "M.B.A.",
      description:
        "Detailed semester-wise syllabus, course structure, credits and elective courses for the Master of Business Administration programme.",
      heading: "M.B.A.",
      notice: "Click Here To Download Our MBA Syllabus",
      downloadLabel: "MBA Syllabus PDF",
      totalCredits: 107,
      note: "* indicates the applicable internship / MOOC component as specified in the programme structure.",
      tables: [
        {
          semester: "SEMESTER Ⅰ",
          total: 30,
          courses: [
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
          ],
        },
        {
          semester: "SEMESTER Ⅱ",
          total: 30,
          courses: [
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
          ],
        },
        {
          semester: "SEMESTER Ⅲ",
          total: "Min: 36",
          courses: [
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
          ],
        },
        {
          semester: "SEMESTER Ⅳ",
          total: "Min: 11",
          courses: [
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
          ],
        },
      ],
      download: {
        pdfHref: "/pdfs/mba-syllabus.pdf",
        title: "Download MBA Syllabus",
        description: "Please fill in your details to access the syllabus PDF.",
        successDescription:
          "Thank you for submitting your details. You can now download the MBA syllabus.",
        theme: "purple",
      },
    },
    metadata: {
      title: "MBA Online Learning — Crescent CDOE",
      description:
        "Explore the MBA Online Learning programme at Crescent, including eligibility, fees, faculty and syllabus.",
      canonicalPath: "/mba",
      pages: {
        overview: {
          title: "MBA Online Learning — Crescent CDOE",
          description: "MBA programme overview.",
        },
        people: { title: "MBA Faculty — Crescent CDOE", description: "Meet the MBA faculty." },
        syllabus: {
          title: "MBA Syllabus — Crescent CDOE",
          description: "MBA semester-wise syllabus and course structure.",
        },
      },
      sections: {
        vision: {
          title: "MBA Vision - Crescent CDOE",
          description: "Academic vision for Master of Business Administration.",
        },
        mission: {
          title: "MBA Mission - Crescent CDOE",
          description: "Mission and educational objectives for Master of Business Administration.",
        },
        "eligibility-fee": {
          title: "MBA Eligibility & Fees - Crescent CDOE",
          description:
            "Admission eligibility and fee information for Master of Business Administration.",
        },
      },
    },
    staffDirectory: { level: "pg", profileDestination: "profile", cardStyle: "standard" },
    faculty: [
      {
        slug: "dr-s-thowseaf",
        name: "Dr. S. Thowseaf",
        designation: "Assistant Director & Assistant Professor",
        qualification: "Ph.D. in Management, MBA, B.Tech. (E.C.E.), SET",
        phone: "+91-7358167123",
        email: "thowseaf786@gmail.com",
        photo: thowseafPhoto,
        detailedProfile: {
          education: [
            "Ph.D. in Management — Alagappa University, 2015–2019; course work examination: 70.67%.",
            "M.B.A. — Dhaanish Ahmed College (Anna University), 2013–2015; 72.90%.",
            "B.Tech. in E.C.E. — B.S. Abdur Rahman University, 2009–2013; 70.70%.",
            "HSC — S.R.D.F. Vivekananda Vidyalaya, 2009; 86.33%.",
            "State Eligibility Test (SET) for Lectureship — passed in the General Category.",
          ],
          experience: [
            "Assistant Director & Assistant Professor, Centre for Distance and Online Education, B.S. Abdur Rahman Crescent Institute of Science and Technology — July 2022 to present.",
            "Head of Department, B.B.A., Quade Milleth College (Shift-II) — January 2019 to July 2022.",
            "NSS Programme Officer, Quade Milleth College (Shift-II), Madras University — July 2019 to July 2022.",
            "Full-Time Research Scholar in Management, Alagappa University — October 2015 to January 2019.",
            "Freelance Research Associate, ARS Market Research Services — July 2013 to October 2015.",
          ],
          teachingCourses: [
            "Business Administration",
            "Fundamentals of Research",
            "Human Resources",
            "International Business Administration",
            "Marketing",
            "International Trade Finance",
            "Finance",
          ],
          researchInterests: [
            "Business and social research",
            "Fundamentals of research",
            "Human resources",
            "International business",
            "Marketing",
            "International trade finance",
            "Finance",
          ],
          supervision: [],
          professionalActivities: [
            "Editor, RcHub Publishing House.",
            "NSS Programme Officer, Quade Milleth College (Shift-II), Madras University, July 2019 to July 2022.",
            "Competencies: teaching, research and administration.",
          ],
          training: [
            "SPSS certification programmes: 2.",
            "Computer applications: MS Office, SPSS, E-Views and AMOS.",
          ],
          books: ["Two books authored."],
          journalPublications: ["38 articles published.", "48 publications with ISSN and ISBN."],
          conferencePublications: [],
          conferencePresentations: ["19 conferences attended."],
          seminars: ["13 seminars attended."],
          workshops: ["3 workshops attended."],
          invitedRoles: [],
          awards: ["Young Scientist Award."],
        },
      },
      {
        slug: "dr-v-agalya",
        name: "Dr. V. Agalya",
        designation: "Assistant Professor",
        natureOfEmployment: "Regular",
        qualification: "B.A., M.A., M.Phil., MBA, Ph.D.",
        phone: "9941265449",
        email: "agalyav@crescent.education",
        photo: agalyaPhoto,
        detailedProfile: {
          education: [
            "Ph.D. — Business Administration, January 2020, Manonmaniam Sundaranar University, Tirunelveli.",
            "MBA — Business Administration, 2012, Anna University, Chennai.",
            "M.Phil. — Economics, 2009, Vinayaga Mission University, Salem.",
            "M.A. — Economics, 2008, University of Madras, Chennai.",
            "B.A. — Economics, 2002, University of Madras, Chennai.",
          ],
          experience: [
            "Assistant Professor — SRM Institute of Science and Technology, College of Science and Humanities, Department of Business Administration, Vadapalani, Chennai. August 2022 to January 2023 (6 months).",
            "Assistant Professor & Head — Dr. M.G.R. Educational and Research Institute, Department of Economics, Maduravoyal, Chennai. February 2021 to July 2022 (1 year 6 months).",
            "Coordinator - ESPAC (Energy, Sponsored Project and Consultancy) — B.S. Abdur Rahman Crescent Institute of Science and Technology, Vandalur, Chennai. July 2019 to February 2021 (1 year 8 months).",
            "Assistant Professor — Karpaga Vinayaga College of Engineering & Technology, Mathuranthagam, Chennai. July 2016 to April 2019 (2 years 10 months).",
            "Assistant Professor — GKM College of Engineering & Technology, Chennai. September 2012 to December 2015 (3 years 3 months).",
            "HR - Admin Executive — GKM College of Engineering & Technology, Chennai. March 2006 to December 2015 (11 years 9 months).",
            "Admin Assistant — SSD Oil Mills Ltd (Supreme Edible Oil), Chennai. August 2003 to November 2004 (1 year 3 months).",
          ],
          teachingCourses: [
            "Principles of Management",
            "Sales and Distribution Marketing",
            "International Marketing",
            "Services Marketing",
            "Business Analytics",
            "Human Resource Management",
            "Organisational Behaviour",
            "Logistics & Supply Chain Management",
            "Strategic Management",
            "Project Management",
            "Material Management",
            "Managing Disruptive Technologies",
          ],
          researchInterests: ["SERVQUAL Model", "Gap Analysis", "Business Analytics", "HRIS"],
          supervision: [
            "Ph.D. thesis titled 'An Empirical Study on Employees Problems and Prospects in Leather Industries with Special Reference to Chennai City.'",
            "Research project titled 'A Study on Employees Performance Appraisal with Special Reference to Teaching Professional in GKM College of Engineering and Technology.'",
            "Research project titled 'A Study on Employee Attrition with Special Reference to New Joinees in IP Rings Ltd (India Pistons Limited).'",
            "Research project titled 'A Study on Women Self Help Group at Thiruvallur District.'",
          ],
          professionalActivities: [
            "Head of the Department, Department of Economics, Dr. M.G.R. Educational and Research Institute, 2021-2022.",
            "Research Coordinator, ESPAC, 2019-2021.",
            "Department level NAAC Coordinator, 2016-2018 and 2021.",
            "Department level ISO Coordinator, 2012-2015.",
            "Board of Study member in Department of Economics (UG & PG), Dr. M.G.R. Educational and Research Institute, 2021-2022.",
            "Prepared syllabus for B.A. and M.A. Economics programmes during 2021-2022.",
          ],
          training: [
            "Two Days Faculty Orientation Programme on Salient Attributes for Professional Development, SRM Institute of Science and Technology, Chennai.",
            "Two Days FDP/Workshop on How Teachers Can Make a Difference Through Outcome Based Education, Teaching Learning Center (TLC), IIT Madras, Chennai.",
            "Six Days FDP on Recent Trends of Research in Commerce and Business Studies, SRM Institute of Science and Technology, Chennai.",
            "Five Days National Level e-Workshop on Innovation Techniques in SPSS and Data Analysis, Sathyabama Institute of Science and Technology, Chennai.",
            "Five Days online Faculty Development Programme on Mentoring Teaching & Pedagogy in Technical Education, Dr. M.G.R. Educational and Research Institute, 29 November to 3 December 2021.",
            "FDP on Learning Statistics and Data Interpretation Using SPSS (SERIE-1), Saveetha Engineering College, Chennai.",
            "FDP on Research Methodology Shiksha - 5 Series, Dr. M.G.R. Educational and Research Institute, Chennai.",
            "FDP on Innovation & Entrepreneurship, 30 Hours, Dr. M.G.R. Educational and Research Institute in association with IEEE.",
          ],
          books: [],
          journalPublications: [
            "Analytical Study on Parents' Attitude Towards the Education of Girl Children with Special Reference to Villupuram District, Tamil Nadu — The Seybold Report, Volume 17, Issue 10, 2022, pp. 133-148, DOI 10.5281/zenodo.7155359.",
            "The Effect of Digital India Program with Reference to Chennai City — An Critical Analysis — The Seybold Report, Volume 17, Issue 8, 2022, pp. 1363-1379, DOI 10.5281/zenodo.7009806.",
            "Business Continuity and Decision Making after the Covid 19 — an Overview — Annals of R.S.C.B., ISSN 1583-6258, Vol. 25, Issue 6, 2021, pp. 10966-10978.",
            "Examining Occupational Hazards of Employees in Leather Manufacturing Industry — Annals of R.S.C.B., ISSN 1583-6258, Vol. 25, Issue 4, 2021, pp. 18593-18602.",
            "Performance of Indian Mutual Funds, Risk and Returns during Covid-19 — An Overview — Turkish Online Journal of Qualitative Inquiry, Volume 12, Issue 7.",
            "A Study on Quality of Work-Life of Employees in Leather Goods Manufacturing Industries at Chennai — PARISHODH JOURNAL, UGC Care List - Group I, Vol. IX, Issue III, March 2020, pp. 6214-6224.",
            "Recent Trends in Development of Workplace Policies and Procedure in Leather Goods Manufacturing Companies Chennai — International Journal of Management Studies, Vol. V, Issue 4(1), October 2018.",
            "A Study on Employees Safety and Health Hazards Measures of Leather Goods Manufacturing Companies — SUMEDHA Journal of Management, Vol. 5, No. 2, 2016, pp. 63-73.",
          ],
          conferencePublications: [],
          conferencePresentations: [
            "Impact of Utilizing Artificial Intelligence on Business — An Investigative Study — 6th International Conference on Management, Accounting, Banking, Economics and Business Research for Sustainable Development, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai, 1 March 2023.",
            "Analyze the Effectiveness of Digital India Programme with Reference to Chennai City — BIZAD 2022, 8th International Conference on Technology Agility and Transformed Management Practices during Pandemic, SRM Institute of Science and Technology, Kattankulathur, 16 March 2022.",
            "A Study on Quality of Work-Life of Employees in Leather Goods Manufacturing Industries at Chennai — International Conference on Innovations and Challenges in Global Business (ICICGB 2020), The New College, Chennai.",
            "Analyzing the Effectiveness on Employees Retention in Leather Industries at Chennai, Tamil Nadu, India — First International Conference on Indian Context, Nature, Science, Information Media, General Management, Humanities and Technology (INSIGHT'20), S.A. College of Arts and Science, Chennai.",
            "Examining Occupational Hazards of Employees in Leather Manufacturing Industry — Third International Conference on Interdisciplinary Global Applied Research (ICIGAR-2020), Fortune Park, Vellore.",
            "A Study on Employees Work Life Balance in Leather Goods Manufacturing Industries at Chennai City — 7th International Conference in Futuristic Trends in Master of Business Administration (ICFETM2K18).",
            "A Study on Indian Leather Industries — Growth and Prospects — International Conference on Recent Trends in Science, Engineering & Management (ICRTSEM-2017).",
          ],
          seminars: [
            "International Conference on Advance Research and Innovation in Engineering, Science, Technology and Management - 2015.",
            "National Conference on Business in the New Millennium: The Ever-Changing Landscape - 2018 — 'Recent Trends in Development of Work Policies and Procedures in Leather Goods Manufacturing Industries.'",
            "National Conference on Emerging Trends in Management - 2016 — 'A Study on Employees Welfare Measures and Social Security Benefits in Leather Goods Manufacturing Companies at Chennai.'",
          ],
          workshops: [
            "One-day workshop on Empowering Research, New Prince Shri Bhavani College of Engineering and Technology, 16 August 2019.",
            "E-Quiz programme of National Sports Day 2020, Department of Physical Education, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.",
            "Live Webinar on Cyber Forensics and the Current Challenges, Department of Information Technology, School of Computer, Information and Mathematical Sciences, 13 June 2020.",
            "Webinar on Soft Skills Needed to Face the After Pandemic Scenario, Department of Mechanical Engineering, T.J.S. Engineering College, 12 June 2020.",
            "State level online Tamil talent test, May 2020, Department of Tamil, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.",
          ],
          invitedRoles: [
            "Invited as speaker and chief guest for Faculty Development Programme on 'NAAC Accreditation for Academic Excellence', M.M.E.S Women's Arts and Science College, Melvisharam, Vellore, 17 December 2022.",
            "Invited as speaker and chief guest for webinar on 'Controlling Cost Fluctuations in a Quick Service Restaurant — Economic Aspect to be adopted', HMCT, Dr. M.G.R. E&RI, Chennai, 4 October 2021.",
            "Conducted webinar on 'Research Methodology' with Dr. K. Malathi, Department of Economics, University of Madras.",
            "Organized guest lecture on 'Insurance Market' with Mr. R.M. Muthukaruppan, Internal Auditor, Royal Sundaram General Insurance Co. Ltd.",
          ],
          awards: [
            "NPTEL — Successfully completed and Elite ranked in 8-week course on Marketing Management I.",
            "NPTEL — Successfully completed 12-week course in Financial Accounting.",
            "Training of Trainers (ToT) on Social Accountability Tools and Techniques for Good Governance, NIRD & PR, Government of India, Hyderabad.",
            "Institute level Programme Mentor for Entrepreneurship Development Cell by TN EDII, conducted by Anna University.",
            "Research manuscript peer-reviewer for Asian Research Journal of Arts & Social Sciences and Asian Journal of Medicine and Health.",
            "Won Best Performer Award for excellence in administration work in 2007-2008.",
            "Received cash rewards for producing 100% results in university examination.",
          ],
        },
      },
    ],
  },
} satisfies Record<string, CourseInfo>;

export const courseInfo: CourseInfo[] = Object.values(programmes);
export const programmeRegistry: Record<string, CourseInfo> = programmes;

export const programmeListings: ProgrammeListing[] = courseInfo.map((programme) => {
  if (!programme.overview) {
    throw new Error(`Programme "${programme.slug}" is missing its programme-card image.`);
  }
  return {
    slug: programme.slug,
    name: programme.name,
    full: programme.fullName,
    level: programme.level,
    duration: programme.duration,
    eligibility: programme.listing.eligibility,
    description: programme.listing.description,
    landingRoute: programme.features?.overview === false ? undefined : programme.landingRoute,
    theme: programme.theme,
    image: {
      src: programme.overview.image,
      width: programme.overview.imageWidth,
      height: programme.overview.imageHeight,
    },
    cardPresentation: programme.cardPresentation,
  };
});

export const ugProgrammeListings = programmeListings.filter(
  (programme) => programme.level === "Undergraduate",
);

export const pgProgrammeListings = programmeListings.filter(
  (programme) => programme.level === "Postgraduate",
);

export const certificationProgrammeListings = programmeListings.filter(
  (programme) => programme.level === "Certification",
);

export function getCourseInfo(slug: string) {
  return programmeRegistry[slug];
}

export function getRequiredCourseInfo(slug: string) {
  const course = getCourseInfo(slug);
  if (!course) {
    throw new Error(`Unknown programme slug "${slug}".`);
  }
  return course;
}

export function getRequiredProgrammePageConfig(slug: string) {
  const programme = getRequiredCourseInfo(slug);
  const pageConfig = programme.pageConfig;
  if (!pageConfig) {
    throw new Error(`Programme "${slug}" does not have a page configuration.`);
  }
  return filterProgrammePageConfig(programme, pageConfig);
}

export function getProgrammePageConfig(programme: CourseInfo): ProgrammePageConfig {
  const pageConfig = programme.pageConfig ?? getGenericProgrammePageConfig(programme);
  return filterProgrammePageConfig(programme, pageConfig);
}

function filterProgrammePageConfig(
  programme: CourseInfo,
  pageConfig: ProgrammePageConfig,
): ProgrammePageConfig {
  const isDestinationEnabled = (destination: ProgrammeDestination) => {
    if (destination.type === "courseInfo") {
      return programme.features?.courseInfoSections?.[destination.section] !== false;
    }
    if (destination.type !== "route" || !programme.landingRoute) return true;

    const route = destination.to.split(/[?#]/, 1)[0];
    if (route === programme.landingRoute) {
      return programme.features?.overview !== false && !!programme.overview;
    }
    if (route === `${programme.landingRoute}/people`) {
      return programme.features?.people !== false && !!programme.people && !!programme.faculty;
    }
    if (route === `${programme.landingRoute}/syllabus`) {
      return programme.features?.syllabus !== false && !!programme.syllabus;
    }
    return true;
  };

  return {
    ...pageConfig,
    navigation: pageConfig.navigation.filter((item) => isDestinationEnabled(item.destination)),
    actions: pageConfig.actions.filter((item) => isDestinationEnabled(item.destination)),
  };
}

export function getProgrammeMetadata(slug: string, page: ProgrammeMetadataPage) {
  const programme = getCourseInfo(slug);
  const metadata = programme?.metadata;
  if (!programme) return undefined;

  if (page === "overview") {
    if (programme.landingRoute) {
      if (
        programme.features?.overview === false ||
        !programme.overview ||
        !programme.pageConfig ||
        !metadata
      ) {
        return undefined;
      }
      return { ...metadata.pages.overview, canonicalPath: metadata.canonicalPath };
    }

    if (programme.features?.overview === false) {
      return undefined;
    }
    return {
      title: metadata?.pages.overview.title ?? `${programme.name} — Crescent CDOE`,
      description:
        metadata?.pages.overview.description ??
        `${programme.fullName} programme information and admission details.`,
      canonicalPath: `/course-info/${encodeURIComponent(programme.slug)}`,
    };
  }
  if (page === "people" || page === "syllabus") {
    if (!programme.landingRoute || !metadata) return undefined;
    if (
      page === "people" &&
      (programme.features?.people === false ||
        !programme.people ||
        !programme.faculty ||
        !programme.pageConfig)
    ) {
      return undefined;
    }
    if (
      page === "syllabus" &&
      (programme.features?.syllabus === false || !programme.syllabus || !programme.pageConfig)
    ) {
      return undefined;
    }
    return {
      ...metadata.pages[page],
      canonicalPath: `${metadata.canonicalPath}/${page}`,
    };
  }

  if (programme.features?.courseInfoSections?.[page] === false) return undefined;
  const sectionMetadata = metadata?.sections[page] ?? {
    title: `${programme.name} ${page === "eligibility-fee" ? "Eligibility & Fees" : page} — Crescent CDOE`,
    description:
      page === "vision"
        ? programme.vision
        : page === "mission"
          ? programme.mission.join(" ")
          : `${programme.eligibility} ${programme.fees ? `Application fee: ${programme.fees.application}. Tuition fee: ${programme.fees.tuition}.` : ""}`,
  };
  return {
    ...sectionMetadata,
    canonicalPath: `/course-info/${encodeURIComponent(programme.slug)}/${page}`,
  };
}

function withProgrammeFaculty(
  programme: CourseInfo,
  faculty: FacultyProfile,
): ProgrammeFacultyProfile {
  return {
    ...faculty,
    courseSlug: programme.slug,
    courseName: programme.people?.facultyCourseName ?? programme.name,
  };
}

export function getFacultyForCourse(slug: string): ProgrammeFacultyProfile[] {
  const programme = getCourseInfo(slug);
  return (programme?.faculty ?? []).map((faculty) => withProgrammeFaculty(programme, faculty));
}

export function getFacultyProfile(
  courseSlug: string,
  facultySlug: string,
): ProgrammeFacultyProfile | undefined {
  return getFacultyForCourse(courseSlug).find((faculty) => faculty.slug === facultySlug);
}

export function getFacultyDirectoryData(): FacultyDirectoryEntry[] {
  return courseInfo.flatMap((programme) => {
    const directory = programme.staffDirectory;
    if (
      !directory ||
      programme.features?.people === false ||
      !programme.people ||
      !programme.faculty
    ) {
      return [];
    }

    return getFacultyForCourse(programme.slug).map((faculty) => ({
      ...faculty,
      level: directory.level,
      theme: programme.theme ?? "blue",
      profileDestination: directory.profileDestination,
      cardStyle: directory.cardStyle,
    }));
  });
}
