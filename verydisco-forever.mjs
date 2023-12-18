import { writeFileSync } from 'fs';

function makeVeryDisco(word) {
  const length = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, length);
  const secondHalf = word.slice(length);
  return secondHalf + firstHalf;
}

const inputArg = process.argv[2];

if (!inputArg) {
  console.error('Please provide an argument.');
  process.exit(1);
}

const words = inputArg.split(' ');

const veryDiscoWords = words.map(makeVeryDisco);

const outputString = veryDiscoWords.join(' ');

const outputFile = 'verydisco-forever.txt';
writeFileSync(outputFile, outputString);

console.log(`Result written to ${outputFile}`);
