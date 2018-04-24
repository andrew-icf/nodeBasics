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
// emitter.on(event, listener); => The Subscriber
// emmiter.emit(event, [args]); => The Publisher
// the event can be any string i.e: 'item', 'error', 'done', 'start'
// the event can be emitted with 0 or more args
// the set of events and their args constitute a 'interface' exposed to the subscriber by the publisher(emitter)

// Two Common Patterns for EventEmitter's
// 1. As a return value from a function call
// EXAMPLE:
// var EventEmitter = require('events').EventEmitter;
// var getResource = function(number) {
  // var e = new EventEmitter();
  // process.nextTick(function(){
  //   var count = 0;
  //   e.emit('start');
  //   var t = setInterval(function() {
  //     e.emit('data', ++count);
  //     if (count === number) {
  //       e.emit('end', count);
  //       clearInterval(t);
  //     }
  //   }, 10);
  // });
  // return(e);
// }
// var r = getResource(5);
// r.on('start', function() {
//   console.log("I've started");
// });
// r.on('data', function(D) {               This will be what's ran 5 times
//   console.log("Recieving Data" + D);
// });
// r.on('end', function() {
//   console.log("I'm done");
// });

// 2. Objects that extend EventEmitter to emit events themselves
// Split the above example into two files and then use module.exports = (whatever function)
// use nodes built in util module for the inherits method
// util.inherits(Resource, EventEmitter); we want our Resource obj to inherit from EventEmitter i.e: 'on', 'emit'

//        STREAMS
// Streams are instances of (and extensions to) EventEmitter with an agreed upon 'interface' (set of events and functions)
// A unified abstraction for managing data flow, including:
// Network traffic (http, tcp sockets)
// File I/O
// stdin/stdout/stderr - standard-In standard-Out standard-Error
// and much more
// A stream is an instance of a ReadableStream or a WritableStream or both
// A ReadableStream can be pipe()'d to a WritableStream(like commands in Unix) - Node applies backpressure (ReadableStream provides data faster than a WritableStream)
// ReadableStream => boolean, events: 'data', end, error, close - methods: pause(), resume, destroy, pipe
// WritableStream => boolean, events: 'drain', error, close, pipe - methods write(), end, destroy, destroySoon
// The real power of Steams comes from the pipe() function
// Use request var request = require('request'); => it understands and makes very good use of streams
// var s = request('http://www.pluralsight.com/');  remember that streams inherit from EventEmitter's so now we can use s.on()
// s.pipe(process.stdout);
