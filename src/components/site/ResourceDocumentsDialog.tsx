import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight, ExternalLink, FileDown } from "lucide-react";
import { motion } from "framer-motion";

type ResourceDocument = {
  title: string;
  href?: string;
  isHeading?: boolean;
};

type ResourceDocumentsDialogProps = {
  title: string;
  description: string;
  documents: ResourceDocument[];
  triggerLabel: string;
  triggerClassName: string;
};

export function ResourceDocumentsDialog({
  title,
  description,
  documents,
  triggerLabel,
  triggerClassName,
}: ResourceDocumentsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
          className={triggerClassName}
        >
          <FileDown className="size-3.5" />
          {triggerLabel}
          <ArrowUpRight className="size-3.5" />
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] overflow-y-auto border-[#D9D4CA] bg-[#F7F4EE] p-6 text-[#20242B] sm:max-w-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ul className="divide-y divide-[#D9D4CA]">
          {documents.map((document) => (
            <li key={document.title}>
              {document.isHeading ? (
                <h3 className="border-b border-[#D9D4CA] pb-2 pt-4 text-sm font-bold text-[#8F3030]">
                  {document.title}
                </h3>
              ) : document.href ? (
                <a
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-3 text-sm font-semibold text-[#20242B] transition-colors hover:text-[#8F3030]"
                >
                  <FileDown className="size-4 shrink-0 text-[#8F3030]" />
                  <span className="flex-1">{document.title}</span>
                  <ExternalLink className="size-4 shrink-0 text-[#737782]" />
                </a>
              ) : (
                <div
                  aria-disabled="true"
                  className="flex items-center gap-3 py-3 text-sm font-semibold text-[#737782]"
                >
                  <FileDown className="size-4 shrink-0" />
                  <span className="flex-1">{document.title}</span>
                  <span className="text-xs font-medium">Not available</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}