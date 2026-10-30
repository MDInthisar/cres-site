import { memo } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import chatbotImage from "@/assets/chatbox.png";

interface Props {
  open: boolean;
  onToggle: () => void;
  label: string;
}

function FloatingChatButtonBase({ open, onToggle, label }: Props) {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[99999]
        flex
        items-end
        justify-end
        sm:bottom-6
        sm:right-6
      "
    >
      {/* ===================================================== */}
      {/* PREMIUM CHAT TEASER */}
      {/* ===================================================== */}

      {!open && (
        <motion.button
          type="button"
          onClick={onToggle}
          aria-label="Open Crescent Admission Assistant"
          initial={{
            opacity: 0,
            x: 25,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 1.025,
            x: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group
            absolute
            right-[68px]
            bottom-1
            flex
            items-center
            whitespace-nowrap
            rounded-full
            border
            border-white/20
            bg-gradient-to-r
            from-[#202b55]
            via-[#30276b]
            to-[#8f1d1d]
            px-3
            py-2
            text-left
            text-[11px]
            font-semibold
            text-white
            shadow-[0_8px_24px_rgba(15,23,42,0.28)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.38)]
          "
        >
          Can I help you?
        </motion.button>
      )}

      {/* ===================================================== */}
      {/* CHATBOT BUTTON */}
      {/* ===================================================== */}

      <motion.button
        type="button"
        onClick={onToggle}
        aria-label={label}
        aria-expanded={open}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.07,
        }}
        className="
          group
          relative
          z-30
          flex
          size-[60px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-white
          bg-white
          shadow-[0_14px_40px_rgba(15,23,42,0.30)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#b28a3e]
          focus-visible:ring-offset-2
          sm:size-[64px]
        "
      >
        {/* OUTER GOLD RING */}
        <motion.span
          animate={
            open
              ? {}
              : {
                  scale: [1, 1.18, 1],
                  opacity: [0.35, 0, 0.35],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-[-5px]
            rounded-full
            border
            border-[#b28a3e]
          "
        />

        {/* INNER NAVY RING */}
        <span
          className="
            absolute
            inset-[3px]
            rounded-full
            border
            border-[#202b55]/15
            bg-gradient-to-br
            from-[#ffffff]
            via-[#f8f6f1]
            to-[#ece8dd]
          "
        />

        {/* ICON / IMAGE */}
        <span
          className="
            relative
            z-10
            flex
            size-full
            items-center
            justify-center
            overflow-hidden
            rounded-full
          "
        >
          {open ? (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-full
                bg-[#202b55]
                text-white
                shadow-md
              "
            >
              <X className="size-5" />
            </motion.div>
          ) : (
            <motion.img
              src={chatbotImage}
              alt="Crescent Admission Assistant"
              className="
                h-full
                w-full
                object-cover
              "
              animate={{
                y: [0, -1.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </span>

        {/* ONLINE DOT */}
        {!open && (
          <span
            className="
              absolute
              bottom-0
              right-0
              z-20
              flex
              size-4
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-[#b28a3e]
            "
          >
            <span className="size-1.5 rounded-full bg-white" />
          </span>
        )}
      </motion.button>
    </div>
  );
}

export const FloatingChatButton = memo(FloatingChatButtonBase);

export default FloatingChatButton;
