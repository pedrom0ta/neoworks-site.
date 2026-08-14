import { Reveal } from "@/components/ui/reveal";
import { GeometricMark } from "@/components/ui/geometric-mark";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-container items-center gap-16 md:grid-cols-2">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-neo-gray">Sobre a NEO</p>
          <h2 id="sobre-heading" className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-neo-ink md:text-4xl">
            Menos ruído. Mais resultado.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-neo-gray md:text-lg">
            Somos especializados na criação de sites e experiências digitais com foco em velocidade,
            credibilidade e conversão. Acreditamos que um design limpo e estratégico comunica melhor o
            valor da sua marca.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <GeometricMark />
        </Reveal>
      </div>
    </section>
  );
}
