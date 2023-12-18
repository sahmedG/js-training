import http from "http";
import { promises as fs } from "fs";

// Utility functions

// ... (same as before)

// List of authorized users and their passwords
const authorizedUsers = {
  "Caleb_Squires": "abracadabra",
  "Tyrique_Dalton": "abracadabra",
  "Rahima_Young": "abracadabra"
};

// Function to check if the provided username and password are valid
function isAuthorized(username, password) {
  return authorizedUsers[username] === password;
}

// Handle POST requests with Basic Access Authentication
const handlePOSTWithAuth = async (req, res, username, password) => {
  if (!isAuthorized(username, password)) {
    res.writeHead(401, {
      "Content-Type": "application/json",
      "WWW-Authenticate": 'Basic realm="Authorization Required"'
    });
    res.end(JSON.stringify({ error: "Authorization Required" }));
    return;
  }

  // User is authorized, proceed with handling the POST request
  await handlePOST(req, res);
};

// ... (same as before)

// HTTP Server
http
  .createServer(async (req, res) => {
    switch (req.method) {
      case "GET":
        await handleGET(req, res);
        return;
      case "POST":
        // Extract username and password from Basic Authentication header
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Basic ")) {
          const credentials = Buffer.from(authHeader.slice(6), "base64").toString().split(":");
          const username = credentials[0];
          const password = credentials[1];
          await handlePOSTWithAuth(req, res, username, password);
        } else {
          res.writeHead(401, {
            "Content-Type": "application/json",
            "WWW-Authenticate": 'Basic realm="Authorization Required"'
          });
          res.end(JSON.stringify({ error: "Authorization Required" }));
        }
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
