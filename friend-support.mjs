// friend-support.mjs

import http from 'http';
import fs from 'fs/promises';

const port = 5000;

const server = http.createServer(async (req, res) => {
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
      const expBody = { error: 'guest not found' };
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 404, body: expBody, contentType: 'application/json' }));
    } else {
      // Server failed
      const expBody = { error: 'server failed' };
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 500, body: expBody, contentType: 'application/json' }));
    }
  }
});

// Print the "Server listening on port" message once when the server starts
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
