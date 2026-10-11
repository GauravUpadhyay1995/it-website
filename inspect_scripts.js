const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('sincweb_live.html', 'utf8');

// Find all script and link tags
const scriptMatches = [...html.matchAll(/<script[^>]*src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Script sources:', scriptMatches);

const styleMatches = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Style sources:', styleMatches);
