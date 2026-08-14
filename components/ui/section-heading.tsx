import { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, align = "center", className }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={cn("flex flex-col", alignment, className)}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neo-gray">{eyebrow}</p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neo-ink sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
