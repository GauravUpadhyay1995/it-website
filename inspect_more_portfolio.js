const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

const idx = data.indexOf('<!-- portfolio -->');
if (idx !== -1) {
  const snippet = data.substring(idx, idx + 8000);
  fs.writeFileSync('all_portfolio.html', snippet);
  console.log('Saved all_portfolio.html');
}
