// src/data/collegeKnowledge.ts

import type { FaqEntry } from "../types/chat";

/* =========================================================
   CRESCENT COLLEGE CHATBOT KNOWLEDGE BASE
   100 QUESTIONS
   English + Tamil + Urdu
   ========================================================= */

export const ADMISSION_LINK = "https://odladmission.crescent-institute.edu.in/login/index.php";

export const DUMMY_ENQUIRY_EMAIL = "yourdummyemail@gmail.com";

/* =========================================================
   TYPES
   ========================================================= */

export type BotLanguage = "en" | "ta" | "ur";

export interface BotFaqEntry extends FaqEntry {
  suggestions?: string[];
  link?: {
    label: {
      en: string;
      ta: string;
      ur: string;
    };
    url: string;
  };
}

/* =========================================================
   GREETINGS
   ========================================================= */

export const greetings = [
  "hi",
  "hello",
  "hey",
  "hai",
  "hii",
  "hiii",
  "good morning",
  "good afternoon",
  "good evening",
  "vanakkam",
  "வணக்கம்",
  "ஹாய்",
  "ஹலோ",
  "السلام علیکم",
  "سلام",
];

/* =========================================================
   GREETING RESPONSE
   ========================================================= */

export const greetingResponse = {
  en: "Hello! 👋 I’m Cres Bot, your Crescent Admission Assistant. I can help you with UG & PG courses, admission, eligibility, fees, scholarships, hostel, campus facilities, timings and student services. How can I help you?",
  ta: "வணக்கம்! 👋 நான் Cres Bot, உங்கள் Crescent Admission Assistant. UG & PG படிப்புகள், சேர்க்கை, தகுதி, கட்டணம், உதவித்தொகை, விடுதி, கல்லூரி வசதிகள், நேரங்கள் மற்றும் மாணவர் சேவைகள் பற்றி உதவ முடியும். என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?",
  ur: "السلام علیکم! 👋 میں Cres Bot، آپ کا Crescent Admission Assistant ہوں۔ میں UG اور PG کورسز، داخلہ، اہلیت، فیس، اسکالرشپ، ہاسٹل، کیمپس سہولیات، اوقات اور طلبہ کی خدمات کے بارے میں مدد کر سکتا ہوں۔ آپ کیا جاننا چاہتے ہیں؟",
};

/* =========================================================
   OUT OF SCOPE RESPONSE
   ========================================================= */

export const outOfScopeResponse = {
  en: "Sorry! I can help only with Crescent college-related topics such as courses, admission, eligibility, fees, scholarships, hostel, campus, timings, exams and student services. 🎓",
  ta: "மன்னிக்கவும்! Crescent கல்லூரி தொடர்பான படிப்புகள், சேர்க்கை, தகுதி, கட்டணம், உதவித்தொகை, விடுதி, வளாகம், நேரங்கள், தேர்வுகள் மற்றும் மாணவர் சேவைகள் பற்றிய கேள்விகளுக்கு மட்டுமே நான் உதவ முடியும். 🎓",
  ur: "معذرت! میں صرف Crescent کالج سے متعلق کورسز، داخلہ، اہلیت، فیس، اسکالرشپ، ہاسٹل، کیمپس، اوقات، امتحانات اور طلبہ کی خدمات کے بارے میں مدد کر سکتا ہوں۔ 🎓",
};

/* =========================================================
   FAQ HELPER
   ========================================================= */

function faq(
  id: string,
  category: string,
  keywords: string[],
  question: {
    en: string;
    ta: string;
    ur: string;
  },
  answer: {
    en: string;
    ta: string;
    ur: string;
  },
  suggestions: string[] = [],
  link?: BotFaqEntry["link"],
): BotFaqEntry {
  return {
    id,
    category,
    keywords,
    question,
    answer,
    suggestions,
    ...(link ? { link } : {}),
  };
}

/* =========================================================
   100 QUESTIONS
   ========================================================= */

