// friend-support.mjs

import http from 'http';

const port = 5000;

const server = http.createServer((req, res) => {
  // Extract the last name from the request URL
  const match = req.url.match(/^\/mario_(\w+)$/);
  
  if (match) {
    const lastName = match[1];
    
    // Construct the response body
    const expBody = { message: `value of ${lastName}` };
    
    // Send a response with status code 200, response body, and content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 200, body: expBody, contentType: 'application/json' }));
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
