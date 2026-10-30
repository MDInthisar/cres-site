import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  GraduationCap,
  LogIn,
  UserPlus,
} from "lucide-react";

import admissionNotification from "@/assets/Admission_Notification_AY_2023.pdf";

const registrationUrl =
  "https://odladmission.crescent-institute.edu.in/login/signup.php";

const loginUrl =
  "https://odladmission.crescent-institute.edu.in/login/index.php";

const quickLinks = [
  {
    label: "Registration",
    href: registrationUrl,
    icon: UserPlus,
    external: true,
  },
  {
    label: "Applicant Login",
    href: loginUrl,
    icon: LogIn,
    external: true,
  },
  {
    label: "Admission Notification",
    href: admissionNotification,
    icon: Bell,
    external: true,
  },
];

const steps = [
  {
    id: "registration",
    number: "01",
    title: "Registration",
    description: "Create an account",
    action: { label: "Register Now", href: registrationUrl },
    details: [
      <>Select <strong>Admission → New Registration</strong>.</>,
      <>Enter your details and create your account.</>,
      <>Activate your account using the email link.</>,
    ],
  },
  {
    id: "login",
    number: "02",
    title: "Applicant Login",
    description: "Access your account",
    action: { label: "Applicant Login", href: loginUrl },
    details: [
      <>Select <strong>Admission → Apply Online</strong>.</>,
      <>Sign in using your applicant credentials.</>,
    ],
  },
  {
    id: "application-form",
    number: "03",
    title: "Application Form",
    description: "Complete your details",
    action: null,
    details: [
      <>
        Click <strong>Apply Here</strong> and complete the required fields.
      </>,
      <>Upload documents and review your application.</>,
      <>Confirm and submit your application.</>,
    ],
    note: "Submitted forms cannot be edited.",
  },
  {
    id: "payment",
    number: "04",
    title: "Payment",
    description: "Pay the application fee",
    action: null,
    details: [
      <>Select <strong>Payment → Pay now</strong>.</>,
      <>Pay by card, net banking, or UPI.</>,
      <>Save your application number and download the application.</>,
    ],
  },
];

function AdmissionSidebar() {
  return (
    <aside className="h-fit w-full min-w-0 rounded-xl border border-[#dedbd6] bg-white p-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#737782]">
        Admission
      </p>

      <nav aria-label="Admission navigation" className="flex flex-col gap-1">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className={`group flex w-full min-w-0 items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold leading-5 transition-colors duration-200 ${
                index === 0
                  ? "bg-[#23457D] text-white"
                  : "text-[#555b66] hover:bg-[#F5F1E9] hover:text-[#23457D]"
              }`}
            >
              <span className="flex size-4 shrink-0 items-center justify-center">
                <Icon className="size-3.5" />
              </span>

              <span className="min-w-0 flex-1 whitespace-normal break-words text-left">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

function AdmissionProcessHeading() {
  return (
    <section className="mb-6 rounded-xl bg-[#30265F] px-5 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:px-7">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8B84C]">
            Admission Process
          </p>

          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Your Journey to Enrolment
          </h1>

          <p className="mt-2 max-w-3xl text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
            Follow these four simple steps to complete your online application.
          </p>
        </div>

        <div className="hidden size-10 shrink-0 items-center justify-center rounded-lg border border-[#D8B84C]/30 bg-white/10 sm:flex">
          <GraduationCap className="size-5 text-[#D8B84C]" />
        </div>
      </div>
    </section>
  );
}

function AdmissionSteps() {
  return (
    <section aria-labelledby="steps-heading" className="min-w-0">
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8f1d1d]">
          Overview
        </p>

        <h2
          id="steps-heading"
          className="mt-1.5 text-xl font-bold tracking-tight text-[#17234B] sm:text-2xl"
        >
          Steps to Apply Online
        </h2>

        <p className="mt-2 max-w-3xl text-xs leading-6 text-[#555b66] sm:text-sm sm:leading-7">
          Follow the application process carefully and complete each step
          before submitting your application.
        </p>
      </div>

      <ol className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.id}
            id={step.id}
            className="flex min-w-0 flex-col rounded-xl border border-[#dedbd6] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-3 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F1E9] text-sm font-bold text-[#8f1d1d]">
              {step.number}
            </div>

            <h3 className="text-sm font-bold leading-6 text-[#17234B]">
              {step.title}
            </h3>

            <p className="mt-1 text-[10px] font-medium leading-4 text-[#737782] sm:text-xs">
              {step.description}
            </p>

            <ul className="mt-3 flex-1 list-disc space-y-2 pl-4 text-xs leading-6 text-[#555b66]">
              {step.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>

            {step.action && (
              <a
                href={step.action.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-[#23457D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#172554]"
              >
                {step.action.label}
                <ArrowRight className="size-3.5" />
              </a>
            )}

            {step.note && (
              <p className="mt-3 rounded-lg bg-[#8f1d1d]/[0.06] px-3 py-2 text-[10px] font-semibold leading-5 text-[#8f1d1d] sm:text-xs">
                Note: {step.note}
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          to="/programmes"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#23457D] px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#172554] sm:text-sm"
        >
          Explore Programmes
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}

function AdmissionPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-x-clip bg-[#F5F1E9] text-[#111111]"
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6 lg:px-8 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-8 xl:px-10">
          <AdmissionSidebar />

          <div className="w-full min-w-0">
            <AdmissionProcessHeading />
            <AdmissionSteps />
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default AdmissionPage;