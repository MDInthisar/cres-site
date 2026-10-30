import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  LogIn,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

const title = "LMS Login — Crescent Distance Education";

const description =
  "Login to the Learning Management System to access lectures, study materials, assignments and examination updates.";

function LMSLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [rememberUsername, setRememberUsername] =
    useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Please enter your username.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    /*
      Frontend-only login UI.
      Backend authentication can be connected later.
    */

    setError(
      "Login service is ready. Connect your authentication API here.",
    );
  }

  return (
    <SiteLayout>
      <main className="relative min-h-[calc(100vh-140px)] overflow-hidden bg-[#f7f4ee]">
        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 size-80 rounded-full bg-[#8f1d1d]/[0.07] blur-3xl" />

          <div className="absolute -right-32 -top-10 size-80 rounded-full bg-[#d4af37]/[0.09] blur-3xl" />

          <div className="absolute bottom-[-160px] left-[35%] size-96 rounded-full bg-[#172554]/[0.04] blur-3xl" />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
          <div className="grid w-full max-w-5xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* ================= LEFT ================= */}

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
                duration: 0.55,
              }}
              className="hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-7 rounded-full bg-[#8f1d1d]" />

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8f1d1d]">
                  Student Learning Portal
                </span>
              </div>

              <h1 className="mt-3 max-w-md text-[40px] font-black leading-[1.02] tracking-[-0.04em] text-[#172554]">
                Your learning
                <br />

                <span className="text-[#8f1d1d]">
                  continues here.
                </span>
              </h1>

              <p className="mt-4 max-w-md text-[11px] leading-5 text-slate-500">
                Sign in to access your lectures, assignments,
                study materials, examination information and
                academic resources.
              </p>

              <div className="mt-6 space-y-2.5">
                <InfoItem
                  icon={
                    <GraduationCap className="size-4" />
                  }
                  title="Distance Learning"
                  text="Continue your academic journey online."
                />

                <InfoItem
                  icon={<ShieldCheck className="size-4" />}
                  title="Secure Access"
                  text="Protected access to your learning account."
                />

                <InfoItem
                  icon={<LogIn className="size-4" />}
                  title="One Learning Space"
                  text="Study resources and academic updates together."
                />
              </div>
            </motion.div>

            {/* ================= LOGIN CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-[#d4af37]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-[#172554]/10 bg-white shadow-[0_20px_55px_rgba(23,37,84,0.10)]">
                {/* ================= CARD HEADER ================= */}

                <div className="relative overflow-hidden bg-[#172554] px-6 py-5 text-white sm:px-8">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[#d4af37]/10 blur-3xl" />

                  <div className="pointer-events-none absolute -bottom-20 -left-20 size-44 rounded-full bg-[#8f1d1d]/20 blur-3xl" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg">
                      <GraduationCap className="size-7 text-[#172554]" />
                    </div>

                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#d4af37]">
                        Crescent Distance Education
                      </p>

                      <h2 className="mt-1 text-base font-black sm:text-lg">
                        Learning Management System
                      </h2>

                      <p className="mt-0.5 text-[8px] text-white/45">
                        Student Portal
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= FORM AREA ================= */}

                <div className="px-6 py-6 sm:px-8 sm:py-7">
                  <div className="mb-5">
                    <div className="flex items-center gap-2">
                      <span className="h-[2px] w-6 rounded-full bg-[#8f1d1d]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#8f1d1d]">
                        Student Login
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-black tracking-tight text-[#172554]">
                      Log in
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      Enter your username and password to
                      continue.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* USERNAME */}

                    <div>
                      <label
                        htmlFor="username"
                        className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-[#172554]"
                      >
                        Username
                      </label>

                      <div className="group relative">
                        <User className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-[#8f1d1d]" />

                        <input
                          id="username"
                          type="text"
                          value={username}
                          onChange={(event) =>
                            setUsername(event.target.value)
                          }
                          placeholder="Enter your username"
                          autoComplete="username"
                          className="h-11 w-full rounded-xl border border-slate-200 bg-[#faf9f6] pl-10 pr-4 text-xs font-medium text-[#172554] outline-none transition-all placeholder:text-slate-300 focus:border-[#8f1d1d]/40 focus:bg-white focus:ring-4 focus:ring-[#8f1d1d]/[0.06]"
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-1.5 block text-[9px] font-black uppercase tracking-[0.16em] text-[#172554]"
                      >
                        Password
                      </label>

                      <div className="group relative">
                        <LockKeyhole className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-[#8f1d1d]" />

                        <input
                          id="password"
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          value={password}
                          onChange={(event) =>
                            setPassword(event.target.value)
                          }
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          className="h-11 w-full rounded-xl border border-slate-200 bg-[#faf9f6] pl-10 pr-11 text-xs font-medium text-[#172554] outline-none transition-all placeholder:text-slate-300 focus:border-[#8f1d1d]/40 focus:bg-white focus:ring-4 focus:ring-[#8f1d1d]/[0.06]"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((value) => !value)
                          }
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 transition-colors hover:text-[#8f1d1d]"
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

                    {/* REMEMBER */}

                    <label className="flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        checked={rememberUsername}
                        onChange={(event) =>
                          setRememberUsername(
                            event.target.checked,
                          )
                        }
                        className="size-3.5 rounded border-slate-300 accent-[#8f1d1d]"
                      />

                      <span className="text-[10px] font-medium text-slate-500">
                        Remember username
                      </span>
                    </label>

                    {/* ERROR / STATUS */}

                    {error && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl border border-[#8f1d1d]/10 bg-[#8f1d1d]/[0.05] px-3 py-2 text-[9px] font-medium leading-4 text-[#8f1d1d]"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* LOGIN */}

                    <button
                      type="submit"
                      className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] text-[11px] font-black text-white shadow-[0_8px_20px_rgba(143,29,29,0.18)] transition-all duration-300 hover:bg-[#a52222] hover:shadow-[0_12px_28px_rgba(143,29,29,0.25)] active:scale-[0.99]"
                    >
                      <LogIn className="size-4" />

                      Log in

                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>

                  {/* SECURITY */}

                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.07] px-3 py-2.5">
                    <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-[#8f1d1d]" />

                    <p className="text-[9px] leading-4 text-slate-500">
                      Please keep your login credentials private
                      and do not share your password with others.
                    </p>
                  </div>

                  {/* BACK */}

                  <div className="mt-4 flex justify-center">
                    <Link
                      to="/students-corner"
                      className="group inline-flex items-center gap-1.5 text-[9px] font-bold text-slate-400 transition-colors hover:text-[#8f1d1d]"
                    >
                      <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" />

                      Back to Students Corner
                    </Link>
                  </div>
                </div>

                {/* ================= FOOTER ================= */}

                <div className="border-t border-slate-100 bg-[#faf9f6] px-6 py-3 text-center">
                  <p className="text-[8px] leading-4 text-slate-400">
                    Learning Management System • Student Portal
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#172554]/10 bg-white/70 px-3.5 py-3 shadow-[0_6px_20px_rgba(23,37,84,0.04)]">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#172554] text-[#d4af37]">
        {icon}
      </div>

      <div>
        <h4 className="text-[10px] font-black text-[#172554]">
          {title}
        </h4>

        <p className="mt-0.5 text-[9px] leading-3.5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default LMSLoginPage;
