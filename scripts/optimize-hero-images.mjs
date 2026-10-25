import sharp from 'sharp';

const input = 'public/images/photos/hero-cafe-interior-doorway-v1.png';
const output = 'public/images/photos/hero-cafe-interior-doorway';

for (const width of [800, 1440]) {
  const image = sharp(input).resize({ width, withoutEnlargement: true });
  await image.clone().avif({ quality: 52, effort: 5 }).toFile(`${output}-${width}.avif`);
  await image.clone().webp({ quality: 76, effort: 5 }).toFile(`${output}-${width}.webp`);
}

console.log('Optimized hero AVIF and WebP variants created.');

const coffeeInput = 'public/images/photos/hero-real-coffee.png';
const coffeeOutput = 'public/images/photos/hero-real-coffee';

for (const width of [800, 1440]) {
  const image = sharp(coffeeInput).resize({ width, withoutEnlargement: true });
  await image.clone().avif({ quality: 52, effort: 5 }).toFile(`${coffeeOutput}-${width}.avif`);
  await image.clone().webp({ quality: 76, effort: 5 }).toFile(`${coffeeOutput}-${width}.webp`);
}

console.log('Optimized real coffee hero AVIF and WebP variants created.');
