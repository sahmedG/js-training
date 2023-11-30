const vowels = /aeiouAEIOU/gi;

function vowelDots(inputString) {
    const resstr = inputString.replace(vowels,match => match + '.');
    return resstr;
}