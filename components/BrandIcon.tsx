/**
 * cantandoDigital logo icon — white ring + blue dot.
 * Geometry traced from the official animated icon (512px canvas):
 * ring outer radius 143, stroke 27; dot radius 44, #3b82f6.
 * `animate` plays the same draw-on as the official GIF once (respects reduced motion).
 */
export default function BrandIcon({ size = 24, animate = false }: { size?: number; animate?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="96 96 320 320"
      aria-hidden="true"
      focusable="false"
      className={`brand-icon${animate ? " brand-icon--draw" : ""}`}
    >
      <circle
        className="bi-ring"
        cx="256"
        cy="256"
        r="129.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="27"
        strokeLinecap="round"
        pathLength={100}
        transform="rotate(-90 256 256)"
      />
      <circle className="bi-dot" cx="256" cy="256" r="44" fill="#3b82f6" />
    </svg>
  );
}
