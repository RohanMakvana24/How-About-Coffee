const fs = require('fs');

let c = fs.readFileSync('src/components/contact/ContactSection.tsx', 'utf8');
c = c.replaceAll('FOOGLE_BUSINESS_INFO', 'BUSINESS_INFO');
fs.writeFileSync('src/components/contact/ContactSection.tsx', c);
console.log('ContactSection updated');

let h = fs.readFileSync('index.html', 'utf8');
h = h.replace('<link rel="preload" as="image" href="/images/foogle-entrance-hero-400.webp" fetchpriority="high" />\n', '');
fs.writeFileSync('index.html', h);
console.log('index.html updated');
