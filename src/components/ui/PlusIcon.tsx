/** Cruz de 17×17 que separa los ítems del marquee de ofertas (`.slider-icon`). */
export const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 17 17" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M7.4375 0h2.125v7.4375H17v2.125H9.5625V17H7.4375V9.5625H0V7.4375h7.4375V0Z" />
    </svg>
  );
}
