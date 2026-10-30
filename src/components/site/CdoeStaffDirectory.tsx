import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AboutUsSidebar } from "@/components/site/AboutUsSidebar";
import { SiteLayout } from "@/components/site/SiteLayout";
import { facultyProfiles } from "@/data/facultyProfiles";
import { circularFont } from "@/lib/fonts";

import deepakPhoto from "@/assets/deepak.jpeg";
import lathaPhoto from "@/assets/latha.jpeg";
import meerasaPhoto from "@/assets/meerasa.jpeg";
import merlinePhoto from "@/assets/merline.jpeg";
import roobanPhoto from "@/assets/rooban.jpeg";
import vigneshPhoto from "@/assets/vignesh.jpg";

type StaffTab = "faculty" | "technical";
type FacultyLevel = "ug" | "pg";

const technicalTeam = [
  {
    name: "Mrs. P. Paul Merline",
    designation: "Technical Manager",
    area: "LMS & Data Management",
    photo: merlinePhoto,
  },
  {
    name: "Mr. A. Mohamed Meerasa Mujahith",
    designation: "Technical Assistant",
    area: "LMS",
    photo: meerasaPhoto,
  },
  {
    name: "Mr. K. Rooban",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: roobanPhoto,
  },
  {
    name: "Mrs. R. Latha",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: lathaPhoto,
  },
  {
    name: "Mr. D. Vignesh",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: vigneshPhoto,
  },
  {
    name: "Mr. R. Deepak",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: deepakPhoto,
  },
];

const programmeFilters: Record<FacultyLevel, { label: string; slug: string }[]> = {
  ug: [
    { label: "BA Islamic Studies", slug: "ba-islamic-studies" },
    // { label: "BA Public Policy", slug: "ba-public-policy" },
    // { label: "BA English", slug: "ba-english" },
  ],
  pg: [
    { label: "MBA", slug: "mba" },
    { label: "MCA", slug: "mca" },
  ],
};

function getFacultyLevel(courseSlug: string): FacultyLevel {
  return courseSlug.startsWith("ba-") ? "ug" : "pg";
}

