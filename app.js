const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.end("Hello from CI/CD Pipeline!");
}).listen(port);
