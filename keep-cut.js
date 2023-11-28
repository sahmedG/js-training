function cutFirst(input) {
    return input.length > 2 ? input.slice(2) : '';
  }
  
  function cutLast(input) {
    return input.length > 2 ? input.slice(0, -2) : '';
  }
  
  function cutFirstLast(input) {
    return input.length > 4 ? input.slice(2, -2) : '';
  }
  
  function keepFirst(input) {
    return input.slice(0, 2);
  }
  
  function keepLast(input) {
    return input.slice(-2);
  }
  
  function keepFirstLast(input) {
    return input.length > 2 ? input.slice(0, 2) + input.slice(-2) : input;
  }