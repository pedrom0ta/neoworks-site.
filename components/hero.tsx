"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock, ShieldCheck, FileText, type LucideIcon } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT, SITE, HIGHLIGHTS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = { Clock, ShieldCheck, FileText };

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
          Quero meu site <ArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href="#servicos" variant="secondary">
          Ver serviços
        </ButtonLink>
      </div>

      <ul style={step(4)} className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {HIGHLIGHTS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.label} className="flex items-center gap-1.5 text-xs text-neo-gray">
              <Icon size={13} strokeWidth={1.75} aria-hidden="true" />
              {item.label}
            </li>
          );
        })}
      </ul>

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
