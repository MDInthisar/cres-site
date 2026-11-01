import crescentWordmark from "@/assets/optimized/crescent-wordmark-2x.png";
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import { college } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admission" },
  { label: "Students Corner", href: "/students-corner" },
  { label: "UGC Corner", href: "/ugc-corner" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BSACrescentInstitute/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bsacrescentinstituteofficial/?hl=en",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/school/crescentinstitute/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtu.be/2jvzpjgUOhY?feature=shared",
    icon: Youtube,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden rounded-t-[2rem] bg-[#741b1b] text-white sm:rounded-t-[2.5rem]">
      <div className="h-[3px] w-full bg-gradient-to-r from-[#d1ad5b] via-[#f2dfab] to-[#d1ad5b]" />

      <div className="pointer-events-none absolute -right-32 -top-32 size-[320px] rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-8 sm:grid-cols-2 sm:px-7 lg:grid-cols-3 lg:gap-10 lg:px-9">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <a
            href="/"
            className="flex w-fit max-w-full items-center rounded-xl bg-white px-3 py-2.5 sm:px-4 sm:py-3"
            aria-label="Crescent Institute Home"
          >
            <img
              src={crescentWordmark}
              alt="B.S. Abdur Rahman Crescent Institute of Science and Technology"
              width={800}
              height={266}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto max-w-[220px] object-contain sm:h-11 sm:max-w-[280px]"
            />
          </a>

          <p className="mt-2 text-left text-xs font-semibold text-white/90">{college.unit}</p>

          <p className="mt-3 flex max-w-md items-start justify-start gap-2 text-left text-xs leading-relaxed text-white/75">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-[#d1ad5b]" />
            <span>{college.address}</span>
          </p>

          <a
            href="https://youtu.be/2jvzpjgUOhY?feature=shared"
            className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#d1ad5b] hover:text-[#4b1111]"
          >
            Explore Campus
            <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="min-w-0">
          <h2 className="mb-3 text-sm font-semibold text-white">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/75">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex min-h-[26px] items-center gap-1.5 transition-colors hover:text-[#f0d995]"
                >
                  <ChevronRight className="size-3 text-[#d1ad5b]" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="mb-3 text-sm font-semibold text-white">Get in touch</h2>
          <ul className="space-y-1.5 text-sm text-white/75">
            {college.numbers.map((number) => (
              <li key={number.label}>
                <a
                  href={`tel:${number.tel}`}
                  className="inline-flex min-h-[26px] items-center gap-2 transition-colors hover:text-[#f0d995]"
                >
                  <Phone className="size-3.5 shrink-0 text-[#d1ad5b]" />
                  <span className="tabular-nums">{number.value}</span>
                  <span className="text-white/55">({number.label})</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${college.email}`}
                className="inline-flex min-h-[26px] items-center gap-2 break-all transition-colors hover:text-[#f0d995]"
              >
                <Mail className="size-3.5 shrink-0 text-[#d1ad5b]" />
                {college.email}
              </a>
            </li>
          </ul>

          <div className="mt-3 flex gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#d1ad5b] hover:bg-[#d1ad5b] hover:text-[#4b1111]"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto max-w-7xl px-5 py-3 text-center text-xs text-white/65 sm:px-7 sm:text-left lg:px-9">
          © {new Date().getFullYear()} Center for Distance and Online Education - BSACIST
        </div>
      </div>
    </footer>
  );
}
