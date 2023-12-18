// tell-it-cypher.mjs

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name as the first argument.');
  process.exit(1);
}

const operation = process.argv[3];

// const filename = process.argv[4]; 

if (!operation || (operation !== 'encode' && operation !== 'decode')) {
  console.error('Please provide a valid operation (encode or decode) as the second argument.');
  process.exit(1);
}

const inputFilePath = resolve(process.cwd(), fileName);

let result;

try {
  const fileContent = readFileSync(inputFilePath, 'utf8');

  if (operation === 'encode') {
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
} catch (error) {
  console.error(`Error reading file "${fileName}": ${error.message}`);
  process.exit(1);
}

// Determine the output file name based on the operation
const outputFileName = operation === 'encode' ? 'cypher.txt' : 'clear.txt';

// Save the result to the specified file in the current working directory
const outputFilePath = resolve(process.cwd(), outputFileName);

try {
    writeFileSync(outputFilePath, result, 'utf8');
    console.log(`File ${outputFileName} ${operation === 'encode' ? 'encoded' : 'decoded'} successfully.`);
  } catch (error) {
    console.error(`Error writing to ${outputFileName}: ${error.message}`);
    process.exit(1);
  }
  