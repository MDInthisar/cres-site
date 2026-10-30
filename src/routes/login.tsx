import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  LogIn,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

const title = "Applicant Login | Crescent Distance Education";

const description =
  "Login to your Crescent Distance Education applicant account to continue your admission application.";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SiteLayout>
      <main className="min-h-[calc(100vh-120px)] bg-[#f7f4ee] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex min-h-[650px] max-w-6xl items-center justify-center">
          <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#172554]/10 bg-white shadow-[0_25px_70px_rgba(23,37,84,0.10)] lg:grid-cols-[0.9fr_1.1fr]">

            {/* =====================================================
                LEFT INFORMATION PANEL
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative
                hidden
                overflow-hidden
                bg-[#172554]
                p-8
                text-white
                lg:flex
                lg:flex-col
                lg:justify-between
              "
            >
              {/* Background glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-24
                  -top-24
                  size-72
                  rounded-full
                  bg-[#8f1d1d]/40
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -right-20
                  size-80
                  rounded-full
                  bg-[#d4af37]/15
                  blur-3xl
                "
              />

              <div className="relative">

                {/* Badge */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#d4af37]/30
                    bg-white/5
                    px-3
                    py-1.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#d4af37]
                  "
                >
                  <span className="size-1.5 rounded-full bg-[#d4af37]" />
                  Applicant Portal
                </div>

                {/* Heading */}
                <h1
                  className="
                    mt-6
                    max-w-md
                    text-4xl
                    font-black
                    leading-[1.08]
                    tracking-tight
                  "
                >
                  Welcome
                  <span className="text-[#d4af37]"> back.</span>
                </h1>

                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-6
                    text-white/65
                  "
                >
                  Continue your admission journey with Crescent Distance
                  Education. Login to manage your application and admission
                  details.
                </p>

                {/* Benefits */}
                <div className="mt-8 space-y-3">
                  {[
                    "Continue your saved application",
                    "Upload or update required documents",
                    "Track your admission application",
                    "View your application status",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
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
                        "
                      >
                        <CheckCircle2 className="size-3.5 text-white" />
                      </div>

                      <span className="text-xs font-medium text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div
                className="
                  relative
                  mt-10
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-3.5
                "
              >
                <div
                  className="
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#d4af37]/10
                  "
                >
                  <ShieldCheck className="size-4 text-[#d4af37]" />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    Secure Applicant Access
                  </p>

                  <p className="mt-0.5 text-[9px] text-white/45">
                    Keep your login credentials private.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                RIGHT LOGIN PANEL
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="p-6 sm:p-8 lg:p-10"
            >
              {/* Back */}
              <Link
                to="/admission"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  text-slate-500
                  transition-colors
                  hover:text-[#8f1d1d]
                "
              >
                <ArrowLeft className="size-3.5" />
                Back to Admission
              </Link>

              {/* Header */}
              <div className="mt-8">
                <div
                  className="
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#172554]
                    text-[#d4af37]
                    shadow-lg
                  "
                >
                  <LogIn className="size-5" />
                </div>

                <p
                  className="
                    mt-5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.24em]
                    text-[#8f1d1d]
                  "
                >
                  Returning Applicant
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#172554]
                    sm:text-3xl
                  "
                >
                  Applicant Login
                </h2>

                <p
                  className="
                    mt-2
                    max-w-md
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Enter your registered username and password to continue
                  your application.
                </p>
              </div>

              {/* =================================================
                  LOGIN FORM
              ================================================= */}

              <form
                className="mt-7 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();

                  // Add your actual login API / external portal
                  // navigation here later.
                }}
              >
                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#172554]
                    "
                  >
                    Username
                  </label>

                  <div className="relative">
                    <User
                      className="
                        absolute
                        left-3.5
                        top-1/2
                        size-4
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      autoComplete="username"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-10
                        pr-4
                        text-sm
                        text-[#172554]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#8f1d1d]/50
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#8f1d1d]/10
                      "
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.15em]
                        text-[#172554]
                      "
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="
                        text-[9px]
                        font-bold
                        text-[#8f1d1d]
                        hover:underline
                      "
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      className="
                        absolute
                        left-3.5
                        top-1/2
                        size-4
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-10
                        pr-11
                        text-sm
                        text-[#172554]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#8f1d1d]/50
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#8f1d1d]/10
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((value) => !value)
                      }
                      className="
                        absolute
                        right-3.5
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        hover:text-[#172554]
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[10px]
                    font-medium
                    text-slate-500
                  "
                >
                  <input
                    type="checkbox"
                    className="
                      size-3.5
                      rounded
                      border-slate-300
                      accent-[#8f1d1d]
                    "
                  />

                  Remember me
                </label>

                {/* Login Button */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#172554]
                    text-xs
                    font-black
                    text-white
                    shadow-[0_10px_25px_rgba(23,37,84,0.15)]
                    transition-all
                    duration-300
                    hover:bg-[#8f1d1d]
                    hover:shadow-[0_12px_30px_rgba(143,29,29,0.20)]
                  "
                >
                  Login to Applicant Portal

                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </form>

              {/* =================================================
                  NEW APPLICANT
              ================================================= */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-[#d4af37]/25
                  bg-[#d4af37]/5
                  p-4
                "
              >
                <p className="text-[11px] font-bold text-[#172554]">
                  Don't have an applicant account?
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  Create a new account first, then return here to continue
                  your admission application.
                </p>

                <Link
                  to="/new-registration"
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-1.5
                    text-[10px]
                    font-black
                    text-[#8f1d1d]
                    hover:underline
                  "
                >
                  Create New Registration
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              {/* Footer note */}
              <p
                className="
                  mt-6
                  text-center
                  text-[8px]
                  leading-4
                  text-slate-400
                "
              >
                For your security, never share your username or password
                with anyone.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

export default LoginPage;
