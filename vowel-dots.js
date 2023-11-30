function vowelDots(inputString) {
    const vowels = /aeiouAEIOU/g;
    const resstr = inputString.replace(vowels,match => match + '.');
    return resstr;
}