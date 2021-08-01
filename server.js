const app = require('./app.js');
const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT)
server.on('listening', () => {
      console.info(`server running on port ${PORT}`);
})