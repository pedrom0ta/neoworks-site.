"use client";

import { motion } from "framer-motion";

export function GeometricMark() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <motion.svg
        viewBox="0 0 320 320"
        className="h-auto w-full motion-safe:animate-spin-slow"
        style={{ transformOrigin: "160px 160px" }}
        role="img"
        aria-label="Composição geométrica minimalista"
      >
        <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(43,38,40,0.14)" strokeWidth="1" />
        <circle cx="245" cy="95" r="4" fill="#8A8A8A" />
        <circle cx="75" cy="225" r="4" fill="#8A8A8A" />
      </motion.svg>

      <svg viewBox="0 0 320 320" className="absolute inset-0 h-auto w-full">
        <circle cx="160" cy="160" r="80" fill="none" stroke="rgba(43,38,40,0.22)" strokeWidth="1" />
        <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(43,38,40,0.1)" strokeWidth="1" />
        <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(43,38,40,0.1)" strokeWidth="1" />
        <rect x="120" y="120" width="80" height="80" rx="18" fill="#2B2628" />
      </svg>

      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.35, 1], opacity: [0.9, 0.5, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neo-bg"
      />
    </div>
  );
}
