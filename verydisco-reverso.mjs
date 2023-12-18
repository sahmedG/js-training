// verydisco-reverso.mjs

import { readFileSync } from 'fs';

// Function to reverse a very disco word
function reverseVeryDisco(word) {
  const length = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, length-1);
  const secondHalf = word.slice(length);
  return secondHalf + firstHalf;
}

// Process command line arguments
const fileName = process.argv[2];

// Check if a file name is provided
if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

// Read the content of the file
let fileContent;
try {
  fileContent = readFileSync(fileName, 'utf8');
} catch (error) {
  console.error(`Error reading file: ${error.message}`);
  process.exit(1);
}

// Split the content into words
const words = fileContent.split(' ');

// Reverse each very disco word
const reversedWords = words.map(reverseVeryDisco);

// Display the result
console.log(reversedWords.join(' '));
