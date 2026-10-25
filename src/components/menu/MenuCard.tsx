import React, { useState } from 'react';
import { Check, Plus, Sparkles } from 'lucide-react';
import { MenuItem } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { CafeImage } from '../ui/CafeImage';

export interface MenuCardProps {
  item: MenuItem;
  className?: string;
  style?: React.CSSProperties;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, className = '', style = {} }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const numericPrice = Number(item.price?.replace(/\D/g, '')) || 0;
  const isGeneratedStudioPhoto = item.imageUrl?.includes('/images/photos/menu-');

  const addToTray = () => {
    addItem({ id: item.id, name: item.name, price: numericPrice, category: item.categoryLabel, description: item.description, imageUrl: item.imageUrl });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(74,36,22,.13)] ${className}`}
      style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border-subtle)', ...style }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <CafeImage
          src={item.imageUrl}
          alt={item.name}
          loading="lazy"
          containerClassName="absolute inset-0 bg-white"
          className={isGeneratedStudioPhoto
            ? 'h-full w-full bg-white object-contain p-3 transition-transform duration-700 group-hover:scale-[1.02] sm:p-4'
            : 'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.16em] text-white backdrop-blur-md">100% Veg</span>
        {item.featured && <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#F6A85B] px-3 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-[#2C140B]"><Sparkles className="h-3 w-3" /> Popular</span>}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[9px] font-black uppercase tracking-[.2em]" style={{ color: 'var(--color-brand-accent)' }}>{item.categoryLabel}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-lg font-black leading-tight" style={{ color: 'var(--color-text-primary)' }}>{item.name}</h3>
          <span className="shrink-0 text-lg font-black" style={{ color: 'var(--color-brand-primary)' }}>{item.price}</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
        <button
          type="button"
          onClick={addToTray}
          className={`mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 text-xs font-black transition-all ${added ? 'bg-emerald-600 text-white' : 'text-white hover:opacity-90'}`}
          style={added ? undefined : { background: 'var(--color-brand-primary)' }}
        >
          {added ? <><Check className="h-4 w-4" /> Added to tray</> : <><Plus className="h-4 w-4" /> Add to order</>}
        </button>
      </div>
    </article>
  );
};

export default MenuCard;
