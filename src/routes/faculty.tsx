import { CdoeStaffDirectory } from "@/components/site/CdoeStaffDirectory";
import { getCourseInfo } from "@/data/programmes";
import { useSearchParams } from "react-router-dom";

function FacultyPage() {
  const [searchParams] = useSearchParams();
  const programmeParam = searchParams.get("programme");
  const programme =
    programmeParam && getCourseInfo(programmeParam)?.staffDirectory ? programmeParam : undefined;

  return <CdoeStaffDirectory initialTab="faculty" initialProgramme={programme} />;
}

export default FacultyPage;
