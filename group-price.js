function groupPrice(str) {
    let prices = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g);
    let res = [];
    if (prices === null) return res;
    prices.forEach((price) => {
        let [fullPrice, dollars, cents] = price.match(/[0-9]+/g);
        res.push([fullPrice, dollars, cents]);
    });
    return res;
}