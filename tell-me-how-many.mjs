// tell-me-how-many.mjs

import { readdirSync, statSync } from 'fs';
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

const files = entries.filter(entry => {
  const fullPath = resolve(resolvedPath, entry);
  return statSync(fullPath).isFile();
});

const numberOfFiles = files.length;

console.log(numberOfFiles);
