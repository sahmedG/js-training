#!/usr/bin/env node

const discofy = (word) => {
    const length = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, length);
    const secondHalf = word.slice(length);
    return secondHalf + firstHalf;
  };
  
  const veryDisco = (input) => {
    const words = input.split(' ');
    const discoWords = words.map(discofy);
  
    const result = discoWords.join(' ');
    console.log(result);
  };
//   / ' (🕺)'
  const input = process.argv.slice(2).join(' ');
  
  if (input) {
    veryDisco(input);
  } else {
    console.log('Please provide a word or sentence as an argument.');
  }
  