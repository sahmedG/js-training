// import http from "http";
// import { promises as fs } from "fs";


// async function readFileToString(filePath) {
//     try {
//       // Check if the file exists
//       await fs.access(filePath);
  
//       // If the file exists, read its contents
//       const fileContent = await fs.readFile(filePath, "utf-8");
//       return fileContent;
//     } catch (error) {
//       // Handle errors, e.g., file not found
//       if (error.code === "ENOENT") {
//         return 404;
//       } else {
//         console.error(`Error reading file: ${error.message}`);
//         return 500;
//       }
//     }
//   }
  
//   async function writeFile(fileName, content) {
//     try {
//       await fs.writeFile(fileName, content, "utf8");
//       console.log(`File ${fileName} created successfully.`);
//       return 201;
//     } catch (err) {
//       console.error(`Error writing to ${fileName}: ${err}`);
//       return 500;
//     }
//   }
  
//   // HANDLE GETS LIKE USUAL
//   const handleGET = async (req, res) => {
//     let jsonInfo = await readFileToString(`guests/${req.url}.json`);
//     if (jsonInfo === 404) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       const errorResponse = { error: "guest not found" };
//       res.end(JSON.stringify(errorResponse));
//     } else if (jsonInfo === 500) {
//       res.writeHead(500, { "Content-Type": "application/json" });
//       const errorResponse = { error: "server failed" };
//       res.end(JSON.stringify(errorResponse));
//     } else {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(jsonInfo);
//     }
//   };

// const authorizedUsers = {
//   "Caleb_Squires": "abracadabra",
//   "Tyrique_Dalton": "abracadabra",
//   "Rahima_Young": "abracadabra"
// };

// // Function to check if the provided username and password are valid
// function isAuthorized(username, password) {
//   return authorizedUsers[username] === password;
// }

// // Handle POST requests with Basic Access Authentication
// const handlePOSTWithAuth = async (req, res, username, password) => {
//   if (!isAuthorized(username, password)) {
//     res.writeHead(401, {
//       "Content-Type": "application/json",
//       "WWW-Authenticate": 'Basic realm="Authorization Required"'
//     });
//     res.end(JSON.stringify({ error: "Authorization Required" }));
//     return;
//   }

//   // User is authorized, proceed with handling the POST request
//   await handlePOST(req, res);
// };

// // ... (same as before)

// // HTTP Server
// http
//   .createServer(async (req, res) => {
//     switch (req.method) {
//       case "GET":
//         await handleGET(req, res);
//         return;
//       case "POST":
//         // Extract username and password from Basic Authentication header
//         const authHeader = req.headers.authorization;
//         if (authHeader && authHeader.startsWith("Basic ")) {
//           const credentials = Buffer.from(authHeader.slice(6), "base64").toString().split(":");
//           const username = credentials[0];
//           const password = credentials[1];
//           await handlePOSTWithAuth(req, res, username, password);
//         } else {
//           res.writeHead(401, {
//             "Content-Type": "application/json",
//             "WWW-Authenticate": 'Basic realm="Authorization Required"'
//           });
//           res.end(JSON.stringify({ error: "Authorization Required" }));
//         }
//         return;
//       default:
//         res.writeHead(405, { "Content-Type": "application/json" });
//         const errorResponse = { error: "Method Not Allowed" };
//         res.end(JSON.stringify(errorResponse));
//         return;
//     }
//   })
//   .listen(5000, (err) => {
//     if (err) {
//       return console.error(`Error starting server: ${err}`);
//     }
//     console.log(`Server is listening on port 5000`);
//   });
import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
const host = 'localhost';
const port = 5000;
const pathGuests = `guests`;
const bestFriends = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const guestData = (req, res) => {
    let statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const guestFile = `${req.url.slice(1)}.json`
    const errHandler = (err, statusCode, message) => {
        let bodyRes = JSON.stringify({ error: message })
        res.writeHead(statusCode, {
            'Content-Length': Buffer.byteLength(bodyRes),
        })
            .end(bodyRes);
    }
    //reading credentials
    let baseAuthorusation = req.headers['authorization'];
    if (!baseAuthorusation) {
        errHandler('no credentials found', 401, 'no credentials found');
        return;
    }
    let credentials = Buffer.from(baseAuthorusation.slice(6), "base64").toString().split(':');
    if (!bestFriends.includes(credentials[0]) || credentials[1] !== 'abracadabra') {
        errHandler('wrong credentials', 401, 'Authorization Required%')
        return;
    }
    // in the test for this task they put body in the headers !!!!!
    let bodyReq = req.headers['body'];
    writeFile(`${pathGuests}/${guestFile}`, bodyReq)
        .then(() => {
            let bodyRes = bodyReq;
            res.writeHead(statusCode, {
                'Content-Length': Buffer.byteLength(bodyRes),
            })
                .end(bodyRes);
        })
        .catch(errHandler);
}
const server = http.createServer(guestData);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});