function flow(funcs){
    return function(...args) {
        return funcs.reduce((acc, fn) => fn(acc), args[0]);
    };
}