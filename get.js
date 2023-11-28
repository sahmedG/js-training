function get(src, path) {
    const pathArray = path.split('.');
    const result = pathArray.reduce((obj, key) => {
      if (obj && obj.hasOwnProperty(key)) {
        return obj[key];
      }
    }, src);
    return result;
  }