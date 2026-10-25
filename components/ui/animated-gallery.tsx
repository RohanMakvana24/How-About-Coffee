import { useRef } from 'react';
import { Expand } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { CafeImage } from '@/src/components/ui/CafeImage';

export type AnimatedGalleryItem = {
  id: string;
  imageUrl?: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
};

type AnimatedGalleryProps<T extends AnimatedGalleryItem> = {
  items: T[];
  onSelect: (item: T) => void;
};

/** Full-frame perspective wall on desktop; native, non-sticky mosaic on touch layouts. */
export default function AnimatedGallery<T extends AnimatedGalleryItem>({ items, onSelect }: AnimatedGalleryProps<T>) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 22,
    mass: 0.42,
    restDelta: 0.0008,
  });
  const rotateX = useTransform(smoothProgress, [0.06, 0.43, 0.86], [reduceMotion ? 0 : 52, 0, reduceMotion ? 0 : -3]);
  const rotateZ = useTransform(smoothProgress, [0.06, 0.43], [reduceMotion ? 0 : -1.4, 0]);
  const scale = useTransform(smoothProgress, [0.06, 0.43, 0.86], [reduceMotion ? 1 : 0.78, 1, 1.025]);
  const y = useTransform(smoothProgress, [0.06, 0.43, 0.86], [reduceMotion ? '0%' : '18%', '0%', reduceMotion ? '0%' : '-2%']);
  const opacity = useTransform(smoothProgress, [0.03, 0.16], [0.4, 1]);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:hidden">
        {items.map((item) => <GalleryTile key={item.id} item={item} onSelect={onSelect} className="aspect-[4/3]" />)}
      </div>

      <div ref={sectionRef} className="relative hidden h-[175vh] lg:block" style={{ perspective: '900px' }}>
        <div className="sticky top-[76px] flex h-[calc(100vh-76px)] items-center overflow-hidden" style={{ perspective: '900px', perspectiveOrigin: '50% 42%' }}>
          <motion.div
            className="grid h-[82vh] w-full grid-cols-3 grid-rows-2 gap-2.5"
            style={{ rotateX, rotateZ, scale, y, opacity, transformStyle: 'preserve-3d', transformOrigin: '50% 55%', willChange: 'transform' }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={index === 1 || index === 4 ? 'h-full min-h-0 translate-y-5' : index === 2 || index === 3 ? 'h-full min-h-0 -translate-y-3' : 'h-full min-h-0'}
                style={{ transformStyle: 'preserve-3d', transform: `translateZ(${index % 2 === 0 ? '24px' : '4px'})` }}
              >
                <GalleryTile item={item} onSelect={onSelect} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

function GalleryTile<T extends AnimatedGalleryItem>({ item, onSelect, className = '' }: { item: T; onSelect: (item: T) => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={`group relative block h-full min-h-0 w-full overflow-hidden rounded-lg bg-[#24140d] text-left shadow-[0_14px_32px_rgba(46,24,11,.18)] transition-shadow duration-500 hover:z-10 hover:shadow-[0_24px_50px_rgba(46,24,11,.3)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`}
      aria-label={`Open ${item.title}`}
    >
      <CafeImage src={item.imageUrl} alt={item.alt} loading="lazy" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" containerClassName="absolute inset-0 h-full w-full" className="h-full w-full object-cover transition-[filter] duration-500 group-hover:saturate-[1.12] group-hover:brightness-[.92]" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5 opacity-20 transition-opacity duration-500 group-hover:opacity-85" />
      <span className="pointer-events-none absolute -inset-y-1 left-[-65%] w-[48%] -skew-x-12 bg-gradient-to-r from-transparent via-[#ffd3a8]/30 to-transparent blur-sm transition-[left] duration-700 ease-out group-hover:left-[125%] group-focus-visible:left-[125%]" />
      <span className="pointer-events-none absolute inset-2 rounded-md border border-[#ffc28f]/0 transition-[border-color,box-shadow] duration-500 group-hover:border-[#ffc28f]/55 group-hover:shadow-[inset_0_0_24px_rgba(255,166,98,.12)] group-focus-visible:border-[#ffc28f]/55" />
      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-300 group-hover:rotate-90 group-hover:opacity-100 group-focus-visible:opacity-100"><Expand className="h-3.5 w-3.5" /></span>
      <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <small className="text-[8px] font-black uppercase tracking-[.18em] text-[#FFC18E]">{item.category}</small>
        <strong className="mt-0.5 block text-base font-black leading-tight sm:text-xl">{item.title}</strong>
      </span>
    </button>
  );
}
