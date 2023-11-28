function round(num) {
    const decimalPart = num - Math.trunc(num);
    return decimalPart >= 0.5 ? Math.ceil(num) : Math.floor(num);
  }
  
  function ceil(num) {
    return num >= 0 ? Math.ceil(num) : Math.trunc(num);
  }
  
  function floor(num) {
    return num >= 0 ? Math.floor(num) : Math.trunc(num);
  }
  
  function trunc(num) {
    return num >= 0 ? Math.trunc(num) : Math.ceil(num);
  }