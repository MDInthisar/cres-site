import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AboutUsSidebar } from "@/components/site/AboutUsSidebar";

import jayaPhoto from "@/assets/jaya.jpg";
import aishaBanuPhoto from "@/assets/DR.AISHABANU.png";
import thowseafPhoto from "@/assets/thowseaf.jpeg";
import formerDirectorPhoto from "@/assets/director.png";

/* =========================================================
   DATA
========================================================= */

const director = {
  name: "Dr. A. Jaya",
  role: "Professor & Director",
  image: jayaPhoto,
  description:
    "The Centre for Distance and Online Education is committed to providing quality education through Online and Distance Learning modes. We understand that each student has unique needs and learning styles. Our ODL and OL programmes are designed to cater to all types of learners, whether you prefer to learn in a traditional classroom setting or from the comfort of your own home. Our highly qualified and experienced faculty members are dedicated to ensuring that you receive the best possible education and guidance to help you achieve your academic and career goals. We believe that education is a lifelong journey. As Director, we are committed to providing you with the necessary knowledge and skills to succeed in today's ever-changing world. We encourage you to take advantage of all the resources and opportunities available to you and actively participate in your learning experience.",
};

const cdoeTeam = [
  {
    name: "Dr. W. Aisha Banu",
    role: "Professor & HOD CSE",
    image: aishaBanuPhoto,
    accent: "green",
  },
  {
    name: "Dr. S. Thowseaf",
    role: "Assistant Professor / CDOE",
    extra: "Assistant Director",
    image: thowseafPhoto,
    accent: "gold",
  },
];

const formerDirector = {
  name: "Dr. V. Rhymend Uthariaraj",
  role: "Former Director",
  year: "2021–2023",
  image: formerDirectorPhoto,
};

/* =========================================================
   ACCENT STYLES
========================================================= */

function getAccentClasses(accent: string) {
  if (accent === "green") {
    return {
      border: "border-[#d8e7dc]",
      line: "bg-[#43845d]",
    };
  }

  if (accent === "gold") {
    return {
      border: "border-[#eadfc4]",
      line: "bg-[#d5ad28]",
    };
  }

  return {
    border: "border-[#e1e4e8]",
    line: "bg-[#d5ad28]",
  };
}

/* =========================================================
   EXECUTION TEAM PAGE
========================================================= */

function ExecutionTeamPage() {
  return (
    <SiteLayout>
      <div style={circularFont} className="min-h-screen bg-[#F5F1E9] text-black">
        {/* MAIN GRID: SIDEBAR LEFT + CONTENT RIGHT */}

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:gap-8 xl:px-10">
          {/* LEFT SIDEBAR */}

          <AboutUsSidebar activeHref="/execution-team" />

          {/* RIGHT CONTENT */}

          <main className="min-w-0">
            {/* PAGE HEADER */}

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
                Execution Team
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                Leadership and dedicated professionals driving excellence at the Centre for Distance
                and Online Education.
              </p>
            </motion.header>

            {/* DIRECTOR */}

            <motion.section
              id="director"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-9 min-w-0"
            >
              <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#43845d]">
                  Leadership
                </p>

                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
                  Director
                </h2>
              </div>

              <article className="overflow-hidden rounded-[24px] border border-[#e5e9e7] bg-white shadow-[0_8px_28px_rgba(20,40,78,0.05)]">
                <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-[minmax(0,1fr)_300px]">
                  {/* DIRECTOR INFORMATION */}

                  <div className="min-w-0 p-5 sm:p-7 lg:p-8">
                    <div className="mb-5 h-[3px] w-12 rounded-full bg-[#d5ad28]" />

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#43845d]">
                      Director
                    </p>

                    <h3 className="break-words text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
                      {director.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#8f1d1d]">{director.role}</p>

                    {/* REDUCED DIRECTOR DESCRIPTION SIZE */}

                    <p className="mt-3 text-justify text-xs leading-5 text-[#667085] sm:text-sm sm:leading-6">
                      {director.description}
                    </p>
                  </div>

                  {/* DIRECTOR IMAGE */}

                  <div className="relative min-h-[280px] overflow-hidden bg-[#e9f0ed] md:min-h-full">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </article>
            </motion.section>

            {/* CDOE TEAM */}

            <motion.section
              id="cdoe-team"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-9 min-w-0"
            >
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
                  Our People
                </p>

                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
                  CDOE Team
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                  Meet the dedicated academic professionals supporting the Centre's educational
                  mission.
                </p>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
                {cdoeTeam.map((member) => {
                  const accent = getAccentClasses(member.accent);

                  return (
                    <motion.article
                      key={member.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className={`min-w-0 overflow-hidden rounded-[22px] border ${accent.border} bg-white shadow-[0_8px_24px_rgba(20,40,78,0.05)]`}
                    >
                      <div className="grid min-w-0 grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)]">
                        {/* TEAM MEMBER IMAGE */}

                        <div className="relative h-64 overflow-hidden bg-[#eeece8] sm:h-full sm:min-h-[220px]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 h-full w-full object-cover object-top"
                          />
                        </div>

                        {/* TEAM MEMBER DETAILS */}

                        <div className="flex min-w-0 flex-col justify-center p-5">
                          <div className={`mb-4 h-[3px] w-10 rounded-full ${accent.line}`} />

                          <h3 className="break-words text-lg font-bold leading-snug text-[#14284e]">
                            {member.name}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#667085]">{member.role}</p>

                          {member.extra && (
                            <p className="mt-3 inline-flex w-fit rounded-full bg-[#f7f1e4] px-3 py-1.5 text-xs font-semibold text-[#8a6a24]">
                              {member.extra}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>

            {/* FORMER DIRECTOR */}

            <motion.section
              id="former-director"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="min-w-0"
            >
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c93636]">
                  Our Legacy
                </p>

                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#14284e] sm:text-2xl">
                  Former Director
                </h2>
              </div>

              <article className="grid min-w-0 grid-cols-1 overflow-hidden rounded-[22px] border border-[#e5e0dc] bg-white shadow-[0_8px_24px_rgba(20,40,78,0.05)] sm:grid-cols-[170px_minmax(0,1fr)]">
                {/* FORMER DIRECTOR IMAGE */}

                <div className="relative h-64 overflow-hidden bg-[#eeece8] sm:h-full sm:min-h-[200px]">
                  <img
                    src={formerDirector.image}
                    alt={formerDirector.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>

                {/* FORMER DIRECTOR DETAILS */}

                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7">
                  <div className="mb-4 h-[3px] w-10 rounded-full bg-[#d5ad28]" />

                  <h3 className="break-words text-xl font-bold tracking-tight text-[#14284e]">
                    {formerDirector.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#667085]">{formerDirector.role}</p>

                  <p className="mt-4 inline-flex w-fit rounded-full bg-[#f7f1e4] px-3 py-1.5 text-xs font-bold text-[#8a6a24]">
                    {formerDirector.year}
                  </p>
                </div>
              </article>
            </motion.section>
          </main>
        </div>
      </div>
    </SiteLayout>
  );
}

export default ExecutionTeamPage;
