// src/data/collegeKnowledge.ts

import type { FaqEntry } from "../types/chat";

/* =========================================================
   CRESCENT COLLEGE CHATBOT KNOWLEDGE BASE
   100 QUESTIONS
   English
   ========================================================= */

export const ADMISSION_LINK = "https://odladmission.crescent-institute.edu.in/login/index.php";
export const APPLICATION_PORTAL_LINK =
  "https://admission.crescent-institute.edu.in/login/index.php";

export const DUMMY_ENQUIRY_EMAIL = "yourdummyemail@gmail.com";

/* =========================================================
   TYPES
   ========================================================= */

export interface BotFaqEntry extends FaqEntry {
  suggestions?: string[];
}

/* =========================================================
   GREETINGS
   ========================================================= */

export const greetings = [
  "hi",
  "hello",
  "hey",
  "hey there",
  "hai",
  "hii",
  "hiii",
  "hello there",
  "hi there",
  "how are you",
  "howdy",
  "greetings",
  "good day",
  "good morning",
  "good afternoon",
  "good evening",
];

/* =========================================================
   GREETING RESPONSE
   ========================================================= */

export const greetingResponse =
  "Hello! 👋 I’m Cres Bot, your Crescent Admission Assistant. I can help you with UG & PG courses, admission, eligibility, fees, scholarships, hostel, campus facilities, timings and student services. How can I help you?";

/* =========================================================
   OUT OF SCOPE RESPONSE
   ========================================================= */

export const outOfScopeResponse =
  "Sorry! I can help only with Crescent college-related topics such as courses, admission, eligibility, fees, scholarships, hostel, campus, timings, exams and student services. 🎓";

export const feeResponse =
  "MBA fees are ₹25,000 per semester. MCA fees are ₹20,000 for Indian students and $750 for foreign nationals. BA Islamic Studies fees are ₹15,000 per year.";

export const applicationFeeResponse =
  "The application fee is ₹1,000 for Indian applicants and $15 for foreign nationals.";

export const mcaFeeResponse =
  "MCA fees are ₹20,000 for Indian students and $750 for foreign nationals.";

export function isApplicationFeeQuestion(input: string): boolean {
  const text = normalizeText(input);
  return (
    /\b(fee|fees|cost|price|pricing)\b/.test(text) &&
    /\b(application|registration|apply)\b/.test(text)
  );
}

export function isMcaFeeQuestion(input: string): boolean {
  return /\bmca\b/.test(normalizeText(input)) && isFeeQuestion(input);
}

export function isFeeQuestion(input: string): boolean {
  const text = normalizeText(input);
  if (/\b(apply|application|registration)\b/.test(text)) return false;
  if (/\b(refund|pay|payment|installment|instalment)\b/.test(text)) return false;
  return /\b(fee|fees|tuition|cost|price|pricing)\b/.test(text);
}

/* =========================================================
   FAQ HELPER
   ========================================================= */

