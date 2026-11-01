import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { CourseInfoLink } from "@/components/site/CourseInfoLink";
import { EnquiryFormDialog } from "@/components/site/EnquiryFormDialog";
import { SiteLayout } from "@/components/site/SiteLayout";
import type {
  ProgrammeActionItem,
  ProgrammeDestination,
  ProgrammeIconConfig,
  ProgrammeIconName,
  ProgrammeNavigationItem,
  ProgrammePageConfig,
} from "@/data/programmes";
import { circularFont } from "@/lib/fonts";

type Destination = Exclude<ProgrammeDestination, { type: "dialog" }>;
type ProgrammeVariant = ProgrammePageConfig["variant"];

export type { ProgrammeActionItem, ProgrammeNavigationItem };
export type ProgrammePageTemplateProps = ProgrammePageConfig & { children: ReactNode };

const programmeIcons: Record<ProgrammeIconName, LucideIcon> = {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Target,
  Users,
};

function ProgrammeIcon({ icon }: { icon: ProgrammeIconConfig | null }) {
  if (!icon) return null;
  const Icon = programmeIcons[icon.name];
  return <Icon size={icon.size} className={icon.className} />;
}

function DestinationLink({
  destination,
  className,
  ariaCurrent,
  children,
}: {
  destination: Destination;
  className: string;
  ariaCurrent?: "page";
  children: ReactNode;
}) {
  switch (destination.type) {
    case "courseInfo":
      return (
        <CourseInfoLink
          courseSlug={destination.courseSlug}
          section={destination.section}
          className={className}
          aria-current={ariaCurrent}
        >
          {children}
        </CourseInfoLink>
      );
    case "route":
      return (
        <Link
          to={{
            pathname: destination.to,
            search: destination.search
              ? `?${new URLSearchParams(destination.search).toString()}`
              : "",
          }}
          className={className}
          aria-current={ariaCurrent}
        >
          {children}
        </Link>
      );
    case "anchor":
      return (
        <a href={destination.href} className={className} aria-current={ariaCurrent}>
          {children}
        </a>
      );
    case "external":
      return (
        <a href={destination.href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
  }
}

function getNavigationStyles(variant: ProgrammeVariant) {
  if (variant !== "generic") {
    const isBA = variant === "ba-islamic-studies";
    const compact = isBA || variant === "mba" || variant === "mca";

    return {
      section: "w-full",
      container: compact
        ? "h-fit rounded-xl border border-[#dedbd6] bg-white p-2 shadow-[0_6px_18px_rgba(0,0,0,0.05)] md:sticky md:top-32 md:p-3"
        : "h-fit rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24",
      grid: compact ? "grid grid-cols-2 gap-1 md:flex md:flex-col" : "flex flex-col gap-1",
      card: "",
      icon: "flex size-4 shrink-0 items-center justify-center",
      title: "text-xs font-semibold",
      description: "",
      arrow: "",
      arrowSize: 0,
      underline: "",
      sidebar: true,
      activeClassName: isBA ? "bg-[#2F6F4E] text-white" : "bg-[#334b7c] text-white",
      inactiveClassName: isBA
        ? "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#2F6F4E]"
        : "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#334b7c]",
      activeIconClassName: "text-white",
      inactiveIconClassName: isBA ? "text-[#2F6F4E]" : "text-[#334b7c]",
    };
  }

  if (variant === "generic") {
    return {
      section: "mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8",
      container: "",
      grid: "grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:grid-cols-2 lg:grid-cols-4",
      card: "group relative z-10 border-b border-slate-100 px-5 py-4 transition-all duration-300 hover:bg-slate-50 sm:border-r lg:border-b-0",
      icon: "flex size-10 shrink-0 items-center justify-center rounded-lg",
      title: "text-sm font-bold text-[#111111]",
      description: "mt-0.5 text-xs text-slate-500",
      arrow:
        "ml-auto size-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
      arrowSize: 16,
      underline:
        "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  const compact = variant === "mca";
  return {
    section: compact
      ? "mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8"
      : "mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8",
    container:
      "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]",
    grid: "grid sm:grid-cols-2 lg:grid-cols-4",
    card: compact
      ? "group relative z-10 border-b border-slate-100 px-4 py-4 transition-all duration-300 sm:border-r lg:border-b-0"
      : "group relative z-10 border-b border-slate-100 px-4 py-5 transition-all duration-300 hover:bg-slate-50 sm:border-r sm:px-5 lg:border-b-0",
    icon: compact
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11",
    title: compact
      ? "text-base font-bold text-[#111111]"
      : "text-base font-bold leading-6 text-[#111111] sm:text-lg",
    description: compact
      ? "mt-1 text-sm text-slate-500"
      : "mt-1 text-sm leading-6 text-slate-500 sm:text-base",
    arrow: compact
      ? "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
      : "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
    arrowSize: compact ? 15 : 18,
    underline:
      "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9",
  };
}

function NavigationCard({
  item,
  styles,
  active = false,
  onOpenDialog,
}: {
  item: ProgrammeNavigationItem;
  styles: ReturnType<typeof getNavigationStyles>;
  active?: boolean;
  onOpenDialog: () => void;
}) {
  if ("sidebar" in styles && styles.sidebar) {
    const className = `group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-semibold leading-5 transition-colors duration-200 ${
      active ? styles.activeClassName : styles.inactiveClassName
    }`;
    const content = (
      <>
        <span
          className={`flex size-4 shrink-0 items-center justify-center [&_svg]:size-3.5 ${active ? styles.activeIconClassName : styles.inactiveIconClassName}`}
        >
          <ProgrammeIcon icon={item.icon} />
        </span>
        <span className="min-w-0 flex-1 whitespace-normal break-words text-left">{item.title}</span>
      </>
    );

    if (item.destination.type === "dialog") {
      return (
        <button type="button" onClick={onOpenDialog} className={className}>
          {content}
        </button>
      );
    }

    return (
      <DestinationLink
        destination={item.destination}
        ariaCurrent={active ? "page" : undefined}
        className={className}
      >
        {content}
      </DestinationLink>
    );
  }

  if (item.destination.type === "dialog") {
    return (
      <button type="button" onClick={onOpenDialog} className={styles.card}>
        <div className="flex items-center gap-3">
          <div className={`${styles.icon} ${item.iconClassName}`}>
            <ProgrammeIcon icon={item.icon} />
          </div>
          <div className="min-w-0">
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
          <ArrowRight size={styles.arrowSize} className={styles.arrow} />
        </div>
        <span className={styles.underline} />
      </button>
    );
  }

  return (
    <DestinationLink destination={item.destination} className={styles.card}>
      <div className="flex items-center gap-3">
        <div className={`${styles.icon} ${item.iconClassName}`}>
          <ProgrammeIcon icon={item.icon} />
        </div>
        <div className="min-w-0">
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
        <ArrowRight size={styles.arrowSize} className={styles.arrow} />
      </div>
      <span className={styles.underline} />
    </DestinationLink>
  );
}

export function ProgrammeSidebarNavigation({
  variant,
  navigation,
  brochureDialog,
  activeTitle,
}: {
  variant: Exclude<ProgrammeVariant, "generic">;
  navigation: ProgrammeNavigationItem[];
  brochureDialog?: ProgrammePageTemplateProps["brochureDialog"];
  activeTitle: string;
}) {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const navigationStyles = getNavigationStyles(variant);

  return (
    <>
      <aside className={navigationStyles.container}>
        <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#737782]">
          {variant === "ba-islamic-studies" ? "BA Islamic Studies" : variant.toUpperCase()}
        </p>
        <nav aria-label={`${variant} navigation`} className={navigationStyles.grid}>
          {navigation.map((item) => (
            <NavigationCard
              key={item.title}
              item={item}
              styles={navigationStyles}
              active={item.title === activeTitle}
              onOpenDialog={() => setShowBrochureForm(true)}
            />
          ))}
        </nav>
      </aside>
      {brochureDialog && (
        <EnquiryFormDialog
          open={showBrochureForm}
          onOpenChange={setShowBrochureForm}
          title={brochureDialog.title}
          description={brochureDialog.description}
          idPrefix={brochureDialog.idPrefix}
          downloadHref={brochureDialog.downloadHref}
          downloadLabel={brochureDialog.downloadLabel}
        />
      )}
    </>
  );
}

function getActionStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies" || variant === "generic") {
    return {
      section: "mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8",
      grid: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
      card: "group relative z-10 flex w-full items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
      icon: "flex size-9 shrink-0 items-center justify-center rounded-lg",
      title: "text-sm font-semibold text-[#111111]",
      trailing:
        "ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
      arrowSize: 16,
      underline:
        "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  const compact = variant === "mca";
  return {
    section: compact
      ? "mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8"
      : "mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8",
    grid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
    card: compact
      ? "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 text-left shadow-sm"
      : "group relative flex min-h-[60px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-all duration-300 hover:shadow-md",
    icon: compact
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
    title: compact
      ? "text-base font-semibold text-[#111111]"
      : "text-base font-semibold leading-6 text-[#111111] sm:text-lg",
    trailing: compact
      ? "ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
      : "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
    arrowSize: compact ? 15 : 18,
    underline:
      "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
  };
}

function ActionCard({
  item,
  styles,
  onOpenDialog,
}: {
  item: ProgrammeActionItem;
  styles: ReturnType<typeof getActionStyles>;
  onOpenDialog: () => void;
}) {
  const content = (
    <>
      <span
        className={item.iconClassName ? `${styles.icon} ${item.iconClassName}` : styles.icon}
        style={
          item.iconBackgroundColor || item.iconColor
            ? {
                backgroundColor: item.iconBackgroundColor,
                color: item.iconColor,
              }
            : undefined
        }
      >
        <ProgrammeIcon icon={item.icon} />
      </span>
      <span className={styles.title}>{item.title}</span>
      {item.trailingIcon ? (
        <ProgrammeIcon icon={item.trailingIcon} />
      ) : (
        <ArrowRight size={styles.arrowSize} className={styles.trailing} />
      )}
      <span className={styles.underline} />
    </>
  );

  if (item.destination.type === "dialog") {
    return (
      <button type="button" onClick={onOpenDialog} className={styles.card}>
        {content}
      </button>
    );
  }

  return (
    <DestinationLink destination={item.destination} className={styles.card}>
      {content}
    </DestinationLink>
  );
}

function getHeroStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies" || variant === "generic") {
    const compact = variant === "ba-islamic-studies";

    return {
      section: "relative overflow-hidden bg-[#0d5c45]",
      gradient: "absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]",
      rightGlow: "absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl",
      leftGlow: "absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl",
      container: compact
        ? "relative mx-auto max-w-7xl px-5 py-3 sm:px-6 sm:py-4 sm:pl-16 lg:px-8 lg:py-5 lg:pl-16"
        : "relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 sm:pl-16 lg:px-8 lg:py-10 lg:pl-16",
      back: compact
        ? "group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
        : "group relative mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white",
      badge: compact
        ? "mb-1 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#f4d979]"
        : "mb-3 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1.5 text-xs font-semibold text-[#f4d979]",
      title: compact
        ? "text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
        : "text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
      divider: compact
        ? "mt-1.5 h-1 w-12 rounded-full bg-[#d4af37]"
        : "mt-3 h-1 w-12 rounded-full bg-[#d4af37]",
      description: compact
        ? "mt-2 w-full max-w-3xl whitespace-normal break-words text-sm leading-5 text-white/80 sm:text-base sm:leading-6"
        : "mt-4 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7",
      applyWrapper: compact ? "mt-3" : "mt-5",
      apply:
        "group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
    };
  }

  const compact = variant === "mca" || variant === "mba";
  return {
    section: "relative overflow-hidden bg-[#334b7c]",
    gradient: "absolute inset-0 bg-gradient-to-br from-[#334b7c] via-[#2b416d] to-[#23365c]",
    rightGlow: "absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl",
    leftGlow: "absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#334b7c]/15 blur-2xl",
    container: compact
      ? "relative mx-auto max-w-7xl px-5 py-3 sm:px-6 sm:py-4 sm:pl-16 lg:px-8 lg:py-5 lg:pl-16"
      : "relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-7 sm:pl-16 lg:px-8 lg:py-8 lg:pl-16",
    back: compact
      ? "group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80"
      : "group relative mb-4 inline-flex items-center gap-2 text-base font-medium text-white/85 transition-colors hover:text-white sm:text-lg",
    badge: compact
      ? "mb-1 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#f3d15b]"
      : "mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3d15b] sm:text-base",
    title: compact
      ? "text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
      : "text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
    divider: compact
      ? "mt-1.5 h-1 w-12 rounded-full bg-[#d4af37]"
      : "mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]",
    description: compact
      ? "mt-2 max-w-3xl text-sm leading-5 text-white/80 sm:text-base sm:leading-6"
      : "mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8",
    applyWrapper: compact ? "mt-3" : "mt-5",
    apply: compact
      ? "group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      : "group relative inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-base font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
  };
}

function getCtaStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies") {
    return {
      section: "border-t border-slate-200 bg-white",
      container: "mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8",
      content: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
      label: "text-sm font-medium text-slate-500",
      title: "mt-1 text-xl font-bold text-[#111111] sm:text-2xl",
      link: "group relative z-10 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
      underline:
        "pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  if (variant === "mca" || variant === "mba") {
    return {
      section: "mt-4",
      container: "w-full",
      content:
        "flex flex-col items-center gap-1 rounded-2xl bg-[#334b7c] px-4 py-4 text-center sm:px-6 sm:py-5",
      label: "text-xl font-bold text-white sm:text-2xl",
      title: "text-base font-semibold text-white sm:text-lg",
      link: "group relative mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-bold text-[#111111] transition-colors hover:bg-[#c19b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#334b7c]",
      underline:
        "pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8",
    };
  }

  return {
    section: "border-t border-slate-200 bg-white",
    container: "mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8",
    content: "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",
    label: "text-base font-medium text-slate-500 sm:text-lg",
    title: "mt-2 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl",
    link: "group relative inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:text-lg",
    underline:
      "pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8",
  };
}

export function ProgrammePageTemplate({
  variant,
  mainClassName,
  hero,
  navigation,
  actions,
  cta,
  brochureDialog,
  children,
}: ProgrammePageTemplateProps) {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const { pathname } = useLocation();
  const heroStyles = getHeroStyles(variant);
  const navigationStyles = getNavigationStyles(variant);
  const actionStyles = getActionStyles(variant);
  const ctaStyles = getCtaStyles(variant);
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  const isNavigationItemActive = (item: ProgrammeNavigationItem) => {
    if (item.destination.type === "route") {
      return normalizedPathname === item.destination.to.replace(/\/$/, "");
    }

    if (item.destination.type === "courseInfo") {
      return (
        normalizedPathname ===
        `/course-info/${item.destination.courseSlug}/${item.destination.section}`
      );
    }

    return item.destination.type === "anchor" && normalizedPathname === "/";
  };

  return (
    <SiteLayout>
      <main className={mainClassName} style={circularFont}>
        <section className={heroStyles.section}>
          <div className={heroStyles.gradient} />
          <div className={heroStyles.rightGlow} />
          <div className={heroStyles.leftGlow} />
          <div className={heroStyles.container}>
            <Link to="/programmes" className={heroStyles.back}>
              <ProgrammeIcon icon={hero.backIcon} />
              Back to Programmes
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="max-w-4xl">
              <div className={heroStyles.badge}>
                {variant !== "ba-islamic-studies" && <ProgrammeIcon icon={hero.badgeIcon} />}
                {hero.badge}
              </div>
              <h1 className={heroStyles.title}>{hero.title}</h1>
              <div className={heroStyles.divider} />
              <p className={heroStyles.description}>{hero.description}</p>
              <div className={heroStyles.applyWrapper}>
                <Link
                  to={`${hero.applyTo}${hero.applyHash ? `#${hero.applyHash}` : ""}`}
                  className={heroStyles.apply}
                >
                  Apply Now
                  <ProgrammeIcon icon={hero.applyIcon} />
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {variant !== "generic" ? (
          <section
            className={
              variant === "ba-islamic-studies"
                ? "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-4 px-4 pt-4 sm:px-6 sm:pt-5 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8"
                : "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-5 pt-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:px-8"
            }
          >
            <aside className={navigationStyles.container}>
              <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#737782]">
                {variant === "ba-islamic-studies" ? "BA Islamic Studies" : variant.toUpperCase()}
              </p>
              <nav aria-label={`${variant} navigation`} className={navigationStyles.grid}>
                {navigation.map((item) => (
                  <NavigationCard
                    key={item.title}
                    item={item}
                    styles={navigationStyles}
                    active={isNavigationItemActive(item)}
                    onOpenDialog={() => setShowBrochureForm(true)}
                  />
                ))}
              </nav>
            </aside>
            <div className="min-w-0">
              {actions.length > 0 && (
                <section className={actionStyles.section}>
                  <div className={actionStyles.grid}>
                    {actions.map((item) => (
                      <ActionCard
                        key={item.title}
                        item={item}
                        styles={actionStyles}
                        onOpenDialog={() => setShowBrochureForm(true)}
                      />
                    ))}
                  </div>
                </section>
              )}
              {children}
              {cta && (variant === "mba" || variant === "mca") && (
                <section className={ctaStyles.section}>
                  <div className={ctaStyles.container}>
                    <div className={ctaStyles.content}>
                      <p className={ctaStyles.label}>{cta.label}</p>
                      <h2 className={ctaStyles.title}>{cta.title}</h2>
                      <Link to={cta.to} className={ctaStyles.link}>
                        {cta.linkText}
                        <ProgrammeIcon icon={cta.icon} />
                        <span className={ctaStyles.underline} />
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </section>
        ) : (
          <>
            <section className={navigationStyles.section}>
              <div className={navigationStyles.container}>
                <div className={navigationStyles.grid}>
                  {navigation.map((item) => (
                    <NavigationCard
                      key={item.title}
                      item={item}
                      styles={navigationStyles}
                      onOpenDialog={() => setShowBrochureForm(true)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {actions.length > 0 && (
              <section className={actionStyles.section}>
                <div className={actionStyles.grid}>
                  {actions.map((item) => (
                    <ActionCard
                      key={item.title}
                      item={item}
                      styles={actionStyles}
                      onOpenDialog={() => setShowBrochureForm(true)}
                    />
                  ))}
                </div>
              </section>
            )}

            {children}
          </>
        )}

        {cta && variant !== "mba" && variant !== "mca" && (
          <section className={ctaStyles.section}>
            <div className={ctaStyles.container}>
              <div className={ctaStyles.content}>
                <p className={ctaStyles.label}>{cta.label}</p>
                <h2 className={ctaStyles.title}>{cta.title}</h2>
              </div>
              <Link to={cta.to} className={ctaStyles.link}>
                {cta.linkText}
                <ProgrammeIcon icon={cta.icon} />
                <span className={ctaStyles.underline} />
              </Link>
            </div>
          </section>
        )}

        {brochureDialog && (
          <EnquiryFormDialog
            open={showBrochureForm}
            onOpenChange={setShowBrochureForm}
            title={brochureDialog.title}
            description={brochureDialog.description}
            idPrefix={brochureDialog.idPrefix}
            downloadHref={brochureDialog.downloadHref}
            downloadLabel={brochureDialog.downloadLabel}
          />
        )}
      </main>
    </SiteLayout>
  );
}
