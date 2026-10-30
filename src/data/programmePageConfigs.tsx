import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";

import type { ProgrammePageTemplateProps } from "@/components/site/ProgrammePageTemplate";
import type { CourseInfo } from "@/data/courseInfo";
import { getRequiredCourseInfo } from "@/data/programmes";
import mbaBrochurePdf from "@/assets/ODL MBA Website Brochure09012026.pdf";
import mcaBrochurePdf from "@/assets/ODL MCA Website Brochure09012026.pdf";
import baIslamicBrochurePdf from "@/assets/ODL B.A. Islamic Studies Website Brochure09012026.pdf";
import mbaRegulationsPdf from "@/assets/DeanAA-MBA-MCA-ODL-and-OL-Regulations2021-24.11.2021-F.pdf";
import baIslamicRegulationsPdf from "@/assets/DeanAA-BAIslamic-StudiesR2021.pdf";

type PageConfig = Omit<ProgrammePageTemplateProps, "children">;

export function getGenericProgrammePageConfig(course: CourseInfo): PageConfig {
  return {
    variant: "generic",
    mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
    hero: {
      backIcon: <ArrowLeft className="size-4" />,
      badgeIcon: <GraduationCap className="size-4" />,
      badge: `${course.level} Programme`,
      title: course.name,
      description: course.description,
      applyIcon: (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      ),
      applyTo: "/admission",
    },
    navigation: [
      {
        destination: { type: "anchor", href: "#overview" },
        icon: <BookOpen className="size-5" />,
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
        icon: <FileText className="size-5" />,
        title: "Eligibility & Fee",
        description: "Admission details",
        iconClassName: missionIconClass,
      },
      {
        destination: { type: "courseInfo", courseSlug: course.slug, section: "vision" },
        icon: <Eye className="size-5" />,
        title: "Vision",
        description: "Academic vision",
        iconClassName: visionIconClass,
      },
      {
        destination: { type: "courseInfo", courseSlug: course.slug, section: "mission" },
        icon: <Target className="size-5" />,
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
        icon: <FileText className="size-5" />,
        title: "Eligibility & Fee",
        iconClassName: "bg-[#0d5c45]/10 text-[#0d5c45]",
      },
      {
        destination: { type: "route", to: "/admission" },
        icon: <GraduationCap className="size-5" />,
        title: "Apply Now",
        iconClassName: "bg-[#d4af37]/20 text-[#8a6d12]",
      },
    ],
    cta: {
      label: "Ready to begin?",
      title: `Apply for ${course.name}`,
      to: "/admission",
      linkText: "Apply Now",
      icon: (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      ),
    },
  };
}

