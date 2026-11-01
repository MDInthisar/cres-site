import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Clapperboard, Video } from "lucide-react";

import studioProduction from "@/assets/optimized/studio-production.webp";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FacilityPageLayout, FacilitySectionHeading } from "@/components/site/FacilityPageLayout";

/* =========================================================
   STUDIO FEATURES
========================================================= */

const studioFeatures = [
  {
    number: "01",
    title: "Professional Quality",
    accent: "#6b4c9a",
    text: "Our in-house studio uses professional equipment and production practices to create educational content that reflects the standards and values of the institution.",
  },
  {
    number: "02",
    title: "Customisation",
    accent: "#2f6f4e",
    text: "Educational content can be tailored to specific subjects, course objectives and learner requirements to support a more relevant learning experience.",
  },
  {
    number: "03",
    title: "Interactivity",
    accent: "#b08a24",
    text: "Videos, demonstrations and multimedia resources can make lessons more engaging and help learners understand and retain information.",
  },
  {
    number: "04",
    title: "Cost-effective",
    accent: "#8f1d1d",
    text: "In-house content production offers greater control over resources, production schedules and the creation of learning materials.",
  },
  {
    number: "05",
    title: "Timeliness",
    accent: "#30265f",
    text: "An in-house production workflow helps coordinate educational content creation with course schedules and changing academic requirements.",
  },
  {
    number: "06",
    title: "Consistency",
    accent: "#427d76",
    text: "Consistent production standards help create a coherent learning experience across courses, subjects and educational materials.",
  },
  {
    number: "07",
    title: "Confidentiality",
    accent: "#6b4c9a",
    text: "Internal content production can help maintain appropriate control over educational materials and the institution's intellectual property.",
  },
];

/* =========================================================
   STUDIO PAGE
========================================================= */

function StudioPage() {
  return (
    <SiteLayout>
      <FacilityPageLayout
        activeHref="/studio"
        title="Studio"
        description="Discover our in-house studio and its role in creating professional, engaging educational content for online learning."
      >
        {/* =============================================
                  STUDIO OVERVIEW
              ============================================= */}

        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          <FacilitySectionHeading eyebrow="Content Production" title="Our In-house Studio" />

          <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {/* LEFT CONTENT */}

            <article className="relative flex min-w-0 flex-col justify-center overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-[#6b4c9a] via-[#b08a24] to-[#2f6f4e]" />

              <div className="flex items-center gap-2">
                <Clapperboard className="size-4 text-[#8f1d1d]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                  Educational Media
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#14284e] sm:text-3xl lg:text-4xl">
                Creating <span className="text-[#8f1d1d]">quality educational content</span> for
                online learning.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                Our in-house studio supports the creation of educational videos and multimedia
                resources designed around institutional courses and learning objectives.
                Professional production, customisation and engaging presentation help make learning
                materials clearer and more accessible to students.
              </p>

              {/* STATS */}

              <div className="mt-6 grid grid-cols-3 border-y border-[#e5e0dc] py-4">
                <div className="border-r border-[#e5e0dc] pr-2 sm:pr-4">
                  <p className="text-2xl font-bold text-[#6b4c9a] sm:text-3xl">01</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                    Studio
                  </p>
                </div>

                <div className="border-r border-[#e5e0dc] px-2 sm:px-4">
                  <p className="text-2xl font-bold text-[#2f6f4e] sm:text-3xl">07</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                    Features
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
                  <Clapperboard className="size-3.5" />
                  Professional Quality
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-[#f7f5f7] px-3.5 py-2 text-xs font-semibold text-[#14284e]">
                  <Video className="size-3.5 text-[#6b4c9a]" />
                  Interactive Content
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
                src={studioProduction}
                alt="CDOE studio green screen and video editing facilities"
                width={1365}
                height={768}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14284e]/90 via-[#14284e]/15 to-transparent" />

              <div className="absolute left-0 top-0 h-full w-1 bg-[#b08a24]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <Video className="size-4 text-[#d8b84c]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    In-house Studio
                  </span>
                </div>

                <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Professional content for meaningful learning.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  Educational media designed to support digital teaching and student engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* =============================================
                  STUDIO FEATURES
              ============================================= */}

        <motion.section
          id="studio-features"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="min-w-0"
        >
          <FacilitySectionHeading eyebrow="What We Offer" title="Studio Features" />

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {studioFeatures.map((feature, index) => (
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

                <p className="mt-3 text-sm leading-6 text-[#667085]">{feature.text}</p>

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
            to="/facilities"
            className="group inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-white px-4 py-2.5 text-sm font-semibold text-[#14284e] transition-colors hover:border-[#8f1d1d] hover:text-[#8f1d1d]"
          >
            <ArrowLeft className="size-4" />
            Back to Overview
          </Link>

          <Link
            to="/lms"
            className="group inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#761717]"
          >
            Explore LMS
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </FacilityPageLayout>
    </SiteLayout>
  );
}

export default StudioPage;
