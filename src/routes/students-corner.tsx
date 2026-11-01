import { circularFont } from "@/lib/fonts";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  ShieldCheck,
  X,
  LayoutDashboard,
  BookMarked,
  ClipboardCheck,
  MessageSquareWarning,
} from "lucide-react";

import merlinePhoto from "@/assets/optimized/merline.webp";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const LMS_URL = "https://lmscdoe.crescent-institute.edu.in/login/index.php";

const STUDY_MATERIAL_URL = "https://library.crescent.education/";

const EXAMINATION_URL = "https://resultcrescent.mastersofterp.in/";

function StudentsCornerPage() {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const sidebarItems = [
    {
      id: "overview",
      title: "Student Overview",
      icon: LayoutDashboard,
      href: "#overview",
      external: false,
    },
    {
      id: "lms-login",
      title: "LMS Login",
      icon: BookOpen,
      href: LMS_URL,
      external: true,
    },
    {
      id: "study-material",
      title: "Study Material",
      icon: BookMarked,
      href: STUDY_MATERIAL_URL,
      external: true,
    },
    {
      id: "examination",
      title: "Examination",
      icon: ClipboardCheck,
      href: EXAMINATION_URL,
      external: true,
    },
    {
      id: "student-affairs",
      title: "Student Affairs",
      icon: MessageSquareWarning,
      href: "#student-affairs",
      external: false,
    },
  ];

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-[#F5F1E9] text-[#17234B]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:py-5">
          {/* SIDEBAR NAVIGATION */}

          <aside className="h-fit w-full min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
            <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#858895]">
              Student Corner
            </p>

            <nav aria-label="Student Corner navigation" className="flex flex-col gap-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => {
                      if (!item.external) {
                        setActiveSection(item.id);
                      }
                    }}
                    aria-current={!item.external && isActive ? "location" : undefined}
                    className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors duration-200 ${
                      isActive
                        ? "bg-[#23457D] text-white"
                        : "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#23457D]"
                    }`}
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center">
                      <Icon className="size-3.5" />
                    </span>
                    <span className="min-w-0 flex-1 whitespace-normal break-words text-left">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* MAIN CONTENT */}

          <div className="min-w-0">
            {/* PAGE INTRO */}

            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="scroll-mt-5 pb-4"
            >
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#23457D]">
                STUDENT SERVICES
              </p>

              <h1 className="text-[clamp(1.9rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#17234B]">
                Student Learning &amp; Support
              </h1>

              <p className="mt-2 max-w-3xl text-[14px] leading-[1.65] text-[#686D79]">
                Your learning resources, academic services and student assistance, all in one
                convenient place.
              </p>
            </motion.section>

            {/* LMS AND GRIEVANCE CARDS */}

            <div className="grid items-stretch gap-4 xl:grid-cols-2">
              {/* LMS LOGIN */}

              <motion.section
                id="lms-login"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35 }}
                className="flex scroll-mt-5 flex-col overflow-hidden rounded-[18px] border border-[#E1DDD6] bg-white shadow-[0_4px_16px_rgba(23,35,75,0.04)]"
              >
                <div className="h-1 w-full shrink-0 bg-[#23457D]" />

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#23457D]">
                      <BookOpen className="size-5 text-white" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#23457D]">
                        Digital Learning
                      </p>

                      <h2 className="mt-0.5 text-[20px] font-bold leading-tight text-[#17234B]">
                        LMS Login
                      </h2>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[13px] leading-[1.65] text-[#707482]">
                    Access your online learning environment, course materials and important academic
                    updates.
                  </p>

                  <div className="mt-3.5 grid gap-x-3 gap-y-2 sm:grid-cols-2">
                    {[
                      "Recorded lectures",
                      "Live weekend classes",
                      "Study material and e-books",
                      "Assignment submission",
                      "Internal marks",
                      "Exam updates and results",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#23457D]" />

                        <span className="text-[12px] leading-[1.6] text-[#343846]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-[#EEEAE4] pt-3.5 xl:mt-auto">
                    <a
                      href={LMS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg bg-[#23457D] px-4 py-2.5 text-[12px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#18355f]"
                    >
                      Login to LMS
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.section>

              {/* GRIEVANCE REDRESSAL */}

              <motion.section
                id="student-affairs"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="flex scroll-mt-5 flex-col overflow-hidden rounded-[18px] bg-[#17234B] text-white shadow-[0_5px_18px_rgba(23,35,75,0.1)]"
              >
                <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#18355f] via-[#23457D] to-[#3b69a5]" />

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <ShieldCheck className="size-5 text-white" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                        Student Support
                      </p>

                      <h2 className="mt-0.5 text-[19px] font-bold leading-tight">
                        Grievance Redressal Cell
                      </h2>
                    </div>
                  </div>

                  <p className="mt-2.5 text-[12px] leading-[1.65] text-white/70">
                    For academic or student-related concerns, contact the designated Nodal Officer
                    or submit an online complaint.
                  </p>

                  {/* NODAL OFFICER */}

                  <div className="mt-3.5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3">
                    <div className="size-[72px] shrink-0 overflow-hidden rounded-xl border-2 border-white/50 bg-white/10">
                      <img
                        src={merlinePhoto}
                        alt="P. Paul Merlin"
                        width={1129}
                        height={1393}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[13px] font-bold">P. Paul Merlin</h3>

                      <p className="mt-1 text-[11px] leading-[1.6] text-white/65">
                        Technical Manager
                        <br />
                        (LMS &amp; Data Management)
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-white/80">Nodal Officer</p>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="mt-4 flex flex-wrap gap-2 xl:mt-auto xl:pt-4">
                    <button
                      type="button"
                      onClick={() => setIsComplaintOpen(true)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2.5 text-[11px] font-bold text-[#23457D] transition-all hover:-translate-y-0.5 hover:bg-[#eaf0f7] sm:text-[12px]"
                    >
                      <FileText className="size-3.5" />
                      Online Complaint Form
                    </button>

                    <a
                      href="https://distance.crescent-institute.edu.in/img/Grievence.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/10 sm:text-[12px]"
                    >
                      <FileText className="size-3.5 text-white/80" />
                      UGC Letter
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>

        {/* COMPLAINT MODAL */}

        <AnimatePresence>
          {isComplaintOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-sm"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsComplaintOpen(false);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="student-grievance-title"
                className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[20px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="sticky top-0 z-10 bg-[#23457D] px-5 py-4 text-white">
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#18355f] via-[#23457D] to-[#3b69a5]" />

                  <button
                    type="button"
                    onClick={() => setIsComplaintOpen(false)}
                    aria-label="Close complaint form"
                    className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  >
                    <X className="size-4" />
                  </button>

                  <div className="pr-10">
                    <div className="mb-1.5 flex items-center gap-2">
                      <ShieldCheck className="size-4 text-white" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
                        Student Support
                      </span>
                    </div>

                    <h2
                      id="student-grievance-title"
                      className="text-[20px] font-bold leading-tight"
                    >
                      Student Grievance Redressal Cell
                    </h2>

                    <p className="mt-1.5 text-[12px] leading-5 text-white/65">
                      Submit your grievance using the form below.
                    </p>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <EnquiryForm
                    idPrefix="student-complaint"
                    submissionType="student-complaint"
                    onSubmitted={() => setIsComplaintOpen(false)}
                  />

                  <div className="mt-4 rounded-lg border-l-[3px] border-[#23457D] bg-[#F5F1E9] px-3.5 py-3">
                    <p className="text-[12px] leading-[1.7] text-[#343846]">
                      <span className="font-bold text-[#23457D]">Note:</span> You can also email
                      your grievance to{" "}
                      <a
                        href="mailto:cdoesupport@crescent.education"
                        className="font-bold text-[#23457D] underline underline-offset-2"
                      >
                        cdoesupport@crescent.education
                      </a>{" "}
                      or submit it in person to the Nodal Officer.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </SiteLayout>
  );
}

export default StudentsCornerPage;
