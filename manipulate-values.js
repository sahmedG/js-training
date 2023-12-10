function filterValues(object, callback) {
    let result = {};
    for (let key in object) {
        if (callback(object[key])) {
            result[key] = object[key];
        }
    }
    return result;
}

function mapValues(object, callback) {
    let result = {};
    for (let key in object) {
        result[key] = callback(object[key]);
    }
    return result;
}

function reduceValues(object, callback, account) {
    if (account === undefined) {
        account = 0;
    }
    for (let key in object) {
        account = callback(account, object[key]);
    }
    return account;
}