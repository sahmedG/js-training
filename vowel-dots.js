const vowels = /aeiouAEIOU/gi;

function vowelDots(inputString) {
    return inputString.replace(vowels,function (v) {
    return v + '.';
});
}