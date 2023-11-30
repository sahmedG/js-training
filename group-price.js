function groupPrice(inputString) {
    const priceRegex = /([A-Za-z$]+)(\d+\.\d{2})/;
    const match = inputString.match(priceRegex);

    if(!match){
        return [];
    }

    const [,currency,fullprice] = match;
    const [dollars,cents] = fullprice.split('.');
    const pricebreak = [[`${currency}${fullprice}`,dollars,cents]];

    return pricebreak
}