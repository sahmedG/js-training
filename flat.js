function flat(array, depth) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (depth === 0) {
        return array;
    }
    if (depth === undefined) {
        depth = 1;
    }
    return array.reduce((accuracy, current) => {
        return accuracy.concat(flat(current, depth - 1));
    }, []);
}