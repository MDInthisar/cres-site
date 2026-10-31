import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, CircleCheck, Sparkles } from "lucide-react";

import crescentLogo from "@/assets/logo.jpeg";

import ChatInput from "./ChatInput";
import EnquiryForm from "./EnquiryForm";
import LanguageSwitcher from "./LanguageSwitcher";
import MessageBubble from "./MessageBubble";
import PdfDownloadButton from "./PdfDownloadButton";
import ThemeToggle from "./ThemeToggle";
import TypingIndicator from "./TypingIndicator";

import { suggestions, ui } from "../data/translations";
import { useChat } from "../hooks/useChat";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";
import { MAX_QUESTIONS } from "../types/chat";

export function ChatWindow() {
  const {
    messages,
    questionCount,
    isTyping,
    language,
    showEnquiryForm,
    isLocked,
    setLanguage,
    sendMessage,
    completeEnquiry,
  } = useChat();

  const { theme, toggleTheme } = useTheme();

  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = ui[language];

  const remaining = Math.max(MAX_QUESTIONS - questionCount, 0);

  const quickPrompts = useMemo(() => suggestions[language], [language]);

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
  }, [messages, isTyping, showEnquiryForm]);

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
      aria-label={t.headerTitle}
      className={cn(
        `
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
      `,
        theme === "dark" && "dark",
      )}
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

      <header
        className="
          relative
          shrink-0
          overflow-hidden

          bg-gradient-to-br
          from-[#172c5b]
          via-[#203b70]
          to-[#8f1d1d]

          px-4
          pb-3
          pt-5

          text-white
        "
      >
        {/* decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-20
            size-44
            rounded-full
            bg-[#c49a45]/15
            blur-2xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            size-40
            rounded-full
            bg-[#8f1d1d]/25
            blur-3xl
          "
        />

        {/* HEADER MAIN */}

        <div className="relative flex items-center gap-3">
          {/* LOGO */}

          <div
            className="
              relative
              flex
              h-16
              w-40
              shrink-0
              items-center
              justify-center

              overflow-hidden

              rounded-2xl

              border
              border-white/70

              bg-white

              shadow-[0_8px_24px_rgba(0,0,0,0.18)]
            "
          >
            <img
              src={crescentLogo}
              alt="Crescent Logo"
              className="
                h-auto
                w-[150px]
                object-contain
              "
            />

            {/* online dot */}

            <span
              className="
                absolute
                bottom-0.5
                right-0.5
                size-3
                rounded-full
                border-2
                border-white
                bg-emerald-500
              "
            />
          </div>

          {/* TITLE */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-[15px] font-bold tracking-tight">{t.headerTitle}</p>

              <CircleCheck className="size-4 shrink-0 text-[#e0bd68]" aria-hidden />
            </div>

            <p className="mt-0.5 truncate text-[11px] font-medium text-white/70">
              {t.headerSubtitle}
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-medium text-white/65">
                Online • Admissions Assistant
              </span>
            </div>
          </div>

          {/* HEADER ACTIONS */}

          <div className="flex shrink-0 items-center gap-1.5">
            <PdfDownloadButton messages={messages} language={language} label={t.downloadPdf} />

            <ThemeToggle theme={theme} onToggle={toggleTheme} label={t.theme} />
          </div>
        </div>

        {/* HEADER BOTTOM */}

        <div
          className="
            relative
            mt-3

            flex
            items-center
            justify-between
            gap-2
          "
        >
          {/* LANGUAGE */}

          <div
            className="
              rounded-full
              border
              border-white/10
              bg-white/10
              p-0.5

              backdrop-blur-md
            "
          >
            <LanguageSwitcher language={language} onChange={setLanguage} />
          </div>

          {/* QUESTIONS */}

          <div
            className="
              flex
              items-center
              gap-1.5

              rounded-full

              border
              border-[#e0bd68]/30

              bg-black/10

              px-3
              py-1.5

              backdrop-blur-md
            "
          >
            <Sparkles className="size-3.5 text-[#e0bd68]" aria-hidden />

            <span className="text-[10px] font-semibold text-white/85">
              {remaining}/{MAX_QUESTIONS}
            </span>

            <span className="text-[10px] text-white/60">{t.questionsLeft}</span>
          </div>
        </div>
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
        {showEnquiryForm ? (
          <EnquiryForm language={language} onSubmitted={completeEnquiry} />
        ) : (
          <>
            <ChatInput
              value={draft}
              onChange={setDraft}
              onSend={() => handleSend()}
              disabled={isLocked || isTyping}
              language={language}
              remaining={remaining}
            />

            {/* FOOTER STATUS */}

            <div
              className="
                mt-1.5
                flex
                items-center
                justify-between
                px-1
              "
            >
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />

                <span className="text-[9px] font-medium text-slate-400">
                  Crescent Admission Assistant
                </span>
              </div>

              <span className="text-[9px] text-slate-400">Enter ↵ / Shift+Enter</span>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default ChatWindow;
