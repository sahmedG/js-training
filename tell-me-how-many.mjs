import { readdirSync } from 'fs';
import { resolve } from 'path';

const directoryPath = process.argv[2] || '.'; 

const resolvedPath = resolve(directoryPath);

let entries;
try {
  entries = readdirSync(resolvedPath);
} catch (error) {
  console.error(`Error reading directory: ${error.message}`);
  process.exit(1);
}

const numberOfEntries = entries.length;

console.log(`Number of entries in "${resolvedPath}": ${numberOfEntries}`);
