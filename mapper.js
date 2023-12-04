function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  function customFlatMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const mappedValue = callback(arr[i], i, arr);
      result.push(...mappedValue);
    }
    return result;
  }