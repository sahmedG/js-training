// friend-support.mjs

import http from 'http';

const port = 5000;

const server = http.createServer((req, res) => {
  // Extract the last name from the request URL
  const match = req.url.match(/^\/mario_(\w+)$/);
  
  if (match) {
    const lastName = match[1];
    
    // Send a response with the specified message and status code 200
    const responseMessage = `value of ${lastName}`;
    const responseData = { message: responseMessage, status: 200 };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  } else {
    // Handle other URLs (e.g., 404)
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

// Print the "Server listening on port" message once when the server starts
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
