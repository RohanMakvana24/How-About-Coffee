import React from 'react';
import { MessageCircleHeart, Star } from 'lucide-react';
import { MarqueeDemo } from '../../../components/ui/marquee-01';
import { LanyardBadgesSection } from '../social/LanyardBadgesSection';

export const ReviewsSection: React.FC = () => (
  <section id="reviews" className="overflow-hidden border-t py-16 sm:py-24" style={{ background: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
        <p className="mb-3 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[.24em]" style={{ color: 'var(--color-brand-accent)' }}><MessageCircleHeart className="h-4 w-4" /> Guest notes</p>
        <h2 className="text-4xl font-black leading-[.96] tracking-[-.045em] sm:text-6xl" style={{ color: 'var(--color-text-primary)' }}>Real words from<br /><em style={{ color: 'var(--color-brand-primary)' }}>our coffee people.</em></h2>
        <p className="mt-5 text-sm leading-6 sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>A handpicked selection of public guest reviews for How About Coffee, Jaipur.</p>
        <span className="mt-5 inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[10px] font-black" style={{ borderColor: 'var(--color-border)', color: 'var(--color-brand-primary)' }}><Star className="h-3.5 w-3.5 fill-current" /> Public guest feedback</span>
      </div>
    </div>
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <LanyardBadgesSection />
    </div>
    <MarqueeDemo />
  </section>
);

export default ReviewsSection;
