const vowels = /aeiouAEIOU/gi;

function vowelDots(inputString) {
    const resstr = inputString.replace(vowels,function (v) {
    return v + '.';
});
}