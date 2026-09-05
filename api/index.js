import fs from 'node:fs/promises';
import path from 'node:path';
import worker from '../dist/server/index.js';

const clientRoot = path.resolve(process.cwd(), 'dist/client');
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const assets = {
  async fetch(input) {
    const request = input instanceof Request ? input : new Request(input);
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const relative = pathname.replace(/^\/+/, '');
    const filePath = path.resolve(clientRoot, relative);
    if (!filePath.startsWith(clientRoot + path.sep)) return new Response('Not found', { status: 404 });
    try {
      const data = await fs.readFile(filePath);
      const type = contentTypes[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream';
      return new Response(data, { headers: { 'content-type': type } });
    } catch {
      return new Response('Not found', { status: 404 });
    }
  },
};

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] ?? 'https';
  const host = req.headers.host ?? 'localhost';
  const request = new Request(`${protocol}://${host}${req.url}`, {
    method: req.method,
    headers: req.headers,
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    duplex: 'half',
  });
  const response = await worker.fetch(request, { ASSETS: assets });
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.end(Buffer.from(await response.arrayBuffer()));
}
