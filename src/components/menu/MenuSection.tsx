import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, Coffee, Info, Plus, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';
import { MenuCategoryId } from '../../types/menu';
import { MenuCard } from './MenuCard';
import { CoverflowCarousel } from '../../../components/ui/coverflow-carousel';
import { useCart } from '../../context/CartContext';

export const MenuSection: React.FC = () => {
  const [active, setActive] = useState<MenuCategoryId>('all');
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const { addItem } = useCart();
  const filtered = useMemo(() => active === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.categoryId === active), [active]);

  const addToTray = (index: number) => {
    const item = filtered[index];
    if (!item) return;
    addItem({
      id: item.id,
      name: item.name,
      price: Number(item.price?.replace(/\D/g, '')) || 0,
      category: item.categoryLabel,
      description: item.description,
      imageUrl: item.imageUrl,
    });
    setAddedItem(item.id);
    window.setTimeout(() => setAddedItem(null), 1400);
  };

  return (
    <section id="menu" className="scroll-mt-20 border-t py-16 sm:py-24" style={{ background: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em]" style={{ color: 'var(--color-brand-accent)' }}><Coffee className="h-4 w-4" /> Brewed & made fresh</p>
            <h2 className="text-4xl font-black tracking-[-.04em] sm:text-6xl" style={{ color: 'var(--color-text-primary)' }}>Cravings, meet<br /><span className="italic" style={{ color: 'var(--color-brand-primary)' }}>your favourites.</span></h2>
            <p className="mt-5 text-base leading-7" style={{ color: 'var(--color-text-secondary)' }}>From espresso classics and chilled brews to loaded bites and something sweet—there is always a good reason to stay a little longer.</p>
          </div>
          <div className="inline-flex self-start items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold" style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}><Sparkles className="h-4 w-4" style={{ color: 'var(--color-brand-accent)' }} /> {filtered.length} items to explore</div>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none]" role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((category) => {
            const selected = active === category.id;
            return <button key={category.id} role="tab" aria-selected={selected} onClick={() => setActive(category.id)} className="shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-xs font-black transition-all" style={{ background: selected ? 'var(--color-brand-primary)' : 'var(--color-bg-surface)', color: selected ? '#fff' : 'var(--color-text-secondary)', borderColor: selected ? 'var(--color-brand-primary)' : 'var(--color-border)' }}>{category.label}</button>;
          })}
        </div>

        {/* Mobile keeps the whole menu reachable without a long stack of cards. */}
        <div className="mt-4 md:hidden" aria-live="polite">
          <p className="mb-1 text-center text-[10px] font-black uppercase tracking-[.18em]" style={{ color: 'var(--color-text-secondary)' }}>Swipe to browse</p>
          <CoverflowCarousel
            key={active}
            slides={filtered.map((item) => ({ src: item.imageUrl ?? '/images/photos/food-fallback.webp', alt: item.name, title: item.name, subtitle: item.description, price: item.price, isVeg: item.dietary === 'veg' }))}
            label="Menu items"
            cardWidth="clamp(220px, 68vw, 280px)"
            rotate={38}
            depth={0.42}
            perspective={2.5}
            gap={0.03}
            fade={0.17}
            showCaption
            showNavigation
            renderAction={(_, index) => {
              const item = filtered[index];
              const added = addedItem === item?.id;
              return (
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); addToTray(index); }}
                  className={`inline-flex w-full max-w-[260px] cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-xs font-black transition-all ${added ? 'bg-emerald-600 text-white' : 'text-white hover:opacity-90'}`}
                  style={added ? undefined : { background: 'var(--color-brand-primary)' }}
                >
                  {added ? <><Check className="h-4 w-4" /> Added to tray</> : <><Plus className="h-4 w-4" /> Add to order</>}
                </button>
              );
            }}
          />
        </div>

        <div className="mt-6 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {filtered.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border p-5 sm:flex-row sm:items-center sm:p-6" style={{ background: 'var(--color-brand-surface-tint)', borderColor: 'var(--color-border)' }}>
          <div className="flex max-w-3xl items-start gap-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--color-brand-accent)' }} />
            <p className="text-xs leading-5" style={{ color: 'var(--color-text-secondary)' }}>Demo selection based on current public ordering listings. Prices and availability can change; the café's final menu will be confirmed before launch. Photos are representative.</p>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center gap-2 text-xs font-black" style={{ color: 'var(--color-brand-primary)' }}>Plan your visit <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
