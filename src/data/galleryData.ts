import { GalleryItem } from '../types/gallery';

/** Representative demo photography mapped to current How About Coffee menu categories. */
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g-coffee', title: 'Coffee, crafted slowly', subtitle: 'A quiet ritual for busy days.', category: 'Beverages', aspectRatio: '3:4', spanClass: 'md:row-span-2', accentColor: '#C65D2E', imageUrl: '/images/photos/barista-pour.webp', alt: 'Barista preparing freshly brewed coffee' },
  { id: 'g-interior', title: 'Stay a little longer', subtitle: 'A warm corner for conversations and work.', category: 'Cafe Moments', aspectRatio: '16:9', spanClass: 'md:col-span-2', accentColor: '#4A2416', imageUrl: '/images/photos/cafe-interior.webp', alt: 'Warm contemporary cafe interior' },
  { id: 'g-cold', title: 'Chilled coffee', subtitle: 'Smooth, cold and made to refresh.', category: 'Beverages', aspectRatio: '1:1', spanClass: '', accentColor: '#9A3F21', imageUrl: '/images/photos/cold-coffee.webp', alt: 'Chilled layered coffee in a cafe glass' },
  { id: 'g-pizza', title: 'Farmhouse pizza', subtitle: 'Loaded, cheesy and oven baked.', category: 'Pizza', aspectRatio: '4:3', spanClass: '', accentColor: '#C65D2E', imageUrl: '/images/photos/woodfired-pizza.webp', alt: 'Fresh vegetable pizza with melted cheese' },
  { id: 'g-sandwich', title: 'Grilled favourites', subtitle: 'Crisp, generous and satisfying.', category: 'Snacks', aspectRatio: '4:3', spanClass: '', accentColor: '#D7894E', imageUrl: '/images/photos/mumbaiya-sandwich.webp', alt: 'Grilled vegetable sandwich with fries' },
  { id: 'g-maggi', title: 'Comfort in a bowl', subtitle: 'Masala Maggi for instant good mood.', category: 'Snacks', aspectRatio: '1:1', spanClass: '', accentColor: '#C65D2E', imageUrl: '/images/photos/cheesy-maggi.webp', alt: 'Warm bowl of vegetable masala noodles' },
  { id: 'g-shake', title: 'Oreo Nutella shake', subtitle: 'Thick, chilled and unapologetically indulgent.', category: 'Beverages', aspectRatio: '3:4', spanClass: 'md:row-span-2', accentColor: '#4A2416', imageUrl: '/images/photos/oreo-shake.webp', alt: 'Thick Oreo chocolate shake' },
  { id: 'g-brownie', title: 'Brownie & ice cream', subtitle: 'Warm chocolate meets cool vanilla.', category: 'Desserts', aspectRatio: '4:3', spanClass: '', accentColor: '#9A3F21', imageUrl: '/images/photos/sizzling-brownie.webp', alt: 'Chocolate brownie served with vanilla ice cream' },
  { id: 'g-fries', title: 'Peri-peri crunch', subtitle: 'Golden fries with a fiery finish.', category: 'Snacks', aspectRatio: '1:1', spanClass: '', accentColor: '#D7894E', imageUrl: '/images/photos/peri-peri-fries.webp', alt: 'Crispy peri peri seasoned fries' },
];
