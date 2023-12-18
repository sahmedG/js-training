// uninvited.mjs

import http from 'http';
import { promises as fs } from 'fs';

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const guestName = req.url.slice(1); // Remove leading '/'
        const filePath = `${guestName}.json`;
        const guestInfo = JSON.parse(body);

        // Write guest information to JSON file
        await fs.writeFile(filePath, JSON.stringify(guestInfo), 'utf-8');
        // Respond with 201 Created and guest information
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(guestInfo));
      } catch (error) {
        // Server failed for some reason
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    // Method Not Allowed for non-POST requests
    res.writeHead(405, { 'Content-Type': 'application/json' });
    const errorResponse = { error: 'Method Not Allowed' };
    res.end(JSON.stringify(errorResponse));
  }
});

// Listen for server start
server.listen(PORT, async (err) => {
  if (err) {
    return console.error(`Error starting server: ${err}`);
  }
  console.log(`Server is listening on port ${PORT}`);
});
