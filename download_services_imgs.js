const https = require('https');
const fs = require('fs');
const path = require('path');

const imgs = [
  'images/opai-avatar-img-61.png',
  'images/opai-img-62.png',
  'images/gradient/opai-10.png',
  'images/vactor-shape/vertical-pattern.svg',
  'images/vactor-shape/lock.svg'
];

async function checkAndDownload() {
  for (const rel of imgs) {
    const dest = path.join(__dirname, 'public', rel);
    if (!fs.existsSync(dest)) {
      const dir = path.dirname(dest);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const url = 'https://www.sincwebinfotech.com/' + rel;
      console.log('Downloading missing asset:', url);
      await new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
          if (res.statusCode === 200) {
            const stream = fs.createWriteStream(dest);
            res.pipe(stream);
            stream.on('finish', () => {
              stream.close();
              console.log('Saved:', rel);
              resolve();
            });
          } else {
            console.log('Status not 200:', res.statusCode, rel);
            resolve();
          }
        }).on('error', (e) => {
          console.error(e);
          resolve();
        });
      });
    } else {
      console.log('Already exists:', rel);
    }
  }
}

checkAndDownload();
