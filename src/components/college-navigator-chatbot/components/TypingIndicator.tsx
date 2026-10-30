import { memo } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

function TypingIndicatorBase({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2.5"
      aria-live="polite"
      aria-label={label}
    >
      <div className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Bot className="size-3.5" />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-border bg-card px-3.5 py-3 shadow-sm">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-1.5 rounded-full bg-muted-foreground"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export const TypingIndicator = memo(TypingIndicatorBase);
export default TypingIndicator;
