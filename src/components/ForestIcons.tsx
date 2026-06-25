"use client";

/* Ícones metálicos custom para o Método Floresta — gradiente verde-menta → dourado, com profundidade. */

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d8fff0" />
        <stop offset="45%" stopColor="#8fe6b8" />
        <stop offset="75%" stopColor="#e8c468" />
        <stop offset="100%" stopColor="#fff6da" />
      </linearGradient>
      <filter id={`shadow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.35" />
      </filter>
    </defs>
  );
}

export function IconSemente({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} filter="url(#shadow-semente)">
      <Defs id="semente" />
      <ellipse cx="32" cy="50" rx="22" ry="6" fill="#1b3a2a" opacity="0.5" />
      <path
        d="M32 48c0-14 0-22 0-30 6 2 12 8 12 16 0 9-6 14-12 14Z"
        fill={`url(#grad-semente)`}
      />
      <path
        d="M32 48c0-14 0-22 0-30-6 2-12 8-12 16 0 9 6 14 12 14Z"
        fill={`url(#grad-semente)`}
        opacity="0.85"
      />
      <ellipse cx="32" cy="16" rx="4.5" ry="6" fill="#fff6da" />
    </svg>
  );
}

export function IconSolo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} filter="url(#shadow-solo)">
      <Defs id="solo" />
      <circle cx="32" cy="20" r="9" fill={`url(#grad-solo)`} />
      {[...Array(8)].map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={32 + Math.cos(a) * 13}
            y1={20 + Math.sin(a) * 13}
            x2={32 + Math.cos(a) * 17}
            y2={20 + Math.sin(a) * 17}
            stroke="#e8c468"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      <path d="M6 50c8-6 16 4 26-2s16 4 26-4v10H6Z" fill={`url(#grad-solo)`} opacity="0.9" />
    </svg>
  );
}

export function IconCultivo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} filter="url(#shadow-cultivo)">
      <Defs id="cultivo" />
      <ellipse cx="32" cy="52" rx="20" ry="5" fill="#1b3a2a" opacity="0.5" />
      <path d="M32 50V30" stroke="#5fcf94" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 36c-8 0-12-6-12-12 7 0 12 4 12 12Z" fill={`url(#grad-cultivo)`} />
      <path d="M32 30c8 0 13-7 13-14-8 0-13 5-13 14Z" fill={`url(#grad-cultivo)`} opacity="0.9" />
    </svg>
  );
}

export function IconColheita({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} filter="url(#shadow-colheita)">
      <Defs id="colheita" />
      <path d="M14 28h36l-4 24H18z" fill="#2e5c40" />
      <path d="M14 28h36l-2 6H16z" fill={`url(#grad-colheita)`} />
      <path d="M22 28c0-8 4-14 10-14s10 6 10 14" stroke="#e8c468" strokeWidth="3" fill="none" />
      <circle cx="32" cy="40" r="6" fill="#fff6da" stroke="#e8c468" strokeWidth="1.5" />
      <text x="32" y="43" fontSize="7" textAnchor="middle" fill="#b8902f" fontWeight="bold">
        $
      </text>
    </svg>
  );
}

export function IconFloresta({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} filter="url(#shadow-floresta)">
      <Defs id="floresta" />
      <ellipse cx="32" cy="54" rx="24" ry="5" fill="#1b3a2a" opacity="0.5" />
      <path d="M18 54V40" stroke="#3a7a52" strokeWidth="3" />
      <path d="M18 42c-7 0-10-6-10-11 6 0 10 4 10 11Z" fill={`url(#grad-floresta)`} opacity="0.85" />
      <path d="M46 54V36" stroke="#3a7a52" strokeWidth="3" />
      <path d="M46 38c7 0 11-6 11-12-7 0-11 5-11 12Z" fill={`url(#grad-floresta)`} opacity="0.85" />
      <path d="M32 54V24" stroke="#3a7a52" strokeWidth="4" />
      <path d="M32 30c-9 0-14-7-14-15 9 0 14 6 14 15Z" fill={`url(#grad-floresta)`} />
      <path d="M32 24c9 0 14-7 14-15-9 0-14 6-14 15Z" fill={`url(#grad-floresta)`} opacity="0.95" />
    </svg>
  );
}
