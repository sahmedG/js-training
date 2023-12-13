async function race(promises) {
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
  
  async function some(promisesOrValues, count) {
    if (count === 0 || promisesOrValues.length === 0) {
      return Promise.resolve(Array(count).fill(undefined));
    }
  
    return new Promise((resolve) => {
      const results = new Array(promisesOrValues.length);
      let resolvedCount = 0;
  
      function resolveIfEnoughResults() {
        if (resolvedCount === count) {
          resolve(results.slice(0, count));
        }
      }
  
      promisesOrValues.forEach((promiseOrValue, index) => {
        Promise.resolve(promiseOrValue)
          .then((result) => {
            results[index] = result;
            resolvedCount++;
            resolveIfEnoughResults();
          })
          .catch(() => {
            resolvedCount++;
            resolveIfEnoughResults();
          });
      });
    });
  }