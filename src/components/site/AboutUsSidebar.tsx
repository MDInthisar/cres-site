import { Link } from "react-router-dom";
import { GraduationCap, Landmark, ShieldCheck, Sparkles, Users } from "lucide-react";

const navigationItems = [
  { label: "About Crescent", href: "/about", icon: Landmark },
  { label: "Visionary Team", href: "/visionary-team", icon: GraduationCap },
  { label: "Execution Team", href: "/execution-team", icon: Users },
  { label: "CDOE Team", href: "/cdoe-team", icon: ShieldCheck },
  { label: "Facilities", href: "/facilities", icon: Sparkles },
] as const;

export function AboutUsSidebar({ activeHref }: {
  activeHref: (typeof navigationItems)[number]["href"];
}) {
  return (
    <aside className="h-fit w-full min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#737782]">
        About Us
      </p>

      <nav aria-label="About navigation" className="flex flex-col gap-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = item.href === activeHref;

          return (
            <Link
              key={item.label}
              to={item.href}
              aria-current={active ? "page" : undefined}
              className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold leading-5 transition-colors duration-200 ${
                active
                  ? "bg-[#23457D] text-white"
                  : "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#23457D]"
              }`}
            >
              <span className="flex size-4 shrink-0 items-center justify-center">
                <Icon className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1 whitespace-normal break-words text-left">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
