const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'www.sincwebinfotech.com',
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('sincweb_dump.html', data);
    console.log('Saved sincweb_dump.html with length:', data.length);

    // Search for video tags, background images, webm, mp4, etc.
    const allMatches = [];
    const videoTags = data.match(/<video[\s\S]*?<\/video>/gi) || [];
    console.log('VIDEO TAGS COUNT:', videoTags.length);
    videoTags.forEach(v => console.log('VIDEO TAG:', v));

    const mediaRegex = /(?:src|href|url)\s*=\s*['"]([^'"]+\.(?:mp4|webm|gif|webp|mov|png|jpg|svg))['"]/gi;
    let m;
    while ((m = mediaRegex.exec(data)) !== null) {
      allMatches.push(m[1]);
    }
    console.log('ALL MEDIA MATCHES:', JSON.stringify([...new Set(allMatches)], null, 2));

    // Also look for canvas, shaders, threejs, lottie, spline, or laser/beam classes
    const laserMatches = data.match(/.{0,100}(?:laser|beam|light|ray|glow|hero|video|background|ambient).{0,100}/gi) || [];
    console.log('RELEVANT HERO SNIPPETS:', laserMatches.slice(0, 15));
  });
});

req.on('error', (e) => {
  console.error('Error:', e);
});

req.end();
