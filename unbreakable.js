function split(string, seperator) {
    if (seperator === null) {
        seperator = ",";
    }
    var result = [];
    if (seperator === "") {
        for (var i = 0; i < string.length; i++) {
            result.push(string[i]);
        }
        return result;
    }
    var end = string.indexOf(seperator);
    while (end > -1) {
        end = string.indexOf(seperator);
        if (end === -1) {
            break;
        }
        result.push(string.slice(0, end));
        string = string.slice(end + seperator.length);
    }
    result.push(string);
    return result;
}

function join(arr, seperator) {
    if (seperator === null) {
        seperator = ",";
    }
    var result = arr[0].toString();
    for (var i = 1; i < arr.length; i++) {
        result += seperator + arr[i];
    }
    return result;
}

