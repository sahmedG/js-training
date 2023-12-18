function makeVeryDisco(word) {
    const length = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, length);
    const secondHalf = word.slice(length);
    return secondHalf + firstHalf;
  }
  
  // Process command line arguments
  const inputArg = process.argv[2];
  
  // Check if an argument is provided
  if (!inputArg) {
    console.error('Please provide an argument.');
    process.exit(1);
  }
  
  // Split the input into words
  const words = inputArg.split(' ');
  
  // Make each word very disco
  const veryDiscoWords = words.map(makeVeryDisco);
  
  // Display the result
  console.log(veryDiscoWords.join(' '));