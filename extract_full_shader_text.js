const fs = require('fs');
const code = fs.readFileSync('laser_code.js', 'utf8');

const vertIdx = code.indexOf('const VERT =');
const fragIdx = code.indexOf('const FRAG =');
const funcIdx = code.indexOf('function initLaserFlow');

console.log('vertIdx:', vertIdx, 'fragIdx:', fragIdx, 'funcIdx:', funcIdx);

if (vertIdx !== -1 && fragIdx !== -1) {
  const vertCode = code.substring(vertIdx, fragIdx);
  const fragCode = code.substring(fragIdx, funcIdx);
  fs.writeFileSync('vert_shader.txt', vertCode);
  fs.writeFileSync('frag_shader.txt', fragCode);
  console.log('Saved vert and frag shaders.');
}
