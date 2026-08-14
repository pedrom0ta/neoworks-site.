import { Smartphone, LayoutGrid, ShoppingCart, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Smartphone,
  LayoutGrid,
  ShoppingCart,
};

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: keyof typeof ICONS;
  delay: number;
}

function ServiceCard({ title, items, icon, delay }: ServiceCardProps) {
  const Icon = ICONS[icon];

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group h-full rounded-2xl border border-neo-ink/[0.08] bg-white p-8 shadow-[0_1px_2px_rgba(43,38,40,0.04)] transition-all duration-300 ease-neo hover:-translate-y-1.5 hover:border-neo-ink/20 hover:shadow-[0_24px_48px_rgba(43,38,40,0.12)]">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-neo-bg text-neo-ink transition-colors duration-300 group-hover:bg-neo-ink group-hover:text-white">
          <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h3 className="mb-5 text-lg font-semibold text-neo-ink">{title}</h3>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-neo-gray">
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-neo-gray" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-heading" className="bg-neo-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-container">
        <SectionHeading
          eyebrow="O que fazemos"
          title={<span id="servicos-heading">Soluções sob medida para presença digital</span>}
          className="mx-auto mb-16"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} title={service.title} items={service.items} icon={service.icon} delay={index * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
