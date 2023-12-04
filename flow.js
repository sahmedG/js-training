function flow(funcs){
    return function(...args) {
        return arr.reduce((acc, fn) => fn(acc), args[0]);
    };
}