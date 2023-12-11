function filterEntries(cart, callback) {
    const filteredEntries = {};
    for (const [key, value] of Object.entries(cart)) {
      if (callback([key, value])) {
        filteredEntries[key] = value;
      }
    }
    return filteredEntries;
  }
  
  function mapEntries(cart, callback) {
    const mappedEntries = {};
    for (const [key, value] of Object.entries(cart)) {
      const [newKey, newValue] = callback([key, value]);
      mappedEntries[newKey] = newValue;
    }
    return mappedEntries;
  }
  
  function reduceEntries(cart, callback, initialValue) {
    let accumulator = initialValue === undefined ? {} : initialValue;
    for (const [key, value] of Object.entries(cart)) {
      accumulator = callback(accumulator, [key, value]);
    }
    return accumulator;
  }
  
  function totalCalories(cart) {
    const totalCalories = reduceEntries(
      cart,
      (acc, [key, value]) => acc + calculateCalories(key, value),
      0
    );
    return totalCalories.toFixed(1);
  }
  
  function lowCarbs(cart) {
    return filterEntries(cart, ([_, value]) => value < 50);
  }
  
  function cartTotal(cart) {
    return mapEntries(cart, ([key, value]) => {
      return {
        calories: calculateCalories(key, value),
        protein: calculateProtein(value),
        carbs: value,
        sugar: calculateSugar(value),
        fiber: calculateFiber(value),
        fat: calculateFat(value),
      };
    });
  }
  function calculateCalories(item, grams) {
    const caloriesPerGram = {
      orange: 0.49,
      oil: 0.48,
      sugar: 3.87,
    };
    return grams * caloriesPerGram[item];
  }
  
  function calculateProtein(grams) {
    return grams * 0.009;
  }
  
  function calculateSugar(grams) {
    return grams;
  }
  
  function calculateFiber(grams) {
    return grams * 0.01;
  }
  
  function calculateFat(grams) {
    return grams * 0.033;
  }