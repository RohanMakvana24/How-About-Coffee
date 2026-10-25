/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { SignatureDishesSection } from './components/signature/SignatureDishesSection';
import { MenuSection } from './components/menu/MenuSection';
import { AboutSection } from './components/about/AboutSection';
import { GallerySection } from './components/gallery/GallerySection';
import { LocationSection } from './components/location/LocationSection';
import { ContactSection } from './components/contact/ContactSection';
import { VisitCtaSection } from './components/cta/VisitCtaSection';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/cart/CartDrawer';
import { FloatingCartBar } from './components/cart/FloatingCartBar';
import { CafeLoader } from './components/ui/CafeLoader';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { ViewportReveal } from './components/common/ViewportReveal';
import { LazyMount } from './components/common/LazyMount';

// These depend on WebGL/physics code and are below the fold.  Keeping their
// modules out of the first JS payload protects the hero's frame budget.
const ReviewsSection = React.lazy(() => import('./components/reviews/ReviewsSection'));
const GravityFooter = React.lazy(() => import('./components/footer/GravityFooter'));


function HowAboutCoffeeWebsite() {

  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-x-clip">
      <SmoothScroll />
      <CafeLoader />
      {/* 1. Sticky navigation bar */}
      <Navbar />


      {/* 2. Main Page Content */}
      <main className="relative z-10 flex-1">
        {/* Phase 2: Hero Section (Anchor #home) — with integrated scroll-driven burger assembly */}
        <HeroSection />

        {/* Phase 4: Signature Dishes Editorial Showcase */}
        <ViewportReveal><SignatureDishesSection /></ViewportReveal>

        {/* Phase 3: Premium Digital Menu Section (Anchor #menu) */}
        <ViewportReveal><MenuSection /></ViewportReveal>

        {/* Phase 5: About Section (Anchor #story) */}
        <ViewportReveal><AboutSection /></ViewportReveal>

        {/* Phase 4: Premium Food & Cafe Gallery (Anchor #gallery) */}
        <ViewportReveal><GallerySection /></ViewportReveal>

        {/* Phase 5: Contact Channels & Service Hours (Anchor #contact) */}
        <ViewportReveal><ContactSection /></ViewportReveal>

        {/* Phase 5: Final Call to Action (Scroll to #menu) */}
        <ViewportReveal><VisitCtaSection /></ViewportReveal>

        {/* Guest reviews appear as the final content section before the footer. */}
        <ViewportReveal><LazyMount minHeight="620px" rootMargin="700px 0px"><ReviewsSection /></LazyMount></ViewportReveal>

        {/* Location and live directions close the page immediately before the footer. */}
        <ViewportReveal><LocationSection /></ViewportReveal>
      </main>

      {/* 3. Gravity Letters Interactive Footer */}
      <ViewportReveal><LazyMount minHeight="460px" rootMargin="700px 0px"><GravityFooter /></LazyMount></ViewportReveal>

      {/* 4. Luxury Cart Drawer & Floating Cart Bar for WhatsApp Ordering */}
      <CartDrawer />
      <FloatingCartBar />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <HowAboutCoffeeWebsite />
      </CartProvider>
    </ThemeProvider>
  );
}
