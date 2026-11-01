import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { AboutSectionHeading, AboutSectionLayout } from "@/components/site/AboutSectionLayout";
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Crown,
  GraduationCap,
  Landmark,
  Users,
} from "lucide-react";

import founderPhoto from "@/assets/founder.png";
import presidentPhoto from "@/assets/president.png";
import chancellorPhoto from "@/assets/Chancellor.png";
import proChancellorPhoto from "@/assets/prochancellor.png";
import viceChancellorPhoto from "@/assets/vice-chansoller.png";
import registrarPhoto from "@/assets/registrar.png";

const visionaryTeam = [
  {
    name: "Alhaj Dr. B.S.Abdur Rahman",
    role: "Founder",
    image: founderPhoto,
    accent: "green",
    description:
      "A visionary who always trusted that education can be the crucial factor in improving the socio economic status of people, went ahead in proving it by establishing many educational organizations for the poor and women. He Founded the Seethakathi Trust, Est. 1967 and All India Islamic Foundation (AIIF) Est.1979 to ensure the poor and deprived are benefited in the form of education . A total of 12 Educational Institutions comprising of a leading Engineering University, a Women’s College, an Arabic college for men, 2 boys schools, 3 girls schools, a women nursing college, a teachers training institute, B. Ed college for women and 2 hospitals and orphanages in both urban and rural areas in the State of Tamil Nadu are his contribution to the society with the only motive of providing quality education to the poor",
  },
  {
    name: "Mr. BSA Arif Buhary Rahman",
    role: "President",
    image: presidentPhoto,
    accent: "gold",
    description:
      "The educational institutions have a great responsibility of creating holistic human beings, who have learned enough skills to earn, life ethics and social responsibility. B. S. Abdur Rahman crescent Institute of Science and technology being in the education arena for more than three decades has been successful in creating graduates with good technical skills, exhibiting great leadership skills and socially responsible citizens. The limitation was that the university was not able to extend this expertise to people around the globe and people who could not attend regular classes. The initiative of offering programmes through online and distance mode will help us overcome this barrier and spread our wings across the globe. Apart from degree programmes, certification programmes of international standards will help students from rural India learn technologies that are of great demand globally.",
  },
  {
    name: "Mrs.Qurrath Jameela",
    role: "Chancellor",
    image: chancellorPhoto,
    accent: "violet",
    description:
      "B S Abdur Rahman Crescent Institute of Science and Technology, an Institute with a profound legacy is committed to futuristic education, women empowerment and societal upliftment. Embracing the digital age, this renowned institution aims to provide holistic education and ensure that students are armed with the expertise and skills needed to flourish in a dynamic global landscape.",
    extra:
      "Our mission is to achieve comprehensive growth by fostering an inclusive environment where diversity is celebrated and sustained development is realized.",
  },
  {
    name: "Mr. Abdul Qadir Abdul Rahman Buhari",
    role: "Pro-Chancellor",
    image: proChancellorPhoto,
    accent: "red",
    description:
      "The physical presence of students in a classroom is not the only way to learn anymore. Online learning has created a disruption in today’s education revolution. More than the degree the skills of an individual is very imperative in the industry today. The change in technology every day necessitates unlearning and relearning to be an integral part of every learner. The Online and Distance education programmes are a boon to the people who would upskill and always be relevant in the Industry. The sharing of knowledge has become global. This gives the learner an edge to be a global competitor. The online and distance education of BSACIST will be a big player in creating employable graduates and also help in upgrading their skills.",
  },
  {
    name: "Dr. A. Peer Mohamed",
    role: "Vice-Chancellor i/c",
    image: viceChancellorPhoto,
    accent: "navy",
    description:
      "An educationist for more than three decades, I believe that there is a big need for adapting to new technologies. The Online Distance education programme is an advantage to the learners both to upgrade their skill set and also to improve the qualification. This enhances the chances of better employment opportunities. This also gives a greater flexibility of learning whenever you can and wherever you are. The online and distance education courses at BSAUCIST are tailored to cater to people who are willing to upgrade their skills and seek better employment and also for people who are more willing to increase their academic qualification.",
  },
  {
    name: "Dr. N.Raja Hussain",
    role: "Registrar",
    image: registrarPhoto,
    accent: "green",
    description:
      "The introduction of flexible learning technologies, the online education market is expected to grow multifold in the next few years. Adapting to the technological disruptions is very vital to all the educational institutions. The foresight of the institution in starting the online and distance education department is an exemplary achievement. The strength of the leading team and faculty are important in making all new initiatives a success. BSAUCIST has unarguably the best team and leaders which will make learning a great experience. The mentoring skills of our faculty would help every learner to have a unique experience while upgrading their qualifications and improving their knowledge.",
  },
];

