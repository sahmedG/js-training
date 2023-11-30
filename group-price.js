function groupPrice(str) {
    let matches = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g);
    let result = [];
    if (matches === null) return result;
    matches.forEach((price, i) => {
        result.push([price]);
        result[i].push(price.match(/[0-9]+/g)[0]);
        result[i].push(price.match(/[0-9]+/g)[1]);
    });
    return result;
}