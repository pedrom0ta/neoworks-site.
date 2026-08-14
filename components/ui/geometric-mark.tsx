export function GeometricMark() {
  return (
    <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-sm" role="img" aria-label="Composição geométrica minimalista">
      <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(43,38,40,0.14)" strokeWidth="1" />
      <circle cx="160" cy="160" r="80" fill="none" stroke="rgba(43,38,40,0.22)" strokeWidth="1" />
      <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(43,38,40,0.1)" strokeWidth="1" />
      <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(43,38,40,0.1)" strokeWidth="1" />
      <rect x="120" y="120" width="80" height="80" rx="18" fill="#2B2628" />
      <circle cx="160" cy="160" r="6" fill="#F3F3F3" />
      <circle cx="245" cy="95" r="4" fill="#8A8A8A" />
      <circle cx="75" cy="225" r="4" fill="#8A8A8A" />
    </svg>
  );
}
