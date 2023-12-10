function fusoin(object1, object2) {
    var combined = {};
    for (var key in object1) {
        if (!object1.hasOwnProperty(key)) continue;
        if (object2.hasOwnProperty(key)) {
            if (is.obj(object1[key]) && is.obj(object2[key])) {
                combined[key] = fusion(object1[key], object2[key]);
            } else if (is.arr(object1[key]) && is.arr(object2[key])) {
                combined[key] = object1[key].concat(object2[key]);
            } else if (is.num(object1[key]) && is.num(object2[key])) {
                combined[key] = object1[key] + object2[key];
            } else if (is.str(object1[key]) && is.str(object2[key])) {
                combined[key] = object1[key] + " " + object2[key];
            } else {
                combined[key] = object2[key];
            }
        } else {
            combined[key] = object1[key];
        }
    }
    for (var key in object2) {
        if (!object2.hasOwnProperty(key)) continue;
        if (!object1.hasOwnProperty(key)) {
            combined[key] = object2[key];
        }
    }
    return combined;
}

const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";