/**
 * Native compositor scrolling is consistently smoother than a second
 * JavaScript scroll loop when the page also has scroll-linked artwork.
 * Anchor links are still eased by the global CSS `scroll-behavior: smooth`.
 */
export const SmoothScroll = () => {
  return null;
};

export default SmoothScroll;
