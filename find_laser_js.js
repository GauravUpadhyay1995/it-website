const https = require('https');
const fs = require('fs');

const html = fs.readFileSync('sincweb_dump.html', 'utf8');
const scriptMatches = html.match(/src="([^"]+\.js)"/g) || [];
console.log('Scripts:', scriptMatches);

// Extract script URLs
const scriptUrls = scriptMatches.map(s => s.replace(/src="|"/g, '')).map(s => {
  if (s.startsWith('http')) return s;
  return 'https://www.sincwebinfotech.com/' + s.replace(/^\//, '');
});

console.log('Script URLs to fetch:', scriptUrls);

async function checkScripts() {
  for (const url of scriptUrls) {
    try {
      const data = await new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
          let str = '';
          res.on('data', c => str += c);
          res.on('end', () => resolve(str));
        }).on('error', reject);
      });

      console.log(`Fetched ${url} (${data.length} bytes)`);
      if (data.includes('laser-flow') || data.includes('laserFlow') || data.includes('wisp-speed') || data.includes('data-color') || data.includes('createShader')) {
        console.log(`FOUND LASER IN: ${url}`);
        fs.writeFileSync('laser_code.js', data);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

checkScripts();
