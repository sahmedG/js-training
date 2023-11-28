function round(num) {
    const integerPart = num < 0 ? Math.ceil(num) : Math.floor(num);
    const decimalPart = num - integerPart;
    return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
  }
  
  function ceil(num) {
    return num >= 0 ? (num === Math.trunc(num) ? num : Math.trunc(num) + 1) : Math.trunc(num);
  }
  
  function floor(num) {
    return num >= 0 ? Math.trunc(num) : (num === Math.trunc(num) ? num : Math.trunc(num) - 1);
  }
  
  function trunc(num) {
    return num >= 0 ? (num === Math.trunc(num) ? num : Math.trunc(num)) : (num === Math.trunc(num) ? num : Math.trunc(num) - 1);
  }