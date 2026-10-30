import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <header className="sticky top-0 z-[100]">
        <Marquee compact />
        <MainNav compact />
      </header>
    );
  }

  return (
    <>
      <Marquee />
      <TopHeader />
      <MainNav />
    </>
  );
}
