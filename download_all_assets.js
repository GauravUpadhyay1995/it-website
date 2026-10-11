const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  'images/effect.png',
  'images/gradient/opai-11.png',
  'images/gradient/opai-10.png',
  'images/gradient/opai-14.png',
  'images/gradient/opai-7.svg',
  'images/opai-img-59.jpg',
  'images/opai-img-60.png',
  'images/opai-img-61.png',
  'images/opai-img-62.png',
  'images/opai-img-100.jpg',
  'images/opai-img-101.jpg',
  'images/opai-img-102.jpg',
  'images/opai-img-103.jpg',
  'images/opai-img-104.svg',
  'images/opai-img-14.jpg',
  'images/opai-img-15.jpg',
  'images/opai-img-16.jpg',
  'images/opai-img-17.jpg',
  'images/opai-img-18.jpg',
  'images/opai-img-19.jpg',
  'images/opai-img-43.png'
];

async function downloadAsset(relPath) {
  const url = 'https://www.sincwebinfotech.com/' + relPath;
  const outPath = path.join(__dirname, 'public', relPath);
  const outDir = path.dirname(outPath);
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(outPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${relPath}`);
          resolve(true);
        });
      } else {
        console.log(`Failed ${relPath}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error(`Error ${relPath}:`, e.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const a of assets) {
    await downloadAsset(a);
  }
}

run();
