"use client";

import { HTMLAttributes, ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
}

/**
 * Fades and slides content into view the first time it enters the viewport.
 * Reused across every section instead of re-implementing the same
 * IntersectionObserver logic in each component.
 */
export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-neo", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
