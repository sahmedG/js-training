function invert(obj) {
    const invert = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            invert[obj[key]] = key;
        }
    }
    return invert;
}