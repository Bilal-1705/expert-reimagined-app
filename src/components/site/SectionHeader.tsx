import type { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  aside,
}: {
  index: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 reveal" data-reveal>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3 block">
          {index}
        </span>
        <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-[0.95]">
          {title}
        </h2>
        <span className="mt-4 block h-px w-16 bg-ink origin-left scale-x-0 transition-transform duration-1000 delay-300 [.is-revealed_&]:scale-x-100" />
      </div>
      {aside ? (
        <div className="max-w-xs text-xs text-ink/50 uppercase leading-relaxed font-bold">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
