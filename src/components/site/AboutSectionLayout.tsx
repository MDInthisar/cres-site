import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { AboutUsSidebar } from "@/components/site/AboutUsSidebar";
import type { AboutSectionRoute } from "@/components/site/AboutUsSidebar";
import { circularFont } from "@/lib/fonts";

export function AboutSectionLayout({
  activeHref,
  children,
  mainClassName = "min-h-screen bg-[#F5F1E9] text-black",
  contentClassName = "min-w-0",
  gridClassName = "mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:gap-8 xl:px-10",
}: {
  activeHref: AboutSectionRoute;
  children: ReactNode;
  mainClassName?: string;
  contentClassName?: string;
  gridClassName?: string;
}) {
  return (
    <main className={mainClassName} style={circularFont}>
      <div className={gridClassName}>
        <AboutUsSidebar activeHref={activeHref} />
        <div className={contentClassName}>{children}</div>
      </div>
    </main>
  );
}

export function AboutSectionHeading({
  eyebrow,
  title,
  description,
  className = "mb-5",
  eyebrowClassName = "text-[#c93636]",
  descriptionClassName = "max-w-3xl text-sm leading-7 text-[#555b66] sm:text-base",
  initialY = 8,
  duration = 0.4,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  initialY?: number;
  duration?: number;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      className={className}
    >
      <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${eyebrowClassName}`}>
        {eyebrow}
      </p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#14284e] sm:text-3xl">{title}</h1>
      <p className={`mt-2 ${descriptionClassName}`}>{description}</p>
    </motion.header>
  );
}
