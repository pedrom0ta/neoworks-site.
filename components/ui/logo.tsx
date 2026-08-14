import Image from "next/image";
import { SITE } from "@/lib/constants";

interface LogoProps {
  variant?: "ink" | "white";
  height?: number;
  priority?: boolean;
}

const ASPECT_RATIO = 279 / 97;

/**
 * NEO wordmark. `priority` should only be set for the copy that renders
 * above the fold (the hero) so it doesn't compete with other LCP candidates.
 */
export function Logo({ variant = "ink", height = 20, priority = false }: LogoProps) {
  const src = variant === "white" ? "/logo-white.png" : "/logo.png";
  const width = Math.round(height * ASPECT_RATIO);

  return (
    <Image
      src={src}
      alt={`${SITE.name} — identidade visual`}
      width={width}
      height={height}
      priority={priority}
      className="h-auto w-auto"
      style={{ height, width: "auto" }}
    />
  );
}
