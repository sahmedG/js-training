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

const jsonFiles = entries.filter(entry => entry.endsWith('.json'));

const names = jsonFiles.map(file => {
  const nameWithoutExtension = file.replace('.json', '');
  return nameWithoutExtension;
});

const sortedNames = names.sort();

sortedNames.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
