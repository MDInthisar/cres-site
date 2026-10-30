import { memo } from "react";
import { LANGUAGES } from "../data/translations";
import { cn } from "../lib/utils";
import type { Language } from "../types/chat";
interface Props {
  language: Language;
  onChange: (language: Language) => void;
}

function LanguageSwitcherBase({ language, onChange }: Props) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-full bg-primary-foreground/15 p-0.5"
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          aria-pressed={language === item.code}
          className={cn(
            "rounded-full px-2 py-1 text-[11px] font-semibold transition-colors",
            language === item.code
              ? "bg-primary-foreground text-primary"
              : "text-primary-foreground/80 hover:text-primary-foreground",
          )}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}

export const LanguageSwitcher = memo(LanguageSwitcherBase);
export default LanguageSwitcher;
