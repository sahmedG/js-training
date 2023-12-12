function getJSON(url) {
    return new Promise((resolve) => {
      const responseTime = Math.random() * 100;
      setTimeout(() => {
        resolve(`Response from ${url}`);
      }, responseTime);
    });
  }
  
  function queryServers(serverName, q) {
    const url = `/${serverName}?q=${encodeURIComponent(q)}`;
    const backupUrl = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
  
    return Promise.race([getJSON(url), getJSON(backupUrl)]);
  }
  
  async function gougleSearch(q) {
    try {
      const webPromise = queryServers('web', q);
      const imagePromise = queryServers('image', q);
      const videoPromise = queryServers('video', q);
  
      const results = await Promise.allSettled([webPromise, imagePromise, videoPromise]);
      const validResults = results.filter((result) => result.status === 'fulfilled');
  
      if (validResults.length === 3) {
        const [web, image, video] = validResults.map((result) => result.value);
        return { web, image, video };
      } else {
        throw new Error('timeout');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
