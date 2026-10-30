import { circularFont } from "@/lib/fonts";
import { useState } from "react";
import {
  ChevronDown,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

const title = "FAQ — Distance Education Admissions & Learning";

const description =
  "Answers about distance education admissions, documents, fees, LMS learning, examinations and student support.";

const faqItems = [
  {
    question: "Is a distance education degree from your institute valid?",
    answer:
      "Programme recognition and validity depend on the applicable approvals, regulations and the specific programme. Students should review the current official programme and regulatory information before applying.",
  },
  {
    question: "Do I need to attend the campus?",
    answer:
      "Distance education is designed to provide flexibility for learners. Most academic activities can be accessed through the prescribed learning system, while required academic or examination activities will follow the applicable programme guidelines.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Applicants generally need academic qualification documents, identity proof, photographs and other documents requested during the admission process. Exact requirements may vary depending on the programme.",
  },
  {
    question: "Can I pay the fee in instalments?",
    answer:
      "Fee payment options depend on the programme and applicable fee structure. Students can check the current admission and fee details for available payment options.",
  },
  {
    question: "How do classes work on the LMS?",
    answer:
      "Students can access learning resources and academic support through the Learning Management System. Course materials, announcements and other learning activities are provided through the prescribed digital platform.",
  },
  {
    question: "Is placement support included?",
    answer:
      "Student career and placement support may include guidance, career resources and opportunities made available through the institute. Specific placement services can vary by programme and eligibility.",
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="relative overflow-hidden bg-[#f4f0e8]"
      >
        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#741b1b]/7 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0f1f3d]/7 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4a017]/8 blur-[120px]" />

        {/* TOP ACCENT */}
        <div className="relative h-[4px] bg-gradient-to-r from-[#741b1b] via-[#d4a017] to-[#0f1f3d]" />

        {/* HEADER */}
        <section className="relative px-4 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6 lg:px-8">
          <div className="mx-auto max-w-5xl">

            <div className="mb-5 text-center">
              {/* FAQ BADGE */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#741b1b]/15 bg-white px-3 py-1 shadow-[0_5px_20px_rgba(15,31,61,0.06)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#741b1b] text-[10px] font-bold text-white">
                  ?
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                  FAQ
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
              </div>

              {/* TITLE */}
              <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-[34px]">
                Answers before you apply
              </h1>

              <p className="mx-auto mt-1.5 max-w-xl text-xs leading-5 text-black/60 sm:text-sm">
                Still unsure? Find clear answers about admissions, learning,
                fees, examinations and student support.
              </p>

              {/* DIVIDER */}
              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-[#741b1b]/20" />
                <span className="h-1 w-8 rounded-full bg-[#d4a017]" />
                <span className="h-px w-8 bg-[#0f1f3d]/20" />
              </div>
            </div>

            {/* FAQ PANEL */}
            <div className="relative overflow-hidden rounded-[22px] border border-[#0f1f3d]/10 bg-[#0f1f3d] shadow-[0_15px_45px_rgba(15,31,61,0.14)]">

              {/* PANEL TOP LINE */}
              <div className="h-[3px] bg-gradient-to-r from-[#741b1b] via-[#d4a017] to-[#741b1b]" />

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#741b1b]/20 blur-[80px]" />

              <div className="relative p-3.5 sm:p-5 lg:p-6">

                {/* PANEL HEADER */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#741b1b] shadow-[0_8px_25px_rgba(116,27,27,0.35)]">
                    <MessageCircleQuestion
                      className="h-5 w-5 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#d4a017]">
                      Student Help Centre
                    </p>

                    <h2 className="text-base font-semibold text-white sm:text-lg">
                      Find the answers you need
                    </h2>
                  </div>
                </div>

                {/* FAQ ITEMS */}
                <div className="space-y-1.5">
                  {faqItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={item.question}
                        className={[
                          "overflow-hidden rounded-xl border transition-all duration-300",
                          isOpen
                            ? "border-[#d4a017]/40 bg-[#162846]"
                            : "border-white/[0.09] bg-white/[0.055] hover:border-[#d4a017]/25 hover:bg-white/[0.08]",
                        ].join(" ")}
                      >
                        {/* QUESTION */}
                        <button
                          type="button"
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-3.5"
                        >
                          <span
                            className={[
                              "text-xs font-medium leading-5 transition-colors sm:text-sm",
                              isOpen
                                ? "text-[#d4a017]"
                                : "text-white/90",
                            ].join(" ")}
                          >
                            {item.question}
                          </span>

                          <span
                            className={[
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isOpen
                                ? "rotate-180 border-[#d4a017] bg-[#d4a017] text-[#0f1f3d]"
                                : "border-white/15 bg-white/5 text-white/60",
                            ].join(" ")}
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </span>
                        </button>

                        {/* ANSWER */}
                        <div
                          className={[
                            "grid transition-[grid-template-rows] duration-300 ease-out",
                            isOpen
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]",
                          ].join(" ")}
                        >
                          <div className="overflow-hidden">
                            <div className="border-t border-white/[0.07] px-4 pb-3.5 pt-2.5 sm:px-5">
                              <p className="text-xs leading-5 text-[#f4f0e8] sm:text-sm">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ADMIN OFFICE SUPPORT */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#741b1b]/10 bg-white shadow-[0_8px_25px_rgba(15,31,61,0.06)]">
              <div className="flex flex-col items-center gap-2.5 px-4 py-3 text-center sm:flex-row sm:justify-between sm:px-5 sm:text-left">

                <div className="flex items-center gap-3">
                  <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-[#741b1b]/10 sm:flex">
                    <ShieldCheck className="h-4 w-4 text-[#741b1b]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#741b1b]">
                      Need more assistance?
                    </p>

                    <p className="mt-0.5 text-xs text-black/60 sm:text-sm">
                      Contact the Admin Office for further assistance.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-[#0f1f3d] px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4a017]">
                    Contact to Admin Office
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM ACCENT */}
        <div className="relative h-[3px] bg-gradient-to-r from-[#741b1b] via-[#d4a017] to-[#0f1f3d]" />
      </main>
    </SiteLayout>
  );
}

export default FaqPage;
