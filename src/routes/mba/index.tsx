import { ProgrammeOverview } from "@/components/site/ProgrammeOverview";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { programmeOverviewData } from "@/data/programmeOverview";
import { mbaProgrammePageConfig } from "@/data/programmePageConfigs";

function MBAPage() {
  return (
    <ProgrammePageTemplate {...mbaProgrammePageConfig} actions={[]}>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ProgrammeOverview {...programmeOverviewData.mba} />
      </section>
    </ProgrammePageTemplate>
  );
}

export default MBAPage;
