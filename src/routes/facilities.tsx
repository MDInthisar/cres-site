import { circularFont } from "@/lib/fonts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Database, Laptop, Server, ShieldCheck, Sparkles, Video } from "lucide-react";

import facilitiesCollage from "@/assets/facilities-collage.jpg";
import { AboutUsSidebar } from "@/components/site/AboutUsSidebar";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   PAGE META
========================================================= */

const title = "Facilities — Centre for Distance and Online Education";

const description =
  "Explore the LMS, educational studio, data centre and digital learning infrastructure supporting online education.";

/* =========================================================
   ROUTE
========================================================= */

/* =========================================================
   FACILITY SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: typeof Laptop;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#14284e]">
        <Icon className="size-5 text-[#d8b84c]" />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* =========================================================
   FACILITIES PAGE
========================================================= */

function FacilitiesPage() {
  return (
    <SiteLayout>
      <main style={circularFont} className="min-h-screen bg-[#F5F1E9] text-[#14284e]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:gap-8 xl:px-10">
          <AboutUsSidebar activeHref="/facilities" />

          <div className="min-w-0">
            {/* PAGE HEADER — ABOUT US STYLE */}

            <motion.header
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-7"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
                About Us
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#14284e] sm:text-3xl">
                Facilities
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                Discover the digital learning infrastructure, educational content studio and
                technology that support flexible online education at Crescent.
              </p>
            </motion.header>

            <div className="space-y-8">
              {/* =============================================
                  OVERVIEW
              ============================================= */}

              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-0"
              >
                <div className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
                    Welcome
                  </p>

                  <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
                    Online Education Infrastructure
                  </h2>
                </div>

                <nav
                  aria-label="Facility sections"
                  className="mb-5 flex flex-wrap gap-2 rounded-xl border border-[#dedbd6] bg-white p-2"
                >
                  <Link
                    to="/studio"
                    className="inline-flex items-center rounded-lg border border-[#d7dfeb] px-4 py-2.5 text-base font-semibold text-[#23457D] transition-colors hover:border-[#8f1d1d] hover:bg-[#8f1d1d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f1d1d]"
                  >
                    Studio
                  </Link>
                  <Link
                    to="/lms"
                    className="inline-flex items-center rounded-lg border border-[#d7dfeb] px-4 py-2.5 text-base font-semibold text-[#23457D] transition-colors hover:border-[#8f1d1d] hover:bg-[#8f1d1d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f1d1d]"
                  >
                    LMS
                  </Link>
                  <Link
                    to="/datacenter"
                    className="inline-flex items-center rounded-lg border border-[#d7dfeb] px-4 py-2.5 text-base font-semibold text-[#23457D] transition-colors hover:border-[#8f1d1d] hover:bg-[#8f1d1d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f1d1d]"
                  >
                    Data Center
                  </Link>
                </nav>

                <div className="grid min-w-0 items-stretch gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                  {/* INTRODUCTION */}

                  <article className="flex min-w-0 flex-col justify-center rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
                    <div className="flex items-center gap-2 text-[#8f1d1d]">
                      <Server className="size-4" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                        Centre for Distance and Online Education
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#14284e] sm:text-3xl lg:text-4xl">
                      Modern infrastructure for{" "}
                      <span className="text-[#8f1d1d]">flexible online learning.</span>
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                      B.S. Abdur Rahman Crescent Institute of Science and Technology offers online
                      MBA and MCA learning programmes that adhere to UGC Online Learning Regulations
                      2020 and align with the institution&apos;s values and objectives. Our courses
                      feature the same curriculum as our traditional MBA and MCA programmes,
                      delivered through information technology infrastructure and web-based
                      technologies to meet the needs of working professionals and freshers in a
                      flexible learning environment.
                    </p>

                    {/* FACILITY HIGHLIGHTS */}

                    <div className="mt-6 grid grid-cols-3 border-y border-[#e5e0dc] py-4">
                      <div className="min-w-0 border-r border-[#e5e0dc] pr-2 sm:pr-4">
                        <p className="text-2xl font-bold text-[#14284e] sm:text-3xl">01</p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          LMS
                        </p>
                      </div>

                      <div className="min-w-0 border-r border-[#e5e0dc] px-2 sm:px-4">
                        <p className="text-2xl font-bold text-[#14284e] sm:text-3xl">01</p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          Studio
                        </p>
                      </div>

                      <div className="min-w-0 pl-2 sm:pl-4">
                        <p className="text-2xl font-bold text-[#14284e] sm:text-3xl">24/7</p>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#737782] sm:text-xs">
                          Support
                        </p>
                      </div>
                    </div>

                    {/* TAGS */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-3.5 py-2 text-xs font-semibold text-white">
                        <Laptop className="size-3.5" />
                        Digital Learning
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-[#F5F1E9] px-3.5 py-2 text-xs font-semibold text-[#14284e]">
                        <Sparkles className="size-3.5 text-[#b08a24]" />
                        Flexible Learning
                      </span>
                    </div>
                  </article>

                  {/* CAMPUS IMAGE */}

                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55 }}
                    className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white shadow-[0_6px_22px_rgba(20,40,78,0.06)] sm:min-h-[360px] lg:min-h-full"
                  >
                    <img
                      src={facilitiesCollage}
                      alt="CDOE facilities including the data centre, studio, LMS and learning spaces"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#101a31]/85 via-[#101a31]/10 to-transparent" />

                    <div className="absolute left-0 top-0 h-full w-1 bg-[#b08a24]" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="mb-3 flex items-center gap-2">
                        <Server className="size-4 text-[#e5c55b]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                          Our Infrastructure
                        </span>
                      </div>

                      <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                        Technology that makes learning accessible.
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                        Supporting students through digital learning tools and educational
                        resources.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.section>

              {/* =============================================
                  LMS & IN-HOUSE STUDIO
              ============================================= */}

              <motion.section
                id="lms-studio"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                className="min-w-0"
              >
                <div className="rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
                  <SectionHeading
                    eyebrow="Digital Learning"
                    title="LMS & In-house Studio"
                    icon={Laptop}
                  />

                  <p
                    id="lms"
                    className="text-sm leading-7 text-[#667085] sm:text-base sm:leading-8"
                  >
                    Our Learning Management System (LMS) provides a flexible digital environment for
                    individual learners, learning resources and progress tracking. Its instructional
                    materials support different learning styles, while accessibility and
                    collaborative features encourage teamwork, peer interaction and student
                    engagement.
                  </p>

                  <p
                    id="studio"
                    className="mt-4 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8"
                  >
                    Our LMS supports a personalised learning experience, with attention to security
                    and technical support. The institution&apos;s in-house studio produces
                    educational content tailored to learning objectives. Through professionally
                    produced and interactive materials, the studio helps maintain consistency and
                    improve the learning experience.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/lms"
                      className="inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#761717]"
                    >
                      Explore LMS
                      <ArrowRight className="size-4" />
                    </Link>

                    <Link
                      to="/studio"
                      className="inline-flex items-center gap-2 rounded-full border border-[#e5e0dc] bg-white px-5 py-2.5 text-sm font-semibold text-[#14284e] transition-colors hover:border-[#8f1d1d] hover:text-[#8f1d1d]"
                    >
                      Explore Studio
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </motion.section>

              {/* =============================================
                  DATA CENTER
              ============================================= */}

              <motion.section
                id="datacenter"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
                className="min-w-0"
              >
                <div className="rounded-[22px] border border-[#e5e0dc] bg-white p-5 shadow-[0_6px_22px_rgba(20,40,78,0.04)] sm:p-7 lg:p-8">
                  <SectionHeading
                    eyebrow="Technology & Security"
                    title="Data Center & Server"
                    icon={Database}
                  />

                  <p className="text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                    Dedicated data centre and server infrastructure supports the delivery of online
                    education. Reliable systems, appropriate security controls and scalable
                    infrastructure help support educational platforms and the handling of
                    institutional information.
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                    At B.S. Abdur Rahman Crescent Institute of Science and Technology, digital
                    infrastructure plays an important role in delivering online learning experiences
                    and supporting students throughout their educational journey.
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e5e0dc] bg-[#F5F1E9] p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#14284e]">
                      <ShieldCheck className="size-5 text-[#d8b84c]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#14284e]">
                        Reliable Digital Infrastructure
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#667085]">
                        Supporting online learning systems, digital resources and educational
                        delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default FacilitiesPage;
