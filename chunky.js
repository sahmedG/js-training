function chunk(array, size) {
    if (!Array.isArray(array) || !Number.isInteger(size) || size <= 0) {
      throw new Error("Invalid input. Please provide a valid array and a positive integer size.");
    }
  
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
  
    return result;
  }