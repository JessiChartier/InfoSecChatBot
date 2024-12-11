const http = require('http'); // Import the http module
const fs = require('fs'); // Import the fs module

const server = http.createServer((req, res) => {
    // Log the URL of the incoming request
    console.log('Client request URL: ', req.url);
    
    // Check if the request is a GET request for the root URL
    if (req.method === 'GET' && req.url === '/') {
        // Use the fs module to read the HTML file
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                // Handle error by sending a 500 status and error message
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: Unable to load the page');
            } else {
                // Send the HTML file with a 200 status and appropriate content-type
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data); // Serve the file content
            }
        });
    } else {
        // If the route is not found, send a 404 status
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});