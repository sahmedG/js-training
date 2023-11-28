function findExpression(target) {
    function search(current, expression) {
      if (current === target) {
        return expression;
      } else if (current > target) {
        return undefined;  // If the target cannot be reached
      } else {
        // Try both options: add 4 and multiply by 2
        const add4Result = search(add4(current), expression + `+4`);
        const mul2Result = search(mul2(current), expression + `*2`);
        
        // Return the first successful path or undefined if both paths fail
        return add4Result || mul2Result;
      }
    }
  
    // Start the search from 1
    const result = search(1, '');
    
    return result;
  }