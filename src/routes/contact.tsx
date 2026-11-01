import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { college } from "@/data/site";

import { Mail, Phone } from "lucide-react";

function ContactPage() {
  return (
    <SiteLayout>
      {/* CONTACT HEADER */}
      <section className="bg-[#f7f4ee] px-5 pb-5 pt-6 sm:px-8 lg:px-12" style={circularFont}>
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#d9d4ca] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8f1d1d]">
              Contact Us
            </p>

            <div className="mt-2 flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-[-0.02em] text-black sm:text-4xl">
                We're here to help.
              </h1>

              <span className="mt-1 h-[3px] w-10 shrink-0 rounded-full bg-[#8f1d1d]" />
            </div>

            <p className="mt-3 max-w-4xl text-base font-medium leading-7 text-black/65 sm:text-lg">
              Have a question about admissions, programmes or the university? Get in touch with our
              team.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-[#f6f3ec] px-5 py-6 sm:px-8 lg:px-10" style={circularFont}>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:gap-4">
          {college.numbers.map((number) => (
            <ContactCard
              key={number.label}
              icon={<Phone className="size-5" />}
              title={number.label}
              text={number.value}
              href={`tel:${number.tel}`}
            />
          ))}

          <ContactCard
            icon={<Mail className="size-5" />}
            title="Email"
            text={college.email}
            href={`mailto:${college.email}`}
            isEmail
          />
        </div>
      </section>

      {/* ADMISSION SUPPORT */}
      <section className="bg-white px-5 py-6 sm:px-8 lg:px-10" style={circularFont}>
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#172554]/10 bg-[#f8f9fc] px-5 py-8 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f1d1d]">
              Admission Support
            </p>

            <h2 className="mt-2 text-2xl font-black leading-tight text-black sm:text-3xl">
              Need admission assistance?
            </h2>

            <div className="mx-auto mt-3 h-[2px] w-10 rounded-full bg-[#8f1d1d]" />

            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
              Our admission team can help you with programme selection, eligibility, application
              process and other admission-related queries.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${college.numbers[0].tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#172554] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8f1d1d]"
              >
                <Phone className="size-4" />
                {college.numbers[0].label} Enquiries
              </a>

              <a
                href={`tel:${college.numbers[1].tel}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#172554]/15 bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <Phone className="size-4" />
                {college.numbers[1].label} Enquiries
              </a>

              <a
                href={`mailto:${college.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#172554]/15 bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <Mail className="size-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* CONTACT CARD */
function ContactCard({
  icon,
  title,
  text,
  href,
  isEmail = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
  isEmail?: boolean;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[100px] min-w-0 items-center gap-3 rounded-2xl border border-[#172554]/10 bg-white px-3 py-4 shadow-[0_5px_20px_rgba(23,37,84,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d4af37]/50 sm:gap-3 sm:px-4"
      style={circularFont}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] transition-colors group-hover:bg-[#8f1d1d] group-hover:text-white sm:size-11">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8f1d1d]">{title}</p>

        <p
          className={`mt-1 text-sm font-semibold leading-5 text-black ${
            isEmail ? "whitespace-normal [overflow-wrap:anywhere]" : "break-words"
          }`}
        >
          {text}
        </p>
      </div>
    </a>
  );
}

export default ContactPage;
