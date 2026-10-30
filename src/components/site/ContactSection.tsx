import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { college } from "@/data/site";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f4ee] px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 size-72 rounded-full bg-[#8f1d1d]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 size-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f1d1d]">
              Contact & Support
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-tight text-[#172554] sm:text-3xl">
              Let&apos;s talk about your future
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-right">
            Our admission team is ready to help you choose the right programme
            and complete your application.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <Reveal>
            <div className="space-y-4">
              {/* Contact card */}
              <div className="overflow-hidden rounded-[1.75rem] border border-[#172554]/10 bg-white shadow-[0_15px_45px_rgba(23,37,84,0.08)]">
                <div className="bg-[#172554] px-5 py-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[#8f1d1d]">
                      <MessageCircle className="size-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                        Admission Office
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        Get in touch with us
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  {/* Address */}
                  <div className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37]">
                      <MapPin className="size-4" />
                    </span>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                        Campus
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {college.address}
                      </p>
                    </div>
                  </div>

                  {/* Numbers */}
                  {college.numbers.map((n) => (
                    <a
                      key={n.label}
                      href={`tel:${n.tel}`}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] transition-colors group-hover:bg-[#8f1d1d] group-hover:text-white">
                        <Phone className="size-4" />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                          {n.label}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-[#172554]">
                          {n.value}
                        </p>
                      </div>
                    </a>
                  ))}

                  {/* Email */}
                  <a
                    href={`mailto:${college.email}`}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] transition-colors group-hover:bg-[#8f1d1d] group-hover:text-white">
                      <Mail className="size-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                        Email
                      </p>

                      <p className="mt-1 truncate text-xs font-semibold text-[#172554]">
                        {college.email}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${college.whatsapp}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-[#8f1d1d] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-[#8f1d1d]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a52222]"
                  >
                    <MessageCircle className="size-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Office hours */}
              <div className="rounded-[1.75rem] border border-[#172554]/10 bg-white p-5 shadow-[0_12px_35px_rgba(23,37,84,0.06)]">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37]">
                    <Clock3 className="size-4" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                      Support Hours
                    </p>

                    <h3 className="text-sm font-bold text-[#172554]">
                      Office Hours
                    </h3>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {college.officeHours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-3 py-2.5 text-xs"
                    >
                      <span className="text-slate-500">{h.day}</span>

                      <span className="font-semibold text-[#172554]">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal delay={0.08}>
            <form
              id="enquiry"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#d4af37]/25 bg-[#172554] p-5 text-white shadow-[0_20px_55px_rgba(23,37,84,0.16)] sm:p-6"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                      Enquiry Form
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Send us a message
                    </h3>

                    <p className="mt-1 text-xs text-white/55">
                      Fill in your details and our counsellor will contact you.
                    </p>
                  </div>

                  <div className="hidden size-11 items-center justify-center rounded-2xl bg-[#8f1d1d] sm:flex">
                    <Send className="size-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  {/* Name */}
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs font-semibold text-white/80"
                    >
                      Full name
                    </Label>

                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="h-10 border-white/10 bg-white/[0.07] text-sm text-white placeholder:text-white/30 focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold text-white/80"
                      >
                        Email
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="h-10 border-white/10 bg-white/[0.07] text-sm text-white placeholder:text-white/30 focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold text-white/80"
                      >
                        Phone
                      </Label>

                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91"
                        className="h-10 border-white/10 bg-white/[0.07] text-sm text-white placeholder:text-white/30 focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                      />
                    </div>
                  </div>

                  {/* Programme */}
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="programme"
                      className="text-xs font-semibold text-white/80"
                    >
                      Programme of interest
                    </Label>

                    <Input
                      id="programme"
                      name="programme"
                      placeholder="e.g. MBA / MCA / BA English"
                      className="h-10 border-white/10 bg-white/[0.07] text-sm text-white placeholder:text-white/30 focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="grid gap-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold text-white/80"
                    >
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className="resize-none border-white/10 bg-white/[0.07] text-sm text-white placeholder:text-white/30 focus:border-[#d4af37] focus:ring-[#d4af37]/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full rounded-xl bg-[#8f1d1d] text-sm font-bold text-white shadow-lg shadow-[#8f1d1d]/20 transition-all hover:-translate-y-0.5 hover:bg-[#a52222]"
                  >
                    <Send className="mr-2 size-4" />
                    Submit Enquiry
                  </Button>

                  {sent && (
                    <div
                      aria-live="polite"
                      className="flex items-center gap-2 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-2.5 text-xs text-white/80"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#d4af37]" />
                      Thank you! Our counsellor will contact you shortly.
                    </div>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.12} className="mt-5">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#172554]/10 bg-white p-1.5 shadow-[0_12px_35px_rgba(23,37,84,0.07)]">
            <iframe
              title="Crescent campus location on Google Maps"
              src={college.mapEmbed}
              loading="lazy"
              className="h-56 w-full rounded-[1.35rem] border-0 sm:h-64"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;