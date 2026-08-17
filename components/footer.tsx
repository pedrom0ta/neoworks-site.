import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { CONTACT, SITE } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Instagram", href: CONTACT.instagram, icon: Instagram },
  { label: "WhatsApp", href: CONTACT.whatsappLink, icon: MessageCircle },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-neo-ink px-6 py-14">
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 md:flex-row md:justify-between">
        <Logo variant="white" height={16} />

        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              >
                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-white/40">
          {SITE.name} — Design minimalista, foco em conversão. © {year}
        </p>
      </div>
    </footer>
  );
}
