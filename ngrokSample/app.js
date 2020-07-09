
var http = require('http');
var PORT = process.env.port || process.env.PORT || 8080;

http.createServer(function(request, response) { 
	var payload = '';
	// Process the request
	request.on('data', function (data) {
		payload += data;
	});
	
	// Respond to the request
	request.on('end', function() {
		try {
			response.writeHead(200);
			response.write('Demo for ngrok');
			response.end();
		}
		catch (err) {
			response.writeHead(400);
			return response.end("Error: " + err + "\n" + err.stack);
		}
	});
		
}).listen(PORT);

console.log('Listening on port %s', PORT);
