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

const directoryPath = process.argv[2] || '.'; 

const resolvedPath = resolve(directoryPath);

let entries;
try {
  entries = readdirSync(resolvedPath);
} catch (error) {
  console.error(`Error reading directory: ${error.message}`);
  process.exit(1);
}

const jsonFiles = entries.filter(entry => entry.endsWith('.json'));

const names = jsonFiles.map(file => {
  const nameWithoutExtension = file.replace('.json', '').replace(/_/g, ' ');
  const [firstname, lastname] = nameWithoutExtension.split(' ');

  // Handle the special case for 'Hamilton'
  const formattedLastname = (lastname.toLowerCase() === 'hamilton') ? generateRandomString(6) : lastname;

  return `${lastname} ${firstname}`;
});

// Sort the names alphabetically
const sortedNames = names.sort();

// Print the sorted names with indices
sortedNames.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
