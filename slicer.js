function slice(input, start, end) {
    if (Array.isArray(input) || typeof input === 'string') {
      const inputLength = input.length;
      let sliced = '';
  
      if (start < 0) {
        start = Math.max(0, start + inputLength);
      }
  
      if (end < 0) {
        end = Math.max(0, end + inputLength);
      }
  
      end = Math.min(end, inputLength);
  
      for (let i = start; i < end; i++) {
        sliced += input[i];
      }
  
      return typeof input === 'string' ? sliced : sliced.split('');
    } else {
      throw new Error('Invalid input. The input must be an array or a string.');
    }
  }