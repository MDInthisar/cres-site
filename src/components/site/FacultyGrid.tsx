import { motion } from "framer-motion";

import type { FacultyProfile } from "@/data/facultyProfiles";

export type FacultyTheme = "blue" | "green";

type FacultyCardProps = {
  faculty: FacultyProfile;
  theme: FacultyTheme;
  onSelect: (faculty: FacultyProfile, trigger: HTMLButtonElement) => void;
};

const cardStyles: Record<FacultyTheme, string> = {
  blue: "rounded-2xl border border-[#d7dfeb] px-4 py-6 shadow-[0_8px_24px_rgba(35,69,125,0.08)]",
  green:
    "rounded-[30px] border border-[#d7dfeb] px-5 py-7 shadow-[0_8px_24px_rgba(35,69,125,0.08)]",
};

const linkColors: Record<FacultyTheme, string> = {
  blue: "text-[#a33438]",
  green: "text-[#a33438]",
};

export function FacultyCard({ faculty, theme, onSelect }: FacultyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex min-w-0 flex-col items-center bg-white text-center ${cardStyles[theme]}`}
    >
      <img
        src={faculty.photo}
        alt={faculty.name}
        className="size-24 shrink-0 rounded-full border-4 border-[#e8eef6] object-cover sm:size-28"
      />
      <h3 className="mt-4 w-full break-words text-base font-bold leading-6 text-[#17366F] sm:text-lg">
        {faculty.name}
      </h3>
      <p className="mt-1 text-sm font-semibold leading-5 text-[#a33438]">{faculty.designation}</p>
      <div className="mt-3">
        <button
          type="button"
          onClick={(event) => onSelect(faculty, event.currentTarget)}
          aria-label={`View ${faculty.name}'s profile`}
          className={`text-sm font-semibold hover:underline ${linkColors[theme]}`}
        >
          View profile
        </button>
      </div>
    </motion.article>
  );
}

export function FacultyGrid({
  faculty,
  theme,
  onSelect,
}: {
  faculty: FacultyProfile[];
  theme: FacultyTheme;
  onSelect: (faculty: FacultyProfile, trigger: HTMLButtonElement) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {faculty.map((person) => (
        <FacultyCard key={person.slug} faculty={person} theme={theme} onSelect={onSelect} />
      ))}
    </div>
  );
}
