import { CalendarDays } from "lucide-react";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const newsEvents = [
  {
    title: "Annual Convocation Ceremony",
    date: "12 September 2026",
    body: "Graduating distance learners receive their degrees at the main campus auditorium.",
    overview:
      "The convocation brings together graduates, families and faculty for a meaningful celebration of academic achievement and future readiness.",
  },
  {
    title: "Placement Job Fair",
    date: "28 August 2026",
    body: "Over 40 recruiters meet final-year and alumni candidates across IT, finance and analytics.",
    overview:
      "Students get direct access to recruiters, networking opportunities and career guidance for upcoming placements and internships.",
  },
  {
    title: "Admission Announcement",
    date: "05 August 2026",
    body: "Applications for the 2026 UG, PG and certification intake are now open online.",
    overview:
      "The admission cycle opens for a new batch with clear guidance on eligibility, timelines and online application support.",
  },
  {
    title: "Academic Seminar Series",
    date: "22 July 2026",
    body: "Faculty-led sessions on research methodology and contemporary policy studies.",
    overview:
      "This seminar series fosters intellectual exchange through keynote talks, panel discussions and interactive faculty sessions.",
  },
  {
    title: "Student Orientation",
    date: "10 July 2026",
    body: "A guided walkthrough of the LMS, assessments and mentoring for new enrolments.",
    overview:
      "New students are introduced to academic expectations, learning systems and student support pathways for a smoother start.",
  },
  {
    title: "Skill Development Workshop",
    date: "30 June 2026",
    body: "Hands-on workshop on communication, interviews and workplace readiness.",
    overview:
      "The workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.he workshop helps students build confidence in communication, industry-readiness and presentation skills for professional growth.",
  },
];

const EventsModalContext = createContext<(() => void) | null>(null);

function useOpenEventsModal() {
  const openEvents = useContext(EventsModalContext);
  if (!openEvents) {
    throw new Error("Events modal must be used within EventsModalProvider.");
  }
  return openEvents;
}

export function EventsModalProvider({ children }: { children: ReactNode }) {
  const [eventsOpen, setEventsOpen] = useState(false);

  return (
    <EventsModalContext.Provider value={() => setEventsOpen(true)}>
      {children}
      <Dialog open={eventsOpen} onOpenChange={setEventsOpen}>
        <DialogContent
          overlayClassName="z-[10000] bg-[#101827]/55 backdrop-blur-sm"
          className="z-[10001] max-h-[88vh] max-w-3xl gap-5 overflow-y-auto rounded-2xl border-[#d9dee7] bg-[#f8f7f4] p-5 text-[#172554] sm:p-7"
        >
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="text-2xl font-bold text-[#172554]">
              News &amp; Events
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-[#667085]">
              Explore the latest events, admissions, placements and student activities.
            </DialogDescription>
          </DialogHeader>
          <Accordion type="single" collapsible className="space-y-3">
            {newsEvents.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="overflow-hidden rounded-2xl border border-[#d9dee7] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.04)]"
              >
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7f1d1d]">
                      {item.date}
                    </p>
                    <h2 className="mt-1 text-base font-bold text-[#172554] sm:text-lg">
                      {item.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172554]/70">
                    Details
                  </span>
                </AccordionTrigger>

                <AccordionContent className="border-t border-[#edf0f4] px-4 py-4 sm:px-5">
                  <div>
                    <div className="mb-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />
                    <p className="text-sm leading-7 text-[#3b3f46]">{item.body}</p>
                    <div className="mt-4 rounded-xl border border-[#f0d98a] bg-[#fffaf0] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7f1d1d]">
                        Event overview
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#2b2a2a]">
                        {item.overview}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </DialogContent>
      </Dialog>
    </EventsModalContext.Provider>
  );
}

export function EventsFab() {
  const openEvents = useOpenEventsModal();

  return (
    <button
      type="button"
      aria-label="Open events"
      onClick={openEvents}
      className="site-floating-action flex items-center justify-center rounded-2xl bg-red-700 px-2.5 py-2.5 text-white shadow-lg transition-all duration-300 hover:bg-red-800"
    >
      <span className="site-floating-action__content relative z-10 flex flex-row items-center gap-1.5">
        <CalendarDays className="site-floating-action__icon size-5 shrink-0" aria-hidden />
        <span className="site-floating-action__label text-xs font-semibold tracking-[0.04em]">
          Events
        </span>
      </span>
    </button>
  );
}