function getRoleIcon(role: string) {
  if (role === "Founder") return Landmark;
  if (role === "President") return Award;
  if (role === "Chancellor") return Crown;
  if (role === "Pro-Chancellor") return GraduationCap;
  if (role === "Vice-Chancellor i/c") return BookOpen;
  return Users;
}

function getAccentClasses(accent: string) {
  switch (accent) {
    case "green":
      return {
        border: "border-[#3f7d58]/15",
        line: "bg-[#d4af37]",
        icon: "text-[#3f7d58]",
        label: "text-[#c93636]",
      };
    case "gold":
      return {
        border: "border-[#d4af37]/20",
        line: "bg-[#d4af37]",
        icon: "text-[#a58208]",
        label: "text-[#c93636]",
      };
    case "violet":
      return {
        border: "border-[#6b4c9a]/15",
        line: "bg-[#d4af37]",
        icon: "text-[#6b4c9a]",
        label: "text-[#c93636]",
      };
    case "red":
      return {
        border: "border-[#831B1B]/15",
        line: "bg-[#d4af37]",
        icon: "text-[#831B1B]",
        label: "text-[#c93636]",
      };
    default:
      return {
        border: "border-[#1d355f]/15",
        line: "bg-[#d4af37]",
        icon: "text-[#1d355f]",
        label: "text-[#c93636]",
      };
  }
}

function TeamCard({ person, index }: { person: (typeof visionaryTeam)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const styles = getAccentClasses(person.accent);
  const Icon = getRoleIcon(person.role);
  const imageOnLeft = index % 2 === 0;

  const fullDescription = person.extra
    ? `${person.description} ${person.extra}`
    : person.description;

  return (
    <motion.section
      id={
        index === 0
          ? "founder"
          : index === 1
            ? "president"
            : index === 2
              ? "chancellor"
              : "administration"
      }
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className={`overflow-hidden rounded-[24px] border ${styles.border} bg-white p-4 shadow-[0_8px_28px_rgba(29,53,95,0.07)] sm:p-6 lg:p-7`}
    >
      <div
        className={`grid grid-cols-1 items-start gap-5 sm:gap-7 lg:gap-8 ${
          imageOnLeft
            ? "sm:grid-cols-[160px_minmax(0,1fr)]"
            : "sm:grid-cols-[minmax(0,1fr)_160px] sm:[&>.team-photo]:order-2 sm:[&>.team-content]:order-1"
        }`}
      >
        {/* PHOTO: SAME WIDTH ON BOTH SIDES */}
        <div className="team-photo mx-auto w-full max-w-[160px] min-w-0 sm:mx-0">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-[#e0f2f8]">
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT: USES THE REMAINING WIDTH */}
        <div className="team-content min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <Icon className={`size-4 shrink-0 ${styles.icon}`} />
            <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${styles.label}`}>
              {person.role}
            </p>
          </div>

          <h2 className="text-xl font-bold leading-tight tracking-tight text-[#14284e] sm:text-2xl lg:text-[26px]">
            {person.name}
          </h2>

          <div className={`mt-4 h-[3px] w-12 rounded-full ${styles.line}`} />

          <p
            className={`mt-5 text-sm leading-7 text-justify text-[#667085] sm:text-base sm:leading-[1.85] ${
              expanded ? "" : "line-clamp-4"
            }`}
          >
            {fullDescription}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((previous) => !previous)}
            aria-expanded={expanded}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#17365f] transition-colors hover:text-[#8f1d1d]"
          >
            {expanded ? "Read Less" : "Read More"}
            {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function VisionaryTeamPage() {
  return (
    <SiteLayout>
      <AboutSectionLayout activeHref="/visionary-team">
        <main className="min-w-0">
          <AboutSectionHeading
            eyebrow="About Us"
            title="Visionary Team"
            description="Leadership and vision driving excellence in education, innovation and societal development."
            className="mb-6"
            initialY={12}
            duration={0.45}
            descriptionClassName="max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7"
          />

          <div className="space-y-5 sm:space-y-6">
            {visionaryTeam.map((person, index) => (
              <TeamCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </main>
      </AboutSectionLayout>
    </SiteLayout>
  );
}

export default VisionaryTeamPage;
