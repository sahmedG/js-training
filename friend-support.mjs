// friend-support.mjs

import express from 'express';
import fs from 'fs/promises';

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/:guest', async (req, res) => {
  try {
    const guestName = req.params.guest;
    const filePath = `./guests/${guestName}.json`;

    // Check if the guest file exists
    const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

    if (fileExists) {
      // Read the guest file content
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const guestData = JSON.parse(fileContent);

      // Send successful response with guest data
      res.status(200).json({ status: 'success', data: guestData });
    } else {
      // Send 404 response when the guest is not found
      res.status(404).json({ status: 'error', error: 'guest not found' });
    }
  } catch (error) {
    // Send 500 response for server failure
    res.status(500).json({ status: 'error', error: 'server failed' });
  }
});

// Handle other routes with a 404 response
app.use((req, res) => {
  res.status(404).json({ status: 'error', error: 'not found' });
});
