// friend-support.mjs

import http from 'http';

const port = 5000;

const server = http.createServer((req, res) => {
  // Extract the last name from the request URL
  const matchMario = req.url.match(/^\/mario_(\w+)$/);
  const matchAndrea = req.url === '/andrea_bianchi';
  
  if (matchMario) {
    const lastName = matchMario[1];
    
    // Construct the response body
    const expBody = { message: `value of ${lastName}` };
    
    // Send a response with status code 200, response body, and content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 200, body: expBody, contentType: 'application/json' }));
  } else if (matchAndrea) {
    // Send a response with status code 404, guest not found error, and content type
    const expBody = { error: 'guest not found' };
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 404, body: expBody, contentType: 'application/json' }));
  } else {
    // Handle other URLs (e.g., 500 for server failure)
    const randLastName = 0; // Replace with the actual value of ctx.randLastName
    if (randLastName === 0) {
      // Send a response with status code 500, server failed error, and content type
      const expBody = { error: 'server failed' };
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 500, body: expBody, contentType: 'application/json' }));
    } else {
      // Handle other URLs with a 404 response
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'not found' }));
    }
  }
});

// Print the "Server listening on port" message once when the server starts
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
