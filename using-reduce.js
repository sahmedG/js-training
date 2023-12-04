function adder(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  function sumOrMul(arr, initial = 0) {
    return arr.reduce((accumulator, currentValue) => {
      return currentValue % 2 === 0 ? accumulator * currentValue : accumulator + currentValue;
    }, initial);
  }
  
  function funcExec(arr, initial) {
    return arr.reduce((accumulator, currentFunction) => {
      return currentFunction(accumulator);
    }, initial);
  }