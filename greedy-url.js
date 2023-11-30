function getURL(dataSet) {
    const regex = /\bhttps?:\/\/\S+\b/g;
    const urls = dataSet.match(regex) || [];
    return urls;
  }
  
  function greedyQuery(dataSet) {
    const regex = /\bhttps?:\/\/\S*\?(?:\S+&){2,}\S+\b/g;
    const urls = dataSet.match(regex) || [];
    return urls;
  }
  
  function notSoGreedy(dataSet) {
    const regex = /\bhttps?:\/\/\S*\?(?:\S+&){1,2}\S+\b/g;
    const urls = dataSet.match(regex) || [];
    return urls;
  }