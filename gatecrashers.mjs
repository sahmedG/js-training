const handlePOST = async (req, res) => {
    if (!authenticateRequest(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      const errorResponse = { error: 'Unauthorized' };
      res.end(JSON.stringify(errorResponse));
      return;
    }
  
    const URL = `guests${req.url}.json`;
    let postData = '';
  
    req.on('data', (chunk) => {
      postData += chunk;
    });
  
    req.on('end', async () => {
      console.log(postData);
  
      try {
        // Check if postData is empty before parsing
        if (!postData.trim()) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          const errorResponse = { error: 'Bad Request - Empty Body' };
          res.end(JSON.stringify(errorResponse));
          return;
        }
  
        let stat = await writeFile(URL, postData);
        if (stat === 500) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          const errorResponse = { error: 'server failed' };
          res.end(JSON.stringify(errorResponse));
        } else if (stat === 201) {
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(postData);
        }
      } catch (error) {
        console.error('Error writing file:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        const errorResponse = { error: 'server failed' };
        res.end(JSON.stringify(errorResponse));
      }
    });
  };
  