const fs = require('fs');
const code = fs.readFileSync('laser_code.js', 'utf8');

const laserInitIdx = code.indexOf('function initLaserFlow');
console.log('initLaserFlow idx:', laserInitIdx);

if (laserInitIdx !== -1) {
  const start = Math.max(0, laserInitIdx - 4000);
  const end = laserInitIdx + 6000;
  fs.writeFileSync('full_laser_flow.js', code.substring(start, end));
  console.log('Wrote full_laser_flow.js');
}
