// The Process Object
// provides a way for your Node app to both manage it's own process as well as other processes on the system
// available by default, does not need to be required
// A collection of Streams - process.stdin(r) - process.stdout(w) - process.stderr(w)
// Attributes of the current process:
// process.env,process.argv,process.pid,process.title,process.uptime(),process.memoryUsage(),process.cwd() (current working directory)and many more
// Process-related actions:
// process.abort(), process.chdir() process.kill() process.setgid() process.setuid()...
// An Instance of EventEmitter:
// event: 'exit', event: 'uncaughtException'(bubbling up), POSIX signal events ('SIGINT', etc)
process.stdin.resume(); // this stream starts paused, so you must resume for it to begin recieving info
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) { // data coming in
  process.stdout.write('Data! -> ' + chunk); // write it to stdout
});

process.stdin.on('end', function() { // ctrl D ends this not ctrl C
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function(){ // kill command from another term window $ kill -TERM (pid)
  process.stderr.write('Why are you terminating me?!?')
});

console.log('Node is running as process #', process.pid); // pid = process ID

// File System
// Wrappers around POSIX functions (both async and sync)
// rename, truncate, chown, fchown, chmod, fchmod, lchmod, stat, fstat, lstat, link, symlink, readlink, realpath, unlink, rmdir, mkdir
// readdir, close, open, utimes, futimes, fsync, write, read, readFile, writeFile, and appendFile
// ex: fs.readdir(path, callback) or fs.readdirSync(path) SYNC functions will have sync in the name

// Stream oriented functions
// - fs.createReadStream() => returns an fs.ReadStream (a ReadableStream)
// - fs.createWriteStream() => returns an fs.WriteStream (a WriteableStream)

// FS Module Watch Function
// fs.watch() => returns an fs.FSWatcher (an EventEmitter) 'change', 'error' etc

// Synchronous Call
// var fs = require('fs');
//
// if (fs.existsSync('temp')) {
//   console.log('Directory exists, Removing...');
//   if (fs.existsSync('temp/new.txt')) {
//     fs.unlinkSync('temp/new.txt');
//   }
// }
//
// fs.mkdirSync('temp');
// if (fs.existsSync('temp')) {
//   process.chdir('temp');
//   fs.writeFileSync('test.txt', 'This is some tests text');
//   fs.renameSync('test.txt', 'new.txt');
//   console.log('File has size: ', fs.statSync('new.txt').size + 'bytes');
//   console.log('File contents: ', fs.readFileSync('new.txt').toString()); THIS IS AN EXAMPLE OF GETTING A BUFFER OBJ AND YOU NEED TO STRING IT
// }

// Asynchronous Call
// var fs = require('fs');
//
// if (fs.existsSync('temp')) {
//   console.log('Directory exists, Removing...');
//   if (fs.existsSync('temp/new.txt')) {
//     fs.unlinkSync('temp/new.txt');
//   }
//   fs.rmdirSync('temp');
// }
//
// fs.mkdir('temp', function(err) {
//   fs.exists('temp', function(exists) {
//     if (exists) {
//       process.chdir('temp');
//       fs.writeFile('test.txt', 'This is text for the file', function(err) {
//         fs.rename('test.txt', 'new.txt', function(err) {
//           fs.stat('new.txt', function(err, stats) {
//             console.log('File has size: ', stats.size + 'bytes');
//             fs.readFile('new.txt', function(err, data) {
//               console.log('File contents: ', data.toString());  THIS IS AN EXAMPLE OF GETTING A BUFFER OBJ AND YOU NEED TO STRING IT
//             });
//           });
//         });
//       });
//     }
//   });
// });

// BUFFERS
// JS has difficulty dealing with binary data however, netowrking and fs require it
// The BUFFER class provides a raw memory allocation for dealing with binary data directly
// Buffers can be converted to/from strings by providing an encoding ascii, utf8(default), utf6le, ucs2, base64, binary, hex
// Provides a handy way to convert strings to/from base64

// var b = new Buffer('Hello');
// console.log(b.toString());
// console.log(b.toString('base64'));
// var y = new Buffer('World').toString('base64');
// console.log(b.toString('utf-8', 0, 2));

// THE OS MODULE
// Provides information about the currently running system
// os.tmpDir(), os.hostname(), os.type(), os.platform(), os.arch(), os.release(), os.uptime(), os.loadavg(), os.totalmem(), os.freemem(), os.cpus(), os.networkInterfaces(), os.EOL(),
