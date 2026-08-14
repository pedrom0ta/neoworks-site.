import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ease-neo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-neo-ink text-white shadow-[0_8px_24px_rgba(43,38,40,0.18)] hover:shadow-[0_12px_32px_rgba(43,38,40,0.26)] hover:-translate-y-0.5 focus-visible:ring-neo-ink focus-visible:ring-offset-neo-bg",
  secondary:
    "border border-neo-ink/20 text-neo-ink bg-transparent hover:bg-neo-ink hover:text-white hover:border-neo-ink focus-visible:ring-neo-ink focus-visible:ring-offset-neo-bg",
  light:
    "bg-white text-neo-ink hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] focus-visible:ring-white focus-visible:ring-offset-neo-ink",
};

/**
 * Anchor-styled as a button. Used for WhatsApp CTAs and in-page anchor links,
 * so it always renders as <a> rather than <button> to keep links crawlable.
 */
export function ButtonLink({ children, variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
