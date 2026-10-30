import { Suspense, lazy, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingChatButton from "./FloatingChatButton";
import { ui } from "../data/translations";

// Lazy loaded: the chatbot bundle only downloads when the user opens it.
const ChatWindow = lazy(() => import("./ChatWindow"));

export function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);

  const toggle = () => {
    if (isChatOpen) {
      // Closing clears the session; reopening remounts a fresh conversation.
      setSessionKey((key) => key + 1);
    }

    setIsChatOpen((open) => !open);
  };

  return (
    <div className="college-navigator-chatbot">
      <AnimatePresence>
        {isChatOpen && (
          <Suspense
            fallback={
              <div
                role="status"
                aria-live="polite"
                className="chatbot-window flex items-center justify-center rounded-[28px] border border-[#d9c49a]/45 bg-white text-sm text-slate-600 shadow-[0_25px_80px_rgba(20,32,63,0.28)]"
              >
                Loading admission assistant…
              </div>
            }
          >
            <ChatWindow key={sessionKey} />
          </Suspense>
        )}
      </AnimatePresence>

      <FloatingChatButton open={isChatOpen} onToggle={toggle} label={ui.en.openChat} />
    </div>
  );
}

export default ChatWidget;
