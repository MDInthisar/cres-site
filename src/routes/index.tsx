
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { HeroDE } from "@/components/site/HeroDE";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StudentReviews } from "@/components/site/StudentReviews";
import { WhoWeAre } from "@/components/site/WhoWeAre";

const title = "B.S. Abdur Rahman Crescent Institute of Science and Technology";
const description =
  "Apply online for UGC approved UG and PG distance education programmes — B.A., B.Com., BBA, BCA, B.Sc., M.A., M.Com., MBA, MCA and M.Sc. Flexible learning and free counselling.";

function Index() {
  return (
    <SiteLayout>
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
    </SiteLayout>
  );
}


export default Index;
