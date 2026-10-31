export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface FaqEntry {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  link?: {
    label: string;
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
