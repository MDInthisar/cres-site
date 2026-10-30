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
          className="site-floating-action flex items-center justify-center rounded-2xl bg-red-700 px-2.5 py-2.5 text-white shadow-lg transition-all duration-300 hover:bg-red-800"
        >
          <span className="site-floating-action__content relative z-10 flex flex-row items-center gap-1.5">
            <MessageSquareText className="site-floating-action__icon size-5 shrink-0" aria-hidden />
            <span className="site-floating-action__label text-xs font-semibold tracking-[0.04em]">
              Enquire Now
            </span>
          </span>
        </button>
      }
    />
  );
}
