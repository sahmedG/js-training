function groupPrice(inputString) {
    const priceRegex = /([A-Za-z$]+)(\d+\.\d{2})/;
    const matches = inputString.match(priceRegex);
    let result =[];
    if(!matches){
        return result;
    };
    matches.forEach((price,i)=>{
        result.push([price]);
        result[i].push(price.match(priceRegex)[0]);
        result[i].push(price.match(priceRegex)[1]);
    });

    return pricebreak
}