var http = require('http');

// 'req' function a writeable stream that can be piped to http
// var req = http.request(options, function(res){ // 'res' a readable stream
  //process callback
// });
// http.get(); -> simpler request
// Options can be a URL string or an object specifying values for host, port, method, path, headers, auth, etc

// These do not handle redirects and you may want to use a thrid party module or deal with them on your own
// var options = { // options can replace the url
//   host: 'www.google.com',
//   port: 80,
//   path: '/',
//   method: 'GET'
// };
//
// var req = http.request('http://www.google.com', function(res){
//   console.log(res.statusCode);
//   res.pipe(process.stdout);
// });

// Same thing using the GET req
// http.get('http://www.google.com', function(res){
//   console.log(res.statusCode);
//   res.pipe(process.stdout);
// });

// req.end(); // invoking req and closing the writeable stream
//
// // SERVER
//  var server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
// if (req.url ==='/file.txt') {
  // fs.createReadStream(__dirname + '/file.txt').pipe(res); -> two underscores
// } else {
  //   res.end('Hello World\n');
// }
// }).listen(process.env.PORT, process.env.IP);
// server.listen(port, [host]); you could also use this but I like the above better
// console.log('Server running...');
// SSL support is provided by a similar https.createServer();

// SOCKETS
// Socket.io provides an abstraction to maintain an active connection between a browser and a server
// In the case of Node.js, Socket.io also provides a consistent interface for performing these socket-based communications in
// both the browser and the server

// Server side
// var io = require('socket.io').listen(80);
//
// io.sockets.on('connection', function(socket) {
//   socket.emit('news', {hello: 'world'});
//   socket.on('my other event', function(data) {
//     console.log(data);
//   });
// )};

// Browser side
// <script src="/socket.io/socket.io.js"></script>
// <script>
//   var socket = io.connect('http://localhost');
//
//   socket.on('news', function(data) {
//     console.log(data);
//     socket.emit('my other event', {my: 'data'});
//   });
// </script>

// Express.js -> a web framework that runs on top of Node
