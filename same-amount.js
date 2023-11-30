function sameAmount(inputString,regex1,regex2) {
    let result1 = inputString.match(regex1);
    let result2 = inputString.match(regex2);
    return result1 !== null && result2 !== null && result1.length === result2.length;
}