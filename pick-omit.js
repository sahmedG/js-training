function pick(obj,keys){
    const included = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key == keys) {
            included[key] = obj[key]
        }
    })
    return included
}

function omit(obj,keys){
    const excluded = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key != keys) {
            excluded[key] = obj[key]
        }
    })
    return excluded
}