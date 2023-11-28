function slice(input, start, end) {
    if (typeof input === 'string') {
      return sliceString(input, start, end);
    } else if (Array.isArray(input)) {
      return sliceArray(input, start, end);
    } else {
      throw new Error('Invalid input. The input must be an array or a string.');
    }
  }
  
  function sliceString(input, start, end) {
    const inputLength = input.length;
    let sliced = '';
  
    if (start < 0) {
      start = Math.max(0, start + inputLength);
    }
  
    end = typeof end !== 'undefined' ? end : inputLength;
  
    if (end < 0) {
      end = Math.max(0, end + inputLength);
    }
  
    end = Math.min(end, inputLength);
  
    for (let i = start; i < end; i++) {
      sliced += input[i];
    }
  
    return sliced;
  }
  
  function sliceArray(input, start, end) {
    const inputLength = input.length;
    let sliced = [];
  
    if (start < 0) {
      start = Math.max(0, start + inputLength);
    }
  
    end = typeof end !== 'undefined' ? end : inputLength;
  
    if (end < 0) {
      end = Math.max(0, end + inputLength);
    }
  
    end = Math.min(end, inputLength);
  
    for (let i = start; i < end; i++) {
      sliced.push(input[i]);
    }
  
    return sliced;
  }