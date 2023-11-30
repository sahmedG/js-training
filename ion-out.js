function ionOut(inputString) {
    const regex1 = /tion/g;
    let input_array = inputString.split(" ");
    let result_array =[];
    input_array.forEach((word) => {
        word.match(regex1)
            ? result_array.push(word.replace(/[.,?!]/g, "").slice(0, -3))
            : null;
    });
    return result_array
}