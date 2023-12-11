function replica(target, ...sources) {
    if (target === null || typeof target !== 'object') {
      throw new Error('Target must be an object');
    }
  
    for (const source of sources) {
      if (source === null || typeof source !== 'object') {
        throw new Error('Source must be an object');
      }
  
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          const sourceValue = source[key];
          const targetValue = target[key];
  
          if (sourceValue !== null && typeof sourceValue === 'object') {
            target[key] = replica(targetValue, sourceValue);
          } else {
            target[key] = sourceValue;
          }
        }
      }
    }
  
    return target;
  }