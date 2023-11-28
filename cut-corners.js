function round(num) {
    const absNum = Math.abs(num);
    const tens = Math.pow(10, Math.floor(Math.log10(absNum)));
    const rounded = Math.floor(absNum / tens) * tens;
  
    return num < 0 ? -rounded : rounded;
  }
  
  function ceil(num) {
    const absNum = Math.abs(num);
    const tens = Math.pow(10, Math.floor(Math.log10(absNum)));
    const ceiled = Math.ceil(absNum / tens) * tens;
  
    return num < 0 ? -ceiled : ceiled;
  }
  
  function floor(num) {
    const absNum = Math.abs(num);
    const tens = Math.pow(10, Math.floor(Math.log10(absNum)));
    const floored = Math.floor(absNum / tens) * tens;
  
    return num < 0 ? -floored : floored;
  }
  
  function trunc(num) {
    return Math.abs(num) === Infinity ? num : num >= 0 ? Math.floor(num) : Math.ceil(num);
  }