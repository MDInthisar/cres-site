import {
  certificationProgrammeListings,
  pgProgrammeListings,
  ugProgrammeListings,
} from "@/data/programmes";

export const college = {
  name: "Crescent Institute",
  unit: "Centre for Distance and Online Education",

  address: "Crescent Campus, GST Road, Vandalur, Chennai – 600 048",
  shortAddress: "Vandalur, Chennai – 600 048",

  email: "admissions@crescentcdoe.edu.in",
  whatsapp: "9176286276",

  numbers: [
    {
      label: "MBA",
      value: "+91 9790953750",
      tel: "+919790953750",
    },
    {
      label: "MCA",
      value: "+91 9444437309",
      tel: "+919444437309",
    },
    {
      label: "Islamic Studies",
      value: "+91 8667530226",
      tel: "+918667530226",
    },
  ],

  mapEmbed: "https://www.google.com/maps?q=Vandalur,+Chennai&output=embed",

  mapLink: "https://www.google.com/maps/search/?api=1&query=Vandalur+Chennai",

  officeHours: [
    {
      day: "Monday – Friday",
      time: "9:00 AM – 5:30 PM",
    },
    {
      day: "Saturday",
      time: "9:00 AM – 1:00 PM",
    },
    {
      day: "Sunday & Holidays",
      time: "Closed",
    },
  ],
};

/* =========================================================
   NAVIGATION TYPES
========================================================= */

export type NavChild = {
  label: string;
  to: string;
  hash?: string;
};

export type NavItem = {
  label: string;
  to: string;
  children?: NavChild[];
};

/* =========================================================
   MAIN NAVIGATION
========================================================= */

export const navItems: NavItem[] = [
  {
    label: "Home",
    to: "/",
  },

  {
    label: "About Us",
    to: "/about",
    children: [
      {
        label: "Visionary Team",
        to: "/about",
        hash: "visionary-team",
      },
      {
        label: "Execution Team",
        to: "/about",
        hash: "execution-team",
      },
      {
        label: "CDOE Team",
        to: "/about",
        hash: "cdoe-team",
      },
      {
        label: "Facilities",
        to: "/about",
        hash: "facilities",
      },
    ],
  },

  {
    label: "Programmes Offered",
    to: "/programmes",
    children: [
      {
        label: "UG Programmes",
        to: "/programmes",
        hash: "ug",
      },
      {
        label: "PG Programmes",
        to: "/programmes",
        hash: "pg",
      },
      {
        label: "Certification",
        to: "/programmes",
        hash: "certification",
      },
    ],
  },

  {
    label: "Admission",
    to: "/admission",
    children: [
      {
        label: "How to Apply",
        to: "/admission",
        hash: "how-to-apply",
      },
      {
        label: "New Registration",
        to: "/admission",
        hash: "new-registration",
      },
      {
        label: "Applicant Login",
        to: "/admission",
        hash: "applicant-login",
      },
      {
        label: "Notification",
        to: "/admission",
        hash: "notification",
      },
    ],
  },

  {
    label: "Students Corner",
    to: "/students-corner",
    children: [
      {
        label: "LMS Login",
        to: "/students-corner",
        hash: "lms-login",
      },
      {
        label: "Student Affairs",
        to: "/students-corner",
        hash: "student-affairs",
      },
    ],
  },

  {
    label: "UGC Corner",
    to: "/ugc-corner",
    children: [
      {
        label: "AICTE Approval",
        to: "/ugc-corner",
        hash: "aicte-approval",
      },
      {
        label: "Degree Equivalence",
        to: "/ugc-corner",
        hash: "degree-equivalence",
      },
      {
        label: "UGC Notification",
        to: "/ugc-corner",
        hash: "ugc-notification",
      },
      {
        label: "Compliance",
        to: "/ugc-corner",
        hash: "compliance",
      },
      {
        label: "UGC Applications",
        to: "/ugc-corner",
        hash: "ugc-applications",
      },
      {
        label: "CIQA Annual Reports",
        to: "/ugc-corner",
        hash: "ciqa-annual-reports",
      },
      {
        label: "Admission List",
        to: "/ugc-corner",
        hash: "admission-list",
      },
    ],
  },

  {
    label: "Gallery",
    to: "/gallery",
    children: [
      {
        label: "Distance Education",
        to: "/gallery",
        hash: "distance-education",
      },
      {
        label: "Campus",
        to: "/gallery",
        hash: "campus",
      },
      {
        label: "Convocation",
        to: "/gallery",
        hash: "convocation",
      },
      {
        label: "Job Fair",
        to: "/gallery",
        hash: "job-fair",
      },
      {
        label: "Events",
        to: "/gallery",
        hash: "events",
      },
      {
        label: "Faculty",
        to: "/gallery",
        hash: "faculty",
      },
    ],
  },

  {
    label: "Contact",
    to: "/contact",
  },
];

const toProgrammeSummary = (programme: (typeof ugProgrammeListings)[number]) => ({
  name: programme.name,
  desc: programme.description,
  duration: programme.duration,
});

export const degreeProgrammes = [
  {
    group: "Undergraduate",
    items: ugProgrammeListings.map(toProgrammeSummary),
  },
  {
    group: "Postgraduate",
    items: pgProgrammeListings.map(toProgrammeSummary),
  },
];

export const certificationProgrammes = certificationProgrammeListings.map(
  toProgrammeSummary,
);

const toProgrammeDetails = (programme: (typeof ugProgrammeListings)[number]) => ({
  slug: programme.slug,
  name: programme.name,
  full: programme.full,
  duration: programme.duration,
  eligibility: programme.eligibility,
});

export const ugProgrammes = ugProgrammeListings.map(toProgrammeDetails);
export const pgProgrammes = pgProgrammeListings.map(toProgrammeDetails);
export const certificationCourses =
  certificationProgrammeListings.map(toProgrammeDetails);

/* =========================================================
   ADMISSION PROCESS
========================================================= */

export const admissionSteps = [
  {
    step: "1",
    title: "Apply Online",
    body: "Complete the online application form in under ten minutes.",
  },

  {
    step: "2",
    title: "Upload Documents",
    body: "Attach marksheets, ID proof and a passport photograph.",
  },

  {
    step: "3",
    title: "Verification",
    body: "Our admission cell verifies eligibility within 48 hours.",
  },

  {
    step: "4",
    title: "Fee Payment",
    body: "Pay securely online in full or through easy instalments.",
  },

  {
    step: "5",
    title: "Admission Confirmation",
    body: "Receive your enrolment number and confirmation letter.",
  },

  {
    step: "6",
    title: "Begin Learning",
    body: "Access the LMS, study material and live mentor sessions.",
  },
];
