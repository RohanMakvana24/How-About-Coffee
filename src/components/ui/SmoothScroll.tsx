import { useEffect } from 'react';
import Lenis from 'lenis';

const easeOutQuart = (progress: number) => 1 - Math.pow(1 - progress, 4);

/**
 * Adds a single, rAF-driven scroll layer for precision devices.  The hero and
 * all reveal effects continue to receive normal browser scroll events, while
 * touch devices retain their native physics (which is both smoother and more
 * reliable for the menu/cart drawers).
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;

    const destroy = () => {
      lenis?.destroy();
      lenis = undefined;
    };

    const sync = () => {
      destroy();
      if (!desktopQuery.matches || reducedMotionQuery.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.085,
        wheelMultiplier: 0.92,
        overscroll: true,
        anchors: { offset: -76, duration: 1.05, easing: easeOutQuart },
        // Drawers, dialogs and form fields must retain their native scroll
        // and input behaviour instead of passing wheel events to the page.
        prevent: (node) => Boolean(node.closest('[data-lenis-prevent], [role="dialog"], input, textarea, select, [contenteditable="true"]')),
      });
    };

    sync();
    desktopQuery.addEventListener('change', sync);
    reducedMotionQuery.addEventListener('change', sync);
    return () => {
      desktopQuery.removeEventListener('change', sync);
      reducedMotionQuery.removeEventListener('change', sync);
      destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
