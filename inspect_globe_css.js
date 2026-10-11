const fs = require('fs');
const html = fs.readFileSync('sincweb_dump.html', 'utf8');
const css = fs.readFileSync('inspect_hero_css.js', 'utf8');

// Let's search for globe-image or opai-img-43 in sincweb_dump.html and main.css
const idx = html.indexOf('opai-img-43.png');
console.log('html snippet:', html.substring(idx - 300, idx + 400));
