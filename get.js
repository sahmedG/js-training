function get(src, path) {
    const pathArray = path.split('.');
    const result = pathArray.reduce((obj, key) => {
      if (obj && obj.hasOwnProperty(key)) {
        return obj[key];
      } else {
        throw new Error(`Invalid path: ${path}`);
      }
    }, src);
    return result;
  }