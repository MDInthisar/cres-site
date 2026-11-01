import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles, Users } from "lucide-react";

import aboutCampusPhoto from "@/assets/about-cdoe-launch.jpg";
import { AboutSectionLayout } from "@/components/site/AboutSectionLayout";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   ABOUT TEAM CARDS
========================================================= */

const teamCards = [
  {
    title: "Visionary Team",
    description:
      "Meet the Founder, President, Chancellor, Pro-Chancellor, Vice-Chancellor and Registrar whose vision shapes the institution's academic direction.",
    href: "/visionary-team",
    icon: GraduationCap,
  },
  {
    title: "Execution Team",
    description:
      "Discover the Director and the team responsible for managing the Centre's daily operations and academic activities.",
    href: "/execution-team",
    icon: Users,
  },
  {
    title: "CDOE Team",
    description:
      "Get to know the faculty, technical professionals and administrative staff supporting our online programmes.",
    href: "/cdoe-team",
    icon: ShieldCheck,
  },
  {
    title: "Facilities",
    description:
      "Explore the learning facilities, academic resources and student support services that enhance your learning experience.",
    href: "/facilities",
    icon: Sparkles,
  },
];

function AboutTeamCards() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
      {teamCards.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.05,
            }}
            className="flex min-w-0 flex-col rounded-xl border border-[#dedbd6] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-3 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F1E9] text-[#8f1d1d]">
              <Icon className="size-4" />
            </div>

            <h3 className="text-base font-bold leading-6 text-[#17234B]">{item.title}</h3>

            <p className="mt-2 min-w-0 flex-1 break-words text-sm leading-6 text-[#555b66] sm:text-base">
              {item.description}
            </p>

            <Link
              to={item.href}
              className="mt-4 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-[#dedbd6] px-3 py-2 text-sm font-semibold text-[#17234B] transition-colors duration-200 hover:border-[#8f1d1d] hover:bg-[#8f1d1d] hover:text-white"
            >
              <span>Read More</span>
              <ArrowRight className="size-3 shrink-0" />
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <SiteLayout>
      <AboutSectionLayout
        activeHref="/about"
        mainClassName="min-h-screen overflow-x-clip bg-[#F5F1E9] text-[#111111]"
        contentClassName="w-full min-w-0"
      >
        {/* PAGE TITLE */}

        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
            About Us
          </p>

          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-[#17234B] sm:text-3xl">
            About Crescent
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#555b66] sm:text-base">
            A renowned quality leadership institution at the greenest spot of Chennai.
          </p>
        </motion.header>

        {/* CAMPUS IMAGE */}

        <motion.figure
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.05,
          }}
          className="group mb-6 h-[190px] overflow-hidden rounded-xl border-4 border-white bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] sm:h-[250px] lg:h-[285px] xl:h-[320px]"
        >
          <img
            src={aboutCampusPhoto}
            alt="Crescent CDOE online MBA and MCA programme launch"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </motion.figure>

        {/* INSTITUTION DETAILS */}

        <section className="mb-6">
          <h2 className="text-lg font-bold leading-7 text-[#17234B] sm:text-xl">
            B.S. Abdur Rahman Crescent Institute of Science &amp; Technology
          </h2>

          <div className="mt-3 space-y-3 text-sm leading-7 text-[#555b66] sm:text-base">
            Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology has been a
            renowned quality leadership institution located near Tambaram, in one of the greenest
            areas of Chennai. Through its long history of academic excellence, the institution has
            offered access to a wide range of educational opportunities, with 55 programmes grouped
            under 12 different schools. These include 30 undergraduate programmes, 25 postgraduate
            programmes and Ph.D. research opportunities. The institution is an intellectual
            destination that challenges conventional thinking and encourages students to explore new
            ideas. Its distinctive teaching approach inspires students and scholars to strive for
            excellence, develop their abilities and pursue meaningful academic goals. Beyond quality
            education, the green campus and thoughtfully planned student environment provide
            opportunities for learning, collaboration and personal growth. Through a wide range of
            educational programmes and student clubs, the institution creates experiences that build
            community, strengthen professional skills and encourage lifelong learning.
          </div>
        </section>

        {/* TEAM AND FACILITIES LINKS */}

        <section aria-label="Explore Crescent teams" className="pb-8">
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8f1d1d]">
              Discover Crescent
            </p>

            <h2 className="mt-1.5 text-xl font-bold text-[#17234B] sm:text-2xl">
              People, Leadership &amp; Facilities
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-[#555b66] sm:text-base">
              Explore the people who guide our institution, the teams that support our programmes
              and the facilities that contribute to the learning experience.
            </p>
          </div>

          <AboutTeamCards />
        </section>
      </AboutSectionLayout>
    </SiteLayout>
  );
}

export default AboutPage;
