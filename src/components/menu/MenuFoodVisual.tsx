import React from 'react';
import { MenuItem } from '../../types/menu';

/** Shared menu image frame retained for any future compact menu layouts. */
export const MenuFoodVisual: React.FC<{ item: MenuItem; aspectRatio?: string; className?: string }> = ({ item, aspectRatio = '4/3', className = '' }) => (
  <div className={`relative overflow-hidden bg-[#EADBCB] ${className}`} style={{ aspectRatio }}>
    <img
      src={item.imageUrl || '/images/photos/food-fallback.webp'}
      alt={item.name}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
  </div>
);

export default MenuFoodVisual;
