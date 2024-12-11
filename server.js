const http = require('http');

// Create a server using the http module
const server = http.createServer((req, res) => {
    // Check if the request method is GET and the URL is '/'
    if (req.method === 'GET' && req.url === '/') {
        // If the conditions are met, set the response header and send 'Hello, World!'
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    } else {
        // If the conditions are not met, set the response header and send 'Not Found'
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});