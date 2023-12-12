async function series(asyncFunctions) {
    const results = [];
  
    for (const asyncFunc of asyncFunctions) {
      const result = await asyncFunc();
      results.push(result);
    }
  
    return results;
  }
