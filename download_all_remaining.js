const https = require('https');
const fs = require('fs');
const path = require('path');

const uniqueSrcs = [
  "images/logo/new.svg",
  "images/opai-img-59.jpg",
  "images/opai-img-60.png",
  "images/opai-img-61.png",
  "images/logo/logo-small.svg",
  "images/sincweb.webp",
  "images/effect.png",
  "images/gradient/opai-11.png",
  "images/icons/astro.svg",
  "images/icons/slack.svg",
  "images/icons/netflix.svg",
  "images/icons/opera.svg",
  "images/icons/github.svg",
  "images/icons/spotify.svg",
  "images/icons/youtube.svg",
  "images/icons/whatsapp.svg",
  "images/icons/telegram.svg",
  "images/icons/tiktok.svg",
  "images/icons/x.svg",
  "images/icons/pinterest.svg",
  "images/icons/reddit.svg",
  "images/icons/snapchat.svg",
  "images/icons/vimeo.svg",
  "images/icons/zoom.svg",
  "images/icons/mistral-ai.svg",
  "images/icons/music.svg",
  "images/icons/notion.svg",
  "images/icons/open-ai.svg",
  "images/icons/stripe.svg",
  "images/icons/suno.svg",
  "images/icons/perplexity-ai.svg",
  "images/icons/jira-status-page.svg",
  "images/icons/shopify.svg",
  "images/icons/google-meet.svg",
  "images/icons/master-card.svg",
  "images/icons/grok-ai.svg",
  "images/opai-avatar-img-61.png",
  "images/gradient/opai-10.png",
  "images/opai-img-62.png",
  "images/vactor-shape/vertical-pattern.svg",
  "images/vactor-shape/lock.svg",
  "images/icons/king-master.svg",
  "images/opai-img-100.jpg",
  "images/opai-img-101.jpg",
  "images/opai-img-102.jpg",
  "images/opai-img-103.jpg",
  "images/icons/yellow-star.svg",
  "images/opai-avatar-img-01.png",
  "images/opai-avatar-img-02.png",
  "images/opai-avatar-img-03.png",
  "images/opai-avatar-img-04.png",
  "images/opai-avatar-img-05.png",
  "images/opai-avatar-img-06.png",
  "images/opai-avatar-img-07.png",
  "images/opai-avatar-img-29.png",
  "images/opai-img-104.svg",
  "images/opai-img-14.jpg",
  "images/opai-img-15.jpg",
  "images/opai-img-16.jpg",
  "images/opai-img-17.jpg",
  "images/opai-img-18.jpg",
  "images/opai-img-19.jpg",
  "images/gradient/opai-7.svg",
  "images/opai-img-43.png",
  "images/gradient/opai-14.png"
];

async function downloadAll() {
  for (const rel of uniqueSrcs) {
    const dest = path.join(__dirname, 'public', rel);
    if (!fs.existsSync(dest)) {
      const dir = path.dirname(dest);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const url = 'https://www.sincwebinfotech.com/' + rel;
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
      console.log('Exists:', rel);
    }
  }
}

downloadAll();
