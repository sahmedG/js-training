function round(num) {
    const decimalPart = num - (num | 0);
    return decimalPart >= 0.5 ? (num < 0 ? (num | 0) - 1 : (num | 0) + 1) : num | 0;
  }
  
  function ceil(num) {
    return num >= 0 ? (num === (num | 0) ? num : (num | 0) + 1) : num | 0;
  }
  
  function floor(num) {
    return num >= 0 ? num | 0 : (num === (num | 0) ? num : (num | 0) - 1);
  }
  
  function trunc(num) {
    return num >= 0 ? num | 0 : (num === (num | 0) ? num : (num | 0) - 1);
  }
  