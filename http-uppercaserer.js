const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Only POST requests are supported\n');
  }

  let body = '';

  req.setEncoding('utf8');
  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    res.end(body.toUpperCase());
  });
});

server.listen(port);