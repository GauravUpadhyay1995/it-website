const fs = require('fs');
const html = fs.readFileSync('sincweb_dump.html', 'utf8');

const cssMatches = html.match(/href="([^"]+\.css)"/g) || [];
console.log('CSS files:', cssMatches);

const https = require('https');

async function getCss() {
  for (const m of cssMatches) {
    const url = 'https://www.sincwebinfotech.com/' + m.replace(/href="|"/g, '').replace(/^\//, '');
    console.log('Fetching CSS:', url);
    const css = await new Promise(res => {
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
        let d = '';
        r.on('data', c => d += c);
        r.on('end', () => res(d));
      });
    });
    
    // search for shadow-2, laser-flow, main-container, effect
    const searchTerms = ['.shadow-2', '.laser-flow', '.main-container', 'effect', 'bg-linear'];
    searchTerms.forEach(term => {
      let idx = 0;
      while ((idx = css.indexOf(term, idx)) !== -1) {
        console.log(`Found ${term} in ${url}:\n`, css.substring(Math.max(0, idx - 100), idx + 200));
        idx += term.length + 50;
      }
    });
  }
}

getCss();
