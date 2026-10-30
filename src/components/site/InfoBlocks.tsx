import { Reveal } from "./Reveal";
import { Section } from "./Section";
import type { LucideIcon } from "lucide-react";

export type InfoBlock = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
  items?: string[];
  action?: { label: string; href: string };
};

export function InfoBlocks({ blocks }: { blocks: InfoBlock[] }) {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        {blocks.map((block, i) => (
          <Reveal key={block.id} delay={(i % 2) * 0.08}>
            <article
              id={block.id}
              className="h-full scroll-mt-40 rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="bg-gradient-primary flex size-11 items-center justify-center rounded-2xl">
                <block.icon className="size-5 text-primary-foreground" aria-hidden />
              </span>
              <h2 className="mt-5 text-lg font-semibold">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
              {block.items ? (
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {block.action ? (
                <a
                  href={block.action.href}
                  className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {block.action.label}
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
