import type { ReactNode } from "react";
import { useState } from "react";
import { EnquiryFab } from "./EnquiryFab";
import { FloatingActions } from "./FloatingActions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { EventsFab, EventsModalProvider } from "./EventsFab";
import { AdmissionTimeline, ApplyGuideFab } from "./AdmissionTimeline";
import { Chatbot } from "@/components/college-navigator-chatbot";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [applyGuideOpen, setApplyGuideOpen] = useState(false);

  return (
    <EventsModalProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />

        <main className="m-0 p-0">{children}</main>
        <div className="flex items-center justify-between px-3 py-3 sm:hidden">
          <ApplyGuideFab onClick={() => setApplyGuideOpen(true)} />
          <div className="flex gap-1.5">
            <EventsFab />
            <EnquiryFab />
          </div>
        </div>
        <div className="fixed right-0 top-[23%] z-[9999] hidden sm:block">
          <EventsFab />
        </div>
        <div className="fixed right-0 top-[calc(23%+5.5rem)] z-[9999] hidden sm:block">
          <EnquiryFab />
        </div>
        <div className="fixed left-0 top-[35%] z-[9999] hidden -translate-y-1/2 sm:block">
          <ApplyGuideFab onClick={() => setApplyGuideOpen(true)} />
        </div>

        <SiteFooter />
        <Chatbot />

        <FloatingActions />
        <AdmissionTimeline open={applyGuideOpen} onOpenChange={setApplyGuideOpen} />
      </div>
    </EventsModalProvider>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section
      className="
        relative
        m-0
        overflow-hidden
        border-b
        border-[#1d355f]/10
        bg-gradient-hero
        px-5
        py-8
        sm:px-8
        sm:py-10
        md:py-12
        lg:py-14
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          size-64
          rounded-full
          bg-[#741B1B]/8
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -bottom-24
          size-72
          rounded-full
          bg-[#d4af37]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#d4af37]/30
            bg-white/60
            px-4
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#741B1B]
            shadow-sm
            backdrop-blur
          "
        >
          {eyebrow}
        </span>

        {/* Title */}
        <h1
          className="
            mx-auto
            mt-3
            max-w-4xl
            font-display
            text-3xl
            font-bold
            leading-[1.05]
            tracking-tight
            text-[#17243d]
            sm:text-4xl
            md:text-5xl
          "
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-[#667085]
            sm:text-base
          "
        >
          {description}
        </p>
      </div>
    </section>
  );
}
