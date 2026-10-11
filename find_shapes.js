const fs = require('fs');
const css = fs.readFileSync('assets/main.css', 'utf8');

['ns-shape-1', 'ns-shape-2', 'ns-shape-3', 'ns-shape-4'].forEach(s => {
  let idx = 0;
  while ((idx = css.indexOf(s, idx)) !== -1) {
    console.log(`Found ${s}:\n`, css.substring(Math.max(0, idx - 50), idx + 150));
    idx += s.length + 20;
  }
});
