const { version } = require('./package.json');
const http = require('http');

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(version);
});

server.listen(8080, 'localhost', () => {
  console.log('Server running');
});
