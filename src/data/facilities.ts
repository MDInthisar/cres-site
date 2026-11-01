import { Clapperboard, Database, Laptop, Sparkles } from "lucide-react";

export const facilitiesNavigation = [
  {
    number: "01",
    label: "Overview",
    description: "All facilities",
    href: "/facilities",
    icon: Sparkles,
  },
  {
    number: "02",
    label: "Studio",
    description: "Content production",
    href: "/studio",
    icon: Clapperboard,
  },
  {
    number: "03",
    label: "LMS",
    description: "Digital learning",
    href: "/lms",
    icon: Laptop,
  },
  {
    number: "04",
    label: "Datacenter",
    description: "Digital infrastructure",
    href: "/datacenter",
    icon: Database,
  },
] as const;

export type FacilityRoute = (typeof facilitiesNavigation)[number]["href"];
