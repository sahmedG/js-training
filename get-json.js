function getJSON(path, params) {
    const url = new URL(path);
    if (params) {
      Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    }
  
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        return response.json();
      })
      .then((result) => {
        if (result && result.hasOwnProperty('data')) {
          return result.data;
        } else if (result && result.hasOwnProperty('error')) {
          throw new Error(result.error);
        } else {
          throw new Error('Invalid response format');
        }
      });
  }
  