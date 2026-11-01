import islamicStudiesOverview from "@/assets/islamic-studies.png";
import mbaOverview from "@/assets/MBA Leadership at Golden Hour.png";
import mcaOverview from "@/assets/MCA Tech Workstation_ Coding and Innovation.png";

export type ProgrammeOverviewContent = {
  image: string;
  imageAlt: string;
  title: string;
  programmeLabel: string;
  department: string;
  theme: "blue" | "green";
  paragraphs: string[];
};

export const programmeOverviewData: Record<
  "mba" | "mca" | "baIslamicStudies",
  ProgrammeOverviewContent
> = {
  mba: {
    image: mbaOverview,
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
