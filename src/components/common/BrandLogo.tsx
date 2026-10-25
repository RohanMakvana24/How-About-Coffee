import React from 'react';

export interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'animated-doodle' | 'badge-image' | 'classic';
  inverse?: boolean;
  className?: string;
  onClick?: () => void;
}

/** Compact single-line How About Coffee lockup. */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
  inverse = false,
}) => {
  const sizes = {
    sm: { mark: 'h-8 w-8', title: 'text-[11px]', sub: 'text-[6px]', gap: 'gap-1.5', rule: 'w-3' },
    md: { mark: 'h-10 w-10', title: 'text-[14px]', sub: 'text-[7px]', gap: 'gap-2', rule: 'w-4' },
    lg: { mark: 'h-12 w-12', title: 'text-[17px]', sub: 'text-[8px]', gap: 'gap-2.5', rule: 'w-5' },
    xl: { mark: 'h-16 w-16', title: 'text-2xl', sub: 'text-[10px]', gap: 'gap-3', rule: 'w-6' },
  }[size];

  return (
    <div
      className={`hac-logo inline-flex items-center ${sizes.gap} select-none ${className}`}
      onClick={onClick}
      aria-label="How About Coffee, Jagatpura Jaipur"
    >
      <style>{`
        @keyframes hac-logo-steam {
          0%, 100% { opacity: .35; transform: translateY(2px); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
        @keyframes hac-logo-bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-1px) rotate(-1deg); }
        }
        @keyframes hac-word-glow {
          0%, 100% { text-shadow: 0 0 0 rgba(198, 93, 46, 0); }
          50% { text-shadow: 0 0 12px rgba(198, 93, 46, .22); }
        }
        .hac-logo-mark { animation: hac-logo-bob 4s ease-in-out infinite; }
        .hac-logo-steam { animation: hac-logo-steam 2.2s ease-in-out infinite; transform-origin: center; }
        .hac-logo-wordmark { animation: hac-word-glow 3.8s ease-in-out infinite; }
        .hac-logo-steam:nth-of-type(2) { animation-delay: .35s; }
        .hac-logo-steam:nth-of-type(3) { animation-delay: .7s; }
        .hac-logo:hover .hac-logo-mark { animation-duration: 1.2s; transform: translateY(-2px) rotate(-3deg); }
        .hac-logo:hover .hac-logo-wordmark { text-shadow: 0 0 15px rgba(198, 93, 46, .32); }
        @media (prefers-reduced-motion: reduce) {
          .hac-logo-mark, .hac-logo-steam, .hac-logo-wordmark { animation: none !important; }
        }
      `}</style>

      <span className={`hac-logo-mark ${sizes.mark} relative shrink-0 rounded-[13px]`} aria-hidden="true">
        <svg viewBox="0 0 64 64" className="h-full w-full" fill="none">
          <rect x="1" y="1" width="62" height="62" rx="15" fill="currentColor" />
          <path className="hac-logo-steam" d="M24 24c-2.5-3.2 2.5-4.4 0-8" stroke="#FFF7E9" strokeWidth="2.4" strokeLinecap="round" />
          <path className="hac-logo-steam" d="M31 24c-2.5-3.2 2.5-4.4 0-8" stroke="#FFF7E9" strokeWidth="2.4" strokeLinecap="round" />
          <path className="hac-logo-steam" d="M38 24c-2.5-3.2 2.5-4.4 0-8" stroke="#FFF7E9" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M18 29h25v7.5C43 44.8 37.7 49 30.5 49S18 44.8 18 36.5V29Z" stroke="#FFF7E9" strokeWidth="2.8" strokeLinejoin="round" />
          <path d="M43 32h3a5.5 5.5 0 0 1 0 11h-3" stroke="#FFF7E9" strokeWidth="2.8" strokeLinecap="round" />
          <text x="30.5" y="39.5" textAnchor="middle" fill="#FFF7E9" fontSize="7.5" fontWeight="900" letterSpacing="-.4" fontFamily="Arial, sans-serif">HAC</text>
        </svg>
      </span>

      <span className="flex min-w-0 flex-col leading-none">
        <span className={`hac-logo-wordmark ${sizes.title} whitespace-nowrap font-black uppercase tracking-[0.12em]`} style={{ color: inverse ? '#fff7ec' : 'var(--color-text-primary)' }}>
          How About Coffee
        </span>
        {showSubtitle && (
          <span className={`${sizes.sub} mt-1 whitespace-nowrap font-bold uppercase tracking-[0.24em]`} style={{ color: inverse ? 'rgba(255,247,236,.65)' : 'var(--color-text-tertiary)' }}>
            Brew · Bite · Belong
          </span>
        )}
      </span>

    </div>
  );
};

export default BrandLogo;
