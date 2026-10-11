const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

const idx = data.indexOf('Stay Ahead with the');
console.log('Blog idx:', idx);

if (idx !== -1) {
  const snippet = data.substring(idx - 200, idx + 4500);
  fs.writeFileSync('blog_section.html', snippet);
  console.log('Saved blog_section.html');
}
