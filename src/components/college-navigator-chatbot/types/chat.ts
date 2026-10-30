export type Language = "en" | "ta" | "ur";
export type Theme = "light" | "dark";

export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  language: Language;
  link?: {
    label: string;
    url: string;
  };
}

export interface FaqEntry {
  id: string;
  category: string;
  keywords: string[];
  question: Record<Language, string>;
  answer: Record<Language, string>;
  link?: {
    label: Record<Language, string>;
    url: string;
  };
}

export interface EnquiryData {
  name: string;
  mobile: string;
  email: string;
  course: string;
  message: string;
}

export const MAX_QUESTIONS = 5;
