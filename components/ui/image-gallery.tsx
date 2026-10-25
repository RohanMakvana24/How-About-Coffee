import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { CafeImage } from '@/src/components/ui/CafeImage';

export type ExpandingGalleryItem = {
  id: string;
  imageUrl?: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
};

type ImageGalleryProps<T extends ExpandingGalleryItem> = {
  items: T[];
  onSelect: (item: T) => void;
};

/** An expanding editorial gallery: hover on desktop, deliberate tap on mobile. */
export default function ImageGallery<T extends ExpandingGalleryItem>({ items, onSelect }: ImageGalleryProps<T>) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  return (
    <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:h-[430px] md:snap-none md:overflow-hidden" onMouseLeave={() => setActiveId(items[0]?.id ?? '')}>
      {items.map((item) => {
        const active = activeId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onMouseEnter={() => setActiveId(item.id)}
            onFocus={() => setActiveId(item.id)}
            onClick={() => onSelect(item)}
            className="group relative h-[360px] w-[74vw] shrink-0 snap-center overflow-hidden rounded-[1.5rem] text-left shadow-[0_18px_35px_rgba(45,23,12,.12)] transition-[flex,transform] duration-500 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 md:h-full md:w-auto md:flex-1"
            style={{ flexGrow: active ? 4.8 : 1 }}
            aria-label={`Open ${item.title}`}
          >
            <CafeImage src={item.imageUrl} alt={item.alt} loading="lazy" containerClassName="absolute inset-0" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />
            <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-black/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 md:group-focus-visible:opacity-100"><Expand className="h-3.5 w-3.5" /></span>
            <span className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <small className="text-[9px] font-black uppercase tracking-[.18em] text-[#FFC18E]">{item.category}</small>
              <strong className="mt-1 block text-base font-black leading-tight sm:text-xl">{item.title}</strong>
              <em className={`mt-2 block max-w-sm text-xs not-italic leading-5 text-white/75 transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0 md:translate-y-2'}`}>{item.subtitle}</em>
            </span>
          </button>
        );
      })}
    </div>
  );
}
