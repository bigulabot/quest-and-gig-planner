const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const root = __dirname;
const port = 3000;
const clients = new Set();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
};

const reloadSnippet = `
<script>
  (() => {
    const source = new EventSource('/__live-reload');
    source.addEventListener('reload', () => window.location.reload());
  })();
</script>
`;

function sendReload() {
  for (const client of clients) {
    client.write('event: reload\\n');
    client.write('data: now\\n\\n');
  }
}

function safePathname(requestUrl) {
  const parsed = url.parse(requestUrl);
  const pathname = decodeURIComponent(parsed.pathname === '/' ? '/index.html' : parsed.pathname);
  const fullPath = path.normalize(path.join(root, pathname));
  return fullPath.startsWith(root) ? fullPath : null;
}

function serveFile(filePath, response) {
  fs.readFile(filePath, (error, buffer) => {
    if (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mimeTypes[ext] || 'application/octet-stream';

    if (ext === '.html') {
      const html = buffer.toString('utf8').replace('</body>', `${reloadSnippet}</body>`);
      response.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
      response.end(html);
      return;
    }

    response.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
    response.end(buffer);
  });
}

const server = http.createServer((request, response) => {
  if (request.url === '/__live-reload') {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Connection: 'keep-alive',
    });
    response.write('\n');
    clients.add(response);
    request.on('close', () => clients.delete(response));
    return;
  }

  const filePath = safePathname(request.url);
  if (!filePath) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  serveFile(filePath, response);
});

['index.html', 'styles.css', 'app.js'].forEach(file => {
  fs.watch(path.join(root, file), { persistent: true }, () => sendReload());
});

server.listen(port, () => {
  console.log(`Live preview running at http://localhost:${port}`);
});
