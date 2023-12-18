#!/usr/bin/env node

const discofy = (word) => {
    const length = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, length);
    const secondHalf = word.slice(length);
    return secondHalf + firstHalf;
  };
  
  const veryDisco = (input) => {
    const result = discofy(input);
    console.log(result);
  };
  
  const input = process.argv[2];
  
  if (input) {
    veryDisco(input);
  } else {
    console.log('Please provide a word or sentence as an argument.');
  }
  