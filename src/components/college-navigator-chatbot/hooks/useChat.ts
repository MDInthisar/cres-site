import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import faqs, { greetingResponse, isGreeting } from "../data/faq";
import { ui } from "../data/translations";
import { findBestMatch, tokenize } from "../utils/fuzzyMatch";
import type { Language, Message } from "../types/chat";

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
const GENERAL_FEE_TERMS = new Set([
  "fee",
  "fees",
  "tuition",
  "course",
  "courses",
  "program",
  "programs",
  "programme",
  "programmes",
  "structure",
  "total",
  "cost",
  "costs",
  "price",
  "prices",
  "amount",
  "semester",
  "year",
  "annual",
  "each",
  "all",
  "different",
  "ug",
  "pg",
  "undergraduate",
  "postgraduate",
]);
const FEE_TERMS = new Set(["fee", "fees", "tuition", "cost", "costs", "price", "prices"]);

const greetingMessage = (language: Language): Message => ({
  id: createId(),
  sender: "bot",
  text: ui[language].greeting,
  timestamp: new Date().toISOString(),
  language,
});

export function useChat() {
  const language: Language = "en";
  const [messages, setMessages] = useState<Message[]>(() => [greetingMessage("en")]);
  const [isTyping, setIsTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const knowledge = useMemo(() => faqs, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const sendMessage = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || isTyping) return;

      const userMessage: Message = {
        id: createId(),
        sender: "user",
        text,
        timestamp: new Date().toISOString(),
        language,
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      const { entry: matchedEntry } = findBestMatch(text, knowledge);
      const feeTokens = tokenize(text);
      const isGeneralFeeQuestion =
        feeTokens.length > 0 &&
        feeTokens.some((token) => FEE_TERMS.has(token)) &&
        feeTokens.every((token) => GENERAL_FEE_TERMS.has(token));
      const entry = isGeneralFeeQuestion
        ? (knowledge.find((item) => item.id === "q38-fee-structure") ?? matchedEntry)
        : matchedEntry;
      const answer = isGreeting(text)
        ? greetingResponse
        : entry
          ? entry.answer
          : ui[language].fallback;

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
              language,
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
    [isTyping, knowledge, language],
  );

  return {
    messages,
    isTyping,
    language,
    sendMessage,
  };
}
