import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative px-5 py-20 sm:px-8 md:py-28 lg:py-32", className)}
      style={style}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "default" | "invert";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        tone === "invert" && "text-primary-foreground",
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em]",
            tone === "invert"
              ? "border-primary-foreground/25 text-primary-foreground/80"
              : "border-border bg-gradient-accent text-accent-foreground shadow-glow",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mt-5 text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            tone === "invert" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
