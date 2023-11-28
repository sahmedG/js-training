function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
      result += a;
    }
  
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      result = -result;
    }
  
    return result;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
  
    let quotient = 0;
    let divisor = Math.abs(b);
    let dividend = Math.abs(a);
  
    while (dividend >= divisor) {
      dividend -= divisor;
      quotient++;
    }

    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      quotient = -quotient;
    }
  
    return quotient;
  }
  

  function modulo(a, b) {
    if (b === 0) {
      throw new Error("Cannot find modulo with divisor zero");
    }
  
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);
  
    while (dividend >= divisor) {
      dividend -= divisor;
    }
  
    if (a < 0) {
      dividend = -dividend;
    }
  
    return dividend;
  }