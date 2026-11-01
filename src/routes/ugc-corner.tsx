import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";

import ugc from "@/assets/ugc.png";
import aicte from "@/assets/all india.jpg";
import ugcDisclosurePdf from "@/assets/ugc.pdf";
import aicteDisclosurePdf from "@/assets/AICTE.pdf";
import compliance2022_2023Pdf from "@/assets/2022-2023.pdf";
import compliance2023_2024Pdf from "@/assets/2023-2024.pdf";
import compliance2024_2025Pdf from "@/assets/2024-2025.pdf";
import ciqa2021_2022Pdf from "@/assets/CIQA2021-2022.pdf";
import ciqa2022_2023Pdf from "@/assets/CIQA2022-2023.pdf";
import ciqa2023_2024Pdf from "@/assets/CIQA2023-2024.pdf";
import ciqa2024_2025Pdf from "@/assets/CIQA2024-2025.pdf";
import application2021_2022Pdf from "@/assets/App2021-2022.pdf";
import application2022_2023Pdf from "@/assets/APP2022-2023.pdf";
import application2023_2024Pdf from "@/assets/APP2023-2024.pdf";
import application2024_2025Pdf from "@/assets/APP2024-2025.pdf";
import application2026_2027Pdf from "@/assets/APP2026-2027.pdf";
import application2026_2027PublicPolicyPdf from "@/assets/APP2026-2027 (BA Public Policy).pdf";
import admissionAy2022Pdf from "@/assets/AY 2022.pdf";
import admissionAy2023Pdf from "@/assets/AY 2023.pdf";
import admissionAy2024Pdf from "@/assets/AY 2024.pdf";
import admissionAy2025Pdf from "@/assets/AY 2025.pdf";
import admissionCy2022Pdf from "@/assets/CY 2022.pdf";
import admissionCy2023Pdf from "@/assets/CY 2023.pdf";
import admissionAy2021Cy2022Pdf from "@/assets/AY 2021 & CY 2022.pdf";
import publicNoticeMarch19Pdf from "@/assets/Public Notice March 19 2024.pdf";
import publicNoticeAugust19Pdf from "@/assets/Public Notice August 19 2024.pdf";
import publicNoticeMarch20Pdf from "@/assets/Public Notice March 20 2023.pdf";
import publicNoticeSeptember19Pdf from "@/assets/Public Notice Sep 19 2023.pdf";
import aicteProgrammesPdf from "@/assets/AICTE for offering UG Programmes.pdf";
import { ResourceDocumentsDialog } from "@/components/site/ResourceDocumentsDialog";
import {
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  ListChecks,
  ScrollText,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  FileDown,
  CheckCircle2,
  Bell,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const officialLinks = {
  ugcMandatoryDisclosure: ugcDisclosurePdf,
  aicteMandatoryDisclosure: aicteDisclosurePdf,
};

const ugcNotifications = [
  { title: "Public Notice March 19 2024", href: publicNoticeMarch19Pdf },
  { title: "Public Notice August 19 2024", href: publicNoticeAugust19Pdf },
  { title: "Public Notice March 20 2023", href: publicNoticeMarch20Pdf },
  { title: "Public Notice Sep 19 2023", href: publicNoticeSeptember19Pdf },
  { title: "AICTE for offering UG Programmes", href: aicteProgrammesPdf },
];

type ResourceDocument = {
  title: string;
  href?: string;
  isHeading?: boolean;
};

type ResourceDialog = {
  title: string;
  description: string;
  documents: ResourceDocument[];
};

const resourceDialogs: Record<string, ResourceDialog> = {
  "ugc-notification": {
    title: "UGC Notifications",
    description: "Select a notice to open its PDF.",
    documents: ugcNotifications,
  },
  compliance: {
    title: "Compliance Reports",
    description: "Select an academic year to open its PDF.",
    documents: [
      { title: "2022-2023", href: compliance2022_2023Pdf },
      { title: "2023-2024", href: compliance2023_2024Pdf },
      { title: "2024-2025", href: compliance2024_2025Pdf },
    ],
  },
  "ugc-applications": {
    title: "UGC Applications",
    description: "Select an application year to open its PDF.",
    documents: [
      { title: "2021-2022", href: application2021_2022Pdf },
      { title: "2022-2023", href: application2022_2023Pdf },
      { title: "2023-2024", href: application2023_2024Pdf },
      { title: "2024-2025", href: application2024_2025Pdf },
      { title: "2026-2027", href: application2026_2027Pdf },
      {
        title: "2026-2027 (BA Public Policy)",
        href: application2026_2027PublicPolicyPdf,
      },
    ],
  },
  "ciqa-annual-reports": {
    title: "CIQA Annual Reports",
    description: "Select an academic year to open its PDF.",
    documents: [
      { title: "2021-2022", href: ciqa2021_2022Pdf },
      { title: "2022-2023", href: ciqa2022_2023Pdf },
      { title: "2023-2024", href: ciqa2023_2024Pdf },
      { title: "2024-2025", href: ciqa2024_2025Pdf },
      { title: "2025-2026" },
    ],
  },
  "admission-list": {
    title: "Student Admission List",
    description: "Select an available admission document to open its PDF.",
    documents: [
      { title: "Details of the Admission: 2025-2026", isHeading: true },
      { title: "AY 2025", href: admissionAy2025Pdf },
      { title: "Details of the Admission: 2024-2025", isHeading: true },
      { title: "AY 2024", href: admissionAy2024Pdf },
      { title: "Details of the Admission: 2023-2024", isHeading: true },
      { title: "AY 2023", href: admissionAy2023Pdf },
      { title: "CY 2023", href: admissionCy2023Pdf },
      { title: "Details of the Admission: 2022-2023", isHeading: true },
      { title: "AY 2022", href: admissionAy2022Pdf },
      { title: "CY 2022", href: admissionCy2022Pdf },
      { title: "Details of the Admission: 2021-2022", isHeading: true },
      { title: "AY 2021 & CY 2022", href: admissionAy2021Cy2022Pdf },
    ],
  },
};

const resources = [
  {
    id: "aicte-approval",
    number: "01",
    title: "AICTE Approval",
    short: "Approval",
    body: "Regulatory approval information for programmes offered through the Centre.",
    icon: BadgeCheck,
    href: officialLinks.aicteMandatoryDisclosure,
    label: "View Document",
  },
  {
    id: "degree-equivalence",
    number: "02",
    title: "Degree Equivalence",
    short: "Equivalence",
    body: "Recognition and equivalence information for Open and Distance Learning programmes.",
    icon: ScrollText,
    href: officialLinks.ugcMandatoryDisclosure,
    label: "View Document",
  },
  {
    id: "ugc-notification",
    number: "03",
    title: "UGC Notification",
    short: "Notifications",
    body: "UGC-DEB notifications, public notices and recognition-related information.",
    icon: FileText,
    label: "View Documents",
  },
  {
    id: "compliance",
    number: "04",
    title: "Compliance",
    short: "Disclosure",
    body: "Regulatory compliance records and institutional disclosures.",
    icon: ShieldCheck,
    label: "View Reports",
  },
  {
    id: "ugc-applications",
    number: "05",
    title: "UGC Applications",
    short: "Applications",
    body: "Applications and submissions related to ODL programme recognition.",
    icon: FileCheck2,
    label: "View Documents",
  },
  {
    id: "ciqa-annual-reports",
    number: "06",
    title: "CIQA Annual Reports",
    short: "Quality",
    body: "Annual reports covering quality assurance and improvement activities.",
    icon: ClipboardList,
    label: "View Reports",
  },
  {
    id: "admission-list",
    number: "07",
    title: "Admission List",
    short: "Admissions",
    body: "Admission information published for different academic sessions.",
    icon: ListChecks,
    label: "View Admission List",
  },
];

const sidebarLinks = [
  { label: "UGC & AICTE", href: "#disclosures", icon: Landmark },
  { label: "Regulatory Resources", href: "#ugc-resources", icon: FileText },
  { label: "UGC Notifications", href: "#ugc-notification", icon: Bell },
  { label: "Compliance Reports", href: "#compliance", icon: ShieldCheck },
  { label: "UGC Applications", href: "#ugc-applications", icon: FileCheck2 },
  { label: "CIQA Annual Reports", href: "#ciqa-annual-reports", icon: ClipboardList },
  { label: "Admission List", href: "#admission-list", icon: ListChecks },
];

function UgcSidebar() {
  return (
    <aside className="h-fit w-full min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#737782]">
        UGC Corner
      </p>

      <nav aria-label="UGC Corner navigation" className="flex flex-col gap-1">
        {sidebarLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors duration-200 ${
                index === 0
                  ? "bg-[#23457D] text-white"
                  : "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#23457D]"
              }`}
            >
              <span className="flex size-4 shrink-0 items-center justify-center">
                <Icon className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1 whitespace-normal break-words text-left">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#23457D]">
        {eyebrow}
      </p>
      <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[#20242B] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-[#23457D]" />
    </div>
  );
}

function DisclosureCard({
  image,
  imageAlt,
  heading,
  subtitle,
  href,
  description,
}: {
  image: string;
  imageAlt: string;
  heading: string;
  subtitle?: string;
  href: string;
  description: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-[#D9D4CA] bg-white p-4 shadow-[0_5px_16px_rgba(32,36,43,0.04)] sm:p-5"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9D4CA] bg-white p-2">
          <img src={image} alt={imageAlt} className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#23457D]">
            Regulatory Authority
          </p>
          <h3 className="mt-1 text-lg font-bold leading-snug text-[#20242B]">
            {heading}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-[#737782]">{subtitle}</p>
          )}
        </div>
      </div>

      <p className="mt-4 border-t border-[#ECE8E0] pt-3 text-sm leading-5 text-[#5E6470]">
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#23457D] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#18355f]"
      >
        <FileDown className="size-4 text-white/80" />
        View Disclosure
        <ArrowRight className="size-3.5" />
      </a>
    </motion.article>
  );
}

function UgcResources() {
  return (
    <section id="ugc-resources" className="scroll-mt-6">
      <SectionHeading
        eyebrow="Official Information"
        title="Regulatory & Quality Resources"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {resources.map((resource) => {
          const Icon = resource.icon;
          const dialog = resourceDialogs[resource.id];
          const actionClassName =
            "inline-flex items-center gap-1.5 rounded-lg bg-[#23457D] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#18355f]";

          return (
            <motion.article
              key={resource.id}
              id={resource.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-[220px] min-w-0 flex-col rounded-2xl border border-[#D9D4CA] bg-white p-5 shadow-[0_4px_14px_rgba(32,36,43,0.04)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#23457D] text-white">
                  <Icon className="size-4" />
                </div>
                <span className="rounded-full bg-[#23457D]/5 px-2 py-1 text-[10px] font-bold tracking-wider text-[#23457D]/80">
                  PDF
                </span>
              </div>

              <div className="mt-3 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#23457D]">
                  {resource.short}
                </p>
                <h3 className="mt-1 text-base font-bold leading-snug text-[#20242B]">
                  {resource.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-[#737782]">
                  {resource.body}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  <CheckCircle2 className="size-3.5 text-[#23457D]" />
                  Official Resource
                </span>

                {dialog ? (
                  <ResourceDocumentsDialog
                    title={dialog.title}
                    description={dialog.description}
                    documents={dialog.documents}
                    triggerLabel={resource.label}
                    triggerClassName={actionClassName}
                  />
                ) : (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={actionClassName}
                  >
                    <FileDown className="size-3.5" />
                    {resource.label}
                    <ArrowRight className="size-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function UgcCornerPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen bg-[#F5F1E9] px-4 py-5 text-[#20242B] sm:px-6 sm:py-7 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-6">
          <UgcSidebar />

          <div className="min-w-0 space-y-6">
            <header className="rounded-2xl border border-[#E2DDD4] bg-white px-5 py-4 shadow-[0_5px_16px_rgba(31,35,43,0.04)] sm:px-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#23457D]">
                Regulatory Information
              </p>
              <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-[#20242B] sm:text-3xl">
                UGC Corner
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-5 text-[#737782]">
                Regulatory approvals, mandatory disclosures, compliance records and quality assurance documents.
              </p>
            </header>

            <section id="disclosures" className="scroll-mt-6">
              <SectionHeading
                eyebrow="Mandatory Disclosure"
                title="UGC & AICTE Documents"
              />

              <div className="grid gap-3 md:grid-cols-2">
                <DisclosureCard
                  image={ugc}
                  imageAlt="UGC Logo"
                  heading="UGC"
                  subtitle="University Grants Commission"
                  href={officialLinks.ugcMandatoryDisclosure}
                  description="Mandatory disclosure and regulatory information for Crescent Centre for Distance and Online Education."
                />

                <div id="aicte-disclosure" className="scroll-mt-6">
                  <DisclosureCard
                    image={aicte}
                    imageAlt="AICTE Logo"
                    heading="AICTE"
                    subtitle="All India Council for Technical Education"
                    href={officialLinks.aicteMandatoryDisclosure}
                    description="Regulatory disclosure and approval information for the institution and its programmes."
                  />
                </div>
              </div>
            </section>

            <UgcResources />

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-xl border border-[#D9D4CA] bg-white px-4 py-3">
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#20242B]">
                <ShieldCheck className="size-4 text-[#23457D]" />
                Transparent
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#20242B]">
                <BadgeCheck className="size-4 text-[#23457D]" />
                Verified Information
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#20242B]">
                <FileCheck2 className="size-4 text-[#23457D]" />
                Public Disclosure
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#20242B]">
                <GraduationCap className="size-4 text-[#23457D]" />
                UGC-DEB
              </span>
            </div>

            <p className="text-center text-[11px] leading-5 text-slate-400">
              Regulatory documents and admission information are linked to the available Crescent Centre for Distance and Online Education resources.
            </p>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default UgcCornerPage;
