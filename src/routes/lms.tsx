import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Laptop,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Video,
} from "lucide-react";

import lmsDashboardCollage from "@/assets/lms-dashboard-collage.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FacilityPageLayout, FacilitySectionHeading } from "@/components/site/FacilityPageLayout";

/* =========================================================
   LMS FEATURES
========================================================= */

const lmsFeatures = [
  {
    number: "01",
    title: "Unmatched Customisability",
    accent: "#6b4c9a",
    icon: Sparkles,
    text: "Adapt learning content and modules to suit course requirements and the needs of individual learners.",
  },
  {
    number: "02",
    title: "Seamless Accessibility",
    accent: "#2f6f4e",
    icon: MonitorSmartphone,
    text: "Access learning materials across supported devices, helping students learn at a time and place that suits them.",
  },
  {
    number: "03",
    title: "Powerful Analytics",
    accent: "#b08a24",
    icon: BarChart3,
    text: "Monitor learner progress and use reports to identify learning needs and areas where additional academic support may help.",
  },
  {
    number: "04",
    title: "Collaborative Learning",
    accent: "#8f1d1d",
    icon: MessageCircle,
    text: "Support communication, teamwork and peer interaction through online learning activities and discussion spaces.",
  },
  {
    number: "05",
    title: "Versatile Learning Materials",
    accent: "#30265f",
    icon: Video,
    text: "Bring together educational videos, quizzes, digital resources and other materials to support different learning styles.",
  },
  {
    number: "06",
    title: "Personalised Learning",
    accent: "#427d76",
    icon: Laptop,
    text: "Organise learning resources and activities to support students' individual progress, interests and learning objectives.",
  },
  {
    number: "07",
    title: "Security",
    accent: "#6b4c9a",
    icon: LockKeyhole,
    text: "Support the protection of academic information and learning materials through appropriate security and access controls.",
  },
  {
    number: "08",
    title: "Learner Support",
    accent: "#2f6f4e",
    icon: CheckCircle2,
    text: "Help learners access guidance, tutorials and technical assistance so they can navigate their online learning experience.",
  },
];

/* =========================================================
   LMS PAGE
========================================================= */

function LMSPage() {
  return (
    <SiteLayout>
      <FacilityPageLayout
        activeHref="/lms"
        title="Learning Management System"
        description="Discover a flexible digital learning environment designed to support accessible course materials, student engagement and the online learning experience."
      >
        {/* =============================================
                  LMS OVERVIEW
              ============================================= */}

        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FacilitySectionHeading
            eyebrow="Digital Learning"
            title="Our Learning Management System"
          />

          <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {/* LEFT CONTENT */}

            <article className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#2f6f4e] via-[#b08a24] to-[#6b4c9a]" />

              <div className="flex items-center gap-2">
                <Laptop className="size-4 text-[#8f1d1d]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                  Online Learning Platform
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#14284e] sm:text-3xl lg:text-4xl">
                A smarter <span className="text-[#8f1d1d]">learning experience</span> for every
                learner.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                Our Learning Management System supports online education by bringing learning
                resources and activities together in a digital environment. With accessible content,
                learner progress insights, collaboration and academic support, the platform helps
                students engage with their courses more flexibly.
              </p>

              {/* STATS */}

              <div className="mt-6 grid grid-cols-3 border-y border-[#e5e0dc] py-4">
                <div className="border-r border-[#e5e0dc] pr-2 sm:pr-4">
                  <p className="text-2xl font-bold text-[#2f6f4e] sm:text-3xl">08</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                    Features
                  </p>
                </div>

                <div className="border-r border-[#e5e0dc] px-2 sm:px-4">
                  <p className="text-2xl font-bold text-[#6b4c9a] sm:text-3xl">24/7</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                    Flexibility
                  </p>
                </div>

                <div className="pl-2 sm:pl-4">
                  <p className="text-2xl font-bold text-[#b08a24] sm:text-3xl">360°</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                    Learning
                  </p>
                </div>
              </div>

              {/* TAGS */}

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-3.5 py-2 text-xs font-semibold text-white">
                  <Laptop className="size-3.5" />
                  Digital Learning
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-[#f7f5f7] px-3.5 py-2 text-xs font-semibold text-[#14284e]">
                  <Sparkles className="size-3.5 text-[#6b4c9a]" />
                  Personalised
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-[#f7f5f7] px-3.5 py-2 text-xs font-semibold text-[#14284e]">
                  <LockKeyhole className="size-3.5 text-[#2f6f4e]" />
                  Secure Access
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
                src={lmsDashboardCollage}
                alt="Screenshots of the Crescent Learning Management System dashboard, courses and learning resources"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14284e]/90 via-[#14284e]/15 to-transparent" />

              <div className="absolute left-0 top-0 h-full w-1 bg-[#b08a24]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <Laptop className="size-4 text-[#d8b84c]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Learning Management System
                  </span>
                </div>

                <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Flexible technology for connected learning.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  Digital resources and learning activities to support students throughout their
                  academic journey.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* =============================================
                  LMS FEATURES
              ============================================= */}

        <motion.section
          id="lms-features"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
        >
          <FacilitySectionHeading eyebrow="What We Offer" title="LMS Features" />

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {lmsFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
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
                      <Icon className="size-5 text-white" />
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

                  <p className="mt-3 text-sm leading-6 text-[#667085]">{feature.text}</p>

                  <div
                    className="mt-5 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{
                      backgroundColor: feature.accent,
                    }}
                  />
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* =============================================
                  BOTTOM NAVIGATION
              ============================================= */}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e0dc] pt-5">
          <Link
            to="/studio"
            className="group inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-white px-4 py-2.5 text-sm font-semibold text-[#14284e] transition-colors hover:border-[#8f1d1d] hover:text-[#8f1d1d]"
          >
            <ArrowLeft className="size-4" />
            Back to Studio
          </Link>

          <Link
            to="/datacenter"
            className="group inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#761717]"
          >
            Explore Datacenter
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </FacilityPageLayout>
    </SiteLayout>
  );
}

export default LMSPage;
