type Corner = "tl" | "tr" | "bl" | "br"

const cornerStyles: Record<Corner, string> = {
  tl: "top-0 left-0",
  tr: "top-0 right-0 -scale-x-100",
  bl: "bottom-0 left-0 -scale-y-100",
  br: "bottom-0 right-0 -scale-100",
}

/**
 * Delicate botanical sprig used as a corner flourish on the cream sections.
 * Rendered as inline SVG so the background stays truly transparent.
 */
export function FloralCorner({
  corner,
  className = "",
}: {
  corner: Corner
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${cornerStyles[corner]} ${className}`}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        className="h-28 w-28 sm:h-40 sm:w-40 md:h-48 md:w-48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* main stem */}
        <path
          d="M6 6 C 40 24, 70 48, 96 92 C 108 112, 116 128, 120 148"
          stroke="var(--sage)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* leaves along the stem */}
        {[
          { x: 30, y: 20, r: -18 },
          { x: 52, y: 38, r: -4 },
          { x: 72, y: 60, r: 8 },
          { x: 90, y: 86, r: 20 },
          { x: 104, y: 112, r: 32 },
        ].map((leaf, i) => (
          <g
            key={i}
            transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r})`}
          >
            <path
              d="M0 0 C 10 -8, 24 -8, 30 0 C 24 8, 10 8, 0 0 Z"
              fill="var(--sage)"
              opacity="0.75"
            />
            <path
              d="M0 0 L 30 0"
              stroke="var(--sage)"
              strokeWidth="0.8"
              opacity="0.7"
            />
          </g>
        ))}
        {/* beige peonies — layered ruffled petals */}
        {[
          { x: 22, y: 14, s: 1.15 },
          { x: 64, y: 50, s: 0.9 },
          { x: 100, y: 100, s: 1.3 },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x} ${b.y}) scale(${b.s})`}>
            {/* outer petal ring */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <ellipse
                key={`o-${deg}`}
                cx="0"
                cy="-9"
                rx="5"
                ry="9"
                fill="#e4d7bc"
                opacity="0.9"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* middle petal ring */}
            {[22, 67, 112, 157, 202, 247, 292, 337].map((deg) => (
              <ellipse
                key={`m-${deg}`}
                cx="0"
                cy="-6"
                rx="4"
                ry="6.5"
                fill="#efe6d2"
                opacity="0.95"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* inner ruffle */}
            {[0, 72, 144, 216, 288].map((deg) => (
              <ellipse
                key={`i-${deg}`}
                cx="0"
                cy="-3.5"
                rx="3"
                ry="4.5"
                fill="#d8c7a4"
                opacity="0.95"
                transform={`rotate(${deg})`}
              />
            ))}
            <circle cx="0" cy="0" r="2.6" fill="#c9b487" opacity="0.95" />
          </g>
        ))}
      </svg>
    </div>
  )
}
