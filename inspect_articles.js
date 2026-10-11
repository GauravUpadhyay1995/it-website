const fs = require('fs');
const content = fs.readFileSync('features_section_live.html', 'utf8');

// Find all articles
const articles = content.match(/<article[\s\S]*?<\/article>/g);
console.log('Total articles found:', articles ? articles.length : 0);

if (articles) {
  articles.forEach((art, i) => {
    console.log(`\n=================== ARTICLE ${i+1} ===================`);
    console.log(art.substring(0, 500) + '...\n' + art.substring(art.length - 300));
  });
}
