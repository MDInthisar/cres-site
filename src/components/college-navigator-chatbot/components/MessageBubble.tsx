import { memo } from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "../lib/utils";
import type { Message } from "../types/chat";

interface Props {
  message: Message;
}

function MessageBubbleBase({ message }: Props) {
  const isUser = message.sender === "user";
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("flex w-full gap-2.5", isUser ? "flex-row-reverse" : "flex-row")}
    >
      <div
        className={cn(
          "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
        )}
        aria-hidden
      >
        {isUser ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
      </div>

      <div className={cn("flex max-w-[80%] flex-col gap-1", isUser ? "items-end" : "items-start")}>
        <div
          dir="ltr"
          className={cn(
            "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap",
            isUser
              ? "rounded-tr-sm bg-accent text-accent-foreground"
              : "rounded-tl-sm border border-border bg-card text-card-foreground shadow-sm",
          )}
        >
          {message.text}
          {message.link && (
            <a
              href={message.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex font-semibold text-primary underline-offset-4 hover:underline"
            >
              {message.link.label}
            </a>
          )}
        </div>
        <span className="px-1 text-[10px] text-muted-foreground">
          {isUser ? "You" : "AI"} · {time}
        </span>
      </div>
    </motion.div>
  );
}

export const MessageBubble = memo(MessageBubbleBase);
export default MessageBubble;
