import { memo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ui } from "../data/translations";
import { cn } from "../lib/utils";
import type { EnquiryData } from "../types/chat";
import { courseInfo } from "@/data/programmes";

interface Props {
  onSubmitted: (data: EnquiryData) => void;
}

const COURSES = courseInfo.map((course) => course.name);

type Errors = Partial<Record<keyof EnquiryData, string>>;

function EnquiryFormBase({ onSubmitted }: Props) {
  const t = ui.en;
  const [data, setData] = useState<EnquiryData>({
    name: "",
    mobile: "",
    email: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const update = (key: keyof EnquiryData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!data.name.trim()) next.name = t.required;
    if (!data.mobile.trim()) next.mobile = t.required;
    else if (!/^[6-9]\d{9}$/.test(data.mobile.trim())) next.mobile = t.invalidMobile;
    if (!data.email.trim()) next.email = t.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) next.email = t.invalidEmail;
    if (!data.course) next.course = t.required;
    if (!data.message.trim()) next.message = t.required;
    return next;
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const apiUrl = (import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000").replace(
        /\/+$/,
        "",
      );
      const submissionId =
        typeof globalThis.crypto?.randomUUID === "function"
          ? globalThis.crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId,
          name: data.name.trim(),
          email: data.email.trim(),
          phonenumber: data.mobile.trim(),
          program: data.course,
          message: data.message.trim(),
        }),
      });

      const responseText = await response.text();
      let result: { success?: boolean; message?: string };
      try {
        result = JSON.parse(responseText) as { success?: boolean; message?: string };
      } catch {
        throw new Error(`The server returned an invalid response (HTTP ${response.status}).`);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || `Failed to submit enquiry (HTTP ${response.status}).`);
      }

      onSubmitted(data);
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "Failed to submit enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (invalid?: string) =>
    cn(
      "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring",
      invalid ? "border-destructive" : "border-border",
    );

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={submit}
      noValidate
      className="space-y-2.5 border-t border-border bg-card/90 p-4 backdrop-blur"
    >
      <div>
        <h3 className="text-sm font-semibold text-foreground">{t.enquiryTitle}</h3>
        <p className="text-xs text-muted-foreground">{t.enquirySubtitle}</p>
      </div>

      <div>
        <input
          className={fieldClass(errors.name)}
          placeholder={t.name}
          aria-label={t.name}
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
        />
        {errors.name && <p className="mt-1 text-[11px] text-destructive">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <div>
          <input
            className={fieldClass(errors.mobile)}
            placeholder={t.mobile}
            aria-label={t.mobile}
            inputMode="numeric"
            maxLength={10}
            value={data.mobile}
            onChange={(e) => update("mobile", e.target.value.replace(/\D/g, ""))}
          />
          {errors.mobile && <p className="mt-1 text-[11px] text-destructive">{errors.mobile}</p>}
        </div>
        <div>
          <input
            className={fieldClass(errors.email)}
            placeholder={t.email}
            aria-label={t.email}
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1 text-[11px] text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div>
        <select
          className={fieldClass(errors.course)}
          aria-label={t.course}
          value={data.course}
          onChange={(e) => update("course", e.target.value)}
        >
          <option value="">{t.course}</option>
          {COURSES.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        {errors.course && <p className="mt-1 text-[11px] text-destructive">{errors.course}</p>}
      </div>

      <div>
        <textarea
          className={cn(fieldClass(errors.message), "min-h-16 resize-none")}
          placeholder={t.message}
          aria-label={t.message}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && <p className="mt-1 text-[11px] text-destructive">{errors.message}</p>}
      </div>

      {submissionError && (
        <p role="alert" className="text-xs text-destructive">
          {submissionError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
    </motion.form>
  );
}

export const EnquiryForm = memo(EnquiryFormBase);
export default EnquiryForm;
