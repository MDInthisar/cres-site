import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import faqs, { feeResponse, isFeeQuestion, isGreeting } from "../data/faq";
import { ui } from "../data/translations";
import { findBestMatch } from "../utils/fuzzyMatch";
import { MAX_QUESTIONS, type Message } from "../types/chat";

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

  const reset = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setMessages([greetingMessage()]);
    setQuestionCount(0);
    setIsTyping(false);
    setShowEnquiryForm(false);
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
      };
      const nextCount = questionCount + 1;
      setMessages((prev) => [...prev, userMessage]);
      setQuestionCount(nextCount);
      setIsTyping(true);

      const greeting = isGreeting(text);
      const feeQuestion = isFeeQuestion(text);
      const { entry } = greeting || feeQuestion ? { entry: null } : findBestMatch(text, knowledge);
      const answer = greeting
        ? greetingResponse
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
            const list = [...prev, botMessage];
            if (nextCount >= MAX_QUESTIONS) {
              list.push({
                id: createId(),
                sender: "bot",
                text: ui.en.limitReached,
                timestamp: new Date().toISOString(),
              });
            }
            return list;
          });
          if (nextCount >= MAX_QUESTIONS) setShowEnquiryForm(true);
        },
        700 + Math.random() * 500,
      );
    },
    [isLocked, isTyping, knowledge, questionCount],
  );

  const completeEnquiry = useCallback(() => {
    setShowEnquiryForm(false);
    setQuestionCount(0);
    setMessages((prev) => [
      ...prev,
      {
        id: createId(),
        sender: "bot",
        text: ui.en.submitted,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  return {
    messages,
    questionCount,
    isTyping,
    showEnquiryForm,
    isLocked,
    sendMessage,
    completeEnquiry,
    reset,
  };
}
