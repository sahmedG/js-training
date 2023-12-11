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
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}