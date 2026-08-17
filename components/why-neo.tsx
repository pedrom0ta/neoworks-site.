import { ShieldCheck, Clock, FileText, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_NEO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  FileText,
  Sparkles,
};

export function WhyNeo() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-heading" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="Por que a NEO"
          title={<span id="diferenciais-heading">Seu projeto sem complicação.</span>}
          className="mx-auto mb-16"
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {WHY_NEO.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.1} className="h-full">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ease-neo",
                    item.highlight
                      ? "border-neo-ink bg-neo-ink text-white shadow-[0_20px_44px_rgba(43,38,40,0.2)] sm:col-span-2 md:col-span-1"
                      : "border-neo-ink/[0.08] bg-neo-bg"
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 flex h-10 w-10 items-center justify-center rounded-full",
                      item.highlight ? "bg-white/10" : "bg-white"
                    )}
                  >
                    <Icon size={18} strokeWidth={1.75} className={item.highlight ? "text-white" : "text-neo-ink"} aria-hidden="true" />
                  </div>
                  <h3 className={cn("mb-2 text-base font-semibold", item.highlight ? "text-white" : "text-neo-ink")}>
                    {item.title}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", item.highlight ? "text-white/70" : "text-neo-gray")}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
