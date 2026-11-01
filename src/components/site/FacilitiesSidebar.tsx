import { Link } from "react-router-dom";

import { facilitiesNavigation, type FacilityRoute } from "@/data/facilities";

export function FacilitiesSidebar({ activeHref }: { activeHref: FacilityRoute }) {
  return (
    <aside className="h-fit min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="mb-1 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#858994]">
        Facilities
      </p>

      <p className="mb-3 px-3 text-xs leading-5 text-[#737782]">Explore our infrastructure</p>

      <nav aria-label="Facilities navigation" className="space-y-1">
        {facilitiesNavigation.map((item) => {
          const Icon = item.icon;
          const active = item.href === activeHref;

          return (
            <Link
              key={item.href}
              to={item.href}
              aria-current={active ? "page" : undefined}
              className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors duration-200 ${
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

      <div className="mx-3 my-4 h-px bg-[#eee9e3]" />
    </aside>
  );
}
