function findExpression(target) {
    function search(current, expression) {
      if (current === target) {
        return expression;
      } else if (current > target) {
        return undefined; 
      } else {
        const add4Result = search(add4(current), expression + `+4`);
        const mul2Result = search(mul2(current), expression + `*2`);
        return add4Result || mul2Result;
      }
    }
    const result = search(1, '');
    return result;
  }