import {
  CheckCircle2,
  CreditCard,
  FileCheck2,
  FileUp,
  GraduationCap,
  Laptop2,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { admissionSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const stepIcons = [
  Send,
  FileUp,
  FileCheck2,
  CreditCard,
  GraduationCap,
  Laptop2,
];

export function AdmissionTimeline({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#how-to-apply") {
        onOpenChange(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [onOpenChange]);

  return (
    <>
      <button
        type="button"
        aria-label="Open Apply Guide"
        onClick={() => onOpenChange(true)}
        className="fixed left-0 top-[44%] z-[9999] hidden -translate-y-1/2 items-center justify-center rounded-r-2xl bg-red-700 px-2.5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-red-800 sm:flex"
      >
        <span className="flex flex-col items-center gap-2">
          <GraduationCap className="size-5 shrink-0" aria-hidden />
          <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-[0.08em]">
            Apply Guide
          </span>
        </span>
      </button>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          overlayClassName="z-[10000] bg-black/55 backdrop-blur-sm"
          className="left-3 top-1/2 z-[10001] flex max-h-[82dvh] w-[calc(100vw-2rem)] translate-x-0 -translate-y-1/2 flex-col gap-0 overflow-hidden rounded-2xl border-slate-200 bg-white p-0 text-white shadow-2xl sm:left-6 sm:w-[min(30rem,calc(100vw-3rem))]"
        >
          <header className="flex shrink-0 items-center gap-2.5 bg-red-700 px-4 py-3 pr-12">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d4af37]">
              <GraduationCap className="size-5" aria-hidden />
            </div>
            <div>
              <DialogTitle className="text-base font-bold text-white">
                Apply Guide
              </DialogTitle>
              <DialogDescription className="mt-0.5 text-xs leading-4 text-white/75">
                Follow these six steps to begin your learning journey.
              </DialogDescription>
            </div>
          </header>
          <div className="min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain">
    <Section
      id="how-to-apply"
      className="relative min-w-0 overflow-hidden !py-3"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 size-52 rounded-full bg-[#7f1d1d]/5 blur-3xl" />

        <div className="absolute -right-24 bottom-5 size-56 rounded-full bg-[#172554]/7 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-5">

        {/* =================================================
            HEADING
        ================================================== */}

        <Reveal>
          <div className="mx-auto mb-4 max-w-3xl text-center">

            {/* ADMISSION PROCESS PILL */}

            <div className="mb-2.5 flex items-center justify-center">
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8f1d1d]
                  px-4
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                  shadow-[0_8px_20px_rgba(143,29,29,0.15)]
                "
              >
                ADMISSION PROCESS
              </span>
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-2xl
                font-extrabold
                leading-tight
                tracking-tight
                text-[#172554]
              "
            >
              Your journey starts{" "}
              <span className="text-[#8f1d1d]">
                here.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-1.5
                max-w-xl
                text-sm
                leading-5
                text-slate-500
              "
            >
              Six simple steps from application to your first lesson —
              completely online.
            </p>

          </div>
        </Reveal>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div className="relative">

          {/* DESKTOP LINE */}

          <div className="absolute left-[8%] right-[8%] top-[43px] hidden lg:block">

            <div className="h-[2px] bg-[#d4af37]/25" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="
                absolute
                inset-0
                origin-left
                bg-gradient-to-r
                from-[#7f1d1d]
                via-[#d4af37]
                to-[#172554]
              "
            />

          </div>

          {/* =================================================
              STEP CARDS
          ================================================== */}

          <ol className="grid grid-cols-1 gap-2">

            {admissionSteps.map((step, index) => {
              const Icon = stepIcons[index] ?? CheckCircle2;

              return (
                <li key={step.step}>

                  <Reveal delay={index * 0.05}>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="
                        group
                        relative
                        h-full
                        overflow-hidden
                        rounded-[1.15rem]
                        border
                        border-slate-200/70
                        bg-white/65
                        px-3
                        py-3
                        shadow-[0_6px_20px_rgba(23,37,84,0.06)]
                        backdrop-blur-lg
                        transition-all
                        duration-300
                        hover:border-[#d4af37]/60
                        hover:shadow-[0_12px_30px_rgba(23,37,84,0.12)]
                      "
                    >

                      {/* TOP GRADIENT */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-[2px]
                          bg-gradient-to-r
                          from-[#7f1d1d]
                          via-[#d4af37]
                          to-[#172554]
                        "
                      />

                      {/* NUMBER BACKGROUND */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          right-2
                          top-1
                          text-5xl
                          font-black
                          leading-none
                          text-[#172554]/[0.035]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* ICON + STEP */}

                      <div
                        className="
                          relative
                          z-10
                          mb-2
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <div
                          className="
                            flex
                            size-8
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#d4af37]/40
                            bg-[#172554]
                            text-white
                            shadow-[0_5px_12px_rgba(23,37,84,0.16)]
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-[#7f1d1d]
                          "
                        >
                          <Icon className="size-4" />
                        </div>

                        <span
                          className="
                            rounded-full
                            bg-[#7f1d1d]/5
                            px-2.5
                            py-1
                            text-[10px]
                            font-bold
                            tracking-[0.12em]
                            text-[#7f1d1d]
                          "
                        >
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* ACCENT */}

                      <div className="mb-1.5 flex items-center gap-1">

                        <span
                          className="
                            h-[2px]
                            w-5
                            rounded-full
                            bg-[#7f1d1d]
                            transition-all
                            group-hover:w-8
                          "
                        />

                        <span className="size-1 rounded-full bg-[#d4af37]" />

                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          text-[0.95rem]
                          font-extrabold
                          leading-[1.25]
                          text-[#172554]
                          group-hover:text-[#7f1d1d]
                        "
                      >
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-5
                          text-slate-500
                        "
                      >
                        {step.body}
                      </p>

                      {/* BOTTOM */}

                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-1.5
                          border-t
                          border-slate-100
                          pt-2.5
                        "
                      >

                        <CheckCircle2
                          className="size-3.5 text-[#d4af37]"
                        />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            tracking-wide
                            text-slate-400
                          "
                        >
                          NEXT STEP
                        </span>

                      </div>

                    </motion.div>

                  </Reveal>

                </li>
              );
            })}

          </ol>

        </div>

        {/* =================================================
            COMPACT BOTTOM BAR
        ================================================== */}

        <Reveal delay={0.2}>

          <div
            className="
              relative
              mt-5
              overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-[#172554]
              via-[#202f61]
              to-[#7f1d1d]
              px-4
              py-3
              shadow-[0_8px_24px_rgba(23,37,84,0.12)]
            "
          >

            <div
              className="
                relative
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-1.5
                text-center
              "
            >

              {/* READY */}

              <div className="flex items-center gap-1.5">

                <GraduationCap
                  className="size-4 text-[#d4af37]"
                />

                <span
                  className="
                    text-[12px]
                    font-bold
                    text-white
                  "
                >
                  READY TO BEGIN?
                </span>

              </div>

              <span
                className="
                  hidden
                  size-1
                  rounded-full
                  bg-[#d4af37]
                  sm:block
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  text-white/65
                "
              >
                SIMPLE
              </span>

              <span className="text-[#d4af37]">
                •
              </span>

              <span
                className="
                  text-[11px]
                  font-medium
                  text-white/65
                "
              >
                DIGITAL
              </span>

              <span className="text-[#d4af37]">
                •
              </span>

              <span
                className="
                  text-[11px]
                  font-medium
                  text-white/65
                "
              >
                SUPPORTED
              </span>

              <span
                className="
                  hidden
                  size-1
                  rounded-full
                  bg-[#d4af37]
                  sm:block
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#f2cf67]
                "
              >
                100% ONLINE
              </span>

            </div>

          </div>

        </Reveal>

      </div>
    </Section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function ApplyGuideFab({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open Apply Guide"
      onClick={onClick}
      className="flex items-center justify-center rounded-2xl bg-red-700 px-2.5 py-2.5 text-white shadow-lg transition-all duration-300 hover:bg-red-800 sm:hidden"
    >
      <span className="flex flex-row items-center gap-2">
        <GraduationCap className="size-5 shrink-0" aria-hidden />
        <span className="text-xs font-semibold tracking-[0.04em]">Apply Guide</span>
      </span>
    </button>
  );
}