const vowels = /aeiouAEIOU/g;

function vowelDots(inputString) {
    const resstr = inputString.replace(vowels,match => match + '.');
    return resstr;
}