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
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-2 block">
          {index}
        </span>
        <h2 className="font-sora text-4xl font-extrabold tracking-tighter uppercase">
          {title}
        </h2>
      </div>
      {aside ? (
        <div className="max-w-xs text-xs text-ink/50 uppercase leading-relaxed font-bold">
          {aside}
        </div>
      ) : null}
    </div>
  );
}
