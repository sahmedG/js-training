function throttle(func, wait) {
    let canCall = true;
  
    return function (...args) {
      const context = this;
  
      if (canCall) {
        func.apply(context, args);
        canCall = false;
  
        setTimeout(() => {
          canCall = true;
        }, wait);
      }
    };
  }
  
  function opThrottle(func, wait, options = {}) {
    let canCall = true;
    let lastCallTime = 0;
  
    return function (...args) {
      const context = this;
      const currentTime = Date.now();
  
      if (options.leading && canCall) {
        func.apply(context, args);
        canCall = false;
        lastCallTime = currentTime;
      }
  
      if (!canCall) {
        clearTimeout(canCall);
  
        setTimeout(() => {
          if (options.trailing && currentTime - lastCallTime >= wait) {
            func.apply(context, args);
            lastCallTime = currentTime;
          }
          canCall = true;
        }, wait);
      }
    };
  }
  