function round(num) {
    const fractionalPart = customModulus(num,1);
    const isPositive = num >= 0;
    const multiplier = isPositive ? 1 : -1;
  
    if (fractionalPart >= 0.5) {
      return num + multiplier;
    } else if (fractionalPart <= -0.5) {
      return num - multiplier;
    } else {
      return num;
    }
  }
  
  function ceil(num) {
    const isPositive = num >= 0;
    const multiplier = isPositive ? 1 : -1;
  
    while (customModulus(num,1) !== 0) {
      num += multiplier * 0.1;
    }
  
    return num;
  }
  
  function floor(num) {
    const isPositive = num >= 0;
    const multiplier = isPositive ? -1 : 1;
  
    while (customModulus(num,1) !== 0) {
      num += multiplier * 0.1;
    }
  
    return num;
  }
  
  function trunc(num) {
    return num > 0 ? floor(num) : ceil(num);
  }

  function customModulus(num, divisor) {
    while (num >= divisor) {
      num -= divisor;
    }
  
    return num;
  }