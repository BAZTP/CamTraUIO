import http from 'node:http';
import { readFile } from 'node:fs/promises';
const files = {'/':'index.html','/app.js':'app.js','/style.css':'style.css'};
http.createServer(async (req,res) => {
  const file = files[new URL(req.url,'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end('No encontrado'); return; }
  try {
    const data = await readFile(new URL(`./public/${file}`,import.meta.url));
    res.writeHead(200,{'Content-Type':file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.js')?'text/javascript; charset=utf-8':'text/css; charset=utf-8'});
    res.end(data);
  } catch { res.writeHead(500); res.end('Error del servidor'); }
}).listen(Number(process.env.PORT || 3000),'0.0.0.0',()=>console.log('CamTraUIO iniciado en puerto '+(process.env.PORT || 3000)));
