import { memo, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import type { Language, Message } from "../types/chat";
import { ui } from "../data/translations";

interface Props {
  messages: Message[];
  language: Language;
  label: string;
}

function PdfDownloadButtonBase({ messages, language, label }: Props) {
  const [busy, setBusy] = useState(false);
  const [hasError, setHasError] = useState(false);

  const download = async () => {
    if (busy) return;
    setBusy(true);
    setHasError(false);
    try {
      const { exportConversationPdf } = await import("../utils/pdfExport");
      await exportConversationPdf(messages, language);
    } catch (error) {
      console.error("Could not export chatbot conversation:", error);
      setHasError(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <span className="relative">
      <button
        type="button"
        onClick={download}
        disabled={busy}
        aria-label={label}
        title={label}
        className="flex size-7 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25 disabled:opacity-50"
      >
        {busy ? <Loader2 className="size-3.5 animate-spin" /> : <Download className="size-3.5" />}
      </button>
      {hasError && (
        <span
          role="alert"
          className="absolute right-0 top-full z-30 mt-2 w-52 rounded-lg bg-destructive px-3 py-2 text-xs text-destructive-foreground shadow-lg"
        >
          {ui[language].pdfError}
        </span>
      )}
    </span>
  );
}

export const PdfDownloadButton = memo(PdfDownloadButtonBase);
export default PdfDownloadButton;
