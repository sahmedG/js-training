function reverse(inputData) {
    if (typeof inputData === 'string') {
      return inputData.split('').reverse().join('');  // Reversing a string using split, reverse, and join
    } else if (Array.isArray(inputData)) {
      return inputData.slice().reverse();  // Reversing an array using slice and reverse
    } else {
      throw new Error("Input must be a string or an array");
    }
  }