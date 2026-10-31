import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

import { suggestions, ui } from "../data/translations";
import { useChat } from "../hooks/useChat";

export function ChatWindow() {
  const { messages, isTyping, sendMessage } = useChat();

  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = ui.en;

  const quickPrompts = suggestions;

  /* ================================
     AUTO SCROLL
  ================================= */

  useEffect(() => {
    const el = scrollRef.current;

    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  /* ================================
     SEND MESSAGE
  ================================= */

  const handleSend = (text?: string) => {
    const value = text ?? draft;

    if (!value.trim()) return;

    sendMessage(value);
    setDraft("");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
      role="dialog"
      aria-label="Crescent Assistant"
      className="
        chatbot-window
        fixed
        z-[10002]

        flex
        flex-col

        overflow-hidden

        rounded-[28px]

        border
        border-[#d9c49a]/45

        bg-[#f8f8f7]

        shadow-[0_25px_80px_rgba(20,32,63,0.28)]

        ring-1
        ring-black/5
      "
    >
      {/* =====================================================
          PREMIUM TOP ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-20
          h-[3px]

          bg-gradient-to-r
          from-[#8f1d1d]
          via-[#c49a45]
          to-[#172c5b]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="shrink-0 bg-gradient-to-r from-[#172c5b] to-[#203b70] px-4 py-4 text-white">
        <h2 className="text-base font-semibold tracking-tight">Crescent Assistant</h2>
      </header>

      {/* =====================================================
          CHAT BODY
      ====================================================== */}

      <div
        ref={scrollRef}
        className="
          relative
          flex-1

          overflow-y-auto

          bg-[#f7f8fa]

          px-3
          py-3

          scrollbar-thin
          scrollbar-thumb-[#172c5b]/20
          scrollbar-track-transparent
        "
      >
        {/* subtle background */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            -translate-x-1/2

            size-48

            rounded-full

            bg-[#c49a45]/5

            blur-3xl
          "
        />

        <div className="relative space-y-2.5">
          {/* =================================================
              MESSAGES
          ================================================= */}

          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {/* =================================================
              TYPING
          ================================================= */}

          {isTyping && (
            <div className="pt-1">
              <TypingIndicator label={t.typing} />
            </div>
          )}

          {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

          {messages.length <= 1 && !isTyping && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="pt-1"
            >
              {/* heading */}

              <div className="mb-2 flex items-center gap-2 px-1">
                <div
                  className="
                    flex
                    size-7
                    items-center
                    justify-center

                    rounded-xl

                    bg-[#172c5b]

                    shadow-sm
                  "
                >
                  <Bot className="size-4 text-[#e0bd68]" aria-hidden />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#172c5b]">{t.suggestionsTitle}</p>

                  <p className="text-[9px] text-slate-500">Choose a question to get started</p>
                </div>
              </div>

              {/* chips */}

              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt, index) => (
                  <motion.button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group

                      rounded-full

                      border
                      border-[#172c5b]/15

                      bg-white

                      px-3
                      py-1.5

                      text-[11px]
                      font-medium
                      text-[#172c5b]

                      shadow-[0_2px_8px_rgba(23,44,91,0.06)]

                      transition-all
                      duration-200

                      hover:border-[#8f1d1d]/35
                      hover:bg-[#fffaf7]
                      hover:text-[#8f1d1d]
                      hover:shadow-[0_5px_14px_rgba(143,29,29,0.10)]
                    "
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* =====================================================
          INPUT AREA
      ====================================================== */}

      <div
        className="
          shrink-0

          border-t
          border-[#172c5b]/10

          bg-white

          px-3
          pb-3
          pt-2

          shadow-[0_-8px_24px_rgba(23,44,91,0.05)]
        "
      >
        <ChatInput
          value={draft}
          onChange={setDraft}
          onSend={() => handleSend()}
          disabled={isTyping}
        />
      </div>
    </motion.div>
  );
}

export default ChatWindow;
