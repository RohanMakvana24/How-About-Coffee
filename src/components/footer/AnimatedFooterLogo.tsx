'use client';

import React from 'react';
import { Coffee } from 'lucide-react';
import TechText from '../../../components/ui/TechText';

export interface AnimatedFooterLogoProps {
  isDark?: boolean;
  className?: string;
}

/** Full-screen interactive final wordmark powered by the React Bits TechText canvas. */
export const AnimatedFooterLogo: React.FC<AnimatedFooterLogoProps> = ({
  isDark = false,
  className = '',
}) => {
  const ink = isDark ? '#F8E8D7' : '#6B2D18';
  const accent = isDark ? '#F09A5B' : '#C65D2E';
  const muted = isDark ? 'rgba(255, 241, 225, .62)' : 'rgba(74, 36, 22, .58)';

  return (
    <section className={`relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden ${className}`}>
      <style>{`
        @keyframes hac-top-bean {
          0%, 100% { transform: translateY(0) rotate(-18deg); }
          50% { transform: translateY(-5px) rotate(-8deg); }
        }
        .hac-top-bean { animation: hac-top-bean 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .hac-top-bean { animation: none; } }
      `}</style>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[66%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: isDark ? 'rgba(198, 93, 46, .12)' : 'rgba(198, 93, 46, .08)' }}
      />

      {/* Desktop-only 3D cafe vignettes fill the generous wordmark margins
          without competing with the interactive lettering. */}
      <img
        src="/images/footer-barista-3d.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="footer-3d-vignette footer-3d-vignette--barista pointer-events-none absolute right-[-5%] top-[7%] z-[2] hidden w-[clamp(190px,19vw,345px)] lg:block"
        style={{ opacity: isDark ? 0.5 : 0.78 }}
      />
      <img
        src="/images/footer-coffee-still-life-3d.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="footer-3d-vignette footer-3d-vignette--coffee pointer-events-none absolute bottom-[7%] left-[-5%] z-[2] hidden w-[clamp(220px,23vw,410px)] lg:block"
        style={{ opacity: isDark ? 0.46 : 0.72 }}
      />

      <div className="relative z-10 flex w-full max-w-[1600px] flex-col items-center px-2 py-12 text-center sm:px-4 sm:py-16">
        <div className="w-full max-w-[1600px] space-y-[-2vw]" style={{ color: ink }}>
          {([
            ['HOW', 'ml-[1%] w-[49%]', 0.8],
            ['ABOUT', 'ml-[16%] w-[69%]', 0.95],
            ['COFFEE', 'ml-[27%] w-[72%]', 1.1],
          ] as [string, string, number][]).map(([word, offset, duration]) => (
            <div key={word} className={`h-[clamp(145px,22vw,320px)] ${offset}`}>
              <TechText text={word} fontFamily="Roboto Flex" fontWeight={800} fontSize={300} letterSpacing={0.035} color={ink} accentColor={accent} reveal="letter" reach={240} softness={0.72} dashLength={5} dashGap={3} strokeWidth={1.5} specks={6} selection labels={false} draggable={false} clickKick intro="assemble" introDuration={duration} guides={false} style={{}} sweep speed={0.45} className="h-full" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex w-full max-w-[590px] items-center justify-center gap-4 sm:mt-10 sm:gap-6">
          <span className="h-px flex-1" style={{ backgroundColor: `${accent}42` }} />
          <Coffee className="h-6 w-6 shrink-0" strokeWidth={1.7} style={{ color: accent }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.38em]" style={{ color: muted }}>
            Brew · Bite · Belong
          </span>
          <span className="h-px flex-1" style={{ backgroundColor: `${accent}42` }} />
        </div>
        <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.26em] sm:text-xs" style={{ color: muted }}>
          Jagatpura · Jaipur
        </span>
      </div>
    </section>
  );
};

export default AnimatedFooterLogo;