function faq(
  id: string,
  category: string,
  keywords: string[],
  question: { en: string },
  answer: { en: string },
  suggestions: string[] = [],
  link?: FaqEntry["link"],
): BotFaqEntry {
  return {
    id,
    category,
    keywords,
    question: question.en,
    answer: answer.en,
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
    },
    {
      en: "B.S. Abdur Rahman Crescent Institute of Science & Technology is a deemed-to-be university offering UG and PG programmes.",
    },
    ["What courses are offered?", "Where is the campus located?", "How can I contact the college?"],
  ),

  faq(
    "q02-ugc",
    "College",
    ["ugc", "approved", "recognition", "valid", "recognised"],
    {
      en: "Are the programmes UGC approved?",
    },
    {
      en: "Yes. The UG and PG distance education programmes in this knowledge base are described as UGC approved.",
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
    },
    {
      en: "UG: BA English, BA Islamic Studies and BA Public Policy. PG: MA Islamic Studies, MBA and MCA.",
    },
    ["UG courses", "PG courses", "Admission process"],
  ),

  faq(
    "q04-ug-courses",
    "UG",
    ["ug", "undergraduate", "bachelor", "ba", "ug courses"],
    {
      en: "Which UG courses are available?",
    },
    {
      en: "The UG programmes are BA English, BA Islamic Studies and BA Public Policy. Each programme is 3 years.",
    },
    ["BA English", "BA Islamic Studies", "BA Public Policy", "UG eligibility"],
  ),

  faq(
    "q05-pg-courses",
    "PG",
    ["pg", "postgraduate", "masters", "pg courses", "post graduate"],
    {
      en: "Which PG courses are available?",
    },
    {
      en: "The PG programmes are MA Islamic Studies, MBA and MCA. Each is 2 years.",
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
    },
    {
      en: "BA English is a 3 year UG programme covering British and Indian literature, linguistics, communication skills and creative writing.",
    },
    ["BA English fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q07-ba-english-duration",
    "UG",
    ["ba english duration", "english duration", "english years"],
    {
      en: "How long is BA English?",
    },
    {
      en: "BA English is a 3 year undergraduate programme.",
    },
    ["BA English fees", "BA English details", "UG eligibility"],
  ),

  faq(
    "q08-ba-english-fees",
    "Fees",
    ["ba english fees", "english fees", "english fee"],
    {
      en: "What are the BA English fees?",
    },
    {
      en: "BA English fee is Rs. 18,000 per year and Rs. 54,000 for the full 3 year programme.",
    },
    ["BA English details", "Fee payment methods", "Scholarships"],
  ),

  faq(
    "q09-ba-english-eligibility",
    "Eligibility",
    ["ba english eligibility", "english eligibility", "english qualification"],
    {
      en: "What is the eligibility for BA English?",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
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
    },
    {
      en: "BA Islamic Studies is a 3 year UG programme covering Quran, Hadith, Arabic language, Islamic civilisation and comparative religion.",
    },
    ["BA Islamic Studies fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q11-ba-islamic-duration",
    "UG",
    ["ba islamic duration", "islamic studies duration"],
    {
      en: "How long is BA Islamic Studies?",
    },
    {
      en: "BA Islamic Studies is a 3 year undergraduate programme.",
    },
    ["BA Islamic Studies fees", "BA Islamic Studies details", "UG eligibility"],
  ),

  faq(
    "q12-ba-islamic-fees",
    "Fees",
    ["ba islamic fees", "islamic studies fees", "ba islamic fee"],
    {
      en: "What are the BA Islamic Studies fees?",
    },
    {
      en: "BA Islamic Studies fee is Rs. 15,000 per year and Rs. 45,000 for the full 3 year programme.",
    },
    ["BA Islamic Studies details", "Scholarships", "Fee payment methods"],
  ),

  faq(
    "q13-ba-islamic-eligibility",
    "Eligibility",
    ["ba islamic eligibility", "islamic studies eligibility"],
    {
      en: "What is the eligibility for BA Islamic Studies?",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
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
    },
    {
      en: "BA Public Policy is a 3 year UG programme covering governance, political science, economics, policy analysis and public administration.",
    },
    ["BA Public Policy fees", "UG eligibility", "Course duration", "Admission process"],
  ),

  faq(
    "q15-ba-public-policy-duration",
    "UG",
    ["public policy duration", "ba public policy duration"],
    {
      en: "How long is BA Public Policy?",
    },
    {
      en: "BA Public Policy is a 3 year undergraduate programme.",
    },
    ["BA Public Policy fees", "BA Public Policy details", "UG eligibility"],
  ),

  faq(
    "q16-ba-public-policy-fees",
    "Fees",
    ["public policy fees", "ba public policy fees", "public policy fee"],
    {
      en: "What are the BA Public Policy fees?",
    },
    {
      en: "BA Public Policy fee is Rs. 20,000 per year and Rs. 60,000 for the full 3 year programme.",
    },
    ["BA Public Policy details", "Scholarships", "Fee payment methods"],
  ),

  faq(
    "q17-ba-public-policy-eligibility",
    "Eligibility",
    ["public policy eligibility", "ba public policy eligibility"],
    {
      en: "What is the eligibility for BA Public Policy?",
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
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
    },
    {
      en: "MA Islamic Studies is a 2 year PG programme covering Quranic sciences, Hadith, Islamic history, jurisprudence and contemporary Islamic thought.",
    },
    ["MA Islamic Studies fees", "PG courses", "Course duration", "Admission process"],
  ),

  faq(
    "q19-ma-islamic-duration",
    "PG",
    ["ma islamic duration", "ma islamic studies duration"],
    {
      en: "How long is MA Islamic Studies?",
    },
    {
      en: "MA Islamic Studies is a 2 year postgraduate programme.",
    },
    ["MA Islamic Studies fees", "PG eligibility", "PG courses"],
  ),

  faq(
    "q20-ma-islamic-fees",
    "Fees",
    ["ma islamic fees", "ma islamic studies fees"],
    {
      en: "What are the MA Islamic Studies fees?",
    },
    {
      en: "MA Islamic Studies fee is Rs. 22,000 per year and Rs. 44,000 for the full programme.",
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
    },
    {
      en: "MBA is a 2 year postgraduate programme with specialisations in Finance, Marketing, Human Resource, Systems and Operations Management.",
    },
    ["MBA fees", "MBA eligibility", "MBA specialisations", "PG courses"],
  ),

  faq(
    "q22-mba-duration",
    "PG",
    ["mba duration", "mba years", "how long mba"],
    {
      en: "How long is MBA?",
    },
    {
      en: "MBA is a 2 year postgraduate programme with 4 semesters.",
    },
    ["MBA fees", "MBA eligibility", "MBA specialisations"],
  ),

  faq(
    "q23-mba-fees",
    "Fees",
    ["mba fees", "mba fee", "mba cost"],
    {
      en: "What are the MBA fees?",
    },
    {
      en: "MBA fees are ₹25,000 per semester.",
    },
    ["MBA eligibility", "MBA specialisations", "Fee payment methods"],
  ),

  faq(
    "q24-mba-eligibility",
    "Eligibility",
    ["mba eligibility", "mba qualification", "mba eligible"],
    {
      en: "What is the MBA eligibility?",
    },
    {
      en: "MBA eligibility is a Bachelor's degree of minimum 3 years from a recognised university with at least 50% aggregate marks. Work experience is preferred but not mandatory.",
    },
    ["MBA fees", "MBA specialisations", "Admission process"],
  ),

  faq(
    "q25-mba-specialisations",
    "PG",
    ["mba specialisations", "mba specialization", "finance", "marketing", "hr", "operations"],
    {
      en: "What are the MBA specialisations?",
    },
    {
      en: "MBA specialisations include Finance, Marketing, Human Resource Management, Systems and Operations Management.",
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
    },
    {
      en: "MCA is a 2 year postgraduate programme in Computer Applications covering programming, databases, web technologies, cloud and a final semester project.",
    },
    ["MCA fees", "MCA eligibility", "Course duration", "PG courses"],
  ),

  faq(
    "q27-mca-duration",
    "PG",
    ["mca duration", "mca years", "how long mca"],
    {
      en: "How long is MCA?",
    },
    {
      en: "MCA is a 2 year postgraduate programme with 4 semesters.",
    },
    ["MCA fees", "MCA eligibility", "MCA details"],
  ),

  faq(
    "q28-mca-fees",
    "Fees",
    ["mca fees", "mca fee", "mca cost"],
    {
      en: "What are the MCA fees?",
    },
    {
      en: "MCA fees are ₹20,000 for Indian students and $750 for foreign nationals.",
    },
    ["MCA eligibility", "Fee payment methods", "PG courses"],
  ),

  faq(
    "q29-mca-eligibility",
    "Eligibility",
    ["mca eligibility", "mca qualification", "mca eligible", "maths mca"],
    {
      en: "What is the MCA eligibility?",
    },
    {
      en: "MCA eligibility is a Bachelor's degree of minimum 3 years with Mathematics at 10+2 or graduate level and at least 50% aggregate marks.",
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
    },
    {
      en: "The admission process includes online application, document upload, application fee payment, eligibility verification and enrolment.",
    },
    ["How do I apply?", "Required documents", "Application fee", "Admission dates"],
    {
      label: "Apply Now",
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q31-apply-online",
    "Admission",
    ["apply", "apply online", "online application", "application form", "register"],
    {
      en: "How do I apply online?",
    },
    {
      en: "Click Apply Now, register with your mobile number and email, complete the application form, upload documents and pay the application fee online.",
    },
    ["Admission process", "Required documents", "Application fee"],
    {
      label: "Apply Now",
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q32-admission-open",
    "Admission",
    ["admission open", "admissions open", "when admission", "admission date", "2026 admission"],
    {
      en: "When do admissions open?",
    },
    {
      en: "According to the current knowledge base, admissions for the 2026-2027 academic year are open. The July cycle closes on 31 July and the January cycle closes on 31 January.",
    },
    ["Admission process", "Apply Now", "Required documents"],
    {
      label: "Apply Now",
      url: ADMISSION_LINK,
    },
  ),

  faq(
    "q33-documents",
    "Admission",
    ["documents", "required documents", "certificates", "mark sheet", "upload documents"],
    {
      en: "What documents are required?",
    },
    {
      en: "Required documents include 10th and 12th mark sheets, degree certificate and consolidated marks for PG, transfer certificate, ID proof, passport-size photo and community certificate if applicable.",
    },
    ["Admission process", "How do I apply?", "Application fee"],
  ),

  faq(
    "q34-application-fee",
    "Admission",
    [
      "application fee",
      "application fees",
      "registration fee",
      "application cost",
      "apply fee",
      "fee to apply",
      "1000 fee",
    ],
    {
      en: "What is the application fee?",
    },
    {
      en: 'New applicants: create an account with "New Registration" first, then sign in with "Apply Online" to fill the form and pay the application fee (₹1,000 for Indian applicants and $15 for foreign nationals).',
    },
    ["How do I apply?", "Admission process", "Fee payment methods"],
    {
      label: "Apply Online",
      url: APPLICATION_PORTAL_LINK,
    },
  ),

  faq(
    "q35-entrance-exam",
    "Admission",
    ["entrance exam", "entrance test", "exam for admission", "admission test"],
    {
      en: "Is there an entrance exam?",
    },
    {
      en: "For the distance education programmes described in the knowledge base, there is no entrance exam. Admission is based on qualifying examination merit and document verification.",
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
    },
    {
      en: "UG eligibility is a pass in 10+2 or an equivalent examination from a recognised board.",
    },
    ["UG courses", "Admission process", "Required documents"],
  ),

  faq(
    "q37-pg-eligibility",
    "Eligibility",
    ["pg eligibility", "postgraduate eligibility", "masters eligibility"],
    {
      en: "What is the PG eligibility?",
    },
    {
      en: "PG eligibility depends on the programme. MBA requires a recognised Bachelor's degree with at least 50% marks. MCA requires a minimum 3 year Bachelor's degree with Mathematics and at least 50% marks.",
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
    },
    {
      en: "MBA fees are ₹25,000 per semester, MCA fees are ₹20,000 for Indian students and $750 for foreign nationals, and BA Islamic Studies fees are ₹15,000 per year.",
    },
    ["MBA fees", "MCA fees", "BA English fees", "Scholarships"],
  ),

  faq(
    "q39-fee-payment",
    "Fees",
    ["fee payment", "payment methods", "upi", "card", "net banking", "installment"],
    {
      en: "How can I pay the fees?",
    },
    {
      en: "Fees can be paid online through UPI, debit or credit card and net banking. Demand draft is also mentioned as an offline option. Semester-wise instalments are permitted.",
    },
    ["Fee structure", "Scholarships", "Admission process"],
  ),

  faq(
    "q40-fee-refund",
    "Fees",
    ["refund", "fee refund", "cancel admission", "withdraw"],
    {
      en: "What is the fee refund policy?",
    },
    {
      en: "The knowledge base states that refunds follow UGC norms. The application fee is non-refundable.",
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
    },
    {
      en: "Yes. The knowledge base mentions merit scholarships of up to 25% of tuition for students scoring above 80% in the qualifying examination.",
    },
    ["Who is eligible for scholarship?", "Government scholarship", "Required documents"],
  ),

  faq(
    "q42-government-scholarship",
    "Scholarship",
    ["government scholarship", "nsp", "minority scholarship", "sc st scholarship"],
    {
      en: "Is government scholarship support available?",
    },
    {
      en: "The scholarship cell assists students with National Scholarship Portal, minority and SC/ST state scholarship applications.",
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
    },
    {
      en: "Yes. Separate hostels for men and women are available with furnished rooms, Wi-Fi, dining, laundry, 24x7 security and a resident warden.",
    },
    ["Hostel fees", "Hostel rules", "Campus facilities"],
  ),

  faq(
    "q44-hostel-fees",
    "Hostel",
    ["hostel fees", "hostel fee", "hostel cost", "ac hostel", "non ac hostel"],
    {
      en: "What are the hostel fees?",
    },
    {
      en: "Hostel charges are Rs. 65,000 per year for AC and Rs. 48,000 per year for non-AC, including mess. A refundable caution deposit of Rs. 5,000 applies.",
    },
    ["Hostel facilities", "Hostel rules", "Admission process"],
  ),

  faq(
    "q45-hostel-rules",
    "Hostel",
    ["hostel rules", "hostel timing", "curfew", "hostel discipline"],
    {
      en: "What are the hostel rules?",
    },
    {
      en: "The hostel gate closes at 9:30 PM. Biometric attendance is compulsory. Ragging and smoking are prohibited. Visitors are allowed only in the visitors' lounge.",
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
    },
    {
      en: "Facilities include smart classrooms, computer and research labs, digital library, Wi-Fi campus, sports grounds, gymnasium, prayer hall, medical centre, canteen and auditorium.",
    },
    ["Hostel facilities", "Library", "Transport"],
  ),

  faq(
    "q47-campus-location",
    "Campus",
    ["campus", "location", "address", "where", "vandalur", "chennai"],
    {
      en: "Where is the campus located?",
    },
    {
      en: "The campus is located at Vandalur, GST Road, Chennai - 600048, Tamil Nadu.",
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
    },
    {
      en: "The central library has over 90,000 books, national and international journals, e-books and access to DELNET and N-LIST digital resources.",
    },
    ["Campus facilities", "Online study material", "College timings"],
  ),

  faq(
    "q49-library-timing",
    "Library",
    ["library timing", "library hours", "library open"],
    {
      en: "What are the library timings?",
    },
    {
      en: "The knowledge base states that the library is open from 8:30 AM to 8:00 PM on working days.",
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
    },
    {
      en: "Yes. Enrolled students get LMS access with self-learning material, recorded video lectures, assignments and previous question papers.",
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
    },
    {
      en: "Yes. College buses operate on major Chennai routes including Tambaram, Guindy, T. Nagar, Poonamallee and Chengalpattu.",
    },
    ["Transport fees", "Campus location", "Hostel"],
  ),

  faq(
    "q52-transport-fees",
    "Transport",
    ["transport fees", "bus fees", "transport fee"],
    {
      en: "What are the transport fees?",
    },
    {
      en: "Annual transport fee ranges from Rs. 12,000 to Rs. 20,000 depending on distance.",
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
    },
    {
      en: "There are two sessions: July-December and January-June. Semester examinations are held in November-December and May-June.",
    },
    ["Exam pattern", "Exam centres", "College timings"],
  ),

  faq(
    "q54-exam-pattern",
    "Academic",
    ["exam pattern", "examination", "assessment", "marks", "passing"],
    {
      en: "What is the examination pattern?",
    },
    {
      en: "Assessment is 25% internal assignments and 75% end-semester examination. The knowledge base states minimum pass marks of 50% for PG and 40% for UG.",
    },
    ["Academic calendar", "Exam centres", "Attendance"],
  ),

  faq(
    "q55-exam-centres",
    "Academic",
    ["exam centre", "exam center", "exam venue", "where exams"],
    {
      en: "Where are exams conducted?",
    },
    {
      en: "Examinations are conducted at the main campus and designated learner support centres across Tamil Nadu. Hall tickets are issued through the LMS.",
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
    },
    {
      en: "The admission office is open Monday to Saturday from 9:00 AM to 5:00 PM. Sundays and public holidays are closed. Online applications are available 24x7.",
    },
    ["Admission process", "Apply Now", "Contact college"],
  ),

  faq(
    "q57-college-time",
    "Contact",
    ["college time", "college timings", "working time", "working hours"],
    {
      en: "What are the college working timings?",
    },
    {
      en: "For admission-related office support, the knowledge base states Monday to Saturday, 9:00 AM to 5:00 PM. Online applications can be submitted 24x7.",
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
    },
    {
      en: "The medium of instruction and examination is English for all programmes, except Islamic Studies papers that may include Arabic and Urdu texts.",
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
    },
    {
      en: "Distance education students must attend at least 75% of scheduled weekend contact classes or complete equivalent recorded sessions on the LMS before examinations.",
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
    },
    {
      en: "Student support includes academic mentoring, helpdesk, career counselling, placement guidance, grievance redressal and an anti-ragging committee.",
    },
    ["Placement assistance", "Contact college", "Campus facilities"],
  ),

  faq(
    "q61-placement",
    "Support",
    ["placement", "job", "career", "internship", "recruitment"],
    {
      en: "Is placement assistance provided?",
    },
    {
      en: "The career development cell provides resume building, mock interviews, internship referrals and access to campus recruitment drives for eligible final-year students.",
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
    },
    {
      en: "The knowledge base lists the admission cell contact as +91 44 2275 1347 and admissions@crescent.education. WhatsApp support is mentioned during office hours.",
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
    },
    {
      en: "Digital ID cards are issued through the LMS within 15 days of enrolment.",
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
    },
    {
      en: "The knowledge base states that provisional certificates are issued within 30 days of the final result and the original degree is awarded at the annual March convocation.",
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
    },
    {
      en: "Yes. The knowledge base states that international and NRI candidates can apply online with an equivalence certificate from the Association of Indian Universities.",
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
    },
    {
      en: "Credit transfer may be permitted for an equivalent UGC-recognised programme, subject to academic committee evaluation.",
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
    },
    {
      en: "UG programmes are 3 years or 6 semesters. PG programmes MBA, MCA and MA Islamic Studies are 2 years or 4 semesters.",
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
    },
    {
      en: "The knowledge base states that online applications can be submitted 24x7.",
    },
    ["Apply Now", "Admission process", "Office timings"],
    {
      label: "Apply Now",
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
    },
    {
      en: "The knowledge base also lists a 3 year Degree Program in Mobile Application Development covering Android, iOS, Flutter, React Native, UI/UX and app deployment.",
    },
    ["Course duration", "Fee structure", "Admission process"],
  ),

  faq(
    "q70-mobile-app-fees",
    "Fees",
    ["mobile application fees", "app development fees", "mobile app fee"],
    {
      en: "What are the Mobile Application Development fees?",
    },
    {
      en: "The knowledge base states Rs. 30,000 per year and Rs. 90,000 for the full 3 year programme.",
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
    },
    {
      en: "You can choose BA English, BA Islamic Studies or BA Public Policy.",
    },
    ["BA English", "BA Islamic Studies", "BA Public Policy"],
  ),

  faq(
    "q72-which-pg",
    "Courses",
    ["which pg", "pg programme", "masters courses"],
    {
      en: "What PG programmes can I choose?",
    },
    {
      en: "You can choose MA Islamic Studies, MBA or MCA.",
    },
    ["MBA", "MCA", "MA Islamic Studies"],
  ),

  faq(
    "q73-12th",
    "Eligibility",
    ["12th", "plus two", "after 12th", "school student"],
    {
      en: "Can I apply after 12th?",
    },
    {
      en: "Yes. The UG eligibility states that candidates who pass 10+2 or an equivalent recognised examination can apply.",
    },
    ["UG courses", "UG eligibility", "Admission process"],
  ),

  faq(
    "q74-degree-holder",
    "Eligibility",
    ["degree holder", "after degree", "graduate", "bachelor holder"],
    {
      en: "Can a degree holder apply for PG?",
    },
    {
      en: "Yes, programme-specific PG eligibility applies. MBA requires a recognised Bachelor's degree and MCA requires a minimum 3 year Bachelor's degree with Mathematics.",
    },
    ["MBA eligibility", "MCA eligibility", "PG courses"],
  ),

  faq(
    "q75-mba-work",
    "Eligibility",
    ["mba work experience", "mba experience", "work experience"],
    {
      en: "Is work experience required for MBA?",
    },
    {
      en: "Work experience is preferred but not mandatory according to the knowledge base.",
    },
    ["MBA eligibility", "MBA fees", "MBA specialisations"],
  ),

  faq(
    "q76-mca-maths",
    "Eligibility",
    ["mca maths", "mathematics mca", "maths required"],
    {
      en: "Is Mathematics required for MCA?",
    },
    {
      en: "Yes. Mathematics is required at 10+2 or graduate level according to the MCA eligibility in the knowledge base.",
    },
    ["MCA eligibility", "MCA fees", "Admission process"],
  ),

  faq(
    "q77-application-status",
    "Admission",
    ["application status", "check application", "application tracking", "status"],
    {
      en: "How can I check my application status?",
    },
    {
      en: "Use the application or student portal provided after registration. If you need assistance, contact the admission cell.",
    },
    ["Admission process", "Contact college", "Office timings"],
  ),

  faq(
    "q78-confirmation",
    "Admission",
    ["confirmation", "admission confirmation", "confirmation email", "confirmation sms"],
    {
      en: "When will I receive admission confirmation?",
    },
    {
      en: "The application process includes confirmation after submission and verification. The knowledge base mentions confirmation through SMS and email after online application.",
    },
    ["Application status", "Admission process", "Contact college"],
  ),

  faq(
    "q79-enrolment",
    "Admission",
    ["enrolment", "enrollment number", "admission number", "registration number"],
    {
      en: "When will I get my enrolment number?",
    },
    {
      en: "After eligibility verification and fee payment, the admission process states that an enrolment number is issued.",
    },
    ["Admission process", "Application status", "ID card"],
  ),

  faq(
    "q80-scholarship-eligibility",
    "Scholarship",
    ["scholarship eligibility", "who gets scholarship", "merit eligibility"],
    {
      en: "Who is eligible for the merit scholarship?",
    },
    {
      en: "The knowledge base states that students scoring above 80% in the qualifying examination can receive merit scholarship support of up to 25% of tuition.",
    },
    ["Scholarships", "Government scholarship", "Required documents"],
  ),

  faq(
    "q81-hostel-wifi",
    "Hostel",
    ["hostel wifi", "wifi hostel", "internet hostel"],
    {
      en: "Is Wi-Fi available in the hostel?",
    },
    {
      en: "Yes. Wi-Fi is listed among the hostel facilities in the knowledge base.",
    },
    ["Hostel facilities", "Hostel fees", "Campus facilities"],
  ),

  faq(
    "q82-hostel-security",
    "Hostel",
    ["hostel security", "24x7 security", "warden"],
    {
      en: "Is hostel security available?",
    },
    {
      en: "Yes. Hostel facilities include 24x7 security and a resident warden.",
    },
    ["Hostel facilities", "Hostel rules", "Hostel fees"],
  ),

  faq(
    "q83-weekend",
    "Academic",
    ["weekend classes", "contact classes", "saturday sunday classes"],
    {
      en: "Are contact classes conducted on weekends?",
    },
    {
      en: "Yes. The academic calendar mentions contact classes scheduled on weekends.",
    },
    ["Attendance", "Academic calendar", "Online study material"],
  ),

  faq(
    "q84-pass-mark",
    "Academic",
    ["pass mark", "passing marks", "minimum marks", "pass percentage"],
    {
      en: "What are the minimum passing marks?",
    },
    {
      en: "The knowledge base states 50% minimum aggregate per course for PG and 40% for UG.",
    },
    ["Exam pattern", "Academic calendar", "Attendance"],
  ),

  faq(
    "q85-lms",
    "Academic",
    ["lms", "student portal", "online portal", "learning management"],
    {
      en: "What is available in the LMS?",
    },
    {
      en: "The LMS provides self-learning material, recorded video lectures, assignments and previous question papers.",
    },
    ["Online study material", "Attendance", "Exam centres"],
  ),

  faq(
    "q86-bonafide",
    "Support",
    ["bonafide", "bonafide certificate", "certificate request"],
    {
      en: "How can I get a bonafide certificate?",
    },
    {
      en: "Bonafide certificates can be requested from the student support desk and the knowledge base states they are issued within 3 working days.",
    },
    ["Student support", "ID card", "Contact college"],
  ),

  faq(
    "q87-medical",
    "Campus",
    ["medical", "medical centre", "health facility", "doctor"],
    {
      en: "Is there a medical facility on campus?",
    },
    {
      en: "Yes. A medical centre is listed among the campus facilities.",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q88-sports",
    "Campus",
    ["sports", "sports ground", "games", "gym"],
    {
      en: "Are sports facilities available?",
    },
    {
      en: "Yes. Sports grounds and a gymnasium are listed among the campus facilities.",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q89-canteen",
    "Campus",
    ["canteen", "food", "dining", "mess"],
    {
      en: "Is a canteen available?",
    },
    {
      en: "Yes. A canteen is listed among the campus facilities. Hostel accommodation also includes mess according to the hostel fee information.",
    },
    ["Campus facilities", "Hostel fees", "Hostel facilities"],
  ),

  faq(
    "q90-prayer",
    "Campus",
    ["prayer hall", "prayer", "mosque", "prayer facility"],
    {
      en: "Is a prayer facility available?",
    },
    {
      en: "A prayer hall is listed among the campus facilities.",
    },
    ["Campus facilities", "Hostel", "Student support"],
  ),

  faq(
    "q91-library-books",
    "Library",
    ["library books", "how many books", "books library"],
    {
      en: "How many books are available in the library?",
    },
    {
      en: "The knowledge base states that the central library holds over 90,000 books.",
    },
    ["Library facilities", "Library timings", "Digital resources"],
  ),

  faq(
    "q92-digital-resources",
    "Library",
    ["delnet", "n list", "digital resources", "ebooks", "online library"],
    {
      en: "Does the library provide digital resources?",
    },
    {
      en: "Yes. The library provides e-books and access to DELNET and N-LIST digital resources.",
    },
    ["Library", "Online study material", "LMS"],
  ),

  faq(
    "q93-transport-routes",
    "Transport",
    ["bus routes", "transport routes", "tambaram bus", "guindy bus"],
    {
      en: "Which routes have college bus service?",
    },
    {
      en: "Major routes mentioned include Tambaram, Guindy, T. Nagar, Poonamallee and Chengalpattu.",
    },
    ["Transport facility", "Transport fees", "Campus location"],
  ),

  faq(
    "q94-jan-july",
    "Admission",
    ["january admission", "july admission", "admission cycle", "session"],
    {
      en: "What are the admission cycles?",
    },
    {
      en: "The knowledge base mentions July-December and January-June academic sessions. Admission cycles are mentioned for July and January.",
    },
    ["Admission dates", "Academic calendar", "Admission process"],
  ),

  faq(
    "q95-exam-fee",
    "Fees",
    ["exam fee", "exam fees", "semester exam fee"],
    {
      en: "What is the exam fee?",
    },
    {
      en: "The fee overview in the knowledge base states an exam fee of Rs. 1,500 per semester.",
    },
    ["Fee structure", "Exam pattern", "Fee payment methods"],
  ),

  faq(
    "q96-career",
    "Support",
    ["career", "career guidance", "career counselling", "jobs"],
    {
      en: "Is career guidance available?",
    },
    {
      en: "Yes. Student support includes career counselling and placement guidance.",
    },
    ["Placement assistance", "Student support", "Courses"],
  ),

  faq(
    "q97-ragging",
    "Support",
    ["ragging", "anti ragging", "ragging rules"],
    {
      en: "Is ragging allowed?",
    },
    {
      en: "No. Ragging is strictly prohibited according to the hostel rules and an anti-ragging committee is listed under student support.",
    },
    ["Hostel rules", "Student support", "Campus facilities"],
  ),

  faq(
    "q98-smoking",
    "Hostel",
    ["smoking", "smoking rules", "hostel smoking"],
    {
      en: "Is smoking allowed in the hostel?",
    },
    {
      en: "No. Smoking is strictly prohibited according to the hostel rules.",
    },
    ["Hostel rules", "Hostel facilities", "Student support"],
  ),

  faq(
    "q99-application-help",
    "Admission",
    ["admission help", "application help", "help applying", "apply help"],
    {
      en: "Can someone help me with the admission application?",
    },
    {
      en: "Yes. You can contact the admission cell during office hours for application-related assistance.",
    },
    ["Admission process", "Office timings", "Contact college"],
  ),

  faq(
    "q100-enquiry",
    "Enquiry",
    ["enquiry", "enquire", "contact admission", "need help", "talk to college"],
    {
      en: "How can I make an enquiry?",
    },
    {
      en: "You can use the Enquire Now form on the website or contact the admission cell during office hours.",
    },
    ["Contact college", "Office timings", "Admission process"],
  ),
];

/* =========================================================
   GREETING CHECK
   ========================================================= */

export function isGreeting(input: string): boolean {
  const text = input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return false;

  return greetings.some((greeting) => greeting.toLowerCase() === text);
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

export function findBestFaq(input: string): BotFaqEntry | null {
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
    const faqQuestion = normalizeText(item.question);

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

export function getBotAnswer(input: string) {
  if (isGreeting(input)) {
    return {
      type: "greeting" as const,
      answer: greetingResponse,
      faq: null,
      suggestions: ["UG courses", "PG courses", "Admission process", "Fees"],
    };
  }

  if (isFeeQuestion(input)) {
    return {
      type: "fees" as const,
      answer: feeResponse,
      faq: null,
      suggestions: ["MBA fees", "MCA fees", "BA Islamic Studies fees"],
    };
  }

  const matchedFaq = findBestFaq(input);

  if (!matchedFaq) {
    return {
      type: "out-of-scope" as const,
      answer: outOfScopeResponse,
      faq: null,
      suggestions: ["UG courses", "PG courses", "Admission process", "Fees"],
    };
  }

  return {
    type: "faq" as const,
    answer: matchedFaq.answer,
    faq: matchedFaq,
    suggestions: matchedFaq.suggestions || [],
    link: matchedFaq.link || null,
  };
}

/* =========================================================
   QUICK QUESTIONS
   ========================================================= */

export const quickQuestions = [
  "UG courses",
  "PG courses",
  "MBA fees",
  "MCA eligibility",
  "Admission process",
  "Hostel facilities",
];

/* =========================================================
   EXPORT DEFAULT
   ========================================================= */

export default faqs;
