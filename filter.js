function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function reject(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function partition(arr, callback) {
    const trueResult = [];
    const falseResult = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        trueResult.push(arr[i]);
      } else {
        falseResult.push(arr[i]);
      }
    }
    return [trueResult, falseResult];
  }