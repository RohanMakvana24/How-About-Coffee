import { Marquee } from '@/components/ui/marquee-01-utils/marquee';

type Review = {
  name: string;
  meta: string;
  body: string;
  highlight?: string;
};

const REVIEWS: Review[] = [
  { name: 'Shailendra Singh', meta: 'Local Guide · 8 months ago', body: 'Coffee taste was good—not too strong, not too light, just balanced. The ambience is calm and comfortable.', highlight: 'Balanced coffee' },
  { name: 'Jitender Pokhariya', meta: 'Local Guide · 3 months ago', body: 'One of the most charming cafés in Jaipur. Warm, cozy and perfect for quality time with friends or working peacefully.', highlight: 'Cozy ambience' },
  { name: 'Kritika Singh', meta: 'Dine-in · 8 months ago', body: 'The paneer salad was super fresh, colourful and perfectly balanced—wholesome yet indulgent.', highlight: 'Paneer salad' },
  { name: 'Vedika Dadhich', meta: 'Dine-in · 5 months ago', body: 'The iced tea was refreshing and perfectly balanced—not too sweet, not too bitter.', highlight: 'Iced tea' },
  { name: 'Aditi Garg', meta: 'Dine-in · 5 months ago', body: 'A beautiful café with amazing vibes, great food and perfectly brewed coffee. Every corner feels aesthetic.', highlight: 'Aesthetic space' },
  { name: 'smruthi v', meta: '7 months ago', body: 'I love the place, the ambience and the food. Definitely try their drinks—some of the best coffee I have had in Rajasthan.', highlight: 'Coffee & drinks' },
  { name: 'Pranav Lumb', meta: 'Dine-in · 3 months ago', body: 'Good ambience, good food and drinks, polite staff and a clean space. You can also play Uno and Jenga with friends.', highlight: 'Games with friends' },
  { name: 'Kritika Bansal', meta: 'Dine-in · 5 months ago', body: 'Great place to hang out. The Vietnamese coffee and subway sandwich were very good. Worth visiting.', highlight: 'Vietnamese coffee' },
  { name: 'LAVINA TANDON', meta: 'Local Guide · 11 months ago', body: 'A cosy Jagatpura café with Vietnamese coffee, croissants and wraps. A go-to place for winter.', highlight: 'Croissants & wraps' },
  { name: 'MAHESH KUMAR SHARMA', meta: 'Local Guide · a year ago', body: 'Perfect for a casual hangout or work session. The cold brew and classic cappuccino were excellent.', highlight: 'Cold brew' },
];

const firstRow = REVIEWS.slice(0, 5);
const secondRow = REVIEWS.slice(5);

function ReviewCard({ name, meta, body, highlight }: Review) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <article className="w-[min(82vw,335px)] rounded-[1.5rem] border p-5 shadow-[0_14px_34px_rgba(59,25,10,.08)] transition-transform duration-300 hover:-translate-y-1" style={{ background: 'var(--color-bg-surface)', borderColor: 'var(--color-border-subtle)' }}>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))' }}>{initial}</span>
        <div className="min-w-0"><h3 className="truncate text-sm font-black" style={{ color: 'var(--color-text-primary)' }}>{name}</h3><p className="mt-0.5 text-[10px] font-bold" style={{ color: 'var(--color-text-secondary)' }}>{meta}</p></div>
      </div>
      <p className="mt-4 min-h-[66px] text-sm leading-6" style={{ color: 'var(--color-text-secondary)' }}>“{body}”</p>
      {highlight && <span className="mt-4 inline-flex rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[.12em]" style={{ background: 'var(--color-brand-surface-tint)', color: 'var(--color-brand-primary)' }}>{highlight}</span>}
    </article>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <Marquee reverse pauseOnHover className="[--duration:34s]">
        {firstRow.map((review) => <ReviewCard key={review.name} {...review} />)}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:38s]">
        {secondRow.map((review) => <ReviewCard key={review.name} {...review} />)}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r sm:w-24" style={{ '--tw-gradient-from': 'var(--color-bg-page)' } as React.CSSProperties} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l sm:w-24" style={{ '--tw-gradient-from': 'var(--color-bg-page)' } as React.CSSProperties} />
    </div>
  );
}

export default MarqueeDemo;
