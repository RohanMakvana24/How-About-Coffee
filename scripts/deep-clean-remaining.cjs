const fs = require('fs');

const filesToClean = [
  'src/components/common/FoogleLoader.tsx',
  'src/components/hero/HeroCulinaryShowcase.tsx',
  'src/components/preview/DesignSystemPreview.tsx',
  'src/components/social/HangingBadges3D.tsx',
  'src/components/social/SocialProofSection.tsx'
];

filesToClean.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content
      .replaceAll('Panchwati, Udaipur', 'Jagatpura, Jaipur')
      .replaceAll('Panchwati', 'Jagatpura')
      .replaceAll('Udaipur, Rajasthan', 'Jaipur, Rajasthan')
      .replaceAll('UDAIPUR, RAJASTHAN', 'JAIPUR, RAJASTHAN')
      .replaceAll('Udaipur', 'Jaipur')
      .replaceAll('UDAIPUR', 'JAIPUR')
      .replaceAll('@foogle_udaipur', '@howaboutcoffee')
      .replaceAll('@fooglecafe', '@howaboutcoffee')
      .replaceAll('fooglecafe', 'howaboutcoffee')
      .replaceAll('Foogle Cafe', 'How About Coffee')
      .replaceAll('Foogle Kitchen', 'How About Coffee Kitchen')
      .replaceAll('Foogle', 'How About Coffee')
      .replaceAll('FOOGLE', 'HOW ABOUT COFFEE');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Cleaned:', f);
  }
});
