import { promises as fs } from "fs";

const shoppingListFile = process.argv[2];

if (!shoppingListFile) {
  console.error("No file specified.");
  process.exit(1);
}

async function readShoppingList() {
  try {
    const data = await fs.readFile(shoppingListFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeShoppingList(list) {
  await fs.writeFile(shoppingListFile, JSON.stringify(list, null, 2), "utf-8");
}

async function createShoppingList() {
  await writeShoppingList([]);
  console.log(`Shopping list created in ${shoppingListFile}.`);
}

async function addToList(elem, count = 1) {
  const list = await readShoppingList();
  const existingItem = list.find((item) => item.element === elem);

  if (existingItem) {
    existingItem.count += count;
  } else {
    list.push({ element: elem, count });
  }

  await writeShoppingList(list);
  console.log(`Added ${count} ${elem}(s) to the shopping list.`);
}

async function removeFromList(elem, count = 1) {
  const list = await readShoppingList();
  const existingItem = list.find((item) => item.element === elem);

  if (!existingItem) {
    console.log(`Element ${elem} not found in the shopping list.`);
    return;
  }

  existingItem.count -= count;

  if (existingItem.count <= 0) {
    const index = list.indexOf(existingItem);
    list.splice(index, 1);
    console.log(`Removed ${elem} from the shopping list.`);
  } else {
    console.log(`Subtracted ${count} from ${elem} in the shopping list.`);
  }

  await writeShoppingList(list);
}

async function listShoppingList() {
  const list = await readShoppingList();

  if (list.length === 0) {
    console.log("Empty list.");
  } else {
    list.forEach((item) => {
      console.log(`- ${item.element} (${item.count})`);
    });
  }
}

async function handleCommand() {
  const command = process.argv[3];

  switch (command) {
    case "create":
      await createShoppingList();
      break;
    case "add":
      const elemToAdd = process.argv[4];
      const countToAdd = parseInt(process.argv[5], 10) || 1;
      if (!elemToAdd) {
        console.error("No elem specified.");
      } else {
        await addToList(elemToAdd, countToAdd);
      }
      break;
    case "rm":
      const elemToRemove = process.argv[4];
      const countToRemove = parseInt(process.argv[5], 10) || 1;
      if (!elemToRemove) {
        console.error("No elem specified.");
      } else {
        await removeFromList(elemToRemove, countToRemove);
      }
      break;
    case "ls":
      await listShoppingList();
      break;
    case "help":
    default:
      console.log("Available commands:");
      console.log("  - create: create the file");
      console.log("  - add: add a new element to the list in the file");
      console.log("  - rm: remove an element from the list in the file");
      console.log("  - help: print all the command lines available");
      console.log("  - ls or no more arguments: print the list in the console");
      break;
  }
}

handleCommand();
