type IconProps = {
  size?: number;
};

function IconFrame({ size = 18, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 17L17 7M9 7h8v8" />
    </IconFrame>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </IconFrame>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4 8h16M4 16h16" />
    </IconFrame>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </IconFrame>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </IconFrame>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </IconFrame>
  );
}
