async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${encodeURIComponent(q)}`;
    const backupUrl = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
  
    return Promise.race([getJSON(url), getJSON(backupUrl)]);
  }
  
  async function gougleSearch(q) {
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    var web = queryServers('web', q),
        image = queryServers('image', q),
        video = queryServers('video', q);

    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) {
        throw res;
    }
    return { image: res[1], video: res[2], web: res[0] };
}
