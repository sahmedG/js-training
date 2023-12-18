// verydisco-reverso.mjs

import { readFileSync } from 'fs';

function reverseVeryDisco(word) {
  const length = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, length+1);
  const secondHalf = word.slice(length);
  return secondHalf + firstHalf;
}

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

let fileContent;
try {
  fileContent = readFileSync(fileName, 'utf8');
} catch (error) {
  console.error(`Error reading file: ${error.message}`);
  process.exit(1);
}

const words = fileContent.split(' ');

const reversedWords = words.map(reverseVeryDisco);

console.log(reversedWords.join(' '));
