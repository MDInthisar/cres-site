import type { Language } from "../types/chat";

export const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ta", label: "தமிழ்", short: "TA" },
  { code: "ur", label: "اردو", short: "UR" },
];

export const RTL_LANGUAGES: Language[] = ["ur"];

type UIKey =
  | "headerTitle"
  | "headerSubtitle"
  | "greeting"
  | "placeholder"
  | "send"
  | "typing"
  | "fallback"
  | "limitReached"
  | "questionsLeft"
  | "downloadPdf"
  | "pdfError"
  | "close"
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
  | "suggestionsTitle"
  | "theme"
  | "conversation";

export const ui: Record<Language, Record<UIKey, string>> = {
  en: {
    headerTitle: "Cres bot",
    headerSubtitle: "Crescent Admission Assistant",
    greeting:
      "Hello! I am the Crescent Admission Assistant. Ask me about our UG & PG programmes, admission, fees, hostel, scholarships or campus facilities.",
    placeholder: "Type your question...",
    send: "Send",
    typing: "Assistant is typing",
    fallback:
      "Sorry, I can only assist with the college information available in my knowledge base.",
    limitReached:
      "You have reached the limit of 5 questions. Please fill the enquiry form below and our team will reach out to you.",
    questionsLeft: "questions left",
    downloadPdf: "Download PDF",
    pdfError: "Could not download the conversation. Please try again.",
    close: "Close chat",
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
    theme: "Toggle theme",
    conversation: "Conversation",
  },
  ta: {
    headerTitle: "நான் உதவலாமா?",
    headerSubtitle: "கிரசன்ட் சேர்க்கை உதவியாளர்",
    greeting:
      "வணக்கம்! நான் கிரசன்ட் சேர்க்கை உதவியாளர். எங்கள் UG & PG படிப்புகள், சேர்க்கை, கட்டணம், விடுதி, உதவித்தொகை பற்றி கேளுங்கள்.",
    placeholder: "உங்கள் கேள்வியை தட்டச்சு செய்யவும்...",
    send: "அனுப்பு",
    typing: "உதவியாளர் தட்டச்சு செய்கிறார்",
    fallback:
      "மன்னிக்கவும், எனது தரவுத்தளத்தில் உள்ள கல்லூரி தகவல்களுக்கு மட்டுமே என்னால் உதவ முடியும்.",
    limitReached: "5 கேள்விகள் வரம்பை அடைந்துவிட்டீர்கள். கீழே உள்ள விசாரணை படிவத்தை நிரப்பவும்.",
    questionsLeft: "கேள்விகள் மீதம்",
    downloadPdf: "PDF பதிவிறக்கம்",
    pdfError: "உரையாடலைப் பதிவிறக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
    close: "அரட்டையை மூடு",
    openChat: "எங்களுடன் அரட்டை",
    enquiryTitle: "விசாரணை படிவம்",
    enquirySubtitle: "தொடர உங்கள் விவரங்களை பகிரவும்.",
    name: "முழு பெயர்",
    mobile: "கைபேசி எண்",
    email: "மின்னஞ்சல்",
    course: "விருப்ப படிப்பு",
    message: "செய்தி",
    submit: "சமர்ப்பித்து தொடரவும்",
    submitting: "சமர்ப்பிக்கிறது...",
    submitted: "நன்றி! உங்கள் விசாரணை பதிவு செய்யப்பட்டது. தொடர்ந்து அரட்டையடிக்கலாம்.",
    required: "இந்த புலம் அவசியம்",
    invalidEmail: "சரியான மின்னஞ்சலை உள்ளிடவும்",
    invalidMobile: "சரியான 10 இலக்க எண்ணை உள்ளிடவும்",
    suggestionsTitle: "இதைக் கேட்டுப் பாருங்கள்",
    theme: "தீம் மாற்று",
    conversation: "உரையாடல்",
  },
  ur: {
    headerTitle: "کیا میں مدد کر سکتا ہوں؟",
    headerSubtitle: "کریسنٹ داخلہ معاون",
    greeting:
      "السلام علیکم! میں کریسنٹ داخلہ معاون ہوں۔ ہمارے UG اور PG پروگرام، داخلہ، فیس، ہاسٹل یا اسکالرشپ کے بارے میں پوچھیں۔",
    placeholder: "اپنا سوال لکھیں...",
    send: "بھیجیں",
    typing: "معاون لکھ رہا ہے",
    fallback: "معذرت، میں صرف اپنے علم میں موجود کالج کی معلومات میں مدد کر سکتا ہوں۔",
    limitReached: "آپ نے 5 سوالات کی حد مکمل کر لی ہے۔ براہ کرم نیچے فارم پُر کریں۔",
    questionsLeft: "سوالات باقی",
    downloadPdf: "پی ڈی ایف ڈاؤن لوڈ",
    pdfError: "گفتگو ڈاؤن لوڈ نہیں ہو سکی۔ دوبارہ کوشش کریں۔",
    close: "چیٹ بند کریں",
    openChat: "ہم سے بات کریں",
    enquiryTitle: "استفسار فارم",
    enquirySubtitle: "جاری رکھنے کے لیے اپنی تفصیلات دیں۔",
    name: "پورا نام",
    mobile: "موبائل نمبر",
    email: "ای میل",
    course: "دلچسپی کا کورس",
    message: "پیغام",
    submit: "جمع کریں اور جاری رکھیں",
    submitting: "جمع ہو رہا ہے...",
    submitted: "شکریہ! آپ کا استفسار محفوظ ہو گیا۔ اب آپ چیٹ جاری رکھ سکتے ہیں۔",
    required: "یہ خانہ ضروری ہے",
    invalidEmail: "درست ای میل درج کریں",
    invalidMobile: "درست 10 ہندسوں کا نمبر درج کریں",
    suggestionsTitle: "یہ پوچھ کر دیکھیں",
    theme: "تھیم تبدیل کریں",
    conversation: "گفتگو",
  },
};

export const suggestions: Record<Language, string[]> = {
  en: ["MBA fees", "MCA eligibility", "Hostel facilities", "Admission process"],
  ta: ["MBA கட்டணம்", "MCA தகுதி", "விடுதி வசதிகள்", "சேர்க்கை நடைமுறை"],
  ur: ["ایم بی اے فیس", "ایم سی اے اہلیت", "ہاسٹل سہولیات", "داخلہ عمل"],
};
