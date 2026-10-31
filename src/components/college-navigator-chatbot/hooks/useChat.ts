import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import faqs, {
  applicationFeeResponse,
  feeResponse,
  isApplicationFeeQuestion,
  isFeeQuestion,
  isGreeting,
  isMcaFeeQuestion,
  mcaFeeResponse,
} from "../data/faq";
import { ui } from "../data/translations";
import { findBestMatch } from "../utils/fuzzyMatch";
import type { Message } from "../types/chat";

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
const greetingResponse =
  "Hi there! 👋 Ask me about our programmes, fees, admissions, or placements.";

const greetingMessage = (): Message => ({
  id: createId(),
  sender: "bot",
  text: ui.en.greeting,
  timestamp: new Date().toISOString(),
});

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(() => [greetingMessage()]);
  const [isTyping, setIsTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const knowledge = useMemo(() => faqs, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const reset = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setMessages([greetingMessage()]);
    setIsTyping(false);
  }, []);

  const sendMessage = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || isTyping) return;

      const userMessage: Message = {
        id: createId(),
        sender: "user",
        text,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      const greeting = isGreeting(text);
      const applicationFeeQuestion = isApplicationFeeQuestion(text);
      const mcaFeeQuestion = isMcaFeeQuestion(text);
      const feeQuestion = isFeeQuestion(text);
      const { entry } =
        greeting || applicationFeeQuestion || feeQuestion
          ? { entry: null }
          : findBestMatch(text, knowledge);
      const answer = greeting
        ? greetingResponse
        : applicationFeeQuestion
          ? applicationFeeResponse
          : mcaFeeQuestion
            ? mcaFeeResponse
            : feeQuestion
              ? feeResponse
              : entry
                ? entry.answer
                : ui.en.fallback;

      timer.current = setTimeout(
        () => {
          timer.current = null;
          setIsTyping(false);
          setMessages((prev) => {
            const botMessage: Message = {
              id: createId(),
              sender: "bot",
              text: answer,
              timestamp: new Date().toISOString(),
              ...(entry?.link
                ? {
                    link: {
                      label: entry.link.label,
                      url: entry.link.url,
                    },
                  }
                : {}),
            };
            return [...prev, botMessage];
          });
        },
        700 + Math.random() * 500,
      );
    },
    [isTyping, knowledge],
  );

  return {
    messages,
    isTyping,
    sendMessage,
    reset,
  };
}
