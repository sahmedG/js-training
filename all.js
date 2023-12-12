function all(promisesObject) {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(promisesObject);
      const results = {};
      let settledCount = 0;
  
      if (keys.length === 0) {
        resolve(results);
      }
  
      for (const key of keys) {
        const promise = promisesObject[key];
  
        Promise.resolve(promise)
          .then((result) => {
            results[key] = result;
            settledCount++;
  
            if (settledCount === keys.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }
  
  