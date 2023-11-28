function round(num) {
    const decimalPart = num - parseInt(num);
    return decimalPart >= 0.5 ? (num < 0 ? parseInt(num) : parseInt(num) + 1) : parseInt(num);
  }
  
  function ceil(num) {
    return num >= 0 ? (num === parseInt(num) ? num : parseInt(num) + 1) : parseInt(num);
  }
  
  function floor(num) {
    return num >= 0 ? parseInt(num) : (num === parseInt(num) ? num : parseInt(num) - 1);
  }
  
  function trunc(num) {
    return num >= 0 ? (num === parseInt(num) ? num : parseInt(num)) : (num === parseInt(num) ? num : parseInt(num) - 1);
  }