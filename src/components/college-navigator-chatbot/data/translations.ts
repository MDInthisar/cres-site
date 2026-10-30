import type { Language } from "../types/chat";

type UIKey =
  | "headerTitle"
  | "greeting"
  | "placeholder"
  | "send"
  | "typing"
  | "fallback"
  | "openChat"
  | "enquiryTitle"
  | "enquirySubtitle"
  | "name"
  | "mobile"
  | "email"
  | "course"
  | "message"
  | "submit"
  | "submitting"
  | "submitted"
  | "required"
  | "invalidEmail"
  | "invalidMobile"
  | "suggestionsTitle";

export const ui: Record<Language, Record<UIKey, string>> = {
  en: {
    headerTitle: "Crescent Assistant",
    greeting:
      "Hello! I am the Crescent Admission Assistant. Ask me about our UG & PG programmes, admission, fees, hostel, scholarships or campus facilities.",
    placeholder: "Type your question...",
    send: "Send",
    typing: "Assistant is typing",
    fallback:
      "I don't have an answer for that yet — for anything specific, please call +91 97909 53750 or email cdoesupport@crescent.education.",
    openChat: "Chat with us",
    enquiryTitle: "Enquiry Form",
    enquirySubtitle: "Share your details to continue chatting.",
    name: "Full Name",
    mobile: "Mobile Number",
    email: "Email",
    course: "Course Interested In",
    message: "Message",
    submit: "Submit & Continue",
    submitting: "Submitting...",
    submitted: "Thank you! Your enquiry has been recorded. You can continue chatting.",
    required: "This field is required",
    invalidEmail: "Enter a valid email address",
    invalidMobile: "Enter a valid 10-digit mobile number",
    suggestionsTitle: "Try asking",
  },
};

export const suggestions: Record<Language, string[]> = {
  en: ["MBA fees", "MCA eligibility", "Hostel facilities", "Admission process"],
};
