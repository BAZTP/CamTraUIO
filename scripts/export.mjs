import { readFile, mkdir, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const [html, css, js] = await Promise.all(['index.html', 'style.css', 'app.js'].map(file => readFile(new URL(`public/${file}`, root), 'utf8')));
const standalone = html
  .replace('<link rel="stylesheet" href="/style.css">', `<style>${css}</style>`)
  .replace('<script src="/app.js"></script>', `<script>${js}</script>`)
  .replace('href="/" class="brand"', 'href="#" class="brand"');
await mkdir(new URL('dist/', root), { recursive: true });
await writeFile(new URL('dist/index.html', root), standalone);
console.log('Versión autónoma generada en dist/index.html');
