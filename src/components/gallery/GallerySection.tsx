import React, { useEffect, useState } from 'react';
import { Camera, Coffee, MapPin, X } from 'lucide-react';
import AnimatedGallery from '../../../components/ui/animated-gallery';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { GalleryItem } from '../../types/gallery';
import { CafeImage } from '../ui/CafeImage';

export const GallerySection: React.FC = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const featuredItems = [
    { ...GALLERY_ITEMS[0], imageUrl: '/images/photos/gallery-coffee-ritual.webp' },
    { ...GALLERY_ITEMS[1], imageUrl: '/images/photos/gallery-cafe-interior.webp' },
    { ...GALLERY_ITEMS[2], imageUrl: '/images/photos/gallery-cold-brew.webp' },
    { ...GALLERY_ITEMS[3], imageUrl: '/images/photos/gallery-farmhouse-pizza.webp' },
    { ...GALLERY_ITEMS[4], imageUrl: '/images/photos/gallery-grilled-sandwich.webp' },
    { ...GALLERY_ITEMS[7], imageUrl: '/images/photos/gallery-brownie-dessert.webp' },
  ];

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [selected]);

  return (
    <section id="gallery" className="scroll-mt-20 border-t py-16 sm:py-24" style={{ background: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.65fr] lg:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em]" style={{ color: 'var(--color-brand-accent)' }}><Camera className="h-4 w-4" /> From cup to table</p>
            <h2 className="text-4xl font-black tracking-[-.04em] sm:text-6xl" style={{ color: 'var(--color-text-primary)' }}>A glimpse of the<br /><em style={{ color: 'var(--color-brand-primary)' }}>good stuff.</em></h2>
          </div>
          <div className="lg:pb-1"><p className="text-sm leading-6" style={{ color: 'var(--color-text-secondary)' }}>Hover to open up a moment. From coffee runs to comfort food, every frame is made for slowing down.</p><div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-surface)', color: 'var(--color-text-tertiary)' }}><MapPin className="h-3.5 w-3.5" /> Jagatpura, Jaipur</div></div>
        </div>

        <AnimatedGallery items={featuredItems} onSelect={setSelected} />

        <div className="mt-6 flex items-start gap-3 rounded-2xl border p-4 text-xs leading-5" style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}><Coffee className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--color-brand-accent)' }} /><p>Representative images can be replaced one-for-one with official café photography before launch.</p></div>
      </div>

      {selected && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#21120C] shadow-2xl"><button onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-black/45 text-white backdrop-blur" aria-label="Close image"><X className="h-5 w-5" /></button><CafeImage src={selected.imageUrl} alt={selected.alt} className="max-h-[72vh] w-full object-cover" /><div className="p-5 text-white sm:p-7"><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#F4A66D]">{selected.category}</p><h3 className="mt-1 text-2xl font-black">{selected.title}</h3><p className="mt-2 text-sm text-white/65">{selected.subtitle}</p></div></div></div>}
    </section>
  );
};

export default GallerySection;
