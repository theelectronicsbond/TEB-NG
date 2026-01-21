const fs = require('fs');
const path = require('path');

const domain = 'https://theelectronicsbond.com';

const routes = [
    '',
    'about',
    'solutions',
    'products',
    'brands',
    'clients',
    'contact'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
    <url>
        <loc>${domain}/${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}
</urlset>`;

const distFolder = path.join(__dirname, '../dist/the-electronics-bond/browser');

// Ensure dist folder exists (it might not if we run this before build, but usually run after)
// If we want to run it independent of build, we might output to src/assets? 
// Standard practice: generate to dist after build, or to src/assets before build.
// Let's output to src first so it can be copied by build process, OR output to dist as a post-build step.
// The plan said "Script to generate sitemap.xml during the build process".
// If I put it in `dist` it needs `dist` to exist.

// Let's try to write to src/public/sitemap.xml so it gets copied automatically by Angular build?
// Or just write to a file and have a command to move it.

// Let's stick to writing to 'public' folder which is the proper place for static assets in newer Angular.
const publicFolder = path.join(__dirname, '../public');

if (!fs.existsSync(publicFolder)) {
    fs.mkdirSync(publicFolder, { recursive: true });
}

fs.writeFileSync(path.join(publicFolder, 'sitemap.xml'), sitemap);
console.log('Sitemap generated in public/sitemap.xml');
