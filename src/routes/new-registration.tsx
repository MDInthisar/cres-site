import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  UserPlus,
} from "lucide-react";
import { FormEvent, useState } from "react";
import {
  getCourseInfo,
  registrationProgrammeOptions,
} from "@/data/programmes";

/* =========================================================
   ROUTE
========================================================= */

/* =========================================================
   TYPES
========================================================= */

type IconType = React.ElementType;

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  icon: IconType;
}) {
  return (
    <div className="group space-y-1.5">
      <label
        htmlFor={name}
        className="
          block
          text-[9px]
          font-black
          uppercase
          tracking-[0.17em]
          text-[#172554]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#8f1d1d]">*</span>
        )}
      </label>

      <div className="relative">
        <Icon
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            z-10
            size-4
            -translate-y-1/2
            text-slate-400
            transition-colors
            duration-200
            group-focus-within:text-[#8f1d1d]
          "
        />

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            h-10.5
            w-full
            rounded-xl
            border
            border-[#172554]/10
            bg-[#fafafa]
            pl-10
            pr-3
            text-[12px]
            font-medium
            text-[#172554]
            outline-none
            transition-all
            duration-200
            placeholder:text-slate-300
            hover:border-[#172554]/20
            focus:border-[#8f1d1d]/50
            focus:bg-white
            focus:ring-4
            focus:ring-[#8f1d1d]/[0.06]
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   PASSWORD INPUT
========================================================= */

function PasswordInput({
  value,
  onChange,
  show,
  setShow,
}: {
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  setShow: (value: boolean) => void;
}) {
  const requirements = [
    {
      label: "8+ characters",
      valid: value.length >= 8,
    },
    {
      label: "1 digit",
      valid: /\d/.test(value),
    },
    {
      label: "1 lowercase",
      valid: /[a-z]/.test(value),
    },
    {
      label: "1 uppercase",
      valid: /[A-Z]/.test(value),
    },
    {
      label: "1 special character",
      valid: /[^A-Za-z0-9]/.test(value),
    },
  ];

  return (
    <div className="space-y-1.5">
      <label
        htmlFor="password"
        className="
          block
          text-[9px]
          font-black
          uppercase
          tracking-[0.17em]
          text-[#172554]
        "
      >
        Password
        <span className="ml-1 text-[#8f1d1d]">*</span>
      </label>

      <div className="group relative">
        <LockKeyhole
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            z-10
            size-4
            -translate-y-1/2
            text-slate-400
            transition-colors
            group-focus-within:text-[#8f1d1d]
          "
        />

        <input
          id="password"
          name="password"
          type={show ? "text" : "password"}
          value={value}
          required
          onChange={(e) => onChange(e.target.value)}
          placeholder="Create a strong password"
          className="
            h-10.5
            w-full
            rounded-xl
            border
            border-[#172554]/10
            bg-[#fafafa]
            px-10
            text-[12px]
            font-medium
            text-[#172554]
            outline-none
            transition-all
            duration-200
            placeholder:text-slate-300
            hover:border-[#172554]/20
            focus:border-[#8f1d1d]/50
            focus:bg-white
            focus:ring-4
            focus:ring-[#8f1d1d]/[0.06]
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            transition-colors
            hover:text-[#8f1d1d]
          "
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </button>
      </div>

      <div
        className="
          rounded-xl
          border
          border-[#d4af37]/20
          bg-[#d4af37]/[0.045]
          px-3
          py-2.5
        "
      >
        <div className="mb-2 flex items-center gap-1.5">
          <ShieldCheck className="size-3 text-[#8f1d1d]" />

          <p
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.14em]
              text-[#8f1d1d]
            "
          >
            Password security
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {requirements.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5"
            >
              <span
                className={`
                  flex
                  size-3.5
                  items-center
                  justify-center
                  rounded-full
                  ${
                    item.valid
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-100 text-slate-300"
                  }
                `}
              >
                <Check className="size-2" />
              </span>

              <span
                className={`
                  text-[8px]
                  ${
                    item.valid
                      ? "font-semibold text-green-700"
                      : "text-slate-400"
                  }
                `}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROGRAMME SELECT
========================================================= */

function ProgrammeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const programmes = registrationProgrammeOptions.map(({ slug, value }) => {
    const course = getCourseInfo(slug);
    if (!course) {
      throw new Error(`Registration form references unknown programme "${slug}".`);
    }

    return {
      value,
      name: course.name,
      full: course.fullName,
    };
  });

  return (
    <div className="space-y-1.5">
      <label
        htmlFor="programme"
        className="
          block
          text-[9px]
          font-black
          uppercase
          tracking-[0.17em]
          text-[#172554]
        "
      >
        Programme / Course Applying For
        <span className="ml-1 text-[#8f1d1d]">*</span>
      </label>

      <div className="group relative">
        <GraduationCap
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            z-10
            size-4
            -translate-y-1/2
            text-slate-400
            transition-colors
            group-focus-within:text-[#8f1d1d]
          "
        />

        <select
          id="programme"
          name="programme"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-10.5
            w-full
            appearance-none
            rounded-xl
            border
            border-[#172554]/10
            bg-[#fafafa]
            pl-10
            pr-4
            text-[12px]
            font-medium
            text-[#172554]
            outline-none
            transition-all
            duration-200
            hover:border-[#172554]/20
            focus:border-[#8f1d1d]/50
            focus:bg-white
            focus:ring-4
            focus:ring-[#8f1d1d]/[0.06]
          "
        >
          <option value="">Choose your programme...</option>

          {programmes.map((programme) => (
            <option
              key={programme.value}
              value={programme.value}
            >
              {programme.name} — {programme.full}
            </option>
          ))}
        </select>
      </div>

      <div
        className="
          grid
          gap-1.5
          sm:grid-cols-3
        "
      >
        {programmes.map((programme) => (
          <div
            key={programme.value}
            className={`
              rounded-xl
              border
              px-2.5
              py-2
              transition-all
              ${
                value === programme.value
                  ? "border-[#8f1d1d]/25 bg-[#8f1d1d]/[0.035]"
                  : "border-slate-100 bg-[#fafafa]"
              }
            `}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`
                  flex
                  size-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  ${
                    value === programme.value
                      ? "bg-[#8f1d1d] text-white"
                      : "bg-[#172554]/[0.06] text-[#172554]"
                  }
                `}
              >
                <GraduationCap className="size-2.5" />
              </span>

              <p className="text-[8px] font-black text-[#172554]">
                {programme.name}
              </p>
            </div>

            <p className="mt-1 text-[7px] leading-3 text-slate-400">
              {programme.full}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className="
          flex
          size-8
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#172554]
          text-[9px]
          font-black
          text-[#d4af37]
        "
      >
        {number}
      </div>

      <div className="min-w-0">
        <h3
          className="
            text-[12px]
            font-black
            tracking-tight
            text-[#172554]
          "
        >
          {title}
        </h3>

        <p className="mt-0.5 text-[8px] text-slate-400">
          {description}
        </p>
      </div>

      <div className="ml-auto hidden h-px flex-1 bg-[#172554]/[0.07] sm:block" />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

function NewRegistrationPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    emailAgain: "",
    firstName: "",
    lastName: "",
    mobile: "",
    city: "",
    country: "India",
    programme: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError(
        "Passwords do not match. Please check your password confirmation.",
      );
      return;
    }

    if (form.email !== form.emailAgain) {
      setError(
        "Email addresses do not match. Please check both email fields.",
      );
      return;
    }

    setError("");
    setSubmitted(true);

    /*
      Backend/API integration can be connected here.
    */
  };

  return (
    <SiteLayout>
      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#f3f1ec]
          px-4
          py-3
          sm:px-6
          sm:py-5
          lg:px-8
          lg:py-6
        "
      >
        {/* =====================================================
            MINIMAL BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -left-24
              -top-24
              size-72
              rounded-full
              bg-[#8f1d1d]/[0.035]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -right-24
              top-1/3
              size-80
              rounded-full
              bg-[#d4af37]/[0.045]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/2
              size-64
              -translate-x-1/2
              rounded-full
              bg-[#172554]/[0.025]
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(#172554_1px,transparent_1px),linear-gradient(90deg,#172554_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-5xl">

          {/* ===================================================
              TOP NAV / BACK
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="mb-3"
          >
            <Link
              to="/admission"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#172554]/10
                bg-white/80
                px-3
                py-1.5
                text-[8px]
                font-black
                text-[#172554]
                shadow-sm
                backdrop-blur-md
                transition-all
                hover:border-[#8f1d1d]/25
                hover:text-[#8f1d1d]
              "
            >
              <ArrowLeft className="size-3" />

              Back to Admission
            </Link>
          </motion.div>

          {/* ===================================================
              HERO
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              mb-4
              grid
              items-center
              gap-3
              lg:grid-cols-[1fr_auto]
            "
          >
            <div>
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className="
                    h-0.5
                    w-7
                    rounded-full
                    bg-[#8f1d1d]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-[#8f1d1d]
                  "
                >
                  Admissions
                </span>
              </div>

              <h1
                className="
                  text-2xl
                  font-black
                  tracking-[-0.04em]
                  text-[#172554]
                  sm:text-3xl
                  lg:text-[2.6rem]
                "
              >
                Create your{" "}
                <span className="text-[#8f1d1d]">
                  account.
                </span>
              </h1>

              <p
                className="
                  mt-1
                  max-w-2xl
                  text-[9px]
                  leading-4
                  text-slate-500
                  sm:text-[10px]
                "
              >
                Register as a new applicant and begin your
                admission journey with Crescent Distance
                Education.
              </p>
            </div>

            {/* Small hero badge */}
            <div
              className="
                hidden
                items-center
                gap-2
                rounded-2xl
                border
                border-[#d4af37]/25
                bg-white/70
                px-3
                py-2
                shadow-sm
                backdrop-blur
                sm:flex
              "
            >
              <div
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#172554]
                  text-[#d4af37]
                "
              >
                <Sparkles className="size-3.5" />
              </div>

              <div>
                <p className="text-[7px] font-bold uppercase tracking-wider text-[#8f1d1d]">
                  Applicant Portal
                </p>

                <p className="text-[9px] font-black text-[#172554]">
                  Start your journey
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              MAIN CARD
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#172554]/10
              bg-white
              shadow-[0_18px_55px_rgba(23,37,84,0.09)]
            "
          >
            {/* =================================================
                CARD HEADER
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#172554]
                px-4
                py-4
                sm:px-6
                sm:py-4.5
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-20
                  size-48
                  rounded-full
                  bg-[#d4af37]/10
                  blur-2xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  left-1/3
                  size-40
                  rounded-full
                  bg-[#8f1d1d]/15
                  blur-3xl
                "
              />

              <div className="relative flex items-center gap-3">
                <div
                  className="
                    flex
                    size-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#8f1d1d]
                    text-white
                    shadow-lg
                  "
                >
                  <UserPlus className="size-4" />
                </div>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.24em]
                      text-[#d4af37]
                    "
                  >
                    New Account
                  </p>

                  <h2
                    className="
                      mt-0.5
                      text-sm
                      font-black
                      text-white
                      sm:text-base
                    "
                  >
                    Applicant registration
                  </h2>
                </div>

                <div className="ml-auto hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 sm:flex">
                  <ShieldCheck className="size-3 text-[#d4af37]" />

                  <span className="text-[7px] font-bold text-white/60">
                    Secure registration
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6"
            >
              {/* =================================================
                  ACCOUNT DETAILS
              ================================================= */}

              <SectionTitle
                number="01"
                title="Account Details"
                description="Create your applicant login credentials"
              />

              <div
                className="
                  grid
                  gap-4
                  lg:grid-cols-2
                "
              >
                <FormInput
                  label="Username"
                  name="username"
                  placeholder="Choose a username"
                  value={form.username}
                  onChange={(value) =>
                    updateField("username", value)
                  }
                  icon={User}
                />

                <PasswordInput
                  value={form.password}
                  onChange={(value) =>
                    updateField("password", value)
                  }
                  show={showPassword}
                  setShow={setShowPassword}
                />
              </div>

              {/* Confirm password */}
              <div className="mt-4 lg:max-w-[calc(50%-0.5rem)]">
                <div className="space-y-1.5">
                  <label
                    htmlFor="confirmPassword"
                    className="
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.17em]
                      text-[#172554]
                    "
                  >
                    Confirm Password
                    <span className="ml-1 text-[#8f1d1d]">
                      *
                    </span>
                  </label>

                  <div className="group relative">
                    <LockKeyhole
                      className="
                        pointer-events-none
                        absolute
                        left-3
                        top-1/2
                        z-10
                        size-4
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        group-focus-within:text-[#8f1d1d]
                      "
                    />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={form.confirmPassword}
                      required
                      onChange={(e) =>
                        updateField(
                          "confirmPassword",
                          e.target.value,
                        )
                      }
                      placeholder="Re-enter your password"
                      className="
                        h-10.5
                        w-full
                        rounded-xl
                        border
                        border-[#172554]/10
                        bg-[#fafafa]
                        px-10
                        pr-10
                        text-[12px]
                        font-medium
                        text-[#172554]
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-300
                        hover:border-[#172554]/20
                        focus:border-[#8f1d1d]/50
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#8f1d1d]/[0.06]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword,
                        )
                      }
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        hover:text-[#8f1d1d]
                      "
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>

                  {form.confirmPassword.length > 0 && (
                    <div
                      className={`
                        flex
                        items-center
                        gap-1.5
                        text-[8px]
                        font-semibold
                        ${
                          form.password ===
                          form.confirmPassword
                            ? "text-green-600"
                            : "text-[#8f1d1d]"
                        }
                      `}
                    >
                      <CheckCircle2 className="size-3" />

                      {form.password ===
                      form.confirmPassword
                        ? "Passwords match"
                        : "Passwords do not match"}
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div className="my-5 h-px bg-[#172554]/[0.07]" />

              <SectionTitle
                number="02"
                title="Contact Details"
                description="Enter your primary communication details"
              />

              <div
                className="
                  grid
                  gap-4
                  lg:grid-cols-2
                "
              >
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(value) =>
                    updateField("email", value)
                  }
                  icon={Mail}
                />

                <FormInput
                  label="Email Again"
                  name="emailAgain"
                  type="email"
                  placeholder="Re-enter your email"
                  value={form.emailAgain}
                  onChange={(value) =>
                    updateField("emailAgain", value)
                  }
                  icon={Mail}
                />

                <FormInput
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  onChange={(value) =>
                    updateField("mobile", value)
                  }
                  icon={Phone}
                />

                <FormInput
                  label="City / Town"
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={(value) =>
                    updateField("city", value)
                  }
                  icon={MapPin}
                />
              </div>

              {/* COUNTRY */}

              <div className="mt-4">
                <label
                  htmlFor="country"
                  className="
                    block
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.17em]
                    text-[#172554]
                  "
                >
                  Country
                  <span className="ml-1 text-[#8f1d1d]">
                    *
                  </span>
                </label>

                <div className="group relative mt-1.5">
                  <MapPin
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      z-10
                      size-4
                      -translate-y-1/2
                      text-slate-400
                      transition-colors
                      group-focus-within:text-[#8f1d1d]
                    "
                  />

                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    required
                    onChange={(e) =>
                      updateField(
                        "country",
                        e.target.value,
                      )
                    }
                    className="
                      h-10.5
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-[#172554]/10
                      bg-[#fafafa]
                      pl-10
                      pr-4
                      text-[12px]
                      font-medium
                      text-[#172554]
                      outline-none
                      transition-all
                      duration-200
                      hover:border-[#172554]/20
                      focus:border-[#8f1d1d]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#8f1d1d]/[0.06]
                    "
                  >
                    <option value="India">
                      India
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* =================================================
                  PERSONAL DETAILS
              ================================================= */}

              <div className="my-5 h-px bg-[#172554]/[0.07]" />

              <SectionTitle
                number="03"
                title="Personal Details"
                description="Tell us a little about yourself"
              />

              <div
                className="
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                <FormInput
                  label="First Name"
                  name="firstName"
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={(value) =>
                    updateField(
                      "firstName",
                      value,
                    )
                  }
                  icon={User}
                />

                <FormInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={(value) =>
                    updateField(
                      "lastName",
                      value,
                    )
                  }
                  icon={User}
                />
              </div>

              {/* =================================================
                  PROGRAMME
              ================================================= */}

              <div className="my-5 h-px bg-[#172554]/[0.07]" />

              <SectionTitle
                number="04"
                title="Programme Selection"
                description="Choose the programme you want to apply for"
              />

              <ProgrammeSelect
                value={form.programme}
                onChange={(value) =>
                  updateField(
                    "programme",
                    value,
                  )
                }
              />

              {/* =================================================
                  INFORMATION
              ================================================= */}

              <div
                className="
                  mt-5
                  grid
                  gap-2
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#172554]/[0.07]
                    bg-[#f7f5f0]
                    px-3
                    py-2.5
                  "
                >
                  <div
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#172554]
                      text-[#d4af37]
                    "
                  >
                    <CheckCircle2 className="size-3.5" />
                  </div>

                  <div>
                    <p className="text-[8px] font-black text-[#172554]">
                      Required fields
                    </p>

                    <p className="mt-0.5 text-[7px] text-slate-400">
                      Fields marked * must be completed.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#d4af37]/15
                    bg-[#d4af37]/[0.035]
                    px-3
                    py-2.5
                  "
                >
                  <div
                    className="
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#8f1d1d]
                      text-white
                    "
                  >
                    <ShieldCheck className="size-3.5" />
                  </div>

                  <div>
                    <p className="text-[8px] font-black text-[#172554]">
                      Secure information
                    </p>

                    <p className="mt-0.5 text-[7px] text-slate-400">
                      Your registration details are protected.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-4
                    rounded-xl
                    border
                    border-[#8f1d1d]/15
                    bg-[#8f1d1d]/[0.045]
                    px-3
                    py-2.5
                  "
                >
                  <p className="text-[9px] font-bold text-[#8f1d1d]">
                    {error}
                  </p>
                </motion.div>
              )}

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="
                  group
                  mt-5
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#8f1d1d]
                  px-5
                  text-[10px]
                  font-black
                  tracking-wide
                  text-white
                  shadow-[0_9px_22px_rgba(143,29,29,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#172554]
                  hover:shadow-[0_12px_28px_rgba(23,37,84,0.18)]
                  active:translate-y-0
                "
              >
                <UserPlus className="size-3.5" />

                Create New Account

                <ArrowRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {submitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mt-3
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-3
                    py-2.5
                  "
                >
                  <div
                    className="
                      flex
                      size-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-green-100
                      text-green-600
                    "
                  >
                    <CheckCircle2 className="size-3.5" />
                  </div>

                  <div>
                    <p className="text-[9px] font-black text-green-700">
                      Registration form submitted successfully.
                    </p>

                    <p className="mt-0.5 text-[7px] text-green-600">
                      Backend account creation can be connected here.
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* ===================================================
              FOOT NOTE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
            }}
            className="
              flex
              items-center
              justify-center
              gap-2
              py-3
            "
          >
            <p className="text-[8px] text-slate-400">
              Already have an account?
            </p>

            <Link
              to="/admission#enquiry"
              className="
                inline-flex
                items-center
                gap-1
                text-[9px]
                font-black
                text-[#8f1d1d]
                transition-colors
                hover:text-[#172554]
              "
            >
              Applicant Login
              <ArrowRight className="size-2.5" />
            </Link>
          </motion.div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default NewRegistrationPage;
