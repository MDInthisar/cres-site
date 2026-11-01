import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { pgProgrammes, ugProgrammes, certificationProgrammes } from "@/data/site";

// ==================================================
// GOOGLE APPS SCRIPT BACKEND
// ==================================================

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

// ==================================================
// TYPES
// ==================================================

interface EnquiryFormProps {
  idPrefix?: string;
  submissionType?: "enquiry" | "student-complaint";
  onSubmitted?: () => void;
}

// ==================================================
// COMPONENT
// ==================================================

export function EnquiryForm({
  idPrefix = "enq",
  submissionType = "enquiry",
  onSubmitted,
}: EnquiryFormProps) {
  const [programme, setProgramme] = useState("");
  const [rrn, setRrn] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const isStudentComplaint = submissionType === "student-complaint";

  // ==================================================
  // PROGRAMME OPTIONS
  // ==================================================

  const options = [
    ...ugProgrammes.map((p) => p.name),
    ...pgProgrammes.map((p) => p.name),
    ...certificationProgrammes.map((p) => p.name),
  ];

  // ==================================================
  // FORM SUBMISSION
  // ==================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;

    setError("");
    setSuccessMessage("");

    // Validate native HTML fields.
    if (!form.reportValidity()) {
      setError("Please complete all required fields.");
      return;
    }

    // Validate complaint-specific fields.
    if (isStudentComplaint && !rrn.trim()) {
      setError("Please enter your RRN.");
      return;
    }

    // Validate programme selection.
    if (!isStudentComplaint && !programme.trim()) {
      setError("Please select a programme.");
      return;
    }

    setLoading(true);

    try {
      if (!SCRIPT_URL) {
        throw new Error("Google Apps Script URL is not configured.");
      }

      const formData = new FormData(form);

      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phonenumber") || "").trim();
      const message = String(formData.get("message") || "").trim();

      // ==================================================
      // CREATE CORRECT PAYLOAD FOR BOTH FORM TYPES
      // ==================================================

      const data = {
        submissionId:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`,

        // Always explicitly send the submission type.
        submissionType: isStudentComplaint ? "student-complaint" : "enquiry",

        name,
        email,
        phone,

        ...(isStudentComplaint
          ? {
              rrn: rrn.trim(),
            }
          : {
              programme: programme.trim(),
            }),

        message,
      };

      // Debug: inspect the payload in browser console.
      console.log("Submitting form:", data);

      // ==================================================
      // SEND TO GOOGLE APPS SCRIPT
      // ==================================================

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      // Read response as text first to handle invalid JSON.
      const responseText = await response.text();

      console.log("Apps Script response:", responseText);

      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("Invalid response from Google Apps Script. Check the deployment.");
      }

      if (!response.ok || !result.success || result.saved === false) {
        throw new Error(result.message || "Your submission could not be completed.");
      }

      // ==================================================
      // SUCCESS
      // ==================================================

      setSuccessMessage(
        result.message ||
          (isStudentComplaint
            ? "Your complaint has been submitted successfully."
            : "Thank you! Your enquiry has been submitted successfully."),
      );

      // Reset form fields.
      form.reset();
      setProgramme("");
      setRrn("");

      // Clear stored enquiry data if present.
      try {
        localStorage.removeItem("enquiryForm");
        sessionStorage.removeItem("enquiryForm");
      } catch (storageError) {
        console.warn("Could not clear form storage:", storageError);
      }

      // Close complaint modal if callback exists.
      onSubmitted?.();
    } catch (err) {
      console.error("Enquiry submission error:", err);

      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ==================================================
  // UI
  // ==================================================

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* NAME */}

      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-name`}>Student name</Label>

        <Input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={loading}
        />
      </div>

      {/* EMAIL AND PHONE */}

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-email`}>Email address</Label>

          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={loading}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone number</Label>

          <Input
            id={`${idPrefix}-phone`}
            name="phonenumber"
            type="tel"
            required
            pattern="[0-9+ -]{8,15}"
            title="Enter 8 to 15 characters using digits, spaces, + or hyphens."
            autoComplete="tel"
            disabled={loading}
          />
        </div>
      </div>

      {/* RRN - COMPLAINT ONLY */}

      {isStudentComplaint && (
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-rrn`}>RRN</Label>

          <Input
            id={`${idPrefix}-rrn`}
            name="rrn"
            type="text"
            required
            value={rrn}
            onChange={(event) => {
              setRrn(event.target.value);
              setError("");
            }}
            disabled={loading}
          />
        </div>
      )}

      {/* PROGRAMME - ENQUIRY ONLY */}

      {!isStudentComplaint && (
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-programme`}>Programme of interest</Label>

          <Select
            value={programme}
            onValueChange={(value) => {
              setProgramme(value);
              setError("");
            }}
            disabled={loading}
          >
            <SelectTrigger
              id={`${idPrefix}-programme`}
              className="rounded-xl"
              aria-required="true"
              aria-invalid={!programme && !!error}
            >
              <SelectValue placeholder="Select a programme" />
            </SelectTrigger>

            <SelectContent className="z-[100000]">
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* MESSAGE / GRIEVANCE */}

      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-message`}>
          {isStudentComplaint ? "Grievance" : "Message"}
        </Label>

        <Textarea id={`${idPrefix}-message`} name="message" rows={4} required disabled={loading} />
      </div>

      {/* SUBMIT BUTTON */}

      <Button type="submit" variant="hero" size="pill-lg" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : isStudentComplaint ? "Submit Complaint" : "Submit Enquiry"}
      </Button>

      {/* SUCCESS MESSAGE */}

      {successMessage && (
        <p aria-live="polite" className="text-sm text-green-600">
          {successMessage}
        </p>
      )}

      {/* ERROR MESSAGE */}

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}