export const faqs: BotFaqEntry[] = [
  /* =======================================================
     1 - COLLEGE OVERVIEW
     ======================================================= */

  faq(
    "q01-college",
    "College",
    ["college", "about college", "crescent", "institute", "university", "overview"],
    {
      en: "Tell me about the college",
      ta: "கல்லூரி பற்றி சொல்லுங்கள்",
      ur: "کالج کے بارے میں بتائیں",
    },
    {
      en: "B.S. Abdur Rahman Crescent Institute of Science & Technology is a deemed-to-be university offering UG and PG programmes.",
      ta: "பி.எஸ். அப்துர் ரஹ்மான் கிரசன்ட் அறிவியல் மற்றும் தொழில்நுட்ப நிறுவனம் ஒரு டீம்டு பல்கலைக்கழகமாக UG மற்றும் PG படிப்புகளை வழங்குகிறது.",
      ur: "بی ایس عبدالرحمن کریسنٹ انسٹیٹیوٹ آف سائنس اینڈ ٹیکنالوجی ایک ڈیمڈ ٹو بی یونیورسٹی ہے جو UG اور PG پروگرام پیش کرتی ہے.",
    },
    ["What courses are offered?", "Where is the campus located?", "How can I contact the college?"],
  ),

  faq(
    "q02-ugc",
    "College",
    ["ugc", "approved", "recognition", "valid", "recognised"],
    {
      en: "Are the programmes UGC approved?",
      ta: "படிப்புகள் UGC அங்கீகாரம் பெற்றவையா?",
      ur: "کیا پروگرام UGC سے منظور شدہ ہیں؟",
    },
    {
      en: "Yes. The UG and PG distance education programmes in this knowledge base are described as UGC approved.",
      ta: "ஆம். இந்த அறிவுத் தரவுத்தளத்தில் உள்ள UG மற்றும் PG தொலைதூரக் கல்வி படிப்புகள் UGC அங்கீகாரம் பெற்றவை என குறிப்பிடப்பட்டுள்ளது.",
      ur: "جی ہاں۔ اس نالج بیس میں موجود UG اور PG فاصلاتی تعلیم کے پروگرام UGC منظور شدہ بتائے گئے ہیں۔",
    },
    [
      "What courses are offered?",
      "What is the admission process?",
      "Which PG courses are available?",
    ],
  ),

  /* =======================================================
     2 - COURSE LIST
     ======================================================= */

  faq(
    "q03-all-courses",
    "Courses",
    ["courses", "course list", "programmes", "programs", "what courses", "available courses"],
    {
      en: "What courses are offered?",
      ta: "என்ன படிப்புகள் வழங்கப்படுகின்றன?",
      ur: "کون سے کورسز پیش کیے جاتے ہیں؟",
    },
    {
      en: "UG: BA English, BA Islamic Studies and BA Public Policy. PG: MA Islamic Studies, MBA and MCA.",
      ta: "UG: BA ஆங்கிலம், BA இஸ்லாமிய ஆய்வுகள், BA பொதுக் கொள்கை. PG: MA இஸ்லாமிய ஆய்வுகள், MBA மற்றும் MCA.",
      ur: "UG: BA انگریزی، BA اسلامک اسٹڈیز اور BA پبلک پالیسی۔ PG: MA اسلامک اسٹڈیز، MBA اور MCA۔",
    },
    ["UG courses", "PG courses", "Admission process"],
  ),

  faq(
    "q04-ug-courses",
    "UG",
    ["ug", "undergraduate", "bachelor", "ba", "ug courses"],
    {
      en: "Which UG courses are available?",
      ta: "எந்த UG படிப்புகள் உள்ளன?",
      ur: "کون سے UG کورسز دستیاب ہیں؟",
    },
    {
      en: "The UG programmes are BA English, BA Islamic Studies and BA Public Policy. Each programme is 3 years.",
      ta: "UG படிப்புகள் BA ஆங்கிலம், BA இஸ்லாமிய ஆய்வுகள் மற்றும் BA பொதுக் கொள்கை. ஒவ்வொரு படிப்பும் 3 ஆண்டுகள்.",
      ur: "UG پروگرام BA انگریزی، BA اسلامک اسٹڈیز اور BA پبلک پالیسی ہیں۔ ہر پروگرام 3 سال کا ہے۔",
    },
    ["BA English", "BA Islamic Studies", "BA Public Policy", "UG eligibility"],
  ),

  faq(
    "q05-pg-courses",
    "PG",
    ["pg", "postgraduate", "masters", "pg courses", "post graduate"],
    {
      en: "Which PG courses are available?",
      ta: "எந்த PG படிப்புகள் உள்ளன?",
      ur: "کون سے PG کورسز دستیاب ہیں؟",
    },
    {
      en: "The PG programmes are MA Islamic Studies, MBA and MCA. Each is 2 years.",
      ta: "PG படிப்புகள் MA இஸ்லாமிய ஆய்வுகள், MBA மற்றும் MCA. ஒவ்வொன்றும் 2 ஆண்டுகள்.",
      ur: "PG پروگرام MA اسلامک اسٹڈیز، MBA اور MCA ہیں۔ ہر پروگرام 2 سال کا ہے۔",
    },
    ["MBA details", "MCA details", "MA Islamic Studies", "PG eligibility"],
  ),

  /* =======================================================
     3 - BA ENGLISH
     ======================================================= */

  faq(
    "q06-ba-english",
    "UG",
    ["ba english", "english course", "english degree", "english"],
    {
      en: "Tell me about BA English",
      ta: "BA ஆங்கிலம் பற்றி சொல்லுங்கள்",
      ur: "BA انگریزی کے بارے میں بتائیں",
    },
    {
      en: "BA English is a 3 year UG programme covering British and Indian literature, linguistics, communication skills and creative writing.",
      ta: "BA ஆங்கிலம் 3 ஆண்டு UG படிப்பு. பிரிட்டிஷ் மற்றும் இந்திய இலக்கியம், மொழியியல், தகவல் தொடர்பு திறன் மற்றும் படைப்பெழுத்து ஆகியவை இதில் அடங்கும்.",
      ur: "BA انگریزی تین سالہ UG پروگرام ہے جس میں برطانوی و بھارتی ادب، لسانیات، ابلاغی مہارت اور تخلیقی تحریر شامل ہیں۔",
    },
    ["BA English fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q07-ba-english-duration",
    "UG",
    ["ba english duration", "english duration", "english years"],
    {
      en: "How long is BA English?",
      ta: "BA ஆங்கிலம் எத்தனை ஆண்டுகள்?",
      ur: "BA انگریزی کتنے سال کا ہے؟",
    },
    {
      en: "BA English is a 3 year undergraduate programme.",
      ta: "BA ஆங்கிலம் 3 ஆண்டு இளங்கலை படிப்பு.",
      ur: "BA انگریزی 3 سالہ انڈرگریجویٹ پروگرام ہے۔",
    },
    ["BA English fees", "BA English details", "UG eligibility"],
  ),

  faq(
    "q08-ba-english-fees",
    "Fees",
    ["ba english fees", "english fees", "english fee"],
    {
      en: "What are the BA English fees?",
      ta: "BA ஆங்கிலம் கட்டணம் எவ்வளவு?",
      ur: "BA انگریزی کی فیس کتنی ہے؟",
    },
    {
      en: "BA English fee is Rs. 18,000 per year and Rs. 54,000 for the full 3 year programme.",
      ta: "BA ஆங்கிலம் கட்டணம் ஆண்டுக்கு ரூ. 18,000. முழு 3 ஆண்டுகளுக்கு ரூ. 54,000.",
      ur: "BA انگریزی کی فیس 18,000 روپے سالانہ اور مکمل 3 سال کے لیے 54,000 روپے ہے۔",
    },
    ["BA English details", "Fee payment methods", "Scholarships"],
  ),

  faq(
    "q09-ba-english-eligibility",
    "Eligibility",
    ["ba english eligibility", "english eligibility", "english qualification"],
    {
      en: "What is the eligibility for BA English?",
      ta: "BA ஆங்கிலத்திற்கு என்ன தகுதி?",
      ur: "BA انگریزی کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
      ta: "UG தகுதிக்கு அங்கீகரிக்கப்பட்ட வாரியத்தில் 10+2 அல்லது அதற்கு சமமான தேர்வில் தேர்ச்சி பெற்றிருக்க வேண்டும்.",
      ur: "UG اہلیت کے لیے تسلیم شدہ بورڈ سے 10+2 یا مساوی امتحان پاس ہونا ضروری ہے۔",
    },
    ["UG eligibility", "Admission process", "Required documents"],
  ),

  /* =======================================================
     4 - BA ISLAMIC STUDIES
     ======================================================= */

  faq(
    "q10-ba-islamic",
    "UG",
    ["ba islamic", "ba islamic studies", "islamic studies ug"],
    {
      en: "Tell me about BA Islamic Studies",
      ta: "BA இஸ்லாமிய ஆய்வுகள் பற்றி சொல்லுங்கள்",
      ur: "BA اسلامک اسٹڈیز کے بارے میں بتائیں",
    },
    {
      en: "BA Islamic Studies is a 3 year UG programme covering Quran, Hadith, Arabic language, Islamic civilisation and comparative religion.",
      ta: "BA இஸ்லாமிய ஆய்வுகள் 3 ஆண்டு UG படிப்பு. குர்ஆன், ஹதீஸ், அரபு மொழி, இஸ்லாமிய நாகரிகம் மற்றும் ஒப்பீட்டு மதம் ஆகியவை அடங்கும்.",
      ur: "BA اسلامک اسٹڈیز تین سالہ UG پروگرام ہے جس میں قرآن، حدیث، عربی زبان، اسلامی تہذیب اور تقابل ادیان شامل ہیں۔",
    },
    ["BA Islamic Studies fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q11-ba-islamic-duration",
    "UG",
    ["ba islamic duration", "islamic studies duration"],
    {
      en: "How long is BA Islamic Studies?",
      ta: "BA இஸ்லாமிய ஆய்வுகள் எத்தனை ஆண்டுகள்?",
      ur: "BA اسلامک اسٹڈیز کتنے سال کا ہے؟",
    },
    {
      en: "BA Islamic Studies is a 3 year undergraduate programme.",
      ta: "BA இஸ்லாமிய ஆய்வுகள் 3 ஆண்டு இளங்கலை படிப்பு.",
      ur: "BA اسلامک اسٹڈیز 3 سالہ انڈرگریجویٹ پروگرام ہے۔",
    },
    ["BA Islamic Studies fees", "BA Islamic Studies details", "UG eligibility"],
  ),

  faq(
    "q12-ba-islamic-fees",
    "Fees",
    ["ba islamic fees", "islamic studies fees", "ba islamic fee"],
    {
      en: "What are the BA Islamic Studies fees?",
      ta: "BA இஸ்லாமிய ஆய்வுகள் கட்டணம் எவ்வளவு?",
      ur: "BA اسلامک اسٹڈیز کی فیس کتنی ہے؟",
    },
    {
      en: "BA Islamic Studies fee is Rs. 15,000 per year and Rs. 45,000 for the full 3 year programme.",
      ta: "BA இஸ்லாமிய ஆய்வுகள் கட்டணம் ஆண்டுக்கு ரூ. 15,000. முழு 3 ஆண்டுகளுக்கு ரூ. 45,000.",
      ur: "BA اسلامک اسٹڈیز کی فیس 15,000 روپے سالانہ اور مکمل 3 سال کے لیے 45,000 روپے ہے۔",
    },
    ["BA Islamic Studies details", "Scholarships", "Fee payment methods"],
  ),

  faq(
    "q13-ba-islamic-eligibility",
    "Eligibility",
    ["ba islamic eligibility", "islamic studies eligibility"],
    {
      en: "What is the eligibility for BA Islamic Studies?",
      ta: "BA இஸ்லாமிய ஆய்வுகளுக்கான தகுதி என்ன?",
      ur: "BA اسلامک اسٹڈیز کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
      ta: "UG தகுதிக்கு அங்கீகரிக்கப்பட்ட வாரியத்தில் 10+2 அல்லது அதற்கு சமமான தேர்வில் தேர்ச்சி பெற்றிருக்க வேண்டும்.",
      ur: "UG اہلیت کے لیے تسلیم شدہ بورڈ سے 10+2 یا مساوی امتحان پاس ہونا ضروری ہے۔",
    },
    ["UG eligibility", "Admission process", "Required documents"],
  ),

  /* =======================================================
     5 - BA PUBLIC POLICY
     ======================================================= */

  faq(
    "q14-ba-public-policy",
    "UG",
    ["ba public policy", "public policy", "public policy course"],
    {
      en: "Tell me about BA Public Policy",
      ta: "BA பொதுக் கொள்கை பற்றி சொல்லுங்கள்",
      ur: "BA پبلک پالیسی کے بارے میں بتائیں",
    },
    {
      en: "BA Public Policy is a 3 year UG programme covering governance, political science, economics, policy analysis and public administration.",
      ta: "BA பொதுக் கொள்கை 3 ஆண்டு UG படிப்பு. ஆளுகை, அரசியல் அறிவியல், பொருளாதாரம், கொள்கை பகுப்பாய்வு மற்றும் பொது நிர்வாகம் ஆகியவை அடங்கும்.",
      ur: "BA پبلک پالیسی تین سالہ UG پروگرام ہے جس میں گورننس، سیاسیات، معاشیات، پالیسی تجزیہ اور پبلک ایڈمنسٹریشن شامل ہیں۔",
    },
    ["BA Public Policy fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q15-ba-public-policy-duration",
    "UG",
    ["public policy duration", "ba public policy duration"],
    {
      en: "How long is BA Public Policy?",
      ta: "BA பொதுக் கொள்கை எத்தனை ஆண்டுகள்?",
      ur: "BA پبلک پالیسی کتنے سال کا ہے؟",
    },
    {
      en: "BA Public Policy is a 3 year undergraduate programme.",
      ta: "BA பொதுக் கொள்கை 3 ஆண்டு இளங்கலை படிப்பு.",
      ur: "BA پبلک پالیسی 3 سالہ انڈرگریجویٹ پروگرام ہے۔",
    },
    ["BA Public Policy fees", "BA Public Policy details", "UG eligibility"],
  ),

  faq(
    "q16-ba-public-policy-fees",
    "Fees",
    ["public policy fees", "ba public policy fees", "public policy fee"],
    {
      en: "What are the BA Public Policy fees?",
      ta: "BA பொதுக் கொள்கை கட்டணம் எவ்வளவு?",
      ur: "BA پبلک پالیسی کی فیس کتنی ہے؟",
    },
    {
      en: "BA Public Policy fee is Rs. 20,000 per year and Rs. 60,000 for the full 3 year programme.",
      ta: "BA பொதுக் கொள்கை கட்டணம் ஆண்டுக்கு ரூ. 20,000. முழு 3 ஆண்டுகளுக்கு ரூ. 60,000.",
      ur: "BA پبلک پالیسی کی فیس 20,000 روپے سالانہ اور مکمل 3 سال کے لیے 60,000 روپے ہے۔",
    },
    ["BA Public Policy details", "Scholarships", "Fee payment methods"],
  ),

  faq(
    "q17-ba-public-policy-eligibility",
    "Eligibility",
    ["public policy eligibility", "ba public policy eligibility"],
    {
      en: "What is the eligibility for BA Public Policy?",
      ta: "BA பொதுக் கொள்கைக்கான தகுதி என்ன?",
      ur: "BA پبلک پالیسی کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
      ta: "UG தகுதிக்கு அங்கீகரிக்கப்பட்ட வாரியத்தில் 10+2 அல்லது அதற்கு சமமான தேர்வில் தேர்ச்சி பெற்றிருக்க வேண்டும்.",
      ur: "UG اہلیت کے لیے تسلیم شدہ بورڈ سے 10+2 یا مساوی امتحان پاس ہونا ضروری ہے۔",
    },
    ["UG eligibility", "Admission process", "Required documents"],
  ),

  /* =======================================================
     6 - MA ISLAMIC STUDIES
     ======================================================= */

  faq(
    "q18-ma-islamic",
    "PG",
    ["ma islamic", "ma islamic studies", "islamic studies pg"],
    {
      en: "Tell me about MA Islamic Studies",
      ta: "MA இஸ்லாமிய ஆய்வுகள் பற்றி சொல்லுங்கள்",
      ur: "MA اسلامک اسٹڈیز کے بارے میں بتائیں",
    },
    {
      en: "MA Islamic Studies is a 2 year PG programme covering Quranic sciences, Hadith, Islamic history, jurisprudence and contemporary Islamic thought.",
      ta: "MA இஸ்லாமிய ஆய்வுகள் 2 ஆண்டு PG படிப்பு. குர்ஆன் அறிவியல், ஹதீஸ், இஸ்லாமிய வரலாறு, சட்டவியல் மற்றும் சமகால இஸ்லாமிய சிந்தனை ஆகியவை அடங்கும்.",
      ur: "MA اسلامک اسٹڈیز دو سالہ PG پروگرام ہے جس میں علوم قرآن، حدیث، اسلامی تاریخ، فقہ اور معاصر اسلامی فکر شامل ہیں۔",
    },
    ["MA Islamic Studies fees", "PG courses", "Course duration", "Admission process"],
  ),

  faq(
    "q19-ma-islamic-duration",
    "PG",
    ["ma islamic duration", "ma islamic studies duration"],
    {
      en: "How long is MA Islamic Studies?",
      ta: "MA இஸ்லாமிய ஆய்வுகள் எத்தனை ஆண்டுகள்?",
      ur: "MA اسلامک اسٹڈیز کتنے سال کا ہے؟",
    },
    {
      en: "MA Islamic Studies is a 2 year postgraduate programme.",
      ta: "MA இஸ்லாமிய ஆய்வுகள் 2 ஆண்டு முதுநிலை படிப்பு.",
      ur: "MA اسلامک اسٹڈیز 2 سالہ پوسٹ گریجویٹ پروگرام ہے۔",
    },
    ["MA Islamic Studies fees", "PG eligibility", "PG courses"],
  ),

  faq(
    "q20-ma-islamic-fees",
    "Fees",
    ["ma islamic fees", "ma islamic studies fees"],
    {
      en: "What are the MA Islamic Studies fees?",
      ta: "MA இஸ்லாமிய ஆய்வுகள் கட்டணம் எவ்வளவு?",
      ur: "MA اسلامک اسٹڈیز کی فیس کتنی ہے؟",
    },
    {
      en: "MA Islamic Studies fee is Rs. 22,000 per year and Rs. 44,000 for the full programme.",
      ta: "MA இஸ்லாமிய ஆய்வுகள் கட்டணம் ஆண்டுக்கு ரூ. 22,000. முழு படிப்புக்கு ரூ. 44,000.",
      ur: "MA اسلامک اسٹڈیز کی فیس 22,000 روپے سالانہ اور مکمل پروگرام کے لیے 44,000 روپے ہے۔",
    },
    ["MA Islamic Studies details", "PG courses", "Scholarships"],
  ),

  /* =======================================================
     7 - MBA
     ======================================================= */

  faq(
    "q21-mba",
    "PG",
    ["mba", "mba course", "management", "business administration"],
    {
      en: "Tell me about MBA",
      ta: "MBA பற்றி சொல்லுங்கள்",
      ur: "MBA کے بارے میں بتائیں",
    },
    {
      en: "MBA is a 2 year postgraduate programme with specialisations in Finance, Marketing, Human Resource, Systems and Operations Management.",
      ta: "MBA என்பது 2 ஆண்டு முதுநிலை படிப்பு. Finance, Marketing, Human Resource, Systems மற்றும் Operations Management சிறப்புப் பிரிவுகள் உள்ளன.",
      ur: "MBA دو سالہ پوسٹ گریجویٹ پروگرام ہے جس میں Finance، Marketing، Human Resource، Systems اور Operations Management کی تخصصات ہیں۔",
    },
    ["MBA fees", "MBA eligibility", "MBA specialisations", "PG courses"],
  ),

  faq(
    "q22-mba-duration",
    "PG",
    ["mba duration", "mba years", "how long mba"],
    {
      en: "How long is MBA?",
      ta: "MBA எத்தனை ஆண்டுகள்?",
      ur: "MBA کتنے سال کا ہے؟",
    },
    {
      en: "MBA is a 2 year postgraduate programme with 4 semesters.",
      ta: "MBA 2 ஆண்டு முதுநிலை படிப்பு; 4 பருவங்கள் உள்ளன.",
      ur: "MBA دو سالہ پوسٹ گریجویٹ پروگرام ہے جس میں 4 سمسٹر ہیں۔",
    },
    ["MBA fees", "MBA eligibility", "MBA specialisations"],
  ),

  faq(
    "q23-mba-fees",
    "Fees",
    ["mba fees", "mba fee", "mba cost"],
    {
      en: "What are the MBA fees?",
      ta: "MBA கட்டணம் எவ்வளவு?",
      ur: "MBA کی فیس کتنی ہے؟",
    },
    {
      en: "MBA fee is Rs. 25,000 per semester and Rs. 1,00,000 for the full 2 year programme.",
      ta: "MBA கட்டணம் ஒரு செமஸ்டருக்கு ரூ. 25,000. முழு 2 ஆண்டுகளுக்கு ரூ. 1,00,000.",
      ur: "MBA کی فیس فی سمسٹر 25,000 روپے اور پورے 2 سالہ پروگرام کے لیے 1,00,000 روپے ہے۔",
    },
    ["MBA eligibility", "MBA specialisations", "Fee payment methods"],
  ),

  faq(
    "q24-mba-eligibility",
    "Eligibility",
    ["mba eligibility", "mba qualification", "mba eligible"],
    {
      en: "What is the MBA eligibility?",
      ta: "MBA படிப்பிற்கான தகுதி என்ன?",
      ur: "MBA کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "MBA eligibility is a Bachelor's degree of minimum 3 years from a recognised university with at least 50% aggregate marks. Work experience is preferred but not mandatory.",
      ta: "MBA தகுதிக்கு அங்கீகரிக்கப்பட்ட பல்கலைக்கழகத்தில் குறைந்தது 3 ஆண்டு இளங்கலை பட்டமும் 50% மதிப்பெண்களும் தேவை. பணி அனுபவம் விரும்பத்தக்கது, கட்டாயமில்லை.",
      ur: "MBA کے لیے تسلیم شدہ یونیورسٹی سے کم از کم 3 سالہ بیچلر ڈگری اور 50% نمبر درکار ہیں۔ کام کا تجربہ ترجیحی ہے لیکن لازمی نہیں۔",
    },
    ["MBA fees", "MBA specialisations", "Admission process"],
  ),

  faq(
    "q25-mba-specialisations",
    "PG",
    ["mba specialisations", "mba specialization", "finance", "marketing", "hr", "operations"],
    {
      en: "What are the MBA specialisations?",
      ta: "MBA-வில் என்ன specialisations உள்ளன?",
      ur: "MBA میں کون سی تخصصات ہیں؟",
    },
    {
      en: "MBA specialisations include Finance, Marketing, Human Resource Management, Systems and Operations Management.",
      ta: "MBA சிறப்புப் பிரிவுகளில் Finance, Marketing, Human Resource Management, Systems மற்றும் Operations Management உள்ளன.",
      ur: "MBA کی تخصصات میں Finance، Marketing، Human Resource Management، Systems اور Operations Management شامل ہیں۔",
    },
    ["MBA fees", "MBA eligibility", "PG courses"],
  ),

  /* =======================================================
     8 - MCA
     ======================================================= */

  faq(
    "q26-mca",
    "PG",
    ["mca", "mca course", "computer applications"],
    {
      en: "Tell me about MCA",
      ta: "MCA பற்றி சொல்லுங்கள்",
      ur: "MCA کے بارے میں بتائیں",
    },
    {
      en: "MCA is a 2 year postgraduate programme in Computer Applications covering programming, databases, web technologies, cloud and a final semester project.",
      ta: "MCA என்பது 2 ஆண்டு முதுநிலை படிப்பு. Programming, databases, web technologies, cloud மற்றும் final semester project ஆகியவை அடங்கும்.",
      ur: "MCA دو سالہ پوسٹ گریجویٹ پروگرام ہے جس میں programming، databases، web technologies، cloud اور final semester project شامل ہیں۔",
    },
    ["MCA fees", "MCA eligibility", "Course duration", "PG courses"],
  ),

  faq(
    "q27-mca-duration",
    "PG",
    ["mca duration", "mca years", "how long mca"],
    {
      en: "How long is MCA?",
      ta: "MCA எத்தனை ஆண்டுகள்?",
      ur: "MCA کتنے سال کا ہے؟",
    },
    {
      en: "MCA is a 2 year postgraduate programme with 4 semesters.",
      ta: "MCA 2 ஆண்டு முதுநிலை படிப்பு; 4 பருவங்கள் உள்ளன.",
      ur: "MCA دو سالہ پوسٹ گریجویٹ پروگرام ہے جس میں 4 سمسٹر ہیں۔",
    },
    ["MCA fees", "MCA eligibility", "MCA details"],
  ),

  faq(
    "q28-mca-fees",
    "Fees",
    ["mca fees", "mca fee", "mca cost"],
    {
      en: "What are the MCA fees?",
      ta: "MCA கட்டணம் எவ்வளவு?",
      ur: "MCA کی فیس کتنی ہے؟",
    },
    {
      en: "MCA fee is Rs. 20,000 per semester and Rs. 80,000 for the full 2 year programme. Exam fees are separate.",
      ta: "MCA கட்டணம் ஒரு செமஸ்டருக்கு ரூ. 20,000. முழு 2 ஆண்டுகளுக்கு ரூ. 80,000. தேர்வுக் கட்டணம் தனியாகும்.",
      ur: "MCA کی فیس فی سمسٹر 20,000 روپے اور پورے 2 سالہ پروگرام کے لیے 80,000 روپے ہے۔ امتحانی فیس الگ ہے۔",
    },
    ["MCA eligibility", "Fee payment methods", "PG courses"],
  ),

  faq(
    "q29-mca-eligibility",
    "Eligibility",
    ["mca eligibility", "mca qualification", "mca eligible", "maths mca"],
    {
      en: "What is the MCA eligibility?",
      ta: "MCA படிப்பிற்கான தகுதி என்ன?",
      ur: "MCA کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "MCA eligibility is a Bachelor's degree of minimum 3 years with Mathematics at 10+2 or graduate level and at least 50% aggregate marks.",
      ta: "MCA தகுதிக்கு குறைந்தது 3 ஆண்டு இளங்கலை பட்டம், 10+2 அல்லது பட்டப்படிப்பில் Mathematics மற்றும் குறைந்தது 50% மதிப்பெண் தேவை.",
      ur: "MCA کے لیے کم از کم 3 سالہ بیچلر ڈگری، 10+2 یا گریجویشن میں Mathematics اور کم از کم 50% نمبر درکار ہیں۔",
    },
    ["MCA fees", "Admission process", "Required documents"],
  ),

  /* =======================================================
     9 - ADMISSION
     ======================================================= */

  faq(
    "q30-admission-process",
    "Admission",
    ["admission", "admission process", "how to join", "join", "enroll", "enrol"],
    {
      en: "What is the admission process?",
      ta: "சேர்க்கை நடைமுறை என்ன?",
      ur: "داخلہ کا طریقہ کار کیا ہے؟",
    },
    {
      en: "The admission process includes online application, document upload, application fee payment, eligibility verification and enrolment.",
      ta: "சேர்க்கை நடைமுறையில் ஆன்லைன் விண்ணப்பம், ஆவணப் பதிவேற்றம், விண்ணப்பக் கட்டணம், தகுதி சரிபார்ப்பு மற்றும் சேர்க்கை ஆகியவை அடங்கும்.",
      ur: "داخلہ کے عمل میں آن لائن درخواست، دستاویزات اپلوڈ، درخواست فیس، اہلیت کی تصدیق اور انرولمنٹ شامل ہیں۔",
    },
    ["How do I apply?", "Required documents", "Application fee", "Admission dates"],
    {
      label: {
        en: "Apply Now",
        ta: "இப்போதே விண்ணப்பிக்கவும்",
        ur: "ابھی درخواست دیں",
      },
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q31-apply-online",
    "Admission",
    ["apply", "apply online", "online application", "application form", "register"],
    {
      en: "How do I apply online?",
      ta: "ஆன்லைனில் எப்படி விண்ணப்பிப்பது?",
      ur: "آن لائن درخواست کیسے دیں؟",
    },
    {
      en: "Click Apply Now, register with your mobile number and email, complete the application form, upload documents and pay the application fee online.",
      ta: "Apply Now என்பதை அழுத்தி, கைபேசி எண் மற்றும் மின்னஞ்சலுடன் பதிவு செய்து, விண்ணப்பத்தை நிரப்பி, ஆவணங்களை பதிவேற்றி, விண்ணப்பக் கட்டணத்தை ஆன்லைனில் செலுத்தவும்.",
      ur: "Apply Now پر کلک کریں، موبائل نمبر اور ای میل سے رجسٹر کریں، فارم مکمل کریں، دستاویزات اپلوڈ کریں اور درخواست فیس آن لائن ادا کریں۔",
    },
    ["Admission process", "Required documents", "Application fee"],
    {
      label: {
        en: "Apply Now",
        ta: "இப்போதே விண்ணப்பிக்கவும்",
        ur: "ابھی درخواست دیں",
      },
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q32-admission-open",
    "Admission",
    ["admission open", "admissions open", "when admission", "admission date", "2026 admission"],
    {
      en: "When do admissions open?",
      ta: "சேர்க்கை எப்போது தொடங்கும்?",
      ur: "داخلے کب کھلتے ہیں؟",
    },
    {
      en: "According to the current knowledge base, admissions for the 2026-2027 academic year are open. The July cycle closes on 31 July and the January cycle closes on 31 January.",
      ta: "தற்போதைய அறிவுத் தரவின்படி 2026-2027 கல்வியாண்டு சேர்க்கை திறந்துள்ளது. ஜூலை சுழற்சி ஜூலை 31-லும், ஜனவரி சுழற்சி ஜனவரி 31-லும் முடிவடைகிறது.",
      ur: "موجودہ نالج بیس کے مطابق 2026-2027 تعلیمی سال کے داخلے کھلے ہیں۔ جولائی سائیکل 31 جولائی اور جنوری سائیکل 31 جنوری کو بند ہوتا ہے۔",
    },
    ["Admission process", "Apply Now", "Required documents"],
    {
      label: {
        en: "Apply Now",
        ta: "இப்போதே விண்ணப்பிக்கவும்",
        ur: "ابھی درخواست دیں",
      },
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q33-documents",
    "Admission",
    ["documents", "required documents", "certificates", "mark sheet", "upload documents"],
    {
      en: "What documents are required?",
      ta: "என்ன ஆவணங்கள் தேவை?",
      ur: "کون سی دستاویزات درکار ہیں؟",
    },
    {
      en: "Required documents include 10th and 12th mark sheets, degree certificate and consolidated marks for PG, transfer certificate, ID proof, passport-size photo and community certificate if applicable.",
      ta: "தேவையான ஆவணங்களில் 10 மற்றும் 12ஆம் வகுப்பு மதிப்பெண் பட்டியல், PG-க்கு பட்டச் சான்றிதழ் மற்றும் consolidated marks, transfer certificate, அடையாளச் சான்று, passport size photo மற்றும் தேவையானால் community certificate ஆகியவை அடங்கும்.",
      ur: "درکار دستاویزات میں 10ویں اور 12ویں کی مارک شیٹس، PG کے لیے ڈگری سرٹیفکیٹ اور consolidated marks، transfer certificate، شناختی ثبوت، پاسپورٹ سائز تصویر اور ضرورت پڑنے پر community certificate شامل ہیں۔",
    },
    ["Admission process", "How do I apply?", "Application fee"],
  ),

  faq(
    "q34-application-fee",
    "Admission",
    ["application fee", "application fees", "registration fee", "500 fee"],
    {
      en: "What is the application fee?",
      ta: "விண்ணப்பக் கட்டணம் எவ்வளவு?",
      ur: "درخواست فیس کتنی ہے؟",
    },
    {
      en: "The application fee mentioned in the knowledge base is Rs. 500.",
      ta: "அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ள விண்ணப்பக் கட்டணம் ரூ. 500.",
      ur: "نالج بیس میں درخواست فیس 500 روپے بتائی گئی ہے۔",
    },
    ["How do I apply?", "Admission process", "Fee payment methods"],
  ),

  faq(
    "q35-entrance-exam",
    "Admission",
    ["entrance exam", "entrance test", "exam for admission", "admission test"],
    {
      en: "Is there an entrance exam?",
      ta: "நுழைவுத் தேர்வு உள்ளதா?",
      ur: "کیا داخلہ امتحان ہوتا ہے؟",
    },
    {
      en: "For the distance education programmes described in the knowledge base, there is no entrance exam. Admission is based on qualifying examination merit and document verification.",
      ta: "அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ள தொலைதூரக் கல்வி படிப்புகளுக்கு நுழைவுத் தேர்வு இல்லை. தகுதித் தேர்வு மதிப்பெண் மற்றும் ஆவண சரிபார்ப்பு அடிப்படையில் சேர்க்கை நடைபெறும்.",
      ur: "نالج بیس میں بیان کردہ فاصلاتی پروگرامز کے لیے کوئی داخلہ امتحان نہیں ہے۔ داخلہ کوالیفائنگ امتحان کی میرٹ اور دستاویزات کی تصدیق پر مبنی ہے۔",
    },
    ["Admission process", "Eligibility", "Required documents"],
  ),

  /* =======================================================
     10 - UG / PG ELIGIBILITY
     ======================================================= */

  faq(
    "q36-ug-eligibility",
    "Eligibility",
    ["ug eligibility", "12th eligibility", "hsc", "plus two", "10+2"],
    {
      en: "What is the UG eligibility?",
      ta: "UG படிப்புகளுக்கான தகுதி என்ன?",
      ur: "UG کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
      ta: "UG தகுதிக்கு அங்கீகரிக்கப்பட்ட வாரியத்தில் 10+2 அல்லது அதற்கு சமமான தேர்வில் தேர்ச்சி பெற்றிருக்க வேண்டும்.",
      ur: "UG اہلیت کے لیے تسلیم شدہ بورڈ سے 10+2 یا مساوی امتحان پاس ہونا ضروری ہے۔",
    },
    ["UG courses", "Admission process", "Required documents"],
  ),

  faq(
    "q37-pg-eligibility",
    "Eligibility",
    ["pg eligibility", "postgraduate eligibility", "masters eligibility"],
    {
      en: "What is the PG eligibility?",
      ta: "PG படிப்புகளுக்கான தகுதி என்ன?",
      ur: "PG کے لیے اہلیت کیا ہے؟",
    },
    {
      en: "PG eligibility depends on the programme. MBA requires a recognised Bachelor's degree with at least 50% marks. MCA requires a minimum 3 year Bachelor's degree with Mathematics and at least 50% marks.",
      ta: "PG தகுதி படிப்பைப் பொறுத்தது. MBA-க்கு அங்கீகரிக்கப்பட்ட இளங்கலை பட்டம் மற்றும் குறைந்தது 50% மதிப்பெண் தேவை. MCA-க்கு குறைந்தது 3 ஆண்டு இளங்கலை பட்டம், Mathematics மற்றும் குறைந்தது 50% தேவை.",
      ur: "PG اہلیت پروگرام کے مطابق ہے۔ MBA کے لیے تسلیم شدہ بیچلر ڈگری اور کم از کم 50% نمبر درکار ہیں۔ MCA کے لیے کم از کم 3 سالہ بیچلر ڈگری، Mathematics اور کم از کم 50% نمبر درکار ہیں۔",
    },
    ["MBA eligibility", "MCA eligibility", "PG courses"],
  ),

  /* =======================================================
     11 - FEES
     ======================================================= */

  faq(
    "q38-fee-structure",
    "Fees",
    ["fees", "fee structure", "course fees", "total fees", "tuition fees"],
    {
      en: "What is the fee structure?",
      ta: "கட்டண அமைப்பு என்ன?",
      ur: "فیس اسٹرکچر کیا ہے؟",
    },
    {
      en: "MBA tuition is Rs. 25,000 per semester, MCA tuition is Rs. 20,000 per semester, and BA Islamic Studies tuition is Rs. 15,000 per year. Other programme fees vary.",
      ta: "MBA கல்விக் கட்டணம் ஒரு செமஸ்டருக்கு ரூ. 25,000; MCA கல்விக் கட்டணம் ஒரு செமஸ்டருக்கு ரூ. 20,000; BA Islamic Studies கல்விக் கட்டணம் ஆண்டுக்கு ரூ. 15,000. பிற படிப்புகளின் கட்டணங்கள் மாறுபடும்.",
      ur: "MBA کی ٹیوشن فیس فی سمسٹر 25,000 روپے، MCA کی فی سمسٹر 20,000 روپے، اور BA اسلامیات کی فی سال 15,000 روپے ہے۔ دیگر پروگراموں کی فیس مختلف ہے۔",
    },
    ["MBA fees", "MCA fees", "BA English fees", "Scholarships"],
  ),

  faq(
    "q39-fee-payment",
    "Fees",
    ["fee payment", "payment methods", "upi", "card", "net banking", "installment"],
    {
      en: "How can I pay the fees?",
      ta: "கட்டணத்தை எப்படி செலுத்தலாம்?",
      ur: "فیس کیسے ادا کر سکتے ہیں؟",
    },
    {
      en: "Fees can be paid online through UPI, debit or credit card and net banking. Demand draft is also mentioned as an offline option. Semester-wise instalments are permitted.",
      ta: "UPI, debit/credit card, net banking மூலம் ஆன்லைனில் கட்டணம் செலுத்தலாம். Offline-ல் Demand Draft மூலமும் செலுத்தலாம். Semester-wise instalment வசதியும் உள்ளது.",
      ur: "فیس UPI، debit/credit card اور net banking کے ذریعے آن لائن ادا کی جا سکتی ہے۔ Demand Draft بھی ایک offline option ہے۔ Semester-wise instalments کی اجازت ہے۔",
    },
    ["Fee structure", "Scholarships", "Admission process"],
  ),

  faq(
    "q40-fee-refund",
    "Fees",
    ["refund", "fee refund", "cancel admission", "withdraw"],
    {
      en: "What is the fee refund policy?",
      ta: "கட்டண refund policy என்ன?",
      ur: "فیس ریفنڈ پالیسی کیا ہے؟",
    },
    {
      en: "The knowledge base states that refunds follow UGC norms. The application fee is non-refundable.",
      ta: "கட்டண refund UGC விதிமுறைகளைப் பின்பற்றும் என அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது. விண்ணப்பக் கட்டணம் திரும்ப வழங்கப்படாது.",
      ur: "نالج بیس کے مطابق refund UGC norms کے مطابق ہے۔ درخواست فیس واپس نہیں کی جاتی۔",
    },
    ["Fee payment methods", "Admission process", "Contact college"],
  ),

  /* =======================================================
     12 - SCHOLARSHIPS
     ======================================================= */

  faq(
    "q41-scholarship",
    "Scholarship",
    ["scholarship", "merit scholarship", "financial aid", "discount"],
    {
      en: "Are scholarships available?",
      ta: "உதவித்தொகை உள்ளதா?",
      ur: "کیا اسکالرشپ دستیاب ہے؟",
    },
    {
      en: "Yes. The knowledge base mentions merit scholarships of up to 25% of tuition for students scoring above 80% in the qualifying examination.",
      ta: "ஆம். தகுதித் தேர்வில் 80%-க்கு மேல் மதிப்பெண் பெறும் மாணவர்களுக்கு tuition fee-ல் 25% வரை merit scholarship இருப்பதாக அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது.",
      ur: "جی ہاں۔ نالج بیس کے مطابق qualifying examination میں 80% سے زیادہ نمبر حاصل کرنے والے طلبہ کے لیے tuition fee میں 25% تک merit scholarship ہے۔",
    },
    ["Who is eligible for scholarship?", "Government scholarship", "Required documents"],
  ),

  faq(
    "q42-government-scholarship",
    "Scholarship",
    ["government scholarship", "nsp", "minority scholarship", "sc st scholarship"],
    {
      en: "Is government scholarship support available?",
      ta: "அரசு உதவித்தொகை ஆதரவு உள்ளதா?",
      ur: "کیا سرکاری اسکالرشپ کی سہولت ہے؟",
    },
    {
      en: "The scholarship cell assists students with National Scholarship Portal, minority and SC/ST state scholarship applications.",
      ta: "National Scholarship Portal, minority மற்றும் SC/ST மாநில உதவித்தொகை விண்ணப்பங்களில் scholarship cell மாணவர்களுக்கு உதவுகிறது.",
      ur: "Scholarship cell National Scholarship Portal، minority اور SC/ST state scholarships کے لیے طلبہ کی مدد کرتا ہے۔",
    },
    ["Scholarships", "Scholarship documents", "Admission process"],
  ),

  /* =======================================================
     13 - HOSTEL
     ======================================================= */

  faq(
    "q43-hostel",
    "Hostel",
    ["hostel", "accommodation", "stay", "room", "residence"],
    {
      en: "Is hostel accommodation available?",
      ta: "விடுதி வசதி உள்ளதா?",
      ur: "کیا ہاسٹل کی سہولت ہے؟",
    },
    {
      en: "Yes. Separate hostels for men and women are available with furnished rooms, Wi-Fi, dining, laundry, 24x7 security and a resident warden.",
      ta: "ஆம். ஆண்கள் மற்றும் பெண்களுக்கு தனித்தனி விடுதிகள் உள்ளன. Furnished rooms, Wi-Fi, dining, laundry, 24x7 security மற்றும் resident warden வசதி உள்ளது.",
      ur: "جی ہاں۔ مرد اور خواتین کے لیے الگ ہاسٹل ہیں، جن میں furnished rooms، Wi-Fi، dining، laundry، 24x7 security اور resident warden موجود ہیں۔",
    },
    ["Hostel fees", "Hostel rules", "Campus facilities"],
  ),

  faq(
    "q44-hostel-fees",
    "Hostel",
    ["hostel fees", "hostel fee", "hostel cost", "ac hostel", "non ac hostel"],
    {
      en: "What are the hostel fees?",
      ta: "விடுதி கட்டணம் எவ்வளவு?",
      ur: "ہاسٹل کی فیس کتنی ہے؟",
    },
    {
      en: "Hostel charges are Rs. 65,000 per year for AC and Rs. 48,000 per year for non-AC, including mess. A refundable caution deposit of Rs. 5,000 applies.",
      ta: "AC விடுதி ஆண்டுக்கு ரூ.65,000; non-AC ஆண்டுக்கு ரூ.48,000. Mess இதில் அடங்கும். ரூ.5,000 refundable caution deposit உள்ளது.",
      ur: "AC ہاسٹل 65,000 روپے سالانہ اور non-AC ہاسٹل 48,000 روپے سالانہ ہے، mess سمیت۔ 5,000 روپے refundable caution deposit ہے۔",
    },
    ["Hostel facilities", "Hostel rules", "Admission process"],
  ),

  faq(
    "q45-hostel-rules",
    "Hostel",
    ["hostel rules", "hostel timing", "curfew", "hostel discipline"],
    {
      en: "What are the hostel rules?",
      ta: "விடுதி விதிகள் என்ன?",
      ur: "ہاسٹل کے قواعد کیا ہیں؟",
    },
    {
      en: "The hostel gate closes at 9:30 PM. Biometric attendance is compulsory. Ragging and smoking are prohibited. Visitors are allowed only in the visitors' lounge.",
      ta: "விடுதி gate இரவு 9:30 மணிக்கு மூடப்படும். Biometric attendance கட்டாயம். Ragging மற்றும் smoking தடை. Visitors lounge-ல் மட்டும் visitors அனுமதிக்கப்படுவர்.",
      ur: "ہاسٹل گیٹ رات 9:30 بجے بند ہوتا ہے۔ Biometric attendance لازمی ہے۔ Ragging اور smoking ممنوع ہیں۔ Visitors صرف visitors' lounge میں آ سکتے ہیں۔",
    },
    ["Hostel fees", "Hostel facilities", "College timings"],
  ),

  /* =======================================================
     14 - CAMPUS
     ======================================================= */

  faq(
    "q46-facilities",
    "Campus",
    ["facilities", "campus facilities", "amenities", "labs", "sports", "gym", "wifi"],
    {
      en: "What facilities are available?",
      ta: "என்ன கல்லூரி வசதிகள் உள்ளன?",
      ur: "کون سی کیمپس سہولیات دستیاب ہیں؟",
    },
    {
      en: "Facilities include smart classrooms, computer and research labs, digital library, Wi-Fi campus, sports grounds, gymnasium, prayer hall, medical centre, canteen and auditorium.",
      ta: "Smart classrooms, computer and research labs, digital library, Wi-Fi campus, sports grounds, gymnasium, prayer hall, medical centre, canteen மற்றும் auditorium ஆகிய வசதிகள் உள்ளன.",
      ur: "سہولیات میں smart classrooms، computer and research labs، digital library، Wi-Fi campus، sports grounds، gymnasium، prayer hall، medical centre، canteen اور auditorium شامل ہیں۔",
    },
    ["Hostel facilities", "Library", "Transport"],
  ),

  faq(
    "q47-campus-location",
    "Campus",
    ["campus", "location", "address", "where", "vandalur", "chennai"],
    {
      en: "Where is the campus located?",
      ta: "கல்லூரி வளாகம் எங்கு உள்ளது?",
      ur: "کیمپس کہاں واقع ہے؟",
    },
    {
      en: "The campus is located at Vandalur, GST Road, Chennai - 600048, Tamil Nadu.",
      ta: "கல்லூரி வளாகம் Vandalur, GST Road, Chennai - 600048, Tamil Nadu-ல் உள்ளது.",
      ur: "کیمپس Vandalur، GST Road، Chennai - 600048، Tamil Nadu میں واقع ہے۔",
    },
    ["Transport facility", "Hostel", "College facilities"],
  ),

  /* =======================================================
     15 - LIBRARY
     ======================================================= */

  faq(
    "q48-library",
    "Library",
    ["library", "books", "digital library", "journals", "ebooks"],
    {
      en: "Tell me about the library",
      ta: "நூலகம் பற்றி சொல்லுங்கள்",
      ur: "لائبریری کے بارے میں بتائیں",
    },
    {
      en: "The central library has over 90,000 books, national and international journals, e-books and access to DELNET and N-LIST digital resources.",
      ta: "மைய நூலகத்தில் 90,000-க்கும் மேற்பட்ட புத்தகங்கள், தேசிய மற்றும் சர்வதேச journals, e-books மற்றும் DELNET, N-LIST digital resources உள்ளன.",
      ur: "مرکزی لائبریری میں 90,000 سے زیادہ کتابیں، قومی و بین الاقوامی journals، e-books اور DELNET و N-LIST digital resources دستیاب ہیں۔",
    },
    ["Campus facilities", "Online study material", "College timings"],
  ),

  faq(
    "q49-library-timing",
    "Library",
    ["library timing", "library hours", "library open"],
    {
      en: "What are the library timings?",
      ta: "நூலக நேரம் என்ன?",
      ur: "لائبریری کے اوقات کیا ہیں؟",
    },
    {
      en: "The knowledge base states that the library is open from 8:30 AM to 8:00 PM on working days.",
      ta: "வேலை நாட்களில் நூலகம் காலை 8:30 முதல் இரவு 8:00 வரை திறந்திருக்கும் என அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس کے مطابق کام کے دنوں میں لائبریری صبح 8:30 سے رات 8:00 بجے تک کھلی رہتی ہے۔",
    },
    ["Library facilities", "College timings", "Campus facilities"],
  ),

  /* =======================================================
     16 - ONLINE LEARNING
     ======================================================= */

  faq(
    "q50-online-study",
    "Academic",
    ["online study", "study material", "lms", "recorded classes", "online classes"],
    {
      en: "Is study material provided online?",
      ta: "படிப்பு பொருட்கள் ஆன்லைனில் கிடைக்குமா?",
      ur: "کیا مطالعاتی مواد آن لائن ملتا ہے؟",
    },
    {
      en: "Yes. Enrolled students get LMS access with self-learning material, recorded video lectures, assignments and previous question papers.",
      ta: "ஆம். சேர்ந்த மாணவர்களுக்கு LMS access, self-learning material, recorded video lectures, assignments மற்றும் previous question papers கிடைக்கும்.",
      ur: "جی ہاں۔ داخلہ لینے والے طلبہ کو LMS access، self-learning material، recorded video lectures، assignments اور previous question papers ملتے ہیں۔",
    },
    ["LMS", "Attendance", "Exam pattern"],
  ),

  /* =======================================================
     17 - TRANSPORT
     ======================================================= */

  faq(
    "q51-transport",
    "Transport",
    ["transport", "bus", "college bus", "travel", "commute"],
    {
      en: "Is transport available?",
      ta: "போக்குவரத்து வசதி உள்ளதா?",
      ur: "کیا ٹرانسپورٹ دستیاب ہے؟",
    },
    {
      en: "Yes. College buses operate on major Chennai routes including Tambaram, Guindy, T. Nagar, Poonamallee and Chengalpattu.",
      ta: "ஆம். Tambaram, Guindy, T. Nagar, Poonamallee மற்றும் Chengalpattu உள்ளிட்ட முக்கிய சென்னை வழித்தடங்களில் கல்லூரி பேருந்துகள் இயங்குகின்றன.",
      ur: "جی ہاں۔ کالج بسیں Tambaram، Guindy، T. Nagar، Poonamallee اور Chengalpattu سمیت بڑے Chennai routes پر چلتی ہیں۔",
    },
    ["Transport fees", "Campus location", "Hostel"],
  ),

  faq(
    "q52-transport-fees",
    "Transport",
    ["transport fees", "bus fees", "transport fee"],
    {
      en: "What are the transport fees?",
      ta: "போக்குவரத்து கட்டணம் எவ்வளவு?",
      ur: "ٹرانسپورٹ فیس کتنی ہے؟",
    },
    {
      en: "Annual transport fee ranges from Rs. 12,000 to Rs. 20,000 depending on distance.",
      ta: "தூரத்தைப் பொறுத்து ஆண்டு போக்குவரத்து கட்டணம் ரூ.12,000 முதல் ரூ.20,000 வரை இருக்கும்.",
      ur: "فاصلے کے مطابق سالانہ ٹرانسپورٹ فیس 12,000 سے 20,000 روپے تک ہے۔",
    },
    ["Transport facility", "Campus location", "Fee structure"],
  ),

  /* =======================================================
     18 - ACADEMIC
     ======================================================= */

  faq(
    "q53-academic-calendar",
    "Academic",
    ["academic calendar", "semester", "session", "academic year"],
    {
      en: "What is the academic calendar?",
      ta: "கல்வி நாட்காட்டி என்ன?",
      ur: "تعلیمی کیلنڈر کیا ہے؟",
    },
    {
      en: "There are two sessions: July-December and January-June. Semester examinations are held in November-December and May-June.",
      ta: "இரண்டு sessions உள்ளன: July-December மற்றும் January-June. Semester exams November-December மற்றும் May-June மாதங்களில் நடைபெறும்.",
      ur: "دو sessions ہیں: July-December اور January-June۔ Semester exams November-December اور May-June میں ہوتے ہیں۔",
    },
    ["Exam pattern", "Exam centres", "College timings"],
  ),

  faq(
    "q54-exam-pattern",
    "Academic",
    ["exam pattern", "examination", "assessment", "marks", "passing"],
    {
      en: "What is the examination pattern?",
      ta: "தேர்வு முறை என்ன?",
      ur: "امتحانی طریقہ کیا ہے؟",
    },
    {
      en: "Assessment is 25% internal assignments and 75% end-semester examination. The knowledge base states minimum pass marks of 50% for PG and 40% for UG.",
      ta: "மதிப்பீடு 25% internal assignments மற்றும் 75% end-semester examination ஆகும். PG-க்கு 50% மற்றும் UG-க்கு 40% minimum pass marks என குறிப்பிடப்பட்டுள்ளது.",
      ur: "Assessment میں 25% internal assignments اور 75% end-semester examination ہے۔ PG کے لیے 50% اور UG کے لیے 40% minimum pass marks بتائے گئے ہیں۔",
    },
    ["Academic calendar", "Exam centres", "Attendance"],
  ),

  faq(
    "q55-exam-centres",
    "Academic",
    ["exam centre", "exam center", "exam venue", "where exams"],
    {
      en: "Where are exams conducted?",
      ta: "தேர்வுகள் எங்கு நடக்கும்?",
      ur: "امتحانات کہاں ہوتے ہیں؟",
    },
    {
      en: "Examinations are conducted at the main campus and designated learner support centres across Tamil Nadu. Hall tickets are issued through the LMS.",
      ta: "தேர்வுகள் main campus மற்றும் தமிழ்நாடு முழுவதும் உள்ள designated learner support centres-ல் நடைபெறும். Hall tickets LMS மூலம் வழங்கப்படும்.",
      ur: "امتحانات main campus اور Tamil Nadu کے designated learner support centres میں ہوتے ہیں۔ Hall tickets LMS کے ذریعے جاری ہوتے ہیں۔",
    },
    ["Exam pattern", "Academic calendar", "LMS"],
  ),

  /* =======================================================
     19 - TIMINGS
     ======================================================= */

  faq(
    "q56-office-timing",
    "Contact",
    ["office timing", "office timings", "admission office", "office hours"],
    {
      en: "What are the office timings?",
      ta: "அலுவலக நேரம் என்ன?",
      ur: "دفتری اوقات کیا ہیں؟",
    },
    {
      en: "The admission office is open Monday to Saturday from 9:00 AM to 5:00 PM. Sundays and public holidays are closed. Online applications are available 24x7.",
      ta: "சேர்க்கை அலுவலகம் திங்கள் முதல் சனி வரை காலை 9:00 முதல் மாலை 5:00 வரை திறந்திருக்கும். ஞாயிறு மற்றும் பொது விடுமுறைகளில் மூடப்படும். Online application 24x7 கிடைக்கும்.",
      ur: "داخلہ دفتر پیر تا ہفتہ صبح 9:00 سے شام 5:00 تک کھلا رہتا ہے۔ اتوار اور public holidays بند ہوتے ہیں۔ Online applications 24x7 دستیاب ہیں۔",
    },
    ["Admission process", "Apply Now", "Contact college"],
  ),

  faq(
    "q57-college-time",
    "Contact",
    ["college time", "college timings", "working time", "working hours"],
    {
      en: "What are the college working timings?",
      ta: "கல்லூரி வேலை நேரம் என்ன?",
      ur: "کالج کے اوقات کیا ہیں؟",
    },
    {
      en: "For admission-related office support, the knowledge base states Monday to Saturday, 9:00 AM to 5:00 PM. Online applications can be submitted 24x7.",
      ta: "சேர்க்கை அலுவலக support-க்கு திங்கள் முதல் சனி வரை காலை 9:00 முதல் மாலை 5:00 வரை நேரம் குறிப்பிடப்பட்டுள்ளது. Online application 24x7 செய்யலாம்.",
      ur: "داخلہ دفتر کے لیے نالج بیس میں پیر تا ہفتہ صبح 9:00 سے شام 5:00 تک اوقات دیے گئے ہیں۔ Online application 24x7 کیا جا سکتا ہے۔",
    },
    ["Admission office timings", "Admission process", "Contact college"],
  ),

  /* =======================================================
     20 - LANGUAGE
     ======================================================= */

  faq(
    "q58-medium",
    "Academic",
    ["medium", "language", "medium of instruction", "teaching language", "english medium"],
    {
      en: "What is the medium of instruction?",
      ta: "பயிற்று மொழி என்ன?",
      ur: "ذریعہ تعلیم کیا ہے؟",
    },
    {
      en: "The medium of instruction and examination is English for all programmes, except Islamic Studies papers that may include Arabic and Urdu texts.",
      ta: "அனைத்து படிப்புகளுக்கும் பயிற்று மற்றும் தேர்வு மொழி English. Islamic Studies papers-ல் Arabic மற்றும் Urdu texts இடம்பெறலாம்.",
      ur: "تمام پروگرامز میں ذریعہ تعلیم اور امتحان English ہے، جبکہ Islamic Studies papers میں Arabic اور Urdu texts شامل ہو سکتے ہیں۔",
    },
    ["UG courses", "PG courses", "BA Islamic Studies"],
  ),

  /* =======================================================
     21 - ATTENDANCE
     ======================================================= */

  faq(
    "q59-attendance",
    "Academic",
    ["attendance", "classes", "contact classes", "weekend classes"],
    {
      en: "Is attendance compulsory?",
      ta: "வருகை கட்டாயமா?",
      ur: "کیا حاضری لازمی ہے؟",
    },
    {
      en: "Distance education students must attend at least 75% of scheduled weekend contact classes or complete equivalent recorded sessions on the LMS before examinations.",
      ta: "தொலைதூரக் கல்வி மாணவர்கள் குறைந்தது 75% weekend contact classes-ல் கலந்து கொள்ள வேண்டும் அல்லது தேர்வுக்கு முன் LMS-ல் equivalent recorded sessions-ஐ முடிக்க வேண்டும்.",
      ur: "فاصلاتی طلبہ کو کم از کم 75% weekend contact classes میں شرکت یا امتحان سے پہلے LMS پر مساوی recorded sessions مکمل کرنا ضروری ہے۔",
    },
    ["Academic calendar", "Online study material", "Exam pattern"],
  ),

  /* =======================================================
     22 - SUPPORT
     ======================================================= */

  faq(
    "q60-student-support",
    "Support",
    ["student support", "helpdesk", "counselling", "mentor", "student services"],
    {
      en: "What student support services are available?",
      ta: "மாணவர் ஆதரவு சேவைகள் என்ன?",
      ur: "طلبہ کے لیے کون سی معاون خدمات ہیں؟",
    },
    {
      en: "Student support includes academic mentoring, helpdesk, career counselling, placement guidance, grievance redressal and an anti-ragging committee.",
      ta: "மாணவர் ஆதரவில் academic mentoring, helpdesk, career counselling, placement guidance, grievance redressal மற்றும் anti-ragging committee ஆகியவை உள்ளன.",
      ur: "طلبہ کی معاونت میں academic mentoring، helpdesk، career counselling، placement guidance، grievance redressal اور anti-ragging committee شامل ہیں۔",
    },
    ["Placement assistance", "Contact college", "Campus facilities"],
  ),

  faq(
    "q61-placement",
    "Support",
    ["placement", "job", "career", "internship", "recruitment"],
    {
      en: "Is placement assistance provided?",
      ta: "வேலைவாய்ப்பு உதவி உண்டா?",
      ur: "کیا پلیسمنٹ کی سہولت ہے؟",
    },
    {
      en: "The career development cell provides resume building, mock interviews, internship referrals and access to campus recruitment drives for eligible final-year students.",
      ta: "Career development cell resume building, mock interviews, internship referrals மற்றும் eligible final-year students-க்கு campus recruitment drives access வழங்குகிறது.",
      ur: "Career development cell resume building، mock interviews، internship referrals اور eligible final-year students کو campus recruitment drives تک رسائی فراہم کرتا ہے۔",
    },
    ["Student support", "Courses", "Contact college"],
  ),

  /* =======================================================
     23 - CONTACT
     ======================================================= */

  faq(
    "q62-contact",
    "Contact",
    ["contact", "phone", "email", "reach college", "enquiry", "call"],
    {
      en: "How can I contact the college?",
      ta: "கல்லூரியை எப்படி தொடர்பு கொள்வது?",
      ur: "کالج سے کیسے رابطہ کریں؟",
    },
    {
      en: "The knowledge base lists the admission cell contact as +91 44 2275 1347 and admissions@crescent.education. WhatsApp support is mentioned during office hours.",
      ta: "Admission cell contact: +91 44 2275 1347 மற்றும் admissions@crescent.education. Office hours-ல் அதே எண்ணில் WhatsApp support இருப்பதாக குறிப்பிடப்பட்டுள்ளது.",
      ur: "Admission cell contact: +91 44 2275 1347 اور admissions@crescent.education۔ Office hours میں اسی نمبر پر WhatsApp support دستیاب ہے۔",
    },
    ["Office timings", "Admission process", "Enquiry"],
  ),

  /* =======================================================
     24 - ID CARD
     ======================================================= */

  faq(
    "q63-id-card",
    "Support",
    ["id card", "identity card", "student id", "bonafide"],
    {
      en: "How do I get my ID card?",
      ta: "ID card எப்படி பெறுவது?",
      ur: "ID card کیسے ملے گا؟",
    },
    {
      en: "Digital ID cards are issued through the LMS within 15 days of enrolment.",
      ta: "Enrolment முடிந்த 15 நாட்களுக்குள் LMS மூலம் digital ID card வழங்கப்படும்.",
      ur: "Enrollment کے 15 دن کے اندر LMS کے ذریعے digital ID card جاری کیا جاتا ہے۔",
    },
    ["Student support", "LMS", "Contact college"],
  ),

  /* =======================================================
     25 - DEGREE
     ======================================================= */

  faq(
    "q64-degree",
    "Academic",
    ["degree certificate", "degree", "certificate", "convocation", "graduation"],
    {
      en: "When is the degree certificate issued?",
      ta: "பட்டச் சான்றிதழ் எப்போது வழங்கப்படும்?",
      ur: "ڈگری سرٹیفکیٹ کب ملتا ہے؟",
    },
    {
      en: "The knowledge base states that provisional certificates are issued within 30 days of the final result and the original degree is awarded at the annual March convocation.",
      ta: "இறுதி முடிவுக்குப் பிறகு 30 நாட்களுக்குள் provisional certificate வழங்கப்படும். Original degree ஆண்டுதோறும் March convocation-ல் வழங்கப்படும்.",
      ur: "نالج بیس کے مطابق final result کے 30 دن کے اندر provisional certificate جاری ہوتا ہے اور original degree سالانہ March convocation میں دی جاتی ہے۔",
    },
    ["Exam pattern", "Student support", "Contact college"],
  ),

  /* =======================================================
     26 - INTERNATIONAL
     ======================================================= */

  faq(
    "q65-international",
    "Admission",
    ["international students", "foreign students", "nri", "overseas"],
    {
      en: "Can international students apply?",
      ta: "வெளிநாட்டு மாணவர்கள் விண்ணப்பிக்கலாமா?",
      ur: "کیا بین الاقوامی طلبہ درخواست دے سکتے ہیں؟",
    },
    {
      en: "Yes. The knowledge base states that international and NRI candidates can apply online with an equivalence certificate from the Association of Indian Universities.",
      ta: "ஆம். International மற்றும் NRI candidates Association of Indian Universities equivalence certificate உடன் online-ல் apply செய்யலாம் என குறிப்பிடப்பட்டுள்ளது.",
      ur: "جی ہاں۔ نالج بیس کے مطابق international اور NRI candidates Association of Indian Universities کے equivalence certificate کے ساتھ online apply کر سکتے ہیں۔",
    },
    ["Admission process", "Required documents", "Apply Now"],
  ),

  /* =======================================================
     27 - CREDIT TRANSFER
     ======================================================= */

  faq(
    "q66-credit-transfer",
    "Admission",
    ["credit transfer", "transfer credits", "rejoin", "discontinued course"],
    {
      en: "Can I transfer credits or rejoin?",
      ta: "Credit transfer அல்லது மறுசேர்க்கை முடியுமா?",
      ur: "کیا credit transfer یا دوبارہ داخلہ ممکن ہے؟",
    },
    {
      en: "Credit transfer may be permitted for an equivalent UGC-recognised programme, subject to academic committee evaluation.",
      ta: "சமமான UGC அங்கீகரிக்கப்பட்ட படிப்பில் முன்பு படித்தவர்களுக்கு academic committee evaluation-க்கு உட்பட்டு credit transfer அனுமதிக்கப்படலாம்.",
      ur: "مساوی UGC تسلیم شدہ پروگرام کے لیے academic committee evaluation کے بعد credit transfer کی اجازت دی جا سکتی ہے۔",
    },
    ["Admission process", "Required documents", "Contact college"],
  ),

  /* =======================================================
     28 - COURSE DURATION
     ======================================================= */

  faq(
    "q67-duration",
    "Courses",
    ["course duration", "duration", "years", "semester", "how many years"],
    {
      en: "What is the course duration?",
      ta: "படிப்பின் காலம் என்ன?",
      ur: "کورس کی مدت کیا ہے؟",
    },
    {
      en: "UG programmes are 3 years or 6 semesters. PG programmes MBA, MCA and MA Islamic Studies are 2 years or 4 semesters.",
      ta: "UG படிப்புகள் 3 ஆண்டுகள் அல்லது 6 semesters. MBA, MCA மற்றும் MA Islamic Studies PG படிப்புகள் 2 ஆண்டுகள் அல்லது 4 semesters.",
      ur: "UG پروگرام 3 سال یا 6 سمسٹر کے ہیں۔ MBA، MCA اور MA Islamic Studies PG پروگرام 2 سال یا 4 سمسٹر کے ہیں۔",
    },
    ["UG courses", "PG courses", "Fees"],
  ),

  /* =======================================================
     29 - ONLINE APPLICATION
     ======================================================= */

  faq(
    "q68-online-application-24x7",
    "Admission",
    ["24x7 application", "online application anytime", "application anytime"],
    {
      en: "Can I submit the application anytime?",
      ta: "எப்போது வேண்டுமானாலும் application submit செய்யலாமா?",
      ur: "کیا میں کسی بھی وقت درخواست جمع کر سکتا ہوں؟",
    },
    {
      en: "The knowledge base states that online applications can be submitted 24x7.",
      ta: "Online applications 24x7 submit செய்யலாம் என அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس کے مطابق online applications 24x7 جمع کی جا سکتی ہیں۔",
    },
    ["Apply Now", "Admission process", "Office timings"],
    {
      label: {
        en: "Apply Now",
        ta: "இப்போதே விண்ணப்பிக்கவும்",
        ur: "ابھی درخواست دیں",
      },
      url: ADMISSION_LINK,
    },
  ),

  /* =======================================================
     30 - EXTRA COURSE / PROGRAMME
     ======================================================= */

  faq(
    "q69-mobile-app",
    "Courses",
    ["mobile application", "app development", "android", "ios", "flutter", "react native"],
    {
      en: "Is there a Mobile Application Development programme?",
      ta: "Mobile Application Development படிப்பு உள்ளதா?",
      ur: "کیا Mobile Application Development پروگرام ہے؟",
    },
    {
      en: "The knowledge base also lists a 3 year Degree Program in Mobile Application Development covering Android, iOS, Flutter, React Native, UI/UX and app deployment.",
      ta: "அறிவுத் தரவுத்தளத்தில் Mobile Application Development 3 ஆண்டு Degree Program ஆக குறிப்பிடப்பட்டுள்ளது. இதில் Android, iOS, Flutter, React Native, UI/UX மற்றும் app deployment உள்ளன.",
      ur: "نالج بیس میں Mobile Application Development کا 3 سالہ Degree Program بھی درج ہے، جس میں Android، iOS، Flutter، React Native، UI/UX اور app deployment شامل ہیں۔",
    },
    ["Course duration", "Fee structure", "Admission process"],
  ),

  faq(
    "q70-mobile-app-fees",
    "Fees",
    ["mobile application fees", "app development fees", "mobile app fee"],
    {
      en: "What are the Mobile Application Development fees?",
      ta: "Mobile Application Development கட்டணம் எவ்வளவு?",
      ur: "Mobile Application Development کی فیس کتنی ہے؟",
    },
    {
      en: "The knowledge base states Rs. 30,000 per year and Rs. 90,000 for the full 3 year programme.",
      ta: "ஆண்டுக்கு ரூ.30,000 மற்றும் முழு 3 ஆண்டுகளுக்கு ரூ.90,000 என அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس کے مطابق فیس 30,000 روپے سالانہ اور مکمل 3 سال کے لیے 90,000 روپے ہے۔",
    },
    ["Mobile Application Development", "Course duration", "Fee payment methods"],
  ),

  /* =======================================================
     31 - QUESTIONS 71-100
     ======================================================= */

  faq(
    "q71-which-ug",
    "Courses",
    ["which ug", "ug programme", "bachelor courses"],
    {
      en: "What UG programmes can I choose?",
      ta: "எந்த UG படிப்புகளை தேர்வு செய்யலாம்?",
      ur: "میں کون سے UG پروگرام منتخب کر سکتا ہوں؟",
    },
    {
      en: "You can choose BA English, BA Islamic Studies or BA Public Policy.",
      ta: "BA English, BA Islamic Studies அல்லது BA Public Policy ஆகியவற்றில் தேர்வு செய்யலாம்.",
      ur: "آپ BA English، BA Islamic Studies یا BA Public Policy میں سے انتخاب کر سکتے ہیں۔",
    },
    ["BA English", "BA Islamic Studies", "BA Public Policy"],
  ),

  faq(
    "q72-which-pg",
    "Courses",
    ["which pg", "pg programme", "masters courses"],
    {
      en: "What PG programmes can I choose?",
      ta: "எந்த PG படிப்புகளை தேர்வு செய்யலாம்?",
      ur: "میں کون سے PG پروگرام منتخب کر سکتا ہوں؟",
    },
    {
      en: "You can choose MA Islamic Studies, MBA or MCA.",
      ta: "MA Islamic Studies, MBA அல்லது MCA ஆகியவற்றில் தேர்வு செய்யலாம்.",
      ur: "آپ MA Islamic Studies، MBA یا MCA میں سے انتخاب کر سکتے ہیں۔",
    },
    ["MBA", "MCA", "MA Islamic Studies"],
  ),

  faq(
    "q73-12th",
    "Eligibility",
    ["12th", "plus two", "after 12th", "school student"],
    {
      en: "Can I apply after 12th?",
      ta: "12ஆம் வகுப்புக்குப் பிறகு apply செய்யலாமா?",
      ur: "کیا 12th کے بعد apply کر سکتا ہوں؟",
    },
    {
      en: "Yes. The UG eligibility states that candidates who pass 10+2 or an equivalent recognised examination can apply.",
      ta: "ஆம். 10+2 அல்லது அதற்கு சமமான அங்கீகரிக்கப்பட்ட தேர்வில் தேர்ச்சி பெற்றவர்கள் UG-க்கு apply செய்யலாம்.",
      ur: "جی ہاں۔ 10+2 یا مساوی تسلیم شدہ امتحان پاس کرنے والے UG کے لیے apply کر سکتے ہیں۔",
    },
    ["UG courses", "UG eligibility", "Admission process"],
  ),

  faq(
    "q74-degree-holder",
    "Eligibility",
    ["degree holder", "after degree", "graduate", "bachelor holder"],
    {
      en: "Can a degree holder apply for PG?",
      ta: "Degree முடித்தவர்கள் PG-க்கு apply செய்யலாமா?",
      ur: "کیا ڈگری ہولڈر PG کے لیے apply کر سکتا ہے؟",
    },
    {
      en: "Yes, programme-specific PG eligibility applies. MBA requires a recognised Bachelor's degree and MCA requires a minimum 3 year Bachelor's degree with Mathematics.",
      ta: "ஆம். PG படிப்புக்கு programme-specific eligibility இருக்கும். MBA-க்கு அங்கீகரிக்கப்பட்ட Bachelor's degree தேவை; MCA-க்கு குறைந்தது 3 ஆண்டு Bachelor's degree மற்றும் Mathematics தேவை.",
      ur: "جی ہاں، PG پروگرام کے مطابق اہلیت ہوگی۔ MBA کے لیے تسلیم شدہ Bachelor's degree اور MCA کے لیے کم از کم 3 سالہ Bachelor's degree کے ساتھ Mathematics درکار ہے۔",
    },
    ["MBA eligibility", "MCA eligibility", "PG courses"],
  ),

  faq(
    "q75-mba-work",
    "Eligibility",
    ["mba work experience", "mba experience", "work experience"],
    {
      en: "Is work experience required for MBA?",
      ta: "MBA-க்கு work experience கட்டாயமா?",
      ur: "کیا MBA کے لیے work experience لازمی ہے؟",
    },
    {
      en: "Work experience is preferred but not mandatory according to the knowledge base.",
      ta: "Knowledge base படி work experience விரும்பத்தக்கது; கட்டாயமில்லை.",
      ur: "نالج بیس کے مطابق work experience ترجیحی ہے لیکن لازمی نہیں۔",
    },
    ["MBA eligibility", "MBA fees", "MBA specialisations"],
  ),

  faq(
    "q76-mca-maths",
    "Eligibility",
    ["mca maths", "mathematics mca", "maths required"],
    {
      en: "Is Mathematics required for MCA?",
      ta: "MCA-க்கு Mathematics தேவையா?",
      ur: "کیا MCA کے لیے Mathematics ضروری ہے؟",
    },
    {
      en: "Yes. Mathematics is required at 10+2 or graduate level according to the MCA eligibility in the knowledge base.",
      ta: "ஆம். MCA தகுதி விதிப்படி 10+2 அல்லது graduate level-ல் Mathematics தேவை.",
      ur: "جی ہاں۔ نالج بیس کے مطابق MCA کے لیے 10+2 یا graduate level پر Mathematics درکار ہے۔",
    },
    ["MCA eligibility", "MCA fees", "Admission process"],
  ),

  faq(
    "q77-application-status",
    "Admission",
    ["application status", "check application", "application tracking", "status"],
    {
      en: "How can I check my application status?",
      ta: "எனது application status எப்படி பார்க்கலாம்?",
      ur: "میں application status کیسے چیک کروں؟",
    },
    {
      en: "Use the application or student portal provided after registration. If you need assistance, contact the admission cell.",
      ta: "Registration பிறகு வழங்கப்படும் application அல்லது student portal-ல் status பார்க்கலாம். உதவி தேவைப்பட்டால் admission cell-ஐ தொடர்பு கொள்ளவும்.",
      ur: "Registration کے بعد فراہم کردہ application یا student portal سے status چیک کریں۔ مدد کے لیے admission cell سے رابطہ کریں۔",
    },
    ["Admission process", "Contact college", "Office timings"],
  ),

  faq(
    "q78-confirmation",
    "Admission",
    ["confirmation", "admission confirmation", "confirmation email", "confirmation sms"],
    {
      en: "When will I receive admission confirmation?",
      ta: "Admission confirmation எப்போது வரும்?",
      ur: "داخلہ confirmation کب ملے گا؟",
    },
    {
      en: "The application process includes confirmation after submission and verification. The knowledge base mentions confirmation through SMS and email after online application.",
      ta: "Application submit மற்றும் verification பிறகு confirmation வரும். Online application முடித்த பிறகு SMS மற்றும் email confirmation வரும் என குறிப்பிடப்பட்டுள்ளது.",
      ur: "Application submission اور verification کے بعد confirmation ملتا ہے۔ Online application کے بعد SMS اور email confirmation کا ذکر ہے۔",
    },
    ["Application status", "Admission process", "Contact college"],
  ),

  faq(
    "q79-enrolment",
    "Admission",
    ["enrolment", "enrollment number", "admission number", "registration number"],
    {
      en: "When will I get my enrolment number?",
      ta: "Enrolment number எப்போது கிடைக்கும்?",
      ur: "Enrollment number کب ملے گا؟",
    },
    {
      en: "After eligibility verification and fee payment, the admission process states that an enrolment number is issued.",
      ta: "Eligibility verification மற்றும் fee payment முடிந்த பிறகு enrolment number வழங்கப்படும்.",
      ur: "Eligibility verification اور fee payment کے بعد enrolment number جاری کیا جاتا ہے۔",
    },
    ["Admission process", "Application status", "ID card"],
  ),

  faq(
    "q80-scholarship-eligibility",
    "Scholarship",
    ["scholarship eligibility", "who gets scholarship", "merit eligibility"],
    {
      en: "Who is eligible for the merit scholarship?",
      ta: "Merit scholarship யாருக்கு கிடைக்கும்?",
      ur: "Merit scholarship کے لیے کون اہل ہے؟",
    },
    {
      en: "The knowledge base states that students scoring above 80% in the qualifying examination can receive merit scholarship support of up to 25% of tuition.",
      ta: "தகுதித் தேர்வில் 80%-க்கு மேல் பெறும் மாணவர்களுக்கு tuition fee-ல் 25% வரை merit scholarship கிடைக்கலாம்.",
      ur: "نالج بیس کے مطابق qualifying examination میں 80% سے زیادہ نمبر حاصل کرنے والے طلبہ کو tuition fee میں 25% تک merit scholarship مل سکتی ہے۔",
    },
    ["Scholarships", "Government scholarship", "Required documents"],
  ),

  faq(
    "q81-hostel-wifi",
    "Hostel",
    ["hostel wifi", "wifi hostel", "internet hostel"],
    {
      en: "Is Wi-Fi available in the hostel?",
      ta: "Hostel-ல் Wi-Fi இருக்கிறதா?",
      ur: "کیا ہاسٹل میں Wi-Fi ہے؟",
    },
    {
      en: "Yes. Wi-Fi is listed among the hostel facilities in the knowledge base.",
      ta: "ஆம். Hostel facilities-ல் Wi-Fi குறிப்பிடப்பட்டுள்ளது.",
      ur: "جی ہاں۔ نالج بیس میں ہاسٹل کی سہولیات میں Wi-Fi شامل ہے۔",
    },
    ["Hostel facilities", "Hostel fees", "Campus facilities"],
  ),

  faq(
    "q82-hostel-security",
    "Hostel",
    ["hostel security", "24x7 security", "warden"],
    {
      en: "Is hostel security available?",
      ta: "Hostel-ல் security இருக்கிறதா?",
      ur: "کیا ہاسٹل میں security ہے؟",
    },
    {
      en: "Yes. Hostel facilities include 24x7 security and a resident warden.",
      ta: "ஆம். Hostel-ல் 24x7 security மற்றும் resident warden வசதி உள்ளது.",
      ur: "جی ہاں۔ ہاسٹل میں 24x7 security اور resident warden موجود ہیں۔",
    },
    ["Hostel facilities", "Hostel rules", "Hostel fees"],
  ),

  faq(
    "q83-weekend",
    "Academic",
    ["weekend classes", "contact classes", "saturday sunday classes"],
    {
      en: "Are contact classes conducted on weekends?",
      ta: "Weekend-ல் contact classes நடக்குமா?",
      ur: "کیا weekend پر contact classes ہوتی ہیں؟",
    },
    {
      en: "Yes. The academic calendar mentions contact classes scheduled on weekends.",
      ta: "ஆம். Academic calendar-ல் weekend contact classes குறிப்பிடப்பட்டுள்ளன.",
      ur: "جی ہاں۔ Academic calendar میں weekend contact classes کا ذکر ہے۔",
    },
    ["Attendance", "Academic calendar", "Online study material"],
  ),

  faq(
    "q84-pass-mark",
    "Academic",
    ["pass mark", "passing marks", "minimum marks", "pass percentage"],
    {
      en: "What are the minimum passing marks?",
      ta: "Minimum passing marks எவ்வளவு?",
      ur: "Minimum passing marks کتنے ہیں؟",
    },
    {
      en: "The knowledge base states 50% minimum aggregate per course for PG and 40% for UG.",
      ta: "PG-க்கு 50% மற்றும் UG-க்கு 40% minimum aggregate pass mark என அறிவுத் தரவுத்தளத்தில் குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس کے مطابق PG کے لیے 50% اور UG کے لیے 40% minimum aggregate pass mark ہے۔",
    },
    ["Exam pattern", "Academic calendar", "Attendance"],
  ),

  faq(
    "q85-lms",
    "Academic",
    ["lms", "student portal", "online portal", "learning management"],
    {
      en: "What is available in the LMS?",
      ta: "LMS-ல் என்ன கிடைக்கும்?",
      ur: "LMS میں کیا دستیاب ہے؟",
    },
    {
      en: "The LMS provides self-learning material, recorded video lectures, assignments and previous question papers.",
      ta: "LMS-ல் self-learning material, recorded video lectures, assignments மற்றும் previous question papers கிடைக்கும்.",
      ur: "LMS میں self-learning material، recorded video lectures، assignments اور previous question papers دستیاب ہیں۔",
    },
    ["Online study material", "Attendance", "Exam centres"],
  ),

  faq(
    "q86-bonafide",
    "Support",
    ["bonafide", "bonafide certificate", "certificate request"],
    {
      en: "How can I get a bonafide certificate?",
      ta: "Bonafide certificate எப்படி பெறுவது?",
      ur: "Bonafide certificate کیسے ملے گا؟",
    },
    {
      en: "Bonafide certificates can be requested from the student support desk and the knowledge base states they are issued within 3 working days.",
      ta: "Bonafide certificate-ஐ student support desk-ல் request செய்யலாம். 3 working days-ல் வழங்கப்படும் என குறிப்பிடப்பட்டுள்ளது.",
      ur: "Bonafide certificate student support desk سے request کیا جا سکتا ہے اور نالج بیس کے مطابق 3 working days میں جاری ہوتا ہے۔",
    },
    ["Student support", "ID card", "Contact college"],
  ),

  faq(
    "q87-medical",
    "Campus",
    ["medical", "medical centre", "health facility", "doctor"],
    {
      en: "Is there a medical facility on campus?",
      ta: "Campus-ல் medical facility இருக்கிறதா?",
      ur: "کیا کیمپس میں medical facility ہے؟",
    },
    {
      en: "Yes. A medical centre is listed among the campus facilities.",
      ta: "ஆம். Campus facilities-ல் medical centre உள்ளது.",
      ur: "جی ہاں۔ کیمپس کی سہولیات میں medical centre شامل ہے۔",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q88-sports",
    "Campus",
    ["sports", "sports ground", "games", "gym"],
    {
      en: "Are sports facilities available?",
      ta: "Sports facilities உள்ளதா?",
      ur: "کیا sports facilities دستیاب ہیں؟",
    },
    {
      en: "Yes. Sports grounds and a gymnasium are listed among the campus facilities.",
      ta: "ஆம். Sports grounds மற்றும் gymnasium campus facilities-ல் உள்ளன.",
      ur: "جی ہاں۔ Sports grounds اور gymnasium کیمپس کی سہولیات میں شامل ہیں۔",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q89-canteen",
    "Campus",
    ["canteen", "food", "dining", "mess"],
    {
      en: "Is a canteen available?",
      ta: "Canteen இருக்கிறதா?",
      ur: "کیا canteen دستیاب ہے؟",
    },
    {
      en: "Yes. A canteen is listed among the campus facilities. Hostel accommodation also includes mess according to the hostel fee information.",
      ta: "ஆம். Campus facilities-ல் canteen உள்ளது. Hostel fee தகவல்படி mess-மும் hostel-ல் அடங்கும்.",
      ur: "جی ہاں۔ کیمپس میں canteen موجود ہے۔ Hostel fee information کے مطابق mess بھی شامل ہے۔",
    },
    ["Campus facilities", "Hostel fees", "Hostel facilities"],
  ),

  faq(
    "q90-prayer",
    "Campus",
    ["prayer hall", "prayer", "mosque", "prayer facility"],
    {
      en: "Is a prayer facility available?",
      ta: "தொழுகை வசதி உள்ளதா?",
      ur: "کیا نماز کی سہولت ہے؟",
    },
    {
      en: "A prayer hall is listed among the campus facilities.",
      ta: "Campus facilities-ல் prayer hall உள்ளது.",
      ur: "کیمپس کی سہولیات میں prayer hall موجود ہے۔",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q91-library-books",
    "Library",
    ["library books", "how many books", "books library"],
    {
      en: "How many books are available in the library?",
      ta: "நூலகத்தில் எத்தனை புத்தகங்கள் உள்ளன?",
      ur: "لائبریری میں کتنی کتابیں ہیں؟",
    },
    {
      en: "The knowledge base states that the central library holds over 90,000 books.",
      ta: "மைய நூலகத்தில் 90,000-க்கும் மேற்பட்ட புத்தகங்கள் உள்ளன என குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس کے مطابق مرکزی لائبریری میں 90,000 سے زیادہ کتابیں ہیں۔",
    },
    ["Library facilities", "Library timings", "Digital resources"],
  ),

  faq(
    "q92-digital-resources",
    "Library",
    ["delnet", "n list", "digital resources", "ebooks", "online library"],
    {
      en: "Does the library provide digital resources?",
      ta: "நூலகத்தில் digital resources உள்ளதா?",
      ur: "کیا لائبریری میں digital resources ہیں؟",
    },
    {
      en: "Yes. The library provides e-books and access to DELNET and N-LIST digital resources.",
      ta: "ஆம். Library-ல் e-books மற்றும் DELNET, N-LIST digital resources access உள்ளது.",
      ur: "جی ہاں۔ لائبریری میں e-books اور DELNET و N-LIST digital resources تک رسائی ہے۔",
    },
    ["Library", "Online study material", "LMS"],
  ),

  faq(
    "q93-transport-routes",
    "Transport",
    ["bus routes", "transport routes", "tambaram bus", "guindy bus"],
    {
      en: "Which routes have college bus service?",
      ta: "எந்த routes-ல் college bus உள்ளது?",
      ur: "کون سے routes پر college bus ہے؟",
    },
    {
      en: "Major routes mentioned include Tambaram, Guindy, T. Nagar, Poonamallee and Chengalpattu.",
      ta: "Tambaram, Guindy, T. Nagar, Poonamallee மற்றும் Chengalpattu முக்கிய routes ஆக குறிப்பிடப்பட்டுள்ளன.",
      ur: "Tambaram، Guindy، T. Nagar، Poonamallee اور Chengalpattu بڑے routes میں شامل ہیں۔",
    },
    ["Transport facility", "Transport fees", "Campus location"],
  ),

  faq(
    "q94-jan-july",
    "Admission",
    ["january admission", "july admission", "admission cycle", "session"],
    {
      en: "What are the admission cycles?",
      ta: "Admission cycles என்ன?",
      ur: "داخلہ cycles کیا ہیں؟",
    },
    {
      en: "The knowledge base mentions July-December and January-June academic sessions. Admission cycles are mentioned for July and January.",
      ta: "July-December மற்றும் January-June academic sessions உள்ளன. July மற்றும் January admission cycles குறிப்பிடப்பட்டுள்ளன.",
      ur: "نالج بیس میں July-December اور January-June academic sessions ہیں۔ July اور January admission cycles کا ذکر ہے۔",
    },
    ["Admission dates", "Academic calendar", "Admission process"],
  ),

  faq(
    "q95-exam-fee",
    "Fees",
    ["exam fee", "exam fees", "semester exam fee"],
    {
      en: "What is the exam fee?",
      ta: "Exam fee எவ்வளவு?",
      ur: "Exam fee کتنی ہے؟",
    },
    {
      en: "The fee overview in the knowledge base states an exam fee of Rs. 1,500 per semester.",
      ta: "அறிவுத் தரவுத்தளத்தில் semester-க்கு exam fee ரூ.1,500 என குறிப்பிடப்பட்டுள்ளது.",
      ur: "نالج بیس میں semester exam fee 1,500 روپے بتائی گئی ہے۔",
    },
    ["Fee structure", "Exam pattern", "Fee payment methods"],
  ),

  faq(
    "q96-career",
    "Support",
    ["career", "career guidance", "career counselling", "jobs"],
    {
      en: "Is career guidance available?",
      ta: "Career guidance இருக்கிறதா?",
      ur: "کیا career guidance دستیاب ہے؟",
    },
    {
      en: "Yes. Student support includes career counselling and placement guidance.",
      ta: "ஆம். Student support-ல் career counselling மற்றும் placement guidance உள்ளது.",
      ur: "جی ہاں۔ Student support میں career counselling اور placement guidance شامل ہے۔",
    },
    ["Placement assistance", "Student support", "Courses"],
  ),

  faq(
    "q97-ragging",
    "Support",
    ["ragging", "anti ragging", "ragging rules"],
    {
      en: "Is ragging allowed?",
      ta: "Ragging அனுமதிக்கப்படுமா?",
      ur: "کیا ragging کی اجازت ہے؟",
    },
    {
      en: "No. Ragging is strictly prohibited according to the hostel rules and an anti-ragging committee is listed under student support.",
      ta: "இல்லை. Hostel rules படி ragging strict-ஆக தடை செய்யப்பட்டுள்ளது. Anti-ragging committee-யும் உள்ளது.",
      ur: "نہیں۔ Hostel rules کے مطابق ragging سختی سے ممنوع ہے اور anti-ragging committee بھی موجود ہے۔",
    },
    ["Hostel rules", "Student support", "Campus facilities"],
  ),

  faq(
    "q98-smoking",
    "Hostel",
    ["smoking", "smoking rules", "hostel smoking"],
    {
      en: "Is smoking allowed in the hostel?",
      ta: "Hostel-ல் smoking அனுமதிக்கப்படுமா?",
      ur: "کیا ہاسٹل میں smoking کی اجازت ہے؟",
    },
    {
      en: "No. Smoking is strictly prohibited according to the hostel rules.",
      ta: "இல்லை. Hostel rules படி smoking strict-ஆக தடை செய்யப்பட்டுள்ளது.",
      ur: "نہیں۔ Hostel rules کے مطابق smoking سختی سے ممنوع ہے۔",
    },
    ["Hostel rules", "Hostel facilities", "Student support"],
  ),

  faq(
    "q99-application-help",
    "Admission",
    ["admission help", "application help", "help applying", "apply help"],
    {
      en: "Can someone help me with the admission application?",
      ta: "Admission application fill செய்ய help கிடைக்குமா?",
      ur: "کیا admission application میں مدد مل سکتی ہے؟",
    },
    {
      en: "Yes. You can contact the admission cell during office hours for application-related assistance.",
      ta: "ஆம். Office hours-ல் admission cell-ஐ தொடர்பு கொண்டு application-related assistance பெறலாம்.",
      ur: "جی ہاں۔ Office hours میں admission cell سے application-related assistance حاصل کی جا سکتی ہے۔",
    },
    ["Admission process", "Office timings", "Contact college"],
  ),

  faq(
    "q100-enquiry",
    "Enquiry",
    ["enquiry", "enquire", "contact admission", "need help", "talk to college"],
    {
      en: "How can I make an enquiry?",
      ta: "எப்படி enquiry செய்யலாம்?",
      ur: "میں enquiry کیسے کر سکتا ہوں؟",
    },
    {
      en: "You can use the Enquire Now form on the website or contact the admission cell during office hours.",
      ta: "Website-ல் உள்ள Enquire Now form-ஐ பயன்படுத்தலாம் அல்லது office hours-ல் admission cell-ஐ தொடர்பு கொள்ளலாம்.",
      ur: "آپ website پر موجود Enquire Now form استعمال کر سکتے ہیں یا office hours میں admission cell سے رابطہ کر سکتے ہیں۔",
    },
    ["Contact college", "Office timings", "Admission process"],
  ),
];

/* =========================================================
   GREETING CHECK
   ========================================================= */

export function isGreeting(input: string): boolean {
  const text = input.trim().toLowerCase();

  if (!text) return false;

  return greetings.some((greeting) => {
    const g = greeting.toLowerCase();

    return text === g || text.startsWith(`${g} `) || text.endsWith(` ${g}`);
  });
}

/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,:;()[\]{}"'`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   FIND BEST FAQ
   ========================================================= */

export function findBestFaq(input: string, language: BotLanguage = "en"): BotFaqEntry | null {
  const text = normalizeText(input);

  if (!text) return null;

  if (isGreeting(text)) {
    return null;
  }

  let bestFaq: BotFaqEntry | null = null;
  let bestScore = 0;

  for (const item of faqs) {
    let score = 0;

    /* Keyword matching */
    for (const keyword of item.keywords) {
      const normalizedKeyword = normalizeText(keyword);

      if (!normalizedKeyword) continue;

      if (text === normalizedKeyword) {
        score += 15;
      } else if (text.includes(normalizedKeyword)) {
        score += normalizedKeyword.length >= 5 ? 8 : 4;
      }
    }

    /* Question matching */
    const faqQuestion = normalizeText(item.question[language]);

    if (text === faqQuestion) {
      score += 20;
    }

    /* Course-specific priority */
    if (text.includes("mba") && item.keywords.some((k) => k.toLowerCase().includes("mba"))) {
      score += 10;
    }

    if (text.includes("mca") && item.keywords.some((k) => k.toLowerCase().includes("mca"))) {
      score += 10;
    }

    if (
      text.includes("ba english") &&
      item.keywords.some((k) => k.toLowerCase().includes("ba english"))
    ) {
      score += 10;
    }

    if (
      text.includes("ba islamic") &&
      item.keywords.some((k) => k.toLowerCase().includes("ba islamic"))
    ) {
      score += 10;
    }

    if (
      text.includes("public policy") &&
      item.keywords.some((k) => k.toLowerCase().includes("public policy"))
    ) {
      score += 10;
    }

    if (
      text.includes("ma islamic") &&
      item.keywords.some((k) => k.toLowerCase().includes("ma islamic"))
    ) {
      score += 10;
    }

    if (score > bestScore) {
      bestScore = score;
      bestFaq = item;
    }
  }

  /*
   * IMPORTANT:
   * Do not answer unrelated questions.
   */

  if (bestScore < 4) {
    return null;
  }

  return bestFaq;
}

/* =========================================================
   GET ANSWER
   ========================================================= */

export function getBotAnswer(input: string, language: BotLanguage = "en") {
  if (isGreeting(input)) {
    return {
      type: "greeting" as const,
      answer: greetingResponse[language],
      faq: null,
      suggestions: [
        language === "ta" ? "UG படிப்புகள்" : language === "ur" ? "UG کورسز" : "UG courses",

        language === "ta" ? "PG படிப்புகள்" : language === "ur" ? "PG کورسز" : "PG courses",

        language === "ta"
          ? "சேர்க்கை நடைமுறை"
          : language === "ur"
            ? "داخلہ کا طریقہ"
            : "Admission process",

        language === "ta" ? "கட்டணம்" : language === "ur" ? "فیس" : "Fees",
      ],
    };
  }

  const matchedFaq = findBestFaq(input, language);

  if (!matchedFaq) {
    return {
      type: "out-of-scope" as const,
      answer: outOfScopeResponse[language],
      faq: null,
      suggestions: [
        language === "ta" ? "UG படிப்புகள்" : language === "ur" ? "UG کورسز" : "UG courses",

        language === "ta" ? "PG படிப்புகள்" : language === "ur" ? "PG کورسز" : "PG courses",

        language === "ta"
          ? "சேர்க்கை நடைமுறை"
          : language === "ur"
            ? "داخلہ کا طریقہ"
            : "Admission process",

        language === "ta" ? "கட்டணம்" : language === "ur" ? "فیس" : "Fees",
      ],
    };
  }

  return {
    type: "faq" as const,
    answer: matchedFaq.answer[language],
    faq: matchedFaq,
    suggestions: matchedFaq.suggestions || [],
    link: matchedFaq.link || null,
  };
}

/* =========================================================
   QUICK QUESTIONS
   ========================================================= */

export const quickQuestions = {
  en: [
    "UG courses",
    "PG courses",
    "MBA fees",
    "MCA eligibility",
    "Admission process",
    "Hostel facilities",
  ],

  ta: [
    "UG படிப்புகள்",
    "PG படிப்புகள்",
    "MBA கட்டணம்",
    "MCA தகுதி",
    "சேர்க்கை நடைமுறை",
    "விடுதி வசதிகள்",
  ],

  ur: ["UG کورسز", "PG کورسز", "MBA فیس", "MCA اہلیت", "داخلہ کا طریقہ", "ہاسٹل سہولیات"],
};

/* =========================================================
   EXPORT DEFAULT
   ========================================================= */

export default faqs;
