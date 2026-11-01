import islamicStudiesOverview from "@/assets/optimized/islamic-studies.webp";
import mbaOverview from "@/assets/optimized/MBA Leadership at Golden Hour.webp";
import mcaOverview from "@/assets/optimized/MCA Tech Workstation_ Coding and Innovation.webp";
import mbaBrochurePdf from "@/assets/ODL MBA Website Brochure09012026.pdf";
import mcaBrochurePdf from "@/assets/ODL MCA Website Brochure09012026.pdf";
import baIslamicBrochurePdf from "@/assets/ODL B.A. Islamic Studies Website Brochure09012026.pdf";
import mbaRegulationsPdf from "@/assets/DeanAA-MBA-MCA-ODL-and-OL-Regulations2021-24.11.2021-F.pdf";
import baIslamicRegulationsPdf from "@/assets/DeanAA-BAIslamic-StudiesR2021.pdf";

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
  | { type: "route"; to: string; search?: { programme?: "mba" | "mca" } }
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
  variant: "mba" | "mca" | "ba-islamic-studies" | "generic";
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
  theme: "blue" | "green";
  paragraphs: string[];
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
  overview?: ProgrammeOverviewContent;
  pageConfig?: ProgrammePageConfig;
};

export type ProgrammeLandingRoute = "/ba-islamic-studies" | "/mca" | "/mba";

export type ProgrammePageRoute =
  | "/ba-english"
  | "/ba-islamic-studies"
  | "/ba-public-policy"
  | "/ma-islamic-studies"
  | "/mba"
  | "/mca"
  | "/mobile-application-development";

export type ProgrammeListing = {
  slug: string;
  name: string;
  full: string;
  level: CourseInfo["level"];
  duration: string;
  eligibility: string;
  description: string;
};

const islamicStudiesVision =
  "The school looks forward to be a leader in Arabic and Islamic Studies to promote graduates, capable of bringing about positive change for the betterment of self, family, society and humanity based on moderate approach of revealed knowledge and modern science.";

const islamicStudiesMission = [
  "To empower the younger generation through quality education in both revealed and contemporary knowledge.",
  "To promote leadership quality and overall personality to face global challenges.",
  "To develop logical and creative thinking through research.",
  "To provide excellent ambience for language and soft skill development.",
];

const baseCourseInfo: CourseInfo[] = [
  // {
  //   slug: "ba-english",
  //   listingRoute: "/ba-english",
  //   name: "BA English",
  //   fullName: "Bachelor of Arts in English",
  //   level: "Undergraduate",
  //   duration: "3 Years",
  //   eligibility: "10+2 in any stream",
  //   description:
  //     "Study English language, literature and communication through flexible distance learning.",
  //   listing: {
  //     description: "Literature, language and communication for modern careers.",
  //     eligibility: "10+2 in any stream",
  //   },
  // },
  {
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
    vision: islamicStudiesVision,
    mission: islamicStudiesMission,
    fees: {
      application: "₹1,000",
      tuition: "₹15,000 per year",
    },
    listing: {
      description: "Classical and contemporary Islamic thought, civilisation and ethics.",
      eligibility: "10+2 in any stream",
    },
  },
  // {
  //   slug: "ba-public-policy",
  //   listingRoute: "/ba-public-policy",
  //   name: "BA Public Policy",
  //   fullName: "Bachelor of Arts in Public Policy",
  //   level: "Undergraduate",
  //   duration: "3 Years",
  //   eligibility: "10+2 in any stream",
  //   description: "Build foundations in governance, economics and policy analysis.",
  //   listing: {
  //     description: "Governance, economics and policy analysis fundamentals.",
  //     eligibility: "10+2 in any stream",
  //   },
  // },
  // {
  //   slug: "ma-islamic-studies",
  //   listingRoute: "/ma-islamic-studies",
  //   name: "MA Islamic Studies",
  //   fullName: "Master of Arts in Islamic Studies",
  //   level: "Postgraduate",
  //   duration: "2 Years",
  //   eligibility: "Bachelor's degree",
  //   description:
  //     "Pursue advanced study and research in Islamic sciences, civilisation and thought.",
  //   vision: islamicStudiesVision,
  //   mission: islamicStudiesMission,
  //   listing: {
  //     description: "Advanced study and research in Islamic sciences, civilisation and thought.",
  //     eligibility: "Bachelor's degree",
  //   },
  // },
  {
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
  },
  {
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
  },
  // {
  //   slug: "mobile-application-development",
  //   listingRoute: "/mobile-application-development",
  //   name: "Mobile Application Development",
  //   fullName: "Professional Certification Programme",
  //   level: "Certification",
  //   duration: "6 Months",
  //   eligibility: "12th / Diploma / Degree",
  //   description:
  //     "Build modern Android and iOS applications using contemporary cross-platform technologies.",
  //   listing: {
  //     description:
  //       "Build modern Android and iOS applications using contemporary cross-platform technologies.",
  //     eligibility: "12th / Diploma / Degree",
  //   },
  // },
];

