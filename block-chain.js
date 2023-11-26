function blockChain(data, prev = { index: 0, hash: '0' }) {
    const index = prev.index + 1;
    const blockData = JSON.stringify(data);
    const hash = hashCode(`${index}${prev.hash}${blockData}`);

    const block = {
        index,
        hash,
        data,
        prev,
        chain: function (nextData) {
            return blockChain(nextData, block);
        },
    };

    return block;
}
