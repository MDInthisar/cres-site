import { circularFont } from "@/lib/fonts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Mail, Phone, X } from "lucide-react";

import { ProgrammeSidebarNavigation } from "@/components/site/ProgrammePageTemplate";
import { SiteLayout } from "@/components/site/SiteLayout";
import { getFacultyForCourse, type FacultyProfile } from "@/data/facultyProfiles";
import { mbaProgrammePageConfig } from "@/data/programmePageConfigs";

const faculty = getFacultyForCourse("mba");

function MBAPeoplePage() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);

  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-white text-[#111111]">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-[#334b7c] via-[#2b416d] to-[#23365c] text-white">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
            <div className="mb-3">
              <Link
                to="/mba"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to MBA
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
                development in MBA.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8">
          <ProgrammeSidebarNavigation
            variant="mba"
            navigation={mbaProgrammePageConfig.navigation}
            activeTitle="People"
          />
          <main className="min-w-0 py-2 sm:py-4">
            {/* SECTION HEADING */}
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#334b7c] sm:text-sm">
                <span className="h-px w-6 bg-[#D4AF37]" />
                Faculty Team
              </div>

              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">Faculty — MBA</h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                Academic professionals supporting teaching, guidance and learner development.
              </p>
            </div>

            {/* FACULTY CARDS (CDOE TEAM FORMAT) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {faculty.map((person) => (
                <motion.article
                  key={person.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex min-w-0 flex-col items-center rounded-2xl border border-[#d7dfeb] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(35,69,125,0.08)]"
                >
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="size-24 shrink-0 rounded-full border-4 border-[#e8eef6] object-cover sm:size-28"
                  />
                  <h3 className="mt-4 w-full break-words text-base font-bold leading-6 text-[#17366F] sm:text-lg">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[#a33438]">
                    {person.designation}
                  </p>
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedFaculty(person)}
                      className="text-sm font-semibold text-[#a33438] hover:underline"
                    >
                      View profile
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#334b7c]/10 bg-[#334b7c]/5 px-4 py-4 sm:items-center sm:px-5">
              <BookOpen className="mt-0.5 size-5 shrink-0 text-[#334b7c] sm:mt-0" />

              <p className="text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
                Our MBA faculty team supports academic learning, guidance and the overall
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
                <div className="relative overflow-hidden bg-gradient-to-r from-[#334b7c] via-[#2b416d] to-[#23365c] px-5 py-6 text-white sm:px-7 sm:py-7">
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
                        className="h-full w-full object-cover object-top"
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
                        MBA • Faculty
                      </div>
                    </div>
                  </div>
                </div>

                {/* MODAL BODY */}
                <div className="p-5 sm:p-7">
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#334b7c]">
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
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#334b7c] sm:text-base">
                        <Phone className="size-4 shrink-0 text-[#D4AF37]" />
                        Phone
                      </div>

                      <a
                        href={`tel:${selectedFaculty.phone}`}
                        className="mt-2 text-sm font-medium leading-6 text-[#111111] hover:text-[#334b7c] sm:mt-0 sm:text-base"
                      >
                        {selectedFaculty.phone}
                      </a>
                    </div>

                    {/* EMAIL */}
                    <div className="grid grid-cols-1 bg-white px-4 py-4 sm:grid-cols-[190px_1fr] sm:gap-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#334b7c] sm:text-base">
                        <Mail className="size-4 shrink-0 text-[#D4AF37]" />
                        Email ID
                      </div>

                      <a
                        href={`mailto:${selectedFaculty.email}`}
                        className="mt-2 break-all text-sm font-medium leading-6 text-[#111111] hover:text-[#334b7c] sm:mt-0 sm:text-base"
                      >
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>

                  {/* PROGRAMME */}
                  <div className="mt-5 rounded-xl border border-[#334b7c]/10 bg-[#F5F1E9] p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <BookOpen className="size-5 shrink-0 text-[#334b7c]" />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#334b7c]">
                          Programme
                        </p>

                        <p className="mt-1 text-sm font-bold leading-6 text-[#111111] sm:text-base">
                          Master of Business Administration (MBA)
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
                      className="group relative inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#334b7c] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-base"
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
      <div className="text-sm font-semibold leading-6 text-[#334b7c] sm:text-base">{label}</div>

      <div className="mt-2 text-sm font-medium leading-6 text-[#111111] sm:mt-0 sm:text-base">
        {value}
      </div>
    </div>
  );
}

export default MBAPeoplePage;