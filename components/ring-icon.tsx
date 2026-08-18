export function RingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* diamond */}
      <path d="M18 6h12l4 6-10 8-10-8 4-6Z" />
      <path d="M14 12h20M24 6l-4 6M24 6l4 6M20 12l4 8M28 12l-4 8" />
      {/* band */}
      <circle cx="24" cy="33" r="10" />
    </svg>
  )
}
