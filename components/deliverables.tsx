import { Sparkles, Smartphone, MessageCircle, Share2, Gauge, Search, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DELIVERABLES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Smartphone,
  MessageCircle,
  Share2,
  Gauge,
  Search,
};

export function Deliverables() {
  return (
    <section id="entregamos" aria-labelledby="entregamos-heading" className="bg-neo-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="O que entregamos"
          title={<span id="entregamos-heading">Tudo o que seu site precisa para performar</span>}
          className="mx-auto mb-16"
        />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {DELIVERABLES.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.1}>
                <Icon size={20} strokeWidth={1.75} className="mb-4 text-neo-ink" aria-hidden="true" />
                <h3 className="mb-2 text-base font-semibold text-neo-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neo-gray">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
