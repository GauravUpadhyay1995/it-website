const fs = require('fs');
const html = fs.readFileSync('sincweb_live.html', 'utf8');

const regex = /<h2[\s\S]*?<\/h2>/g;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null) {
  count++;
  const h2 = m[0];
  const parentStart = html.lastIndexOf('<div', m.index);
  const parentSnippet = html.substring(parentStart, m.index);
  console.log(`\n================= H2 #${count} =================`);
  console.log('PARENT:', parentSnippet);
  console.log('H2:', h2);
}
