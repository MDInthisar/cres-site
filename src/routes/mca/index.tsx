import { ProgrammeOverview } from "@/components/site/ProgrammeOverview";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { programmeOverviewData } from "@/data/programmeOverview";
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";

function MCAPage() {
  return (
    <ProgrammePageTemplate {...mcaProgrammePageConfig} actions={[]}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgrammeOverview {...programmeOverviewData.mca} />
      </section>
    </ProgrammePageTemplate>
  );
}

export default MCAPage;
