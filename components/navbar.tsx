"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-neo-ink/[0.08] bg-neo-bg/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="NEO — voltar ao topo" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-ink rounded-sm">
          <Logo height={18} priority />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-neo-ink/75 transition-colors hover:text-neo-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-ink rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="hidden !px-5 !py-2.5 md:inline-flex"
        >
          Falar no WhatsApp
        </ButtonLink>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-neo-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-ink md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-neo-bg transition-[max-height,opacity] duration-300 ease-neo md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Navegação mobile">
          <ul className="flex flex-col gap-1 px-6 pb-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-neo-ink/85 transition-colors hover:bg-neo-ink/5 hover:text-neo-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
              >
                Falar no WhatsApp
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
