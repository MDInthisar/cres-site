
import whoWeAreImage from "@/assets/campus-1.jpg";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function WhoWeAre() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        border-y
        border-slate-200/80
        bg-[#f6f8fb]
        py-9
        sm:py-11
        lg:py-12
        after:absolute
        after:bottom-0
        after:left-0
        after:h-[3px]
        after:w-full
        after:bg-[#b08a4a]
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#dce8f8]/35
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#f4ead7]/30
          blur-3xl
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          max-w-[1350px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-stretch
            gap-7
            md:grid-cols-2
            md:gap-8
            lg:gap-10
            xl:gap-14
          "
        >
          {/* LEFT — IMAGE */}
          <Reveal className="h-full">
            <div className="group relative flex h-full w-full flex-col">
              {/* Image frame */}
              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-[0_18px_50px_rgba(15,23,42,0.10)]
                  sm:rounded-[2.2rem]
                  sm:p-2.5
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    sm:rounded-[1.85rem]
                  "
                >
                  <img
                    src={whoWeAreImage}
                    alt="B.S. Abdur Rahman Crescent Institute campus"
                    loading="lazy"
                    width={1200}
                    height={850}
                    className="
                      h-[280px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                      sm:h-[320px]
                      md:h-[350px]
                      lg:h-[380px]
                      xl:h-[400px]
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#07152f]/45
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Established badge */}
                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      sm:right-5
                      sm:top-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/60
                        bg-white/90
                        px-3
                        py-1.5
                        shadow-md
                        backdrop-blur-md
                      "
                    >
                      <span className="size-1.5 rounded-full bg-emerald-500" />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          tracking-[0.14em]
                          text-slate-700
                          sm:text-[11px]
                        "
                      >
                        ESTABLISHED 1984
                      </span>
                    </div>
                  </div>

                  {/* Experience card */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      sm:bottom-5
                      sm:left-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-white/70
                        bg-white/95
                        px-3
                        py-2.5
                        shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                        backdrop-blur-md
                        sm:px-4
                        sm:py-3
                      "
                    >
                      <div
                        className="
                          flex
                          size-8
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#1d3b73]
                          text-white
                          sm:size-9
                        "
                      >
                        <GraduationCap className="size-4" />
                      </div>

                      <div>
                        <p className="text-xl font-bold leading-none text-slate-900">
                          40+
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">
                          Years of Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFO STRIP BELOW PHOTO */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#e4d5b8]
                  bg-[#fffaf0]
                  px-4
                  py-2.5
                  shadow-sm
                  sm:px-5
                "
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#b08a4a]/10
                      text-[#a17a36]
                    "
                  >
                    <Sparkles className="size-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#8d6b31]
                        sm:text-xs
                      "
                    >
                      Quality Education
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                      Learn • Grow • Lead
                    </p>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[10px] font-semibold text-slate-400">
                    CRESCENT
                  </p>

                  <p className="text-[9px] tracking-[0.12em] text-slate-400">
                    INSTITUTION
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — CONTENT */}
          <Reveal delay={0.1} className="h-full">
            <div
              className="
                flex
                h-full
                flex-col
                justify-center
                lg:pr-2
              "
            >
              {/* WHO WE ARE */}
              <div className="mb-4 flex justify-start">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#8f1d1d]
                    px-4
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-white
                    shadow-sm
                    sm:text-xs
                  "
                >
                  Who We Are
                </span>
              </div>

              {/* Gold divider */}
              <div className="mt-4 h-[3px] w-16 rounded-full bg-[#b08a4a]" />

              {/* Body — JUSTIFIED TEXT */}
              <div className="mt-5 max-w-[650px] space-y-3">
                <p
                  className="
                    text-justify
                    text-[clamp(1rem,1.1vw,1.125rem)]
                    leading-[1.65]
                    text-slate-600
                  "
                >
                  Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology is a renowned Quality Leadership Institution located at the greenest spot of Chennai near Tambaram.

Through our long history of 37 years of excellence, the Institution has offered access to a wide range of academic opportunities. With 55 programmes, grouped under 12 different Schools, 30 Undergraduate programmes, 25 Postgraduate programmes, and Ph.D.
                </p>

                <p
                  className="
                    text-justify
                    text-[clamp(1rem,1.1vw,1.125rem)]
                    leading-[1.65]
                    text-slate-600
                  "
                >
                  Through our Centre for Distance and Online Education,
                  learners can pursue undergraduate, postgraduate and
                  certification programmes with flexible learning, expert
                  faculty, digital resources and continuous academic support.
                </p>
              </div>

              {/* Button */}
              <div className="mt-5">
                <Link
                  to="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#1d3b73]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(29,59,115,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#16305f]
                    hover:shadow-lg
                    sm:px-6
                    sm:py-3
                    sm:text-base
                  "
                >
                  Discover More

                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
