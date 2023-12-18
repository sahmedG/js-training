// tell-me-how-many.mjs

import { readdirSync, statSync } from 'fs';
import { resolve } from 'path';

function isFile(path) {
  return statSync(path).isFile();
}

const directoryPath = process.argv[2] || '.'; 

const resolvedPath = resolve(directoryPath);

let entries;
try {
  entries = readdirSync(resolvedPath).filter(entry => isFile(resolve(resolvedPath, entry)));
} catch (error) {
  console.error(`Error reading directory: ${error.message}`);
  process.exit(1);
}

const numberOfEntries = entries.length;

console.log(`Number of files in "${resolvedPath}": ${numberOfEntries}`);
