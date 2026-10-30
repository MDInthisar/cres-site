export type CourseSection = "vision" | "mission" | "eligibility-fee";

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

const sharedVision =
  "To provide accessible, quality distance and online education that helps learners grow academically, professionally and personally.";

const sharedMission = [
  "To deliver flexible, student-centred learning supported by relevant academic resources.",
  "To help learners develop knowledge and practical skills for further study and their chosen careers.",
  "To provide an inclusive learning environment with academic support throughout the programme.",
];

const islamicStudiesVision =
  "The school looks forward to be a leader in Arabic and Islamic Studies to promote graduates, capable of bringing about positive change for the betterment of self, family, society and humanity based on moderate approach of revealed knowledge and modern science.";

const islamicStudiesMission = [
  "To empower the younger generation through quality education in both revealed and contemporary knowledge.",
  "To promote leadership quality and overall personality to face global challenges.",
  "To develop logical and creative thinking through research.",
  "To provide excellent ambience for language and soft skill development.",
];

export const courseInfo: CourseInfo[] = [
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
  //   vision: sharedVision,
  //   mission: sharedMission,
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
  //   vision: sharedVision,
  //   mission: sharedMission,
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
  //   vision: sharedVision,
  //   mission: sharedMission,
  //   listing: {
  //     description:
  //       "Build modern Android and iOS applications using contemporary cross-platform technologies.",
  //     eligibility: "12th / Diploma / Degree",
  //   },
  // },
];

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

export const registrationProgrammeOptions = [
  { slug: "mba", value: "MBA" },
  { slug: "mca", value: "MCA" },
  { slug: "ba-islamic-studies", value: "BAIS" },
] as const;