const programmeOverviewData: Record<"mba" | "mca" | "baIslamicStudies", ProgrammeOverviewContent> =
  {
    mba: {
      image: mbaOverview,
      imageWidth: 1672,
      imageHeight: 941,
      imageAlt: "MBA leadership and business administration",
      title: "Master of Business Administration",
      programmeLabel: "MBA Online Learning",
      department: "Department of Management Studies",
      theme: "blue",
      paragraphs: [
        "MBA Online Learning (OL) programme of the B.S. Abdur Rahman Crescent Institute of Science and Technology are developed in accordance with the guidelines of the UGC OL Regulations 2020 and in line with the vision and mission of the Institute.",
        "Typically, the curriculum and syllabus contents under both programmes are similar to our regular MBA programme, nevertheless delivered through Online mode using state-of-the-art IT infrastructure and web based technologies.",
        "The programmes are targeted to working adults as well as freshers who aspire to upskill their knowledge across functional areas of management that are evolving in the dynamic business environment in a flexible learning space.",
      ],
    },
    mca: {
      image: mcaOverview,
      imageWidth: 1536,
      imageHeight: 1024,
      imageAlt: "MCA computer applications and technology",
      title: "Master of Computer Applications",
      programmeLabel: "MCA",
      department: "Department of Computer Applications",
      theme: "blue",
      paragraphs: [
        "The department offers Master of Computer Applications (MCA) since 1994, M.Phil (Computer Science) since 2009, Ph.D (Computer Science) since 2009, MCA (Lateral Entry) since 2014. The department motivates Staff and Students to promote Industry Institute Interaction and R&D activities. In addition to regular curriculum the department organizes technical seminars, symposia, workshops, industrial visits, in-plant training to expose the students to the real world environments and to enable them to gain practical knowledge.",
        "The website and Internet services of the institute are maintained by the Department of Computer Applications. Along with that the Department offers additional virtual lab classes, live classes, tutorial MOOC’s and vocational augmentation. Courses through IIT Professors under MHRD’s QEEE programme. Special placement opportunities on mobile development in Android/IOs platforms.",
        "The MCA Programme was accredited by NBA since 2001. The department has adequate infrastructure and well-equipped laboratories and it is empowered with a team of highly qualified faculty members.",
      ],
    },
    baIslamicStudies: {
      image: islamicStudiesOverview,
      imageWidth: 1536,
      imageHeight: 1024,
      imageAlt: "Islamic studies books and learning environment",
      title: "Bachelor of Arts in Islamic Studies",
      programmeLabel: "BA Islamic Studies",
      department: "Department of B.A. Islamic Studies",
      theme: "green",
      paragraphs: [
        "The school was established in 2009 with the vision of promoting faith and value based education by combining religious education and modern science. It was the dream of the founder Dr. B.S. Abdur Rahman to promote a set of younger generation equipped with both the revealed and scientific knowledge. By establishment of this school, his dream became true.",
        "The school offers UG, PG and Ph.D. programmes in Arabic and Islamic studies, aiming at bringing Islamic studies into the mainstream of modern education by combining revealed knowledge and modern science.",
      ],
    },
  };

type PageConfig = ProgrammePageConfig;

export function getGenericProgrammePageConfig(course: CourseInfo): PageConfig {
  return {
    variant: "generic",
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
const mbaProgrammePageConfig: PageConfig = {
  variant: "mba",
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
};

const mcaProgrammePageConfig: PageConfig = {
  variant: "mca",
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
};

const baIslamicStudiesProgrammePageConfig: PageConfig = {
  variant: "ba-islamic-studies",
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
};

const programmePresentationBySlug = {
  mba: { overview: programmeOverviewData.mba, pageConfig: mbaProgrammePageConfig },
  mca: { overview: programmeOverviewData.mca, pageConfig: mcaProgrammePageConfig },
  "ba-islamic-studies": {
    overview: programmeOverviewData.baIslamicStudies,
    pageConfig: baIslamicStudiesProgrammePageConfig,
  },
} as const;

export const courseInfo: CourseInfo[] = baseCourseInfo.map((course) => {
  const presentation =
    programmePresentationBySlug[course.slug as keyof typeof programmePresentationBySlug];
  return presentation ? { ...course, ...presentation } : course;
});

export const programmeListings: ProgrammeListing[] = courseInfo.map((course) => ({
  slug: course.slug,
  name: course.name,
  full: course.fullName,
  level: course.level,
  duration: course.duration,
  eligibility: course.listing.eligibility,
  description: course.listing.description,
}));

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
  return courseInfo.find((course) => course.slug === slug);
}

export function getRequiredCourseInfo(slug: string) {
  const course = getCourseInfo(slug);
  if (!course) {
    throw new Error(`Unknown programme slug "${slug}".`);
  }
  return course;
}

export function getRequiredProgrammeOverview(slug: string) {
  const overview = getRequiredCourseInfo(slug).overview;
  if (!overview) {
    throw new Error(`Programme "${slug}" does not have overview content.`);
  }
  return overview;
}

export function getRequiredProgrammePageConfig(slug: string) {
  const pageConfig = getRequiredCourseInfo(slug).pageConfig;
  if (!pageConfig) {
    throw new Error(`Programme "${slug}" does not have a page configuration.`);
  }
  return pageConfig;
}
