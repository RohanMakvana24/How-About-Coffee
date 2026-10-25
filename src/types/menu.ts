export type MenuCategoryId =
  | 'all'
  | 'coffee'
  | 'cold-coffee'
  | 'sandwiches-wraps'
  | 'pizza-burgers'
  | 'snacks'
  | 'desserts';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  iconName?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  categoryId: MenuCategoryId;
  categoryLabel: string;
  description: string;
  dietary?: 'veg' | 'jain-available';
  price?: string;
  imageSlug?: string;
  imageUrl?: string;
  tabletopCardPlacement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  tabletopMaterial?: string;
  accentColor?: string;
  featured?: boolean;
}
