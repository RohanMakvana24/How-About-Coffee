import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

const BEANS = [
  ['back', '8%', '28%', '28px', '-30deg'], ['back', '19%', '68%', '23px', '38deg'], ['back', '78%', '22%', '25px', '21deg'], ['back', '91%', '55%', '32px', '-25deg'],
  ['mid', '30%', '17%', '47px', '23deg'], ['mid', '20%', '45%', '42px', '-28deg'], ['mid', '76%', '66%', '48px', '32deg'], ['mid', '68%', '15%', '38px', '-14deg'],
  ['front', '8%', '73%', '78px', '28deg'], ['front', '87%', '34%', '90px', '-22deg'], ['front', '56%', '12%', '63px', '10deg'],
] as const;

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [imageReady, setImageReady] = useState(false);
  const scrollToMenu = () => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    let frame = 0;
    let latest = 0;
    let isVisible = true;
    let pageVisible = !document.hidden;
    const render = () => {
      frame = 0;
      if (isVisible && pageVisible) stageRef.current?.style.setProperty('--pb-scroll', latest.toFixed(4));
    };
    const update = () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage || !pageVisible) return;
      const range = Math.max(1, section.offsetHeight - stage.offsetHeight);
      latest = Math.max(0, Math.min(1, (window.scrollY - section.offsetTop) / range));
      if (!frame) frame = requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      stageRef.current?.classList.toggle('pb-hero--active', isVisible);
      if (isVisible) update();
    }, { rootMargin: '120px 0px' });
    if (sectionRef.current) observer.observe(sectionRef.current);
    update();
    const onScroll = () => update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const onVisibility = () => { pageVisible = !document.hidden; if (pageVisible) update(); };
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); document.removeEventListener('visibilitychange', onVisibility); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const handleHeroImageReady = () => {
    setImageReady(true);
    window.dispatchEvent(new Event('hac:hero-ready'));
  };

  return (
    <section ref={sectionRef} id="home" className="relative h-[180vh] bg-[#0e0805]">
      <div ref={stageRef} className="pb-hero pb-hero--active sticky top-[76px] isolate h-[calc(100vh-76px)] overflow-hidden bg-[#0e0805] text-[#f8ead6]" style={{ '--pb-scroll': 0 } as React.CSSProperties}>
      <div className="pb-hero-glow" aria-hidden="true" />
      <div className="pb-hero-word" aria-hidden="true">HOW ABOUT</div>

      <div className="pb-beans" aria-hidden="true">
        {BEANS.map(([depth, left, top, size, rotate], index) => <i key={index} className={`pb-bean pb-bean--${depth}`} style={{ left, top, width: size, height: `calc(${size} * 1.4)`, '--bean-rotate': rotate, '--bean-delay': `${-index * 0.42}s` } as React.CSSProperties} />)}
      </div>

      <div className="pb-cup" aria-hidden="true">
        <div className="pb-cup-shadow" />
        <svg className="pb-cup-ring" viewBox="0 0 300 300"><defs><path id="heroCoffeeRing" d="M150 150m-136 0a136 136 0 1 1 272 0a136 136 0 1 1-272 0" /></defs><circle cx="150" cy="150" r="127" fill="none" stroke="rgba(248,234,214,.17)" strokeDasharray="2 6" /><text><textPath href="#heroCoffeeRing">HOW ABOUT COFFEE · JAGATPURA JAIPUR · BREWED SLOW · </textPath></text></svg>
        <div className={`pb-cup-image ${imageReady ? 'pb-cup-image--ready' : ''}`}><img src="/images/hero-latte-cutout.png" alt="" fetchPriority="high" decoding="async" onLoad={handleHeroImageReady} /></div>
      </div>
      <svg className="pb-steam" viewBox="0 0 200 340" aria-hidden="true"><defs><linearGradient id="pbSteam" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#f7b47a" stopOpacity="0" /><stop offset=".45" stopColor="#ffe1c1" stopOpacity=".8" /><stop offset="1" stopColor="#fff4e6" stopOpacity="0" /></linearGradient></defs><path d="M100 330c-30-40 30-70 0-110s30-70 0-110 20-60 5-90" /><path d="M70 330c-26-36 24-64-2-100s26-64 0-100" /><path d="M132 330c24-38-24-66 2-104s-22-62 4-98" /></svg>
      <div className="pb-can" aria-hidden="true"><svg viewBox="0 0 120 250"><defs><linearGradient id="pbCanBody" x1="0" x2="1"><stop offset="0" stopColor="#090403"/><stop offset=".18" stopColor="#3f2417"/><stop offset=".3" stopColor="#9b6240"/><stop offset=".42" stopColor="#3a1e13"/><stop offset=".75" stopColor="#140906"/><stop offset="1" stopColor="#070302"/></linearGradient><linearGradient id="pbCanBand" x1="0" x2="1"><stop offset="0" stopColor="#9f350e"/><stop offset=".22" stopColor="#ff7a3a"/><stop offset=".34" stopColor="#ffcc9f"/><stop offset=".48" stopColor="#ff6b2c"/><stop offset="1" stopColor="#6a2108"/></linearGradient><linearGradient id="pbCanMetal" x1="0" x2="1"><stop stopColor="#292929"/><stop offset=".28" stopColor="#f0f0f0"/><stop offset=".55" stopColor="#747474"/><stop offset="1" stopColor="#292929"/></linearGradient></defs><path d="M14 24h92l4 10v182l-4 10H14l-4-10V34Z" fill="url(#pbCanBody)"/><rect x="10" y="128" width="100" height="52" fill="url(#pbCanBand)"/><path d="M18 22c4-8 80-8 84 0l4 4H14Z" fill="url(#pbCanMetal)"/><ellipse cx="60" cy="22" rx="44" ry="7" fill="url(#pbCanMetal)"/><path d="M14 226h92c-2 10-88 10-92 0Z" fill="url(#pbCanMetal)"/><path d="M55 87c-6-9 8-14 1-23M66 87c6-9-8-14-1-23" fill="none" stroke="#ff7a3a" strokeWidth="2.4" strokeLinecap="round"/><text x="60" y="110" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="10.3" fill="#f5e6cc">HOW ABOUT</text><text x="60" y="151" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#1a0b04">COLD</text><text x="60" y="169" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#1a0b04">BREW</text><rect x="22" y="30" width="9" height="190" rx="4.5" fill="#fff" opacity=".16"/></svg></div>

      <p className="pb-scroll-top absolute left-5 top-8 z-20 text-[10px] font-black uppercase tracking-[.24em] text-[#f7bd88] sm:left-9 sm:top-11 lg:left-12">Specialty coffee · Jagatpura</p>
      <div className="pb-scroll-top absolute right-5 top-7 z-20 hidden items-center gap-3 rounded-full border border-white/15 bg-black/25 py-2 pl-2 pr-4 text-xs font-bold text-white/80 backdrop-blur-md sm:flex sm:right-9 lg:right-12">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f49a51] text-[10px] font-black text-[#281008]">18h</span> Cold brew, made slow
      </div>

      <div className="pb-scroll-copy absolute bottom-16 left-5 z-20 max-w-[670px] sm:bottom-12 sm:left-9 lg:bottom-14 lg:left-12">
        <h1 className="text-[clamp(2.8rem,5.7vw,5.6rem)] font-black leading-[.87] tracking-[-.065em]">Coffee that makes<br /><em className="font-serif font-medium text-[#f7b47a]">time taste better.</em></h1>
      </div>
      <div className="pb-scroll-side absolute bottom-14 right-5 z-20 hidden w-[min(360px,28vw)] lg:block lg:right-12">
        <p className="text-[15px] leading-6 text-[#f5dfc6]/72">Warm cups, good food and your favourite corner of the city—made for slow mornings and long conversations.</p>
        <div className="mt-5 flex gap-3"><button onClick={scrollToMenu} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f7a866] px-5 py-3 text-xs font-black text-[#291107] transition-transform hover:-translate-y-1">Explore menu <ArrowRight className="h-3.5 w-3.5" /></button><a href={BUSINESS_INFO.contact.whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-5 py-3 text-xs font-black text-white transition-colors hover:bg-white/10">Say hello</a></div>
      </div>
      <button onClick={scrollToMenu} className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-[9px] font-black uppercase tracking-[.36em] text-white/45 transition-colors hover:text-[#f7b47a]" aria-label="Scroll to menu">Scroll<span className="mx-auto mt-2 block h-8 w-px bg-gradient-to-b from-[#f7a866] to-transparent" /></button>
      <p className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5 text-[10px] font-bold text-white/45 lg:hidden"><MapPin className="h-3.5 w-3.5 text-[#f7a866]" /> Jaipur</p>
      </div>
    </section>
  );
};

export default HeroSection;
