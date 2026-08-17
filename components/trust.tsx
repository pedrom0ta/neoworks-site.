import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Trust() {
  return (
    <section aria-labelledby="confianca-heading" className="bg-neo-bg px-6 py-24 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="flex flex-col items-center">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(43,38,40,0.06)]">
            <ShieldCheck size={20} strokeWidth={1.75} className="text-neo-ink" aria-hidden="true" />
          </div>
          <h2 id="confianca-heading" className="mb-5 text-2xl font-semibold leading-tight tracking-tight text-neo-ink md:text-3xl">
            Você aprova primeiro. Paga depois.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-neo-gray md:text-base">
            Na NEO, você acompanha o desenvolvimento e conhece o resultado antes de realizar o pagamento. Após a
            aprovação do projeto, fazemos a entrega e emitimos sua Nota Fiscal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
