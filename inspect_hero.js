const fs = require('fs');
const data = fs.readFileSync('sincweb_dump.html', 'utf8');

// Find the section that contains "Best Digital Marketing"
const heroIndex = data.indexOf('Best Digital Marketing');
console.log('Hero index:', heroIndex);

if (heroIndex !== -1) {
  const start = Math.max(0, heroIndex - 2000);
  const end = Math.min(data.length, heroIndex + 4000);
  const heroHtml = data.substring(start, end);
  fs.writeFileSync('hero_section.html', heroHtml);
  console.log('Wrote hero_section.html');
}

// Let's also check all images in the hero section: effect.png, opai-11.png, opai-59.jpg, opai-60.png, opai-61.png, etc.
const images = data.match(/images\/[^"'\s>]+/g) || [];
console.log('ALL IMAGES FOUND:', [...new Set(images)]);
