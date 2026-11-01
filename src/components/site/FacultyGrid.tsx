import { PeopleCard } from "@/components/site/PeopleCard";
import type { ProgrammeFacultyProfile } from "@/data/programmes";

export type FacultyTheme = "blue" | "green";

type FacultyCardProps = {
  faculty: ProgrammeFacultyProfile;
  theme: FacultyTheme;
  onSelect: (faculty: ProgrammeFacultyProfile, trigger: HTMLButtonElement) => void;
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
    <PeopleCard
      name={faculty.name}
      designation={faculty.designation}
      photo={faculty.photo}
      className={`bg-white ${cardStyles[theme]}`}
    >
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
    </PeopleCard>
  );
}

export function FacultyGrid({
  faculty,
  theme,
  onSelect,
}: {
  faculty: ProgrammeFacultyProfile[];
  theme: FacultyTheme;
  onSelect: (faculty: ProgrammeFacultyProfile, trigger: HTMLButtonElement) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {faculty.map((person) => (
        <FacultyCard key={person.slug} faculty={person} theme={theme} onSelect={onSelect} />
      ))}
    </div>
  );
}