function StaffCard({
  name,
  designation,
  photo,
  area,
  profileLink,
  className,
}: {
  name: string;
  designation: string;
  photo: string;
  area?: string;
  profileLink?: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex min-w-0 flex-col items-center rounded-2xl border border-[#d7dfeb] bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(35,69,125,0.08)] ${className ?? ""}`}
    >
      <img
        src={photo}
        alt={name}
        className="size-24 shrink-0 rounded-full border-4 border-[#e8eef6] object-cover sm:size-28"
      />
      <h2 className="mt-4 w-full break-words text-base font-bold leading-6 text-[#17366F] sm:text-lg">
        {name}
      </h2>
      <p className="mt-1 text-sm font-semibold leading-5 text-[#a33438]">{designation}</p>
      {area && <p className="mt-1 text-sm leading-5 text-[#667085]">{area}</p>}
      {profileLink && <div className="mt-3">{profileLink}</div>}
    </motion.article>
  );
}

export function CdoeStaffDirectory({
  initialTab,
  initialProgramme,
}: {
  initialTab: StaffTab;
  initialProgramme?: "mba" | "mca";
}) {
  const [activeTab, setActiveTab] = useState<StaffTab>(initialTab);
  const [activeLevel, setActiveLevel] = useState<FacultyLevel>(initialProgramme ? "pg" : "ug");
  const [activeProgramme, setActiveProgramme] = useState(initialProgramme ?? "all");
  const faculty = facultyProfiles.filter(
    (person) =>
      getFacultyLevel(person.courseSlug) === activeLevel &&
      (activeProgramme === "all" || person.courseSlug === activeProgramme),
  );

  const selectLevel = (level: FacultyLevel) => {
    setActiveLevel(level);
    setActiveProgramme("all");
  };

  return (
    <SiteLayout>
      <main
        className="min-h-screen overflow-x-clip bg-[#F5F1E9] text-[#17366F]"
        style={circularFont}
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:gap-8 xl:px-10">
          <AboutUsSidebar activeHref="/cdoe-team" />

          <div className="w-full min-w-0">
            <motion.header
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a33438]">
                About Us
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#14284e] sm:text-3xl">
                CDOE Team
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                The faculty and technical team of the Centre for Distance and Online Education.
              </p>
            </motion.header>

            <div
              className="flex w-full max-w-full gap-1.5 overflow-x-auto rounded-full border border-[#d7dfeb] bg-white p-1.5 shadow-[0_5px_16px_rgba(35,69,125,0.06)]"
              role="tablist"
              aria-label="CDOE team"
            >
              {(
                [
                  ["faculty", "Faculty"],
                  ["technical", "Technical Team"],
                ] as const
              ).map(([tab, label]) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`min-h-10 shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                    activeTab === tab
                      ? "bg-[#23457D] text-white shadow-sm"
                      : "text-[#61718a] hover:bg-[#eaf0f7]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {activeTab === "faculty" ? (
              <section className="mt-6" aria-label="Faculty">
                <div
                  className="flex w-full max-w-full gap-2 overflow-x-auto pb-1"
                  role="tablist"
                  aria-label="Faculty programme level"
                >
                  {(
                    [
                      ["ug", "UG Programmes"],
                      ["pg", "PG Programmes"],
                    ] as const
                  ).map(([level, label]) => (
                    <button
                      key={level}
                      type="button"
                      role="tab"
                      aria-selected={activeLevel === level}
                      onClick={() => selectLevel(level)}
                      className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        activeLevel === level
                          ? "border-[#23457D] bg-[#23457D] text-white"
                          : "border-[#d7dfeb] bg-white text-[#17366F] hover:border-[#23457D]/40"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div
                  className="mt-3 flex w-full max-w-full gap-2 overflow-x-auto pb-1"
                  aria-label="Filter faculty by programme"
                >
                  <button
                    type="button"
                    aria-pressed={activeProgramme === "all"}
                    onClick={() => setActiveProgramme("all")}
                    className={`min-h-9 shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      activeProgramme === "all"
                        ? "bg-[#17366F] text-white"
                        : "bg-white text-[#61718a] hover:bg-[#eaf0f7]"
                    }`}
                  >
                    All {activeLevel.toUpperCase()} Programmes
                  </button>
                  {programmeFilters[activeLevel].map((programme) => (
                    <Link
                      key={programme.slug}
                      to={`/${programme.slug}/people`}
                      aria-current={activeProgramme === programme.slug ? "page" : undefined}
                      className={`min-h-9 shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        activeProgramme === programme.slug
                          ? programme.slug === "ba-islamic-studies"
                            ? "bg-[#2F6F4E] text-white"
                            : "bg-[#334b7c] text-white"
                          : programme.slug === "ba-islamic-studies"
                            ? "bg-white text-[#2F6F4E] hover:bg-[#2F6F4E]/10"
                            : "bg-white text-[#334b7c] hover:bg-[#334b7c]/10"
                      }`}
                    >
                      {programme.label}
                    </Link>
                  ))}
                </div>

                {faculty.length > 0 ? (
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {faculty.map((person) => (
                      <StaffCard
                        key={person.slug}
                        className={
                          person.courseSlug === "ba-islamic-studies"
                            ? "rounded-[30px] border-[#d7dfeb] px-5 py-7 shadow-[0_8px_24px_rgba(35,69,125,0.08)]"
                            : faculty.length === 1
                              ? "col-span-2 mx-auto w-full max-w-[12rem] sm:col-span-1 sm:mx-0 sm:max-w-none"
                              : undefined
                        }
                        name={person.name}
                        designation={person.designation}
                        photo={person.photo}
                        profileLink={
                          <Link
                            to={
                              person.courseSlug === "ba-islamic-studies"
                                ? "/ba-islamic-studies/people"
                                : `/faculty-profile/${encodeURIComponent(person.courseSlug)}/${encodeURIComponent(person.slug)}`
                            }
                            className="text-sm font-semibold text-[#a33438] hover:underline"
                          >
                            View profile
                          </Link>
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 rounded-xl border border-[#d7dfeb] bg-white px-5 py-8 text-center text-sm text-[#68788f] shadow-sm">
                    No faculty profiles are currently listed for this programme.
                  </p>
                )}
              </section>
            ) : (
              <section
                className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                aria-label="Technical Team"
              >
                {technicalTeam.map((person) => (
                  <StaffCard
                    key={person.name}
                    name={person.name}
                    designation={person.designation}
                    photo={person.photo}
                    area={person.area}
                  />
                ))}
              </section>
            )}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
