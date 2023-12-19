import { promises as fs } from "fs";

async function readGuests(guestsDirectory) {
  try {
    const files = await fs.readdir(guestsDirectory);
    const vips = [];

    for (const file of files) {
      const filePath = `${guestsDirectory}/${file}`;
      const data = await fs.readFile(filePath, "utf-8");
      const guestInfo = JSON.parse(data);

      if (guestInfo.answer === "yes") {
        vips.push(guestInfo);
      }
    }

    return vips;
  } catch (error) {
    console.error("Error reading guests:", error.message);
    return [];
  }
}

async function updateShoppingList(existingList, vips) {
  const updatedList = { ...existingList };

  // Drinks
  const numVips = vips.length;
  const beers = Math.ceil(numVips / 6);
  const wine = Math.ceil(numVips / 4);
  const water = Math.ceil(numVips / 4);
  const softs = Math.ceil(numVips / 4);

  if (beers > 0) updatedList["6-packs-beers"] = beers;
  if (wine > 0) updatedList["wine-bottles"] = wine;
  if (water > 0) updatedList["water-bottles"] = water;
  if (softs > 0) updatedList["soft-bottles"] = softs;

  // Food
  const veggiesVegans = Math.ceil(numVips / 3);
  const burgers = numVips;
  const sardines = numVips;
  const kebabs = numVips;
  const potatoes = numVips;

  if (veggiesVegans > 0) updatedList["eggplants"] = veggiesVegans;
  if (veggiesVegans > 0) updatedList["mushrooms"] = veggiesVegans;
  if (veggiesVegans > 0) updatedList["hummus"] = veggiesVegans;
  if (veggiesVegans > 0) updatedList["courgettes"] = veggiesVegans;

  if (burgers > 0) updatedList["burgers"] = burgers;
  if (sardines > 0) updatedList["sardines"] = sardines;
  if (kebabs > 0) updatedList["kebabs"] = kebabs;

  if (potatoes > 0) updatedList["potatoes"] = potatoes;

  return updatedList;
}

async function writeToShoppingList(shoppingListFile, updatedList) {
  try {
    await fs.writeFile(shoppingListFile, JSON.stringify(updatedList, null, 2), "utf-8");
    console.log("Shopping list updated successfully!");
  } catch (error) {
    console.error("Error writing shopping list:", error.message);
  }
}

async function main() {
  const guestsDirectory = process.argv[2];
  const shoppingListFile = process.argv[3];

  if (!guestsDirectory || !shoppingListFile) {
    console.error("Please provide the guests directory and shopping list file as arguments.");
    process.exit(1);
  }

  const vips = await readGuests(guestsDirectory);

  if (vips.length === 0) {
    console.log("No one is coming.");
    return;
  }

  let existingList = {};

  try {
    const data = await fs.readFile(shoppingListFile, "utf-8");
    existingList = JSON.parse(data);
  } catch (error) {
    console.error("Error reading existing shopping list:", error.message);
  }

  const updatedList = await updateShoppingList(existingList, vips);
  await writeToShoppingList(shoppingListFile, updatedList);
}

main();
