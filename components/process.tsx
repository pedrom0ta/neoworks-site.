import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-heading" className="bg-neo-bg px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Processo"
          title={<span id="processo-heading">Do briefing ao ar, sem complicação</span>}
          className="mx-auto mb-20"
        />

        <ol className="relative grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          <div aria-hidden="true" className="absolute left-0 right-0 top-2 hidden h-px bg-neo-ink/10 md:block" />
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.12}>
              <li className="relative list-none">
                <div aria-hidden="true" className="mb-6 hidden h-4 w-4 rounded-full border-[3px] border-neo-bg bg-neo-ink md:block" />
                <p className="mb-3 text-xs text-neo-gray">{step.n}</p>
                <h3 className="mb-2 text-base font-semibold text-neo-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neo-gray">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
