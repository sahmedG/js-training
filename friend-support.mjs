import http from "http";
import { promises as fs } from "fs";

async function readFileToString(filePath) {
  try {
    // Check if the file exists
    await fs.access(filePath);

    // If the file exists, read its contents
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    // Handle errors, e.g., file not found
    if (error.code === "ENOENT") {
      return 404;
    } else {
      console.error(`Error reading file: ${error.message}`);
      return 500;
    }
  }
}

async function writeFileFromString(filePath, data) {
  try {
    await fs.writeFile(filePath, data, "utf-8");
    return true;
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    return false;
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    let jsonInfo = await readFileToString(`guests/${req.url}.json`);
    if (jsonInfo === 404) {
      res.writeHead(404, { "Content-Type": "application/json" });
      const errorResponse = { error: "guest not found" };
      res.end(JSON.stringify(errorResponse));
    } else if (jsonInfo === 500) {
      res.writeHead(500, { "Content-Type": "application/json" });
      const errorResponse = { error: "server failed" };
      res.end(JSON.stringify(errorResponse));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(jsonInfo);
    }
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      const fileName = `guests/${req.url}.json`;
      const success = await writeFileFromString(fileName, body);

      if (success) {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(body);
      } else {
        res.writeHead(500, { "Content-Type": "application/json" });
        const errorResponse = { error: "server failed" };
        res.end(JSON.stringify(errorResponse));
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    const errorResponse = { error: "Method Not Allowed" };
    res.end(JSON.stringify(errorResponse));
  }
});

const PORT = 5000;
server.listen(PORT, (err) => {
  if (err) {
    return console.error(`Error starting server: ${err}`);
  }
  console.log(`Server is listening on port ${PORT}`);
});
