import { SiteLayout } from "@/components/site/SiteLayout";
import { getCourseInfo } from "@/data/courseInfo";
import { getFacultyProfile, type FacultyProfile } from "@/data/facultyProfiles";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Mail, Phone } from "lucide-react";

const detailedSectionTitles: {
  key: keyof NonNullable<FacultyProfile["detailedProfile"]>;
  title: string;
}[] = [
  { key: "education", title: "Educational Background" },
  { key: "experience", title: "Work Experience" },
  { key: "teachingCourses", title: "Lecture Courses" },
  { key: "researchInterests", title: "Areas of Research Interest" },
  { key: "supervision", title: "Supervision & Guidance" },
  { key: "professionalActivities", title: "Professional Bodies & Academic Service" },
  { key: "training", title: "Training & Capacity Building" },
  { key: "books", title: "Books Published" },
  { key: "journalPublications", title: "Journal Publications" },
  { key: "conferencePublications", title: "Conference Publications" },
  { key: "conferencePresentations", title: "Conference & Seminar Presentations" },
  { key: "seminars", title: "International Seminars" },
  { key: "workshops", title: "Workshops Attended" },
  { key: "invitedRoles", title: "Invited Talks & Academic Roles" },
  { key: "awards", title: "Awards & Recognition" },
];

function FacultyProfilePage() {
  const { courseSlug, facultySlug } = useParams();
  const faculty = getFacultyProfile(courseSlug ?? "", facultySlug ?? "");
  const course = getCourseInfo(courseSlug ?? "");

  if (!faculty || !course) {
    return (
      <SiteLayout>
        <main className="mx-auto min-h-[60vh] max-w-4xl px-5 py-16">
          <h1 className="text-2xl font-bold">Faculty profile not found</h1>
          <Link to="/programmes" className="mt-4 inline-flex text-[#0d5c45] underline">
            Browse programmes
          </Link>
        </main>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]">
        <section className="bg-[#2f6f4e] text-white">
          <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
            <Link
              to={`/course-info/${encodeURIComponent(course.slug)}`}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to {course.name}
            </Link>
            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="size-32 rounded-2xl border-2 border-white/40 object-cover shadow-lg"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37]">
                  Faculty Profile
                </p>
                <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{faculty.name}</h1>
                <p className="mt-2 text-white/80">{faculty.designation}</p>
                <span className="mt-3 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                  {faculty.courseName} · Faculty
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <header className="border-b border-slate-100 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f6f4e]">
                Faculty Details
              </p>
              <h2 className="mt-1 text-xl font-bold">Academic & Professional Information</h2>
            </header>

            <dl className="divide-y divide-slate-100">
              <DetailRow label="Designation" value={faculty.designation} />
              {faculty.natureOfEmployment && (
                <DetailRow label="Nature of Employment" value={faculty.natureOfEmployment} />
              )}
              {faculty.qualification && (
                <DetailRow label="Qualification" value={faculty.qualification} />
              )}
              {faculty.phone && (
                <div className="grid gap-2 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-5 sm:px-6">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-[#2f6f4e]">
                    <Phone className="size-4 text-[#d4af37]" />
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${faculty.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-sm hover:text-[#2f6f4e] hover:underline"
                    >
                      {faculty.phone}
                    </a>
                  </dd>
                </div>
              )}
              {faculty.email && (
                <div className="grid gap-2 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-5 sm:px-6">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-[#2f6f4e]">
                    <Mail className="size-4 text-[#d4af37]" />
                    Email ID
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="break-all text-sm hover:text-[#2f6f4e] hover:underline"
                    >
                      {faculty.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </article>

          {faculty.detailedProfile && (
            <section className="mt-8">
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f6f4e]">
                  Full Curriculum Vitae
                </p>
                <h2 className="mt-1 text-2xl font-bold">Academic Profile & Contributions</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  Education, career, research, academic service, training and publications.
                </p>
              </div>

              <div className="space-y-3">
                {detailedSectionTitles
                  .filter(({ key }) => faculty.detailedProfile?.[key]?.length)
                  .map(({ key, title }, index) => {
                    const entries = faculty.detailedProfile?.[key] ?? [];

                    return (
                      <details
                        key={key}
                        open={index < 2}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold marker:hidden sm:px-6">
                          <span>{title}</span>
                          <span className="shrink-0 rounded-full bg-[#2f6f4e]/10 px-2.5 py-1 text-xs font-semibold text-[#2f6f4e]">
                            {entries.length}
                          </span>
                        </summary>
                        <ul className="space-y-3 border-t border-slate-100 px-5 py-4 sm:px-6">
                          {entries.map((entry, entryIndex) => (
                            <li
                              key={`${key}-${entryIndex}`}
                              className="flex gap-3 text-sm leading-6 text-slate-700"
                            >
                              <span className="mt-2 size-2 shrink-0 rounded-full bg-[#d4af37]" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
              </div>
            </section>
          )}

          <Link
            to={`/course-info/${encodeURIComponent(course.slug)}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2f6f4e] hover:underline"
          >
            <BookOpen className="size-4" />
            View {course.name} programme information
            <GraduationCap className="size-4" />
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-5 sm:px-6">
      <dt className="text-sm font-semibold text-[#2f6f4e]">{label}</dt>
      <dd className="text-sm text-slate-800">{value}</dd>
    </div>
  );
}

export default FacultyProfilePage;
