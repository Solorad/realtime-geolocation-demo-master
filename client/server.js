var http = require('http');
var Static = require('node-static');
var app = http.createServer(handler);
var io = require('socket.io').listen(app);
var port = 3000;

var files = new Static.Server('./public');

function handler (request, response) {
	request.on('end', function() {
		files.serve(request, response);
	}).resume();
}

// start app on specified port
app.listen(port);
console.log('Your server goes on localhost:' + port);