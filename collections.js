function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join('');
}

function strToArr(str) {
    return str.split('');
}

function strToSet(str) {
    return new Set(str.split(''));
}

function mapToObj(map) {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(''));
}

function superTypeOf(value) {
    const type = typeof value;
    if (type === 'object') {
        if (value === null) {
            return 'null';
        } else if (Array.isArray(value)) {
            return 'Array';
        } else if (value instanceof Set) {
            return 'Set';
        } else if (value instanceof Map) {
            return 'Map';
        } else {
            return 'Object';
        }
    } else if (type === 'undefined') {
        return 'undefined';
      }
    return type.charAt(0).toUpperCase() + type.slice(1);
}

