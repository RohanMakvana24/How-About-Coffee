import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { SurfaceCard } from '../common/SurfaceCard';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { LazyMount } from '../common/LazyMount';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const RotatingLocationMap = React.lazy(() => import('./RotatingLocationMap'));

const MapSkeleton = () => (
  <div className="cafe-map-skeleton" aria-hidden="true">
    <div className="cafe-map-skeleton__roads" /><div className="cafe-map-skeleton__pin">☕</div>
    <p>Warming up the map</p>
  </div>
);

export const LocationSection: React.FC = () => (
  <section id="location" aria-labelledby="location-main-heading" className="border-t py-16 sm:py-24" style={{ backgroundColor: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
    <Container>
      <div className="mb-10 sm:mb-12">
        <SectionHeading eyebrow="LOCATION & NEIGHBOURHOOD" title="Find How About Coffee" description="Visit us in Jagatpura, Jaipur. Open the map for the exact location and directions." titleLevel="h2" />
      </div>

      {/* Mobile: natural single-column stack. Desktop: side-by-side card and map. */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-stretch">
        <div className="lg:col-span-5">
          <SurfaceCard elevation="flat" className="flex h-full flex-col space-y-6 border p-5 sm:p-8" >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: 'var(--color-brand-surface-tint)', color: 'var(--color-brand-primary)' }}><MapPin className="h-5 w-5" /></div>
                <div><h3 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>{BUSINESS_INFO.location.area}</h3><p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state}, {BUSINESS_INFO.location.country}</p></div>
              </div>

              <div className="space-y-2 rounded-xl border p-4" style={{ backgroundColor: 'var(--color-bg-subtle)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between gap-4 text-xs"><span style={{ color: 'var(--color-text-secondary)' }}>Confirmed Area:</span><strong style={{ color: 'var(--color-text-primary)' }}>{BUSINESS_INFO.location.area}, {BUSINESS_INFO.location.city}</strong></div>
                <div className="flex items-center justify-between gap-4 text-xs"><span style={{ color: 'var(--color-text-secondary)' }}>Region:</span><span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{BUSINESS_INFO.location.state}, {BUSINESS_INFO.location.country}</span></div>
                <div className="space-y-1 border-t pt-2 text-xs" style={{ borderColor: 'var(--color-border-subtle)' }}><span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Confirmed Address:</span><p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{BUSINESS_INFO.location.fullStreetAddress}</p></div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Find How About Coffee at {BUSINESS_INFO.location.shortAddress}. Use the live navigation button below to open the exact Google Maps location and directions.</p>
            </div>

            <a href={BUSINESS_INFO.location.googleMapsSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-3 text-sm font-semibold" style={{ backgroundColor: 'var(--color-btn-primary-bg)', color: 'var(--color-btn-primary-text)' }}><Navigation className="h-4 w-4" />Get Live Directions<ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70" /></a>
          </SurfaceCard>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <LazyMount minHeight="380px" rootMargin="500px 0px" placeholder={<MapSkeleton />}>
            <RotatingLocationMap />
          </LazyMount>
        </div>
      </div>
    </Container>
  </section>
);

export default LocationSection;
