import { circularFont } from "@/lib/fonts";
import heroImg1 from "@/assets/heroImg1.jpg";
import heroImg2 from "@/assets/heroImg2.jpg";
import heroImg3 from "@/assets/heroImg3.jpg";
import heroImg4 from "@/assets/heroImg4.jpg";
import banner from "@/assets/banner.png";
import ugc from "@/assets/ugc.png";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";

/* =========================================================
   FONT
========================================================= */

/* =========================================================
   HERO IMAGES
========================================================= */

const heroImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  "Live Interactive Classes",
  "AICTE / UGC Approved",
  "Placement Support",
];

/* =========================================================
   HERO
========================================================= */

export function HeroDE() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImage, setLoadedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % heroImages.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={circularFont}
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#1d355f] via-[#172554] to-[#101d37] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14"
    >
      {/* =====================================================
          SOFT BACKGROUND DETAILS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#d4af37]/[0.08]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-white/[0.05]
            blur-3xl
          "
        />

      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1450px]
          items-center
          gap-8
          lg:grid-cols-[1.1fr_1fr]
          lg:gap-10
          xl:gap-12
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -22,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            relative
            flex
            min-w-0
            w-full
            flex-col
            justify-center
            lg:pl-8
            xl:pl-10
            lg:py-2
          "
        >

          {/* =================================================
              CRESCENT DISTANCE EDUCATION
          ================================================== */}

          <div
            className="
              mb-4
              flex
              w-full
              min-w-0
              items-center
              gap-2
              sm:gap-3
            "
          >

            <span
              className="
                h-[3px]
                w-8
                shrink-0
                rounded-full
                bg-[#e2c56e]
                sm:w-10
              "
            />

            <span
              className="
                block
                min-w-0
                flex-1
                whitespace-normal
                text-[13px]
                font-bold
                leading-tight
                uppercase
                tracking-[0.10em]
                text-[#e2c56e]
                sm:text-[17px]
                sm:tracking-[0.16em]
                lg:text-[19px]
              "
            >
              Centre for Distance Education
            </span>

          </div>

          {/* =================================================
              ADMISSIONS OPEN
          ================================================== 

          <div className="mb-5 flex w-full justify-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: -10,
              }}
              animate={{
                opacity: [0.75, 1, 0.75],
                scale: [1, 1.08, 1],
                y: [0, 0, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                inline-flex
                max-w-full
                items-center
                gap-2.5
                rounded-full
                border
                border-[#D4AF37]/40
                bg-[#D4AF37]
                px-5
                py-2.5
                shadow-[0_8px_25px_rgba(212,175,55,0.28)]
              "
            >

              <motion.span
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.75, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  size-2
                  shrink-0
                  rounded-full
                  bg-white
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  sm:text-sm
                "
              >
                Admissions Open 2026–2027
              </span>

            </motion.div>

          </div>*/}

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              max-w-[700px]
              text-[clamp(1.65rem,3.2vw,3.1rem)]
              font-extrabold
              leading-[1.1]
              tracking-[-0.04em]
              text-white
            "
          >
            UGC Approved
            <br />
            <span className="text-white">Distance Education</span>
          </h1>

          <p className="mt-4 text-base font-semibold text-[#e2c56e] sm:text-lg">
            MBA <span className="px-1.5 text-white/60">|</span> MCA{" "}
            <span className="px-1.5 text-white/60">|</span> BA Islamic Studies
          </p>

          {/* =================================================
              DECORATIVE LINE
          ================================================== */}

          <div className="my-5 flex items-center gap-2">

            <span
              className="
                h-[4px]
                w-12
                rounded-full
                bg-[#d4af37]
              "
            />

            <span
              className="
                h-[4px]
                w-5
                rounded-full
                bg-white/70
              "
            />

            <span
              className="
                h-[4px]
                w-2
                rounded-full
                bg-[#e2c56e]
              "
            />

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          {/* =================================================
              FEATURES
          ================================================== */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-3
            "
          >

            {features.map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-2
                "
              >

                <CheckCircle2
                  className="
                    size-[18px]
                    text-emerald-300
                    sm:size-5
                  "
                  strokeWidth={2}
                />

                <span
                  className="
                    text-[clamp(0.88rem,0.95vw,1rem)]
                    font-semibold
                    text-white/90
                  "
                >
                  {feature}
                </span>

              </div>
            ))}

          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
            "
          >

            <Button
              asChild
              size="pill-lg"
              className="
                h-12
                rounded-full
                border-0
                bg-[#d1ad5b]
                px-6
                text-[15px]
                font-bold
                text-[#4b1111]
                shadow-[0_5px_16px_rgba(209,173,91,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e2c477]
                hover:shadow-[0_8px_20px_rgba(209,173,91,0.35)]
                sm:px-7
                sm:text-base
              "
            >
              <Link
                to="/admission#how-to-apply"
              >
                Apply Now

                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="pill-lg"
              className="
                h-12
                rounded-full
                border
                border-[#8f1d1d]
                bg-[#8f1d1d]
                px-6
                text-[15px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(143,29,29,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#741717]
                hover:bg-[#741717]
                hover:text-white
                sm:px-7
                sm:text-base
              "
            >
              <Link to="/programmes">
                Explore Programmes
              </Link>
            </Button>

          </div>

        </motion.div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 22,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            min-w-0
            w-full
          "
        >

          {/* =================================================
              OUTER PREMIUM FRAME
          ================================================== */}

          <div
            className="
              relative
              w-full
              rounded-[2rem]
              border
              border-[#B08A24]/30
              bg-[#1d355f]/[0.04]
              p-2
              shadow-[0_20px_55px_rgba(29,53,95,0.14)]
              sm:rounded-[2.2rem]
              sm:p-2.5
            "
          >

            {/* =================================================
                INNER IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-[300px]
                w-full
                overflow-hidden
                rounded-[1.65rem]
                bg-[#1d355f]
                sm:h-[390px]
                lg:h-[440px]
                xl:h-[475px]
                sm:rounded-[1.85rem]
              "
            >

              <img
                src={banner}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <AnimatePresence mode="wait">

                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  onLoad={() => setLoadedImage(heroImages[currentImage])}
                  alt="Crescent Distance Education campus"
                  width={1600}
                  height={1000}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: loadedImage === heroImages[currentImage] ? 1 : 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

              </AnimatePresence>

              {/* =================================================
                  NAVY IMAGE OVERLAY
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#101d37]/80
                  via-[#1d355f]/15
                  to-[#1d355f]/10
                "
              />

              {/* =================================================
                  INNER BORDER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[1.65rem]
                  border
                  border-white/10
                "
              />

              {/* =================================================
                  IMAGE BOTTOM CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-end
                  justify-between
                  gap-3
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.20em]
                      text-[#B08A24]
                      max-[380px]:text-[10px]
                      max-[380px]:tracking-[0.12em]
                      sm:text-base
                    "
                  >
                    Crescent Distance Education
                  </p>

                  <h2
                    className="
                      mt-1
                      text-xl
                      font-bold
                      tracking-[-0.02em]
                      text-white
                      sm:text-2xl
                      lg:text-[1.65rem]
                    "
                  >
                    Your Future Starts Here
                  </h2>

                </div>

                {/* =================================================
                    SLIDER INDICATORS
                ================================================== */}

                <div
                  className="
                    hidden
                    items-center
                    gap-1.5
                    sm:flex
                  "
                >

                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImage(i)}
                      aria-label={`Show hero image ${i + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          i === currentImage
                            ? "w-7 bg-[#B08A24]"
                            : "w-1.5 bg-white/50 hover:bg-white"
                        }
                      `}
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              UGC FLOATING CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.45,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-4
              top-4
              z-20
              flex
              max-w-[calc(100%-2rem)]
              items-center
              gap-3
              rounded-2xl
              border
              border-white/70
              bg-white/95
              px-3
              py-2.5
              shadow-[0_12px_30px_rgba(15,23,42,0.18)]
              backdrop-blur-xl
              sm:left-8
              sm:top-8
              sm:px-4
              sm:py-3
            "
          >

            {/* PHOTO */}

            <span
              className="
                flex
                size-10
                shrink-0
                overflow-hidden
                rounded-full
                border
                border-[#B08A24]/40
                bg-[#1d355f]
                sm:size-11
              "
            >
              <img
                src={ugc}
                alt="Crescent campus"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </span>

            <span className="min-w-0">

              <span
                className="
                  block
                  text-[15px]
                  font-bold
                  text-[#111111]
                  sm:text-base
                "
              >
                UGC
              </span>

              <span
                className="
                  block
                  text-[11px]
                  font-medium
                  text-[#111111]/65
                  sm:text-[13px]
                "
              >
                Approved programmes
              </span>

            </span>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}