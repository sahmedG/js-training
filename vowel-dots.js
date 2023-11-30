function vowelDots(inputString) {
    var vowels = /aeiouAEIOU/g;
    const resstr = inputString.replace(vowels,match => match + '.');
    return resstr;
}