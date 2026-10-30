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
// TYPES
// ==================================================

interface EnquiryFormProps {
  idPrefix?: string;
  submissionType?: "enquiry" | "student-complaint";
  onSubmitted?: () => void;
}

interface ContactApiResponse {
  success?: boolean;
  message?: string;
}

// ==================================================
// COMPONENT
// ==================================================

export function EnquiryForm({
  idPrefix = "enq",
  submissionType = "enquiry",
  onSubmitted,
}: EnquiryFormProps) {
  // ------------------------------------------------
  // STATE
  // ------------------------------------------------

  const [programme, setProgramme] = useState("");
  const [rrn, setRrn] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ------------------------------------------------
  // PROGRAMME OPTIONS
  // ------------------------------------------------

  const options = [
    ...ugProgrammes.map((p) => p.name),
    ...pgProgrammes.map((p) => p.name),
    ...certificationProgrammes.map((p) => p.name),
  ];

  // ==================================================
  // SUBMIT FORM
  // ==================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (loading) return;

    const form = e.currentTarget;

    // Browser validation
    if (!form.reportValidity()) {
      setError("Please complete all required fields.");
      return;
    }

    const isStudentComplaint = submissionType === "student-complaint";

    // Programme validation
    if (!isStudentComplaint && !programme.trim()) {
      setError("Please select a programme.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      // ----------------------------------------------
      // GET FORM DATA
      // ----------------------------------------------

      const formData = new FormData(form);
      const complaintRrn = String(formData.get("rrn") || "").trim();

      // ----------------------------------------------
      // CREATE SUBMISSION ID
      // ----------------------------------------------

      // Use randomUUID when available.
      // Fall back for environments without randomUUID.
      const submissionId =
        typeof globalThis.crypto?.randomUUID === "function"
          ? globalThis.crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random()
              .toString(36)
              .slice(2)}`;

      // ----------------------------------------------
      // CREATE API PAYLOAD
      // ----------------------------------------------

      const data = {
        submissionId,
        submissionType,

        name: String(formData.get("name") || "").trim(),

        email: String(formData.get("email") || "").trim(),

        phonenumber: String(formData.get("phonenumber") || "").trim(),

        rrn: complaintRrn,

        program: isStudentComplaint ? "Student Complaint" : programme.trim(),

        message: String(formData.get("message") || "").trim(),
      };

      // ----------------------------------------------
      // API URL
      // ----------------------------------------------

      const API_URL = (import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000").replace(
        /\/+$/,
        "",
      );

      // ----------------------------------------------
      // SEND REQUEST TO EXPRESS
      // ----------------------------------------------

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // ----------------------------------------------
      // READ RESPONSE SAFELY
      // ----------------------------------------------

      const responseText = await response.text();

      let result: ContactApiResponse;

      try {
        result = JSON.parse(responseText) as ContactApiResponse;
      } catch {
        throw new Error(`The server returned an invalid response (HTTP ${response.status}).`);
      }

      // ----------------------------------------------
      // CHECK API RESPONSE
      // ----------------------------------------------

      if (!response.ok || !result.success) {
        throw new Error(result.message || `Failed to submit enquiry (HTTP ${response.status}).`);
      }

      // ----------------------------------------------
      // SUCCESS
      // ----------------------------------------------

      setMessage(result.message || "Thank you! Your enquiry has been submitted successfully.");

      // Reset HTML form
      form.reset();

      // Reset controlled React Select
      setProgramme("");
      setRrn("");

      // Clear only enquiry-related storage.
      // Storage cleanup must not turn a successful
      // server submission into a reported failure.
      try {
        localStorage.removeItem("enquiryForm");
        sessionStorage.removeItem("enquiryForm");
      } catch (storageError) {
        console.warn("Could not clear enquiry form storage:", storageError);
      }

      // Close modal if a callback was provided
      onSubmitted?.();
    } catch (err) {
      console.error("Enquiry submission error:", err);

      setError(err instanceof Error ? err.message : "Failed to submit enquiry. Please try again.");
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
        <Label htmlFor={`${idPrefix}-name`}>
          {submissionType === "student-complaint" ? "Name of Student" : "Student name"}
        </Label>

        <Input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={loading}
        />
      </div>

      {/* EMAIL + PHONE */}

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        {/* EMAIL */}

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

        {/* PHONE */}

        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone number</Label>

          <Input
            id={`${idPrefix}-phone`}
            name="phonenumber"
            type="tel"
            required
            pattern="[0-9+\\x20\\-]{8,15}"
            title="Enter 8 to 15 characters using digits, spaces, + or hyphens."
            autoComplete="tel"
            disabled={loading}
          />
        </div>
      </div>

      {submissionType === "student-complaint" && (
        <div className="grid gap-2">
          <Label htmlFor={`${idPrefix}-rrn`}>RRN</Label>
          <Input
            id={`${idPrefix}-rrn`}
            name="rrn"
            type="text"
            required
            value={rrn}
            onChange={(event) => setRrn(event.target.value)}
            disabled={loading}
          />
        </div>
      )}

      {/* PROGRAMME */}

      {submissionType !== "student-complaint" && (
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

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* MESSAGE */}

      <div className="grid gap-2">
        <Label htmlFor={`${idPrefix}-message`}>
          {submissionType === "student-complaint" ? "State Your Grievance" : "Message"}
        </Label>

        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          required
          placeholder={
            submissionType === "student-complaint" ? "State your grievance clearly..." : undefined
          }
          disabled={loading}
        />
      </div>

      {/* SUBMIT BUTTON */}

      <Button type="submit" variant="hero" size="pill-lg" className="w-full" disabled={loading}>
        {loading
          ? "Submitting..."
          : submissionType === "student-complaint"
            ? "Submit complaint"
            : "Submit enquiry"}
      </Button>

      {/* SUCCESS MESSAGE */}

      {message && (
        <p aria-live="polite" className="text-sm text-green-600">
          {message}
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
