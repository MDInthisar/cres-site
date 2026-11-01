import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, college } from "@/data/site";
import { cn } from "@/lib/utils";
import { Link, NavLink, type NavLinkProps } from "react-router-dom";
import { Menu, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import cresolineLogo from "@/assets/optimized/cresoline-cdoe-2x.png";
import crescentWordmark from "@/assets/optimized/crescent-wordmark-2x.png";

type ActiveNavLinkProps = Omit<NavLinkProps, "className"> & {
  className: string;
  activeClassName: string;
};

function ActiveNavLink({ className, activeClassName, ...props }: ActiveNavLinkProps) {
  return (
    <NavLink {...props} className={({ isActive }) => cn(className, isActive && activeClassName)} />
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="
        group
        flex
        min-w-0
        shrink-0
        items-center
        transition-transform
        duration-300
        hover:scale-[1.015]
      "
      aria-label={`${college.name} home`}
    >
      <span className="flex items-center gap-1.5 sm:gap-2">
        <img
          src={cresolineLogo}
          alt="Cresoline CDOE"
          width={256}
          height={256}
          decoding="async"
          className={
            compact
              ? "size-7 shrink-0 rounded-full object-cover sm:size-8"
              : "size-9 shrink-0 rounded-full object-cover sm:size-11 lg:size-12"
          }
        />
        <img
          src={crescentWordmark}
          alt={`${college.name} logo`}
          width={800}
          height={266}
          decoding="async"
          className={
            compact
              ? "h-7 w-auto max-w-[112px] object-contain sm:h-8 sm:max-w-[140px]"
              : "h-[40px] w-auto max-w-[150px] object-contain sm:h-[48px] sm:max-w-[180px] lg:h-[54px] lg:max-w-[205px]"
          }
        />
      </span>
    </Link>
  );
}

export function MainNav({ compact = false }: { compact?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        // =====================================================
        // MAIN CONTAINER
        // =====================================================
        compact
          ? "relative z-[60] mx-auto w-full max-w-[1820px] overflow-hidden border-b border-[#e6e8eb]"
          : "sticky top-0 z-[60] mx-auto w-[calc(100%-12px)] max-w-[1820px] mt-1.5 rounded-[18px] border border-[#e6e8eb] sm:mt-3 sm:rounded-[24px] lg:rounded-[28px]",

        // =====================================================
        // PREMIUM GLASS BACKGROUND
        // =====================================================
        compact
          ? "bg-white/96 backdrop-blur-2xl"
          : scrolled
            ? "bg-white/96 backdrop-blur-2xl"
            : "bg-[#fffdf9]/92 backdrop-blur-xl",

        // =====================================================
        // SHADOW
        // =====================================================
        compact
          ? "shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
          : scrolled
            ? "shadow-[0_12px_35px_rgba(15,23,42,0.13)] lg:shadow-[0_16px_50px_rgba(15,23,42,0.14)]"
            : "shadow-[0_6px_22px_rgba(15,23,42,0.07)] lg:shadow-[0_8px_30px_rgba(15,23,42,0.08)]",

        // =====================================================
        // ANIMATION
        // =====================================================
        "transition-all duration-500",

        // =====================================================
        // TOP GLASS HIGHLIGHT
        // =====================================================
        !compact && "before:pointer-events-none",
        "before:absolute",
        "before:inset-x-5 sm:before:inset-x-10",
        "before:top-0",
        "before:h-px",
        "before:rounded-full",
        "before:bg-gradient-to-r",
        "before:from-transparent",
        "before:via-[#d4af37]/70",
        "before:to-transparent",

        // =====================================================
        // SUBTLE INNER BORDER
        // =====================================================
        !compact && "after:pointer-events-none",
        "after:absolute",
        "after:inset-[1px]",
        "after:rounded-[17px] sm:after:rounded-[23px] lg:after:rounded-[27px]",
        "after:border",
        "after:border-white/70",
        !compact && "after:content-['']",
      )}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-16
          -top-16
          size-32
          rounded-full
          bg-[#7f1d1d]/[0.035]
          blur-3xl
          sm:-left-20
          sm:-top-20
          sm:size-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-16
          size-32
          rounded-full
          bg-[#172554]/[0.035]
          blur-3xl
          sm:-bottom-20
          sm:-right-20
          sm:size-44
        "
      />

      {/* =====================================================
          HEADER CONTENT
      ====================================================== */}

      <div
        className={cn(
          "relative flex w-full items-center justify-between",
          "px-3 sm:px-5 lg:px-6 xl:px-7",

          // MOBILE
          compact ? "min-h-12" : scrolled ? "min-h-[60px]" : "min-h-[64px]",

          // TABLET
          !compact && "sm:min-h-[72px]",

          // DESKTOP
          !compact && "lg:min-h-[80px]",

          "transition-all duration-500",
        )}
      >
        {/* ===================================================
            LOGO
        ==================================================== */}

        <Logo compact={compact} />

        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <ul
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-center
            gap-0.5
            xl:flex
          "
        >
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <ActiveNavLink
                to={item.to}
                end={item.to === "/"}
                className={cn(
                  "group relative flex items-center justify-center",
                  "whitespace-nowrap",
                  "px-3.5 py-3",
                  "text-[0.9rem]",
                  "font-semibold",
                  "tracking-[-0.01em]",
                  "text-[#3f4652]",
                  "transition-all duration-300",
                  "hover:text-[#7f1d1d]",

                  "after:pointer-events-none",
                  "after:absolute",
                  "after:bottom-[3px]",
                  "after:left-1/2",
                  "after:h-[3px]",
                  "after:w-0",
                  "after:-translate-x-1/2",
                  "after:rounded-full",
                  "after:bg-[#7f1d1d]",
                  "after:opacity-0",
                  "after:transition-all",
                  "after:duration-300",

                  "hover:after:w-[55%]",
                  "hover:after:opacity-100",
                )}
                activeClassName="text-[#7f1d1d] font-bold after:w-[55%] after:opacity-100 after:shadow-[0_2px_7px_rgba(212,175,55,0.30)]"
              >
                {item.label}
              </ActiveNavLink>
            </li>
          ))}

          {/* FAQ */}

          <li className="shrink-0">
            <ActiveNavLink
              to="/faq"
              end
              className={cn(
                "group relative flex items-center justify-center",
                "whitespace-nowrap",
                "px-3.5 py-3",
                "text-[0.9rem]",
                "font-semibold",
                "tracking-[-0.01em]",
                "text-[#3f4652]",
                "transition-all duration-300",
                "hover:text-[#7f1d1d]",

                "after:pointer-events-none",
                "after:absolute",
                "after:bottom-[3px]",
                "after:left-1/2",
                "after:h-[3px]",
                "after:w-0",
                "after:-translate-x-1/2",
                "after:rounded-full",
                "after:bg-[#7f1d1d]",
                "after:opacity-0",
                "after:transition-all",
                "after:duration-300",

                "hover:after:w-[55%]",
                "hover:after:opacity-100",
              )}
              activeClassName="text-[#7f1d1d] font-bold after:w-[55%] after:opacity-100 after:shadow-[0_2px_7px_rgba(212,175,55,0.30)]"
            >
              FAQ
            </ActiveNavLink>
          </li>
        </ul>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}

        <div
          className="
            ml-2
            flex
            shrink-0
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          {/* =================================================
              MOBILE MENU
          ================================================== */}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="
                  size-9
                  rounded-xl
                  border-[#dfe3e8]
                  bg-white/80
                  text-[#172554]
                  shadow-sm
                  transition-all

                  hover:border-[#7f1d1d]/30
                  hover:bg-[#7f1d1d]/[0.04]
                  hover:text-[#7f1d1d]

                  sm:size-10
                  sm:rounded-xl

                  lg:size-11
                  lg:rounded-2xl

                  xl:hidden
                "
              >
                <Menu
                  className="
                    size-[18px]
                    sm:size-5
                  "
                />

                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>

            {/* =================================================
                MOBILE SHEET
            ================================================== */}

            <SheetContent
              side="right"
              overlayClassName="z-[10000]"
              className="
                z-[10001]
                w-[86vw]
                max-w-sm
                overflow-y-auto
                border-l
                border-[#e5e7eb]
                bg-[#fffdf9]
              "
            >
              {/* MOBILE HEADER */}

              <SheetTitle
                className="
                  pr-8
                  font-display
                  text-lg
                  font-bold
                  leading-tight
                  text-[#172554]
                "
              >
                {college.name}
              </SheetTitle>

              <div
                className="
                  mt-3
                  h-[3px]
                  w-12
                  rounded-full
                  bg-[#7f1d1d]
                "
              />

              {/* MOBILE NAVIGATION */}

              <nav className="mt-5 flex flex-col">
                {navItems.map((item) => (
                  <ActiveNavLink
                    key={item.label}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "relative",
                      "border-b border-[#e8eaed]",
                      "px-2 py-3.5",
                      "text-[15px]",
                      "font-semibold",
                      "text-[#454d59]",
                      "transition-all duration-200",
                      "hover:translate-x-1",
                      "hover:text-[#7f1d1d]",

                      "after:pointer-events-none",
                      "after:absolute",
                      "after:bottom-0",
                      "after:left-2",
                      "after:h-[3px]",
                      "after:w-0",
                      "after:rounded-full",
                      "after:bg-[#7f1d1d]",
                      "after:opacity-0",
                      "after:transition-all",
                      "after:duration-300",
                    )}
                    activeClassName="font-bold text-[#7f1d1d] after:w-12 after:opacity-100"
                  >
                    {item.label}
                  </ActiveNavLink>
                ))}

                {/* MOBILE FAQ */}

                <ActiveNavLink
                  to="/faq"
                  end
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative",
                    "border-b border-[#e8eaed]",
                    "px-2 py-3.5",
                    "text-[15px]",
                    "font-semibold",
                    "text-[#454d59]",
                    "transition-all duration-200",
                    "hover:translate-x-1",
                    "hover:text-[#7f1d1d]",

                    "after:pointer-events-none",
                    "after:absolute",
                    "after:bottom-0",
                    "after:left-2",
                    "after:h-[3px]",
                    "after:w-0",
                    "after:rounded-full",
                    "after:bg-[#7f1d1d]",
                    "after:opacity-0",
                    "after:transition-all",
                    "after:duration-300",

                    "hover:after:w-12",
                    "hover:after:opacity-100",
                  )}
                  activeClassName="font-bold text-[#7f1d1d] after:w-12 after:opacity-100"
                >
                  FAQ
                </ActiveNavLink>
              </nav>

              {/* MOBILE APPLY */}

              <Button
                variant="hero"
                size="pill-lg"
                className="
                  mt-6
                  w-full
                  bg-[#7f1d1d]
                  text-white
                  shadow-lg
                  shadow-[#7f1d1d]/20
                  hover:bg-[#172554]
                "
                asChild
              >
                <a
                  href="https://odladmission.crescent-institute.edu.in/login/index.php"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </a>
              </Button>

              {/* MOBILE INFO */}

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-[#e5e7eb]
                  bg-white
                  p-4
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#172554]/[0.06]
                      text-[#172554]
                    "
                  >
                    <ShieldCheck className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#172554]">UGC Approved</p>

                    <p className="mt-0.5 text-[11px] text-[#737b87]">Recognised programmes</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
