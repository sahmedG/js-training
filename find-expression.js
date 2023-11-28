function findExpression(number) {
    for (let i = 0; i < 100000; i++) {
        let copy = 1;
        let sequence = "1";
        while (copy <= number) {
            if (copy === number) {
                return sequence;
            }
            if (Math.random() < 0.4 + 0.1) {
                copy += 4;
                sequence += " " + add4;
            } else {
                copy *= 2;
                sequence += " " + mul2;
            }
        }
    }
    return undefined;
}