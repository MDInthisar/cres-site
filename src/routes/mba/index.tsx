import { ProgrammeOverview } from "@/components/site/ProgrammeOverview";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { getRequiredProgrammeOverview, getRequiredProgrammePageConfig } from "@/data/programmes";

function MBAPage() {
  return (
    <ProgrammePageTemplate {...getRequiredProgrammePageConfig("mba")} actions={[]}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgrammeOverview {...getRequiredProgrammeOverview("mba")} />
      </section>
    </ProgrammePageTemplate>
  );
}

export default MBAPage;
