const iconPaths = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.9Z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  drain: (
    <>
      <path d="M6 3v5a6 6 0 0 0 12 0V3" />
      <path d="M6 3h4M14 3h4" />
      <path d="M8 16v2M12 16v2M16 16v2" />
    </>
  ),
  drop: (
    <path d="M12 22a7 7 0 0 0 7-7c0-4-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7Z" />
  ),
  flame: (
    <path d="M12 22a7 7 0 0 0 7-7c0-4-3-7-5-9 0 3-2 4-2 4s0-5-4-8c0 5-3 8-3 13a7 7 0 0 0 7 7Z" />
  ),
  faucet: (
    <>
      <path d="M4 11h13a3 3 0 0 1 3 3v1H8v-1a3 3 0 0 0-3-3H4Z" />
      <path d="M8 11V7h8v4M12 7V4M10 4h4M12 15v4" />
      <path d="M10 19a2 2 0 1 0 4 0" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-3 8 3v16" />
      <path d="M2 21h20M8 8h1M15 8h1M8 12h1M15 12h1M10 21v-5h4v5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {iconPaths[name] || iconPaths.arrow}
    </svg>
  );
}
