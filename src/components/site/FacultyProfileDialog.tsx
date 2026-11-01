import type { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, BookOpen, Mail, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

import type { ProgrammeFacultyProfile } from "@/data/programmes";
import type { FacultyTheme } from "@/components/site/FacultyGrid";

type FacultyProfileDialogProps = {
  faculty: ProgrammeFacultyProfile | null;
  theme: FacultyTheme;
  programmeBadge: string;
  programmeName: string;
  profileLinkLabel: string;
  profileLinkDescription: string;
  onClose: () => void;
  onCloseAutoFocus: (event: Event) => void;
};

const themeStyles = {
  blue: {
    dialog: "max-w-2xl rounded-2xl",
    header: "bg-gradient-to-r from-[#334b7c] via-[#2b416d] to-[#23365c] px-5 py-6 sm:px-7 sm:py-7",
    close:
      "absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",
    photoFrame: "rounded-xl",
    photo: "object-top shadow-lg",
    eyebrow: "text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37]",
    title: "mt-2 text-2xl font-bold leading-tight sm:text-3xl",
    designation: "mt-2 text-sm font-medium leading-6 text-white/85 sm:text-base",
    badge:
      "mt-3 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90",
    bodyHeading: "text-xs font-semibold uppercase tracking-[0.12em] text-[#334b7c]",
    bodyTitle: "mt-2 text-xl font-bold leading-7 text-[#111111] sm:text-2xl",
    rowLabel: "text-sm font-semibold leading-6 text-[#334b7c] sm:text-base",
    rowValue: "mt-2 text-sm font-medium leading-6 text-[#111111] sm:mt-0 sm:text-base",
    rowGrid: "sm:grid-cols-[190px_1fr] sm:gap-5",
    contactLabel: "flex items-center gap-2 text-sm font-semibold text-[#334b7c] sm:text-base",
    programmeBox: "rounded-xl border border-[#334b7c]/10 bg-[#F5F1E9] p-4 sm:p-5",
    programmeIcon: "size-5 shrink-0 text-[#334b7c]",
    programmeLabel: "text-[#334b7c]",
    programmeName: "mt-1 text-sm font-bold leading-6 text-[#111111] sm:text-base",
    profileHeading: "text-base font-semibold text-[#111111]",
    profileDescription: "mt-1 text-sm leading-5 text-black/55",
    contactValue: "mt-2 text-sm font-medium leading-6 text-[#111111] sm:mt-0 sm:text-base",
    contactLink: "hover:text-[#334b7c]",
    profileFooter: "mt-5 gap-3",
    profileLink:
      "group relative inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#334b7c] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 sm:text-base",
    profileArrow: "size-4 text-[#D4AF37]",
    divider:
      "absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100",
  },
  green: {
    dialog: "max-w-3xl rounded-2xl",
    header: "bg-[#2F6F4E] px-5 py-6 text-white sm:px-7",
    close:
      "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/20",
    photoFrame: "rounded-2xl",
    photo: "object-center shadow-xl",
    eyebrow: "text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37]",
    title: "mt-2 text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight",
    designation: "mt-2 text-sm font-medium text-white/80",
    badge:
      "mt-3 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white/90",
    bodyHeading: "text-xs font-bold uppercase tracking-[0.14em] text-[#2F6F4E]",
    bodyTitle: "mt-1.5 text-xl font-bold text-[#111111]",
    rowLabel: "text-sm font-bold text-[#2F6F4E]",
    rowValue: "mt-1.5 text-sm font-medium leading-5 text-[#111111] sm:mt-0",
    rowGrid: "sm:grid-cols-[180px_1fr] sm:gap-5",
    contactLabel: "flex items-center gap-2 text-sm font-bold text-[#2F6F4E]",
    programmeBox: "rounded-2xl border border-[#2F6F4E]/10 bg-[#F5F1E9] p-4",
    programmeIcon: "size-5 text-[#2F6F4E]",
    programmeLabel: "text-[#2F6F4E]",
    programmeName: "mt-0.5 text-sm font-bold text-[#111111]",
    profileHeading: "text-sm font-bold text-[#111111]",
    profileDescription: "mt-1 text-xs leading-5 text-black/50",
    contactValue: "mt-2 text-sm font-medium text-[#111111] sm:mt-0",
    contactLink: "hover:text-[#2F6F4E]",
    profileFooter: "mt-6 gap-4",
    profileLink:
      "group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2F6F4E] px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24593E] hover:shadow-lg",
    profileArrow:
      "h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5",
    divider: "",
  },
} as const;

function DetailRow({
  label,
  value,
  theme,
}: {
  label: string;
  value: ReactNode;
  theme: FacultyTheme;
}) {
  const styles = themeStyles[theme];

  return (
    <div
      className={`grid grid-cols-1 border-b border-black/6 bg-white px-4 py-4 ${styles.rowGrid}`}
    >
      <div className={styles.rowLabel}>{label}</div>
      <div className={styles.rowValue}>{value}</div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
  theme,
  kind,
  breakAll = false,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  theme: FacultyTheme;
  kind: "phone" | "email";
  breakAll?: boolean;
}) {
  const styles = themeStyles[theme];

  return (
    <div
      className={`grid grid-cols-1 px-4 py-4 ${kind === "phone" ? "border-b border-black/6 bg-[#F5F1E9]/50" : "bg-white"} ${styles.rowGrid}`}
    >
      <div className={styles.contactLabel}>
        {icon}
        {label}
      </div>
      <a
        href={href}
        className={`${styles.contactValue} ${breakAll ? "break-all" : ""} ${styles.contactLink}`}
      >
        {value}
      </a>
    </div>
  );
}

export function FacultyProfileDialog({
  faculty,
  theme,
  programmeBadge,
  programmeName,
  profileLinkLabel,
  profileLinkDescription,
  onClose,
  onCloseAutoFocus,
}: FacultyProfileDialogProps) {
  const styles = themeStyles[theme];

  return (
    <DialogPrimitive.Root open={faculty !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[9999] bg-black/55 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content
          onCloseAutoFocus={onCloseAutoFocus}
          className={`fixed left-[50%] top-[50%] z-[10000] max-h-[90vh] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 ${styles.dialog}`}
        >
          {faculty && (
            <>
              <div className={`relative overflow-hidden text-white ${styles.header}`}>
                <div className="absolute inset-x-0 top-0 h-1 bg-[#D4AF37]" />
                {theme === "green" && (
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
                )}

                <DialogPrimitive.Close
                  type="button"
                  aria-label="Close faculty profile"
                  className={styles.close}
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>

                <div className="relative flex flex-col gap-5 pr-8 sm:flex-row sm:items-center">
                  <div
                    className={`h-[140px] w-[140px] shrink-0 overflow-hidden border-2 border-white/40 bg-white/10 ${styles.photoFrame}`}
                  >
                    <img
                      src={faculty.photo}
                      alt={faculty.name}
                      width={140}
                      height={140}
                      className={`h-full w-full object-cover ${styles.photo}`}
                    />
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${styles.eyebrow}`}
                    >
                      Faculty Profile
                    </p>

                    <DialogPrimitive.Title className={styles.title}>
                      {faculty.name}
                    </DialogPrimitive.Title>

                    <DialogPrimitive.Description className={styles.designation}>
                      {faculty.designation}
                    </DialogPrimitive.Description>

                    <div className={styles.badge}>{programmeBadge}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-5">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.12em] ${styles.bodyHeading}`}
                  >
                    Faculty Details
                  </p>

                  <h3 className={styles.bodyTitle}>Academic &amp; Professional Information</h3>
                </div>

                {faculty.biography && (
                  <p className="mb-5 text-sm leading-6 text-black/65">{faculty.biography}</p>
                )}

                <div className="overflow-hidden rounded-xl border border-black/7">
                  <DetailRow label="Designation" value={faculty.designation} theme={theme} />
                  {faculty.natureOfEmployment && (
                    <DetailRow
                      label="Nature of Employment"
                      value={faculty.natureOfEmployment}
                      theme={theme}
                    />
                  )}
                  {faculty.qualification && (
                    <DetailRow label="Qualification" value={faculty.qualification} theme={theme} />
                  )}
                  {faculty.phone && (
                    <ContactRow
                      label="Phone"
                      value={faculty.phone}
                      href={`tel:${faculty.phone.replace(/[^0-9+]/g, "")}`}
                      icon={<Phone className="size-4 shrink-0 text-[#D4AF37]" />}
                      theme={theme}
                      kind="phone"
                    />
                  )}
                  {faculty.email && (
                    <ContactRow
                      label="Email ID"
                      value={faculty.email}
                      href={`mailto:${faculty.email}`}
                      icon={<Mail className="size-4 shrink-0 text-[#D4AF37]" />}
                      theme={theme}
                      kind="email"
                      breakAll
                    />
                  )}
                  {faculty.additionalInformation?.map((item) => (
                    <DetailRow
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      theme={theme}
                    />
                  ))}
                </div>

                <div className={styles.programmeBox}>
                  <div className="flex items-center gap-3">
                    {theme === "green" ? (
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F6F4E]/10">
                        <BookOpen className={styles.programmeIcon} />
                      </div>
                    ) : (
                      <BookOpen className={styles.programmeIcon} />
                    )}

                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.1em] ${styles.programmeLabel}`}
                      >
                        Programme
                      </p>
                      <p className={styles.programmeName}>{programmeName}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col border-t border-black/5 pt-5 sm:flex-row sm:items-center sm:justify-between ${styles.profileFooter}`}
                >
                  <div>
                    <p className={styles.profileHeading}>{profileLinkLabel}</p>
                    <p className={styles.profileDescription}>{profileLinkDescription}</p>
                  </div>

                  <Link
                    to={`/faculty-profile/${encodeURIComponent(faculty.courseSlug)}/${encodeURIComponent(faculty.slug)}`}
                    className={styles.profileLink}
                  >
                    View Official Profile
                    <ArrowRight className={styles.profileArrow} />
                    <span className={styles.divider} />
                  </Link>
                </div>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
