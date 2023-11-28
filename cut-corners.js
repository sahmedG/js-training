function round(num) {
    const decimalPart = num - ~~num;
    return decimalPart >= 0.5 ? (num < 0 ? ~~num : ~~num + 1) : ~~num;
  }
  
  function ceil(num) {
    return num >= 0 ? (num === ~~num ? num : ~~num + 1) : ~~num;
  }
  
  function floor(num) {
    return num >= 0 ? ~~num : (num === ~~num ? num : ~~num - 1);
  }
  
  function trunc(num) {
    return num >= 0 ? (num === ~~num ? num : ~~num) : (num === ~~num ? num : ~~num - 1);
  }