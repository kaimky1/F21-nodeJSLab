//require module
const http = require('http');

// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
    res.end("Hello")
})
// Call the server's listen() method with the port number 3001
server.listen(3001, '127.0.0.1', () => {
    console.log('Listening to request on port 3001')
})

// NODE_DEBUG=http node practice.js

