import { CdoeStaffDirectory } from "@/components/site/CdoeStaffDirectory";
import { useSearchParams } from "react-router-dom";

function FacultyPage() {
  const [searchParams] = useSearchParams();
  const programmeParam = searchParams.get("programme");
  const programme =
    programmeParam === "mba" || programmeParam === "mca" ? programmeParam : undefined;

  return <CdoeStaffDirectory initialTab="faculty" initialProgramme={programme} />;
}

export default FacultyPage;
