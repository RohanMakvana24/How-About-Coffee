import React, { useEffect, useState } from 'react';
import { Menu, X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { ThemeToggle } from '../common/ThemeToggle';
import { BUSINESS_INFO } from '../../data/businessInfo';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('#home');
      setOverHero(Boolean(hero && hero.getBoundingClientRect().bottom > 76));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return () => { document.body.style.overflow = ''; };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const lightOnDark = overHero && !open;

  return (
    <header
      className={`pointer-events-auto sticky inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color,box-shadow,color] duration-500 ${lightOnDark ? '' : 'shadow-[0_10px_35px_rgba(55,25,12,.08)]'}`}
      style={{ backgroundColor: lightOnDark ? '#0e0805' : 'var(--color-nav-bg)', borderColor: lightOnDark ? 'transparent' : 'var(--color-border-subtle)', backdropFilter: lightOnDark ? 'none' : 'blur(18px)' }}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <button onClick={() => goTo('#home')} className="cursor-pointer rounded-xl text-left" aria-label="Go to homepage">
          <BrandLogo size="md" inverse={lightOnDark} />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className="cursor-pointer text-[13px] font-bold tracking-wide transition-colors hover:text-[var(--color-brand-accent)]"
              style={{ color: lightOnDark ? 'rgba(255,247,236,.82)' : 'var(--color-text-secondary)' }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle showLabel={false} className={`h-10 w-10 border-0 shadow-none ${lightOnDark ? '!bg-white/10 text-white' : 'bg-transparent'}`} />
          <a
            href={BUSINESS_INFO.contact.phoneCallHref}
            className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: lightOnDark ? 'rgba(255,255,255,.1)' : 'var(--color-brand-surface-tint)', color: lightOnDark ? '#fff7ec' : 'var(--color-brand-primary)' }}
          >
            <Phone className="h-3.5 w-3.5" /> Call Us
          </a>
          <button
            onClick={() => goTo('#menu')}
            className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-5 text-xs font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--color-btn-primary-bg)' }}
          >
            Explore Menu <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle showLabel={false} className={`h-10 w-10 border-0 shadow-none ${lightOnDark ? '!bg-white/10 text-white' : 'bg-transparent'}`} />
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl"
            style={{ background: lightOnDark ? 'rgba(255,255,255,.1)' : 'var(--color-brand-surface-tint)', color: lightOnDark ? '#fff7ec' : 'var(--color-brand-primary)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 lg:hidden" style={{ background: 'var(--color-bg-page)' }}>
          <nav className="relative flex h-full flex-col overflow-y-auto px-5 pb-7 pt-5" aria-label="Mobile navigation">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-4 z-10 inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border px-4 text-xs font-black shadow-sm"
              style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" /> Close
            </button>
            <div className="h-10 shrink-0" aria-hidden="true" />
            <p className="mb-3 text-[10px] font-black uppercase tracking-[.25em]" style={{ color: 'var(--color-brand-accent)' }}>Discover the café</p>
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className="flex cursor-pointer items-center justify-between border-b py-4 text-left text-xl font-extrabold"
                style={{ color: 'var(--color-text-primary)', borderColor: 'var(--color-border-subtle)' }}
              >
                <span><small className="mr-3 text-[10px] opacity-40">0{index + 1}</small>{item.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            ))}
            <div className="mt-auto space-y-3 rounded-3xl p-5" style={{ background: 'var(--color-brand-surface-tint)' }}>
              <div className="flex items-start gap-3 text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--color-brand-accent)' }} />
                {BUSINESS_INFO.location.shortAddress}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a href={BUSINESS_INFO.contact.phoneCallHref} className="rounded-xl border py-3 text-center text-xs font-black" style={{ borderColor: 'var(--color-brand-primary)', color: 'var(--color-brand-primary)' }}>Call Café</a>
                <a href={BUSINESS_INFO.contact.whatsappHref} target="_blank" rel="noreferrer" className="rounded-xl py-3 text-center text-xs font-black text-white" style={{ background: 'var(--color-brand-primary)' }}>WhatsApp</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
