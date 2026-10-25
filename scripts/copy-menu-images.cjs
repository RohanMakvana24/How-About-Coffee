const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\2c81db34-9cfe-431c-bbb6-c446523750d7';
const destDir = path.resolve(__dirname, '../public/images/menu-swiggy');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  'cappuccino_white_bg_1792837352504.jpg': 'cappuccino.jpg',
  'cafe_latte_white_bg_1792837371200.jpg': 'cafe-latte.jpg',
  'hazelnut_cappuccino_white_bg_1792837393731.jpg': 'hazelnut-cappuccino.jpg',
  'flat_white_white_bg_1792837419177.jpg': 'flat-white.jpg',
  'iced_hazelnut_latte_white_bg_1792837447001.jpg': 'iced-hazelnut-latte.jpg',
  'vietnamese_cold_brew_white_bg_1792837470842.jpg': 'vietnamese-cold-brew.jpg',
  'oreo_nutella_shake_white_bg_1792837496201.jpg': 'oreo-nutella-shake.jpg',
  'veg_grilled_sandwich_white_bg_1792837526862.jpg': 'veg-grilled-sandwich.jpg',
  'swiggy_dish_white_bg_1792837231490.jpg': 'peri-paneer-sandwich.jpg',
  'tandoori_paneer_wrap_white_bg_1792837583041.jpg': 'tandoori-paneer-wrap.jpg',
  'farm_house_pizza_white_bg_1792837638700.jpg': 'farm-house-pizza.jpg',
  'tandoori_paneer_pizza_white_bg_1792837739432.jpg': 'tandoori-paneer-pizza.jpg',
};

for (const [srcFile, destFile] of Object.entries(mapping)) {
  const fullSrc = path.join(srcDir, srcFile);
  const fullDest = path.join(destDir, destFile);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied: ${destFile} (${fs.statSync(fullDest).size} bytes)`);
  } else {
    console.warn(`File not found: ${fullSrc}`);
  }
}
