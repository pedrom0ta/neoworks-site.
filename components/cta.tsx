import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-neo-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 id="cta-heading" className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Pronto para colocar sua empresa no digital da forma certa?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/60 md:text-lg">
            Design sólido, entrega rápida e um site que transmite credibilidade desde o primeiro clique.
          </p>
          <ButtonLink href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" variant="light">
            Falar com a NEO agora <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
