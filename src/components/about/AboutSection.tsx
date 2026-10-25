import React from 'react';
import { CafeImage } from '../ui/CafeImage';
import { ArrowUpRight, BookOpen, Clock3, Coffee, Laptop, Leaf, MapPin, PawPrint, Sparkles, Wifi } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

const EXPERIENCES = [
  { icon: Laptop, title: 'Work-friendly', text: 'Settle in with your laptop, coffee and a comfortable café pace.' },
  { icon: Wifi, title: 'Free Wi-Fi', text: 'Stay connected while you work, catch up or take a quiet break.' },
  { icon: BookOpen, title: 'Books available', text: 'Pick a corner, slow down and enjoy something worth reading.' },
  { icon: PawPrint, title: 'Pet-friendly', text: 'A welcoming neighbourhood stop for you and your companion.' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="scroll-mt-20 border-t py-16 sm:py-24" style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border-subtle)' }}>
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[620px] pb-12 pr-7 sm:pb-16 sm:pr-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.4rem] shadow-[0_30px_70px_rgba(64,28,13,.18)] sm:rounded-[3rem]">
              <CafeImage src="/images/photos/cafe-interior.webp" alt="A warm, relaxed coffee shop setting" loading="lazy" containerClassName="h-full w-full" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B0C07]/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#FFC18E]">Your neighbourhood coffee spot</p>
                <p className="mt-2 max-w-sm text-xl font-black leading-tight sm:text-3xl">Come for the coffee.<br />Stay for the feeling.</p>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[54%] rotate-[3deg] overflow-hidden rounded-[1.7rem] border-[7px] shadow-2xl sm:rounded-[2rem]" style={{ borderColor: 'var(--color-bg-surface)' }}>
              <CafeImage src="/images/photos/gallery-grilled-sandwich.webp" alt="A freshly grilled vegetarian sandwich served with seasoned fries" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>

            <div className="absolute -left-2 top-8 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur sm:-left-6" style={{ background: 'color-mix(in srgb, var(--color-bg-surface) 92%, transparent)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl text-white" style={{ background: 'var(--color-brand-accent)' }}><Coffee className="h-4 w-4" /></span>
                <span><b className="block text-xs" style={{ color: 'var(--color-text-primary)' }}>Brew · Bite · Belong</b><small className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-tertiary)' }}>Jagatpura, Jaipur</small></span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.24em]" style={{ color: 'var(--color-brand-accent)' }}><Sparkles className="h-4 w-4" /> The café experience</p>
            <h2 className="text-4xl font-black leading-[.96] tracking-[-.045em] sm:text-6xl" style={{ color: 'var(--color-text-primary)' }}>Some days just need<br /><em style={{ color: 'var(--color-brand-primary)' }}>a good cup.</em></h2>
            <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              How About Coffee is a relaxed vegetarian café in Jagatpura made for everyday pauses—morning coffee, quick bites, work sessions, friendly catch-ups and unhurried me-time.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {EXPERIENCES.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border p-4 transition-transform hover:-translate-y-1" style={{ background: 'var(--color-bg-page)', borderColor: 'var(--color-border-subtle)' }}>
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: 'var(--color-brand-surface-tint)', color: 'var(--color-brand-primary)' }}><Icon className="h-4 w-4" /></span>
                    <div><h3 className="text-sm font-black" style={{ color: 'var(--color-text-primary)' }}>{title}</h3><p className="mt-1 text-xs leading-5" style={{ color: 'var(--color-text-secondary)' }}>{text}</p></div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-y py-5 text-xs font-bold" style={{ borderColor: 'var(--color-border-subtle)', color: 'var(--color-text-secondary)' }}>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4" style={{ color: 'var(--color-brand-accent)' }} /> Pure vegetarian</span>
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" style={{ color: 'var(--color-brand-accent)' }} /> Open daily</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: 'var(--color-brand-accent)' }} /> Jagatpura Road</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3 text-xs font-black text-white transition-transform hover:-translate-y-0.5" style={{ background: 'var(--color-brand-primary)' }}>See café moments <ArrowUpRight className="h-4 w-4" /></button>
              <a href={BUSINESS_INFO.location.googleMapsSearchUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-black transition-transform hover:-translate-y-0.5" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}>Get directions <MapPin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#30170E] px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div><p className="text-[9px] font-black uppercase tracking-[.22em] text-[#F1A56F]">The simple philosophy</p><h3 className="mt-2 text-2xl font-black sm:text-3xl">No rush. No fuss.<br />Just good café time.</h3></div>
            <p className="text-sm leading-7 text-white/70">Whether it is the first coffee of the morning or a late-evening plate shared with friends, the idea stays simple: serve comforting flavours in a space that feels easy to return to.</p>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>Amenities shown are based on current public restaurant listings and can be confirmed with the café before launch.</p>
      </div>
    </section>
  );
};

export default AboutSection;
