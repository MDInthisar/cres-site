import { circularFont } from "@/lib/fonts";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import campusImage from "@/assets/campus-1.jpg";
import { ProgrammeCards } from "@/components/site/ProgrammeCards";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Programmes Offered — Crescent Centre for Online Education";

const description =
  "Discover undergraduate, postgraduate and professional certification programmes designed to support academic growth and career development.";

const programmeCategories = [
  {
    number: "01",
    title: "Undergraduate",
    subtitle: "Build a strong academic foundation.",
    description:
      "Explore undergraduate programmes that help you develop essential knowledge, practical skills and confidence for the next stage of your journey.",
    icon: BookOpen,
    accent: "#8f1d1d",
    background: "bg-[#8f1d1d]/[0.06]",
  },
  {
    number: "02",
    title: "Postgraduate",
    subtitle: "Advance your knowledge and expertise.",
    description:
      "Deepen your understanding, strengthen your professional capabilities and prepare for greater opportunities through advanced study.",
    icon: GraduationCap,
    accent: "#172554",
    background: "bg-[#172554]/[0.06]",
  },
  {
    number: "03",
    title: "Professional Certification",
    subtitle: "Learn skills that move you forward.",
    description:
      "Develop practical, career-focused skills through professional learning opportunities designed to complement your ambitions.",
    icon: Sparkles,
    accent: "#8a6a24",
    background: "bg-[#8a6a24]/[0.08]",
  },
];

function ProgrammesPage() {
  return (
    <SiteLayout>
      <main
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
        style={circularFont}
      >

        {/* Programme category introduction */}
      

        {/* Existing programme listings */}
        

            <div className="[&_h2]:text-2xl [&_h2]:font-black sm:[&_h2]:text-3xl lg:[&_h2]:text-4xl [&_h3]:text-xl [&_h3]:font-bold sm:[&_h3]:text-2xl">
              <ProgrammeCards />
            </div>
      </main>
    </SiteLayout>
  );
}

export default ProgrammesPage;
