import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { useState, type ReactElement } from "react";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  downloadHref?: string;
  downloadLabel?: string;
  idPrefix?: string;
  trigger?: ReactElement;
  onSubmitted?: () => void;
}

export function EnquiryFormDialog({
  open,
  onOpenChange,
  title,
  description,
  downloadHref,
  downloadLabel = "Download PDF",
  idPrefix = "enquiry-resource",
  trigger,
  onSubmitted,
}: EnquiryFormDialogProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setSubmitted(false);
    onOpenChange(nextOpen);
  };

  const handleSubmitted = () => {
    setSubmitted(true);
    onSubmitted?.();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        overlayClassName="z-[10019] bg-black/55 backdrop-blur-sm"
        className="left-1/2 top-1/2 z-[10020] flex h-[min(42rem,calc(100dvh-2rem))] min-h-0 w-[min(32rem,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-hidden rounded-2xl p-4 sm:rounded-[1.75rem] sm:p-6"
      >
        <DialogHeader className="shrink-0 pr-8 text-left">
          <DialogTitle className="font-display text-xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <EnquiryForm idPrefix={idPrefix} onSubmitted={handleSubmitted} />
        </div>

        {submitted && downloadHref && (
          <a
            href={downloadHref}
            download
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] px-4 py-3 text-sm font-semibold text-white"
          >
            <Download size={17} />
            {downloadLabel}
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}