import http from "http";
import { promises as fs } from "fs";

// UTILITY FUNCS

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

async function writeFile(fileName, content) {
  try {
    await fs.writeFile(fileName, content, "utf8");
    console.log(`File ${fileName} created successfully.`);
    return 201;
  } catch (err) {
    console.error(`Error writing to ${fileName}: ${err}`);
    return 500;
  }
}

// HANDLE GETS LIKE USUAL
const handleGET = async (req, res) => {
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
};

// HANDLE POST

const handlePOST = async (req, res) => {
  const URL = `guests${req.url}.json`;
  let postData = "";

  req.on("data", (chunk) => {
    postData += chunk;
  });

  req.on("end", async () => {
    console.log(postData);
    try {
      let stat = await writeFile(URL, postData);
      if (stat === 500) {
        res.writeHead(500, { "Content-Type": "application/json" });
        const errorResponse = { error: "server failed" };
        res.end(JSON.stringify(errorResponse));
      } else if (stat === 201) {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(postData);
      }
    } catch (error) {
      console.error("Error writing file:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      const errorResponse = { error: "server failed" };
      res.end(JSON.stringify(errorResponse));
    }
  });
};

http
  .createServer(async (req, res) => {
    switch (req.method) {
      case "GET":
        await handleGET(req, res);
        return;
      case "POST":
        await handlePOST(req, res);
        return;
      default:
        res.writeHead(405, { "Content-Type": "application/json" });
        const errorResponse = { error: "Method Not Allowed" };
        res.end(JSON.stringify(errorResponse));
        return;
    }
  })
  .listen(5000, (err) => {
    if (err) {
      return console.error(`Error starting server: ${err}`);
    }
    console.log(`Server is listening on port 5000`);
  });
