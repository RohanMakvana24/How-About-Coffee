import { MenuCategory, MenuItem } from '../types/menu';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Favourites' },
  { id: 'coffee', label: 'Hot Coffee' },
  { id: 'cold-coffee', label: 'Cold & Chilled' },
  { id: 'sandwiches-wraps', label: 'Sandwiches & Wraps' },
  { id: 'pizza-burgers', label: 'Pizza & Burgers' },
  { id: 'snacks', label: 'Quick Bites' },
  { id: 'desserts', label: 'Sweet Treats' },
];

/**
 * Demo menu assembled from the café's current public ordering listings.
 * Existing project photography is used as representative imagery until the
 * owner supplies an official menu/photos.
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'cappuccino', name: 'Cappuccino', categoryId: 'coffee', categoryLabel: 'Hot Coffee', price: '₹190', featured: true,
    description: 'A creamy, frothy balance of bold espresso, steamed milk and foam.', imageUrl: '/images/menu-swiggy/cappuccino.jpg', dietary: 'veg',
  },
  {
    id: 'cafe-latte', name: 'Café Latte', categoryId: 'coffee', categoryLabel: 'Hot Coffee', price: '₹210',
    description: 'Rich espresso softened with silky steamed milk and a gentle layer of froth.', imageUrl: '/images/menu-swiggy/cafe-latte.jpg', dietary: 'veg',
  },
  {
    id: 'hazelnut-cappuccino', name: 'Hazelnut Cappuccino', categoryId: 'coffee', categoryLabel: 'Hot Coffee', price: '₹194', featured: true,
    description: 'The classic cappuccino finished with warm, nutty hazelnut notes.', imageUrl: '/images/menu-swiggy/hazelnut-cappuccino.jpg', dietary: 'veg',
  },
  {
    id: 'flat-white', name: 'Flat White', categoryId: 'coffee', categoryLabel: 'Hot Coffee', price: '₹230',
    description: 'A velvety double espresso with a fine layer of smooth microfoam.', imageUrl: '/images/menu-swiggy/flat-white.jpg', dietary: 'veg',
  },
  {
    id: 'iced-hazelnut-latte', name: 'Iced Hazelnut Latte', categoryId: 'cold-coffee', categoryLabel: 'Cold & Chilled', price: '₹250', featured: true,
    description: 'Chilled espresso, milk and hazelnut served smooth over ice.', imageUrl: '/images/menu-swiggy/iced-hazelnut-latte.jpg', dietary: 'veg',
  },
  {
    id: 'vietnamese-cold-brew', name: 'Vietnamese Cold Brew', categoryId: 'cold-coffee', categoryLabel: 'Cold & Chilled', price: '₹255',
    description: 'Bold slow-brewed coffee made creamy and lightly sweet with condensed milk.', imageUrl: '/images/menu-swiggy/vietnamese-cold-brew.jpg', dietary: 'veg',
  },
  {
    id: 'oreo-nutella-shake', name: 'Oreo Nutella Shake', categoryId: 'cold-coffee', categoryLabel: 'Cold & Chilled', price: '₹250',
    description: 'A thick and indulgent blend of Oreo, Nutella and creamy goodness.', imageUrl: '/images/menu-swiggy/oreo-nutella-shake.jpg', dietary: 'veg',
  },
  {
    id: 'veg-grilled-sandwich', name: 'Veg Grilled Sandwich', categoryId: 'sandwiches-wraps', categoryLabel: 'Sandwiches & Wraps', price: '₹190', featured: true,
    description: 'Crisp brown bread packed with fresh vegetables and grilled until golden.', imageUrl: '/images/menu-swiggy/veg-grilled-sandwich.jpg', dietary: 'veg',
  },
  {
    id: 'peri-paneer-sandwich', name: 'Peri Peri Paneer Sandwich', categoryId: 'sandwiches-wraps', categoryLabel: 'Sandwiches & Wraps', price: '₹250',
    description: 'Fiery peri-peri paneer layered with crunchy vegetables and flavourful sauces.', imageUrl: '/images/menu-swiggy/peri-paneer-sandwich.jpg', dietary: 'veg',
  },
  {
    id: 'tandoori-paneer-wrap', name: 'Tandoori Paneer Wrap', categoryId: 'sandwiches-wraps', categoryLabel: 'Sandwiches & Wraps', price: '₹210', featured: true,
    description: 'Smoky tandoori paneer, crisp vegetables and creamy sauce wrapped fresh.', imageUrl: '/images/menu-swiggy/tandoori-paneer-wrap.jpg', dietary: 'veg',
  },
  {
    id: 'farm-house-pizza', name: 'Farm House Pizza', categoryId: 'pizza-burgers', categoryLabel: 'Pizza & Burgers', price: '₹275', featured: true,
    description: 'A satisfying vegetable-loaded pizza with melted cheese and Italian seasoning.', imageUrl: '/images/menu-swiggy/farm-house-pizza.jpg', dietary: 'veg',
  },
  {
    id: 'tandoori-paneer-pizza', name: 'Tandoori Paneer Pizza', categoryId: 'pizza-burgers', categoryLabel: 'Pizza & Burgers', price: '₹360',
    description: 'Spiced paneer and fresh vegetables over a cheesy, oven-baked crust.', imageUrl: '/images/menu-swiggy/tandoori-paneer-pizza.jpg', dietary: 'veg',
  },
  {
    id: 'crispy-paneer-burger', name: 'Crispy Paneer Burger', categoryId: 'pizza-burgers', categoryLabel: 'Pizza & Burgers', price: '₹180',
    description: 'A crisp paneer patty, fresh vegetables and signature sauce in a soft bun.', imageUrl: '/images/photos/menu-crispy-paneer-burger.webp', dietary: 'veg',
  },
  {
    id: 'masala-maggi', name: 'Masala Maggi', categoryId: 'snacks', categoryLabel: 'Quick Bites', price: '₹150', featured: true,
    description: 'Comforting Maggi tossed with crunchy vegetables and a savoury masala blend.', imageUrl: '/images/photos/menu-masala-maggi.webp', dietary: 'veg',
  },
  {
    id: 'peri-peri-fries', name: 'Peri-Peri Fries', categoryId: 'snacks', categoryLabel: 'Quick Bites', price: '₹190',
    description: 'Golden fries tossed in a lively peri-peri seasoning.', imageUrl: '/images/photos/menu-peri-peri-fries.webp', dietary: 'veg',
  },
  {
    id: 'cheese-garlic-bread', name: 'Cheese Garlic Bread', categoryId: 'snacks', categoryLabel: 'Quick Bites', price: '₹180',
    description: 'Golden toasted bread with aromatic garlic butter and bubbling cheese.', imageUrl: '/images/photos/menu-cheese-garlic-bread.webp', dietary: 'veg',
  },
  {
    id: 'brownie-ice-cream', name: 'Brownie With Ice Cream', categoryId: 'desserts', categoryLabel: 'Sweet Treats', price: '₹240', featured: true,
    description: 'A warm chocolate brownie crowned with a scoop of creamy vanilla ice cream.', imageUrl: '/images/photos/menu-brownie-ice-cream.webp', dietary: 'veg',
  },
  {
    id: 'nutella-brownie', name: 'Nutella Brownie', categoryId: 'desserts', categoryLabel: 'Sweet Treats', price: '₹270',
    description: 'Warm fudgy brownie finished with a generous layer of rich Nutella.', imageUrl: '/images/photos/menu-nutella-brownie.webp', dietary: 'veg',
  },
];
