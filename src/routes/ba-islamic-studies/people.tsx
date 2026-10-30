import { circularFont } from "@/lib/fonts";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
  X,
} from "lucide-react";

import { ProgrammeSidebarNavigation } from "@/components/site/ProgrammePageTemplate";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getFacultyForCourse, type FacultyProfile } from "@/data/facultyProfiles";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

const faculty = getFacultyForCourse("ba-islamic-studies");

function BAIslamicStudiesPeoplePage() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);

  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-[#F7F8F4] text-[#111111]">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <section className="relative overflow-hidden bg-[#0d5c45]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
            <Link
              to="/programmes"
              className="group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Programmes
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#f4d979]">
                Undergraduate Programme
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
                People
              </h1>

              <div className="mt-1.5 h-1 w-12 rounded-full bg-[#d4af37]" />

              <p className="mt-2 max-w-3xl text-sm leading-5 text-white/80 sm:text-base sm:leading-6">
                Meet the faculty members supporting teaching, academic guidance and learner
                development in B.A. Islamic Studies.
              </p>
              <div className="mt-3">
                <Link
                  to="/admission"
                  className="group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
        ========================================================= */}

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-12">
          <ProgrammeSidebarNavigation
            variant="ba-islamic-studies"
            navigation={baIslamicStudiesProgrammePageConfig.navigation}
            brochureDialog={baIslamicStudiesProgrammePageConfig.brochureDialog}
            activeTitle="People"
          />
          <main className="min-w-0 py-2 md:py-4">
            {/* SECTION HEADER */}

            <div className="mb-7">
              <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2F6F4E]">
                <span className="h-px w-7 bg-[#D4AF37]" />
                Faculty Team
              </div>

              <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-[-0.02em]">
                Faculty — B.A. Islamic Studies
              </h2>

              <p className="mt-2 max-w-2xl text-[clamp(0.9rem,1.4vw,1rem)] leading-6 text-black/60">
                Academic professionals supporting the learning journey of our students.
              </p>
            </div>

            {/* =========================================================
              FACULTY CARDS
          ========================================================= */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {faculty.map((person, index) => (
                <motion.article
                  key={person.name}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/8
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_35px_rgba(0,0,0,0.09)]
                "
                >
                  {/* GOLD BOTTOM LINE */}

                  <div className="absolute bottom-0 left-4 right-4 z-20 h-[3px] origin-left scale-x-0 rounded-full bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />

                  {/* PHOTO */}

                  <div className="relative h-[260px] w-full overflow-hidden bg-[#F3F3F3] sm:h-[280px]">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#2F6F4E] shadow-sm backdrop-blur-sm">
                      B.A. Islamic Studies
                    </div>

                    <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F6F4E]/95 text-white shadow-lg">
                      <UserRound className="h-4 w-4" />
                    </div>
                  </div>

                  {/* CARD CONTENT */}

                  <div className="px-5 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2F6F4E]">
                      Faculty
                    </p>

                    <h3 className="mt-2 text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold leading-6 text-[#111111]">
                      {person.name}
                    </h3>

                    <p className="mt-1.5 text-sm font-semibold text-[#2F6F4E]">
                      {person.designation}
                    </p>

                    <div className="mt-4 flex items-start gap-2 text-sm leading-5 text-black/55">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <span>{person.qualification}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedFaculty(person)}
                      className="
                      group/info
                      relative
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#111111]
                      transition-colors
                      duration-300
                      hover:text-[#2F6F4E]
                    "
                    >
                      More Info
                      <ArrowRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover/info:translate-x-1" />
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-full bg-[#D4AF37] transition-transform duration-300 group-hover/info:scale-x-100" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* =========================================================
              BOTTOM NOTE
          ========================================================= */}

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#2F6F4E]/10 bg-[#2F6F4E]/5 px-5 py-4">
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6F4E]" />

              <p className="text-sm leading-6 text-black/60">
                Our faculty team supports academic learning, guidance and the overall development of
                learners pursuing B.A. Islamic Studies.
              </p>
            </div>
          </main>
        </section>

        {/* =========================================================
            FACULTY PROFILE MODAL
        ========================================================= */}

        <AnimatePresence>
          {selectedFaculty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                bg-black/55
                px-4
                py-5
                backdrop-blur-sm
              "
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedFaculty(null);
                }
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 18,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  max-h-[90vh]
                  w-full
                  max-w-3xl
                  overflow-y-auto
                  rounded-2xl
                  bg-white
                  shadow-[0_24px_70px_rgba(0,0,0,0.25)]
                "
              >
                {/* =================================================
                    MODAL HEADER
                ================================================= */}

                <div className="relative overflow-hidden bg-[#2F6F4E] px-5 py-6 text-white sm:px-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#D4AF37]" />

                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(null)}
                    aria-label="Close faculty profile"
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white/20
                      hover:rotate-90
                    "
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="relative flex flex-col gap-5 pr-8 sm:flex-row sm:items-center">
                    {/* PHOTO */}

                    <div className="h-[140px] w-[140px] shrink-0 overflow-hidden rounded-2xl border-2 border-white/40 bg-white/10 shadow-xl">
                      <img
                        src={selectedFaculty.photo}
                        alt={selectedFaculty.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* PROFILE NAME */}

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
                        Faculty Profile
                      </p>

                      <h2 className="mt-2 text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight">
                        {selectedFaculty.name}
                      </h2>

                      <p className="mt-2 text-sm font-medium text-white/80">
                        {selectedFaculty.designation}
                      </p>

                      <div className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/90">
                        B.A. Islamic Studies
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    PROFILE DETAILS
                ================================================= */}

                <div className="p-5 sm:p-7">
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F6F4E]">
                      Faculty Details
                    </p>

                    <h3 className="mt-1.5 text-xl font-bold text-[#111111]">
                      Academic & Professional Information
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-black/7">
                    <DetailRow label="Designation" value={selectedFaculty.designation} />

                    <DetailRow
                      label="Nature of Employment"
                      value={selectedFaculty.natureOfEmployment}
                    />

                    <DetailRow label="Qualification" value={selectedFaculty.qualification} />

                    {/* PHONE */}

                    <div className="grid grid-cols-1 border-b border-black/6 bg-[#F5F1E9]/50 px-4 py-4 sm:grid-cols-[180px_1fr] sm:gap-5">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2F6F4E]">
                        <Phone className="h-4 w-4 text-[#D4AF37]" />
                        Phone
                      </div>

                      {selectedFaculty.phone ? (
                        <a
                          href={`tel:${selectedFaculty.phone.replace(/[^0-9]/g, "")}`}
                          className="mt-2 text-sm font-medium text-[#111111] hover:text-[#2F6F4E] sm:mt-0"
                        >
                          {selectedFaculty.phone}
                        </a>
                      ) : null}
                    </div>

                    {/* EMAIL */}

                    <div className="grid grid-cols-1 bg-white px-4 py-4 sm:grid-cols-[180px_1fr] sm:gap-5">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#2F6F4E]">
                        <Mail className="h-4 w-4 text-[#D4AF37]" />
                        Email ID
                      </div>

                      <a
                        href={`mailto:${selectedFaculty.email}`}
                        className="mt-2 break-all text-sm font-medium text-[#111111] hover:text-[#2F6F4E] sm:mt-0"
                      >
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>

                  {/* PROGRAMME */}

                  <div className="mt-5 rounded-2xl border border-[#2F6F4E]/10 bg-[#F5F1E9] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F6F4E]/10">
                        <BookOpen className="h-5 w-5 text-[#2F6F4E]" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2F6F4E]">
                          Programme
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-[#111111]">
                          B.A. Islamic Studies
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* OFFICIAL PROFILE */}

                  <div className="mt-6 flex flex-col gap-4 border-t border-black/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#111111]">Official Faculty Profile</p>

                      <p className="mt-1 text-xs leading-5 text-black/50">
                        View the complete profile on the Crescent website.
                      </p>
                    </div>

                    <Link
                      to={`/faculty-profile/${encodeURIComponent(selectedFaculty.courseSlug)}/${encodeURIComponent(selectedFaculty.slug)}`}
                      className="
                        group
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#2F6F4E]
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#24593E]
                        hover:shadow-lg
                      "
                    >
                      View Official Profile
                      <ArrowRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SiteLayout>
  );
}

/* =========================================================
   DETAIL ROW
========================================================= */

function DetailRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-1 border-b border-black/6 bg-white px-4 py-4 sm:grid-cols-[180px_1fr] sm:gap-5">
      <div className="text-sm font-bold text-[#2F6F4E]">{label}</div>

      <div className="mt-1.5 text-sm font-medium leading-5 text-[#111111] sm:mt-0">{value}</div>
    </div>
  );
}

export default BAIslamicStudiesPeoplePage;
