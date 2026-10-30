import { MessageSquareText } from "lucide-react";
import { useState } from "react";
import { EnquiryFormDialog } from "./EnquiryFormDialog";

export function EnquiryFab() {
  const [open, setOpen] = useState(false);

  return (
    <EnquiryFormDialog
      open={open}
      onOpenChange={setOpen}
      onSubmitted={() => setOpen(false)}
      title="Send an enquiry"
      description="Share your details and an admission counsellor will call you back."
      idPrefix="fab"
      trigger={
        <button
          type="button"
          aria-label="Open enquiry form"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-700 p-2 text-white shadow-lg transition-all duration-300 hover:bg-red-800 sm:h-32 sm:w-12 sm:rounded-l-2xl sm:rounded-r-none sm:px-2.5 sm:py-4"
        >
          <span className="relative z-10 flex flex-col items-center gap-3">
            <MessageSquareText className="size-5 shrink-0" aria-hidden />
            <span className="sr-only text-sm font-semibold tracking-[0.08em] sm:not-sr-only sm:[writing-mode:vertical-rl] sm:rotate-180">
              Enquire Now
            </span>
          </span>
        </button>
      }
    />
  );
}
