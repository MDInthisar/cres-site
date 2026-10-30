import { useState } from "react";

export function useSyllabusDownload() {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  return {
    open,
    unlocked,
    show: () => {
      setUnlocked(false);
      setOpen(true);
    },
    close: () => setOpen(false),
    unlock: () => setUnlocked(true),
  };
}
