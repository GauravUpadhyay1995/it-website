const fs = require('fs');

const mainJs = fs.readFileSync('sincweb_main.js', 'utf8');
const featuresHtml = fs.readFileSync('features_section_live.html', 'utf8');

console.log('--- FEATURES SECTION HTML ---');
console.log(featuresHtml);

console.log('\n--- SEARCHING ANIMATIONS IN MAIN.JS ---');

// Search for keywords
const keywords = ['features-integration-pill', 'glowing-card', 'data-opai-animate', 'Real-time notifications', 'lock-ring', 'vertical-pattern', 'progress', 'pill', 'badge', 'slack', 'notification'];

keywords.forEach(kw => {
  let idx = 0;
  while ((idx = mainJs.indexOf(kw, idx)) !== -1) {
    console.log(`\n=== Keyword "${kw}" at index ${idx} ===`);
    console.log(mainJs.substring(Math.max(0, idx - 200), Math.min(mainJs.length, idx + 400)));
    idx += kw.length;
  }
});
