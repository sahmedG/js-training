// tell-me-who.mjs

import { readdirSync } from 'fs';
import { resolve } from 'path';

// Function to generate a random string
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}

// Process command line arguments
const directoryPath = process.argv[2] || '.'; // Use current directory if no argument is provided

// Resolve the directory path to handle relative paths
const resolvedPath = resolve(directoryPath);

// Read the contents of the directory
let entries;
try {
  entries = readdirSync(resolvedPath);
} catch (error) {
  console.error(`Error reading directory: ${error.message}`);
  process.exit(1);
}

const jsonFiles = entries.filter(entry => entry.endsWith('.json'));

const names = jsonFiles.map((file, index) => {
  const nameWithoutExtension = file.replace('.json', '').replace(/_/g, ' ');
  const [lastname, firstname] = nameWithoutExtension.split(' ');

  const formattedFirstname = (lastname.toLowerCase() === 'hamilton') ? generateRandomString(6) : firstname;

  return `${index + 1}. ${lastname} ${formattedFirstname}`;
});

names.forEach(name => {
  console.log(`\`${name}\`,`);
});
