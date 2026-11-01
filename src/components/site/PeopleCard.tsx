import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PeopleCardProps = {
  name: string;
  designation: string;
  photo: string;
  area?: string;
  headingLevel?: "h2" | "h3";
  className: string;
  children?: ReactNode;
};

export function PeopleCard({
  name,
  designation,
  photo,
  area,
  headingLevel = "h3",
  className,
  children,
}: PeopleCardProps) {
  const NameHeading = headingLevel;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex min-w-0 flex-col items-center text-center ${className}`}
    >
      <img
        src={photo}
        alt={name}
        width={120}
        height={120}
        loading="lazy"
        decoding="async"
        className="size-24 shrink-0 rounded-full border-4 border-[#e8eef6] object-cover sm:size-28"
      />
      <NameHeading className="mt-4 w-full break-words text-base font-bold leading-6 text-[#17366F] sm:text-lg">
        {name}
      </NameHeading>
      <p className="mt-1 text-sm font-semibold leading-5 text-[#a33438]">{designation}</p>
      {area && <p className="mt-1 text-sm leading-5 text-[#667085]">{area}</p>}
      {children}
    </motion.article>
  );
}
