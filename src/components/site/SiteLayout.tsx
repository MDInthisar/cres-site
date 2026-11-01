import type { ReactNode } from "react";
import { useState } from "react";
import { EnquiryFab } from "./EnquiryFab";
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
        <div className="site-floating-actions-mobile">
          <EventsFab />
          <EnquiryFab />
        </div>
        <div className="site-floating-actions-right">
          <EventsFab />
          <EnquiryFab />
        </div>
        <div className="site-floating-actions-left">
          <ApplyGuideFab onClick={() => setApplyGuideOpen(true)} />
        </div>

        <SiteFooter />
        <Chatbot />

        <AdmissionTimeline open={applyGuideOpen} onOpenChange={setApplyGuideOpen} />
      </div>
    </EventsModalProvider>
  );
}
