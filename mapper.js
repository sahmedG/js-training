function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  function flatMap(arr, callback) {
    return arr.reduce(
        (acc, val, i, arr) => acc.concat(callback(val, i, arr)),
        []
    );
}