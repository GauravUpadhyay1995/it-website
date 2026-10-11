const fs = require('fs');
const items = JSON.parse(fs.readFileSync('extracted_animations.json', 'utf8'));

for (let i = 0; i < Math.min(10, items.length); i++) {
  console.log(`\n================== MATCH ${i + 1}: ${items[i].term} ==================`);
  console.log(items[i].snippet);
}
