import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

const CHECKLIST = ["Pagamento após a entrega", "Até 30 dias úteis", "Nota Fiscal"];

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-neo-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 id="cta-heading" className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Sua empresa merece um site à altura.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/60 md:text-lg">
            Fale com a NEO e descubra qual solução faz mais sentido para o seu negócio.
          </p>
          <ButtonLink href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" variant="light">
            Solicitar orçamento <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-xs text-white/50">
                <Check size={13} strokeWidth={2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
