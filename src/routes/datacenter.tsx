
import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  HardDrive,
  Laptop,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import dataCenterServer from "@/assets/data-center-server.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   PAGE META
========================================================= */

const title = "Datacenter — Centre for Distance and Online Education";

const description =
  "Explore the dedicated data centre and server infrastructure supporting secure, scalable and reliable online education.";

/* =========================================================
   ROUTE
========================================================= */

/* =========================================================
   FACILITIES SIDEBAR NAVIGATION
========================================================= */

const facilitiesNavigation = [
  {
    number: "01",
    label: "Overview",
    description: "All facilities",
    href: "/facilities",
    icon: Sparkles,
  },
  {
    number: "02",
    label: "Studio",
    description: "Content production",
    href: "/studio",
    icon: ClapperboardIcon,
  },
  {
    number: "03",
    label: "LMS",
    description: "Digital learning",
    href: "/lms",
    icon: Laptop,
  },
  {
    number: "04",
    label: "Datacenter",
    description: "Digital infrastructure",
    href: "/datacenter",
    icon: Database,
    active: true,
  },
];

/* =========================================================
   SIDEBAR
========================================================= */

function FacilitiesSidebar() {
  return (
    <aside className="h-fit min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="mb-1 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#858994]">
        Facilities
      </p>

      <p className="mb-3 px-3 text-xs leading-5 text-[#737782]">
        Explore our infrastructure
      </p>

      <nav aria-label="Facilities navigation" className="space-y-1">
        {facilitiesNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors duration-200 ${
                item.active
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
            </Link>
          );
        })}
      </nav>

      <div className="mx-3 my-4 h-px bg-[#eee9e3]" />
    </aside>
  );
}

/* =========================================================
   SIDEBAR ICON
========================================================= */

function ClapperboardIcon(props: React.ComponentProps<"svg">) {
  return <Server {...props} />;
}

/* =========================================================
   DATACENTER FEATURES
========================================================= */

const datacenterFeatures = [
  {
    number: "01",
    title: "High Performance",
    accent: "#6b4c9a",
    text:
      "Dedicated server infrastructure supports responsive performance and smooth access to online courses, educational resources and digital services.",
  },
  {
    number: "02",
    title: "Robust Security",
    accent: "#8f1d1d",
    text:
      "Security-focused systems help protect educational resources, institutional platforms and sensitive information through appropriate infrastructure safeguards.",
  },
  {
    number: "03",
    title: "Scalability",
    accent: "#2f6f4e",
    text:
      "Flexible infrastructure can accommodate growing numbers of learners, increasing digital resources and changing online education requirements.",
  },
  {
    number: "04",
    title: "Flexible Infrastructure",
    accent: "#b08a24",
    text:
      "Configurable server resources support the technical needs of digital learning platforms and institutional online services.",
  },
  {
    number: "05",
    title: "Reliability",
    accent: "#30265f",
    text:
      "Dependable infrastructure helps maintain consistent access to online learning resources and essential digital education services.",
  },
  {
    number: "06",
    title: "Monitoring and Support",
    accent: "#427d76",
    text:
      "Ongoing monitoring and technical support help identify infrastructure issues and maintain the availability of digital services.",
  },
];

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
        {eyebrow}
      </p>

      <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   DATACENTER PAGE
========================================================= */

function DatacenterPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen bg-[#f7f5f7] text-[#14284e]"
      >
        {/* SIDEBAR + MAIN CONTENT */}

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-6 px-4 pb-10 pt-7 sm:px-6 sm:pt-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-8 xl:grid-cols-[220px_minmax(0,1fr)] xl:px-10">
          {/* LEFT SIDEBAR */}

          <FacilitiesSidebar />

          {/* RIGHT CONTENT */}

          <div className="min-w-0">
            {/* PAGE HEADER */}

            <motion.header
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-7"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
                Facilities
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#14284e] sm:text-3xl">
                Datacenter
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                Discover the digital infrastructure supporting secure,
                reliable and scalable online learning at Crescent.
              </p>
            </motion.header>

            <div className="space-y-8">
              {/* =============================================
                  DATACENTER OVERVIEW
              ============================================= */}

              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-0"
              >
                <SectionHeading
                  eyebrow="Digital Infrastructure"
                  title="Our Data Center"
                />

                <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                  {/* LEFT CONTENT */}

                  <article className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
                    <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#6b4c9a] via-[#b08a24] to-[#2f6f4e]" />

                    <div className="flex items-center gap-2">
                      <Database className="size-4 text-[#8f1d1d]" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                        Digital Infrastructure
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#14284e] sm:text-3xl lg:text-4xl">
                      Powering{" "}
                      <span className="text-[#8f1d1d]">
                        secure digital education
                      </span>{" "}
                      through reliable infrastructure.
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                      Our data center infrastructure supports digital
                      education by helping deliver dependable access to online
                      learning platforms, educational resources and
                      institutional services. Performance, security and
                      scalability are essential to supporting a consistent
                      online learning experience.
                    </p>

                    {/* STATS */}

                    <div className="mt-6 grid grid-cols-3 border-y border-[#e5e0dc] py-4">
                      <div className="border-r border-[#e5e0dc] pr-2 sm:pr-4">
                        <p className="text-2xl font-bold text-[#6b4c9a] sm:text-3xl">
                          01
                        </p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          Data Center
                        </p>
                      </div>

                      <div className="border-r border-[#e5e0dc] px-2 sm:px-4">
                        <p className="text-2xl font-bold text-[#2f6f4e] sm:text-3xl">
                          06
                        </p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          Features
                        </p>
                      </div>

                      <div className="pl-2 sm:pl-4">
                        <p className="text-2xl font-bold text-[#b08a24] sm:text-3xl">
                          24/7
                        </p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          Monitoring
                        </p>
                      </div>
                    </div>

                    {/* TAGS */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-3.5 py-2 text-xs font-semibold text-white">
                        <ShieldCheck className="size-3.5" />
                        Secure Infrastructure
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-[#f7f5f7] px-3.5 py-2 text-xs font-semibold text-[#14284e]">
                        <HardDrive className="size-3.5 text-[#6b4c9a]" />
                        Scalable Systems
                      </span>
                    </div>
                  </article>

                  {/* RIGHT IMAGE */}

                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white shadow-[0_6px_22px_rgba(20,40,78,0.06)] sm:min-h-[360px] lg:min-h-full"
                  >
                    <img
                      src={dataCenterServer}
                      alt="Server racks and network equipment in the data centre"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#14284e]/90 via-[#14284e]/15 to-transparent" />

                    <div className="absolute left-0 top-0 h-full w-1 bg-[#b08a24]" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="mb-3 flex items-center gap-2">
                        <Server className="size-4 text-[#d8b84c]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                          Server Infrastructure
                        </span>
                      </div>

                      <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                        Reliable technology for connected learning.
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                        Infrastructure designed to support digital learning
                        platforms and educational services.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* =============================================
                  DATACENTER FEATURES
              ============================================= */}

              <motion.section
                id="datacenter-features"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45 }}
                className="min-w-0"
              >
                <SectionHeading
                  eyebrow="Infrastructure Capabilities"
                  title="Data Center Features"
                />

                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {datacenterFeatures.map((feature, index) => (
                    <motion.article
                      key={feature.number}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="group relative min-w-0 overflow-hidden rounded-[20px] border border-[#e5e0dc] bg-white p-5 shadow-[0_5px_18px_rgba(20,40,78,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(20,40,78,0.08)] sm:p-6"
                    >
                      <div
                        className="absolute left-0 top-0 h-full w-[3px]"
                        style={{ backgroundColor: feature.accent }}
                      />

                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div
                          className="flex size-10 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: feature.accent,
                          }}
                        >
                          <CheckCircle2 className="size-5 text-white" />
                        </div>

                        <span
                          className="text-xs font-bold tracking-[0.14em]"
                          style={{ color: feature.accent }}
                        >
                          {feature.number}
                        </span>
                      </div>

                      <h3 className="text-base font-bold leading-6 text-[#14284e] sm:text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#667085]">
                        {feature.text}
                      </p>

                      <div
                        className="mt-5 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                        style={{
                          backgroundColor: feature.accent,
                        }}
                      />
                    </motion.article>
                  ))}
                </div>
              </motion.section>

              {/* =============================================
                  BOTTOM NAVIGATION
              ============================================= */}

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e0dc] pt-5">
                <Link
                  to="/lms"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-white px-4 py-2.5 text-sm font-semibold text-[#14284e] transition-colors hover:border-[#8f1d1d] hover:text-[#8f1d1d]"
                >
                  <ArrowLeft className="size-4" />
                  Back to LMS
                </Link>

                <Link
                  to="/facilities"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#761717]"
                >
                  Back to Overview
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default DatacenterPage;
