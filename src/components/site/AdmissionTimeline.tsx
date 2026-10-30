import { useEffect } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  GraduationCap,
  LogIn,
  MailCheck,
  UserRoundPlus,
} from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const steps = [
  {
    title: "Choose your programme",
    description:
      "MBA, MCA or BA Islamic Studies — check the eligibility in the Admission Notification before you begin.",
    icon: GraduationCap,
  },
  {
    title: "New Registration",
    description: "Create an account with a username, a password and a valid email ID.",
    icon: UserRoundPlus,
    link: {
      label: "Register now",
      href: "https://admission.crescent-institute.edu.in/login/signup.php",
    },
  },
  {
    title: "Activate the account",
    description:
      "An activation link is sent to that email address. Click it to activate the account before logging in.",
    icon: MailCheck,
  },
  {
    title: "Applicant Login",
    description:
      "Sign in with the credentials you just created to reach your application dashboard.",
    icon: LogIn,
    link: {
      label: "Applicant login",
      href: "https://admission.crescent-institute.edu.in/login/index.php",
    },
  },
  {
    title: "Fill the application form",
    description:
      "Click Apply Here, complete every required field and upload your documents in the prescribed format and size.",
    icon: ClipboardCheck,
  },
  {
    title: "View & Submit",
    description:
      "Check everything under View & Submit Application, then confirm the application. Once submitted, the form can no longer be edited.",
    icon: FileCheck2,
  },
  {
    title: "Pay the application fee (₹ 1,000)",
    description:
      "Select Payment, then Pay now. Payable by Credit Card, Debit Card, Net Banking, UPI.",
    icon: CreditCard,
  },
];

const applicationUrl = "https://admission.crescent-institute.edu.in/login/signup.php";
const guideUrl = "https://ridha0409.github.io/Crescent-Website/admission/how-to-apply";

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        overlayClassName="z-[10000] bg-black/55 backdrop-blur-sm"
        className="left-auto right-3 top-1/2 z-[10001] flex max-h-[82dvh] w-[min(22rem,calc(100vw-1.5rem))] translate-x-0 -translate-y-1/2 flex-col gap-0 overflow-hidden rounded-2xl border-slate-200 bg-white p-0 text-slate-800 shadow-2xl sm:right-6"
      >
        <header className="flex shrink-0 items-center gap-2.5 bg-[#1d355f] px-4 py-3 pr-12">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d4af37]">
            <GraduationCap className="size-5" aria-hidden />
          </div>
          <div>
            <DialogTitle className="text-base font-bold text-white">Apply Guide</DialogTitle>
            <DialogDescription className="mt-0.5 text-xs leading-4 text-white/75">
              The application process, start to finish
            </DialogDescription>
          </div>
        </header>

        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain p-3">
          {steps.map(({ title, description, icon: Icon, link }, index) => (
            <article
              key={title}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1d355f] text-sm font-bold text-white">
                {index === 0 ? <Icon className="size-4" /> : index}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-5 text-[#172554]">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">{description}</p>
                {link && (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#ffc83d] px-3 py-1.5 text-xs font-bold text-[#172554] transition-colors hover:bg-[#f2b91f]"
                  >
                    {link.label}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          <article className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1d355f] text-white">
              <CheckCircle2 className="size-4" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-5 text-[#172554]">
                Application number generated
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                On successful payment your application number is generated and the confirmation can
                be downloaded.
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#ffc83d] px-4 py-2.5 text-xs font-bold text-[#172554] shadow-sm transition-colors hover:bg-[#f2b91f]"
            >
              Start the application ↗
            </a>
            <a
              href={guideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#172554] transition-colors hover:bg-slate-50"
            >
              Read the full guide
            </a>
          </div>

          <p className="px-1 pb-1 text-[11px] leading-4 text-slate-500">
            Steps follow the official CDOE “How to apply” process. Keep the email ID you register
            with — every admission update is sent to it.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ApplyGuideFab({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open Apply Guide"
      onClick={onClick}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-700 p-2 text-white shadow-lg transition-all duration-300 hover:bg-red-800 sm:h-32 sm:w-6 sm:rounded-l-none sm:rounded-r-xl sm:px-1.5 sm:py-4"
    >
      <span className="flex flex-col items-center gap-3">
        <GraduationCap className="size-5 shrink-0" aria-hidden />
        <span className="sr-only text-sm font-semibold tracking-[0.08em] sm:not-sr-only sm:[writing-mode:vertical-rl] sm:rotate-180">
          Apply Guide
        </span>
      </span>
    </button>
  );
}
