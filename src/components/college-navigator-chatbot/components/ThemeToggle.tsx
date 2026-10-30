import { memo } from "react";
import { Moon, Sun } from "lucide-react";
import type { Theme } from "../types/chat";

interface Props {
  theme: Theme;
  onToggle: () => void;
  label: string;
}

function ThemeToggleBase({ theme, onToggle, label }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="flex size-7 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
    >
      {theme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
    </button>
  );
}

export const ThemeToggle = memo(ThemeToggleBase);
export default ThemeToggle;
