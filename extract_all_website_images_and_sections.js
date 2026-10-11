const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

// Find all image tags and their parent sections
const imgMatches = [];
const regex = /<img[^>]+src="([^">]+)"[^>]*>/g;
let m;
while ((m = regex.exec(data)) !== null) {
  const src = m[1];
  const tag = m[0];
  const start = Math.max(0, m.index - 300);
  const end = Math.min(data.length, m.index + 300);
  const context = data.substring(start, end);
  imgMatches.push({ src, tag, context });
}

console.log(`Total images found on sincweb: ${imgMatches.length}`);

// Group by section
const uniqueSrcs = [...new Set(imgMatches.map(i => i.src))];
console.log('Unique image sources:', JSON.stringify(uniqueSrcs, null, 2));

fs.writeFileSync('all_img_contexts.json', JSON.stringify(imgMatches, null, 2));
