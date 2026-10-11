const fs = require('fs');
const html = fs.readFileSync('sincweb_live.html', 'utf8');

const intIdx = html.indexOf('Connected where it matters most');
console.log('intIdx:', intIdx);
const secStart = html.lastIndexOf('<section', intIdx);
const secEnd = html.indexOf('</section>', intIdx) + 10;
console.log('=== EXACT LIVE INTEGRATION SECTION ===');
console.log(html.substring(secStart, secEnd));
