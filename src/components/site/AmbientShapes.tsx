export function AmbientShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-primary-glow/15 blur-3xl" />
      <div
        className="animate-float-slow absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}