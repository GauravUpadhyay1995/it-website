const fs = require('fs');
const code = fs.readFileSync('laser_code.js', 'utf8');

// Find occurrences of laser-flow or laserFlow or shader
const idx = code.indexOf('laser-flow');
console.log('laser-flow index:', idx);

if (idx !== -1) {
  const start = Math.max(0, idx - 1000);
  const end = Math.min(code.length, idx + 10000);
  console.log('LASER SNIPPET:\n', code.substring(start, end));
  fs.writeFileSync('laser_extracted.js', code.substring(start, end));
} else {
  // search for wisp
  const idx2 = code.indexOf('wisp');
  console.log('wisp index:', idx2);
  if (idx2 !== -1) {
    fs.writeFileSync('laser_extracted.js', code.substring(Math.max(0, idx2 - 500), idx2 + 10000));
  }
}