const description = "Please submit your enquiry details to access the requested resource.";
const sharedNavIconClass = "bg-[#0d5c45]/10 text-[#0d5c45]";
const peopleIconClass = "bg-[#8f1d1d]/10 text-[#8f1d1d]";
const visionIconClass = "bg-[#1d355f]/10 text-[#1d355f]";
const missionIconClass = "bg-[#d4af37]/20 text-[#8a6d12]";
export const mbaProgrammePageConfig: PageConfig = {
  variant: "mba",
  mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
  hero: {
    backIcon: <ArrowRight size={18} className="rotate-180" />,
    badgeIcon: <GraduationCap size={20} />,
    badge: "Postgraduate Programme",
    title: getRequiredCourseInfo("mba").fullName,
    description:
      "MBA Online Learning (OL) Programme offered by the B.S. Abdur Rahman Crescent Institute of Science and Technology.",
    applyIcon: <ArrowRight size={18} />,
    applyTo: "/admission",
    applyHash: "how-to-apply",
  },
  navigation: [
    {
      destination: { type: "route", to: "/mba" },
      icon: <BookOpen size={20} />,
      title: "Overview",
      description: "Programme overview",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/mba/people" },
      icon: <Users size={20} />,
      title: "People",
      description: "Faculty & team",
      iconClassName: peopleIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mba", section: "vision" },
      icon: <Eye size={20} />,
      title: "Vision",
      description: "Our academic vision",
      iconClassName: visionIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mba", section: "mission" },
      icon: <Target size={20} />,
      title: "Mission",
      description: "Our core mission",
      iconClassName: missionIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mba", section: "eligibility-fee" },
      icon: <BookOpen size={20} />,
      title: "Eligibility & Fee",
      description: "Admission details",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/mba/syllabus" },
      icon: <BookOpen size={20} />,
      title: "Syllabus",
      description: "Programme syllabus",
      iconClassName: visionIconClass,
    },
    {
      destination: { type: "external", href: mbaRegulationsPdf },
      icon: <FileText size={20} />,
      title: "Regulations",
      description: "Programme regulations",
      iconClassName: missionIconClass,
    },
    {
      destination: { type: "dialog" },
      icon: <Download size={20} />,
      title: "Download Brochure",
      description: "Get the programme brochure",
      iconClassName: missionIconClass,
    },
  ],
  actions: [
    {
      destination: { type: "courseInfo", courseSlug: "mba", section: "eligibility-fee" },
      icon: <BookOpen size={20} />,
      title: "Eligibility & Fee",
      iconBackgroundColor: "#5b1d5f12",
      iconColor: "#5b1d5f",
    },
    {
      destination: { type: "route", to: "/mba/syllabus" },
      icon: <BookOpen size={20} />,
      title: "Syllabus",
      iconClassName: "bg-[#1d355f]/10 text-[#1d355f]",
    },
    {
      destination: { type: "external", href: mbaRegulationsPdf },
      icon: <FileText size={20} />,
      title: "Regulations",
      iconClassName: "bg-[#d4af37]/10 text-[#8a6d12]",
    },
    {
      destination: { type: "dialog" },
      icon: <Download size={20} />,
      title: "Download Brochure",
      iconClassName: "bg-[#6b4c9a]/10 text-[#6b4c9a]",
    },
  ],
  cta: {
    label: "Ready to begin?",
    title: "Apply for MBA Online Learning",
    to: "/admission",
    linkText: "Apply Now",
    icon: (
      <ArrowRight
        size={19}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    ),
  },
  brochureDialog: {
    title: "Download Brochure",
    description,
    idPrefix: "mba-resource",
    downloadHref: mbaBrochurePdf,
    downloadLabel: "Download Brochure PDF",
  },
};

