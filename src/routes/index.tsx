import { GalleryGrid } from "@/components/site/GalleryGrid";
import { HeroDE } from "@/components/site/HeroDE";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StudentReviews } from "@/components/site/StudentReviews";
import { WhoWeAre } from "@/components/site/WhoWeAre";

function Index() {
  return (
    <SiteLayout>
      <main className="m-0 p-0">
        <HeroDE />
        <WhoWeAre />
        <section
          aria-label="Student reviews and campus gallery"
          className="bg-[#f8f8f7] px-5 py-7 sm:px-8 sm:py-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <StudentReviews />
            <GalleryGrid featured />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default Index;
