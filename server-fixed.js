const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
  //Ensure resources are closed properly.  This is crucial for preventing memory leaks.
  request.on('close', () => {
      //Clean up resources related to the request if needed
  });
  response.on('finish', () => {
      //Clean up resources related to the response if needed
  });
};

const server = http.createServer(requestListener);

//Use process.on('uncaughtException') and process.on('unhandledRejection') to gracefully handle unexpected errors
process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('An unhandled rejection occurred:', reason);
  process.exit(1);
});

server.listen(8080);