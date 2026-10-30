import { BookOpen } from "lucide-react";

import { circularFont } from "@/lib/fonts";

export type SyllabusCourse = {
  no: number;
  category: string;
  code: string;
  title: string;
  l: number | string;
  t: number | string;
  p: number | string;
  credits: number;
};

type SyllabusSemesterTableProps = {
  semester: string;
  courses: SyllabusCourse[];
  total: number | string;
  theme?: "purple" | "green";
  categoryHeading?: string;
};

const themeStyles = {
  purple: {
    icon: "bg-[#6b4c9a]",
    heading: "bg-[#1d355f]",
    rowHover: "hover:bg-[#faf8fc]",
    credits: "text-[#6b4c9a]",
  },
  green: {
    icon: "bg-[#0d5c45]",
    heading: "bg-[#0d5c45]",
    rowHover: "hover:bg-[#fffaf0]",
    credits: "text-[#0d5c45]",
  },
} as const;

export function SyllabusSemesterTable({
  semester,
  courses,
  total,
  theme = "purple",
  categoryHeading = "Category",
}: SyllabusSemesterTableProps) {
  const styles = themeStyles[theme];

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles.icon} text-white`}
        >
          <BookOpen size={16} />
        </div>

        <h2 className="text-xl font-bold text-[#111111]" style={circularFont}>
          {semester}
        </h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className={`${styles.heading} text-white`}>
              <th className="px-3 py-3 text-xs font-semibold">#</th>
              <th className="px-3 py-3 text-xs font-semibold">{categoryHeading}</th>
              <th className="px-3 py-3 text-xs font-semibold">Course Code</th>
              <th className="px-3 py-3 text-xs font-semibold">Course Title</th>
              <th className="px-3 py-3 text-center text-xs font-semibold">L</th>
              <th className="px-3 py-3 text-center text-xs font-semibold">T</th>
              <th className="px-3 py-3 text-center text-xs font-semibold">P</th>
              <th className="px-3 py-3 text-center text-xs font-semibold">Credits</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr
                key={`${semester}-${course.no}-${course.code}`}
                className={`border-t border-slate-100 transition-colors ${styles.rowHover}`}
              >
                <td className="px-3 py-3 text-sm font-medium text-[#111111]">{course.no}</td>

                <td className="px-3 py-3">
                  <span className="inline-flex rounded-md bg-[#d4af37]/10 px-2 py-1 text-xs font-semibold text-[#8f1d1d]">
                    {course.category}
                  </span>
                </td>

                <td className="px-3 py-3 text-sm font-medium text-[#1d355f]">
                  {course.code || "—"}
                </td>

                <td className="px-3 py-3 text-sm leading-6 text-[#111111]">{course.title}</td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">{course.l}</td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">{course.t}</td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">{course.p}</td>

                <td className={`px-3 py-3 text-center text-sm font-bold ${styles.credits}`}>
                  {course.credits}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="border-t-2 border-[#d4af37] bg-[#fffaf0]">
              <td colSpan={7} className="px-3 py-3 text-right text-sm font-bold text-[#111111]">
                Total Credits
              </td>

              <td className="px-3 py-3 text-center text-sm font-bold text-[#8f1d1d]">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
