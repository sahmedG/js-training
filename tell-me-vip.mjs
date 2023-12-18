// tell-me-vip.mjs

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

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

// Filter guests who answered 'YES'
const vipGuests = jsonFiles
  .map(file => {
    const [firstname, lastname] = file.replace('.json', '').replace(/_/g, ' ').split(' ');

    const fullPath = resolve(resolvedPath, file);
    try {
      const content = readFileSync(fullPath, 'utf8');
      const { answer } = JSON.parse(content);
      if (answer && answer.toLowerCase() === 'yes') {
        return `${lastname} ${firstname}`;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error reading/parsing file "${fullPath}": ${error.message}`);
      return null;
    }
  })
  .filter(guest => guest !== null);

// Sort the names alphabetically
const sortedVipGuests = vipGuests.sort();

// Generate formatted names with indices
const formattedVipGuests = sortedVipGuests.map((name, index) => `${index + 1}. ${name}`);

// Save the names to vip.txt
const vipFilePath = resolve(resolvedPath, 'vip.txt');
const vipFileDirectory = dirname(vipFilePath);

// Ensure the directory exists
try {
  mkdirSync(vipFileDirectory, { recursive: true });
} catch (error) {
  console.error(`Error creating directory "${vipFileDirectory}": ${error.message}`);
  process.exit(1);
}

// Save the names to vip.txt
try {
  writeFileSync(vipFilePath, formattedVipGuests.join('\n'), 'utf8');
  console.log(`VIP list saved to ${vipFilePath}`);
} catch (error) {
  console.error(`Error writing to vip.txt: ${error.message}`);
  process.exit(1);
}
