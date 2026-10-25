const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function buildZoomedOutStorefront() {
  const origPath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\2c81db34-9cfe-431c-bbb6-c446523750d7\\.user_uploaded\\media_1792851074038.png';
  const outWebp = path.resolve(__dirname, '../public/images/photos/official-storefront.webp');
  const outJpg = path.resolve(__dirname, '../public/images/photos/official-storefront.jpg');

  // Canvas size: 1080 x 1350 (4:5 aspect ratio)
  const W = 1080;
  const H = 1350;

  // First, extract the real window & interior part of the user's photo
  // The original photo is 289x312.
  // Sign is approximately at y: 50 to 110.
  // Window grid & interior is at y: 110 to 312 (approx height 200).
  // Let's resize the real interior photo to fit nicely in the center-bottom of our 1080x1350 canvas.
  
  // Resize real photo so it's centered with breathing room
  const shopInnerWidth = 840;
  const shopInnerHeight = Math.round((shopInnerWidth / 289) * 312); // ~907px

  const resizedShopBuf = await sharp(origPath)
    .resize(shopInnerWidth, shopInnerHeight, {
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({
      brightness: 1.08,
      saturation: 1.15,
    })
    .sharpen({
      sigma: 1.3,
      m1: 1.2,
      m2: 2.5,
    })
    .toBuffer();

  // Create an SVG overlay for the complete architecture:
  // - Top fascia extending full width with warm spotlights
  // - Perfectly centered, complete 3D glowing "HOW ABOUT COFFEE" sign
  // - Architectural pillars, wood borders, warm cafe glow, and glass reflections
  const svgOverlay = `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Glow filters -->
      <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="8" result="blur1" />
        <feGaussianBlur stdDeviation="18" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="spotlightGlow" x="-50%" y="-20%" width="200%" height="160%">
        <feGaussianBlur stdDeviation="25" />
      </filter>

      <linearGradient id="fasciaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#151b26" />
        <stop offset="35%" stop-color="#1e2634" />
        <stop offset="70%" stop-color="#18202c" />
        <stop offset="100%" stop-color="#0f141c" />
      </linearGradient>

      <linearGradient id="overhangGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2a3342" />
        <stop offset="60%" stop-color="#1c232f" />
        <stop offset="100%" stop-color="#121720" />
      </linearGradient>

      <radialGradient id="spotCone" cx="50%" cy="0%" r="90%">
        <stop offset="0%" stop-color="#fff8e7" stop-opacity="0.95" />
        <stop offset="30%" stop-color="#fed7aa" stop-opacity="0.45" />
        <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
      </radialGradient>

      <linearGradient id="woodTrim" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#3d2112" />
        <stop offset="50%" stop-color="#59311b" />
        <stop offset="100%" stop-color="#3d2112" />
      </linearGradient>
    </defs>

    <!-- Top Overhang Ceiling -->
    <rect x="0" y="0" width="${W}" height="140" fill="url(#overhangGrad)" />

    <!-- Recessed Spotlights along the top ceiling (7 spots) -->
    <g>
      <!-- Spot 1 -->
      <ellipse cx="140" cy="55" rx="36" ry="14" fill="#fff" opacity="0.95" />
      <polygon points="104,55 176,55 240,240 40,240" fill="url(#spotCone)" filter="url(#spotlightGlow)" opacity="0.6" />

      <!-- Spot 2 -->
      <ellipse cx="320" cy="55" rx="36" ry="14" fill="#fff" opacity="0.95" />
      <polygon points="284,55 356,55 420,240 220,240" fill="url(#spotCone)" filter="url(#spotlightGlow)" opacity="0.6" />

      <!-- Spot 3 -->
      <ellipse cx="540" cy="55" rx="42" ry="16" fill="#fff" opacity="0.98" />
      <polygon points="498,55 582,55 660,260 420,260" fill="url(#spotCone)" filter="url(#spotlightGlow)" opacity="0.75" />

      <!-- Spot 4 -->
      <ellipse cx="760" cy="55" rx="36" ry="14" fill="#fff" opacity="0.95" />
      <polygon points="724,55 796,55 860,240 660,240" fill="url(#spotCone)" filter="url(#spotlightGlow)" opacity="0.6" />

      <!-- Spot 5 -->
      <ellipse cx="940" cy="55" rx="36" ry="14" fill="#fff" opacity="0.95" />
      <polygon points="904,55 976,55 1040,240 840,240" fill="url(#spotCone)" filter="url(#spotlightGlow)" opacity="0.6" />
    </g>

    <!-- Main Signboard Fascia Banner (Height ~170px, from y:100 to y:270) -->
    <rect x="0" y="100" width="${W}" height="175" fill="url(#fasciaGrad)" />
    <!-- Subtle wood texture lines across fascia -->
    <line x1="0" y1="102" x2="${W}" y2="102" stroke="#374151" stroke-width="2" />
    <line x1="0" y1="273" x2="${W}" y2="273" stroke="#2a180e" stroke-width="4" />

    <!-- ══ THE GLOWING 3D SIGN: "HOW ABOUT COFFEE" ══ -->
    <!-- Ambient Cyan / Ice-Blue Halo behind letters -->
    <text
      x="${W / 2}"
      y="225"
      text-anchor="middle"
      fill="#38bdf8"
      font-size="88"
      font-weight="900"
      letter-spacing="10"
      font-family="'Montserrat', 'Arial Black', system-ui, sans-serif"
      filter="url(#neonGlow)"
      opacity="0.9"
    >HOW ABOUT COFFEE</text>

    <!-- Warm backlight halo -->
    <text
      x="${W / 2}"
      y="225"
      text-anchor="middle"
      fill="#bae6fd"
      font-size="88"
      font-weight="900"
      letter-spacing="10"
      font-family="'Montserrat', 'Arial Black', system-ui, sans-serif"
      filter="url(#neonGlow)"
      opacity="0.95"
    >HOW ABOUT COFFEE</text>

    <!-- 3D Letter Extrusion Drop Shadows -->
    <text
      x="${W / 2 + 3}"
      y="228"
      text-anchor="middle"
      fill="#0c4a6e"
      font-size="88"
      font-weight="900"
      letter-spacing="10"
      font-family="'Montserrat', 'Arial Black', system-ui, sans-serif"
      opacity="0.85"
    >HOW ABOUT COFFEE</text>

    <!-- Primary Crisp Pure-White Illuminated Face -->
    <text
      x="${W / 2}"
      y="225"
      text-anchor="middle"
      fill="#FFFFFF"
      font-size="88"
      font-weight="900"
      letter-spacing="10"
      font-family="'Montserrat', 'Arial Black', system-ui, sans-serif"
    >HOW ABOUT COFFEE</text>

    <!-- Top Wood Beam below the fascia -->
    <rect x="0" y="275" width="${W}" height="22" fill="url(#woodTrim)" />

    <!-- Left & Right Architectural Framing Columns (adds Zoomed Out feeling!) -->
    <!-- Left Column -->
    <rect x="0" y="275" width="120" height="${H - 275}" fill="#111822" />
    <rect x="110" y="275" width="16" height="${H - 275}" fill="url(#woodTrim)" />
    <!-- Left column warm glow from street light -->
    <rect x="0" y="275" width="110" height="${H - 275}" fill="#f59e0b" opacity="0.04" />

    <!-- Right Column -->
    <rect x="${W - 120}" y="275" width="120" height="${H - 275}" fill="#111822" />
    <rect x="${W - 126}" y="275" width="16" height="${H - 275}" fill="url(#woodTrim)" />
    <rect x="${W - 120}" y="275" width="120" height="${H - 275}" fill="#f59e0b" opacity="0.04" />

    <!-- Bottom Pavement & Dark Ambient Floor Fade -->
    <rect x="0" y="${H - 180}" width="${W}" height="180" fill="#0f131a" opacity="0.65" />
  </svg>
  `;

  // Base background for full canvas (dark evening architecture)
  const baseBackground = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 15, g: 19, b: 26, alpha: 1 },
    },
  }).png().toBuffer();

  // Composite: Base + Real Resized Photo + SVG Architectural Overlay
  // Position real photo starting at y: 280, x: 120 (centered horizontally between the two 120px columns: 120 + 840 = 960, leaving 120 on right!)
  const finalImage = await sharp(baseBackground)
    .composite([
      {
        input: resizedShopBuf,
        left: 120,
        top: 280,
      },
      {
        input: Buffer.from(svgOverlay),
        left: 0,
        top: 0,
      },
    ])
    .webp({ quality: 94 })
    .toFile(outWebp);

  console.log('Successfully created wide-angle zoomed-out storefront WebP:', outWebp, fs.statSync(outWebp).size, 'bytes');

  // Also write JPG
  await sharp(outWebp).jpeg({ quality: 94, mozjpeg: true }).toFile(outJpg);
  console.log('Successfully created wide-angle zoomed-out storefront JPG:', outJpg, fs.statSync(outJpg).size, 'bytes');

  // Also update cafe-interior.webp so all references stay updated
  fs.copyFileSync(outWebp, path.resolve(__dirname, '../public/images/photos/cafe-interior.webp'));
  console.log('Updated cafe-interior.webp with zoomed-out version');
}

buildZoomedOutStorefront().catch(console.error);
