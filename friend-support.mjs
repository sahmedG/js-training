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

const server = http.createServer(async (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    const errorResponse = { error: "Method Not Allowed" };
    res.end(JSON.stringify(errorResponse));
  } else {
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
  }
});

const PORT = 5000;
server.listen(PORT, (err) => {
  if (err) {
    return console.error(`Error starting server: ${err}`);
  }
  console.log(`Server is listening on port ${PORT}`);
});
