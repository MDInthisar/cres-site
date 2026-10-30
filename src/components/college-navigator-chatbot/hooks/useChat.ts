import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import faqs from "../data/faq";
import { ui } from "../data/translations";
import { findBestMatch } from "../utils/fuzzyMatch";
import { MAX_QUESTIONS, type Language, type Message } from "../types/chat";

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const greetingMessage = (language: Language): Message => ({
  id: createId(),
  sender: "bot",
  text: ui[language].greeting,
  timestamp: new Date().toISOString(),
  language,
});

export function useChat() {
  const [language, setLanguageState] = useState<Language>("en");
  const [messages, setMessages] = useState<Message[]>(() => [greetingMessage("en")]);
  const [questionCount, setQuestionCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const knowledge = useMemo(() => faqs, []);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const reset = useCallback((lang: Language = "en") => {
    if (timer.current) clearTimeout(timer.current);
    setMessages([greetingMessage(lang)]);
    setQuestionCount(0);
    setIsTyping(false);
    setShowEnquiryForm(false);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const isLocked = questionCount >= MAX_QUESTIONS;

  const sendMessage = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || isLocked || isTyping) return;

      const userMessage: Message = {
        id: createId(),
        sender: "user",
        text,
        timestamp: new Date().toISOString(),
        language,
      };
      const nextCount = questionCount + 1;
      setMessages((prev) => [...prev, userMessage]);
      setQuestionCount(nextCount);
      setIsTyping(true);

      const { entry } = findBestMatch(text, knowledge, language);
      const answer = entry ? entry.answer[language] : ui[language].fallback;

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
                      label: entry.link.label[language],
                      url: entry.link.url,
                    },
                  }
                : {}),
            };
            const list = [...prev, botMessage];
            if (nextCount >= MAX_QUESTIONS) {
              list.push({
                id: createId(),
                sender: "bot",
                text: ui[language].limitReached,
                timestamp: new Date().toISOString(),
                language,
              });
            }
            return list;
          });
          if (nextCount >= MAX_QUESTIONS) setShowEnquiryForm(true);
        },
        700 + Math.random() * 500,
      );
    },
    [isLocked, isTyping, knowledge, language, questionCount],
  );

  const completeEnquiry = useCallback(() => {
    setShowEnquiryForm(false);
    setQuestionCount(0);
    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        sender: "bot",
        text: ui[language].submitted,
        timestamp: new Date().toISOString(),
        language,
      },
    ]);
  }, [language]);

  return {
    messages,
    questionCount,
    isTyping,
    language,
    showEnquiryForm,
    isLocked,
    setLanguage,
    sendMessage,
    completeEnquiry,
    reset,
  };
}
