const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

const idx = data.indexOf('Transform Your Digital');
console.log('CTA idx:', idx);

if (idx !== -1) {
  const snippet = data.substring(idx - 400, idx + 2500);
  fs.writeFileSync('cta_section.html', snippet);
  console.log('Saved cta_section.html');
}
