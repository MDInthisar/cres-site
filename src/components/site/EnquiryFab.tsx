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
          className="site-floating-action site-floating-action--enquiry"
        >
          <span className="site-floating-action__content">
            <MessageSquareText className="site-floating-action__icon" aria-hidden />
            <span className="site-floating-action__label">Enquire Now</span>
          </span>
        </button>
      }
    />
  );
}
