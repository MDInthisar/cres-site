import { useState } from "react";

import { FacultyGrid, type FacultyTheme } from "@/components/site/FacultyGrid";
import { FacultyProfileDialog } from "@/components/site/FacultyProfileDialog";
import { useFacultyDialogFocus } from "@/components/site/useFacultyDialogFocus";
import type { ProgrammeFacultyProfile } from "@/data/programmes";

export function FacultyDirectory({
  faculty,
  theme,
  programmeBadge,
  programmeName,
  profileLinkLabel,
  profileLinkDescription,
}: {
  faculty: ProgrammeFacultyProfile[];
  theme: FacultyTheme;
  programmeBadge: string;
  programmeName: string;
  profileLinkLabel: string;
  profileLinkDescription: string;
}) {
  const [selectedFaculty, setSelectedFaculty] = useState<ProgrammeFacultyProfile | null>(null);
  const focus = useFacultyDialogFocus();

  const selectFaculty = (selected: ProgrammeFacultyProfile, trigger: HTMLButtonElement) => {
    focus.setTrigger(trigger);
    setSelectedFaculty(selected);
  };

  return (
    <>
      <FacultyGrid faculty={faculty} theme={theme} onSelect={selectFaculty} />
      <FacultyProfileDialog
        faculty={selectedFaculty}
        theme={theme}
        programmeBadge={programmeBadge}
        programmeName={programmeName}
        profileLinkLabel={profileLinkLabel}
        profileLinkDescription={profileLinkDescription}
        onClose={() => setSelectedFaculty(null)}
        onCloseAutoFocus={focus.onCloseAutoFocus}
      />
    </>
  );
}
