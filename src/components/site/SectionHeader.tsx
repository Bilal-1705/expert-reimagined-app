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
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 md:mb-16">
      <div className="min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3 block">
          {index}
        </span>
        <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-[0.95]">
          {title}
        </h2>
        <span className="mt-5 block h-px w-16 bg-ink animate-line" />
      </div>
      {aside ? (
        <div className="max-w-xs text-xs text-ink/70 uppercase leading-relaxed font-bold">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
