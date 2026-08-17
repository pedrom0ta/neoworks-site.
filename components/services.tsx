import { Smartphone, LayoutGrid, Check, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { SERVICES, CONTACT, COMMERCIAL_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Smartphone,
  LayoutGrid,
};

interface ServiceCardProps {
  title: string;
  price: string;
  priceNote: string;
  description: string;
  items: string[];
  icon: keyof typeof ICONS;
  cta: string;
  highlight: boolean;
  delay: number;
}

function ServiceCard({ title, price, priceNote, description, items, icon, cta, highlight, delay }: ServiceCardProps) {
  const Icon = ICONS[icon];

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ease-neo hover:-translate-y-1.5 md:p-10",
          highlight
            ? "border-neo-ink bg-neo-ink text-white shadow-[0_24px_56px_rgba(43,38,40,0.22)] hover:shadow-[0_32px_64px_rgba(43,38,40,0.3)]"
            : "border-neo-ink/[0.08] bg-white shadow-[0_1px_2px_rgba(43,38,40,0.04)] hover:border-neo-ink/20 hover:shadow-[0_24px_48px_rgba(43,38,40,0.12)]"
        )}
      >
        {highlight ? (
          <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neo-ink">
            Mais procurado
          </span>
        ) : null}

        <div
          className={cn(
            "mb-6 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300",
            highlight ? "bg-white/10 text-white" : "bg-neo-bg text-neo-ink group-hover:bg-neo-ink group-hover:text-white"
          )}
        >
          <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h3 className={cn("mb-2 text-xl font-semibold", highlight ? "text-white" : "text-neo-ink")}>{title}</h3>

        <p className={cn("mb-5 text-sm leading-relaxed", highlight ? "text-white/65" : "text-neo-gray")}>{description}</p>

        <div className="mb-6 flex items-baseline gap-2">
          <span className={cn("text-xs uppercase tracking-wide", highlight ? "text-white/50" : "text-neo-gray")}>
            {priceNote}
          </span>
          <span className={cn("text-3xl font-semibold tracking-tight", highlight ? "text-white" : "text-neo-ink")}>
            {price}
          </span>
        </div>

        <ul className="mb-8 space-y-2.5">
          {items.map((item) => (
            <li key={item} className={cn("flex items-start gap-2.5 text-sm", highlight ? "text-white/75" : "text-neo-gray")}>
              <Check size={15} strokeWidth={2} className={cn("mt-0.5 flex-shrink-0", highlight ? "text-white" : "text-neo-ink")} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <ButtonLink
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          variant={highlight ? "light" : "secondary"}
          className="mt-auto w-full"
        >
          {cta}
        </ButtonLink>
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
          title={<span id="servicos-heading">Soluções para sua presença digital</span>}
          className="mx-auto mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              priceNote={service.priceNote}
              description={service.description}
              items={service.items}
              icon={service.icon}
              cta={service.cta}
              highlight={service.highlight}
              delay={index * 0.12}
            />
          ))}
        </div>

        <Reveal delay={0.24} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-neo-gray">
            Hospedagem a partir de {COMMERCIAL_INFO.hospedagem.replace(".", "")} Domínio com valor conforme
            disponibilidade. Esses itens não estão incluídos no valor de desenvolvimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
