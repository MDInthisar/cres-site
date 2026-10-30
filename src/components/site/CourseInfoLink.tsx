import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { CourseSection } from "@/data/courseInfo";

export type { CourseSection } from "@/data/courseInfo";

export function CourseInfoLink({
  courseSlug,
  section,
  children,
  className,
  "aria-current": ariaCurrent,
}: {
  courseSlug: string;
  section: CourseSection;
  children: ReactNode;
  className?: string;
  "aria-current"?: "page";
}) {
  return (
    <Link
      to={`/course-info/${encodeURIComponent(courseSlug)}/${encodeURIComponent(section)}`}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
}
