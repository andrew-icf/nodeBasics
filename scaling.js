// One common criticism of Node.js is that they do not handle CPU intensive tasks well, this will block the event Loop
// and prevent other work from being done. One strategy for dealing with this issue is the use of CHILD PROCESSES.
// A CPU intensive task like resizing an image can be deferred to a child process while the main Node application continues
// 4 ways to launch Child Processes
//  - spawn(command, [args], [options])
    // => Launches a new process with command and args
    // => Returns a ChildProcess object that is an EventEmitter and has streams for stdin/stdout/stderr/ and can be piped
    // => gives you more control of your std calls of your process while it's running

// - exec(command, [options], callback)
//     => Runs 'command' string in a shell
//     => Callback is invoked on process completion with error, stdout, stderr

// - execFile(file, [args], [options], callback)
//     => Similar to exec except 'file'is executed directly, rather than in a subshell

// - fork(modulePath, [args], [options])
//     => A special version of 'spawn' especially for creating Node processes
//     => adds a 'send' function and 'message' event to ChildProcess

// EXAMPLE
// ---- inside of parent.js ----
// var cp = require('child_process');
//
// var n = cp.fork(__dirname + '/child.js');
//
// n.on('message', function(m){
//   console.log('Parent got a message: ', m);
// });
//
// n.send({hello: 'world'});

// ---- inside of child.js ----
// process.on('message', function(m){
//   console.log('Child received message: ', m);
// });
//
// process.send({ foo: 'bar'});

// NODE's CLUSTER module ----------
// - builds off of .fork()
// - introduces a worker class as well as master functions and Events
// - the cluster module provides a variable .isMaster to tell you if you are in the master process
// - a common cluster scenario is spawning multiple worker Nodes to create a scalable web server
var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;

if (cluster.master) {
  for (var i = 0; i < numWorkers.length; i++) {
    console.log('master: about to fork a worker...');
    cluster.fork();
  }

  cluster.on('fork', function(worker) {
    console.log('master: fork event (worker ' + worker.id + ')');
  });

  cluster.on('online', function(worker) {
    console.log('master: online event (worker ' + worker.id + ')');
  });

  cluster.on('listening', function(worker) {
    console.log('master: listening event (worker ' + worker.id + ', pid ' + worker.process.pid')');
  });

  cluster.on('exit', function(worker) {
    console.log('master: exit event (worker ' + worker.id + ')');
  });
} else {
  console.log('worker: worker #' + cluster.worker.id + ' ready!');
  var count = 0;

  http.createServer(function (req, res) {
    res.writeHead(200);
    count++;
    console.log('Worker is incrementing count to ', count);
    res.end('Hello world from worker #' + cluster.worker.id);
    if (count === 3) {
      cluster.worker.destroy();
    }
  }).listen(process.env.PORT, process.env.IP);
}
