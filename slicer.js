function slice(input, start, end) {
    if (Array.isArray(input)) {
      return input.slice(start, end);
    } else if (typeof input === 'string') {
      return input.slice(start, end);
    } else {
      throw new Error('Invalid input. The input must be an array or a string.');
    }
  }