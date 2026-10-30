import { memo, useRef, type FormEvent, type KeyboardEvent } from "react";
import { SendHorizonal } from "lucide-react";
import { ui, RTL_LANGUAGES } from "../data/translations";
import { cn } from "../lib/utils";
import type { Language } from "../types/chat";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  language: Language;
  remaining: number;
}

function ChatInputBase({ value, onChange, onSend, disabled, language, remaining }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const t = ui[language];
  const rtl = RTL_LANGUAGES.includes(language);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (disabled || !value.trim()) return;
    onSend();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!disabled && value.trim()) onSend();
    }
  };

  return (
    <form onSubmit={submit} className="border-t border-border bg-card/80 p-3 backdrop-blur">
      <div
        className={cn(
          "flex items-end gap-2 rounded-2xl border border-border bg-background px-3 py-2 transition-colors focus-within:border-ring",
          disabled && "opacity-60",
        )}
      >
        <textarea
          ref={textareaRef}
          dir={rtl ? "rtl" : "ltr"}
          rows={1}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
          className="max-h-24 flex-1 resize-none bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          aria-label={t.send}
          className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-40"
        >
          <SendHorizonal className="size-4" />
        </button>
      </div>
      <p className="mt-1.5 px-1 text-[11px] text-muted-foreground">
        {remaining} {t.questionsLeft} · Enter ↵ / Shift+Enter
      </p>
    </form>
  );
}

export const ChatInput = memo(ChatInputBase);
export default ChatInput;
