const sharp = require('sharp');
const fs = require('fs');

async function inspect() {
  const p = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\2c81db34-9cfe-431c-bbb6-c446523750d7\\.user_uploaded\\media_1792851074038.png';
  const img = sharp(p);
  const meta = await img.metadata();
  console.log('Original image info:', meta);
}

inspect();
