const fs = require('fs');
const mainJs = fs.readFileSync('laser_code.js', 'utf8');

// Search for opai-text-reveal, opai-animate, GSAP, SplitText, ScrollTrigger, Lenis, etc.
const matches = [];

const sections = [
  'data-opai-text-reveal',
  'data-opai-animate',
  'revealElement',
  'initTextReveal',
  'initAnimate',
  'ScrollTrigger',
  'SplitText',
  'Lenis',
  'marquee',
  'magnetic'
];

for (const sec of sections) {
  let pos = 0;
  while ((pos = mainJs.indexOf(sec, pos)) !== -1) {
    const start = Math.max(0, pos - 200);
    const end = Math.min(mainJs.length, pos + 800);
    matches.push({ term: sec, snippet: mainJs.substring(start, end) });
    pos += sec.length + 100;
  }
}

fs.writeFileSync('extracted_animations.json', JSON.stringify(matches, null, 2));
console.log(`Found ${matches.length} animation occurrences.`);
