import { readdirSync, readFileSync } from 'fs';
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
  return readFileSync(fullPath, 'utf8').trim() === 'guest';
});

const sortedNames = files.map(file => file.split('.').slice(1).join('.')).sort();

sortedNames.forEach((name, index) => {
  const [lastname, firstname] = name.split(' ');
  console.log(`${index + 1}. ${lastname} ${firstname}`);
});
