import { AnimatePresence, motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeading } from "./Section";

const reviews = [
  {
    name: "Sana Fathima",
    programme: "MBA · Class of 2024",
    text: "I completed my MBA while working full time. Weekend live classes and recorded lectures made it genuinely possible, and the mentors never let me fall behind.",
  },
  {
    name: "Rahul Menon",
    programme: "BCA · Class of 2025",
    text: "The admission team guided me through every document. I was enrolled in four days without visiting the campus once — the whole process felt effortless.",
  },
  {
    name: "Aisha Begum",
    programme: "M.Com. · Class of 2024",
    text: "Study material on the LMS was beautifully structured and my mentor replied to doubts within hours. Real academic support, not just slides on a portal.",
  },
  {
    name: "Vignesh Kumar",
    programme: "B.Com. · Class of 2025",
    text: "A UGC recognised degree with an affordable fee plan let me finish my graduation while supporting my family. It changed the direction of my career.",
  },
];

export function StudentReviews() {
  const [index, setIndex] = useState(0);

  const perView = 1;
  const pages = Math.ceil(reviews.length / perView);

  const next = useCallback(() => setIndex((i) => (i + 1) % pages), [pages]);

  const prev = () => setIndex((i) => (i - 1 + pages) % pages);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next]);

  const visible = reviews.slice(index * perView, index * perView + perView);

  return (
    <Section id="reviews" className="h-full [&>div]:h-full !px-0 !py-0 bg-transparent">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mb-6 text-left">
          <SectionHeading
            eyebrow="STUDENT REVIEWS"
            title="What our learners say"
            description="Real experiences from students who built their future with CDOE."
            align="left"
          />
        </div>

        {/* =========================
            REVIEWS
        ========================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid flex-1 gap-4"
          >
            {visible.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  h-full
                  rounded-2xl
                  border
                  border-[#d9dee7]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_6px_24px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.09)]
                "
              >
                {/* Top Row */}
                <figcaption>
                  <span className="block text-[16px] font-bold text-[#172554]">{r.name}</span>
                  <span className="mt-0.5 block text-[12px] text-[#4b4b4b]">{r.programme}</span>
                </figcaption>

                {/* Gold Divider */}
                <div
                  className="
                    mt-3
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[#d4af37]
                    transition-all
                    duration-300
                    group-hover:w-14
                  "
                />

                {/* Review */}
                <blockquote
                  className="
                    mt-3
                    text-[14px]
                    leading-[1.6]
                    text-[#4b4b4b]
                    lg:text-[15px]
                  "
                >
                  “{r.text}”
                </blockquote>

                {/* Bottom Identity */}
                <div
                  className="
                    mt-3
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#e5e7eb]
                    pt-2.5
                  "
                >
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.12em]
                      text-[#7f1d1d]
                    "
                  >
                    VERIFIED LEARNER
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      tracking-wider
                      text-[#172554]/45
                    "
                  >
                    CDOE
                  </span>
                </div>

                {/* Bottom Red Accent */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-[#7f1d1d]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* =========================
            CONTROLS
        ========================== */}
        <div className="mt-auto flex items-center justify-center gap-3 pt-5">
          {/* Previous */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className="
              flex
              size-9
              items-center
              justify-center
              rounded-full
              border
              border-[#172554]/20
              bg-white
              text-[#172554]
              transition-all
              hover:bg-[#172554]
              hover:text-white
            "
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review set ${i + 1}`}
                aria-current={i === index}
                className={
                  i === index
                    ? "h-1.5 w-7 rounded-full bg-[#7f1d1d] transition-all"
                    : "size-1.5 rounded-full bg-[#b8b8b8] transition-all"
                }
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="
              flex
              size-9
              items-center
              justify-center
              rounded-full
              border
              border-[#172554]/20
              bg-white
              text-[#172554]
              transition-all
              hover:bg-[#172554]
              hover:text-white
            "
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
