/**
 * Marca da Cavalcante Tech: o "C" desenhado como bracket de código,
 * seguido do bloco de cursor. Herda a cor de quem a envolve.
 */
export default function Mark({ size = 18, className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      className={className}
      role="img"
      aria-label="Cavalcante Tech"
    >
      <path
        d="M38 13 H22 L12 23 V41 L22 51 H38"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="46" y="25.5" width="10" height="13" rx="2" fill="currentColor" />
    </svg>
  );
}
