const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn('File not found:', fullPath);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let count = 0;
  for (const [target, replacement] of replacements) {
    if (content.includes(target)) {
      content = content.replaceAll(target, replacement);
      count++;
    }
  }
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${filePath}: ${count} replacements applied`);
}

// 1. CartDrawer.tsx
replaceInFile('src/components/cart/CartDrawer.tsx', [
  ['const FOOGLE_ADDONS', 'const COFFEE_ADDONS'],
  ['FOOGLE_ADDONS.map', 'COFFEE_ADDONS.map'],
  ['Your Foogle Tray', 'Your Coffee Tray'],
  ['from Panchwati kitchen', 'from our Jagatpura kitchen'],
  ['Panchwati Kitchen', 'Jagatpura Kitchen'],
  ['Popular Foogle Pairings', 'Popular Coffee Pairings'],
  ['Direct to Foogle Kitchen', 'Direct to Café Kitchen'],
]);

// 2. FloatingCartBar.tsx
replaceInFile('src/components/cart/FloatingCartBar.tsx', [
  ['Foogle Tray', 'Coffee Tray'],
]);

// 3. GalleryLightbox.tsx
replaceInFile('src/components/gallery/GalleryLightbox.tsx', [
  ['Panchwati, Udaipur', 'Jagatpura, Jaipur'],
]);

// 4. ContactSection.tsx
replaceInFile('src/components/contact/ContactSection.tsx', [
  ['Panchwati Hub', 'Jagatpura Hub'],
]);

// 5. GravityFooter.tsx
replaceInFile('src/components/footer/GravityFooter.tsx', [
  ['Foogle Food-Doodle Emblem', 'How About Coffee Emblem'],
  ['FOOGLE_BUSINESS_INFO', 'BUSINESS_INFO'],
]);

// 6. RotatingLocationMap.tsx
replaceInFile('src/components/location/RotatingLocationMap.tsx', [
  ['foogle-custom-map-marker', 'hac-custom-map-marker'],
  ['aria-label="Re-center Foogle"', 'aria-label="Re-center How About Coffee"'],
  ['title="Re-center on Foogle"', 'title="Re-center on How About Coffee"'],
  ['FOOGLE_BUSINESS_INFO', 'BUSINESS_INFO'],
]);

// 7. CartContext.tsx
replaceInFile('src/context/CartContext.tsx', [
  ['foogle_cafe_cart_v1', 'how_about_coffee_cart_v1'],
  ['FOOGLE_BUSINESS_INFO', 'BUSINESS_INFO'],
]);

// 8. LocationSection.tsx
replaceInFile('src/components/location/LocationSection.tsx', [
  ['FOOGLE_BUSINESS_INFO', 'BUSINESS_INFO'],
]);

// 9. index.css
replaceInFile('src/index.css', [
  ['FOOGLE RESTAURANT & CAFE — DESIGN SYSTEM TOKENS (PHASE 1)', 'HOW ABOUT COFFEE — DESIGN SYSTEM TOKENS'],
  ['Location: Panchwati, Udaipur, Rajasthan, India', 'Location: Jagatpura, Jaipur, Rajasthan, India'],
]);
