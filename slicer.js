function slice(input, start, end) {
    if (Array.isArray(input)) {
      return input.slice(start, end);
    } else if (typeof input === 'string') {
      return input.slice(start, end);
    }
  }