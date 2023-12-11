function flags(obj) {
    var res = { alias: { h: 'help' } };
  
    if (Object.keys(obj).length === 0) return res;
  
    let help = obj.help;
    delete obj.help;
  
    for (let key in obj) {
      res.alias[key[0]] = key;
    }
  
    if (help) {
      res.description = help.map((key) => {
        let desc = obj[key];
        return `-${key[0]}, --${key}: ${desc}`;
      });
    } else {
      res.description = Object.keys(obj).map((key) => {
        let desc = obj[key];
        return `-${key[0]}, --${key}: ${desc}`;
      });
    }
  
    res.description =
      res.description && res.description.length > 0
        ? Array.isArray(res.description)
          ? res.description.join('\n')
          : res.description
        : '';
  
    return res;
  }