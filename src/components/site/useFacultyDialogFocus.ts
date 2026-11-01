import { useRef } from "react";

export function useFacultyDialogFocus() {
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return {
    setTrigger: (trigger: HTMLButtonElement) => {
      triggerRef.current = trigger;
    },
    onCloseAutoFocus: (event: Event) => {
      event.preventDefault();
      triggerRef.current?.focus();
      triggerRef.current = null;
    },
  };
}
