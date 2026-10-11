const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

const idx = data.indexOf('Real results. real');
console.log('Real results idx:', idx);

if (idx !== -1) {
  const start = Math.max(0, idx - 500);
  const end = Math.min(data.length, idx + 4500);
  fs.writeFileSync('portfolio_section.html', data.substring(start, end));
  console.log('Saved portfolio_section.html');
}
