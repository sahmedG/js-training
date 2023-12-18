// tell-it-cypher.mjs

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1);
}

const keyword = process.argv[3];

if (!keyword || (keyword !== 'encode' && keyword !== 'decode')) {
  console.error('Please provide a valid keyword (encode or decode) as the second argument.');
  process.exit(1);
}

// Optional third argument for the new file name
const newFileName = process.argv[4] || 'output.txt';

const fileContent = readFileSync(filePath, 'utf8');

let result;

if (keyword === 'encode') {
  // Encode to base64
  result = Buffer.from(fileContent, 'utf8').toString('base64');
} else {
  // Decode from base64
  try {
    result = Buffer.from(fileContent, 'base64').toString('utf8');
  } catch (error) {
    console.error('Error decoding from base64:', error.message);
    process.exit(1);
  }
}

// Save the result to the specified file in the current working directory
const outputPath = resolve(process.cwd(), newFileName);

try {
  writeFileSync(outputPath, result, 'utf8');
  console.log(`File ${newFileName} ${keyword === 'encode' ? 'encoded' : 'decoded'} successfully.`);
} catch (error) {
  console.error(`Error writing to ${newFileName}:`, error.message);
  process.exit(1);
}
