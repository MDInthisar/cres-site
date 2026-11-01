import { circularFont } from "@/lib/fonts";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   FONT
   Same font style used in Admission page
========================================================= */

function GalleryPage() {
  return (
    <SiteLayout>
      <main style={circularFont} className="min-h-screen overflow-hidden bg-[#f7f4ee]">
        {/* =====================================================
            GALLERY HEADER
            HERO CONTENT REMOVED
        ===================================================== */}

        {/* =====================================================
            GALLERY CONTENT
        ===================================================== */}

        <section
          id="gallery-content"
          className="scroll-mt-24 bg-[#f7f4ee] px-5 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            {/* Compact gallery heading */}

            {/* Existing gallery */}

            <GalleryGrid />
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-[1.75rem] bg-[#172554] px-6 py-5 text-white shadow-[0_15px_45px_rgba(23,37,84,0.16)] sm:flex-row sm:px-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                Experience Crescent
              </p>

              <h3 className="mt-1 text-lg font-bold">Ready to become part of our journey?</h3>
            </div>

            <a
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-[11px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3c35a]"
            >
              Explore Programmes
              <span className="text-sm">→</span>
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default GalleryPage;
