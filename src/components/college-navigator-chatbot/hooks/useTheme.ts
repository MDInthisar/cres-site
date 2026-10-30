import { useCallback, useEffect, useState } from "react";
import type { Theme } from "../types/chat";

const STORAGE_KEY = "crescent-chat-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") {
        setThemeState(stored);
        setIsInitialized(true);
        return;
      }
    } catch (error) {
      console.warn("Could not read the saved chatbot theme:", error);
    }

    setThemeState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.warn("Could not save the chatbot theme:", error);
    }
  }, [isInitialized, theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme: setThemeState, toggleTheme };
}
