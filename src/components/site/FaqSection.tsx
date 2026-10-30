import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./Section";

const faqs = [
  {
    q: "Is a distance education degree from your institute valid?",
    a: "Yes. All programmes are offered through UGC-DEB approved universities and hold the same recognition as regular degrees for employment and higher studies.",
  },
  {
    q: "Do I need to attend the campus?",
    a: "No. Admission, learning and assessments are online. Examinations can be written at your nearest approved centre.",
  },
  {
    q: "What documents are required for admission?",
    a: "Your 10th and 12th marksheets, degree marksheets for PG applicants, a government ID proof and a passport-size photograph.",
  },
  {
    q: "Can I pay the fee in instalments?",
    a: "Yes. Semester-wise and monthly instalment plans are available. The admission office will share a schedule with your offer.",
  },
  {
    q: "How do classes work on the LMS?",
    a: "You receive digital study material, recorded lectures, live weekend sessions, assignments and mock tests inside the learning portal.",
  },
  {
    q: "Is placement support included?",
    a: "Yes. Registered students get resume reviews, interview preparation and access to our placement drives at no extra cost.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers before you apply"
        description="Still unsure? Our counsellors are a WhatsApp message away."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
