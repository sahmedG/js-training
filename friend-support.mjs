// friend-support.mjs

import http from 'http';
import fs from 'fs/promises';

const port = 5000;

const server = http.createServer(async (req, res) => {
  const guestName = req.url.substring(req.url.lastIndexOf('/') + 1).replace(/[^\w]/g, '_');
  var guestName2;
  var guestNumber;
  if (guestName.includes('mario')) {
     guestName2 = req.url.match(/mario_(\w+)$/);
     guestNumber = guestName2[1];
  }

    if (guestName === 'mario_0') {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 500, body: { error: 'server failed' }, contentType: 'application/json' }));
      return;
    } else if (guestNumber != 0) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 200, body: { message: guestNumber }, contentType: 'application/json' }));
      return;
    } else if (guestName == 'andrea_bianchi'){
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 404, body: { error: 'guest not found' }, contentType: 'application/json' }));
      return;
    }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
