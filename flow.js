function flow(funcs){
    return function (...args) {
        if (args.length > 1) {
            args = [arr[0](...args)];
        }
        return funcs.reduce((acc, fn) => fn(acc), args[0]);
    };};
}