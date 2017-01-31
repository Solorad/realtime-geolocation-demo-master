var http = require('http');
var Static = require('node-static');
var app = http.createServer(handler);
var io = require('socket.io').listen(app);
var port = 8080;

var files = new Static.Server('./dist');

function handler (request, response) {
  request.on('end', function() {
    files.serve(request, response);
  }).resume();
}

// start app on specified port
app.listen(port);
console.log('Your server goes on localhost:' + port);