const net = require('net');

function zeroFill(n) {
  return n < 10 ? '0' + n : n;
}


const server = net.createServer(socket => {
  const date = new Date();

  const formatted =
    date.getFullYear() + '-' +
    zeroFill(date.getMonth() + 1) + '-' +
    zeroFill(date.getDate()) + ' ' +
    zeroFill(date.getHours()) + ':' +
    zeroFill(date.getMinutes());

  socket.end(formatted + '\n');
});

server.listen(process.argv[2]);
