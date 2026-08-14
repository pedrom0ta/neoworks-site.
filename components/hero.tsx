"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT, SITE } from "@/lib/constants";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  const step = (index: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-neo-bg px-6 pt-20 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,38,40,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,38,40,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      <div style={step(0)} className="relative z-10 mb-9">
        <Logo height={40} priority />
      </div>

      <h1
        style={step(1)}
        className="relative z-10 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-neo-ink sm:text-5xl md:text-6xl"
      >
        {SITE.tagline}
      </h1>

      <p style={step(2)} className="relative z-10 mt-6 max-w-xl text-base text-neo-gray md:text-lg">
        {SITE.description}
      </p>

      <div style={step(3)} className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <ButtonLink href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" variant="primary">
          Solicitar orçamento <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="#servicos" variant="secondary">
          Ver serviços
        </ButtonLink>
      </div>

      <div
        aria-hidden="true"
        style={{ opacity: mounted ? 0.5 : 0, transition: "opacity 1s ease 1s" }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <div className="h-14 w-px bg-gradient-to-b from-neo-gray to-transparent" />
      </div>
    </section>
  );
}
