function sameAmount(inputString,regex1,regex2) {
    regex1 = new RegExp(regex1,"g");
    regex2 = new RegExp(regex2,"g");
    let result1 = inputString.match(regex1);
    let result2 = inputString.match(regex2);
    return result1 !== null && result2 !== null && result1.length === result2.length;
}