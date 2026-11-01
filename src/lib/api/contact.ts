export type ContactSubmission = {
  submissionId?: string;
  submissionType?: "enquiry" | "student-complaint";
  name: string;
  email: string;
  phonenumber: string;
  rrn?: string;
  program: string;
  message: string;
};

export type ContactApiResponse = {
  success?: boolean;
  message?: string;
};

function createSubmissionId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export async function submitContact(submission: ContactSubmission): Promise<ContactApiResponse> {
  const apiUrl = (import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000").replace(
    /\/+$/,
    "",
  );
  const response = await fetch(`${apiUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...submission,
      submissionId: submission.submissionId || createSubmissionId(),
    }),
  });

  const responseText = await response.text();
  let result: ContactApiResponse;

  try {
    result = JSON.parse(responseText) as ContactApiResponse;
  } catch {
    throw new Error(`The server returned an invalid response (HTTP ${response.status}).`);
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to submit enquiry (HTTP ${response.status}).`);
  }

  return result;
}
