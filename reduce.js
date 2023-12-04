function fold(arr, callback, accumulator) {
    let result = accumulator;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i]);
    }
    return result;
  }
  
  function foldRight(arr, callback, accumulator) {
    let result = accumulator;
    for (let i = arr.length - 1; i >= 0; i--) {
      result = callback(result, arr[i]);
    }
    return result;
  }
  
  function reduce(arr, callback) {
    if (arr.length < 1) {
      throw new Error("Array must have at least one element");
    }
  
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = callback(result, arr[i]);
    }
    return result;
  }
  
  function reduceRight(arr, callback) {
    if (arr.length < 1) {
      throw new Error("Array must have at least one element");
    }
  
    let result = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      result = callback(result, arr[i]);
    }
    return result;
  }