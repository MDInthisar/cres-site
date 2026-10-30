import { circularFont } from "@/lib/fonts";
import { useState } from "react";
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
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";

const faculty = getFacultyForCourse("mca");

function MCAPeoplePage() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);

  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-white text-[#111111]">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-[#6b4c9a] via-[#64438f] to-[#533579] text-white">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
            <div className="mb-3">
              <Link
                to="/mca"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to MCA
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
                Postgraduate Programme
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                People
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Meet the faculty members supporting teaching, academic guidance and learner
                development in MCA.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8">
          <ProgrammeSidebarNavigation
            variant="mca"
            navigation={mcaProgrammePageConfig.navigation}
            brochureDialog={mcaProgrammePageConfig.brochureDialog}
            activeTitle="People"
          />
          <main className="min-w-0 py-2 sm:py-4">
            {/* SECTION HEADING */}
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4c9a] sm:text-sm">
                <span className="h-px w-6 bg-[#D4AF37]" />
                Faculty Team
              </div>

              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">Faculty — MCA</h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                Academic professionals supporting teaching, guidance and learner development.
              </p>
            </div>

            {/* FACULTY CARDS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {faculty.map((person, index) => (
                <motion.article
                  key={person.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* GOLD BOTTOM LINE */}
                  <div className="absolute bottom-0 left-2 right-2 z-20 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />

                  {/* PHOTO */}
                  <div className="relative h-[240px] w-full overflow-hidden bg-[#F3F3F3] sm:h-[260px]">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#6b4c9a] shadow-sm">
                      MCA
                    </div>

                    <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-[#6b4c9a]/90 text-white">
                      <UserRound className="size-5" />
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b4c9a]">
                      Faculty
                    </p>

                    <h3 className="mt-2 text-lg font-bold leading-7 text-[#111111] sm:text-xl">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#6b4c9a] sm:text-base">
                      {person.designation}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-black/60">
                      <GraduationCap className="size-4 shrink-0 text-[#D4AF37]" />
                      MCA Faculty
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedFaculty(person)}
                      className="group/info relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111] sm:text-base"
                    >
                      More Info
                      <ArrowRight className="size-4 text-[#D4AF37] transition-transform duration-300 group-hover/info:translate-x-1" />
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover/info:scale-x-100" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#6b4c9a]/10 bg-[#6b4c9a]/5 px-4 py-4 sm:items-center sm:px-5">
              <BookOpen className="mt-0.5 size-5 shrink-0 text-[#6b4c9a] sm:mt-0" />

              <p className="text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
                Our MCA faculty team supports academic learning, guidance and the overall
                development of learners.
              </p>
            </div>
          </main>
        </section>

        {/* FACULTY PROFILE MODAL */}
        <AnimatePresence>
          {selectedFaculty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-4 py-5 backdrop-blur-sm"
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
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              >
                {/* MODAL HEADER */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#6b4c9a] via-[#64438f] to-[#533579] px-5 py-6 text-white sm:px-7 sm:py-7">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#D4AF37]" />

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(null)}
                    aria-label="Close faculty profile"
                    className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <X className="size-5" />
                  </button>

                  <div className="flex flex-col gap-5 pr-8 sm:flex-row sm:items-center">
                    {/* FACULTY PHOTO */}
                    <div className="h-[140px] w-[140px] shrink-0 overflow-hidden rounded-xl border-2 border-white/40 bg-white/10 shadow-lg">
                      <img
                        src={selectedFaculty.photo}
                        alt={selectedFaculty.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                        Faculty Profile
                      </p>

                      <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                        {selectedFaculty.name}
                      </h2>

                      <p className="mt-2 text-sm font-medium leading-6 text-white/85 sm:text-base">
                        {selectedFaculty.designation}
                      </p>

                      <div className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
                        MCA • Faculty
                      </div>
                    </div>
                  </div>
                </div>

                {/* MODAL BODY */}
                <div className="p-5 sm:p-7">
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4c9a]">
                      Faculty Details
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-7 text-[#111111] sm:text-2xl">
                      Academic & Professional Information
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-black/7">
                    <DetailRow label="Designation" value={selectedFaculty.designation} />

                    <DetailRow
                      label="Nature of Employment"
                      value={selectedFaculty.natureOfEmployment}
                    />

                    <DetailRow label="Qualification" value={selectedFaculty.qualification} />

                    {/* PHONE */}
                    <div className="grid grid-cols-1 border-b border-black/6 bg-[#F5F1E9]/50 px-4 py-4 sm:grid-cols-[190px_1fr] sm:gap-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#6b4c9a] sm:text-base">
                        <Phone className="size-4 shrink-0 text-[#D4AF37]" />
                        Phone
                      </div>

                      <a
                        href={`tel:${selectedFaculty.phone}`}
                        className="mt-2 text-sm font-medium leading-6 text-[#111111] hover:text-[#6b4c9a] sm:mt-0 sm:text-base"
                      >
                        {selectedFaculty.phone}
                      </a>
                    </div>

                    {/* EMAIL */}
                    <div className="grid grid-cols-1 bg-white px-4 py-4 sm:grid-cols-[190px_1fr] sm:gap-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#6b4c9a] sm:text-base">
                        <Mail className="size-4 shrink-0 text-[#D4AF37]" />
                        Email ID
                      </div>

                      <a
                        href={`mailto:${selectedFaculty.email}`}
                        className="mt-2 break-all text-sm font-medium leading-6 text-[#111111] hover:text-[#6b4c9a] sm:mt-0 sm:text-base"
                      >
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>

                  {/* PROGRAMME */}
                  <div className="mt-5 rounded-xl border border-[#6b4c9a]/10 bg-[#F5F1E9] p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <BookOpen className="size-5 shrink-0 text-[#6b4c9a]" />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b4c9a]">
                          Programme
                        </p>

                        <p className="mt-1 text-sm font-bold leading-6 text-[#111111] sm:text-base">
                          Master of Computer Applications (MCA)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* OFFICIAL PROFILE */}
                  <div className="mt-5 flex flex-col gap-3 border-t border-black/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-[#111111]">Faculty Profile</p>

                      <p className="mt-1 text-sm leading-5 text-black/55">
                        View the faculty profile document.
                      </p>
                    </div>

                    <Link
                      to={`/faculty-profile/${encodeURIComponent(selectedFaculty.courseSlug)}/${encodeURIComponent(selectedFaculty.slug)}`}
                      className="group relative inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#6b4c9a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-base"
                    >
                      View Official Profile
                      <ArrowRight className="size-4 text-[#D4AF37]" />
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
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

/* DETAIL ROW */
function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 border-b border-black/6 bg-white px-4 py-4 sm:grid-cols-[190px_1fr] sm:gap-5">
      <div className="text-sm font-semibold leading-6 text-[#6b4c9a] sm:text-base">{label}</div>

      <div className="mt-2 text-sm font-medium leading-6 text-[#111111] sm:mt-0 sm:text-base">
        {value}
      </div>
    </div>
  );
}

export default MCAPeoplePage;
