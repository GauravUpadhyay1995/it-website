const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

const idx = data.indexOf('opai-img-43.png');
console.log('opai-img-43 idx:', idx);

if (idx !== -1) {
  const snippet = data.substring(idx - 600, idx + 1800);
  fs.writeFileSync('cta_section.html', snippet);
  console.log('Saved cta_section.html');
}
