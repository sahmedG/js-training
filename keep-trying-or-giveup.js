function retry(count, callback) {
    return async function (...args) {
      for (let i = 0; i <= count; i++) {
        try {
          const result = await callback(...args);
          return result;
        } catch (error) {
          if (i === count) {
            throw new Error(`${error.message}`);
          }
        }
      }
    };
  }
  
  function timeout(delay, callback) {
    return async function (...args) {
      return Promise.race([
        callback(...args),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), delay)
        ),
      ]);
    };
  }