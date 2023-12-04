function flow(funcs){
    return function(...args) {
        return funcs.reduce((result,func) => func(result), ...args);
    };
}