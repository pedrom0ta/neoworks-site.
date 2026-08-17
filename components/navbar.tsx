"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

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
    if (menuOpen) {
      // `overflow: hidden` on body doesn't reliably block background
      // scroll on iOS Safari. Locking with `position: fixed` + restoring
      // the saved scroll offset on close is the technique that actually
      // works across mobile browsers.
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : "";
      document.body.dataset.scrollY = String(scrollY);
    } else {
      const scrollY = Number(document.body.dataset.scrollY || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    // Wait for the close animation to finish (and body scroll to be
    // restored) before jumping to the section — doing it mid-animation is
    // what was causing taps to silently fail on mobile.
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }, 380);
  };

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
                {/* Underline sweeps in from the left on hover/focus */}
                <a
                  href={link.href}
                  className="group relative inline-block py-1 text-sm tracking-wide text-neo-ink/75 transition-colors hover:text-neo-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-ink rounded-sm"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-neo-ink transition-transform duration-300 ease-neo group-hover:scale-x-100"
                  />
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-neo-ink transition-transform duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-ink md:hidden"
        >
          {/* Icon cross-fades/rotates between hamburger and close */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu: slides open with a height/opacity animation, links stagger in one by one */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden bg-neo-bg md:hidden"
          >
            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col gap-1 px-6 pb-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleMobileLinkClick(e, link.href)}
                      className="block rounded-lg px-3 py-3 text-base text-neo-ink/85 transition-colors hover:bg-neo-ink/5 hover:text-neo-ink"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-2"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * NAV_LINKS.length, duration: 0.3, ease: EASE }}
                >
                  <ButtonLink
                    href={CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full"
                  >
                    Falar no WhatsApp
                  </ButtonLink>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
