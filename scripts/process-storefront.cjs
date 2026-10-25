const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\2c81db34-9cfe-431c-bbb6-c446523750d7\\.user_uploaded\\media_1792851074038.png';
const outputDir = path.resolve(__dirname, '../public/images/photos');

async function processImage() {
  console.log('Processing official storefront image...');

  // 1. Save high-res enhanced 4:5 aspect version (960x1200)
  const destWebp = path.join(outputDir, 'official-storefront.webp');
  const destJpg = path.join(outputDir, 'official-storefront.jpg');

  await sharp(inputPath)
    .resize(960, 1200, {
      fit: 'cover',
      position: 'top',
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({
      brightness: 1.05,
      saturation: 1.15,
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.2,
    })
    .webp({ quality: 92 })
    .toFile(destWebp);

  console.log('Generated:', destWebp, fs.statSync(destWebp).size, 'bytes');

  await sharp(inputPath)
    .resize(960, 1200, {
      fit: 'cover',
      position: 'top',
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({
      brightness: 1.05,
      saturation: 1.15,
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.2,
    })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(destJpg);

  console.log('Generated:', destJpg, fs.statSync(destJpg).size, 'bytes');
}

processImage().catch(console.error);