export const mcaProgrammePageConfig: PageConfig = {
  variant: "mca",
  mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
  hero: {
    backIcon: <ArrowRight size={15} className="rotate-180" />,
    badgeIcon: <GraduationCap size={16} />,
    badge: "Postgraduate Programme",
    title: getRequiredCourseInfo("mca").fullName,
    description:
      "MCA Online Learning (OL) Programme offered by the B.S. Abdur Rahman Crescent Institute of Science and Technology.",
    applyIcon: <ArrowRight size={15} />,
    applyTo: "/admission",
    applyHash: "how-to-apply",
  },
  navigation: [
    {
      destination: { type: "route", to: "/mca" },
      icon: <BookOpen size={18} />,
      title: "Overview",
      description: "Programme overview",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/mca/people" },
      icon: <Users size={18} />,
      title: "People",
      description: "Faculty & team",
      iconClassName: peopleIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mca", section: "vision" },
      icon: <Eye size={18} />,
      title: "Vision",
      description: "Our academic vision",
      iconClassName: visionIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mca", section: "mission" },
      icon: <Target size={18} />,
      title: "Mission",
      description: "Our core mission",
      iconClassName: missionIconClass,
    },
    {
      destination: { type: "courseInfo", courseSlug: "mca", section: "eligibility-fee" },
      icon: <BookOpen size={18} />,
      title: "Eligibility & Fee",
      description: "Admission details",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/mca/syllabus" },
      icon: <BookOpen size={18} />,
      title: "Syllabus",
      description: "Programme syllabus",
      iconClassName: visionIconClass,
    },
    {
      destination: { type: "external", href: mbaRegulationsPdf },
      icon: <FileText size={18} />,
      title: "Regulations",
      description: "Programme regulations",
      iconClassName: missionIconClass,
    },
    {
      destination: { type: "dialog" },
      icon: <Download size={18} />,
      title: "Download Brochure",
      description: "Get the programme brochure",
      iconClassName: missionIconClass,
    },
  ],
  actions: [
    {
      destination: { type: "courseInfo", courseSlug: "mca", section: "eligibility-fee" },
      icon: <BookOpen size={17} />,
      title: "Eligibility & fee",
      iconBackgroundColor: "#5b1d5f12",
      iconColor: "#5b1d5f",
    },
    {
      destination: { type: "route", to: "/mca/syllabus" },
      icon: <BookOpen size={17} />,
      title: "Syllabus",
      iconClassName: "bg-[#1d355f]/10 text-[#1d355f]",
    },
    {
      destination: { type: "external", href: mbaRegulationsPdf },
      icon: <FileText size={17} />,
      title: "Regulations",
      iconClassName: "bg-[#d4af37]/10 text-[#8a6d12]",
    },
    {
      destination: { type: "dialog" },
      icon: <Download size={17} />,
      title: "Download Brochure",
      iconClassName: "bg-[#6b4c9a]/10 text-[#6b4c9a]",
    },
  ],
  cta: {
    label: "Ready to begin?",
    title: "Apply for MCA Online Learning",
    to: "/admission",
    linkText: "Apply Now",
    icon: (
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    ),
  },
  brochureDialog: {
    title: "Download Brochure",
    description,
    idPrefix: "mca-resource",
    downloadHref: mcaBrochurePdf,
    downloadLabel: "Download Brochure PDF",
  },
};

export const baIslamicStudiesProgrammePageConfig: PageConfig = {
  variant: "ba-islamic-studies",
  mainClassName: "min-h-screen bg-[#f7f8f4] text-[#111111]",
  hero: {
    backIcon: <ArrowLeft className="size-4" />,
    badgeIcon: <GraduationCap className="size-4" />,
    badge: "Undergraduate Programme",
    title: getRequiredCourseInfo("ba-islamic-studies").name,
    description:
      "Explore the Bachelor of Arts in Islamic Studies programme offered through Crescent Distance and Online Education.",
    applyIcon: (
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    ),
    applyTo: "/admission",
  },
  navigation: [
    {
      destination: { type: "route", to: "/ba-islamic-studies" },
      icon: <BookOpen className="size-5" />,
      title: "Overview",
      description: "Programme overview",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/ba-islamic-studies/people" },
      icon: <Users className="size-5" />,
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
      icon: <Eye className="size-5" />,
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
      icon: <Target className="size-5" />,
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
      icon: <FileText className="size-5" />,
      title: "Eligibility & Fee",
      description: "Admission details",
      iconClassName: sharedNavIconClass,
    },
    {
      destination: { type: "route", to: "/ba-islamic-studies/syllabus" },
      icon: <BookOpen className="size-5" />,
      title: "Syllabus",
      description: "Programme syllabus",
      iconClassName: visionIconClass,
    },
    {
      destination: { type: "external", href: baIslamicRegulationsPdf },
      icon: <FileText className="size-5" />,
      title: "Regulations",
      description: "Programme regulations",
      iconClassName: missionIconClass,
    },
    {
      destination: { type: "dialog" },
      icon: <Download className="size-5" />,
      title: "Download Brochure",
      description: "Get the programme brochure",
      iconClassName: missionIconClass,
    },
  ],
  actions: [],
  brochureDialog: {
    title: "BA Islamic Studies brochure",
    description: "Share your details and an admission counsellor will call you back.",
    idPrefix: "ba-islamic-studies-brochure",
    downloadHref: baIslamicBrochurePdf,
    downloadLabel: "Download BA Islamic Studies brochure",
  },
};
