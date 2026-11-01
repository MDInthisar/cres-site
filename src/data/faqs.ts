export type FaqItem = {
  question: string;
  answer: string;
  alternateAnswer?: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Is a distance education degree from your institute valid?",
    answer:
      "Programme recognition and validity depend on the applicable approvals, regulations and the specific programme. Students should review the current official programme and regulatory information before applying.",
    alternateAnswer:
      "Yes. All programmes are offered through UGC-DEB approved universities and hold the same recognition as regular degrees for employment and higher studies.",
  },
  {
    question: "Do I need to attend the campus?",
    answer:
      "Distance education is designed to provide flexibility for learners. Most academic activities can be accessed through the prescribed learning system, while required academic or examination activities will follow the applicable programme guidelines.",
    alternateAnswer:
      "No. Admission, learning and assessments are online. Examinations can be written at your nearest approved centre.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "Applicants generally need academic qualification documents, identity proof, photographs and other documents requested during the admission process. Exact requirements may vary depending on the programme.",
    alternateAnswer:
      "Your 10th and 12th marksheets, degree marksheets for PG applicants, a government ID proof and a passport-size photograph.",
  },
  {
    question: "Can I pay the fee in instalments?",
    answer:
      "Fee payment options depend on the programme and applicable fee structure. Students can check the current admission and fee details for available payment options.",
    alternateAnswer:
      "Yes. Semester-wise and monthly instalment plans are available. The admission office will share a schedule with your offer.",
  },
  {
    question: "How do classes work on the LMS?",
    answer:
      "Students can access learning resources and academic support through the Learning Management System. Course materials, announcements and other learning activities are provided through the prescribed digital platform.",
    alternateAnswer:
      "You receive digital study material, recorded lectures, live weekend sessions, assignments and mock tests inside the learning portal.",
  },
  {
    question: "Is placement support included?",
    answer:
      "Student career and placement support may include guidance, career resources and opportunities made available through the institute. Specific placement services can vary by programme and eligibility.",
    alternateAnswer:
      "Yes. Registered students get resume reviews, interview preparation and access to our placement drives at no extra cost.",
  },
];
