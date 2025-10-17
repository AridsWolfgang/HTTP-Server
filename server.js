// A simple web server written in Javascript for my intro to Backend Development journey
// Javascript is also not that bad !!!!!1

const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
	// set the response header
	res.writeHead(200, { 'Content-Type': 'text/plain' });

	// Send a simple response
	res.end('Hello, Nerds! This is a simple HTTP Server running on Node.js\n');
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}/`);
})