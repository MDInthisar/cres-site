import { college } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUp,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const base =
  "flex h-10 w-10 items-center justify-center rounded-md shadow-float transition-all duration-300 hover:translate-x-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=B.S.+Abdur+Rahman+Crescent+Institute+of+Science+and+Technology";

  return (
    <>
      {/* ================= GOOGLE MAPS ================= */}
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Find us on Google Maps"
        title="Find us on Google Maps"
        className={cn(
          base,
          "fixed bottom-16 left-3 z-50 bg-[#4285F4] text-white",
        )}
      >
        <MapPin className="size-5" />
      </a>

      {/* ================= WHATSAPP ================= */}
      <a
        href={`https://wa.me/${college.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className={cn(
          base,
          "fixed bottom-4 left-3 z-50 bg-[#25D366] text-white",
        )}
      >
        <MessageCircle className="size-5" />
      </a>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          title="Back to top"
          className={cn(
            base,
            "fixed bottom-6 right-6 z-50 bg-navy text-navy-foreground",
          )}
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </>
  );
}