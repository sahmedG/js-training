// friend-support.mjs

import http from 'http';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const PORT = 5000;

const server = http.createServer((req, res) => {
  const guestName = req.url.substring(1); // Remove the leading slash

  // Check if the request is a valid GET request
  if (req.method === 'GET') {
    try {
      const guestFilePath = resolve(__dirname, `${guestName}.json`);
      const guestData = readFileSync(guestFilePath, 'utf8');
      const guestJson = JSON.parse(guestData);

      // Send a successful response with the guest information
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(guestJson));
    } catch (error) {
      // Handle file not found
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        // Handle other errors
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    }
  } else {
    // Respond with a 404 for non-GET requests
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
