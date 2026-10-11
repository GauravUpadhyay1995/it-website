const fs = require('fs');
const items = JSON.parse(fs.readFileSync('extracted_animations.json', 'utf8'));

items.forEach((item, idx) => {
  console.log(`\n================== MATCH ${idx + 1}: ${item.term} ==================`);
  console.log(item.snippet);
});
