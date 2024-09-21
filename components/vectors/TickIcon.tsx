export default function TickIcon({ color }: { color?: string }) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9L5.5 12.5L16 1.5"
        stroke={color || "#003F32"}
        strokeWidth="2.54545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
