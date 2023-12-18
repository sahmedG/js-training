// friend-support.mjs

import http from 'http';
import fs from 'fs/promises';

const port = 5000;

const server = http.createServer(async (req, res) => {
  console.log(`Server listening on port ${port}`);

  // Extract guest name from the request URL
  const guestName = req.url.substring(1);

  try {
    // Read the guest JSON file
    const data = await fs.readFile(`${guestName}.json`, 'utf-8');
    const guestInfo = JSON.parse(data);

    // Send a successful response with guest information
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(guestInfo));
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Guest not found
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      // Server failed
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

// Start the server
server.listen(port);
