import { circularFont } from "@/lib/fonts";

import { ProgrammeCards } from "@/components/site/ProgrammeCards";
import { SiteLayout } from "@/components/site/SiteLayout";

function ProgrammesPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#F5F1E9]" style={circularFont}>
        <h1 className="sr-only">Programmes Offered</h1>
        {/* Programme category introduction */}

        {/* Existing programme listings */}

        <div className="[&_h2]:text-2xl [&_h2]:font-black sm:[&_h2]:text-3xl lg:[&_h2]:text-4xl [&_h3]:text-xl [&_h3]:font-bold sm:[&_h3]:text-2xl">
          <ProgrammeCards />
        </div>
      </main>
    </SiteLayout>
  );
}

export default ProgrammesPage;
