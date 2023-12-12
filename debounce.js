function debounce(func, wait) {
    let timeout;
  
    return function (...args) {
      const context = this;
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }
  
  function opDebounce(func, wait, leading = false) {
    let timeout;
  
    return function (...args) {
      const context = this;
  
      const later = () => {
        timeout = null;
        if (!leading) {
          func.apply(context, args);
        }
      };
  
      const shouldCallNow = leading && !timeout;
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  
      if (shouldCallNow) {
        func.apply(context, args);
      }
    };
  }
  

  
  