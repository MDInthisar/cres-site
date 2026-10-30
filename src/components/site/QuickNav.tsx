import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export type QuickNavVariant = "ba" | "mca";

export interface QuickNavProps {
  title: string;
  href: string;
  active: boolean;
  variant?: QuickNavVariant;
}

const variantClasses: Record<
  QuickNavVariant,
  {
    container: string;
    label: string;
    labelInactive: string;
    icon: string;
    iconInactive: string;
    bar: string;
    barPosition: string;
  }
> = {
  ba: {
    container: "rounded-xl border px-4 py-3 transition-all duration-300 sm:py-3.5",
    label: "text-sm font-bold sm:text-base",
    labelInactive: "text-[#111111] group-hover:text-[#2F6F4E]",
    icon: "h-4 w-4 transition-all duration-300 group-hover:translate-x-1",
    iconInactive: "text-black/25 group-hover:text-[#2F6F4E]",
    bar: "h-[2px] rounded-full bg-[#D4AF37]",
    barPosition: "left-3 right-3",
  },
  mca: {
    container: "rounded-lg border px-4 py-3 transition-all duration-300 sm:py-3.5",
    label: "text-sm font-semibold sm:text-base",
    labelInactive: "text-[#111111]",
    icon: "size-4 transition-transform duration-300 group-hover:translate-x-0.5",
    iconInactive: "text-black/30",
    bar: "h-0.5 bg-[#D4AF37]",
    barPosition: "left-2 right-2",
  },
};

export function QuickNav({ title, href, active, variant = "ba" }: QuickNavProps) {
  const styles = variantClasses[variant];

  return (
    <Link
      to={href}
      className={[
        "group relative transition-all duration-300",
        styles.container,
        active
          ? variant === "ba"
            ? "border-[#2F6F4E]/20 bg-[#2F6F4E]/5"
            : "border-[#6b4c9a]/20 bg-[#6b4c9a]/5"
          : variant === "ba"
            ? "border-black/6 bg-white hover:-translate-y-0.5 hover:bg-[#F5F1E9]"
            : "border-black/6 bg-white hover:bg-[#F5F1E9]",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={[
            styles.label,
            active
              ? variant === "ba"
                ? "text-[#2F6F4E]"
                : "text-[#6b4c9a]"
              : styles.labelInactive,
          ].join(" ")}
        >
          {title}
        </span>

        <ArrowRight
          className={[
            styles.icon,
            active ? (variant === "ba" ? "text-[#2F6F4E]" : "text-[#6b4c9a]") : styles.iconInactive,
          ].join(" ")}
        />
      </div>

      <span
        className={[
          "absolute bottom-0 origin-left transition-transform duration-300",
          styles.bar,
          styles.barPosition,
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        ].join(" ")}
      />
    </Link>
  );
}
