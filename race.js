function race(promises) {
    return new Promise((resolve, reject) => {
      for (const promise of promises) {
        Promise.resolve(promise)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }
  
  function some(promisesOrValues, count) {
    if (count === 0 || promisesOrValues.length === 0) {
      return Promise.resolve(undefined);
    }
  
    return new Promise((resolve) => {
      const results = [];
      let resolvedCount = 0;
  
      function resolveIfEnoughResults() {
        if (resolvedCount === count) {
          resolve(results.slice(0, count));
        }
      }
  
      for (const promiseOrValue of promisesOrValues) {
        Promise.resolve(promiseOrValue)
          .then((result) => {
            results.push(result);
            resolvedCount++;
            resolveIfEnoughResults();
          });
      }
    });
  }
