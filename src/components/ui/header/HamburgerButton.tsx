type HamburgerButtonProps = {
  open: boolean;
  toggleMenu: () => void
  ref?: React.Ref<HTMLButtonElement>
};

export const HamburgerButton = ({ open, toggleMenu, ref }: HamburgerButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="relative flex items-center justify-center cursor-pointer
                 w-7.5 h-7.5
                 text-secondary hover:text-thrird
                 transition-all duration-300"
    >
      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "rotate-45" : "-translate-y-2 xl:-translate-y-2"}
        `}
      />

      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />

      <span
        className={`
          absolute bg-current transition-all duration-300
          h-0.5 w-6
          ${open ? "-rotate-45" : "translate-y-2 xl:translate-y-2"}
        `}
      />
    </button>
  );
};
