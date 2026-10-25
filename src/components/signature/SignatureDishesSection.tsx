import React from 'react';
import { ArrowRight, Coffee, Heart, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menuData';
import { CafeImage } from '../ui/CafeImage';

const pick = (id: string) => MENU_ITEMS.find((item) => item.id === id)!;

export const SignatureDishesSection: React.FC = () => {
  const coffee = pick('hazelnut-cappuccino');
  const pizza = pick('farm-house-pizza');
  const dessert = pick('brownie-ice-cream');

  return (
    <section className="signature-section relative py-16 sm:py-24" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em]" style={{ color: 'var(--color-brand-accent)' }}><Heart className="h-4 w-4" /> Loved combinations</p>
            <h2 className="text-4xl font-black tracking-[-.04em] sm:text-6xl" style={{ color: 'var(--color-text-primary)' }}>Three reasons to say<br /><em style={{ color: 'var(--color-brand-primary)' }}>“one more, please.”</em></h2>
          </div>
          <button onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex cursor-pointer items-center gap-2 self-start text-xs font-black" style={{ color: 'var(--color-brand-primary)' }}>Browse the complete menu <ArrowRight className="h-4 w-4" /></button>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          <article className="group relative min-h-[500px] overflow-hidden rounded-[2.25rem] lg:col-span-7 lg:row-span-2">
            <CafeImage src={coffee.imageUrl} alt={coffee.name} containerClassName="absolute inset-0" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B06]/90 via-[#1A0B06]/10 to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[9px] font-black uppercase tracking-[.17em] text-[#4A2416] backdrop-blur sm:left-7 sm:top-7"><Coffee className="h-3.5 w-3.5" /> Coffee favourite</div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[.2em] text-[#F8B47C]">Start with something warm</p>
              <div className="flex items-end justify-between gap-4"><div><h3 className="text-3xl font-black sm:text-5xl">{coffee.name}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-white/75">{coffee.description}</p></div><span className="shrink-0 text-xl font-black text-[#FFC18E]">{coffee.price}</span></div>
            </div>
          </article>

          {[{ item: pizza, note: 'Add something savoury', icon: Sparkles }, { item: dessert, note: 'Finish on a sweet note', icon: Heart }].map(({ item, note, icon: Icon }) => (
            <article key={item.id} className="group grid min-h-[235px] overflow-hidden rounded-[2rem] border sm:grid-cols-[.95fr_1.05fr] lg:col-span-5" style={{ background: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
              <div className="relative min-h-[210px] overflow-hidden sm:min-h-0"><CafeImage src={item.imageUrl} alt={item.name} containerClassName="absolute inset-0" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-black text-[#4A2416]">100% VEG</span></div>
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <p className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[.16em]" style={{ color: 'var(--color-brand-accent)' }}><Icon className="h-3.5 w-3.5" /> {note}</p>
                <h3 className="mt-2 text-xl font-black leading-tight" style={{ color: 'var(--color-text-primary)' }}>{item.name}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-5" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
                <p className="mt-4 text-base font-black" style={{ color: 'var(--color-brand-primary)' }}>{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-[10px] font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>A sample pairing inspired by popular items mentioned across current public listings.</p>
      </div>
    </section>
  );
};

export default SignatureDishesSection;
