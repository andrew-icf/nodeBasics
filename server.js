// 3 Building blocks in Node
// libuv - high performance, cross-platform evented I/O library was built to port Node to the windows env
// V8 - Google's JavaScript Engine(also used in Chrome)
// Custom C++ and JS code developed specifically for the Node platform
// typing in 'node' will dump you into a "Read Eval Print Loop" or REPL where you can interact with node from terminal

// Getting a basic server running
// var http = require('http');
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337);
// console.log('Server running...');

// One of the Key concepts node brings from the browser to JS on the server is the Event Loop
// In the browser the Event Loop is constantly listening for DOM events,
// similarly Node's Event Loop is listening for events on the server side like incoming HTTP req or TCP connections or timers
// Node itself DOES NOT pause and wait for any of these requests to complete, it simply continues to react to events as they arrive
// Non - blocking event driven approach "async"
// A node convention is that the call back param is always the last param used i.e: getStuff(inputParam, handleResults);
// The first param passed into the callback should always be an error param handleResults(err, result);
// A shortcoming of Node's programming model is the Christmas Tree or callback hell, be sure to use named functions, modules,
// event emitters and streams will give you the tools you need

// var os = require('os');
// console.log(os.freemem());
// console.log(os.totalmem());
// You can require just one variable from another JS file
// =>       var oneMethod = require('./file/subfile').methodName;
// Making variables available is by assigning them to the modules.export object
// =>       module.exports.doTheThing = theThing; <= method
// =>       module.exports.foo = 'bar';

// Callbacks VS Events
// Non-blocking doesn't always mean callbacks

// Callback    You make a request you get a response/ no results until all results/ the function is accumulating memory for every item
// getThem(param, function(err, items) {
  // check for error
  // operate on array of items
// });

// Event      is more of a publish/subscribe approach/ act on results as they arrive/ not accumulating memory
// var results = getThem(param);

// results.on('item', function(i){
  // do something with this item
// });
// results.on('done', function(i){
  // no more items
// });
// results.on('error', function(i){
  // respond to error
// });

// EventEmitter Class
// emitter.on(event, listener);
