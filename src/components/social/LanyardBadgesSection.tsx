'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MultiBadgeItem } from '../ui/MultiLanyard';
import { LazyMount } from '../common/LazyMount';

const MultiLanyardPromise = import('../ui/MultiLanyard');
const MultiLanyard = React.lazy(() => MultiLanyardPromise);
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    MultiLanyardPromise.catch(() => {});
  });
}

import {
  createGoogleFrontCanvas,
  createGoogleBackCanvas,
  createInstagramFrontCanvas,
  createInstagramBackCanvas,
  createFacebookFrontCanvas,
  createFacebookBackCanvas,
  createStrapCanvas,
} from './lanyardCardTextures';
import { ExternalLink, Star, Instagram, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

/** Keeps the mobile review area purposeful while canvas textures/WebGL load. */
const LanyardSkeleton: React.FC = () => (
  <div className="lanyard-skeleton" role="status" aria-label="Loading guest review card">
    <div className="lanyard-skeleton__strap" />
    <div className="lanyard-skeleton__clip" />
    <div className="lanyard-skeleton__card">
      <span className="lanyard-skeleton__badge" />
      <span className="lanyard-skeleton__line lanyard-skeleton__line--title" />
      <span className="lanyard-skeleton__line" />
      <span className="lanyard-skeleton__rating" />
      <span className="lanyard-skeleton__line lanyard-skeleton__line--short" />
      <span className="lanyard-skeleton__cta" />
    </div>
    <p>Brewing up guest stories</p>
  </div>
);

export const LanyardBadgesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prepareBadges, setPrepareBadges] = useState(false);
  const [badgeItems, setBadgeItems] = useState<MultiBadgeItem[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPrepareBadges(true);
        observer.disconnect();
      }
    }, { rootMargin: isMobile ? '0px 0px' : '180px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    // Creating six 1536px canvases is expensive. Do it only when this section
    // is about to enter the viewport, never during initial page load. Deferring
    // one turn lets the loading skeleton paint before this CPU-heavy work starts.
    if (!prepareBadges) return;
    setBadgeItems([]);
    const timer = window.setTimeout(() => {
      try {
      const gFront = createGoogleFrontCanvas();
      const gBack = createGoogleBackCanvas();
      const gStrap = createStrapCanvas('google');

      const iFront = createInstagramFrontCanvas();
      const iBack = createInstagramBackCanvas();
      const iStrap = createStrapCanvas('instagram');

      const fFront = createFacebookFrontCanvas();
      const fBack = createFacebookBackCanvas();
      const fStrap = createStrapCanvas('facebook');

      const anchors = isMobile ? [1 / 6, 0.5, 5 / 6] : [0.22, 0.5, 0.78];

      setBadgeItems([
        {
          id: 'google',
          frontCanvas: gFront,
          backCanvas: gBack,
          strapCanvas: gStrap,
          cardColor: '#0f1e2e',
          metal: 'gold',
          anchor: anchors[0],
        },
        {
          id: 'instagram',
          frontCanvas: iFront,
          backCanvas: iBack,
          strapCanvas: iStrap,
          cardColor: '#2d0a24',
          metal: 'gold',
          anchor: anchors[1],
        },
        {
          id: 'facebook',
          frontCanvas: fFront,
          backCanvas: fBack,
          strapCanvas: fStrap,
          cardColor: '#091a36',
          metal: 'silver',
          anchor: anchors[2],
        },
      ]);
      } catch (error) {
        console.error('Error generating badge canvas textures:', error);
      }
    }, 32);
    return () => window.clearTimeout(timer);
  }, [isMobile, prepareBadges]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth <= 0) return;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex >= 0 && newIndex <= 2 && newIndex !== activeCardIndex) {
      setActiveCardIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setActiveCardIndex(index);
  };

  return (
    <div ref={sectionRef} className="w-full relative mt-8 sm:mt-12 pt-2 sm:pt-4 overflow-visible">
      <div className="flex sm:hidden items-center justify-between gap-2 px-0 sm:px-4 mb-4 mt-2">
        <div className="flex items-center gap-1.5 p-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 w-full justify-between">
          <button
            type="button"
            onClick={() => scrollToCard(0)}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
              activeCardIndex === 0
                ? 'bg-amber-500 text-black shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Star className="w-3 h-3 fill-current" />
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToCard(1)}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
              activeCardIndex === 1
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Instagram className="w-3 h-3" />
            <span>Instagram</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToCard(2)}
            className={`flex-1 py-1.5 px-2 rounded-full text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
              activeCardIndex === 2
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <ThumbsUp className="w-3 h-3" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full overflow-x-auto sm:overflow-visible scrollbar-none snap-x snap-mandatory scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="w-[300vw] sm:w-full flex flex-col">
          <div className="relative w-full h-[540px] sm:h-[620px] overflow-visible">
            {badgeItems.length === 3 ? (
              <LazyMount
                className="w-full h-full"
                minHeight="540px"
                rootMargin="0px"
                placeholder={<LanyardSkeleton />}
              >
                <MultiLanyard items={badgeItems} className="w-full h-full" breeze={0.35} interactive={true} />
              </LazyMount>
            ) : <LanyardSkeleton />}
          </div>

          <div className="flex sm:grid sm:grid-cols-3 w-full mt-4 sm:mt-5 relative z-20">
            <div className="w-[100vw] sm:w-full snap-center shrink-0 flex flex-col items-center gap-1.5 text-center px-4">
              <a
                href={BUSINESS_INFO.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[270px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all hover:scale-105 shadow-md bg-amber-500 hover:bg-amber-400 text-black cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 fill-black text-black" />
                <span>Write a Google Review</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
              <span className="text-[11px] text-zinc-400 font-medium">
                4.5 ★ · 389 Public Ratings
              </span>
            </div>

            <div className="w-[100vw] sm:w-full snap-center shrink-0 flex flex-col items-center gap-1.5 text-center px-4">
              <a
                href={BUSINESS_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[270px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all hover:scale-105 shadow-md bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:opacity-95 text-white cursor-pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
                <span>Follow @howaboutcoffee</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
              <span className="text-[11px] text-zinc-400 font-medium">
                Coffee · Food · Everyday moments
              </span>
            </div>

            <div className="w-[100vw] sm:w-full snap-center shrink-0 flex flex-col items-center gap-1.5 text-center px-4">
              <a
                href={BUSINESS_INFO.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[270px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all hover:scale-105 shadow-md bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-white" />
                <span>Facebook @HowAboutCoffee</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
              <span className="text-[11px] text-zinc-400 font-medium">
                Community check-ins & café updates
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2.5">
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Previous card"
            disabled={activeCardIndex === 0}
            onClick={() => scrollToCard(Math.max(0, activeCardIndex - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to card ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  activeCardIndex === idx
                    ? 'w-6 bg-amber-500'
                    : 'w-2 bg-zinc-300 dark:bg-zinc-700'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next card"
            disabled={activeCardIndex === 2}
            onClick={() => scrollToCard(Math.min(2, activeCardIndex + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-black/70 dark:bg-white/10 text-white border border-white/15 shadow-sm">
          <span>👈 Swipe cards on mobile 👉</span>
          <span className="text-zinc-500">•</span>
          <span className="text-amber-400 font-bold">↻ Tap card to flip &amp; reveal QR</span>
        </div>
      </div>
    </div>
  );
};

export default LanyardBadgesSection;
