// // friend-support.mjs

// import http from 'http';
// import fs from 'fs/promises';
// import url from 'url';

// const port = 5000;

// const server = http.createServer(async (req, res) => {
//   const guestName = req.url.substring(req.url.lastIndexOf('/') + 1).replace(/[^\w]/g, '_');
//   let guestNumber;

//   const urlParts = url.parse(req.url, true);
//   const expBody = urlParts.query.expBody;

//   if (guestName.includes('mario')) {
//     const guestName2 = req.url.match(/mario_(\w+)$/);
//     guestNumber = guestName2[1];
//   }

//   if (guestName === 'mario_0') {
//     res.writeHead(500, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ status: 500, body: { error: 'server failed' }, contentType: 'application/json' }));
//     return;
//   } else if (guestNumber !== 0 && expBody) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ status: 200, body: { message: guestNumber }, contentType: 'application/json' }));
//     return;
//   } else  {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ status: 404, body: { error: 'guest not found' }, contentType: 'application/json' }));
//     return;
//   }
// });

// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
// //if (guestName === 'andrea_bianchi')



// friend-support.mjs

import http from 'http';
import fs from 'fs/promises';

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  console.log(`Server is listening on port ${PORT}`);

  // Extract guest name from the request URL
  const guestName = req.url.slice(1); // Remove leading '/'
  const filePath = `${guestName}.json`;

  try {
    // Try to read the guest JSON file
    const data = await fs.readFile(filePath, 'utf-8');
    const guestInfo = JSON.parse(data);

    // Respond with 200 OK and guest information
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(guestInfo));
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Guest not found
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      // Server failed for some reason
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

server.listen(PORT);
