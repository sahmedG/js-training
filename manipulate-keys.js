function filterKeys(obj, callback) {
    const filteredObj = {};
    for (const key in obj) {
      if (callback(key)) {
        filteredObj[key] = obj[key];
      }
    }
    return filteredObj;
  }
  
  function mapKeys(obj, callback) {
    const mappedObj = {};
    for (const key in obj) {
      const newKey = callback(key);
      mappedObj[newKey] = obj[key];
    }
    return mappedObj;
  }
  
  function reduceKeys(obj, callback, initialValue) {
    let accumulator = initialValue === undefined ? {} : initialValue;
    for (const key in obj) {
      accumulator = callback(accumulator, key);
    }
    return accumulator;
  }