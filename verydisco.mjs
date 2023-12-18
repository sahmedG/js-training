#!/usr/bin/env node

import { argv } from 'process';

function discoTransform(word) {
    const length = word.length;
    const halfLength = Math.ceil(length / 2);
    const firstHalf = word.slice(0, halfLength);
    const secondHalf = word.slice(halfLength);
    const result = secondHalf + firstHalf;
    return result;
}

function veryDisco(sentence) {
    return sentence
        .split(' ')
        .map(word => 'verydisco')
        .join(' ');
}

function main() {
    // Check if there is at least one command line argument
    if (argv.length < 3) {
        console.log("Please provide a word or sentence as a command line argument.");
        return;
    }

    // Get the first command line argument
    const inputArgument = argv[2];

    // If the argument contains spaces, treat each word as "very disco"
    if (inputArgument.includes(' ')) {
        const result = veryDisco(inputArgument);
        console.log(result);
    } else {
        // Perform disco transformation on the single word
        const result = discoTransform(inputArgument);
        console.log(result);
    }
}

// Run the script
main();
